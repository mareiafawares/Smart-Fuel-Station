const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://127.0.0.1:5500/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }) // نرسل فقط الإيميل والباسورد
    });

    const data = await response.json();

    if (response.ok) {
      sessionStorage.setItem('token', data.token);

      // التوجيه حسب الدور القادم من قاعدة البيانات
      if (data.user && data.user.role === 'manager') {
        window.location.href = 'admin.html';
      } else if (data.user && data.user.role === 'employee') {
        window.location.href = 'employee.html';
      } else {
        window.location.href = 'home1.html'; // للعميل أو أي دور آخر
      }

    } else {
      alert('Login failed: ' + (data.message || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again later.');
  }
});