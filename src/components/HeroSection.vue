<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Transform Your Photos into Meaningful Journals</h1>
      <p>Getting started with journaling is now easier than ever. Instead of worrying about "how to write", just show us "what to write" and we'll write it for you using AI.</p>
      <div class="launch-info">
        <span class="launch-badge">Coming Soon</span>
        <p class="launch-text">Join the waitlist to be notified when we launch!</p>
      </div>
      <div class="cta-buttons">
        <button class="primary-btn">Join Waitlist</button>
        <button class="secondary-btn">Learn More</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="./../assets/Main-Menu.jpg" alt="Visual Thoughts App Demo" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%);
}

.hero-content {
  flex: 1;
  max-width: 600px;
  padding: 2rem;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

p {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.launch-info {
  margin-bottom: 2rem;
}

.launch-badge {
  background-color: var(--secondary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
}

.launch-text {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--primary-color);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn, .secondary-btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s;
}

.primary-btn {
  background-color: var(--secondary-color);
  color: white;
  border: none;
}

.secondary-btn {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.primary-btn:hover, .secondary-btn:hover {
  transform: translateY(-2px);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 25%; /* Adjusted from 100% to 80% */
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 4rem 1rem;
  }

  .hero-content {
    padding: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .cta-buttons {
    justify-content: center;
  }

  .hero-image {
    margin-top: 2rem;
  }
}
</style>