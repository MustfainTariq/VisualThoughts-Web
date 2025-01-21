<script setup>
    import { ref } from 'vue';
    import saveWaitlistDetails from './saveWaitlistDetails';
    
    // Form fields
    const name = ref('');
    const email = ref('');
    const excitement = ref('😊');
    
    // Emit the `close` event
    const emit = defineEmits(['close']);
    
    // State for showing the thank-you message
    const showThanksMessage = ref(false);
    
    // Handle form submission
    const submitForm = async () => {
      if (name.value.trim() && email.value.trim()) {
        // Show the thank-you message
        showThanksMessage.value = true;
    
        // Proceed with saving in the background
        saveWaitlistDetails(name.value.trim(), email.value.trim(), excitement.value)
          .then((success) => {
            if (success) {
              console.log('Details saved successfully.');
            } else {
              console.error('Failed to save details.');
            }
          })
          .catch((error) => {
            console.error('An error occurred:', error);
          });
    
        // Reset the form fields
        name.value = '';
        email.value = '';
        excitement.value = '😊';
    
        // Close the modal after showing the thank-you message
        setTimeout(() => {
          showThanksMessage.value = false; // Reset thank-you message state
          emit('close'); // Close the modal
        }, 2000); // Display the message for 2 seconds
      } else {
        alert('Please fill in all the fields.');
      }
    };
    </script>
    
    <template>
      <div class="modal-overlay" @click.self="emit('close')">
        <div class="modal">
          <!-- Close Icon: Hidden when the thanks message is displayed -->
          <button
            v-if="!showThanksMessage"
            class="close-icon"
            @click="emit('close')"
            aria-label="Close"
          >
            ✖
          </button>
    
          <!-- Thank-You Message -->
          <div v-if="showThanksMessage" class="thanks-message">
            <p>Thanks for joining the waitlist!</p>
          </div>
    
          <!-- Form -->
          <form v-else @submit.prevent="submitForm">
            <h3>Join the Waitlist</h3>
            <label for="name">Name</label>
            <input
              v-model="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
    
            <label for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
    
            <label for="excitement">How excited are you?</label>
            <select v-model="excitement" id="excitement">
              <option value="😊">😊 Excited</option>
              <option value="😁">😁 Super Excited</option>
              <option value="🤩">🤩 Can't Wait</option>
            </select>
    
            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </template>
    
    <style scoped>
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    .modal {
      background: var(--bg-color);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
      position: relative;
    }
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: var(--text-color);
    }
    
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(--text-color);
    }
    
    input,
    select {
      width: 100%;
      padding: 0.5rem;
      border: 1.5px solid var(--secondary-color);
      border-radius: 8px;
      font-size: 1rem;
      color: rgb(108, 108, 108);
    }
    
    button {
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
    }
    
    .submit-btn {
      background-color: #b84545;
      color: white;
      font-weight: bold;
    }
    
    .submit-btn:hover {
      background-color: #66545e;
    }
    
    /* Close Icon */
    .close-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #b84545;
    }
    
    .close-icon:hover {
      color: #66545e;
    }
    
    /* Thank-You Message */
    .thanks-message {
      opacity: 1;
      animation: fade-in-out 2s ease-in-out;
      color: var(--text-color);
    }
    
    @keyframes fade-in-out {
      0% {
        opacity: 0;
      }
    
      25% {
        opacity: 1;
      }
    
      75% {
        opacity: 1;
      }
    
      100% {
        opacity: 0;
      }
    }
    </style>
    