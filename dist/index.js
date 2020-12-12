/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGL1Renderer, WebGLCubeRenderTarget, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/js/ARButton.ts":
/*!****************************!*\
  !*** ./src/js/ARButton.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WebXR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebXR */ \"./src/js/WebXR.ts\");\n\nclass ARButton {\n    constructor(renderer, scene, sessionInit = {}) {\n        this.renderer = renderer;\n        this.scene = scene;\n        this.sessionInit = sessionInit;\n        this.button = document.createElement('button');\n    }\n    async createButton() {\n        if ('xr' in navigator === false) {\n            const message = document.createElement('a');\n            message.classList.add('not-available');\n            message.href = 'https://immersiveweb.dev/';\n            message.innerHTML = 'WEBXR NOT AVAILABLE';\n            return message;\n        }\n        this.button.classList.add('ar-button');\n        // this.button.style.display = 'none'\n        this.button.textContent = 'START AR';\n        const isSupported = await _WebXR__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isSupported();\n        if (!isSupported)\n            return this.button;\n        const webXR = new _WebXR__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.renderer, this.sessionInit, this.scene);\n        this.button.onclick = () => webXR.setSession();\n        return this.button;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ARButton);\n\n\n//# sourceURL=webpack:///./src/js/ARButton.ts?");

/***/ }),

/***/ "./src/js/Navigator.js":
/*!*****************************!*\
  !*** ./src/js/Navigator.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst XR = navigator.xr\n/* harmony default export */ __webpack_exports__[\"default\"] = (XR);\n\n\n//# sourceURL=webpack:///./src/js/Navigator.js?");

/***/ }),

/***/ "./src/js/Reticle.ts":
/*!***************************!*\
  !*** ./src/js/Reticle.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass Reticle {\n    constructor() {\n        this.reticle = null;\n        this.display = false;\n    }\n    create() {\n        const ringGeometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"RingGeometry\"](0.03, 0.05, 50);\n        ringGeometry.rotateX(-0.5 * Math.PI);\n        const material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({ color: 0xffff00, side: three__WEBPACK_IMPORTED_MODULE_0__[\"DoubleSide\"] });\n        this.reticle = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](ringGeometry, material);\n        this.reticle.name = 'reticle';\n        this.display = true;\n        return this.reticle;\n    }\n    updateMatrix(pose) {\n        if (!this.reticle)\n            return;\n        this.reticle.position.set(pose.transform.position.x, pose.transform.position.y, pose.transform.position.z);\n        this.reticle.quaternion.set(pose.transform.orientation.x, pose.transform.orientation.y, pose.transform.orientation.z, pose.transform.orientation.w);\n        this.reticle.updateMatrix();\n    }\n    remove(scene) {\n        const reticle = scene.getObjectByName('reticle');\n        reticle && scene.remove(reticle);\n        this.display = false;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reticle);\n\n\n//# sourceURL=webpack:///./src/js/Reticle.ts?");

/***/ }),

/***/ "./src/js/WebXR.ts":
/*!*************************!*\
  !*** ./src/js/WebXR.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigator */ \"./src/js/Navigator.js\");\n/* harmony import */ var _Reticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reticle */ \"./src/js/Reticle.ts\");\n\n\nclass WebXR {\n    constructor(renderer, sessionInit, scene) {\n        this.currentSession = null;\n        this.renderer = renderer;\n        this.sessionInit = sessionInit;\n        this.scene = scene;\n        this.session = null;\n        this.xrHitTestSource = null;\n        this.xrRefSpace = null;\n        this.xrPlaneObject = null;\n        this.reticle = new _Reticle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n    static isSupported() {\n        return _Navigator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isSessionSupported('immersive-ar');\n    }\n    async setSession() {\n        if (this.currentSession) {\n            this.currentSession.end();\n            return;\n        }\n        this.session = await _Navigator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestSession('immersive-ar', this.sessionInit);\n        this.onSessionStarted();\n        if (!this.session)\n            return;\n        const refSpace = await this.session.requestReferenceSpace('viewer');\n        this.xrHitTestSource = await this.session.requestHitTestSource({ space: refSpace });\n        this.xrRefSpace = await this.session.requestReferenceSpace('local');\n        this.session.requestAnimationFrame((_, frame) => this.onXRFrame(_, frame));\n    }\n    onSessionStarted() {\n        if (!this.session)\n            return;\n        this.session.addEventListener('end', this.onSessionEnded);\n        this.renderer.xr.setReferenceSpaceType('local');\n        this.renderer.xr.setSession(this.session);\n        this.currentSession = this.session;\n        const reticle = this.reticle.create();\n        this.scene.add(reticle);\n    }\n    onSessionEnded() {\n        const renderDom = document.getElementById('renderer');\n        renderDom && renderDom.firstChild && renderDom.removeChild(renderDom.firstChild);\n        if (!this.currentSession)\n            return;\n        this.currentSession.removeEventListener('end', this.onSessionEnded);\n        this.currentSession = null;\n    }\n    onXRFrame(_, frame) {\n        if (!this.reticle.display)\n            return;\n        this.session = frame.session;\n        let pose;\n        if (this.xrRefSpace) {\n            pose = frame.getViewerPose(this.xrRefSpace);\n        }\n        if (this.xrHitTestSource && pose && this.xrRefSpace) {\n            let hitTestResults = frame.getHitTestResults(this.xrHitTestSource);\n            if (hitTestResults.length > 0) {\n                let pose = hitTestResults[0].getPose(this.xrRefSpace);\n                if (!pose)\n                    return;\n                const transform = pose.transform;\n                console.log(transform.position);\n                console.log(transform.orientation);\n                this.reticle.updateMatrix(pose);\n            }\n        }\n        this.session.requestAnimationFrame((_, frame) => this.onXRFrame(_, frame));\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebXR);\n\n\n//# sourceURL=webpack:///./src/js/WebXR.ts?");

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ARButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARButton */ \"./src/js/ARButton.ts\");\n\n\nclass ARObject {\n    constructor() {\n        const fov = 70;\n        const aspect = window.innerWidth / window.innerHeight;\n        const near = 0.01;\n        const far = 20;\n        this.aspect = aspect;\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](fov, aspect, near, far);\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({ antialias: true, alpha: true });\n        this.controller = new three__WEBPACK_IMPORTED_MODULE_0__[\"Group\"]();\n    }\n    async init() {\n        this.renderer.setPixelRatio(window.devicePixelRatio);\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.xr.enabled = true;\n        // this.renderer.shadowMap.enabled = true\n        // this.renderer.shadowMap.autoUpdate = true\n        // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap\n        const renderDom = document.getElementById('renderer');\n        renderDom && renderDom.appendChild(this.renderer.domElement);\n        // const helper = new THREE.CameraHelper(light.shadow.camera)\n        // this.scene.add(helper)\n        const arButton = new _ARButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.renderer, this.scene, {\n            requiredFeatures: ['local', 'hit-test']\n        });\n        const targetDom = document.getElementById('webAR');\n        targetDom && targetDom.appendChild(await arButton.createButton());\n        window.addEventListener('resize', () => {\n            this.camera.aspect = this.aspect;\n            this.camera.updateProjectionMatrix();\n            this.renderer.setSize(window.innerWidth, window.innerHeight);\n        }, false);\n        this.controller = this.renderer.xr.getController(0);\n        this.controller.addEventListener('selectend', () => {\n            this.controller.userData.isSelecting = true;\n        });\n        this.animate();\n    }\n    animate() {\n        this.renderer.setAnimationLoop(() => this.renderer.render(this.scene, this.camera));\n    }\n}\nconst arObject = new ARObject();\narObject.init();\n\n\n//# sourceURL=webpack:///./src/js/index.ts?");

/***/ })

/******/ });