<script setup>
  import { ref, onMounted } from 'vue';
  
  // Reference for the video element
  const videoRef = ref(null);
  
  // Start video muted so it can autoplay
  const isMuted = ref(true);
  
  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.value) {
      isMuted.value = !isMuted.value;
      videoRef.value.muted = isMuted.value;
    }
  };
  
  // Log and troubleshoot video playback
  onMounted(() => {
    if (videoRef.value) {
      videoRef.value.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully.');
      });
  
      videoRef.value.addEventListener('error', (e) => {
        console.error('Video failed to load:', e);
      });
  
      videoRef.value.addEventListener('play', () => {
        console.log('Video is playing.');
      });
    }
  });
  </script>
  
  <template>
    <section class="hero">
      <div class="hero-content">
        <h1>Transform Your Photos into Meaningful Journals</h1>
        <p>
          Getting started with journaling is now easier than ever. Instead of worrying about "how to write", just show us "what to write" and we'll write it for you using AI.
        </p>
        <div class="launch-info">
          <span class="launch-badge">Coming Soon</span>
          <p class="launch-text">
            Join the waitlist to be notified when we launch!
          </p>
        </div>
        <div class="cta-buttons">
          <button class="primary-btn">Join Waitlist</button>
          <button class="secondary-btn">Learn More</button>
        </div>
      </div>
  
      <div class="hero-video">
        <!-- Note: `muted` is bound to isMuted so the video can autoplay -->
        <video
          ref="videoRef"
          autoplay
          loop
          playsinline
          :muted="isMuted"
        >
          <source src="./../assets/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          class="mute-btn"
          @click="toggleMute"
          :aria-label="isMuted ? 'Unmute Audio' : 'Mute Audio'"
        >
          <span v-if="isMuted">🔇</span>
          <span v-else>🔊</span>
        </button>
      </div>
    </section>
  </template>
  
  <style scoped>
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 6rem 2rem;
      background: var(--bg-color); /* Use dynamic background color */
      transition: background-color 0.3s;
    }
    
    .hero-content {
      flex: 1;
      max-width: 600px;
      padding: 2rem;
    }
    
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      color: var(--primary-color); /* Use dynamic primary color */
      transition: color 0.3s;
    }
    
    p {
      font-size: 1.25rem;
      color: var(--text-color); /* Use dynamic text color */
      margin-bottom: 2rem;
      transition: color 0.3s;
    }
    
    .launch-info {
      margin-bottom: 2rem;
    }
    
    .launch-badge {
      background-color: var(--secondary-color); /* Dynamic badge color */
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    .launch-text {
      margin-top: 1rem;
      font-size: 1rem;
      color: var(--primary-color); /* Use dynamic text color */
      transition: color 0.3s;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
    }
    
    .primary-btn,
    .secondary-btn {
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .primary-btn {
      background-color: var(--secondary-color); /* Dynamic button background */
      color: white;
      border: none;
    }
    
    .secondary-btn {
      background-color: transparent;
      border: 2px solid var(--primary-color); /* Dynamic button border */
      color: var(--primary-color); /* Dynamic button text */
      transition: color 0.3s, border-color 0.3s;
    }
    
    .primary-btn:hover,
    .secondary-btn:hover {
      transform: translateY(-2px);
    }
    
    .hero-video {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    
    .hero-video video {
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s;
    }
    
    .mute-btn {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      border: none;
      border-radius: 50%;
      padding: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
    }
    
    .mute-btn:hover {
      background-color: rgba(0, 0, 0, 0.9);
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
    
      .hero-video {
        margin-top: 2rem;
      }
    }
    </style>
    
  