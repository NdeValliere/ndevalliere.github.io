// Create a scene which will hold all our meshes to be rendered
var scene = new THREE.Scene();


// Create and position a camera
var camera = new THREE.PerspectiveCamera(
    30,                                   // Field of view
    window.innerWidth/window.innerHeight, // Aspect ratio
    0.1,                                  // Near clipping pane
    1000                                  // Far clipping pane
);

// Reposition the camera
camera.position.set(25,50,25);

// Point the camera at a given coordinate
camera.lookAt(new THREE.Vector3(0,0,0));


// Create a renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

// Size should be the same as the window
renderer.setSize( window.innerWidth, window.innerHeight );

// Set a near white clear color (default is black)
renderer.setClearColor( 0xffffff );

// Append to the document
document.body.appendChild( renderer.domElement );

//Create material for imported .DAE file
var material = new THREE.MeshStandardMaterial( {
    color: 0xff0051,
    shading: THREE.FlatShading, // default is THREE.SmoothShading
    metalness: 0,
    roughness: 1
} );

// Add an orbit control which allows us to move around the scene. See the three.js example for more details
// https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', function() { renderer.render(scene, camera); } ); // add this only if there is no animation loop (requestAnimationFrame)

//Import DAE
var loader = new THREE.ColladaLoader();

//Function to set material after it's loaded
var setMaterial = function(node, material) {
  node.material = material;
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      setMaterial(node.children[i], material);
    }
  }
}

loader.load( 'assets/blocks-5.dae', function ( collada ) {
    model = collada.scene;
    setMaterial( model, new THREE.MeshStandardMaterial({color: 0xffffff, emissive: 0x0, roughness: 0.13, metalness: 0.66, shading: THREE.SmoothShading, vertexColors: THREE.NoColors}));
    scene.add( model );
 });


//Lights to see surface structure of DAE
var ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

var pointLight = new THREE.PointLight( 0x6FB2FF, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

// var pointLight2 = new THREE.PointLight( 0xFFFAAE, 1 );
// pointLight.position.set( 12, 25, 25 );
// scene.add( pointLight2 );

var pointLight3 = new THREE.PointLight( 0xFD7575, 1 );
pointLight.position.set( 12, 25, 12 );
scene.add( pointLight3 );

var pointLight = new THREE.PointLight( 0x6FB2FF, 1 );
pointLight.position.set( 5, 5, 5 );
scene.add( pointLight );


//Turn on rendering of shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;

loader.castShadow = true;
loader.receiveShadow = true;

var shadowMaterial = new THREE.ShadowMaterial( { color: 0xeeeeee } );
shadowMaterial.opacity = 0.1;

// // A mesh is created from the geometry and material, then added to the scene
// var plane = new THREE.Mesh(
//     new THREE.PlaneGeometry( 5, 5, 5, 5 ),
//     new THREE.MeshBasicMaterial( { color: 0x393839, wireframe: true } )
// );
// plane.rotateX(Math.PI/2);
// scene.add( plane );
//

// Render the scene/camera combination
renderer.render(scene, camera);
