document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
  
    // Basic Validation
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (name.length < 3) {
      alert('Name must be at least 3 characters long.');
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(password)) {
      alert('Password must be at least 6 characters and include letters and numbers.');
      return;
    }
  
    // Check if user already exists
    if (localStorage.getItem(email)) {
      alert('An account with this email already exists.');
      return;
    }
  
    // Save user data
    const user = {
      name,
      email,
      password,
      verified: false
    };
  
    localStorage.setItem(email, JSON.stringify(user));
    alert('Signup successful! Please verify your email.');
  
    // Redirect to verification page
    window.location.href = `emailVarify.html?email=${encodeURIComponent(email)}`;

  });
  