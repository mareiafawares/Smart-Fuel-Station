const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5500/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('name', data.user?.name || 'Unknown');
      sessionStorage.setItem('email', data.user?.email || email);
      sessionStorage.setItem('role', data.user?.role || 'User');

      const role = data.user?.role?.toLowerCase();
      console.log('Redirecting as role:', role);

      // ✅ التوجيه حسب الدور فقط هنا
      if (role === 'admin') {
        window.location.href = 'admin.html';
      } else if (role === 'employee') {
        window.location.href = 'employee.html';
      } else {
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
