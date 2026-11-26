// Initialize Lucide Icons
lucide.createIcons();

// Filter Services
const serviceTabs = document.querySelectorAll('#serviceTabs .tab-btn');
const serviceCards = document.querySelectorAll('#servicesGrid .card');

serviceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    serviceTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.getAttribute('data-category');
    serviceCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Filter Fragrances
const fragranceTabs = document.querySelectorAll('#fragranceTabs .tab-btn');
const fragranceCards = document.querySelectorAll('#fragranceGrid .card');

fragranceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    fragranceTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const fragranceType = tab.getAttribute('data-fragrance');
    fragranceCards.forEach(card => {
      if (fragranceType === 'all' || card.getAttribute('data-fragrance') === fragranceType) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Modal Logic
function openBookingModal(itemTitle) {
  document.getElementById('modalTitle').innerText = `Book ${itemTitle}`;
  document.getElementById('selectedServiceInput').value = itemTitle;
  document.getElementById('bookingModal').style.display = 'flex';
}

function closeBookingModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

function openVideoModal(title, videoSrc) {
  document.getElementById('videoModalTitle').innerText = title;
  const videoPlayer = document.getElementById('showcaseVideo');
  videoPlayer.src = videoSrc;
  document.getElementById('videoModal').style.display = 'flex';
  videoPlayer.play();
}

function closeVideoModal() {
  const videoPlayer = document.getElementById('showcaseVideo');
  videoPlayer.pause();
  videoPlayer.src = '';
  document.getElementById('videoModal').style.display = 'none';
}

// WhatsApp Submission Flow
function handleBookingSubmit(event) {
  event.preventDefault();
  const service = document.getElementById('selectedServiceInput').value;
  const name = document.getElementById('clientName').value;
  const address = document.getElementById('clientAddress').value;
  const time = document.getElementById('clientTime').value;

  const text = `Hello Omoh Collections! I would like to book a home service.\n\n*Service:* ${service}\n*Name:* ${name}\n*Address:* ${address}\n*Preferred Time:* ${time}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
  
  window.open(whatsappUrl, '_blank');
  closeBookingModal();
}

// Close modals when clicking outside modal box
window.onclick = function(event) {
  const bookingModal = document.getElementById('bookingModal');
  const videoModal = document.getElementById('videoModal');
  if (event.target === bookingModal) closeBookingModal();
  if (event.target === videoModal) closeVideoModal();
};