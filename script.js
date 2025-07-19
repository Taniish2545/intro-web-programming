window.onload = function() {
  setTimeout(() => {
    document.getElementById('profilePic').style.display = 'block';
  }, 10000);

  const dateSpan = document.getElementById("currentDate");
  const now = new Date();
  dateSpan.textContent = now.toLocaleDateString();
};
window.onload = function() {
  const dateSpan = document.getElementById("currentDate");
  const now = new Date();
  dateSpan.textContent = now.getFullYear();  // Only year
};
