function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Clear previous message
    message.textContent = "";

    // Basic validation
    if (!email || !password) {
      message.style.color = "red";
      message.textContent = "Please enter both email and password.";
      return;
    }

    // Validate email pattern: letters/numbers + @ + allowed domains + .com
    const emailPattern = /^[a-zA-Z0-9]+@(google|gmail|yahoo|student|facebook|twitter)\.com$/;
      if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Email must be in format: name@[google/gmail/yahoo/student/facebook/twitter].com";
        return;
      }

    // Success
    message.style.color = "green";
    message.textContent = "Login successful!";
  }