document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('message').value;

  const gender = genderInput ? genderInput.value : "Not specified";

  const now = new Date();
  const currentTime = now.toLocaleString(); 

  const outputDiv = document.getElementById('output');
  outputDiv.style.display = 'block';
  outputDiv.innerHTML = `
    <strong>Thank you,For your Massage</strong>
    Name   : ${name}!</strong><br/>
    Gender : ${gender}<br/>
    Message: ${message}<br/>
    Submitted at: ${currentTime}
  `;
  outputDiv.scrollIntoView({ behavior: 'smooth' });
  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const welcomeScreen = document.getElementById("welcomeScreen");
  const startBtn = document.getElementById("startBtn");
  const inputName = document.getElementById("inputName");
  const userNameDisplay = document.getElementById("userName");
  const nameWarning = document.getElementById("nameWarning");

  startBtn.addEventListener("click", function () {
    const name = inputName.value.trim();

    if (!name) {
      nameWarning.textContent = "Please enter your name.";
    } else if (name.length < 3) {
      nameWarning.textContent = "Name must be at least 3 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      nameWarning.textContent = "Name must contain only letters.";
    } else {
      userNameDisplay.textContent = name;
      welcomeScreen.style.display = "none";
    }
  });

  // Reset warning saat user mulai mengetik lagi
  inputName.addEventListener("input", function () {
    nameWarning.textContent = "";
  });
});