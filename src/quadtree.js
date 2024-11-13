import * as THREE from 'three';


/**
 * Creates a quadtree data structure.
 * @description A quadtree is a tree data structure in which each internal node has exactly four children, for spatial partitioning.
 * @param {Object} params Parameters for the quadtree.
 * @param {Number} params.size The size of the quadtree.
 * @param {Number} params.min_node_size The minimum size of a node in the quadtree.
 * @param {Number} params.cell_resolution The resolution of the quadtree cells.
 * @param {THREE.Matrix4} params.localToWorld The local-to-world matrix for the quadtree.
 * @example
 * const quadtree = new QuadTree({
 *  size: 100,
 *  min_node_size: 1,
 *  cell_resolution: 16,
 *  localToWorld: new THREE.Matrix4()
 * });
 * @returns {QuadTree}
 */
export const quadtree = (function() {
  /**
   * Creates a flat quadtree data structure. 
   * @description A flat quadtree is a quadtree that is flat on a plane (e.g., a 2D plane).
   */
  class FlatQuadTree {
    constructor(params) {
      this._params = params;
      this._quadtree = new QuadTree({
        size: params.size,
        min_node_size: params.min_node_size,
        cell_resolution: params.cell_resolution,
        localToWorld: new THREE.Matrix4(), // Identity matrix for flat plane
      });
    }

    GetChildren() {
      return this._quadtree.GetChildren();
    }

    Insert(pos) {
      this._quadtree.Insert(pos);
    }
  }

  /**
   * Creates a quadtree data structure.
   * @description A quadtree is a tree data structure in which each internal node has exactly four children, for spatial partitioning.
  */
  class QuadTree {
    constructor(params) {
      const s = params.size;
      const b = new THREE.Box3(
        new THREE.Vector3(-s / 2, 0, -s / 2),
        new THREE.Vector3(s / 2, 0, s / 2)
      );
      this._root = {
        bounds: b,
        children: [],
        center: b.getCenter(new THREE.Vector3()),
        size: b.getSize(new THREE.Vector3()),
        depth: 0,  // Root node starts at depth 0
        root: true,
      };

      this._params = params;
    }

    GetChildren() {
      const children = [];
      this._GetChildren(this._root, children);
      return children;
    }

    _GetChildren(node, target) {
      if (node.children.length === 0) {
        target.push(node);
        return;
      }

      for (let c of node.children) {
        this._GetChildren(c, target);
      }
    }

    Insert(pos) {
      this._Insert(this._root, pos);
    }

    _Insert(child, pos) {
      const distToChild = this._DistanceToChild(child, pos);

      if (distToChild < child.size.x * 1.0 && child.size.x > this._params.min_node_size) {
        child.children = this._CreateChildren(child, child.depth + 1);

        for (let c of child.children) {
          this._Insert(c, pos);
        }
      }
    }

    _DistanceToChild(child, pos) {
      return child.center.distanceTo(new THREE.Vector3(pos.x, pos.y, pos.z));
    }

    _CreateChildren(child, depth) {
      const midpoint = child.bounds.getCenter(new THREE.Vector3());
  
      const b1 = new THREE.Box3(
        new THREE.Vector3(child.bounds.min.x, 0, child.bounds.min.z),
        new THREE.Vector3(midpoint.x, 0, midpoint.z)
      );
      const b2 = new THREE.Box3(
        new THREE.Vector3(midpoint.x, 0, child.bounds.min.z),
        new THREE.Vector3(child.bounds.max.x, 0, midpoint.z)
      );
      const b3 = new THREE.Box3(
        new THREE.Vector3(child.bounds.min.x, 0, midpoint.z),
        new THREE.Vector3(midpoint.x, 0, child.bounds.max.z)
      );
      const b4 = new THREE.Box3(
        new THREE.Vector3(midpoint.x, 0, midpoint.z),
        new THREE.Vector3(child.bounds.max.x, 0, child.bounds.max.z)
      );
  
      return [b1, b2, b3, b4].map(b => ({
        bounds: b,
        children: [],
        center: b.getCenter(new THREE.Vector3()),
        size: b.getSize(new THREE.Vector3()),
        depth: depth, // Assign depth to each child node
      }));
    }
  }

  return {
    FlatQuadTree: FlatQuadTree,  // Add this as an option for flat plane quadtree
    QuadTree: QuadTree,
  }
})();