<script setup>
  import captureStep from './../assets/Capture.png'; // Replace with the correct path
  import personalizeStep from './../assets/Personalize.png'; // Replace with the correct path
  import aiProcessingImage from './../assets/AI-Processing.png'; // Replace with the correct image path
  import customizeShareGif from './../assets/Share.gif'; // Replace with the correct GIF path
  
  const steps = [
    {
      number: '01',
      title: 'Capture',
      description: 'Capture your moment with our easy-to-use camera interface.',
      image: captureStep
    },
    {
      number: '02',
      title: 'Personalize',
      description: 'Add details or select preferences to make your journal entry unique.',
      image: personalizeStep
    },
    {
      number: '03',
      title: 'AI Processing',
      description: 'Our AI analyzes your photo and understands the context.',
      image: aiProcessingImage
    },
    {
      number: '04',
      title: 'Customize & Share',
      description: 'Edit your entry and share it with your friends if you want.',
      gif: customizeShareGif
    }
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center; /* Center align grid items */
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
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
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
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  p {
    color: var(--text-color);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .step-media {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
  
    .step-media {
      max-width: 100%;
    }
  }
  </style>
  