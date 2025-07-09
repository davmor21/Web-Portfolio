import './style.css'
import profilePhoto from './profile-photo.jpg'

const app = document.querySelector('#app')
app.innerHTML = `
<div class="resume d-flex flex-column">
  <!-- HEADER -->
  <header class="position-relative text-center py-4">
    <h1 class="display-4 mb-1">Davon Morris</h1>
    <p class="lead mb-0">Programmer Analyst</p>
    <img
      src="${profilePhoto}"
      alt="Davon Morris"
      class="position-absolute profile-photo"
    />
  </header>

  <!-- CONTENT -->
  <div class="content d-flex flex-grow-1 overflow-hidden">
    <!-- EXPERIENCE (75%) -->
    <main class="main overflow-auto pe-3">
      <h2>Experience</h2>
      <div class="card shadow-sm mb-3">
        <div class="card-body">
          <h5 class="card-title">Programmer Analyst</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Jacam Catalyst | May 2025 – Present
          </h6>
          <p class="card-text">
            Develop and maintain internal applications using C#, JavaScript, and PowerShell.
            Manage Azure Active Directory and automate cloud resource provisioning.
          </p>
        </div>
      </div>
      <div class="card shadow-sm mb-3">
        <div class="card-body">
          <h5 class="card-title">Systems Administrator / Jr. Developer</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Jacam Catalyst | Apr 2024 – May 2025
          </h6>
          <p class="card-text">
            Provided desktop support, managed Active Directory & Azure environments,
            and wrote PowerShell scripts to automate IT tasks.
          </p>
        </div>
      </div>
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Desktop Support Analyst</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Jacam Catalyst | Aug 2022 – Apr 2024
          </h6>
          <p class="card-text">
            Handled first-level support for hardware & software, supported Office 365
            & Exchange, and troubleshooted network/printer issues.
          </p>
        </div>
      </div>
    </main>

    <!-- SIDEBAR (25%) -->
    <aside class="sidebar overflow-auto ps-3">
      <section id="education" class="mb-4">
        <h2>Education</h2>
        <ul class="list-unstyled mb-0">
          <li class="mb-3">
            <strong>Bachelor’s Degree, Computer Science</strong><br/>
            <small class="text-muted">Fort Hays State University | Jan 2024 – Dec 2025</small>
          </li>
          <li>
            <strong>Associate’s Degree, Computer Science</strong><br/>
            <small class="text-muted">Barton Community College | 2020 – 2022</small>
          </li>
        </ul>
      </section>

      <section id="skills" class="mb-4">
        <h2>Skills</h2>
        <div>
          <span class="badge bg-primary me-1 mb-1">JavaScript</span>
          <span class="badge bg-primary me-1 mb-1">C#</span>
          <span class="badge bg-primary me-1 mb-1">PowerShell</span>
          <span class="badge bg-primary me-1 mb-1">Python</span>
          <span class="badge bg-primary me-1 mb-1">Azure AD</span>
          <span class="badge bg-primary me-1 mb-1">HTML5</span>
          <span class="badge bg-primary me-1 mb-1">CSS3</span>
          <span class="badge bg-primary me-1 mb-1">React.js</span>
        </div>
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <ul class="list-inline mb-0">
          <li class="list-inline-item me-3">Cloud Computing</li>
          <li class="list-inline-item me-3">Automation</li>
          <li class="list-inline-item me-3">DevOps</li>
          <li class="list-inline-item">Problem Solving</li>
        </ul>
      </section>
    </aside>
  </div>

  <!-- FOOTER -->
  <footer id="contact" class="text-center py-3 border-top">
    <!-- buttons for screen -->
    <div class="btn-group mb-2">
      <a href="mailto:davm2142@gmail.com" class="btn btn-outline-primary" aria-label="Email">
        <i class="bi bi-envelope-fill me-1"></i>Email
      </a>
      <a href="https://www.linkedin.com/in/davon-morris/" target="_blank" class="btn btn-outline-primary" aria-label="LinkedIn">
        <i class="bi bi-linkedin me-1"></i>LinkedIn
      </a>
      <a href="https://github.com/davmor21" target="_blank" class="btn btn-outline-primary" aria-label="GitHub">
        <i class="bi bi-github me-1"></i>GitHub
      </a>
    </div>
    <!-- plain links for print -->
    <div class="print-links text-muted">
      Email: davm2142@gmail.com  |  LinkedIn: https://www.linkedin.com/in/davon-morris/  |  GitHub: https://github.com/davmor21
    </div>
  </footer>
</div>
`
