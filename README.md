<h1 align="center">
📸📝 Visual Thoughts: AI-Powered Journaling
</h1>

**Visual Thoughts** is an innovative cross-platform mobile journaling application that revolutionizes traditional journaling by leveraging the power of Generative AI. The app creates meaningful, context-aware journal entries from your photos while preserving the emotional depth of your experiences.

Watch the app in action at [Visual Thoughts](https://youtu.be/kxB7kZWIoDk)  
Join the waitlist at [VisualThoughts.com](https://visual-thoughts.vercel.app/)

![VT-GitHub-screenshots](https://github.com/user-attachments/assets/204b75f9-a224-4553-8782-a4f6f5b72102)

## 📑 Table of Contents

- [🌟 Key Features](#-key-features)
  - [Intelligent Image Understanding](#intelligent-image-understanding)
  - [Smart Journaling](#smart-journaling)
  - [Social Journaling](#social-journaling)
- [🚀 Generate Your First Journal!](#-generate-your-first-journal)
  - [Set Your Journal Preferences](#set-your-journal-preferences)
  - [Start Journaling!](#start-journaling)
- [🌐 Share Your Journal via Social Journaling!](#-share-your-journal-via-social-journaling)
  - [Search and Add Friends](#search-and-add-friends)
  - [Start Sharing!](#start-sharing)
- [🔩 Main Modules](#-main-modules)
  - [Image Captioning Module](#image-captioning-module)
  - [Journal Generation Module](#journal-generation-module)
- [🛠️ Technical Stack](#️-technical-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [AI Service Layer](#ai-service-layer)
  - [Development & Deployment](#development--deployment)
- [🎯 Coming Soon](#-coming-soon)
- [🙏 Acknowledgements](#-acknowledgements)
- [📄 Legal](#-legal)

---

## 🌟 Key Features

### Intelligent Image Understanding

- Powered by [Meta's Llama 3.2 Vision](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)
- Advanced image captioning with context awareness
- User-guided emotional context

### Smart Journaling

- Context-aware journal entry generation
- Location-based journaling with custom location preferences
- Customizable writing styles and preferences

### Social Journaling

- Share journal entries with friends and foster a "social media journaling" experience
- Interact with others' shared journals through comments and reactions
- Create a collaborative journaling ecosystem to connect and grow together

---

## 🚀 Generate Your First Journal!

### Set Your Journal Preferences

![Preferences-Android](https://github.com/user-attachments/assets/8d0b3394-3eaa-411b-8797-1849c59645a6)

Visual Thoughts puts personalization at the forefront of your journaling experience. Craft your unique journaling style by selecting from various writing tones (formal to casual), focus areas (personal growth, mindfulness, achievements), and formatting preferences (structured paragraphs or bullet points). Make your entries location-smart by saving frequent spots as personalized labels like 'Home' or 'Office', adding meaningful context to each entry. These customization options work seamlessly with our AI to generate journal entries that authentically capture your voice, style, and daily experiences.

### Start Journaling!

![VT-GitHub6](https://github.com/user-attachments/assets/55214bf5-c6b9-4e78-a230-6f018d9e5ebd)

---

## 🌐 Share your Journal via Social Journaling!

### Search and Add Friends

![Friends](https://github.com/user-attachments/assets/3e1f5592-9627-4304-9c88-623db10ae217)

### Start Sharing!

![VT-GitHub-sharing-final](https://github.com/user-attachments/assets/62893da6-f4cc-45c3-ac4a-463f234f5d43)

Transform you journaling experience from solitary reflection to shared growth:

- **Share Controls**: Choose what to share and with whom
- **Interactive Elements**: React and comment on shared journals
- **Community Building**: Connect with like-minded journalers

---

## 🔩 Main Modules

### Image Captioning Module

The backbone of Visual Thoughts is its image captioning system that processed both visual and contextual information:

1. User captured an image and provides brief context
2. Llama 3.2 Vision model processes both inputs
3. Generate detailed, context-aware image descriptions
4. Integrates with emotion selection interface for enhanced emotional context

### Journal Generation Module

This module orchestrates multiple data streams to create personalized journal entries:

#### Input Sources:

1. Image caption and user context
2. Temporal and Location data
   - Real-time location tracking
   - Custom location preferences for frequent locations
3. Journal Preferences
4. User's Information (Optional)
   - The user can opt to share their information as well such as their age, gender, or profession, for a even more personalized journaling experience.

---

## 🛠️ Technical Stack

### Frontend

- **React Native**: Cross-platform mobile application development
  - Custom components for journal entry interfaces
  - Real-time image processing and preview
  - Responsive UI for seamless user experience
- **React Native Navigation**: Smooth navigation between app screens
- **React Native Firebase**: Integration with Firebase services
- **Async Storage**: Local data persistence and caching

### Backend

#### Firebase Services

- **Firebase Firestore**:
  - NoSQL database for user data
  - Stores journal entries and preferences
  - Real-time data synchronization
- **Firebase Storage**:
  - Handles uploaded photos and media files
  - Secure file storage and retrieval
- **Firebase Authentication**:
  - Secure sign-in with email and password
  - Google authentication using Gmail
  - Additional features: password reset and email verification

#### AI Service Layer

- **Flask REST API**:
  - Handles image captioning requests
  - Processes journal generation
  - API endpoint management
  - Request validation and error handling
- **[GroqCloud](https://groq.com) Integration**:
  - LLaMA 3.2 Vision model for image understanding
  - High-performance inference for journal generation
  - Secure API communication

#### Development & Deployment

- **Version Control**: Git
- **API Testing**: Postman
- **Backend Deployment**:
  - Flask API hosted on [Heroku](https://www.heroku.com)
  - Continuous deployment pipeline

---

## 🎯 Coming Soon

We're excited to announce that Visual Thoughts will be launching soon on both iOS and Android platforms! Stay tuned for updates about our release. If you'd like to be notified when we launch, feel free to:

- ⭐ Star this repository
- 🔔 Watch this repository for updates
- 🌐 Visit our website [Visual Thoughts](https://visual-thoughts.vercel.app/)

## 🙏 Acknowledgements

- [Meta](https://ai.meta.com/) for the incredible LLaMA Vision model
- [Groq](https://groq.com/) for their powerful cloud infrastructure
- [Firebase](https://firebase.google.com/) for robust backend services
- The amazing open-source community for their invaluable tools and libraries

## 📄 Legal

This documentation repository is proprietary and protected. See [LICENSE.md](LICENSE.md) for details.
