//selection elements
const inputBtn = document.querySelector("input[type='checkbox']");
const textBox = document.querySelector('#text-box');
const paragraph = document.querySelector('#text-box').childNodes[1];
const toggleText = document.querySelector('.toggle-text');
const icon = document.querySelector('#toggle-icon i');
const nav = document.querySelector('#nav');
//selection all images
let images = [];
for (let i = 1; i < 3; i++) {
  images[i] = document.querySelector(`#image${i}`)
}

const fetchFromLocal = () => {
  const lastTheme = localStorage.getItem('theme');
 
  if (lastTheme === 'dark'){
    inputBtn.click();
  } 
}

const imageMode = color => {
  images.forEach(image => {
    image.src = `img/undraw_proud_coder_${color}.svg`;
  })
}


const darkMode = () => {
  //change paragraph color 
  paragraph.style.color = 'white'; 
  //change the font awesome icon from sun to moon
  icon.classList.replace('fa-sun','fa-moon');
  // fixing nav background color 
  nav.style.backgroundColor = 'rbga(0,0,0,0.5)';
  // fixing textBox backgroundColor
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  // changing the toggle text
  toggleText.textContent = 'Dark Mode';
  //images
  imageMode('dark');
}
const lightMode = () => {
  //change the color of paragraph to white
  paragraph.style.color = 'white';  
  //change the font awesome icon from sun to moon
  icon.classList.replace('fa-moon','fa-sun');
  // fixing textBox backgroundColor
  textBox.style.backgroundColor = 'rgba(0,0,0,0.5)';
  // changing the toggle text
  toggleText.textContent = 'Light Mode';
  //images
  imageMode('light');
}
  

const changeLight = event => {
  
  // console.log(event.target.checked)
  if (event.target.checked){
    // this sets the site to dark mode
    document.documentElement.classList.add('data-theme')
    darkMode()
    localStorage.setItem('theme', 'dark');
  } else {
    // this sets the site to light mode
    document.documentElement.classList.remove('data-theme')
    lightMode()
    localStorage.setItem('theme', 'light');
  }

  event.preventDefault()
}

//event listeners 
inputBtn.addEventListener('change', changeLight);
document.addEventListener('DOMContentLoaded', fetchFromLocal);


