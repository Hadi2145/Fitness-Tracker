const params = new URLSearchParams(window.location.search);
const email = params.get('email');

document.getElementById('resetForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const newPassword = document.getElementById('newPassword').value;

  // Check if email exists in localStorage
  const user = localStorage.getItem(email);

  if (!user) {
    alert('No account found with this email.');
    return;
  }

  const updatedUser = JSON.parse(user);
  updatedUser.password = newPassword;

  localStorage.setItem(email, JSON.stringify(updatedUser));
  alert('Your password has been reset successfully! You can now login with your new password.');

  // Redirect to login page
  window.location.href = '../Login/login.html';
});
