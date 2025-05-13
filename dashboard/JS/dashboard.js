// Get logged-in user
const loggedInUser = localStorage.getItem('loggedInUser');

if (loggedInUser) {
  const user = JSON.parse(localStorage.getItem(loggedInUser));

  // Set username
  document.getElementById('username').textContent = user.name || 'User';
} else {
  window.location.href = '/login/HTML/login.html';  // Redirect to login if not logged in
}

document.getElementById("logBtn").onclick = function () {
  window.location.href = "../../workout_logging/HTML/workoutLogging.html";
}




