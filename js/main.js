$(function(){
  //плавный скролл
  $('.menu__list, a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });
});

const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content__item');

chooseColor.forEach(function(element){
  element.addEventListener('click', open)
})

function open(evt){
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function(item){
    item.classList.remove('choose-color__btn--active')
  })

  target.classList.add('choose-color__btn--active')

 contentItem.forEach(function(item){
    item.classList.remove('content__item--active')
  });

  contentActive.forEach(function(item){
    item.classList.add('content__item--active')
  });
}

//modal
const buttonElems = document. querySelectorAll('.button');
const modalElem = document. querySelector('.modal');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
  const target = event.target;
  if (target === modalElem || target.closest('.modal__close')) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 300)
  } 
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
};

buttonElems.forEach(btn =>{
  btn.addEventListener('click', openModal);
});
modalElem.addEventListener('click', closeModal);
