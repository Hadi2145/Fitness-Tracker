document.getElementById('profileForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Name validation
  if (!name || name.length < 3) {
    alert('Name must be at least 3 characters long.');
    return;
  }

  // Password validation
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordPattern.test(newPassword)) {
    alert('Password must be at least 6 characters, including one letter and one number.');
    return;
  }

  // Confirm password match
  if (newPassword !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Get logged in user
  const loggedInEmail = localStorage.getItem('loggedInUser');
  if (!loggedInEmail) {
    alert('No user is currently logged in.');
    return;
  }

  // Retrieve and update user object
  let user = localStorage.getItem(loggedInEmail);
  if (!user) {
    alert('User not found in localStorage.');
    return;
  }

  user = JSON.parse(user);
  user.name = name;
  user.password = newPassword;

  localStorage.setItem(loggedInEmail, JSON.stringify(user));

  alert('Profile updated successfully!');
  window.location.href = '../../dashboard/HTML/dashboard.html';

});
