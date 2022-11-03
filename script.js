import * as THREE from 'three';



function make_banner_cube()
{
    let camera, scene, renderer;
    let mesh;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 70, 1, 1, 1000 );
        camera.position.z = 400;

        scene = new THREE.Scene();

        const texture = new THREE.TextureLoader().load( 'textures/hackergirllame.png' );

        const geometry = new THREE.BoxGeometry(200, 200, 200,3,4,3 );
        const material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer({ antialias: true ,alpha:true});
        renderer.setClearColor( 0x000000, 0 );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(500, 500 );
        document.getElementById("yo").appendChild( renderer.domElement );
        camera.aspect = 500 / 500;
        //

        window.addEventListener( 'resize', onWindowResize );

    }

    function onWindowResize() {

        camera.aspect = 500 / 500;
        camera.updateProjectionMatrix();

        renderer.setSize(500, 500);

    }

    function animate() {

        requestAnimationFrame( animate );

        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;

        renderer.render( scene, camera );

    }

}



function make_about_sphere()
{
    let camera, scene, renderer;
    let mesh;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 70, 1, 1, 1000 );
        camera.position.z = 400;

        scene = new THREE.Scene();

        const texture = new THREE.TextureLoader().load( 'textures/hackergirllame.png' );

        const geometry = new THREE.SphereGeometry(100 );
        const material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer({ antialias: true ,alpha:true});
        renderer.setClearColor( 0x000000, 0 );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(500, 500 );
        document.getElementById("about-sphere").appendChild( renderer.domElement );
        camera.aspect = 500 / 500;
        //

        window.addEventListener( 'resize', onWindowResize );

    }

    function onWindowResize() {

        camera.aspect = 500 / 500;
        camera.updateProjectionMatrix();

        renderer.setSize(500, 500);

    }

    function animate() {

        requestAnimationFrame( animate );

        
        mesh.rotation.y += 0.01;

        renderer.render( scene, camera );

    }

}


function make_contact_polygon()
{
    let camera, scene, renderer;
    let mesh;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 70, 1, 1, 1000 );
        camera.position.z = 400;

        scene = new THREE.Scene();

        const texture = new THREE.TextureLoader().load( 'textures/hackergirllame.png' );

        const geometry = new THREE.TorusGeometry(200, 20, 16, 100);
        const material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer({ antialias: true ,alpha:true});
        renderer.setClearColor( 0x000000, 0 );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(500, 500 );
        document.getElementById("contact-polygon").appendChild( renderer.domElement );
        camera.aspect = 500 / 500;
        //

        window.addEventListener( 'resize', onWindowResize );

    }

    function onWindowResize() {

        camera.aspect = 500 / 500;
        camera.updateProjectionMatrix();

        renderer.setSize(500, 500);

    }

    function animate() {

        requestAnimationFrame( animate );

        
        mesh.rotation.y += 0.01;
      

        renderer.render( scene, camera );

    }

}
make_banner_cube()
make_about_sphere()
make_contact_polygon()


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector(".navbar").className+= " scrolled";
  } else {
    document.querySelector(".navbar").className=document.querySelector(".navbar").className.replace(" scrolled","")

  }
}