// home.js

// التحكم في فتح/إغلاق الشريط الجانبي
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

  if (localStorage.getItem('nightMode') === 'enabled') {
    document.documentElement.classList.add('night-mode');
  }
  if (nightModeToggle) {
    nightModeToggle.addEventListener('click',() => {
      document.body.classList.toggle('night-mode');
      localStorage.setItem('nightMode',
        document.body.classList.contains('night-mode') ? 'enabled' : 'disabled'
      );
    });
  }
// وظيفة إظهار وإخفاء النافذة الجانبية
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}



















// فتح النافذة المنبثقة الثانية
function openOilPopup() {
  const popup = document.getElementById('popupOil');
  if (popup) {
    popup.style.display = 'flex';
  }
}

// إغلاق النافذة المنبثقة الثانية
function closeOilPopup() {
  const popup = document.getElementById('popupOil');
  if (popup) {
    popup.style.display = 'none';
  }
}

// إغلاق النافذة عند الضغط خارجها (اختياري)
window.addEventListener('click', function (event) {
  const popup = document.getElementById('popupOil');
  if (popup && event.target === popup) {
    closeOilPopup();
  }
});




















function openModal() {
  const modalWindow = document.querySelector('.modal-window');
  const servicesWrapper = document.querySelector('.services-wrapper');
  const cardsContainer = document.querySelector('.cards-container');

  modalWindow.classList.remove('hidden');

  // تعطيل التفاعل مع العناصر الخلفية مؤقتاً
  servicesWrapper.classList.add('no-pointer');
  cardsContainer.classList.add('no-pointer');
}

function closeModal() {
  const modalWindow = document.querySelector('.modal-window');
  const servicesWrapper = document.querySelector('.services-wrapper');
  const cardsContainer = document.querySelector('.cards-container');

  modalWindow.classList.add('hidden');

  // إعادة التفاعل مع العناصر الخلفية
  servicesWrapper.classList.remove('no-pointer');
  cardsContainer.classList.remove('no-pointer');
}
