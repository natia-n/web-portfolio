const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');

page1.addEventListener('click', scrollPage);
page2.addEventListener('click', scrollPage);
page3.addEventListener('click', scrollPage);
page3.addEventListener('click', scrollPage);
page4.addEventListener('click', scrollPage);

function scrollPage(e){
    e.preventDefault();
    classRemove();
    e.target.classList.add('active');  
    window.scroll({
        top: document.querySelector(".page" + e.target.dataset.id).offsetTop,
        behavior: 'smooth'
    });
}

function classRemove(){
    page1.classList.remove('active');
    page2.classList.remove('active');
    page3.classList.remove('active');
    page4.classList.remove('active');
}
