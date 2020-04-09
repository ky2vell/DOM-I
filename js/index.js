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
    "img-src": "img/header-img.png"
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

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((e) => {
  e.textContent = siteContent['nav']['nav-item-2'];
});

// Header

let headText = document.querySelector('.cta h1');
headText.textContent = siteContent['cta']['h1'];

let headButton = document.querySelector('.cta button');
headButton.textContent = siteContent['cta']['button'];

let headImg = document.querySelector('#cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src']);

// Main Content

let featuresHeading = document.querySelector('.top-content .text-content:first-child h4');
featuresHeading.textContent = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelector('.top-content .text-content:first-child p');
featuresContent.textContent = siteContent['main-content']['features-content'];

let aboutHeading = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutHeading.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesHeading = document.querySelector('.bottom-content .text-content:first-child h4');
servicesHeading.textContent = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelector('.bottom-content .text-content:first-child p');
servicesContent.textContent = siteContent['main-content']['services-content'];

let prodHeading = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
prodHeading.textContent = siteContent['main-content']['product-h4'];

let prodContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
prodContent.textContent = siteContent['main-content']['product-content'];

let visionHeading = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionHeading.textContent = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];

// Contact




