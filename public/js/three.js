import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const donutCanvas = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({canvas: donutCanvas});
renderer.setSize( window.innerWidth, window.innerHeight );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, donutCanvas.clientWidth / donutCanvas.clientHeight, 0.1, 1000);

/** add light */
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, 0, 0);
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
