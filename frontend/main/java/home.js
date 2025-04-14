


function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}


    

// النافذة المنبثقة
function openPopup() {
  const popup = document.getElementById('popupWindow1');
  if (popup) {
    popup.style.display = 'flex';
  }
}

function closePopup1() {
  const popup = document.getElementById('popupWindow1');
  if (popup) {
    popup.style.display = 'none';
  }
}

// إغلاق النافذة عند الضغط خارجها (اختياري)
window.addEventListener('click', function (event) {
  const popup = document.getElementById('popupWindow1');
  if (popup && event.target === popup) {
    closePopup();
  }
});
function openPopupWithPage(pageUrl) {
  const popup = document.getElementById('popupWindow');
  const iframe = popup.querySelector('iframe');
  iframe.src = pageUrl;
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('popupWindow');
  const iframe = popup.querySelector('iframe');
  iframe.src = '';
  popup.style.display = 'none';
}

// تفعيل الوضع الليلي

