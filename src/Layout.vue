<template>
    <div class="app" :class="{ 'dark-mode': isDarkMode }">
        <header class="header">
        <div class="header-content">
          <router-link to="/" class="link">
            <h1 class="title">EcoScan</h1>
          </router-link>
          <button class="theme-toggle" @click="toggleTheme">
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
  
        <router-link to="/infos" class="awareness-message">
          <i class="fas fa-recycle"></i>
          <span>
            Chaque année, <strong>8 millions de tonnes</strong> de plastique finissent dans les océans. Cliquez pour en savoir plus ♻️
          </span>
        </router-link>
      </header>
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        isDarkMode: false
      };
    },
    methods: {
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode');
      }
    },
    mounted() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = prefersDark;
      if (prefersDark) document.body.classList.add('dark-mode');
    }
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
  
  :root {
    --primary-color: #4CAF50;
    --primary-dark: #388E3C;
    --primary-light: #81C784;
    --text-primary: #333;
    --text-secondary: #666;
    --background: #f5f5f5;
    --card-background: #fff;
    --border-color: #e0e0e0;
    --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }
  
  .dark-mode {
    --primary-color: #66BB6A;
    --primary-dark: #4CAF50;
    --primary-light: #81C784;
    --text-primary: #fff;
    --text-secondary: #ccc;
    --background: #121212;
    --card-background: #1e1e1e;
    --border-color: #333;
    --shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    transition: var(--transition);
  }

   a>h1{
    text-decoration: none;
    color: white;
  }

  a{
    text-decoration: none;
  }
  
  .project-description {
    margin-top: 3rem;
    text-align: center;
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--card-background);
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: var(--shadow);
    animation: fadeIn 0.6s ease-in-out;
  }
  
  .project-description h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  .project-description p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .description-sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .desc-block {
    background-color: var(--background);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
  }
  
  .desc-block:hover {
    transform: translateY(-4px);
  }
  
  .desc-block h3 {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: var(--primary-color);
  }
  
  .desc-block p {
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }
  
  .desc-block .icon {
    font-size: 1.8rem;
    color: var(--primary-dark);
  }
  
  .conclusion {
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 2rem;
    color: var(--primary-dark);
  }
  
  
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem;
    box-shadow: var(--shadow);
  }
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .awareness-message {
    background-color: var(--primary-light);
    color: #fff;
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 0.95rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .awareness-message:hover {
    background-color: var(--primary-dark);
  }
  
  .awareness-message i {
    font-size: 1rem;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .theme-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: var(--transition);
  }
  
  .theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .main-content {
    flex: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  .scan-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
  }
  
  .scan-options {
    margin-left: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 500px;
  }
  
  .scan-button,
  .upload-button {
    width: 100%;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    background-color: var(--primary-color);
    color: white;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: var(--transition);
  }
  
  .scan-button:hover,
  .upload-button:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
  
  .scan-button:disabled,
  .upload-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .or-divider {
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--text-secondary);
  }
  
  .or-divider::before,
  .or-divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--border-color);
  }
  
  .or-divider span {
    padding: 0 1rem;
  }
  
  .file-input {
    display: none;
  }
  
  .product-section {
    animation: fadeIn 0.5s ease;
  }
  
  .product-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .back-button {
    background: none;
    border: none;
    color: var(--primary-color);
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition);
  }
  
  .back-button:hover {
    color: var(--primary-dark);
  }
  
  .product-title {
    font-size: 1.8rem;
    font-weight: 600;
  }
  
  .product-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .product-image-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
  }
  
  .product-image {
    width: 100%;
    height: auto;
    display: block;
    transition: var(--transition);
  }
  
  .product-image:hover {
    transform: scale(1.02);
  }
  
  .product-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .impact-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .score-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    transition: var(--transition);
  }
  
  .score-high {
    background-color: #4CAF50;
  }
  
  .score-medium {
    background-color: #FFC107;
  }
  
  .score-low {
    background-color: #F44336;
  }
  
  .score-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  
  .impact-details {
    background-color: var(--card-background);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
  }
  
  .impact-details h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .impact-details ul {
    list-style: none;
  }
  
  .impact-details li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  
  .impact-details li:last-child {
    border-bottom: none;
  }
  
  .detail-label {
    color: var(--text-secondary);
  }
  
  .detail-value {
    font-weight: 500;
  }
  
  .alternatives {
    background-color: var(--card-background);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
  }
  
  .alternatives h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .alternatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .alternative-card {
    background-color: var(--background);
    border-radius: 8px;
    overflow: hidden;
    transition: var(--transition);
  }
  
  .alternative-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
  }
  
  .alternative-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .alternative-info {
    padding: 1rem;
  }
  
  .alternative-info h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  .alternative-score {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .loading-content {
    background-color: var(--card-background);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    width: 90%;
    max-width: 400px;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid var(--border-color);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    margin: 0 auto 1rem;
    animation: spin 1s linear infinite;
  }
  
  .loading-text {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: var(--border-color);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
  
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  
    .main-content {
      padding: 1rem;
    }
  
    .project-description {
      padding: 1.5rem;
    }
  
    .description-sections {
      grid-template-columns: 1fr;
    }
  
    .scan-options {
      margin-left: 0;
      width: 100%;
    }
  
    .scan-button,
    .upload-button {
      font-size: 0.9rem;
      padding: 0.8rem 1rem;
    }
  
    .product-content {
      grid-template-columns: 1fr;
    }
  
    .product-title {
      font-size: 1.5rem;
    }
  
    .alternatives-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 1.2rem;
    }
  
    .project-description h2 {
      font-size: 1.4rem;
    }
  
    .project-description p {
      font-size: 0.9rem;
    }
  
    .scan-button,
    .upload-button {
      padding: 0.6rem 1rem;
      font-size: 0.8rem;
    }
  
    .product-details {
      gap: 1rem;
    }
  
    .score-circle {
      width: 60px;
      height: 60px;
      font-size: 1.2rem;
    }
  }
  </style>
  