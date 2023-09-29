import './style.css'

import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000)


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)

const rotacloudTexture = new THREE.TextureLoader().load('rotacloud1.png')
const geometery = new THREE.BoxGeometry(20,20,20)
// const material = new THREE.MeshBasicMaterial({color: 0xff6050, wireframe: true})
const rotaMaterial = new THREE.MeshBasicMaterial({map: rotacloudTexture})
const cube = new THREE.Mesh( geometery, rotaMaterial)
scene.add(cube)

const light1 = new THREE.PointLight(0xc0c0ff, 1)
light1.position.set(20,20,20)
scene.add(light1)

// const light2 = new THREE.PointLight(0x00ffff, 1)
// light1.position.set(-30,-30 ,20)
// scene.add(light2)


const lightHelper = new THREE.PointLightHelper(light1)
const gridHelper = new THREE.GridHelper( 200, 50)
scene.add(lightHelper)

const ambientLight  = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)


const controls = new OrbitControls(camera, renderer.domElement)

function animate(){
  requestAnimationFrame (animate)

  cube.rotation.x += 0.01
  cube.rotation.y -= 0.01
  cube.rotation.z += 0.01

  controls.update()

  renderer.render(scene, camera)
}

animate()



