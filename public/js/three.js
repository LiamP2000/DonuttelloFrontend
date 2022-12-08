import * as THREE from '../../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


const donutCanvas = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({canvas: donutCanvas});
renderer.setSize( window.innerWidth/10*4, 500 );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, donutCanvas.clientWidth / donutCanvas.clientHeight, 0.1, 1000);

var glaze;
var sprinkles;
var dough;

/** make scene and canvas see through*/

renderer.setClearColor(0x000000, 0);
scene.background = null;

/** ambient light */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);


/** add light */
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0.2, 0.3, 0.5);
scene.add(light);

/** load glb file from ../models/donut.glb and console log glaze and sprinkles*/
const loader = new GLTFLoader();
loader.load('../models/donut.glb', function (donut) {
    scene.add(donut.scene);
    glaze = donut.scene.children[0];
    sprinkles = donut.scene.children[1];
    dough = donut.scene.children[2];
}, undefined, function (error) {
    console.error(error);
});

/** create flat logoPlate with image on flat sidde */
const geometry = new THREE.BoxGeometry(0.08, 0.04, 0.001);
const texture = new THREE.TextureLoader().load('../images/logo.png');
const material = new THREE.MeshBasicMaterial({map: texture});
const logoPlate = new THREE.Mesh(geometry, material);
scene.add(logoPlate);

/** set logoPlate position */
logoPlate.position.y = 0.04;
logoPlate.position.z = -0.035;

/* set logoPlate rotation */
logoPlate.rotation.x = -1;

/** set camera position */
camera.position.z = 0.14;
camera.position.y = 0.12;
/**aim camera at center */
camera.lookAt(0, 0, 0);

function animate() {

    /** if window < 600px */
        renderer.setSize( window.innerWidth/10*4, 500 );
    if(window.innerWidth < 600) {
        renderer.setSize( window.innerWidth, 500 );
    }

    /** fix camera */
    camera.aspect = donutCanvas.clientWidth / donutCanvas.clientHeight;
    camera.updateProjectionMatrix();
    
    requestAnimationFrame(animate);
    /**rotate donut */
    scene.rotation.y += 0.001;

    /**rotate logoPlate */
    renderer.render(scene, camera);

    /** if currentPick exist set glaze to css var of currentPick */
    if(currentPick) {
        /**if currentPick is chocolade */
        if(currentPick == "chocolade") {
            glaze.material.color.set("#5c2d1f");
        }
        if(currentPick == "kers") {
            glaze.material.color.set("#FF4C8E");
        }
        if(currentPick == "witteChocolade") {
            glaze.material.color.set("#f5f5dc");
        }
    }
    

}

animate();
