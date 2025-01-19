<script setup>
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Travel Blogger',
    content: 'Visual Thoughts has completely transformed how I document my travels. The AI-generated entries capture the essence of my experiences perfectly.',
    avatar: './home/project/src/assets/Main-Menu.PNG'
  },
  {
    name: 'Michael Chen',
    role: 'Photography Enthusiast',
    content: 'The way this app turns my photos into meaningful journal entries is incredible. It\'s like having a personal writer who knows exactly what I want to say.',
    avatar: './home/project/src/assets/Main-Menu.PNG'
  },
  {
    name: 'Emma Williams',
    role: 'Daily Journaler',
    content: 'I\'ve tried many journaling apps, but Visual Thoughts stands out with its AI capabilities. It makes journaling effortless and enjoyable.',
    avatar: './home/project/src/assets/Main-Menu.PNG'
  }
]
</script>

<template>
  <section id="testimonials" class="testimonials">
    <h2>What Our Users Say</h2>
    <div class="testimonials-grid">
      <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
        <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar" />
        <div class="testimonial-content">
          <p>"{{ testimonial.content }}"</p>
          <div class="testimonial-author">
            <strong>{{ testimonial.name }}</strong>
            <span>{{ testimonial.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 6rem 2rem;
  background-color: #f8f9fa;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  object-fit: cover;
}

.testimonial-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.testimonial-author strong {
  color: var(--text-color);
}

.testimonial-author span {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 4rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>