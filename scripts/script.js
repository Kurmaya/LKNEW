import * as THREE from '../modules/three.module.js';
// import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
import { GLTFLoader } from '../modules/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import * as dat from 'dat.gui';

let canvas , camera , scene , renderer, controls;
canvas= document.querySelector('.webgl');
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

window.addEventListener('mousemove',(event)=>{
    const intersects = raycaster.intersectObjects( scene.children );
// console.log(intersects);

	for ( let i = 0; i < intersects.length; i ++ ) {

        if(intersects[i].object.name==='Cube006'|| intersects[i].object.name==='Cube002'){

            // intersects[i].object.material.color.set(0x00ff00);
            // gsap.to(intersects[i].object.scale,{
            //     x:1.1,
            //     duration:.3,

            // })

        }
        else if(intersects[i].object.name==='LUNATICK_v3'){
            intersects[i].object.material.color.set(0x00ff00);
        }

		// else if( intersects[i].object.name==='Akina'){
        //     console.log(intersects[i]);
        //     let tl= gsap.timeline();
        //     tl.to(intersects[i].object.scale,{
        //         x:1.2,
        //         duration:.3,
        //     })
        //     .to(intersects[i].object.scale,{
        //         x:1,
        //         duration:.3,
        //     })
        // }

	}
})
function move(e){
gsap.to(e.object.scale,{
    x:.2,
    y:.2,
    z:.2,
    duration:2,
})
}
function select(e){
    let tl=gsap.timeline();
    if(e.object.name==='Akina'||e.object.name==='silver'){
        tl.to(e.object.scale,{
            x:1.2,
            duration:.3,
        })
        .to(e.object.scale,{
            x:1,
            duration:.3,
        })
    }


}
function rot(e){
    let tl= gsap.timeline();
    if(e.object.name==='Cube006'){
        // tl.to(e.object.scale,{
        //     x:0.185,
        //     duration:.3
        // })
        // tl.to(e.object.scale,{
        //     x:0.18,
        //     duration:.3,
        // })
        tl.to(e.object.position,{
            // x:-3.1,
            z:0.9855030059814453,
            duration:.3,
        })
        tl.to(e.object.position,{
            // x:-3.1,
            z:0.9355030059814453,
            duration:.3,
        })
        // tl.to(e.object.rotation,{
        //     x:-2.9616810015907005,
        //     duration:.3,
        // })
    }
    else if(e.object.name==='Cube002'){
    // tl.to(e.object.rotation,{
    //     y:0.3230372205687213,
    //     duration:.3,
    // })
    // tl.to(e.object.rotation,{
    //     y:-0.5230372205687213,
    //     duration:.3,
    // })
    tl.to(e.object.position,{
        // z:.9,
        z:0.9855030059814453,
        duration:.3
    })
    tl.to(e.object.position,{
        // z:.88,
        z:0.9355030059814453,
        duration:.3
    })
}
}

window.addEventListener('click', (event) =>{

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( pointer, camera );
    const intersects = raycaster.intersectObjects( scene.children );


	for ( let i = 0; i < intersects.length; i ++ ) {
        if(intersects.length>0 && intersects[i].object.name==='Akina'||intersects.length>0 && intersects[i].object.name==='silver'){
            // console.log(intersects[i]);
            // let tl= gsap.timeline();
            //     tl.to(intersects[i].object.scale,{
            //         x:1.2,
            //         duration:.3,
            //     })
            //     .to(intersects[i].object.scale,{
            //         x:1,
            //         duration:.3,
            //     })
            select(intersects[i]);
        }
        else if(intersects[i].object.name==='LUNATICK_v3'){
            intersects[ i ].object.material.color.set( 0xff0000 );
            // console.log(intersects[i].object.name);
            gsap.to(intersects[i].object.scale,{
                x:1,
                y:1,
                z:1,
                onComplete:function(){
                    let tl = gsap.timeline({onComplete:function(){
                        glInit();
                    }});
                    // tl.to(intersects[i].object.rotation,{y:(Math.PI),duration:1,ease:'none'},'simultaneously');
                    // tl.to(intersects[i].object.scale,{
                    //     x:.2,
                    //     y:.2,
                    //     z:.02,
                    //     duration:1,
                    // },'simultaneously')
                    tl.to(intersects[i].object,{name:'LUNATICK_v3.on'},'simultaneously')
                    tl.to(intersects[i].object.scale,{
                        x:.005,
                        y:.005,
                        z:.001,
                        duration:1,
                    },'simultaneously')
                    // tl.to(intersects[i].object.rotation,{y:-0.1},'simultaneously')
                    tl.to(intersects[i].object.rotation,{y:0},'simultaneously')
                    // tl.to(intersects[i].object.position,{
                    //     x:-90,
                    //     y:62,
                    //     z:3,
                    //     duration:1,

                    // },'simultaneously')
                    tl.to(intersects[i].object.position,{
                        x:-7.95,
                        y:29.75,
                        z:98.8,
                        duration:1,

                    },'simultaneously')

                    // tl.to(akinaMat,{
                    //     opacity:1,
                    //     duration:.5,
                    // },'simultaneously')
                    // tl.to(silverMat,{
                    //     opacity:1,
                    //     duration:.5,
                    // },'simultaneously')
                }
            })


        }
        else if(intersects[i].object.name==='Cube002'){
            intersects[i].object.material.color.set(0x00ff00);
            rot(intersects[i]);
            setTimeout(function(){
                intersects[i].object.material.color.set(0xff0000);
            },200);
            // document.querySelector('.test').classList.add('active');
            // document.querySelector('.holder div').classList.remove('active');
            gsap.to(akinaMat,{
                opacity:1,
                duration:.3,
            })
            gsap.to(silverMat,{
                opacity:0,
                duration:.3,
            })
            document.querySelector('.silver').classList.remove('active');
            // select(akina);
            document.querySelector('.akina').classList.add('active');

        }
        else if( intersects[i].object.name==='Cube006'){
            rot(intersects[i]);
            intersects[i].object.material.color.set(0x00ff00);
            setTimeout(function(){
                intersects[i].object.material.color.set(0xff0000);
            },200);
            gsap.to(akinaMat,{
                opacity:0,
                duration:.3
            })
            gsap.to(silverMat,{
                opacity:1,
                duration:.3,
            })
            // document.querySelector('.test').classList.remove('active');
            // document.querySelector('.holder div').classList.remove('active');
            document.querySelector('.silver').classList.add('active');
            document.querySelector('.akina').classList.remove('active');
        }



	}
})





camera= new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,500);
camera.position.z=100;
camera.position.y=.3;

renderer= new THREE.WebGLRenderer({canvas:canvas,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);

scene= new THREE.Scene();
scene.add(camera);

//akina display

const akinaGeo= new THREE.PlaneGeometry(8,4,100,100);
const akinaMat =new THREE.MeshBasicMaterial({transparent:true,opacity:0,map:new THREE.TextureLoader().load('./assets/akina.jpg')});
const akina =new THREE.Mesh(akinaGeo,akinaMat);
akina.name='Akina';
// console.log(akina);
akina.position.z=87;
akina.position.x=10;
scene.add(akina);

//silvermoon display

const silverGeo = new THREE.PlaneGeometry(8,4,100,100);
const silverMat =new THREE.MeshBasicMaterial({transparent:true,opacity:0,map:new THREE.TextureLoader().load('./assets/silvermoon.jpg')});
const silver =new THREE.Mesh(silverGeo,silverMat);
silver.name='silver';
// console.log(silver);
silver.position.z=87;
silver.position.x=akina.position.x;
scene.add(silver);

//star field


// controls = new OrbitControls( camera, canvas );
// controls.update();
//gui

// const gui = new dat.GUI();

//gltf load
let gLoader = new GLTFLoader();
let ship;
function glInit(){

gLoader.load('./assets/3d/lk ship.glb',function(gltf){
    scene.add(gltf.scene);
    ship=gltf.scene;
    // gltf.scene.opacity=0;
    // console.log(gltf.scene);
    // gltf.scene.scale.set(.5,.8,.3);
    gltf.scene.position.z=99.5;
    gltf.scene.position.y=-1.9;
    gltf.scene.rotation.y=Math.PI;
    gltf.scene.traverse(function(child){
        if(child.isMesh){
            child.material.opacity=0;
        }
    })

    gltf.scene.traverse(function(child){
        // console.log(child);
        // child.material.opacity=0;

        if(child.isMesh && child.material.name==="Glass"){
            // console.log(child);
            // child.scale.set(.8,.8,.8);
            child.material= new THREE.MeshPhysicalMaterial({transparent:true,opacity:.1,emissive:true,depthTest:false,transmission:.0})
        }
        else if(child.name==="Cube"||child.name==="Cube001"||child.name==="Cube003"||child.name==="Cube004"||child.name==="Cube005"||child.name==="Cube007"||child.name==="Cube008"||child.name==="Cube009"||child.name==="Cube010"||child.name==="Cube011"){
            // console.log(child);
            child.material= new THREE.MeshBasicMaterial({transparent:true,color:0xff0000,opacity:0});
            // child.scale.set(0,0,0);
            // child.material.transparent=true;

        }
    })
    gltf.scene.traverse(function(child){

    })
    gltf.scene.traverse(function(child){
        if(child.name==="Cube002"){
            // console.log(child);
            child.scale.x=0.2;
            child.scale.y=0.09;
            // child.position.z=.88;
            // child.position.x=0.5;
            // let nTex= new THREE.TextureLoader().load('./assets/next.png');
            // nTex.center.x=1;
            // let nTex =new THREE.TextureLoader().load('./assets/tron-font.jpg');
            // console.log(nTex)
            child.material= new THREE.MeshPhysicalMaterial();
            // gui.add(child.scale,'x',0,1).name('c2 x');
            // gui.add(child.scale,'y',0,1).name('c2 y');
            // gui.add(child.scale,'z',0,1).name('c2 z');
            // gui.add(child.position,'x',0,1)
        }
    });
    gltf.scene.traverse(function(child){
        if(child.name==="Cube006"){
            // console.log(child);
            child.scale.x=0.2;
            child.scale.y=0.09;
            // child.scale.x=0.12;
            // child.scale.y=0.17,
            // child.scale.z=0.013;
            // child.position.x=0.5;
            child.material= new THREE.MeshPhysicalMaterial();
            // gui.add(child.position,'x',0,1).name(' cp x');
            // gui.add(child.position,'y',0,1).name(' cp y');
            // gui.add(child.position,'z',0,1).name(' cp z');
            // gui.add(child.scale,'x',0,1).name('c6 x');
            // gui.add(child.scale,'y',0,1).name('c6 y');
            // gui.add(child.scale,'z',0,1).name('c6 z');
        }
    });
});
}
let logo;
function lkInit(){
gLoader.load('./assets/3d/lunatick.glb',function(gltf){
    scene.add(gltf.scene);
    // console.log(gltf.scene.children[0]);
    logo = gltf.scene.children[0];
    logo.rotation.x=Math.PI;
    // gui.add(logo.rotation,'x',-Math.PI,Math.PI).name('logo r x');
    // gui.add(logo.rotation,'y',-Math.PI,Math.PI).name('logo r y');
    // gui.add(logo.position,'x',-80,0).name('logo p x');
    // gui.add(logo.position,'y',0,80).name('logo p y')
    // gui.add(logo.position,'z',50,100).name('logo p z')
    // gui.add(logo.scale,'x',0,1).name('logo s x');
    // gui.add(logo.scale,'y',0,1).name('logo s y');
    // gui.add(logo.scale,'z',0,1).name('logo s z');
    gltf.scene.position.set(8,-30,0);

})

}

let pLight= new THREE.PointLight({color:0xff0000});
pLight.position.set(0,.5,101);

let aLight= new THREE.AmbientLight({color:0x000000});
scene.add(aLight,pLight);

aLight.intensity=pLight.intensity=0;
gsap.to(aLight,{
    delay:1,
    intensity:1.5,
    duration:1,
    ease:'none'
});
gsap.to(pLight,{
    intensity:6,
    delay:3,
    duration:1,
    ease:'none',
})
gsap.to(aLight.color,{
    r:1,
    g:1,
    b:1,
    delay:2,
    duration:2,
    ease:'none',
})
// gsap.to(camera.rotation,{
//     x:-.08,
//     repeat:-1,
//     duration:5,
//     yoyo:true,
//     ease:'none'
// })
camera.rotation.x=-.1;



//resize

function onWindowResize(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}
window.addEventListener('resize',onWindowResize);
document.addEventListener('mousemove',onDocumentMouseMove)
let mouseX= 0;
let mouseY=0;

let targetX=0;
let targetY=0;
const windowX= window.innerWidth/ 2;
const windowY= window.innerHeight/2;



function onDocumentMouseMove(event){
  mouseX= (event.clientX - windowX);
  mouseY = (event.clientY-windowY);
}
let lineCount =1000;

let geom= new THREE.BufferGeometry();
geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6*lineCount),3));
geom.setAttribute('velocity', new THREE.BufferAttribute(new Float32Array(2*lineCount),1));
let pos = geom.getAttribute('position');
let pa = pos.array;
let vel =geom.getAttribute('velocity');
let va = vel.array;

for(let lineIndex = 0; lineIndex<lineCount;lineIndex++){
    var x =Math.random()* 400-200;
    var y =Math.random()* 200-100;
    var z= Math.random()* 500-100;



    var xx = x;
    var yy = y;
    var zz = z;

//line start

pa[6*lineIndex]=x;
pa[6*lineIndex+1]=y;
pa[6*lineIndex+2]=z;

//line end

pa[6*lineIndex+3]=xx;
pa[6*lineIndex+4]=yy;
pa[6*lineIndex+5]=zz;

//acceleration
va[2*lineIndex] = va[2*lineIndex+1] = 0;

}

let mat = new THREE.LineDashedMaterial({color:0xffffff,dashSize:5,gapSize:5});
let pMat = new THREE.PointsMaterial({color:0xffffff,size:0.15});

let lines = new THREE.LineSegments(geom,mat);
let dots = new THREE.Points(geom,pMat);
// scene.add(dots);
scene.add(lines);

function render(){
    renderer.render(scene,camera);
    camera.updateProjectionMatrix();
    for(let lineIndex=0; lineIndex<lineCount;lineIndex++){
        //accleration

        va[2*lineIndex]+= 0.02;
        va[2*lineIndex+1] += 0.019;
        //leadingline acceleration

        pa[6*lineIndex+2] += va[2*lineIndex];

        //following line acceleration
        pa[6*lineIndex+5]+= va[2*lineIndex+1];
        if(pa[6*lineIndex+5]>200){
            var z = Math.random()* 200-100;
            pa[6*lineIndex+2]= z;
            pa[6*lineIndex+5]=z;
            va[2*lineIndex]= va[2*lineIndex+1]=0;

        }
    }
    pos.needsUpdate=true;
    // controls.update();
    requestAnimationFrame(render);

}
render();
// glInit();
lkInit();
