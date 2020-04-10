const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
    "img-swap": "img/letsgetstarted.jpg"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav

const navLinks = Array.from(document.querySelectorAll('nav a'));
const navContent = Object.values(siteContent['nav']);
navLinks.forEach(e => e.textContent = navContent.shift());

// Header

const headText = document.querySelector('.cta h1');
headText.innerHTML = 'DOM<br> Is<br> Awesome';

const headButton = document.querySelector('.cta button');
headButton.textContent = siteContent['cta']['button'];

const headImg = document.querySelector('#cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src']);

// Main Content

const featuresHeading = document.querySelector('.top-content .text-content:first-child h4');
featuresHeading.textContent = siteContent['main-content']['features-h4'];

const featuresContent = document.querySelector('.top-content .text-content:first-child p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutHeading = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutHeading.textContent = siteContent['main-content']['about-h4'];

const aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const servicesHeading = document.querySelector('.bottom-content .text-content:first-child h4');
servicesHeading.textContent = siteContent['main-content']['services-h4'];

const servicesContent = document.querySelector('.bottom-content .text-content:first-child p');
servicesContent.textContent = siteContent['main-content']['services-content'];

const prodHeading = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
prodHeading.textContent = siteContent['main-content']['product-h4'];

const prodContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
prodContent.textContent = siteContent['main-content']['product-content'];

const visionHeading = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionHeading.textContent = siteContent['main-content']['vision-h4'];

const visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];

// Contact

const contactSelect = Array.from(document.querySelector('.contact').children);
const contactValues = Object.values(siteContent['contact']);
contactSelect.forEach(e => e.textContent = contactValues.shift());

const lineBreak = document.querySelector('.contact p');
lineBreak.innerHTML = '123 Way 456 Street<br> Somewhere, USA'

// footer

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


// Utilize .appendChild() and .prepend()

const nav = document.querySelector('nav');
const NavItemBefore = document.createElement('a');
const NavItemAfter = document.createElement('a');
NavItemBefore.textContent = 'Before';
NavItemAfter.textContent = 'After';
nav.prepend(NavItemBefore);
nav.appendChild(NavItemAfter);


// Change Nav Color

const navColor = document.querySelectorAll('nav a');
navColor.forEach((e) => {
  e.style.color = 'green';
});

// Button Event Listener

headButton.addEventListener('click', function () {
  changeImage();
  swapText();
});

function changeImage() {
  headImg.setAttribute('src', siteContent['cta']['img-swap']);
  headImg.classList.add('animate');
  headImg.classList.toggle('animate-stop');
  headImg.style.boxShadow = '0px 0px 5px #040404'

}

function swapText() {
  headButton.classList.toggle('green-button');
  if (headButton.innerHTML === 'Get Started') {
    headButton.innerHTML = 'Stop Spinning!';
  } else {
    headButton.innerHTML = 'Get Started';
  }
}

headImg.style.borderRadius = '50%';
headImg.style.maxWidth = '379px';




