function handleSignup() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (!username || !email || !password || !confirmPassword) {
      message.style.color = 'red';
      message.textContent = 'All fields are required.';
      return;
    }

    if (password.length < 6) {
      message.style.color = 'red';
      message.textContent = 'Password must be at least 6 characters.';
      return;
    }

    if (password !== confirmPassword) {
      message.style.color = 'red';
      message.textContent = 'Passwords do not match.';
      return;
    }

    const verificationCode = Math.random().toString(36).substr(2, 6); // Generate a random verification code

    const user = {
      username: username,
      email: email,
      password: password,
      verified: false,
      verificationCode: verificationCode
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Simulate email sent
    message.style.color = 'green';
    message.textContent = `Signup successful! A verification code has been sent to ${email}.`;

    // Automatically redirect to the email verification page
    setTimeout(function() {
      window.location.href = 'verify-email.html?email=' + encodeURIComponent(email) + '&verificationCode=' + encodeURIComponent(verificationCode);
    }, 1000);  // Redirect after 1 second to show the message
  }