let timerInterval;
let totalTime = 0;

function updateTimerDisplay() {
  const minutes = String(Math.floor(totalTime / 60)).padStart(2, '0');
  const seconds = String(totalTime % 60).padStart(2, '0');
  document.getElementById('time').textContent = `${minutes}:${seconds}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (totalTime < 3600) {
      totalTime++;
      updateTimerDisplay();
    }
  }, 1000);
});

document.getElementById('stopBtn').addEventListener('click', () => {
  clearInterval(timerInterval);
});

document.querySelectorAll('.edit-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    const cells = row.querySelectorAll('td');
    const sets = prompt('Update Sets:', cells[0].textContent);
    const reps = prompt('Update Reps:', cells[1].textContent);
    const weights = prompt('Update Weights:', cells[2].textContent);
    if (sets !== null) cells[0].textContent = sets;
    if (reps !== null) cells[1].textContent = reps;
    if (weights !== null) cells[2].textContent = weights;
  });
});

document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    row.remove();
  });
});

document.getElementById('addExerciseLink').addEventListener('click', () => {
  window.location.href = '../../exercise library/HTML/exerciseLibrary.html';
});

document.querySelector('.save-btn').addEventListener('click', () => {
  // Save workout data to localStorage
const duration = document.getElementById('time').textContent;
const exerciseName = document.getElementById('currentExercise').textContent;
const tableRow = document.querySelector('.exercise-info table tr:nth-child(2)');
const sets = tableRow.children[0].textContent;
const reps = tableRow.children[1].textContent;
const weight = tableRow.children[2].textContent;
const notes = document.querySelector('.notes').value;

localStorage.setItem("sessionDuration", duration);
localStorage.setItem("exerciseName", exerciseName);
localStorage.setItem("exerciseDetails", `${sets} x ${reps}, ${weight}`);
localStorage.setItem("sessionNotes", notes);

  window.location.href = '../HTML/workoutSummery.html'; // Replace with your actual target page
});

