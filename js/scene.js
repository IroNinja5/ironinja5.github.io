const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
});


renderer.setSize( window.innerWidth, window.innerHeight );


const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
const edges = new THREE.EdgesGeometry( geometry );
const cube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x2DB3D6 } ) );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;

    renderer.render( scene, camera );
    window.addEventListener(
        'resize', resizeThree()
      );
};

function resizeThree() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

animate();

