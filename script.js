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
    { src: 'WEB_WORKS/07.webp', category: 'posters', title: '07 Design', desc: 'Creative Concept' },
    { src: 'WEB_WORKS/AJITH KUMAR Racing black.webp', category: 'cars', title: 'AK Racing Black', desc: 'Automotive Edit' },
    { src: 'WEB_WORKS/AJITH KUMAR Racing.webp', category: 'cars', title: 'AK Racing', desc: 'Automotive Edit' },
    { src: 'WEB_WORKS/Essence is India 1 mokeup.webp', category: 'posters', title: 'Essence of India Mockup', desc: 'Cultural Design' },
    { src: 'WEB_WORKS/Essence is India 1.webp', category: 'posters', title: 'Essence of India 1', desc: 'Cultural Poster' },
    { src: 'WEB_WORKS/Essence is India 2.webp', category: 'posters', title: 'Essence of India 2', desc: 'Cultural Poster' },
    { src: 'WEB_WORKS/FRENCH REVOLUTION POSTER college event.webp', category: 'posters', title: 'French Revolution', desc: 'College Event Poster' },
    { src: 'WEB_WORKS/Ferrari 250 GTO.webp', category: 'cars', title: 'Ferrari 250 GTO', desc: 'Classic Car Concept' },
    { src: 'WEB_WORKS/Haripriyan B.A 24130020 (Bsc computer science with cyber security.webp', category: 'posters', title: 'Profile Design', desc: 'Personal Branding' },
    { src: 'WEB_WORKS/PD_25.webp', category: 'posters', title: 'PD 25', desc: 'Abstract Art' },
    { src: 'WEB_WORKS/Race get dirty or go home.webp', category: 'cars', title: 'Race Get Dirty', desc: 'Racing Poster' },
    { src: 'WEB_WORKS/Thedamal kandan english lavish.webp', category: 'covers', title: 'Thedamal Kandan Lavish', desc: 'English Song Cover' },
    { src: 'WEB_WORKS/Thedamal kandan english.webp', category: 'covers', title: 'Thedamal Kandan', desc: 'English Song Cover' },
    { src: 'WEB_WORKS/Thedamal kandan tamil.webp', category: 'covers', title: 'Thedamal Kandan Tamil', desc: 'Tamil Song Cover' },
    { src: 'WEB_WORKS/Untitled-1.webp', category: 'posters', title: 'Untitled Concept 1', desc: 'Creative Design' },
    { src: 'WEB_WORKS/Untitled-2-Recovered.webp', category: 'posters', title: 'Recovered Design 1', desc: 'Creative Design' },
    { src: 'WEB_WORKS/Untitled-2-Recovered2.webp', category: 'posters', title: 'Recovered Design 2', desc: 'Creative Design' },
    { src: 'WEB_WORKS/animayo 2025 copy@1.5x.webp', category: 'posters', title: 'Animayo 2025', desc: 'Event Poster' },
    { src: 'WEB_WORKS/booth.webp', category: 'posters', title: 'Booth Concept', desc: 'Event Design' },
    { src: 'WEB_WORKS/bridge.webp', category: 'posters', title: 'Bridge', desc: 'Scenery Edit' },
    { src: 'WEB_WORKS/festival.webp', category: 'posters', title: 'Festival', desc: 'Celebration Art' },
    { src: 'WEB_WORKS/fort.webp', category: 'posters', title: 'Fort', desc: 'Historic Concept' },
    { src: 'WEB_WORKS/grand prix 2.webp', category: 'cars', title: 'Grand Prix 2', desc: 'F1 Action' },
    { src: 'WEB_WORKS/grand prix car blue.webp', category: 'cars', title: 'Grand Prix Blue', desc: 'F1 Vector Art' },
    { src: 'WEB_WORKS/grand prix f1.webp', category: 'cars', title: 'Grand Prix F1', desc: 'F1 Key Art' },
    { src: 'WEB_WORKS/lambo land.webp', category: 'cars', title: 'Lambo Land', desc: 'Lamborghini Edit' },
    { src: 'WEB_WORKS/mars1.webp', category: 'posters', title: 'Mars Mission 1', desc: 'Space Concept' },
    { src: 'WEB_WORKS/mars2.webp', category: 'posters', title: 'Mars Mission 2', desc: 'Space Concept' },
    { src: 'WEB_WORKS/mustang pot.webp', category: 'cars', title: 'Mustang', desc: 'Automotive Art' },
    { src: 'WEB_WORKS/north face smooth.webp', category: 'covers', title: 'North Face Smooth', desc: 'Brand Concept' },
    { src: 'WEB_WORKS/north face.webp', category: 'covers', title: 'North Face', desc: 'Brand Ad Concept' },
    { src: 'WEB_WORKS/peace bubble yellow.webp', category: 'posters', title: 'Peace Bubble Yellow', desc: 'Abstract Graphic' },
    { src: 'WEB_WORKS/peace fill.webp', category: 'posters', title: 'Peace Fill', desc: 'Abstract Graphic' },
    { src: 'WEB_WORKS/peace white.webp', category: 'posters', title: 'Peace White', desc: 'Minimalist Graphic' },
    { src: 'WEB_WORKS/peace yellow.webp', category: 'posters', title: 'Peace Yellow', desc: 'Vibrant Art' },
    { src: 'WEB_WORKS/peace1.webp', category: 'posters', title: 'Peace 1', desc: 'Concept Design' },
    { src: 'WEB_WORKS/robot jap.webp', category: 'posters', title: 'Robot Japan', desc: 'Sci-Fi Design' },
    { src: 'WEB_WORKS/strool alone.webp', category: 'posters', title: 'Stroll Alone', desc: 'Mood Concept' },
    { src: 'WEB_WORKS/warrior mokup.webp', category: 'posters', title: 'Warrior Mockup', desc: 'Character Art' },
    { src: 'WEB_WORKS/warrior.webp', category: 'posters', title: 'Warrior', desc: 'Character Art' }
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
