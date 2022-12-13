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
var marshmellows = [];
var oreo = [];

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
    console.log(donut.scene);
    glaze = donut.scene.children[0];
    sprinkles = donut.scene.children[1];
    dough = donut.scene.children[8];
    marshmellows.push(donut.scene.children[3]);
    marshmellows.push(donut.scene.children[4]);
    marshmellows.push(donut.scene.children[5]);
    marshmellows.push(donut.scene.children[6]);
    marshmellows.push(donut.scene.children[7]);
    /**oreo */
    oreo.push(donut.scene.children[2]);
    oreo.push(donut.scene.children[9]);
    oreo.push(donut.scene.children[10]);

    /** make oreo marshmellow and sprinkles invisible */
    sprinkles.visible = false;
    marshmellows.forEach(function(marshmellow) {
        marshmellow.visible = false;
    })
    oreo.forEach(function(oreo) {
        oreo.visible = false;
    })
    /** rotate donut 45 deg */
    donut.scene.rotation.y = -1;
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
        /**if  picks[0] exists*/
        if(picks[1]) {

        }if(picks[0]) {
            /** if currentpick is sprinkles */
            if(currentPick == "sprinkles") {
                /** disable group oreo and marshmellows */
                /**console log sprinkles */
                oreo.forEach(element => {
                    element.visible = false;
                });
                marshmellows.forEach(element => {
                    element.visible = false;
                });
                sprinkles.visible = true;
            }if(currentPick == "oreo") {
                /** disable group sprinkles and marshmellows */
                sprinkles.visible = false;
                marshmellows.forEach(element => {
                    element.visible = false;
                });
                oreo.forEach(element => {
                    element.visible = true;
                });
            }if(currentPick == "marshmellows") {
                /** disable group sprinkles and oreo */
                sprinkles.visible = false;
                oreo.forEach(element => {
                    element.visible = false;
                });
                marshmellows.forEach(element => {
                    element.visible = true;
                });
            }
        }else{
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

    /** if a new image is uploaded to input of #logo then use it as texture for logoPlate*/
    if(document.getElementById('logo').files[0]) {
        const texture = new THREE.TextureLoader().load(URL.createObjectURL(document.getElementById('logo').files[0]));
        logoPlate.material.map = texture;
    }

    /** on press on #donutCanvas */
    donutCanvas.addEventListener('click', function() {
        
    });





}

animate();
