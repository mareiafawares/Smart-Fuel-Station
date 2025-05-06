const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  try {
    const response = await fetch('https://3953-176-29-18-140.ngrok-free.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, role })
    });

    const data = await response.json(); // مرة واحدة فقط هنا

    if (response.ok) {
      console.log('User logged in successfully', data);

      sessionStorage.setItem('token', data.token); // نخزن التوكن الحقيقي مش true

      window.location.href = 'home1.html';
    } else {
      alert('Login failed: ' + (data.message || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again later.');
  }
});