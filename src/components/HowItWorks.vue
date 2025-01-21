<script setup>
  import captureStep from './../assets/Capture.png'; // Replace with the correct path
  import personalizeStep from './../assets/AI-Processing.png'; // Replace with the correct path
  import aiProcessingImage from './../assets/Personalize.png'; // Replace with the correct image path
  import customizeShareGif from './../assets/Share.gif'; // Replace with the correct GIF path
  
  const steps = [
    {
      number: '01',
      title: 'Capture',
      description: 'Capture your moment with our easy-to-use camera interface.',
      image: captureStep,
    },
    {
      number: '02',
      title: 'Personalize',
      description: 'Add details or select preferences to make your journal entry unique.',
      image: personalizeStep,
    },
    {
      number: '03',
      title: 'AI Processing',
      description: 'Our AI analyzes your photo and understands the context.',
      image: aiProcessingImage,
    },
    {
      number: '04',
      title: 'Customize & Share',
      description: 'Edit your entry and share it with your friends if you want.',
      gif: customizeShareGif,
    },
  ];
  </script>
  
  <template>
    <section id="how-it-works" class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps-container">
        <div v-for="step in steps" :key="step.number" class="step">
          <div class="step-number">{{ step.number }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <img v-if="step.image" :src="step.image" :alt="step.title" class="step-media" />
          <img v-if="step.gif" :src="step.gif" :alt="step.title" class="step-media" />
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .how-it-works {
    padding: 6rem 2rem;
    background-color: var(--bg-color);
    transition: background-color 0.3s, color 0.3s;
  }
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
    transition: color 0.3s;
  }
  
  .steps-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Four cards in a single row */
    gap: 2rem;
    max-width: 1400px; /* Larger container width for proper alignment */
    margin: 0 auto;
  }
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--secondary-color);
    border-radius: 12px;
    max-width: 350px; /* Smaller card width */
    height: auto;
    transition: transform 0.2s, background-color 0.3s, color 0.3s;
  }
  
  .step:hover {
    transform: translateY(-10px);
  }
  
  .step-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  p {
    color: var(--text-color);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  .step-media {
    width: 100%;
    max-width: 800px; /* Larger media width */
    height: auto;
    border-radius: 12px;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 1200px) {
    .steps-container {
      grid-template-columns: repeat(2, 1fr); /* Two cards per row on smaller screens */
    }
  }
  
  @media (max-width: 768px) {
    .how-it-works {
      padding: 4rem 1rem;
    }
  
    h2 {
      font-size: 2rem;
    }
  
    .steps-container {
      grid-template-columns: 1fr; /* Single column layout on mobile */
    }
  
    .step {
      max-width: 100%; /* Full-width cards for smaller screens */
    }
  
    .step-media {
      max-width: 100%;
    }
  }
  </style>
  