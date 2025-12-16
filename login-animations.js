function showLoading(provider) {
  const overlay = document.getElementById('loading-overlay');
  const loadingText = overlay.querySelector('.loading-text');
  
  const messages = {
    'apple': 'Signing in with Apple...',
    'google': 'Signing in with Google...',
    'facebook': 'Signing in with Facebook...'
  };
  
  loadingText.textContent = messages[provider] || 'Signing in...';
  overlay.classList.add('active');
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const appleBtn = document.querySelector('[data-login="apple"]');
  if (appleBtn) {
    appleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showLoading('apple');
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    });
  }
  
  const googleBtn = document.querySelector('[data-login="google"]');
  if (googleBtn) {
    googleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showLoading('google');
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    });
  }
  
  const facebookBtn = document.querySelector('[data-login="facebook"]');
  if (facebookBtn) {
    facebookBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showLoading('facebook');
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    });
  }
});