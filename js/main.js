// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 51.361145, lng: 45.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    (document.querySelector('#navbar').style.background = '#93cb52');
  } else {
    document.querySelector('#navbar').style.background= '#333';
  }
});


// Smooth Scrolling
$('#navbar .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      1000  //SPEAD FOR SCROLL
    );
  }
});
    
