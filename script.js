// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Gallery Data (Images from MY_WORKS)
const galleryData = [
    { src: 'MY_WORKS/07.jpg', category: 'posters', title: '07 Design', desc: 'Creative Concept' },
    { src: 'MY_WORKS/AJITH KUMAR Racing black.jpg', category: 'cars', title: 'AK Racing Black', desc: 'Automotive Edit' },
    { src: 'MY_WORKS/AJITH KUMAR Racing.jpg', category: 'cars', title: 'AK Racing', desc: 'Automotive Edit' },
    { src: 'MY_WORKS/Essence is India 1 mokeup.jpg', category: 'posters', title: 'Essence of India Mockup', desc: 'Cultural Design' },
    { src: 'MY_WORKS/Essence is India 1.jpg', category: 'posters', title: 'Essence of India 1', desc: 'Cultural Poster' },
    { src: 'MY_WORKS/Essence is India 2.jpg', category: 'posters', title: 'Essence of India 2', desc: 'Cultural Poster' },
    { src: 'MY_WORKS/FRENCH REVOLUTION POSTER college event.jpg', category: 'posters', title: 'French Revolution', desc: 'College Event Poster' },
    { src: 'MY_WORKS/Ferrari 250 GTO.jpg', category: 'cars', title: 'Ferrari 250 GTO', desc: 'Classic Car Concept' },
    { src: 'MY_WORKS/Haripriyan B.A 24130020 (Bsc computer science with cyber security.jpg', category: 'posters', title: 'Profile Design', desc: 'Personal Branding' },
    { src: 'MY_WORKS/PD_25.jpg', category: 'posters', title: 'PD 25', desc: 'Abstract Art' },
    { src: 'MY_WORKS/Race get dirty or go home.jpg', category: 'cars', title: 'Race Get Dirty', desc: 'Racing Poster' },
    { src: 'MY_WORKS/Thedamal kandan english lavish.jpg', category: 'covers', title: 'Thedamal Kandan Lavish', desc: 'English Song Cover' },
    { src: 'MY_WORKS/Thedamal kandan english.jpg', category: 'covers', title: 'Thedamal Kandan', desc: 'English Song Cover' },
    { src: 'MY_WORKS/Thedamal kandan tamil.jpg', category: 'covers', title: 'Thedamal Kandan Tamil', desc: 'Tamil Song Cover' },
    { src: 'MY_WORKS/Untitled-1.jpg', category: 'posters', title: 'Untitled Concept 1', desc: 'Creative Design' },
    { src: 'MY_WORKS/Untitled-2-Recovered.jpg', category: 'posters', title: 'Recovered Design 1', desc: 'Creative Design' },
    { src: 'MY_WORKS/Untitled-2-Recovered2.jpg', category: 'posters', title: 'Recovered Design 2', desc: 'Creative Design' },
    { src: 'MY_WORKS/animayo 2025 copy@1.5x.jpg', category: 'posters', title: 'Animayo 2025', desc: 'Event Poster' },
    { src: 'MY_WORKS/booth.jpg', category: 'posters', title: 'Booth Concept', desc: 'Event Design' },
    { src: 'MY_WORKS/bridge.jpg', category: 'posters', title: 'Bridge', desc: 'Scenery Edit' },
    { src: 'MY_WORKS/festival.jpg', category: 'posters', title: 'Festival', desc: 'Celebration Art' },
    { src: 'MY_WORKS/fort.jpg', category: 'posters', title: 'Fort', desc: 'Historic Concept' },
    { src: 'MY_WORKS/grand prix 2.jpg', category: 'cars', title: 'Grand Prix 2', desc: 'F1 Action' },
    { src: 'MY_WORKS/grand prix car blue.jpg', category: 'cars', title: 'Grand Prix Blue', desc: 'F1 Vector Art' },
    { src: 'MY_WORKS/grand prix f1.jpg', category: 'cars', title: 'Grand Prix F1', desc: 'F1 Key Art' },
    { src: 'MY_WORKS/lambo land.jpg', category: 'cars', title: 'Lambo Land', desc: 'Lamborghini Edit' },
    { src: 'MY_WORKS/mars1.jpg', category: 'posters', title: 'Mars Mission 1', desc: 'Space Concept' },
    { src: 'MY_WORKS/mars2.jpg', category: 'posters', title: 'Mars Mission 2', desc: 'Space Concept' },
    { src: 'MY_WORKS/mustang pot.jpg', category: 'cars', title: 'Mustang', desc: 'Automotive Art' },
    { src: 'MY_WORKS/north face smooth.jpg', category: 'covers', title: 'North Face Smooth', desc: 'Brand Concept' },
    { src: 'MY_WORKS/north face.jpg', category: 'covers', title: 'North Face', desc: 'Brand Ad Concept' },
    { src: 'MY_WORKS/peace bubble yellow.jpg', category: 'posters', title: 'Peace Bubble Yellow', desc: 'Abstract Graphic' },
    { src: 'MY_WORKS/peace fill.jpg', category: 'posters', title: 'Peace Fill', desc: 'Abstract Graphic' },
    { src: 'MY_WORKS/peace white.jpg', category: 'posters', title: 'Peace White', desc: 'Minimalist Graphic' },
    { src: 'MY_WORKS/peace yellow.jpg', category: 'posters', title: 'Peace Yellow', desc: 'Vibrant Art' },
    { src: 'MY_WORKS/peace1.jpg', category: 'posters', title: 'Peace 1', desc: 'Concept Design' },
    { src: 'MY_WORKS/robot jap.jpg', category: 'posters', title: 'Robot Japan', desc: 'Sci-Fi Design' },
    { src: 'MY_WORKS/strool alone.jpg', category: 'posters', title: 'Stroll Alone', desc: 'Mood Concept' },
    { src: 'MY_WORKS/warrior mokup.jpg', category: 'posters', title: 'Warrior Mockup', desc: 'Character Art' },
    { src: 'MY_WORKS/warrior.jpg', category: 'posters', title: 'Warrior', desc: 'Character Art' }
];

// Load Gallery
const galleryContainer = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderGallery(filter = 'all') {
    galleryContainer.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);

    filteredData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        
        // Add click event for modal
        div.addEventListener('click', () => openModal(item.src, item.title));
        
        galleryContainer.appendChild(div);
    });
}

// Initial Render
renderGallery();

// Filtering Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');
        // Render filtered gallery
        renderGallery(btn.dataset.filter);
    });
});

// Modal Logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close-modal")[0];

function openModal(src, title) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = title;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});
