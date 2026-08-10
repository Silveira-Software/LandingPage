/* Cinematic 3D scenes — vanilla Three.js r128, no build step. */
(function () {
  if (typeof THREE === "undefined") return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function makeScene(canvasId, opts) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    var isMobile = window.innerWidth < 760;
    var particleCount = opts.particles ? (isMobile ? Math.floor(opts.particles * 0.45) : opts.particles) : 0;

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch (e) {
      return null;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight, false);

    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05060a, opts.fogDensity || 0.055);

    var camera = new THREE.PerspectiveCamera(55, (canvas.clientWidth || window.innerWidth) / (canvas.clientHeight || window.innerHeight), 0.1, 100);
    camera.position.set(0, 0, opts.camZ || 9);

    var group = new THREE.Group();
    scene.add(group);

    // Particle field
    var positions = new Float32Array(particleCount * 3);
    var colors = new Float32Array(particleCount * 3);
    var colorA = new THREE.Color(0x00f0ff);
    var colorB = new THREE.Color(0x8b5cf6);
    for (var i = 0; i < particleCount; i++) {
      var r = opts.radius * (0.4 + Math.random() * 0.6);
      var theta = Math.random() * Math.PI * 2;
      var phi = Math.acos((Math.random() * 2) - 1);
      var x = r * Math.sin(phi) * Math.cos(theta);
      var y = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      var z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      var mixed = colorA.clone().lerp(colorB, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }
    var pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    var pMat = new THREE.PointsMaterial({ size: opts.pointSize || 0.045, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });
    var points = new THREE.Points(pGeo, pMat);
    group.add(points);

    // Wireframe core geometry (network node cluster)
    var coreGroup = new THREE.Group();
    var shapeCount = opts.shapes || 3;
    for (var s = 0; s < shapeCount; s++) {
      var geo = new THREE.IcosahedronGeometry(opts.coreSize * (0.5 + s * 0.35), 1);
      var mat = new THREE.MeshBasicMaterial({ color: s % 2 === 0 ? 0x00f0ff : 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.35 - s * 0.06 });
      var mesh = new THREE.Mesh(geo, mat);
      mesh.userData.speed = 0.04 + s * 0.02;
      mesh.userData.axis = new THREE.Vector3(Math.random() - 0.5, 1, Math.random() - 0.5).normalize();
      coreGroup.add(mesh);
    }
    group.add(coreGroup);

    var mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    function onMouseMove(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    if (opts.parallax) window.addEventListener("mousemove", onMouseMove, { passive: true });

    function onResize() {
      var w = canvas.clientWidth || window.innerWidth;
      var h = canvas.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    window.addEventListener("resize", onResize);

    var clock = new THREE.Clock();
    var scrollProgress = 0;
    var visible = true;

    if (opts.io) {
      var io = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
      }, { threshold: 0 });
      io.observe(canvas);
    }

    function tick() {
      requestAnimationFrame(tick);
      if (!visible) return;
      var t = clock.getElapsedTime();

      group.rotation.y = t * 0.06;
      points.rotation.x = Math.sin(t * 0.05) * 0.1;

      coreGroup.children.forEach(function (mesh) {
        mesh.rotateOnAxis(mesh.userData.axis, mesh.userData.speed * 0.02);
      });

      if (opts.parallax && !reduceMotion) {
        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;
        camera.position.x = targetX * (opts.parallaxStrength || 1.2);
        camera.position.y = -targetY * (opts.parallaxStrength || 1.2) * 0.6;
        camera.lookAt(0, 0, 0);
      }

      if (opts.scrollFade) {
        camera.position.z = (opts.camZ || 9) + scrollProgress * 6;
        group.rotation.z = scrollProgress * 0.15;
      }

      renderer.render(scene, camera);
    }
    tick();

    return {
      setScroll: function (p) { scrollProgress = p; },
    };
  }

  var heroScene = makeScene("scene", {
    particles: 2600,
    radius: 6,
    coreSize: 1.6,
    shapes: 3,
    camZ: 9,
    parallax: true,
    parallaxStrength: 1.4,
    scrollFade: true,
    pointSize: 0.05,
    fogDensity: 0.05,
    io: true,
  });

  var contactScene = makeScene("sceneContact", {
    particles: 900,
    radius: 7,
    coreSize: 1.2,
    shapes: 2,
    camZ: 10,
    parallax: false,
    scrollFade: false,
    pointSize: 0.045,
    fogDensity: 0.06,
    io: true,
  });

  // Expose for scroll-linked updates in main.js
  window.__silveiraScenes = { hero: heroScene, contact: contactScene };
})();
