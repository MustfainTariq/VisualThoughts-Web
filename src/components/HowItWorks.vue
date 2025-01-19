<script setup>
const steps = [
  {
    number: '01',
    title: 'Take a Photo',
    description: 'Capture your moment with our easy-to-use camera interface.'
  },
  {
    number: '02',
    title: 'AI Processing',
    description: 'Our AI analyzes your photo and understands the context.'
  },
  {
    number: '03',
    title: 'Generate Entry',
    description: 'Get a beautifully written journal entry based on your photo.'
  },
  {
    number: '04',
    title: 'Customize & Share',
    description: 'Edit your entry and share it with your friends if you want.'
  }
]
</script>

<template>
  <section id="how-it-works" class="how-it-works">
    <h2>How It Works</h2>
    <div class="steps-container">
      <div v-for="step in steps" :key="step.number" class="step">
        <div class="step-number">{{ step.number }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </div>
    <div class="demo-image">
      <!-- <img src="./../assets/Main-Menu.jpg" alt="Visual Thoughts Demo" /> -->
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  padding: 6rem 2rem;
  background-color: white;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.step {
  text-align: center;
  padding: 2rem;
}

.step-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

p {
  color: #666;
  line-height: 1.6;
}

.demo-image {
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.demo-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .how-it-works {
    padding: 4rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .steps-container {
    grid-template-columns: 1fr;
  }
}
</style>