const menu = document.getElementById('hamburger_menu');
const firstSubMenu = document.getElementById('first_sub_link');
const closeMenu = document.querySelector('.close_svg');

const videos = document.getElementById('video_link');
const subLink = document.getElementById('sub_link');

const movies = document.getElementById('movie_link');
const moviesInnerLink = document.getElementById('movies_inner_link');

const series = document.getElementById('series_link');
const seriesInnerLink = document.getElementById('series_inner_link');

const taglink = document.getElementById('tags_link');
const tagInnerLink = document.getElementById('tags_inner_link');

menu.addEventListener('click', () => {
    firstSubMenu.classList.toggle('visible');
});

closeMenu.addEventListener('click', () => {
    firstSubMenu.classList.remove('visible');
});

videos.addEventListener('click', () => {
    subLink.classList.toggle('show');
});

movies.addEventListener('click', () => {
    moviesInnerLink.classList.toggle('show');
});

series.addEventListener('click', () => {
    seriesInnerLink.classList.toggle('show');
});

taglink.addEventListener('click', () => {
    tagInnerLink.classList.toggle('show');
});

//BACK TO TOP SCRIPTS
const backToTop = document.getElementById('back-to-top');

backToTop.addEventListener('click', () =>{
    window.scrollTo({
        top: 0
    });
});

window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY;
    
    if(scrolled === 0){
        backToTop.style.display = 'none';
    } else{
        backToTop.style.display = 'flex';
    }
});
//BACK TO TOP SCRIPTS ENDS HERE

// CONTACT US
const contactUs = document.getElementById('contact');
const contactDetails = document.getElementById('contact-us-details');
contactUs.addEventListener('click', () => {
    contactDetails.classList.toggle('showing');
});

// HISTORY BUTTONS
const historyBtnOne = document.getElementById('history-button1');
const historyBtnTwo = document.getElementById('history-button2');

historyBtnOne.addEventListener('click', () => {
   history.back();
});

historyBtnTwo.addEventListener('click', () => {
    history.forward();
 });