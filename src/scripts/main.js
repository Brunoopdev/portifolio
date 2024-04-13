const head = document.querySelector('.header');
const elementosHead = document.querySelectorAll('.li');
const itemElementoHead = document.querySelectorAll('.header__nav__list__item');
const mobile = window.matchMedia("(max-width:480px)");


    if(mobile.matches){

        const elementoHome = elementosHead[0];
        const elementoLiActive = itemElementoHead[0];

        head.classList.add('header--active');
        elementoHome.style.color = 'black'
        elementoLiActive.classList.add('header__nav__list__item--active');
    }

    window.addEventListener('scroll', () =>{
        if(mobile.matches){

            const pageScroll = window.scrollY
            console.log(pageScroll)

            exibeElementoLi(0, 0, 500);
            exibeElementoLi(1, 500, 1800);
            exibeElementoLi(2, 1800, 9000);

        }else{

            const pageScroll = window.scrollY

        if(10 < pageScroll){
            head.classList.add('header--active');
        }else{
            head.classList.remove('header--active');
        }

            exibeElementoLi(0, 10, 510);
            exibeElementoLi(1, 510, 1514);
            exibeElementoLi(2, 1514, 9000);

        }
    })

function exibeElementoLi(elementoLiInUse, valor1, valor2){
    const pageScroll = window.scrollY;
    const elementoHome = elementosHead[elementoLiInUse];
    const elementoLiActive = itemElementoHead[elementoLiInUse]

    if(pageScroll >= valor1 && pageScroll < valor2){
        elementoHome.style.color = 'black'
        elementoLiActive.classList.add('header__nav__list__item--active');

    }else{
        elementoHome.style.color = 'white'
        elementoLiActive.classList.remove('header__nav__list__item--active');
    }
}