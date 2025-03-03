import{b as U,V as i,C as b,a5 as Q,a6 as Y,f as R,a7 as F,a8 as $,W as ee,U as z,z as k,a as I,a9 as te,B as oe,P as ae,y as ie,t as re,aa as N,u as A}from"./index-CsXghRid.js";class ne extends U{constructor(t,e={}){super(t),this.isWater=!0;const o=this,m=e.textureWidth!==void 0?e.textureWidth:512,v=e.textureHeight!==void 0?e.textureHeight:512,f=e.clipBias!==void 0?e.clipBias:0,c=e.alpha!==void 0?e.alpha:1,s=e.time!==void 0?e.time:0,h=e.waterNormals!==void 0?e.waterNormals:null,D=e.sunDirection!==void 0?e.sunDirection:new i(.70707,.70707,0),G=new b(e.sunColor!==void 0?e.sunColor:16777215),j=new b(e.waterColor!==void 0?e.waterColor:8355711),W=e.eye!==void 0?e.eye:new i(0,0,0),O=e.distortionScale!==void 0?e.distortionScale:20,H=e.side!==void 0?e.side:Q,K=e.fog!==void 0?e.fog:!1,p=new Y,d=new i,g=new i,T=new i,w=new R,C=new i(0,0,-1),u=new F,y=new i,M=new i,S=new F,P=new R,r=new $,L=new ee(m,v),E={name:"MirrorShader",uniforms:z.merge([k.fog,k.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new R},sunColor:{value:new b(8355711)},sunDirection:{value:new i(.70707,.70707,0)},eye:{value:new i},waterColor:{value:new b(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},n=new I({name:E.name,uniforms:z.clone(E.uniforms),vertexShader:E.vertexShader,fragmentShader:E.fragmentShader,lights:!0,side:H,fog:K});n.uniforms.mirrorSampler.value=L.texture,n.uniforms.textureMatrix.value=P,n.uniforms.alpha.value=c,n.uniforms.time.value=s,n.uniforms.normalSampler.value=h,n.uniforms.sunColor.value=G,n.uniforms.waterColor.value=j,n.uniforms.sunDirection.value=D,n.uniforms.distortionScale.value=O,n.uniforms.eye.value=W,o.material=n,o.onBeforeRender=function(a,Z,x){if(g.setFromMatrixPosition(o.matrixWorld),T.setFromMatrixPosition(x.matrixWorld),w.extractRotation(o.matrixWorld),d.set(0,0,1),d.applyMatrix4(w),y.subVectors(g,T),y.dot(d)>0)return;y.reflect(d).negate(),y.add(g),w.extractRotation(x.matrixWorld),C.set(0,0,-1),C.applyMatrix4(w),C.add(T),M.subVectors(g,C),M.reflect(d).negate(),M.add(g),r.position.copy(y),r.up.set(0,1,0),r.up.applyMatrix4(w),r.up.reflect(d),r.lookAt(M),r.far=x.far,r.updateMatrixWorld(),r.projectionMatrix.copy(x.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(r.projectionMatrix),P.multiply(r.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(d,g),p.applyMatrix4(r.matrixWorldInverse),u.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const l=r.projectionMatrix;S.x=(Math.sign(u.x)+l.elements[8])/l.elements[0],S.y=(Math.sign(u.y)+l.elements[9])/l.elements[5],S.z=-1,S.w=(1+l.elements[10])/l.elements[14],u.multiplyScalar(2/u.dot(S)),l.elements[2]=u.x,l.elements[6]=u.y,l.elements[10]=u.z+1-f,l.elements[14]=u.w,W.setFromMatrixPosition(x.matrixWorld);const X=a.getRenderTarget(),q=a.xr.enabled,J=a.shadowMap.autoUpdate;o.visible=!1,a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,a.setRenderTarget(L),a.state.buffers.depth.setMask(!0),a.autoClear===!1&&a.clear(),a.render(Z,r),o.visible=!0,a.xr.enabled=q,a.shadowMap.autoUpdate=J,a.setRenderTarget(X);const B=x.viewport;B!==void 0&&a.state.viewport(B)}}}class _ extends U{constructor(){const t=_.SkyShader,e=new I({name:t.name,uniforms:z.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:te,depthWrite:!1});super(new oe(1,1,1),e),this.isSky=!0}}_.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new i},up:{value:new i(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class le{constructor(t,e){let o,m;m=new i;const v=new ae(1e4,1e4);o=new ne(v,{textureWidth:512,textureHeight:512,waterNormals:new ie().load("assets/Textures/waternormals.jpg",function(h){h.wrapS=h.wrapT=re}),sunDirection:new i,sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:t.fog!==void 0}),o.rotation.x=-Math.PI/2,o.position.y=-10,t.add(o);const f=new _;f.scale.setScalar(1e4),t.add(f);const c=f.material.uniforms;c.turbidity.value=10,c.rayleigh.value=2,c.mieCoefficient.value=.005,c.mieDirectionalG.value=.8;let s={elevation:2,azimuth:180};this.parameters=s,new N(e),this.water=o,this.sun=m,this.sky=f,this.scene=t,this.renderer=e,this.parameters=s,this.updateSun(t,e,s)}updateSun(t,e,o){let m=this.sun,v=this.sky,f=this.water;this.parameters=o;const c=new N(e);let s;const h=A.degToRad(90-this.parameters.elevation),D=A.degToRad(this.parameters.azimuth);m.setFromSphericalCoords(1,h,D),v.material.uniforms.sunPosition.value.copy(m),f.material.uniforms.sunDirection.value.copy(m).normalize(),s!==void 0&&s.dispose(),s=c.fromScene(v),c.dispose(),t.environment=s.texture}update(){this.water.material.uniforms.time.value+=.5/60}}export{le as Environment};
//# sourceMappingURL=Environment-BqiPu-uB.js.map
