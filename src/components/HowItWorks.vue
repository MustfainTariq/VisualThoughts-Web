<script setup>
  import captureStep from './../assets/take-photo.png'; // Replace with the correct path
  import personalizeStep from './../assets/personalize.png'; // Replace with the correct path
  import aiProcessingImage from './../assets/process.png'; // Replace with the correct image path
  import customizeShareVideo from './../assets/share.mp4'; // Replace with the correct video path
  
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
      image: aiProcessingImage // Step 3 is now an image
    },
    {
      number: '04',
      title: 'Customize & Share',
      description: 'Edit your entry and share it with your friends if you want.',
      video: customizeShareVideo // Step 4 remains a video
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
          <!-- Use image or video depending on the step -->
          <img v-if="step.image" :src="step.image" :alt="step.title" class="step-media" />
          <video
            v-if="step.video"
            :src="step.video"
            autoplay
            muted
            loop
            playsinline
            class="step-media"
          ></video>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
    .how-it-works {
      padding: 6rem 2rem;
      background-color: var(--bg-color); /* Use dynamic background color */
      transition: background-color 0.3s, color 0.3s;
    }
    
    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: var(--primary-color); /* Dynamic text color */
      transition: color 0.3s;
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
      background-color: var(--bg-color); /* Dynamic card background */
      color: var(--text-color); /* Dynamic text color */
      border: 1px solid var(--secondary-color); /* Use secondary color for borders */
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
      color: var(--primary-color); /* Dynamic text color for step numbers */
      margin-bottom: 1rem;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color); /* Dynamic text color for step titles */
    }
    
    p {
      color: var(--text-color); /* Dynamic text color for step descriptions */
      line-height: 1.6;
    }
    
    .step-media {
      margin-top: 1.5rem;
      max-width: 100%;
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
    }
    </style>
    
    