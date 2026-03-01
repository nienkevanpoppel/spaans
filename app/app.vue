<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
// Global font import
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

// Global styles
* {
  box-sizing: border-box;
}

html, body {
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #1f2937;
  background-color: #f9fafb;
  margin: 0;
  padding: 0;
}

// Global button styles
button, 
.btn,
a[class*="card-button"],
.nuxt-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  // Primary button style (color="a")
  &[color="a"], &:not([color]) {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #2563eb, #1e40af);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
    }
  }
  
  // Secondary button style (color="b")
  &[color="b"] {
    background: white;
    color: #374151;
    border: 2px solid #d1d5db;
    
    &:hover:not(:disabled) {
      background: #f9fafb;
      border-color: #9ca3af;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      background: #f3f4f6;
    }
  }
  
  // Disabled state
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
  
  // Full width modifier
  &.full-width {
    width: 100%;
  }
}

// Global container
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
}

// Typography improvements
h1, h2, h3, h4, h5, h6 {
  font-family: inherit;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 1rem 0;
  color: #111827;
}

p {
  margin: 0 0 1rem 0;
  color: #374151;
}

// Input styles
input[type="text"], 
input[type="email"], 
input[type="password"], 
textarea {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
}
</style>
