window, addEventListener('scroll', scrollWork);

const htmlElem = document.querySelector('html');
const headerElem = document.querySelector('header')
const ulElem = document.querySelector('.gnb_menu')
const liElems = document.querySelectorAll('.gnb_menu > li');
const aElems = document.querySelectorAll('.gnb_menu > li > a.title');
const btnBox = document.querySelector('.lang_box > a');

const navElem = document.querySelector('.side_menu_wrap')
const btnBefor = document.querySelector('.side_button')
const btnAfter = document.querySelector('.side_menu_wrap > button')
console.log(btnAfter);

// hearder scroll
var scroll = 0;

function scrollWork() {
    if (htmlElem.scrollTop <= 80) {
        headerElem.classList.remove('fixed')
    } else if (htmlElem.scrollTop > 81 && htmlElem.scrollTop < 300) {
        headerElem.classList.add('fixed')
    }

    scroll = htmlElem.scrollTop;
}

// header navmenu
for (let i = 0; i < liElems.length; i++) {
    liElems[i].addEventListener('mouseenter', deskMenuEnter);
    liElems[i].addEventListener('mouseleave', deskMenuLeave);  
}
function deskMenuEnter() {

    if (!this.className === 'on') {
         this.className = '';
     } else {
         this.className = 'on';
     }
}
function deskMenuLeave() {
    if (this.className === '') {
        this.className = 'on';
    } else {
        this.className = '';

    }
}

//side_menu
btnBefor.addEventListener('click', openWork);
btnAfter.addEventListener('click', closeWork)
function openWork(ev) {
    ev.preventDefault();
    if (navElem.classList.contains('active')) {
        	navElem.classList.remove('active')
        } else{
        	navElem.classList.add('active')
        }
    console.log(this);
}
function closeWork(ev) {
    ev.preventDefault();
    if (navElem.classList.contains('active')) {
        navElem.classList.remove('active')
    } else {
        navElem.classList.add('active')
    }
}

// silde

$('.slide').bxSlider({
    pager: true,
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
})



//recom silde
 $('.recomm_slider').bxSlider({
     pager: true,
     auto: true,
     speed: 1000,
     autoControls: true,
     stopAutoOnClick: true,
 })

//언어 메뉴
btnBox.addEventListener('click', clickWork);

function clickWork(ev) {
    ev.preventDefault();
    if (ev.target.tagName !== 'A') return;
    const targetDiv = ev.target.parentNode;
    if (targetDiv.classList.contains('on')) {
        targetDiv.classList.remove('on');
    } else {
        targetDiv.classList.add('on');
    }
}
