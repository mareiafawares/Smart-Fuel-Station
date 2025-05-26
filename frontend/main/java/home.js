function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}



 function validateForm() {
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      alert("Message sent successfully!");
      return true;
    }

    function rateUs(rating) {
      const stars = document.querySelectorAll("#stars span");
      stars.forEach((star, index) => {
        star.style.color = index < rating ? "#FFD700" : "#ccc";
      });

      const messages = [
        "Thank you for your feedback!",
        "We appreciate your opinion!",
        "Thanks! We're getting better!",
        "Awesome! You're the best!",
        "Perfect! We're happy you're happy!"
      ];
      document.getElementById('rating-message').innerText = messages[rating - 1];
    }
    const serviceButtons = document.querySelectorAll(".service-btn");
  const modal = document.getElementById("serviceModal");
  const modalIframe = document.getElementById("modalIframe");
  const closeBtn = document.querySelector(".close-btn");

  serviceButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      const url = this.getAttribute("data-url");
      modalIframe.src = url;
      modal.style.display = "block";
      disableModalScroll(); // ✅ هنا منع التمرير
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalIframe.src = "";
    enableModalScroll(); // ✅ هنا رجع التمرير
  });

  

  
  window.addEventListener("click", function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
      modalIframe.src = "";
    }
  });
  const cards = document.querySelectorAll('.card');
  const indicatorsContainer = document.getElementById('indicators');
  let currentIndex = 0;
  let slideInterval;

  
  cards.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentIndex = index;
      highlightCard(currentIndex);
    });
    indicatorsContainer.appendChild(dot);
  });

  function highlightCard(index) {
    cards.forEach(card => card.classList.remove('active-card'));
    cards[index].classList.add('active-card');

    cards[index].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    const indicators = document.querySelectorAll('.indicators span');
    indicators.forEach(dot => dot.classList.remove('active'));
    if (indicators[index]) indicators[index].classList.add('active');
  }

  function autoSlide() {
    highlightCard(currentIndex);
    currentIndex = (currentIndex + 1) % cards.length;
  }

  
  highlightCard(currentIndex);

  
  const servicesSection = document.getElementById('services');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slideInterval = setInterval(autoSlide, 5000);
      } else {
        clearInterval(slideInterval);
      }
    });
  }, {
    threshold: 0.5 
  });

  
  observer.observe(servicesSection);
  
  function blockKeys(e) {
    const keysToBlock = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
    if (keysToBlock.includes(e.key)) {
      e.preventDefault();
    }
  }
  
   

 
 
  



/////
