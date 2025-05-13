document.getElementById('forgotForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim().toLowerCase();
  
    // Check if email exists in localStorage
    const user = localStorage.getItem(email);
  
    if (!user) {
      alert('No account found with this email.');
      return;
    }
  
    // Simulate sending a reset link
    alert(`A password reset link has been sent to ${email}. Please check your inbox.`);
  
    // Redirect to reset password page (or simulate reset directly)
    window.location.href = 'reset.html?email=' + encodeURIComponent(email);
  });
  