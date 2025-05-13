// Get email from URL
const params = new URLSearchParams(window.location.search);
const email = params.get('email');

const messageEl = document.getElementById('message');
const verifyBtn = document.getElementById('verifyBtn');

if (!email) {
  messageEl.textContent = 'Invalid verification link.';
  verifyBtn.style.display = 'none';
} else {
  messageEl.textContent = `Click below to verify email for: ${email}`;
}

verifyBtn.addEventListener('click', function() {
  let user = localStorage.getItem(email);

  if (user) {
    user = JSON.parse(user);
    user.verified = true;
    localStorage.setItem(email, JSON.stringify(user));
    alert('Email verified successfully! You can now login.');
    window.location.href = '../HTML/login.html';
  } else {
    alert('User not found.');
  }
});
