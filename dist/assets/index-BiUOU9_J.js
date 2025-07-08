(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector("#app");c.innerHTML=`
  <div class="container">
    <!-- Intro Hero -->
    <div class="intro">
      <h1 class="display-4">Davon Morris</h1>
      <p class="lead">Software Developer</p>
    </div>

    <!-- About Section -->
    <section id="about" class="mb-5">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="mb-5">
      <h2>Projects</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Project One</h5>
              <p class="card-text">Short description of project one.</p>
              <a href="#" class="btn btn-primary btn-sm">Repo</a>
              <a href="#" class="btn btn-outline-primary btn-sm">Demo</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Project Two</h5>
              <p class="card-text">Short description of project two.</p>
              <a href="#" class="btn btn-primary btn-sm">Repo</a>
              <a href="#" class="btn btn-outline-primary btn-sm">Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2>Contact</h2>
      <ul class="list-unstyled d-flex gap-3">
        <li>
          <a href="mailto:davm2142@gmail.com" class="text-decoration-none">
            <i class="bi bi-envelope-fill me-1"></i>
            Email Me
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davon-morris/" target="_blank" class="text-decoration-none">
            <i class="bi bi-linkedin me-1"></i>
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  </div>
`;
