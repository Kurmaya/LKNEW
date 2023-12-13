import * as THREE from '../modules/three.module.js';
// import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";

import { GLTFLoader } from '../modules/GLTFLoader.js';
import { EffectComposer } from '../modules/EffectComposer.js';
import { RenderPass } from '../modules/RenderPass.js';
import {UnrealBloomPass} from '../modules/UnrealBloomPass.js';
// import * as dat from 'dat.gui';

let canvas , camera , scene , renderer, controls;

canvas= document.querySelector('.webgl');
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const gui = new dat.GUI();
// if(raycaster.intersectObject())

// window.addEventListener('mousemove',function(){
//     // const shipInt =raycaster.intersectObject(ship);    
//     const intersects = raycaster.intersectObjects( scene.children)
// })
// window.addEventListener('mousemove',(event)=>{
//     const intersects = raycaster.intersectObjects( scene.children );
// // console.log(intersects);

// 	for ( let i = 0; i < intersects.length; i ++ ) {
        
//         if(intersects[i].object.name==='Cube006'|| intersects[i].object.name==='Cube002'){
//             // document.body.style.cursor= "pointer";
            
//             // intersects[i].object.material.color.set(0x00ff00); 
//             // gsap.to(intersects[i].object.scale,{
//             //     x:1.1,
//             //     duration:.3,

//             // })
            
//         }
//         else if(intersects[i].object.name==='LUNATICK_v3'){
//             // intersects[i].object.material.color.set(0x00ff00);
//             // document.body.style.cursor= "pointer";
//         }

// 		// else if( intersects[i].object.name==='Akina'){
//         //     console.log(intersects[i]);
//         //     let tl= gsap.timeline();
//         //     tl.to(intersects[i].object.scale,{
//         //         x:1.2,
//         //         duration:.3,
//         //     })
//         //     .to(intersects[i].object.scale,{
//         //         x:1,
//         //         duration:.3,
//         //     })
//         // }
//         // else document.body.style.cursor="default";
// 	}
    
// })
function move(e){
gsap.to(e.object.position,{
    x:0,
    
    duration:1,
})
}
function rem(){
    document.querySelectorAll('.holder div').forEach(n=>{
        n.classList.remove('active');
    })
}
function select(e){
    // let n ='.'+ e.object.name;
    
    switch(e.object.name) {
        case "Akina":
          // code block
          rem();
          document.querySelector('.Akina').classList.add('active');
        //   move(e);
          break;
        case "silver":
            rem();
            document.querySelector('.silver').classList.add('active');
            // move(e);
          // code block
          break;
          case "seekloc":
            rem();
            document.querySelector('.seekloc').classList.add('active');
            // move(e);
            break;
            case "bubble":
                rem();
                document.querySelector('.bubble').classList.add('active');
                // move(e);
                break;
                case "hiro":
                rem();
                document.querySelector('.hiro').classList.add('active');
                // move(e);
                break;
                case "antipode":
                rem();
                document.querySelector('.antipode').classList.add('active');
                // move(e);
                break;
                case"intergal":
                rem();
                document.querySelector('.intergal').classList.add('active');
                break;
                case"hyper":
                rem();
                document.querySelector('.hyper').classList.add('active');
                break;
                case"albetor":
                rem();
                document.querySelector('.albetor').classList.add('active');
                break;
                case"antro":
                rem();
                document.querySelector('.antro').classList.add('active');
                break;
                case"lifeboat":
                rem();
                document.querySelector('.lifeboat').classList.add('active');
                break;
                case"iruka":
                rem();
                document.querySelector('.iruka').classList.add('active');
                break;
                case"vigil":
                rem();
                document.querySelector('.vigil').classList.add('active');
                break;
                case"kobi":
                rem();
                document.querySelector('.kobi').classList.add('active');
                break;
        default:
          // code block
      }
    console.log(e.object.name);
    // document.querySelectorAll('.holder div').forEach((a)=>{
    //     a.classList.remove('active');
    //     // a.classList.add()
    //     gsap.set('.'+e.object.name,{
    //         classList:e.object.name
    //     })
    // });
    // gsap.set('.')
 
 

    // gsap.set(n,{
    //     // onStart:function(){console.log('.'+e.object.name)},
    //     className:'active',

    // });
    let tl=gsap.timeline();
    // if(e.object.name==='Akina'||e.object.name==='silver'){
        // var n='';
        // n=e.object.name;
        // console.log(n);
        // document.querySelector(e.object.name).classList.add('active');
        if(e.object.userData==='use'){
        tl.to(e.object.scale,{
            y:1.2,
            x:1.2,
            duration:.3,
        })
        .to(e.object.scale,{
            y:1,
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
            duration:.1,
        })
        tl.to(e.object.position,{
            // x:-3.1,
            z:0.9355030059814453,
            duration:.1,
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
        duration:.1
    })
    tl.to(e.object.position,{
        // z:.88,
        z:0.9355030059814453,
        duration:.1
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
        console.log(intersects.length,intersects[i].object);
        // if(intersects.length>0 && (intersects[i].object.name==='Akina'|| intersects[i].object.name==='silver' || intersects[i].object.name==='seekloc' || intersects[i].object.name==='antipode' || intersects[i].object.name==='bubble' || intersects[i].object.name==='hiro')){
            if(intersects.length>0 && (intersects[i].object.userData==='use')){
         
            select(intersects[i]);
            
            
        }
        else if(intersects[i].object.name==='LUNATICK_v3'){
            // intersects[ i ].object.material.color.set( 0xff0000 );
            
            // console.log(intersects[i].object.name);
            document.querySelector('nav').classList.add('active');
            gsap.to(dLight,{
                intensity:1,
            })
            gsap.to(dLight.position,{
                x:-30
            })
            gsap.to(dLight2.position,{
                x:30
            })
            gsap.to(dLight2,{
                intensity:1,
            })
            liTl.pause();
            let bob = gsap.timeline({repeat:-1,yoyo:true,});
            let lBob =gsap.timeline({repeat:-1,yoyo:true});
         
            bob.from(ship.rotation,{
                x:0,
                duration:1,
            })
            bob.to(ship.rotation,{
                x:-.01,
                duration:1,
            })
            
            gsap.to(intersects[i].object.scale,{
                x:1,
                y:1,
                z:1,
                onComplete:function(){
                    let tl = gsap.timeline({onComplete:function(){
                        // glInit();
                        animate();
                        // mouse();
                    }});
                    // tl.to(intersects[i].object.rotation,{y:(Math.PI),duration:1,ease:'none'},'simultaneously');
                    // tl.to(intersects[i].object.scale,{
                    //     x:.2,
                    //     y:.2,
                    //     z:.02,
                    //     duration:1,
                    // },'simultaneously')
                    tl.to(intersects[i].object,{name:'LUNATICK_v3.on'},'simultaneously')
                    tl.to(intersects[i].object.material.color,{
                        r:1,
                        g:0,
                        b:0,
                        
                    },'simultaneously')
                    
                    tl.to(intersects[i].object.rotation,{x:2.8},'simultaneously')
                    tl.to(intersects[i].object.scale,{
                        x:.003,
                        y:.003,
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
                        x:-7.969,
                        y:29.8,
                        z:98.8,
                        duration:1,

                    },'simultaneously')
                    
                    .to(ship.position,{z:(ship.position.z-6)});
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
            // intersects[i].object.material.color.set(0x00ff00);
            rot(intersects[i]);
            rem();
            setTimeout(function(){
                intersects[i].object.material.color.set(0xff0000);
            },200);
           
            if(document.getElementById('work').classList.contains('active')){
                // gsap.to(grp.position,{
                //     x:'+=10',
                //     duration:.5,
                //     // onComplete:function(){console.log(grp.position.x)}
                // })
                gsap.to(grp.rotation,{
                    y:'+=.5',
                    duration:.5,
                    // onComplete:function(){console.log(grp.position.x)}
                })
                
            }
                
            
            
            
        }
        else if( intersects[i].object.name==='Cube006'){
            rot(intersects[i]);
            rem();
            // intersects[i].object.material.color.set(0x00ff00);
            setTimeout(function(){
                intersects[i].object.material.color.set(0xff0000);
            },200);
            if(document.getElementById('work').classList.contains('active')){
                // gsap.to(grp.position,{
                //     x:'-=10',
                //     duration:.5,
                //     // onComplete:function(){console.log(grp.position.x)}
                // })
                gsap.to(grp.rotation,{
                    y:'-=.5',
                    duration:.5,
                    // onComplete:function(){console.log(grp.position.x)}
                })
            }
            
            // gsap.to(akinaMat,{
            //     opacity:0,
            //     duration:.3
            // })
            // gsap.to(silverMat,{
            //     opacity:1,
            //     duration:.3,
            // })
            // document.querySelector('.test').classList.remove('active');
            // document.querySelector('.holder div').classList.remove('active');
            // document.querySelector('.silver').classList.add('active');
            // document.querySelector('.akina').classList.remove('active');
        }

		

	}
})


document.getElementById('work').addEventListener('click',function(){
    document.getElementById('work').classList.toggle('active');
    if(document.getElementById('work').classList.contains('active')){
        gsap.to(grp.position,{
            y:6,
            duration:.5,
          })
    }
    else if(!document.getElementById('work').classList.contains('active'))
    gsap.to(grp.position,{
        y:20,
        duration:.5,
      })
  })


camera= new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,500);
camera.position.z=99.7;
camera.position.y=.3;

renderer= new THREE.WebGLRenderer({canvas:canvas,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);

scene= new THREE.Scene();
scene.add(camera);
//effect composer
const composer = new EffectComposer(renderer);
const renderScene = new RenderPass(scene,camera) ;
const bloomPass = new UnrealBloomPass( new THREE.Vector2(window.innerWidth,window.innerHeight),.1,0.05,0.01);

console.log(bloomPass.strength,bloomPass);


composer.addPass(renderScene);
composer.addPass(bloomPass);

//akina display

const planeGeo= new THREE.PlaneGeometry(10,5,1,1);

const akinaMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/akina.jpg')});
const akina =new THREE.Mesh(planeGeo,akinaMat);
akina.name='Akina';
gui.add(akina.rotation,'y',Math.PI*2,-Math.PI*2).name('akina r y');
// akina.rotation.y=.3;

console.log(akina);
akina.position.z=80;
akina.position.x=-19;


//silvermoon display

// const silverGeo = new THREE.PlaneGeometry(8,4,1,1);
const silverMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/silvermoon.jpg')});
const silver =new THREE.Mesh(planeGeo,silverMat);
silver.name='silver';
//hirothermal display

const hiroMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/hirothermal.jpg')});
const hiro =new THREE.Mesh(planeGeo,hiroMat);
hiro.name='hiro';

//anitpode display


const antiMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/antipode.jpg')});
const anti =new THREE.Mesh(planeGeo,antiMat);
anti.name='antipode';



//bubble display

const bubMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/bubble.jpg')});
const bubble =new THREE.Mesh(planeGeo,bubMat);
bubble.name='bubble';



//seekloc display

const seekMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/seekloc.jpg')});
const seek =new THREE.Mesh(planeGeo,seekMat);
seek.name='seekloc';


//lifeboat display

const lifeMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/lifeboat.jpg')});
const life =new THREE.Mesh(planeGeo,lifeMat);
life.name='lifeboat';


//iruka display
const irukaMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/iruka.jpg')});
const iruka = new THREE.Mesh(planeGeo,irukaMat);
iruka.name='iruka';

//antro display
const antroMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/antro.jpg')});
const antro = new THREE.Mesh(planeGeo,antroMat);
antro.name='antro';
//albator display
const albetorMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/albator.jpg')});
const albetor = new THREE.Mesh(planeGeo,albetorMat);
albetor.name='albetor';
//intergal display
const interMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/intergal.jpg')});
const intergal = new THREE.Mesh(planeGeo,interMat);
intergal.name='intergal';
//hypership display
const hyperMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/hypership.jpg')});
const hyper = new THREE.Mesh(planeGeo,hyperMat);
hyper.name='hyper';
//vigilante display
const vigilMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/vigilante.jpg')});
const vigil = new THREE.Mesh(planeGeo,vigilMat);
vigil.name='vigil';
//korbiyor display
const kobiMat =new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('./assets/korbiyor.jpg')});
const kobi = new THREE.Mesh(planeGeo,kobiMat);
kobi.name='kobi';
//group 
const grp = new THREE.Group();
grp.add(akina,silver,hiro,anti,bubble,seek,life,iruka,antro,albetor,intergal,hyper,vigil,kobi);





grp.children.forEach(child=>{
    // child.position.z=akina.position.z;
    child.userData='use';
    child.material.transparent=true;
    child.material.side=THREE.DoubleSide;
    child.material.opacity=1;

    
    child.position.x=akina.position.x+10;
})

for (let i=1;i<grp.children.length;i++){
grp.children[i].position.x=grp.children[i-1].position.x+10;
}
scene.add(grp);
grp.position.y=20;
grp.position.z=98;
grp.geometry = new THREE.CircleGeometry(30,14);
console.log(grp);
gui.add(grp.position,'x',-15,15).name('grp px ');
gui.add(grp.position,'z',-15,15).name('grp p z ');
gui.add(grp.rotation,'y',-1,1).name('grp r y ');
console.log(grp.getCenter)


var centerX = -20;
var centerZ = 100;
var radius = 25;
var numberOfPoints = grp.children.length;
var theta =  (Math.PI*2)/numberOfPoints;
let pointX,pointZ;


for ( var i = 0; i < grp.children.length; i++ ) {

    pointX = ( radius * Math.cos(theta * i)  );
    pointZ = ( radius * Math.sin(theta * i)  );
    grp.children[i].position.x= pointX;
    grp.children[i].position.z= pointZ;
    grp.children[i].lookAt(0,20,98);
    // grp.children[i].position.y= -2.15;
    



    
}
console.log(grp.children[2].position);
// controls = new OrbitControls( camera, canvas );
// controls.update();
//gui 



//gltf load
let gLoader = new GLTFLoader();
let ship,dash;
function glInit(){

gLoader.load('./assets/3d/lk ship.glb',function(gltf){
    scene.add(gltf.scene);
    ship=gltf.scene;
    // gltf.scene.opacity=0;
    // console.log(gltf.scene);
    // gltf.scene.scale.set(.5,.8,.3);
    ship.position.z=105;
    ship.position.y=-2.15;
    ship.rotation.y=Math.PI;
    console.log(ship);
    // ship.rotation.x=-0.1;
    ship.traverse(function(child){
        if(child.isMesh){
            child.material.opacity=0;
        }
    })
    ship.traverse(function(child){
        if(child.isMesh && child.name==='New_Futuristic_Jet_Cockpit_(Wip-2)_Version_2119'){
            // child.material.transparent=true;
            // child.material.opacity=0;
            dash=child;
            console.log(child)
        }
    })
    
    ship.traverse(function(child){
        // console.log(child);
        // child.material.opacity=0;

        if(child.isMesh && child.material.name==="Glass"){
            // console.log(child);
            // child.scale.set(.8,.8,.8);
            child.material= new THREE.MeshPhysicalMaterial({transparent:true,opacity:.02,emissive:0xffffff,depthTest:false,transmission:0})
        }
        else if(child.name==="Cube"||child.name==="Cube001"||child.name==="Cube003"||child.name==="Cube004"||child.name==="Cube005"||child.name==="Cube007"||child.name==="Cube008"||child.name==="Cube009"||child.name==="Cube010"||child.name==="Cube011"){
            // console.log(child);
            child.material= new THREE.MeshBasicMaterial({transparent:true,color:0xff0000,opacity:0});
            // child.scale.set(0,0,0);
            // child.material.transparent=true;
            
        }
    })
   
    ship.traverse(function(child){
        if(child.name==="Cube002"){
            // console.log(child);
            child.scale.x=0.2;
            child.scale.y=0.09;
            // child.position.z=.88;
            // child.position.x=0.5;
            // let nTex= new THREE.TextureLoader().load('./assets/uv1.png');
            // nTex.offset.y=-1;
            // nTex.center.y=-2;
            // let nTex =new THREE.TextureLoader().load('./assets/tron-font.jpg');
            // console.log(nTex)
            child.material= new THREE.MeshPhysicalMaterial({reflectivity:.8,color:0xff0000});
            gui.add(child.scale,'x',0,1).name('c2 x');
            gui.add(child.scale,'y',0,1).name('c2 y');
            gui.add(child.scale,'z',0,1).name('c2 z');
            // gui.add(child.position,'x',0,1)
        }
    });
    ship.traverse(function(child){
        if(child.name==="Cube006"){
            // console.log(child);
            child.scale.x=0.2;
            child.scale.y=0.09;
            // child.scale.x=0.12;
            // child.scale.y=0.17,
            // child.scale.z=0.013;
            // child.position.x=0.5;
            child.material= new THREE.MeshPhysicalMaterial({reflectivity:.8,emissive:1.4,color:0xff0000});
            gui.add(child.position,'x',0,1).name(' cp x');
            gui.add(child.position,'y',0,1).name(' cp y');
            gui.add(child.position,'z',0,1).name(' cp z');
            gui.add(child.scale,'x',0,1).name('c6 x');
            gui.add(child.scale,'y',0,1).name('c6 y');
            gui.add(child.scale,'z',0,1).name('c6 z');
        }
        
    });
});

}

let logo;
function lkInit(){
gLoader.load('./assets/3d/lunatick.glb',function(gltf){
    scene.add(gltf.scene);
    console.log(gltf.scene.children[0]);
    logo = gltf.scene.children[0];
    logo.rotation.x=Math.PI;
    logo.material= new THREE.MeshPhysicalMaterial({color:0x7c8a92,reflectivity:10,metalness:0.5,roughness:.2,emissive:0x000000})
    logo.material.metalness= 0.6;
    gui.add(logo.rotation,'x',-Math.PI,Math.PI).name('logo r x');
    gui.add(logo.rotation,'y',-Math.PI,Math.PI).name('logo r y');
    gui.add(logo.position,'x',-8,-7).name('logo p x');
    gui.add(logo.position,'y',29,30).name('logo p y')
    gui.add(logo.position,'z',50,100).name('logo p z')
    // gui.add(logo.scale,'x',0,1).name('logo s x');
    // gui.add(logo.scale,'y',0,1).name('logo s y');
    // gui.add(logo.scale,'z',0,1).name('logo s z');
    gltf.scene.position.set(8,-30,0);
    
})

}
console.log(logo)
const light = new THREE.HemisphereLight( 0x0000a0, 0x00000, 1 );
light.position.set(0,2,80);

scene.add( light );
let dLight= new THREE.DirectionalLight(0xff0000);
let dLight2= new THREE.DirectionalLight(0x00f0aa);
dLight.position.set(0,5,90);
dLight2.position.set(0,-30,90);

gui.add(dLight.position,'x',-30,30).name('dlight px');
gui.add(dLight.position,'y',-10,10).name('dlight py');
gui.add(dLight2.position,'x',-30,30).name('dlight2 px');
gui.add(dLight2.position,'y',-30,10).name('dlight2 py');
scene.add(dLight,dLight2);
let pLight= new THREE.PointLight({color:0xff0000});
pLight.position.set(0,.5,101);

let liTl = gsap.timeline({repeat:-1,yoyo:true});
liTl.from(dLight.position,{
    x:30,
    duration:2,
    ease:'power1'
},'simultaneously')
liTl.to(dLight.position,{
    x:-30,
    duration:2,
    ease:'power1'
})
liTl.from(dLight2.position,{
    x:-30,
    duration:2,
    ease:'power1'
},'simultaneously')
liTl.to(dLight2.position,{
    x:30,
    duration:2,
    ease:'power1'
})

// window.adddEventListener('onload',function(){
    
// })

let aLight= new THREE.AmbientLight(0xffffff,1);
// scene.add(aLight,pLight);

aLight.intensity=pLight.intensity=0;
gsap.to(aLight,{
    delay:1,
    intensity:1.5,
    duration:1,
    ease:'none'
});
gsap.to(pLight,{
    intensity:1,
    delay:3,
    duration:1,
    ease:'none',
})
gsap.to(aLight.color,{
    r:.5,
    g:.5,
    b:.5,
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
camera.rotation.x=-.04;



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
//star field
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
    
    // renderer.render(scene,camera);
    composer.render(scene,camera);
    camera.updateProjectionMatrix();
    // silver.position.x=akina.position.x+10;
    // hiro.position.x=silver.position.x+10;
    // anti.position.x=hiro.position.x+10;
    // bubble.position.x=anti.position.x+10;
    // seek.position.x=bubble.position.x+10;
    // life.position.x=seek.position.x+10;
    // akina.position.needsUpdate=hiro.position.needsUpdate=silver.position.needsUpdate=seek.position.needsUpdate=true;
    
  
    // controls.update();
    requestAnimationFrame(render);
    
}
function mouse (){
    camera.rotation.y= -(mouseX *0.00001);
    
    // requestAnimationFrame(mouse);
}
function animate(){
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
    // grp.rotation.y+=0.01;
    // grp.rotation.z+=0.01;
    pos.needsUpdate=true;
    requestAnimationFrame(animate);
}
render();
glInit();
lkInit();
// animate();
