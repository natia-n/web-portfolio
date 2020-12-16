const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');

page1.addEventListener('click', scrollPage);
page2.addEventListener('click', scrollPage);
page3.addEventListener('click', scrollPage);
page3.addEventListener('click', scrollPage);
page4.addEventListener('click', scrollPage);
page5.addEventListener('click', scrollPage);
page6.addEventListener('click', scrollPage);

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
    page5.classList.remove('active');
    page6.classList.remove('active');
}

window.addEventListener('scroll', scrollHandler);

function scrollHandler(){
    let pageTop2 = document.querySelector('.page2').offsetTop;
    let pageTop3 = document.querySelector('.page3').offsetTop;
    let pageTop4 = document.querySelector('.page4').offsetTop;
    let pageTop5 = document.querySelector('.page5').offsetTop;
    let pageTop6 = document.querySelector('.page6').offsetTop;
    classRemove();
    if(window.scrollY < pageTop2){
        page1.classList.add("active");
    } else {
        if(window.scrollY < pageTop3){
            page2.classList.add("active");
        } else {
            if(window.scrollY < pageTop4){
                page3.classList.add("active");
            } else {
                if(window.scrollY < pageTop5){
                    page4.classList.add("active");
                }  else {
                    if(window.scrollY < pageTop6){
                        if(document.body.offsetHeight - window.innerHeight - window.scrollY  < 50) {
                            page6.classList.add("active");
                        } else {
                            page5.classList.add("active");
                        }
                    } else {
                        page6.classList.add("active");
                    }
                }
            } 
        } 
    } 
}

scrollHandler();