<script setup>
  import { ref, computed } from 'vue';
  import HeroSection from './components/HeroSection.vue';
  import Features from './components/Features.vue';
  import HowItWorks from './components/HowItWorks.vue';
  import CallToAction from './components/CallToAction.vue';
  import logoLight from './assets/logo.png';
  import logoDark from './assets/logo-dark-mode.png';
  // Manage dark mode
  const isDarkMode = ref(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode.value);
  };
  // Computed property for logo source
  const logoSrc = computed(() => (isDarkMode.value ? logoDark : logoLight));

  // Dynamic icon based on theme
  const darkModeIcon = computed(() => (isDarkMode.value ? '🌙' : '☀️'));
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="logo">
        <img :src="logoSrc" alt="Visual Thoughts Logo" class="logo-img" />
        <div class="logo-text-group">
          <span class="logo-text">Visual Thoughts</span>
          <span class="tagline">Snapshot Journaling for Effortless Insights</span>
        </div>
      </div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <button class="download-btn">Coming Soon</button>
        <button class="dark-mode-btn" @click="toggleDarkMode">
          {{ darkModeIcon }}
        </button>
      </div>
    </nav>

    <HeroSection />
    <Features />
    <HowItWorks />
    <CallToAction />

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Visual Thoughts</h3>
          <p>Transform your photos into meaningful journal entries with AI</p>
        </div>
        <div class="footer-section">
          <h4>Features</h4>
          <a href="#features">Gratitude Journaling</a>
          <a href="#features">Reflective Journaling</a>
          <a href="#features">AI-Powered</a>
        </div>
        <div class="footer-section">
          <h4>Launch Updates</h4>
          <p>Coming soon to:</p>
          <a href="#" class="store-link">App Store</a>
          <a href="#" class="store-link">Google Play</a>
        </div>
        <div class="footer-section">
          <h4>Meet the Team</h4>
          <ul class="team-list">
            <li>
              <strong>Fayyaz Ali Khan</strong> <br />
              <a href="https://www.linkedin.com/in/fayyazak/" target="_blank">LinkedIn</a> |
              <a href="https://github.com/FayyazAK" target="_blank">GitHub</a>
            </li>
            <li>
              <strong>Mustfain Tariq</strong> <br />
              <a href="https://www.linkedin.com/in/mustfain/" target="_blank">LinkedIn</a> |
              <a href="https://github.com/MustfainTariq" target="_blank">GitHub</a>
            </li>
            <li>
              <strong>Haider Khan</strong> <br />
              <a href="https://www.linkedin.com/in/haider-khan-nuces/" target="_blank">LinkedIn</a> |
              <a href="https://github.com/haiderhk" target="_blank">GitHub</a>
            </li>            
          </ul>
        </div>
        
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Visual Thoughts. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
  :root {
    --primary-color: #66545e;
    --secondary-color: #d25959;
    --text-color: #213547;
    --bg-color: #ffffff;
    --accent-color: #42b883;
    --footer-color: #66545e;
    --call-to-action-gradient: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  }

  :root.dark {
    --primary-color: #fef7e4;
    --secondary-color: #d25959;
    --text-color: #f5f5f5;
    --bg-color: #1e1e1e;
    --accent-color: #42b883;
    --footer-color: #1e1e1e;
    --call-to-action-gradient: #1e1e1e;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }

  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
  }

  :root.dark .navbar {
    background-color: rgba(30, 30, 30, 0.95);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-img {
    height: 4rem;
  }

  .logo-text-group {
    display: flex;
    flex-direction: column;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }

  .tagline {
    font-size: 0.9rem;
    font-style: italic;
    color: var(--text-color);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
  }

  .download-btn {
    background-color: var(--secondary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  /* .download-btn:hover {
    opacity: 0.9;
  } */

  .dark-mode-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
    transition: transform 0.3s;
  }

  /* .dark-mode-btn:hover {
    transform: scale(1.1);
  } */

  .footer {
    background-color: var(--footer-color);
    color: white;
    padding: 4rem 2rem 2rem;
    margin-top: auto;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-section h3,
  .footer-section h4 {
    margin: 0;
    color: white;
  }

  .footer-section a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  .footer-section a:hover {
    color: white;
  }

  .footer-bottom {
    margin-top: 2rem;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
  }

  .footer-section ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .footer-section ul li {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .footer-content {
      grid-template-columns: 1fr;
    }
  }
</style>