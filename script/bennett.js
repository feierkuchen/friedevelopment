

console.log("hpuoa");

if (false){
// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
// import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js';
// import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/loaders/GLTFLoader.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});

  const fov = 3;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 200;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#2c2c2c');

  {
    const planeSize = 40;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    //scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    // const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    // light.castShadow = false;
    //scene.add(light);
    
    
    // const hlight = new THREE.AmbientLight (0x404040,100);
    // scene.add(hlight);
    
    let directionalLight = new THREE.DirectionalLight(0xffffff,20);
    directionalLight.position.set(0,1,0);
    //directionalLight.castShadow = false;
    scene.add(directionalLight);
    
     let light = new THREE.PointLight(0xffffff,2);
     light.position.set(0,300,500);
     scene.add(light);
    //  let light2 = new THREE.PointLight(0xffffff,80);
    //  light2.position.set(0,300,0);
    //  scene.add(light2);
    
    let light2 = new THREE.PointLight(0xc4c4c4,2);
    light2.position.set(500,100,0);
    scene.add(light2);
    
    let light3 = new THREE.PointLight(0xc4c4c4,2);
    light3.position.set(0,100,-500);
    scene.add(light3);
    
    let light4 = new THREE.PointLight(0xc4c4c4,2);
    light4.position.set(-500,300,500);
    scene.add(light4);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 100;
    //const light = new THREE.DirectionalLight(color, intensity);
    //const light = new THREE.DirectionalLight( 0xffffff, 0.5 );
    //light.position.set(5, 10, 2);
    //light.position.set(0, 0, 1);
    const light = new THREE.AmbientLight(color, intensity); 
    scene.add(light);
   // scene.add(light.target);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    const gltfLoader = new GLTFLoader();
    //gltfLoader.load('https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf', (gltf) => {
        gltfLoader.load('images/glTF/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);

      // compute the box that contains all the stuff
      // from root and below
       const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

    //   // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
}



    // //return scene;

    var createScene = function() {
    //      // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    return scene;

        var scene = new BABYLON.Scene(engine);
        // Add a camera to the scene and attach it to the canvas
        // Add a lights to the scene
        //Your Code
        BABYLON.SceneLoader.Append("images/DamagedHelmet3D/glTF/", "DamagedHelmet.gltf", scene, function (scenet) {
            // Create a default arc rotate camera and light.
            scenet.createDefaultCameraOrLight(true, true, true);
    
            // The default camera looks at the back of the asset.
            // Rotate the camera by 180 degrees to the front of the asset.
            scenet.activeCamera.alpha += Math.PI;
            
       // return scene;
        })
        // BABYLON.SceneLoader.Load("/images/glTF/", "scene.gltf", engine, function (newScene) { 
        //     scenet.createDefaultCameraOrLight(true, true, true);
    
        //     // The default camera looks at the back of the asset.
        //     // Rotate the camera by 180 degrees to the front of the asset.
        //     scenet.activeCamera.alpha += Math.PI;
        //  });

    };

    const canvas = document.getElementById("#c"); // Get the canvas element
        const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
        // Add your code here matching the playground format
        // const scene = createScene(); //Call the createScene function
        // // Register a render loop to repeatedly render the scene
        // engine.runRenderLoop(function () {
        //         scene.render();
        // });
        // // Watch for browser/canvas resize events
        // window.addEventListener("resize", function () {
        //         engine.resize();
        // });

        

        if(true){
            const gallery3d= cloudinary.galleryWidget({
              container: "#gallery3d",
              cloudName: "friede",
              carouselStyle:"none",
              mediaAssets: [
                {publicId: "originial_wfafcj", mediaType:"3d"}
                //{publicId: "sample"}
                //{tag: "audi", mediaType:"spin"}
              ]
            });
            
            gallery3d.render();
            setTimeout(() => {
              //$("canvas").appendTo(".galleryWrapper");
              //$("#gallery3d").remove();
              //$(".galleryWrapper").css("display", "flex");
              //$("#gallery3d").css("width", "100%");
            }, 2000);
            }