const _NUM_WORKERS = 7;

let _IDs = 0;

class WorkerThread {
  constructor(s) {
    this._worker = new Worker(s, {type: 'module'});
    this._worker.onmessage = (e) => {
      this._OnMessage(e);
    };
    this._resolve = null;
    this._id = _IDs++;
  }

  _OnMessage(e) {
    const resolve = this._resolve;
    this._resolve = null;
    resolve(e.data);
  }

  get id() {
    return this._id;
  }

  postMessage(s, resolve, transferList = []) {
    this._resolve = resolve;
    console.log('Sending message to worker:', s);
    this._worker.postMessage(s, transferList);
  }
}

class WorkerThreadPool {
  constructor(sz, entry) {
    this._workers = [...Array(sz)].map(_ => new WorkerThread(entry));
    this._free = [...this._workers];
    this._busy = {};
    this._queue = [];
  }

  get length() {
    return this._workers.length;
  }

  get Busy() {
    return this._queue.length > 0 || Object.keys(this._busy).length > 0;
  }

  Enqueue(workItem, resolve) {
    this._queue.push([workItem, resolve]);
    this._PumpQueue();
  }

  _PumpQueue() {
    while (this._free.length > 0 && this._queue.length > 0) {
      const w = this._free.pop();
      this._busy[w.id] = w;

      const [workItem, workResolve] = this._queue.shift();

      w.postMessage(workItem, (v) => {
        delete this._busy[w.id];
        this._free.push(w);
        workResolve(v);
        this._PumpQueue();
      });
    }
  }
}

export class threadTest {
  constructor() {
    this._pool = new WorkerThreadPool(_NUM_WORKERS, 'src/Terrain/threaded_worker_test.js');
  }

  async Run() {
    const workItems = [...Array(14)].map((_, i) => i);
    const results = await Promise.all(workItems.map((i) => this._DoWork(i)));
    console.log('Results:', results);
  }

  async _DoWork(i) {
    return new Promise((resolve) => {
      this._pool.Enqueue(i, resolve);
    });
  }
}