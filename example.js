var runtime = new ShaderFrogRuntime(),
    width = 800,
    height = 600,
    clock = new THREE.Clock(),
    camera, cubeCamera, scene, renderer, cubeCamera, leftSphere, rightSphere;

init();
animate();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
    camera.position.z = 30;
    camera.position.x = 5;
    camera.position.y = 5;
    scene.add(camera);
    runtime.registerCamera( camera );

    const loader = new THREE.STLLoader();

    ///////////////////////////////////////////////////////////////////////////////
    loader.load(
        '../box.stl',
        function(geometry) {
          mesh = new THREE.Mesh(geometry); //, material)
            mesh.scale.set(0.1,0.1,0.1);
            mesh.position.set(-5,5,0);
            mesh.rotateX(4.8);//绕x轴旋转

            runtime.load([
                'cap.json'
            ], function(shaders) {

                // `shaders` will be an array with the material data in the same order you
                // specified when calling `load
                // ShaderFrog shader 
                mtl = runtime.get(shaders[0].name);

                mesh.material = mtl;
            });
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );// load()
    ///////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////////////
    // another
    loader.load(
        '../ball3.stl',
        function(geometry) {
            mesh2 = new THREE.Mesh(geometry); //, material)
    
            mesh2.scale.set(1,1,1);//=0.1;
           
            mesh2.scale.set(0.1,0.1,0.1);
            mesh2.position.set(-5,5,0);
            mesh2.rotateX(4.8);//绕x轴旋转


            // Load multiple ShaderFrog shaders
            runtime.load([
                'c1.json'
                
            ], function(shaders) {

                // `shaders` will be an array with the material data in the same order you
                // specified when calling `load
                // ShaderFrog shader 
                mtl2 = runtime.get(shaders[0].name);

                mesh2.material = mtl2;
            });
            scene.add(mesh2);
        },
       
        (error) => {
            console.log(error)
        }
    );// load()
    ///////////////////////////////////////////////////////////////////////////////

    loader.load(
        '../ball2.stl',
        function(geometry) {
            mesh3 = new THREE.Mesh(geometry); //, material)
    
            mesh3.scale.set(0.1,0.1,0.1);//=0.1;
           
            mesh3.scale.set(0.1,0.1,0.1);
            mesh3.position.set(-5,5,0);
            mesh3.rotateX(4.8);//绕x轴旋转


            // Load multiple ShaderFrog shaders
            runtime.load([
                'c1.json'
                
            ], function(shaders) {

                // `shaders` will be an array with the material data in the same order you
                // specified when calling `load
                // ShaderFrog shader 
                mtl3 = runtime.get(shaders[0].name);

                mesh3.material = mtl3;
            });
            scene.add(mesh3);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );// load() 
    ///////////////////////////////////////////////////////////////////////////////



    loader.load(
        '../word1.stl',
        function(geometry) {
            mesh4 = new THREE.Mesh(geometry); //, material)
    
            mesh4.scale.set(0.1,0.1,0.1);//=0.1;
           
            mesh4.scale.set(0.1,0.1,0.1);
            mesh4.position.set(-5,5,0);
            mesh4.rotateX(4.8);//绕x轴旋转


            // Load multiple ShaderFrog shaders
            runtime.load([
                'Cream.json'
            ], function(shaders) {

                // `shaders` will be an array with the material data in the same order you
                // specified when calling `load
                // ShaderFrog shader 
                mtl4 = runtime.get(shaders[0].name);

                mesh4.material = mtl4;
            });
            scene.add(mesh4);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );// load()
    ///////////////////////////////////////////////////////////////////////////////



    loader.load(
        '../word2.stl',
        function(geometry) {
            mesh5 = new THREE.Mesh(geometry); //, material)
    
            mesh5.scale.set(0.1,0.1,0.1);//=0.1;
           
            mesh5.scale.set(0.1,0.1,0.1);
            mesh5.position.set(-5,5,0);
            mesh5.rotateX(4.8);//绕x轴旋转


            // Load multiple ShaderFrog shaders
            runtime.load([
                
                'red.json'
                
            ], function(shaders) {

                // `shaders` will be an array with the material data in the same order you
                // specified when calling `load
                // ShaderFrog shader 
                mtl5 = runtime.get(shaders[0].name);

                mesh5.material = mtl5;
            });
            scene.add(mesh5);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );// load()
    ///////////////////////////////////////////////////////////////////////////////

    loader.load(
        '../chopsticks.stl',
        function(geometry) {
            mesh6 = new THREE.Mesh(geometry); //, material)
    
            mesh6.scale.set(0.1,0.1,0.1);//=0.1;
           
            mesh6.scale.set(0.1,0.1,0.1);
            mesh6.position.set(-5,5,0);
            mesh6.rotateX(4.8);//绕x轴旋转


            // Load multiple ShaderFrog shaders
            runtime.load([
                'white.json'
                
            ], function(shaders) {

                // `shaders` will be an array with the material data in the same order you
                // specified when calling `load
                // ShaderFrog shader 
                mtl6 = runtime.get(shaders[0].name);

                mesh6.material = mtl6;
            });
            scene.add(mesh6);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 10 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );// load()
    ///////////////////////////////////////////////////////////////////////////////

    const material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );



    loader.load(
        '../bal.stl',
        function(geometry) {
            mesh7 = new THREE.Mesh(geometry); //, material)
    
            mesh7.scale.set(0.1,0.1,0.1);//=0.1;
           
            mesh7.scale.set(0.1,0.1,0.1);
            mesh7.position.set(-5,5,0);
            mesh7.rotateX(4.8);//绕x轴旋转


            // Load multiple ShaderFrog shaders
            runtime.load([
                'c1.json'
                
            ], function(shaders) {

                // `shaders` will be an array with the material data in the same order you
                // specified when calling `load
                // ShaderFrog shader 
                mtl7 = runtime.get(shaders[0].name);

                mesh7.material = mtl7;
            });
            scene.add(mesh7);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );// load()
    ///////////////////////////////////////////////////////////////////////////////








    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.getElementById('canvas').appendChild(renderer.domElement);

}

function animate() {
    requestAnimationFrame(animate);
    render();

}

function render() {
    var time = clock.getElapsedTime();
    runtime.updateShaders(time);
    camera.position.x = Math.cos(1*time)*3;
    //camera.position.z = Math.sin(2*time)*10;
    renderer.render(scene, camera);
}

