//Define global variables
//-
var container; // apppend renderer and cameras to this DOM element

var camera, scene, renderer; // predefine here, ready to assign values later

var ambientLight, light1, light2, light3, dirLight; // ditto
var shadowMaterial;

var setMaterial, material, loader; //import model from SketchUp

var mouseX = 0; //use for camera controls later?
var mouseY = 0;
var controls;

var windowHalfX = window.innerWidth/2; //resize
var windowHalfY = window.innerHeight/2;

// document.addEventListener( 'mousemove', onDocumentMouseMove, false ); //use for camera controls?

init(); //call function to render content
animate();
render();


//Define all rendering and control behaviour within function, seeems to be best practice
function init() {
  container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(
    60, //field of view
    window.innerWidth/window.innerHeight,
    0.01, //near clipping plane
    1000 //far clippine place
  );

  camera.position.z = 1;//postion camera

  scene = new THREE.Scene(); //new scene with library source


  renderer = new THREE.WebGLRenderer({ antialias: true }); //new renderer with library source
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x0065FF); //change default background colour from black
  container.appendChild(renderer.domElement);

  renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.renderReverseSided = false;

  controls = new THREE.OrbitControls( camera, renderer.domElement );// Add additional orbit controls
  controls.addEventListener('mousemove',onDocumentMouseMove ,true);

  window.addEventListener('resize',onWindowResize, false); //call onWindowResize

}

function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

function onDocumentMouseMove( event ) {
	mouseX = ( event.clientX - windowHalfX ) * 1;
	mouseY = ( event.clientY - windowHalfY ) * 1;
  console.log('mousemove');
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	camera.position.x += ( mouseX - camera.position.x ) * .005;
	camera.position.y += ( - mouseY - camera.position.y ) * .005;
	camera.lookAt( scene.position );
  //camera.lookAt(new THREE.Vector3(0,0,0)); //point camera at specific coordinate

	renderer.render( scene, camera ); //final flourish to add all data to browser window
}


//Import model from SketchUp
//-
material = new THREE.MeshStandardMaterial({
    color: 0xfff,
    // shading: THREE.FlatShading, // default is THREE.SmoothShading
    metalness: 0,
    roughness: 1
});

loader = new THREE.ColladaLoader();

//Function to set material after it's loaded
setMaterial = function(node, material) {
  node.material = material;
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      setMaterial(node.children[i], material);
    }
  }
}

loader.load('assets/sketch-1.dae', function (collada) {
    model = collada.scene;
    scene.add( model );
    console.log('model loaded');
 });


//Lights and shadows
//-
ambientLight = new THREE.AmbientLight( 0xffffff, 1 );

// light1 = new THREE.PointLight( 0xffffff, 1 );
// light1.position.set( 25, 50, 25 );
//
// light2 = new THREE.PointLight( 0xffffff, 1 );
// light2.position.set( 12, 25, 12 );
//
// light3 = new THREE.PointLight( 0xffffff, 1 );
// light3.position.set( -15, 5, -15 );

scene.add(ambientLight);

// //Turn on rendering of shadows
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//
// light1.castShadow = true;
// light1.shadow.mapSize.width = 1024;
// light1.shadow.mapSize.height = 1024;
//
// loader.castShadow = true;
// loader.receiveShadow = true;

// shadowMaterial = new THREE.ShadowMaterial( { color: 0xeeeeee } );
// shadowMaterial.opacity = 0.1;
