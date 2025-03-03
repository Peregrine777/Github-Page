import{C as F,c as He,d as E,W as oe,H as ne,U as W,a as A,V as K,A as $e,M as Le,F as Qe,e as fe,f as Ee,g as Je,h as et,i as tt,N as Be,j as q,k as at,l as it,Z as Ae,m as ze,n as st,o as rt,p as ot,R as nt,s as lt,t as je,u as ht,S as ut,G as ct,v as mt,w as dt,x as ft,B as pt,b as vt,T as gt,O as ke,y as Ve,D as xt,z as Mt,E as _e,I as Tt}from"./index-Bnm5RBCl.js";import{Landscape as Ct}from"./landscape-DbDn1J1F.js";import{City as bt}from"./City-Bygalz_h.js";import{Environment as wt}from"./Environment-KckQum6Z.js";import{W as Ie,V as Ze,B as Oe,P as St}from"./Fragment-DgXTwJ0G.js";import"./Building-DG6dX7z8.js";import"./BuildingBlock-CjzO6Gh7.js";const yt={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new F(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class X extends He{constructor(e,t,a,i){super(),this.strength=t!==void 0?t:1,this.radius=a,this.threshold=i,this.resolution=e!==void 0?new E(e.x,e.y):new E(256,256),this.clearColor=new F(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new oe(s,r,{type:ne}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const b=new oe(s,r,{type:ne});b.texture.name="UnrealBloomPass.h"+p,b.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(b);const g=new oe(s,r,{type:ne});g.texture.name="UnrealBloomPass.v"+p,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),r=Math.round(r/2)}const o=yt;this.highPassUniforms=W.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new A({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const f=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(f[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new E(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=fe;this.copyUniforms=W.clone(h.uniforms),this.blendMaterial=new A({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$e,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new F,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new Qe(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(a,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(a,i),this.renderTargetsVertical[s].setSize(a,i),this.separableBlurMaterials[s].uniforms.invSize.value=new E(1/a,1/i),a=Math.round(a/2),i=Math.round(i/2)}render(e,t,a,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=a.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this.fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[f].uniforms.direction.value=X.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=X.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[f];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(a),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(e*e))/e);return new A({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new E(.5,.5)},direction:{value:new E(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new A({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}X.BlurDirectionX=new E(1,0);X.BlurDirectionY=new E(0,1);class Dt{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,a){return e[0]*t+e[1]*a}dot3(e,t,a,i){return e[0]*t+e[1]*a+e[2]*i}dot4(e,t,a,i,s){return e[0]*t+e[1]*a+e[2]*i+e[3]*s}noise(e,t){let a,i,s;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,f=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,p=(f+l)*h,b=f-p,g=l-p,y=e-b,P=t-g;let U,V;y>P?(U=1,V=0):(U=0,V=1);const T=y-U+h,C=P-V+h,c=y-1+2*h,M=P-1+2*h,x=f&255,w=l&255,R=this.perm[x+this.perm[w]]%12,n=this.perm[x+U+this.perm[w+V]]%12,m=this.perm[x+1+this.perm[w+1]]%12;let d=.5-y*y-P*P;d<0?a=0:(d*=d,a=d*d*this.dot(this.grad3[R],y,P));let v=.5-T*T-C*C;v<0?i=0:(v*=v,i=v*v*this.dot(this.grad3[n],T,C));let D=.5-c*c-M*M;return D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[m],c,M)),70*(a+i+s)}noise3d(e,t,a){let i,s,r,o;const l=(e+t+a)*.3333333333333333,h=Math.floor(e+l),p=Math.floor(t+l),b=Math.floor(a+l),g=1/6,y=(h+p+b)*g,P=h-y,U=p-y,V=b-y,T=e-P,C=t-U,c=a-V;let M,x,w,R,n,m;T>=C?C>=c?(M=1,x=0,w=0,R=1,n=1,m=0):T>=c?(M=1,x=0,w=0,R=1,n=0,m=1):(M=0,x=0,w=1,R=1,n=0,m=1):C<c?(M=0,x=0,w=1,R=0,n=1,m=1):T<c?(M=0,x=1,w=0,R=0,n=1,m=1):(M=0,x=1,w=0,R=1,n=1,m=0);const d=T-M+g,v=C-x+g,D=c-w+g,O=T-R+2*g,H=C-n+2*g,L=c-m+2*g,Q=T-1+3*g,z=C-1+3*g,S=c-1+3*g,B=h&255,N=p&255,u=b&255,G=this.perm[B+this.perm[N+this.perm[u]]]%12,le=this.perm[B+M+this.perm[N+x+this.perm[u+w]]]%12,he=this.perm[B+R+this.perm[N+n+this.perm[u+m]]]%12,ue=this.perm[B+1+this.perm[N+1+this.perm[u+1]]]%12;let j=.6-T*T-C*C-c*c;j<0?i=0:(j*=j,i=j*j*this.dot3(this.grad3[G],T,C,c));let k=.6-d*d-v*v-D*D;k<0?s=0:(k*=k,s=k*k*this.dot3(this.grad3[le],d,v,D));let _=.6-O*O-H*H-L*L;_<0?r=0:(_*=_,r=_*_*this.dot3(this.grad3[he],O,H,L));let I=.6-Q*Q-z*z-S*S;return I<0?o=0:(I*=I,o=I*I*this.dot3(this.grad3[ue],Q,z,S)),32*(i+s+r+o)}noise4d(e,t,a,i){const s=this.grad4,r=this.simplex,o=this.perm,f=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,p,b,g,y;const P=(e+t+a+i)*f,U=Math.floor(e+P),V=Math.floor(t+P),T=Math.floor(a+P),C=Math.floor(i+P),c=(U+V+T+C)*l,M=U-c,x=V-c,w=T-c,R=C-c,n=e-M,m=t-x,d=a-w,v=i-R,D=n>m?32:0,O=n>d?16:0,H=m>d?8:0,L=n>v?4:0,Q=m>v?2:0,z=d>v?1:0,S=D+O+H+L+Q+z,B=r[S][0]>=3?1:0,N=r[S][1]>=3?1:0,u=r[S][2]>=3?1:0,G=r[S][3]>=3?1:0,le=r[S][0]>=2?1:0,he=r[S][1]>=2?1:0,ue=r[S][2]>=2?1:0,j=r[S][3]>=2?1:0,k=r[S][0]>=1?1:0,_=r[S][1]>=1?1:0,I=r[S][2]>=1?1:0,Ne=r[S][3]>=1?1:0,pe=n-B+l,ve=m-N+l,ge=d-u+l,xe=v-G+l,Me=n-le+2*l,Te=m-he+2*l,Ce=d-ue+2*l,be=v-j+2*l,we=n-k+3*l,Se=m-_+3*l,ye=d-I+3*l,De=v-Ne+3*l,Pe=n-1+4*l,Re=m-1+4*l,Ue=d-1+4*l,Fe=v-1+4*l,Y=U&255,$=V&255,J=T&255,ee=C&255,Ge=o[Y+o[$+o[J+o[ee]]]]%32,qe=o[Y+B+o[$+N+o[J+u+o[ee+G]]]]%32,Ke=o[Y+le+o[$+he+o[J+ue+o[ee+j]]]]%32,Xe=o[Y+k+o[$+_+o[J+I+o[ee+Ne]]]]%32,Ye=o[Y+1+o[$+1+o[J+1+o[ee+1]]]]%32;let te=.6-n*n-m*m-d*d-v*v;te<0?h=0:(te*=te,h=te*te*this.dot4(s[Ge],n,m,d,v));let ae=.6-pe*pe-ve*ve-ge*ge-xe*xe;ae<0?p=0:(ae*=ae,p=ae*ae*this.dot4(s[qe],pe,ve,ge,xe));let ie=.6-Me*Me-Te*Te-Ce*Ce-be*be;ie<0?b=0:(ie*=ie,b=ie*ie*this.dot4(s[Ke],Me,Te,Ce,be));let se=.6-we*we-Se*Se-ye*ye-De*De;se<0?g=0:(se*=se,g=se*se*this.dot4(s[Xe],we,Se,ye,De));let re=.6-Pe*Pe-Re*Re-Ue*Ue-Fe*Fe;return re<0?y=0:(re*=re,y=re*re*this.dot4(s[Ye],Pe,Re,Ue,Fe)),27*(h+p+b+g+y)}}const ce={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new E},cameraProjectionMatrix:{value:new Ee},cameraInverseProjectionMatrix:{value:new Ee},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},me={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},de={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new E}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Z extends He{constructor(e,t,a,i,s=32){super(),this.width=a!==void 0?a:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const r=new Je;r.format=et,r.type=tt,this.normalRenderTarget=new oe(this.width,this.height,{minFilter:Be,magFilter:Be,type:ne,depthTexture:r}),this.ssaoRenderTarget=new oe(this.width,this.height,{type:ne}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new A({defines:Object.assign({},ce.defines),uniforms:W.clone(ce.uniforms),vertexShader:ce.vertexShader,fragmentShader:ce.fragmentShader,blending:q}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new at,this.normalMaterial.blending=q,this.blurMaterial=new A({defines:Object.assign({},de.defines),uniforms:W.clone(de.uniforms),vertexShader:de.vertexShader,fragmentShader:de.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new A({defines:Object.assign({},me.defines),uniforms:W.clone(me.uniforms),vertexShader:me.vertexShader,fragmentShader:me.fragmentShader,blending:q}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new A({uniforms:W.clone(fe.uniforms),vertexShader:fe.vertexShader,fragmentShader:fe.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:it,blendDst:Ae,blendEquation:ze,blendSrcAlpha:st,blendDstAlpha:Ae,blendEquationAlpha:ze}),this.fsQuad=new Qe(null),this.originalClearColor=new F}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,a){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Z.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=q,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:a);break;case Z.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=q,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:a);break;case Z.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:a);break;case Z.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=q,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:a);break;case Z.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:a);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,a,i,s){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,a,i,s){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let a=0;a<e;a++){const i=new K;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let s=a/e;s=ht.lerp(.1,1,s*s),i.multiplyScalar(s),t.push(i)}}generateRandomKernelRotations(){const a=new Dt,i=4*4,s=new Float32Array(i);for(let r=0;r<i;r++){const o=Math.random()*2-1,f=Math.random()*2-1,l=0;s[r]=a.noise3d(o,f,l)}this.noiseTexture=new ot(s,4,4,nt,lt),this.noiseTexture.wrapS=je,this.noiseTexture.wrapT=je,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(a){t.set(a,a.visible),(a.isPoints||a.isLine)&&(a.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(a){const i=t.get(a);a.visible=i}),t.clear()}}Z.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};class Bt extends ut{constructor(e){super(e),console.log("Reclaimer Scene created with params:",e),this.scene.name="Reclaimer",this.gui=e.gui||new ct,this.frame=0,this.reclaimFrame=0,this.isReclaiming=!1,this.cameraVals={FOV:60},this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mt,this.composer.addPass(new dt(this.scene,this.camera)),this.composer.addPass(new Z(this.scene,this.camera,0,0)),this.composer.addPass(new X({x:screen.width,y:screen.height},.7,0,.85)),this.renderer.toneMapping=ft,this.renderer.toneMappingExposure=1.4,this.physicsworld=new Ie({gravity:new Ze(0,-9.82,0),quatNormalizeFast:!0,quatNormalizeSkip:8}),console.log("Rec renderer:",this.renderer),console.log("Rec Cam:",this.camera);const t=new Ie({gravity:new Ze(0,-9.82,0),quatNormalizeFast:!0,quatNormalizeSkip:8});function a(){const u=new Oe({type:Oe.STATIC,shape:new St});return u.quaternion.setFromEuler(-Math.PI/2,0,0),u.position.set(0,.2,0),u}t.addBody(a());const i=new pt,s=new Le({color:65280}),r=new vt(i,s);this.scene.add(r),this.sceneVals={size:20,sunHelper:!1},this.landVals={octaves:8,persistence:.5,lacunarity:2,scale:1,height:100,falloff:.1,speed:5e-4,noiseType:"Perlin",noise:"fbm",iterations:3,resolution:511,enableFog:!0,enableShadows:!0,heightMap:new gt};let o={elevation:7,azimuth:180};this.uiVals={HeightTexture:!0},this.environment=new wt(this.scene,this.renderer);let f=this.environment.sun,l=[],h={scene:this.scene,physicsworld:t,environment:this.environment,sunDirection:f,frame:this.frame,reclaimFrame:this.reclaimFrame,materialsArray:l,renderer:this.renderer},p=new ke;this.scene.add(p);let b=new ke;b.name="land",this.scene.add(b),new Ct(this.sceneVals.size,this.landVals,f,h).ChunkManager(b),h.land=b;let g=new F(.25,.25,.5),y=new Ve().load("assets/Textures/GlassWindow/Glass_Window_003_basecolor.jpg"),P=new Ve().load("assets/Textures/GlassWindow/Glass_Window_003_normal.jpg"),U=new F(14053929),V=new Ve().load("assets/Textures/Bricks/Brick_Wall_019_basecolor.jpg"),T=new F(16636755),C=new F(.9,.05,.05),c=new A({side:xt,uniforms:W.merge([Mt.fog])});c.uniforms={lightDirection:{value:h.sunDirection},baseColor:{value:g},textureMap:{value:y},normalMap:{value:P},frame:{value:h.scene.frame},type:{value:3},roofColor:{value:C}},c.vertexShader=_e.vertexShader,c.fragmentShader=_e.fragmentShader,c.needsUpdate=!0;let M=c.clone();M.uniforms.lightDirection.value=h.sunDirection,M.uniforms.baseColor.value=U,M.uniforms.textureMap.value=V,M.uniforms.type.value=2,M.needsUpdate=!0;let x=c.clone();x.uniforms.baseColor.value=T,x.uniforms.textureMap.value=null,x.uniforms.type.value=1,x.uniforms.lightDirection.value=h.sunDirection,x.needsUpdate=!0;let w=c.clone();w.uniforms.baseColor.value=new F(1,1,0),h.materialsArray.push(null),h.materialsArray.push(x),h.materialsArray.push(M),h.materialsArray.push(c),h.materialsArray.push(w);let R={Generate_City:function(){t.addBody(a()),city=new bt(p,sceneVals.size,h)}};function n(){b.clear(),p.clear(),t.bodies.forEach(G=>{t.removeBody(G),t.step()})}this.gui.add(this.sceneVals,"size",10,20,2).onChange(n),this.gui.add(this.cameraVals,"FOV",20,90,1).onChange(function(u){this.camera.fov=u,this.camera.updateProjectionMatrix()});let m=this.gui.addFolder("Landscape"),d=m.addFolder("FBM");d.add(this.landVals,"octaves",2,16,2).onChange(n),d.add(this.landVals,"persistence",.1,1,.1).onChange(n),d.add(this.landVals,"lacunarity",.1,4,.1).onChange(n),d.add(this.landVals,"scale",.1,4,.1).onChange(n),d.add(this.landVals,"height",10,500,5).onChange(n),m.add(this.landVals,"falloff",-.1,.3,.1).onChange(n),m.add(this.landVals,"iterations",1,16,1).onChange(n),m.add(this.landVals,"resolution",255,1279,255).onChange(n),m.add(this.landVals,"enableFog","false","true").onChange(n);let v=this.gui.addFolder("City");v.add(R,"Generate_City"),v.open();let D=v.addFolder("Color Palette"),O={SkyScraper:g},H={Apartment:U},L={House:T},Q={Roof:C};D.addColor(O,"SkyScraper").onChange(function(u){c.uniforms.baseColor.value=new F(u.r/255,u.g/255,u.b/255)}),D.addColor(H,"Apartment").onChange(function(u){M.uniforms.baseColor.value=new F(u.r/255,u.g/255,u.b/255)}),D.addColor(L,"House").onChange(function(u){x.uniforms.baseColor.value=new F(u.r/255,u.g/255,u.b/255)}),D.addColor(Q,"Roof").onChange(function(u){x.uniforms.roofColor.value=new F(u.r/255,u.g/255,u.b/255)});const z=this.gui.addFolder("Sky");z.add(o,"elevation",0,90,.1).onChange(N),z.add(o,"azimuth",-180,180,.1).onChange(N),this.gui.addFolder("UI").add(this.uiVals,"HeightTexture").onChange(B);function B(){this.uiVals.HeightTexture==!1?heightGradient.style.visibility="hidden":heightGradient.style.visibility="visible"}function N(){this.environment.updateSun(this.scene,this.renderer,o)}console.log("Reclaimer final:",this)}update(e){Tt(e),this.environment.update()}}export{Bt as sc_Reclaimer};
//# sourceMappingURL=Reclaimer-pLWv8uB7.js.map
