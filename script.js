// script.js

// Particle Effect for Divine Ambiance
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles loaded!');
  });
  
  // Diya Lighting Interaction
  document.getElementById('light-diya').addEventListener('click', function () {
    const diya = document.getElementById('diya');
    const blessing = document.getElementById('blessing');
  
    // Change diya image to lit state
    diya.style.backgroundImage = "url('assets/diya-on.png')";
  
    // Show blessing message
    blessing.style.display = 'block';
  
    // Add glowing effect to diya
    diya.style.boxShadow = '0 0 20px 10px #ff9800';
  
    // Disable button after clicking
    this.disabled = true;
    this.textContent = 'Diya Lit!';
  
    // Play background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();
  
    // Trigger 3D Shiva Linga Animation
    initShivaLinga();
  });
  
  // 3D Shiva Linga Animation
  function initShivaLinga() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('shiva-linga').appendChild(renderer.domElement);
  
    // Add Shiva Linga
    const geometry = new THREE.CylinderGeometry(1, 1, 5, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const shivaLinga = new THREE.Mesh(geometry, material);
    scene.add(shivaLinga);
  
    // Add Lighting
    const light = new THREE.PointLight(0xff9800, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
  
    // Camera Position
    camera.position.z = 10;
  
    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      shivaLinga.rotation.x += 0.01;
      shivaLinga.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }