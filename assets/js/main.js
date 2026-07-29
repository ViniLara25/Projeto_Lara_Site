(() => {
  "use strict";

  const body = document.body;
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const webUrl = body.dataset.laraWebUrl || "/";
  document.querySelectorAll("[data-lara-link]").forEach(link => {
    link.href = webUrl;
  });

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 14);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav?.classList.toggle("open", !open);
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle?.setAttribute("aria-expanded", "false");
      nav?.classList.remove("open");
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      navToggle?.setAttribute("aria-expanded", "false");
      nav?.classList.remove("open");
    }
  });

  const revealItems = document.querySelectorAll(".reveal");
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -30px" });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const demos = {
    uber: {
      title: "Abrir o Uber",
      description: "A Lara interpreta o pedido e prepara a abertura do aplicativo compatível.",
      video: "assets/videos/demo-uber.mp4",
      poster: "assets/images/poster-uber.webp",
      label: "Demonstração da Lara abrindo o Uber"
    },
    spotify: {
      title: "Abrir o Spotify",
      description: "Um comando natural pode iniciar a experiência de música no Android.",
      video: "assets/videos/demo-spotify.mp4",
      poster: "assets/images/poster-spotify.webp",
      label: "Demonstração da Lara abrindo o Spotify"
    },
    timer: {
      title: "Preparar um timer",
      description: "A Lara organiza o pedido e encaminha a configuração de tempo no aparelho.",
      video: "assets/videos/demo-timer.mp4",
      poster: "assets/images/poster-timer.webp",
      label: "Demonstração da Lara preparando um timer"
    },
    alarm: {
      title: "Adicionar despertador",
      description: "Horário e intenção são interpretados antes de abrir a configuração compatível.",
      video: "assets/videos/demo-alarm.mp4",
      poster: "assets/images/poster-alarm.webp",
      label: "Demonstração da Lara adicionando um despertador"
    }
  };

  const video = document.getElementById("demo-video");
  const demoTitle = document.getElementById("demo-title");
  const demoDescription = document.getElementById("demo-description");
  const videoControl = document.querySelector("[data-video-control]");
  const selectors = [...document.querySelectorAll("[data-demo]")];
  let videoInView = false;
  let userPaused = false;

  const safePlay = () => {
    if (!video || prefersReducedMotion || userPaused || !videoInView) return;
    video.play().catch(() => {
      videoControl?.classList.add("paused");
    });
  };

  selectors.forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.demo;
      const demo = demos[key];
      if (!demo || !video) return;

      selectors.forEach(item => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });

      video.pause();
      video.poster = demo.poster;
      video.src = demo.video;
      video.setAttribute("aria-label", demo.label);
      video.load();

      demoTitle.textContent = demo.title;
      demoDescription.textContent = demo.description;
      userPaused = false;
      videoControl?.classList.remove("paused");
      safePlay();
    });
  });

  videoControl?.addEventListener("click", () => {
    if (!video) return;

    if (video.paused) {
      userPaused = false;
      video.play().catch(() => {});
      videoControl.classList.remove("paused");
      videoControl.setAttribute("aria-label", "Pausar vídeo");
    } else {
      userPaused = true;
      video.pause();
      videoControl.classList.add("paused");
      videoControl.setAttribute("aria-label", "Reproduzir vídeo");
    }
  });

  if (video && "IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        videoInView = entry.isIntersecting && entry.intersectionRatio > 0.35;
        if (videoInView) {
          safePlay();
        } else {
          video.pause();
        }
      });
    }, { threshold: [0, 0.35, 0.7] });

    videoObserver.observe(video);
  } else if (video) {
    videoInView = true;
    safePlay();
  }

  const tilt = document.querySelector("[data-tilt]");
  if (tilt && !prefersReducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    tilt.addEventListener("pointermove", event => {
      const rect = tilt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tilt.style.transform = `rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    });

    tilt.addEventListener("pointerleave", () => {
      tilt.style.transform = "";
    });
  }
})();
