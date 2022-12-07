import * as THREE from '../../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const donutCanvas = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({canvas: donutCanvas});
renderer.setSize( window.innerWidth, window.innerHeight );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, donutCanvas.clientWidth / donutCanvas.clientHeight, 0.1, 1000);

/** make scene and canvas see through*/
scene.background = null;

/** ambient light */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);


/** add light */
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0.2, 0.3, 0.5);
scene.add(light);

/** load glb file from ../models/donut.glb */
const loader = new GLTFLoader();
loader.load('../models/donut.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

/** set camera position */
camera.position.z = 0.5;
camera.position.y = 0.3;
/**aim camera at center */
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    /**rotate donut on an steady angle */
    

    scene.rotation.y += 0.001;

    /**rotate cube */
    renderer.render(scene, camera);
}

animate();
