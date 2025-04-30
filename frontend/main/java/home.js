function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// التحكم في الوضع الليلي
document.addEventListener('DOMContentLoaded', () => {
  const nightModeToggle = document.getElementById('night-mode-toggle');

  // تحقق مما إذا تم تفعيل الوضع الليلي مسبقاً
  if (localStorage.getItem('nightMode') === 'enabled') {
    document.body.classList.add('night-mode');
  }

  // عند الضغط على زر الوضع الليلي
  nightModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');

    // حفظ الحالة في localStorage
    if (document.body.classList.contains('night-mode')) {
      localStorage.setItem('nightMode', 'enabled');
    } else {
      localStorage.setItem('nightMode', 'disabled');
    }
  });
});


// النافذة المنبثقة
function openPopup() {
  const popup = document.getElementById('popupWindow');
  if (popup) {
    popup.style.display = 'flex';
  }
}

function closePopup() {
  const popup = document.getElementById('popupWindow');
  if (popup) {
    popup.style.display = 'none';
  }
}

// إغلاق النافذة عند الضغط خارجها (اختياري)
window.addEventListener('click', function (event) {
  const popup = document.getElementById('popupWindow');
  if (popup && event.target === popup) {
    closePopup();
  }
});













































