var Inspirations = function(){
  var renderer, camera, scene, top_mesh;
  var self = this;
  var white = new THREE.Color("rgb(255,255,250)");
  var black = new THREE.Color("rgb(0,0,0)");

  var newBump = function(){
    var circleGeo = new THREE.SphereGeometry(3, 50, 50);
    var circleMaterial = new THREE.MeshBasicMaterial({color: black});
    return new THREE.Mesh(circleGeo, circleMaterial);
  }

  self.init = function(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 1100;

    var top_geo = new THREE.BoxGeometry(1800, 900, 200);
    var top_mat = new THREE.MeshBasicMaterial({color: white});
    top_mesh = new THREE.Mesh(top_geo, top_mat);


    var bump = newBump();
    bump.position.z = 200;
    scene.add(top_mesh);
    scene.add(bump);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  }

  self.render = function(){
    requestAnimationFrame( self.render );
    renderer.render(scene, camera);
  };
}

var init = function(){
}

inspirations = new Inspirations();
inspirations.init();
inspirations.render();
