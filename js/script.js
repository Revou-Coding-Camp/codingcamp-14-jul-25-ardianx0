document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('message').value;

  const gender = genderInput ? genderInput.value : "Not specified";

  const userNameSpan = document.getElementById('userName');
  if (userNameSpan) {
    userNameSpan.textContent = name;
  }
  const outputDiv = document.getElementById('output');
  outputDiv.style.display = 'block';
  outputDiv.innerHTML = `
    <strong>Thank you for your message!</strong><br/>
    Name: ${name}<br/>
    Birthdate: ${birthdate}<br/>
    Gender: ${gender}<br/>
    Message: ${message}
  `;

  this.reset();
});
