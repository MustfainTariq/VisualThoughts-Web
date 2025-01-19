<script setup>
</script>

<template>
  <section class="cta">
    <div class="cta-content">
      <h2>Start Your Visual Journaling Journey Soon</h2>
      <p>Visual Thoughts is launching soon! Join our waitlist to be the first to know when we launch and get exclusive early access.</p>
      <div class="benefits">
        <div class="benefit">
          <span class="benefit-icon">📝</span>
          <p>Gratitude & Reflective Journaling</p>
        </div>
        <div class="benefit">
          <span class="benefit-icon">🤖</span>
          <p>AI-Powered Writing Assistant</p>
        </div>
        <div class="benefit">
          <span class="benefit-icon">🔒</span>
          <p>Biometric Security</p>
        </div>
      </div>
      <button class="waitlist-btn">Join the Waitlist</button>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.benefit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.benefit-icon {
  font-size: 2rem;
}

.benefit p {
  font-size: 1rem;
  margin: 0;
}

.waitlist-btn {
  background-color: white;
  color: var(--primary-color);
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s;
}

.waitlist-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .cta {
    padding: 4rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  .benefits {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>