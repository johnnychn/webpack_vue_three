<template>
  <div ref="three_page" class="page" v-resize="onResize">

  </div>
</template>

<script>
  import resize from 'vue-resize-directive'
  import * as THREE from 'three';
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
  import Logo from '../assets/logo.png'


  let scene, camera, ambientLight, renderer, controls;

  export default {
    directives: {
      resize,
    },
    name: 'ThreePage',
    data() {
      return {
        msg: 'ThreeJS'
      }
    },
    methods: {
      onResize: function (e) {
        //窗口大小改变
        let width = e.clientWidth;
        let height = e.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    },

    mounted: function () {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      ambientLight = new THREE.AmbientLight(0x404040); // soft white light
      scene.add(ambientLight);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      this.$refs['three_page'].appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      let geometry = new THREE.BoxGeometry(1, 1, 1);

      let texture = new THREE.TextureLoader().load(Logo);
      let material = new THREE.MeshBasicMaterial({map: texture});
      material.flatShading = true;

      let cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      let animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .page {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
