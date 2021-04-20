<template>
    <div>
        <div class="ub ub-ac ub-pc ub-ver btn-wrapper">
            <div class="doc-desc">
                 <p>一款轻量级、模块化的前端 UI 组件库</p>
            </div>
            <div class="btn-box">
               <router-link :to="{name: 'giud'}">开始使用</router-link>
               <a target="_blank" class="btn-github" href="https://github.com/clearself/vs-ui">GitHub</a>
            </div>
        </div>
        <div ref="canvasFrame" class="container-wrapper"></div>
    </div>
  <!-- <div class="pg-index">
    <div class="index-container">
      <img style="width:200px" src="../assets/img/logo.png">
      <p>一款轻量级、模块化的前端 UI 组件库</p>
     </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
        <a target="_blank" class="btn-github" href="https://github.com/clearself/vs-ui">GitHub</a>
      </div>
    </div>
    <div ref="canvasFrame" class="container"></div>
  </div> -->
</template>

<script>
    var SEPARATION = 100,
    	AMOUNTX = 50,
    	AMOUNTY = 50;
    var container, stats; //容器，监视器
    var camera, scene, renderer; //相机，场景，渲染器
    var particles, particle, count = 0;
    var mouseX = 0,
    	mouseY = -438; //设置初始位置
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var temx = 0,
    	tempy = 0;
    var onOff = false;
  export default{
    data () {
      return {
        canvasFrame: null,
        height: document.documentElement.clientHeight
      }
    },
    mounted() {
    	this.$nextTick(() => {
    		onOff = false;
    		this.canvasFrame = this.$refs.canvasFrame;
    		this.init();
    		this.animate();
    	})
    },
    beforeDestroy(){
    	onOff = true;
    	window.cancelAnimationFrame(this.animate)
    },
    methods:{
        onDocumentMouseMove(event) {
        	mouseX = event.clientX - windowHalfX;
        	mouseY = -438;
        },
        onDocumentTouchStart(event) {
        	if(event.touches.length === 1) {
        		event.preventDefault();
        		mouseX = event.touches[0].pageX - windowHalfX;
        		mouseY = event.touches[0].pageY - windowHalfY;
        	}
        },
        onDocumentTouchMove(event) {
        	if(event.touches.length === 1) {
        		event.preventDefault();
        		mouseX = event.touches[0].pageX - windowHalfX;
        		mouseY = event.touches[0].pageY - windowHalfY;
        	}
        },
        animate() {
        	if(onOff){
        		return;
        	}
        	window.requestAnimationFrame(this.animate);
        	this.render();
        },
        render() { //移动相机形成动画
        	camera.position.x += (mouseX - camera.position.x) * .05;
        	camera.position.y += (-mouseY - camera.position.y) * .05;
        	camera.lookAt(scene.position);
        	var i = 0;
        	for(var ix = 0; ix < AMOUNTX; ix++) {
        		for(var iy = 0; iy < AMOUNTY; iy++) {
        			particle = particles[i++];
        			particle.position.y = (Math.sin((ix + count) * 0.3) * 50) +
        				(Math.sin((iy + count) * 0.5) * 50);
        			particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 +
        				(Math.sin((iy + count) * 0.5) + 1) * 4;
        		}
        	}

        	//console.log(camera.position.x,camera.position.y,camera.position.z)
        	renderer.render(scene, camera);
        	count += 0.1;
        },
        onWindowResize() {
        	windowHalfX = window.innerWidth / 2;
        	windowHalfY = window.innerHeight / 2;
        	camera.aspect = window.innerWidth / window.innerHeight;
        	camera.updateProjectionMatrix();
        	renderer.setSize(window.innerWidth, window.innerHeight);
        },
        init() {
        	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        	camera.position.z = 1000;
        	console.log(camera.position.x, camera.position.y, camera.position.z)
        	scene = new THREE.Scene();
        	particles = new Array();
        	var PI2 = Math.PI * 2;
        	var material = new THREE.SpriteCanvasMaterial({
        		color: 0x097bdb,
        		//color:0xffe600,//小点点的颜色
        		program: function(context) {
        			context.beginPath();
        			context.arc(0, 0, 0.5, 0, PI2, true);
        			context.fill();
        		}
        	});
        	var i = 0;
        	for(var ix = 0; ix < AMOUNTX; ix++) {
        		for(var iy = 0; iy < AMOUNTY; iy++) {
        			particle = particles[i++] = new THREE.Sprite(material);
        			particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        			particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
        			scene.add(particle);
        		}
        	}

        	var width = this.canvasFrame.clientWidth;
        	var height = this.canvasFrame.clientHeight;
        	renderer = new THREE.CanvasRenderer({
        		antialias: true,
        		alpha: true //设置背景透明
        	});
        	renderer.setSize(width, height);
        	this.canvasFrame.appendChild(renderer.domElement);
        	//renderer.setClearColor(0x13194b);//设置背景色
        	document.addEventListener('mousemove', this.onDocumentMouseMove, false);
        	document.addEventListener('touchstart', this.onDocumentTouchStart, false);
        	document.addEventListener('touchmove', this.onDocumentTouchMove, false);
        	//
        	window.addEventListener('resize', this.onWindowResize, false);
        	camera.position.x = 133.99999999999972;
        	camera.position.y = 437.99999999999943;
        	camera.lookAt(scene.position);
        	renderer.render(scene, camera);
        	this.onWindowResize();
        },
    }
  }
</script>
<style type="text/less" lang="less">
    @import "../assets/less/index";
    .btn-wrapper{
       position: fixed;
       height: 100%;
       left: 0;
       right: 0;
       bottom: 0;
       z-index: 3;
       .doc-desc{
           width:100%;
           position: absolute;
           left:0;
           top:32%;
           text-align: center;
           p{
               font-size:28px;
               color:#fff;
           }
       }
       .btn-box{
         width: 100%;
         z-index: 9;
         text-align: center;
         a {
           color: #fff;
           background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
           box-shadow: 0 0px 0px 0 rgba(51,105,231,0.4);
           display: inline-block;
           width: 190px;
           height: 56px;
           margin: 0 35px;
           font-size: 18px;
           line-height: 56px;
           border-radius: 28px;
           transition: all .3s;
           cursor: pointer;
         }
         a:hover{
           box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
         }
         .btn-github{
           color: #316DE9;
           border: 1px solid #2F6EE9;
           background: #fff;
           box-shadow: none;
         }
       }
    }
  .pg-index {
      .container-wrapper {
      	position: fixed;
      	height: 700px;
      	left: 0;
      	right: 0;
      	bottom: 0;
      	z-index: 2;
      }



  }
</style>
