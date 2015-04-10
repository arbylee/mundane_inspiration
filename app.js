var renderer, camera, scene, top_mesh;

var init = function(){
  var white = new THREE.Color("rgb(255,255,250)");
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 1100;

  var top_geo = new THREE.BoxGeometry(1800, 900, 200);
  var top_mat = new THREE.MeshBasicMaterial({color: white});
  top_mesh = new THREE.Mesh(top_geo, top_mat);
  top_mesh.position.y = 500
  top_mesh.rotation.x = 90 * Math.PI / 180


  scene.add(top_mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}

var render = function(){
  requestAnimationFrame( render );
  renderer.render(scene, camera);
};

init();
render();
