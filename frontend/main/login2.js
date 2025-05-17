const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;
  const selectedRole = document.getElementById('role').value; // من اختيار المستخدم

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

      // manager يعتمد على الدور الحقيقي من قاعدة البيانات
      if (data.user && data.user.role === 'manager') {
        window.location.href = 'admin.html';
      }
      // employee بناءً على اختيار المستخدم من القائمة
      else if (selectedRole === 'employee') {
        window.location.href = 'employee.html';
      }
      // الباقي (default) إلى customer page
      else {
        window.location.href = 'home1.html';
      }

    } else {
      alert('Login failed: ' + (data.message || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again later.');
  }
});