 const role = sessionStorage.getItem('role');
  if (role?.toLowerCase() !== 'admin') {
    alert('Access Denied: You are not an admin.');
    window.location.href = 'home1.html';
  }