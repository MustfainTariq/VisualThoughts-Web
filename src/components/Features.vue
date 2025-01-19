<script setup>
  const features = [
    {
      title: 'Gratitude Journaling',
      description: 'Focus on appreciating life\'s gifts and cultivating a positive mindset through AI-guided gratitude journaling.',
      icon: '🙏'
    },
    {
      title: 'Reflective Journaling',
      description: 'Explore your thoughts and emotions deeper with our AI-powered reflective journaling feature.',
      icon: '🤔'
    },
    {
      title: 'Image Understanding',
      description: 'Advanced AI image captioning with context awareness to understand and describe your photos perfectly.',
      icon: '📸'
    },
    {
      title: 'Personalized Journaling',
      description: 'Tailor your journaling experience with preferences, location aliasing, and context from previous entries.',
      icon: '✨'
    },
    {
      title: 'Biometric Security',
      description: 'Protect your private thoughts with fingerprint and face recognition security features.',
      icon: '🔒'
    },
    {
      title: 'Social Journaling',
      description: 'Share your journal entries with friends and family on social media platforms with a single click.',
      icon: '📱'
    }
  ];
  </script>
  
  <template>
    <section id="features" class="features">
      <h2>Key Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
    .features {
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
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .feature-card {
      background: var(--bg-color); /* Dynamic card background */
      color: var(--text-color); /* Dynamic text color */
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, background-color 0.3s, color 0.3s;
      border: 1px solid rgba(102, 84, 94, 0.1);
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color); /* Dynamic heading color */
    }
    
    p {
      color: var(--text-color); /* Dynamic text color */
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .features {
        padding: 4rem 1rem;
      }
    
      h2 {
        font-size: 2rem;
      }
    }
    </style>
    
  