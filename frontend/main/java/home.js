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

// فتح نافذة Oil Change
function openOilPopup() {
  const popup = document.getElementById('popupOil');
  if (popup) {
    popup.style.display = 'flex';
  }
}

// إغلاق نافذة Oil Change
function closeOilPopup() {
  const popup = document.getElementById('popupOil');
  if (popup) {
    popup.style.display = 'none';
  }
}

// إغلاق النافذة عند الضغط خارجها
window.addEventListener('click', function (event) {
  const popup = document.getElementById('popupOil');
  if (popup && event.target === popup) {
    closeOilPopup();
  }
});









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






/// فتح نافذة "Car Wash"
function openCarWashPopup() {
  const popup = document.getElementById('carWashPopup');
  if (popup) {
    popup.style.display = 'flex'; // يعرض النافذة المنبثقة
  }
}

// إغلاق نافذة "Car Wash"
function closeCarWashPopup() {
  const popup = document.getElementById('carWashPopup');
  if (popup) {
    popup.style.display = 'none'; // يخفي النافذة المنبثقة
  }
}

// إغلاق النافذة عند الضغط خارجها (اختياري)
window.addEventListener('click', function (event) {
  const popup = document.getElementById('carWashPopup');
  if (popup && event.target === popup) {
    closeCarWashPopup();
  }
});







// فتح النافذة المنبثقة الخاصة بتوصيل الوقود
function openFuelPopup() {
  const popup = document.getElementById('popupFuel');
  if (popup) {
    popup.style.display = 'flex';
  }
}

// إغلاق النافذة المنبثقة الخاصة بتوصيل الوقود
function closeFuelPopup() {
  const popup = document.getElementById('popupFuel');
  if (popup) {
    popup.style.display = 'none';
  }
}

// إغلاق النافذة عند الضغط خارجها (اختياري)
window.addEventListener('click', function (event) {
  const popup = document.getElementById('popupFuel');
  if (popup && event.target === popup) {
    closeFuelPopup();
  }
});





// فتح النافذة المنبثقة الخاصة بشحن السيارات الكهربائية
function openEVPopup() {
  const popup = document.getElementById('popupEV');
  if (popup) {
    popup.style.display = 'flex';
  }
}

// إغلاق النافذة المنبثقة الخاصة بشحن السيارات الكهربائية
function closeEVPopup() {
  const popup = document.getElementById('popupEV');
  if (popup) {
    popup.style.display = 'none';
  }
}

// إغلاق النافذة عند الضغط خارجها (اختياري)
window.addEventListener('click', function (event) {
  const popup = document.getElementById('popupEV');
  if (popup && event.target === popup) {
    closeEVPopup();
  }
});
