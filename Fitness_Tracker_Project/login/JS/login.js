document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
  
    // Validate input
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    // Check user in localStorage
    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      alert('No account found with this email. Please sign up first.');
      return;
    }
  
    const user = JSON.parse(storedUser);
  
    if (user.password !== password) {
      alert('Incorrect password.');
      return;
    }
  
    if (!user.verified) {
      alert('Please verify your email before logging in.');
      return;
    }
  
    // Login success
    alert('Login successful!');
    localStorage.setItem('loggedInUser', email);
    window.location.href = '../../dashboard/HTML/dashboard.html';// Redirect to home/dashboard
  });
  