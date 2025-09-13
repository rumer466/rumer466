// Read project id from URL (?id=zatca). Fallback to ?project=zatca if needed.
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id") || params.get("project");
const project = projects[projectId];
const container = document.getElementById("project-details");

// Lightbox state
let currentIndex = 0;
let currentImages = [];

function renderProject() {
  if (!project) {
    container.innerHTML = `
      <h1>Project Not Found</h1>
      <p>The project you're looking for does not exist.</p>
      <a href="index.html#projects" class="btn btn-secondary">
        <i class="fas fa-arrow-left"></i> Back to Projects
      </a>
    `;
    return;
  }

  // Main content
  container.innerHTML = `
    <h1>${project.title}</h1>
    ${project.status ? `<p class="project-status"><strong>Status:</strong> ${project.status}</p>` : ""}
    ${project.technologies ? `<p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>` : ""}

    ${project.problem ? `<h2>Problem</h2><p>${project.problem}</p>` : ""}
    ${project.purpose ? `<h2>Purpose</h2><p>${project.purpose}</p>` : ""}
    ${project.role ? `<h2>Role</h2><p>${project.role}</p>` : ""}

    ${
      project.solution && project.solution.length
        ? `<h2>Solution & Implementation</h2>
           <ul>${project.solution.map(item => `<li>${item}</li>`).join("")}</ul>`
        : ""
    }

    ${
      project.impact && project.impact.length
        ? `<h2>Impact</h2>
           <ul>${project.impact.map(item => `<li>${item}</li>`).join("")}</ul>`
        : ""
    }

    ${
      project.images && project.images.length
        ? `<h2>Screenshots</h2><div class="gallery" id="gallery"></div>`
        : ""
    }

    <a href="index.html#projects" class="btn btn-secondary back-btn">
      <i class="fas fa-arrow-left"></i> Back to Projects
    </a>
  `;

  // Render gallery thumbnails
  const gallery = document.getElementById("gallery");
  currentImages = project.images || [];

  if (gallery && currentImages.length) {
    currentImages.forEach((src, idx) => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} screenshot ${idx + 1}`;
      img.loading = "lazy";
      img.addEventListener("click", () => openLightbox(idx));

      item.appendChild(img);
      gallery.appendChild(item);
    });
  }

  // Lightbox handlers
  wireLightbox();
}

function wireLightbox() {
  const overlay = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  function show(index) {
    if (!currentImages.length) return;
    if (index < 0) index = currentImages.length - 1;
    if (index >= currentImages.length) index = 0;
    currentIndex = index;
    img.src = currentImages[currentIndex];
  }

  window.openLightbox = function (index) {
    show(index);
    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
  };

  function close() {
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
    img.src = "";
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close(); // click outside image closes
  });

  prevBtn.addEventListener("click", () => show(currentIndex - 1));
  nextBtn.addEventListener("click", () => show(currentIndex + 1));

  // Keyboard: Esc closes; ←/→ navigate
  document.addEventListener("keydown", (e) => {
    if (overlay.classList.contains("hidden")) return;
    if (e.key === "Escape") overlay.classList.add("hidden");
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
}

// Kick off
renderProject();
