const logos = document.querySelectorAll('.logo-circle img');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const carousel = document.querySelector('.projects-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// script.js

$("document").ready(function () {
  // Arrange blocks in a circle
  var block = $("#rotator div").get(),
    increase = Math.PI * 2 / block.length,
    angle = 0;

  for (var i = 0; i < block.length; i++) {
    var elem = block[i],
      x = 140 * Math.cos(angle) + 150,
      y = 140 * Math.sin(angle) + 150;

    elem.style.position = 'absolute';
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
    elem.style.transform = `rotate(${90 + (i * (360 / block.length))}deg)`;
    angle += increase;
  }
});

logos.forEach((logo, index) => {
  // Wait for the image to load
  logo.onload = () => {
    // Set canvas size to match the image
    canvas.width = logo.width;
    canvas.height = logo.height;

    // Draw the image on the canvas
    ctx.drawImage(logo, 0, 0, logo.width, logo.height);

    // Get the color data from the center of the image
    const pixelData = ctx.getImageData(logo.width / 2, logo.height / 2, 1, 1).data;

    // Convert the pixel data to an RGB color
    const dominantColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

    // Apply the dominant color as the border of the parent element
    logo.parentElement.style.borderColor = dominantColor;
  };
});


const scrollAmount = 300; // Adjust this based on how far you want to scroll per click

// Scroll to the next project
nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Scroll to the previous project
prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
