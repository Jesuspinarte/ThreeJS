import "./style.css";
import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Objects
const group = new THREE.Group();
const cubes = [];
scene.add(group);

for (let i = 0; i < 3; ++i) {
  cubes.push(
    new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({
        color: i === 0 ? "#0aa" : i === 1 ? "#aa0" : "#a0a",
      })
    )
  );

  cubes[i].position.x = i === 0 ? 0 : i === 1 ? -1.75 : 1.75;
}
group.position.y = 0.5;
group.scale.y = 2;
group.rotation.y = 1;
group.add(...cubes);

// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "#0bb" });
// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

// // Change position
// mesh.position.set(0.7, -0.6, 1);

// // Axes helper
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

// // Change scale
// mesh.scale.set(2, 0.5, 0.5);

// // Change rotation
// const rotation = Math.PI * 0.25;
// mesh.rotation.set(rotation, rotation, 0);

// Sizes
const sizes = {
  width: 785,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

// Camera look at mesh
// camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
