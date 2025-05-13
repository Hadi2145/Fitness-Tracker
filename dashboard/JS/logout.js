function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = '../../login/HTML/login.html';  // adjust if your login path is different
  }
  