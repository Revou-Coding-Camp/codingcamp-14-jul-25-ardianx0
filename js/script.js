document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  if (name) {
    document.getElementById("userName").textContent = name;
  }

  const form = document.getElementById("contactForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById("message").value;

    if (!name || !birthdate || !gender || !message) {
      alert("Semua field wajib diisi!");
      return;
    }

    const currentTime = new Date().toString();

    output.innerHTML = `
      <strong>Current time</strong>: ${currentTime}<br/>
      <strong>Nama</strong>: ${name}<br/>
      <strong>Tanggal Lahir</strong>: ${birthdate}<br/>
      <strong>Jenis Kelamin</strong>: ${gender}<br/>
      <strong>Pesan</strong>: ${message}
    `;
  });
});
