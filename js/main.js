document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Loader ---------- */
  var loader = document.getElementById("loader");
  var progress = document.querySelector(".loader-progress");
  var pct = 0;
  var progInterval = setInterval(function () {
    pct += Math.random() * 18;
    if (pct > 92) pct = 92;
    if (progress) progress.style.width = pct + "%";
  }, 120);

  function finishLoad() {
    clearInterval(progInterval);
    if (progress) progress.style.width = "100%";
    setTimeout(function () {
      if (loader) loader.classList.add("hidden");
      document.body.classList.add("loaded");
    }, 350);
  }
  if (document.readyState === "complete") {
    setTimeout(finishLoad, 400);
  } else {
    window.addEventListener("load", function () { setTimeout(finishLoad, 400); });
  }
  // Safety net in case load event is delayed
  setTimeout(finishLoad, 3200);

  /* ---------- Custom cursor ---------- */
  var dot = document.getElementById("cursorDot");
  var ring = document.getElementById("cursorRing");
  var hasFinePointer = window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches;

  if (hasFinePointer && dot && ring) {
    var mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    }, { passive: true });

    function ringLoop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(ringLoop);
    }
    ringLoop();

    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest("[data-hover]")) ring.classList.add("hover");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest("[data-hover]")) ring.classList.remove("hover");
    });
  } else {
    document.body.style.cursor = "auto";
  }

  /* ---------- Nav ---------- */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("navBurger");
  var mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }, { passive: true });

  if (burger) {
    burger.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
    });
  }
  document.querySelectorAll(".mobile-menu a").forEach(function (a) {
    a.addEventListener("click", function () { mobileMenu.classList.remove("open"); });
  });

  /* ---------- Render data-driven sections ---------- */
  var projectGrid = document.getElementById("projectGrid");
  if (projectGrid && typeof PROJECTS !== "undefined") {
    projectGrid.innerHTML = PROJECTS.map(function (p) {
      var linkHtml = p.url && p.url !== "#"
        ? '<a class="card-link" href="' + p.url + '" target="_blank" rel="noopener" data-hover>Ver projeto</a>'
        : '<span class="card-link" style="opacity:.4">Privado</span>';
      return (
        '<div class="card" data-cat="' + p.cat + '" data-reveal>' +
          '<div class="card-top"><span class="card-icon">' + p.icon + '</span><span class="card-n">' + p.n + '</span></div>' +
          '<h4>' + p.title + '</h4>' +
          '<div class="card-sub">' + p.sub + '</div>' +
          '<p>' + p.desc + '</p>' +
          '<div class="card-tags">' + p.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + '</div>' +
          linkHtml +
        '</div>'
      );
    }).join("");
  }

  var servicesGrid = document.getElementById("servicesGrid");
  if (servicesGrid && typeof SERVICES !== "undefined") {
    servicesGrid.innerHTML = SERVICES.map(function (s) {
      return (
        '<div class="service-card" data-reveal>' +
          '<div class="s-icon">' + s.icon + '</div>' +
          '<h4>' + s.title + '</h4>' +
          '<p>' + s.desc + '</p>' +
        '</div>'
      );
    }).join("");
  }

  var clientsGrid = document.getElementById("clientsGrid");
  if (clientsGrid && typeof CLIENTS !== "undefined") {
    clientsGrid.innerHTML = CLIENTS.map(function (c) {
      return (
        '<a class="client-card" href="' + c.url + '" target="_blank" rel="noopener" data-hover data-reveal>' +
          '<span class="client-dot"></span>' +
          '<span><strong>' + c.name + '</strong><small>' + c.cat + '</small></span>' +
        '</a>'
      );
    }).join("");
  }

  /* ---------- 3D tilt on cards (cinematic hover) ---------- */
  if (hasFinePointer) {
    document.addEventListener("mousemove", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "perspective(900px) rotateY(" + (px * 10) + "deg) rotateX(" + (-py * 10) + "deg) translateY(-6px)";
    }, { passive: true });
    document.addEventListener("mouseout", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
        card.style.transform = "";
      }
    });
  }

  /* ---------- Filters ---------- */
  var filterBtns = document.querySelectorAll(".filter");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      document.querySelectorAll("#projectGrid .card").forEach(function (card) {
        var match = f === "all" || card.getAttribute("data-cat") === f;
        card.style.display = match ? "" : "none";
      });
    });
  });

  /* ---------- Scroll reveal (IntersectionObserver, dependency-free) ---------- */
  var revealTargets = document.querySelectorAll("[data-reveal]");
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  revealTargets.forEach(function (el) { revealObserver.observe(el); });

  /* ---------- Skill bars ---------- */
  var skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".skill").forEach(function (el) { skillObserver.observe(el); });

  /* ---------- Stat counters ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var start = performance.now();
    var dur = 1600;
    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(function (el) { countObserver.observe(el); });

  /* ---------- Hero scroll-linked 3D scene ---------- */
  var heroEl = document.getElementById("hero");
  var heroContent = document.querySelector(".hero-content");
  function onHeroScroll() {
    if (!heroEl) return;
    var h = heroEl.offsetHeight;
    var p = Math.min(Math.max(window.scrollY / h, 0), 1);
    if (window.__silveiraScenes && window.__silveiraScenes.hero) {
      window.__silveiraScenes.hero.setScroll(p);
    }
    if (heroContent) {
      heroContent.style.opacity = String(1 - p * 1.3);
      heroContent.style.transform = "translateY(" + (p * 60) + "px)";
    }
  }
  window.addEventListener("scroll", onHeroScroll, { passive: true });
  onHeroScroll();

  /* ---------- Anchor smooth focus (accessibility) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
