const body = document.querySelector('body');

//burgers
const burgers = document.querySelectorAll('.header__burger');

burgers.forEach(item => {
  item.childNodes[1].addEventListener('click', () => {
    item.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    let target = e.target;

    if (!item.contains(target) && !item.childNodes[1].contains(target)) {
      item.classList.remove('active');
    }
  });
})


//number mask
$(document).ready(function () {
  $("#phone1").inputmask("+7 (999) 999-99-99");
  $("#phone2").inputmask("+7 (999) 999-99-99");
  $("#phone3").inputmask("+7 (999) 999-99-99");


//slider
  $(".gallery__slider__inner").owlCarousel({
		items: 1,
    margin: 45,
    dots: false,
    nav: true,
		loop: true,
    autoWidth: true,
    smartSpeed: 600,

    responsive: {
      0: {
        margin: 20,
      },
      770: {
        margin: 45,
      },
    }
	});

  $(".etap__slider").owlCarousel({
    items: 1,
    margin: 10,
    dots: false,
    nav: true,
    loop: true,
    autoWidth: true,
    smartSpeed: 600,
  });

  $(".option__slide").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: false,
    autoWidth: true,
    smartSpeed: 600,
  });
});


//fancy
$("[data-fancybox]").fancybox({
  buttons: [
    'close'
  ]
});


//options

const optionBtns = document.querySelectorAll('.option__btn');
const optionSlides = document.querySelectorAll('.option__slide');

function optionSlidesHidden() {
  optionBtns.forEach(item => {
    item.classList.remove('active');
  })

  optionSlides.forEach(item => {
    item.style.display = 'none';
  })
}

function optionSlidesActive(num) {
  optionSlidesHidden();
  optionBtns[num].classList.add('active');
  optionSlides[num].style.display = 'block';
}

optionBtns.forEach((item, num) => {
  item.addEventListener('click', () => {
    optionSlidesActive(num);

  })
});

function optionSlidesFirst() {
  optionBtns[0].classList.add('active');
  optionSlides[0].style.display = 'block';
}

optionSlidesHidden();
optionSlidesFirst();


//apart modal
const apartBtns = document.querySelectorAll('.option__item__image');

const apartModal = document.querySelector('.apart__modal');
const apartModalBtn = document.querySelector('.apart__modal__btn');
const apartModalCross = document.querySelector('.apart__modal__cross');

apartBtns.forEach((item, num) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    apartModalInfo(num, 'options');
    apartModal.classList.add('active');
    body.classList.add('no-scroll');
  })
});

apartModalBtn.addEventListener('click', () => {
  apartModal.classList.add('active--form');
  twoEtagBtn.style.display = 'none';
});

apartModalCross.addEventListener('click', () => {
  apartModal.classList.remove('active');
  setTimeout(() => {
    apartModal.classList.remove('active--form');
  }, 300);
  body.classList.remove('no-scroll');
});

//benefit modal

const benefBtn = document.querySelector('.benef__btn');
const benefModal = document.querySelector('.map__modal');
const benefCross = document.querySelector('.map__modal__cross');

benefBtn.addEventListener('click', () => {
  benefModal.classList.add('active');
  body.classList.add('no-scroll');
})

benefCross.addEventListener('click', () => {
  benefModal.classList.remove('active');
  body.classList.remove('no-scroll');
})



//plan info

const planSections = document.querySelectorAll('.plan__sec');
const planInfo = document.querySelector('.plan__info');

planSections.forEach(item => {
  item.addEventListener('mouseover', () => {
    planInfo.classList.add('active');

    planInfo.childNodes[1].childNodes[1].innerHTML = `${item.querySelector('input[name="info"]').value}`;

    if (item.classList[2] == 'l') {
      planInfo.style.top = `${item.offsetTop - 40}px`;
      planInfo.style.left = `-190px`;
    }

    if (item.classList[2] == 'm') {
      planInfo.style.top = `${item.offsetTop - 32}px`;
      planInfo.style.left = `${item.offsetLeft + 105}px`;
    }

    if (item.classList[2] == 'r') {
      planInfo.style.top = `${item.offsetTop - 40}px`;
      planInfo.style.left = `${item.offsetLeft + 320}px`;
    }
  });

  item.addEventListener('mouseleave', () => {
    planInfo.classList.remove('active');
  });
});


//plan etaj modal
const planEtajModal = document.querySelector('.plan__modal');
const planEtajModalCross = document.querySelector('.plan__modal__cross');
const planModalItem = document.querySelectorAll('.plan__modal__item');
const planModalSubtitle = document.querySelector('.plan__modal__subtitle');

planEtajModalCross.addEventListener('click', () => {
  planEtajModal.classList.remove('active');
  body.classList.remove('no-scroll');
})

planSections.forEach(item => {
  item.addEventListener('click', () => {
    planModalSubtitle.innerHTML = `${item.querySelector('input[name="info"]').value}`;
    planEtajModal.classList.add('active');
    body.classList.add('no-scroll');
    planModalItemActive(item.classList[1])


  })
});

function planModalItemActive(name) {

  planModalItem.forEach(item => {
    if (item.classList[1] == name) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

//plan apart info
const sectionsBtns = document.querySelectorAll('.room');
const twoEtagBtn = document.querySelector('.apart__modal__etaj');
let apartNumber = 0;
sectionsBtns.forEach((item, num) => {
  item.addEventListener('click', (e) => {
    apartModalInfo(num, 'sections');

    planEtajModal.classList.remove('active');
    apartModal.classList.add('active');

    twoEtag = item.querySelector('input[name="twoEtag"]');

    twoEtagBtn.style.display = 'none';

    if (twoEtag) {
      twoEtagBtn.style.display = 'block';
    }

    apartNumber = num;
  })
});

// apart etaj chose
let apartEtajNumb = 1;
twoEtagBtn.addEventListener('click', () => {

  if (apartEtajNumb == 2) {
    document.querySelector('.apart__modal__image').src = sectionsBtns[apartNumber].childNodes[1].parentNode.querySelector('input[name="image"]').value;
    twoEtagBtn.innerHTML = 'Выбрать 2 этаж';
    apartEtajNumb = 1;
  } else {
    document.querySelector('.apart__modal__image').src = sectionsBtns[apartNumber].childNodes[1].parentNode.querySelector('input[name="twoEtag"]').value;
    twoEtagBtn.innerHTML = 'Выбрать 1 этаж';
    apartEtajNumb = 2;
  }
})

//modal info

function apartModalInfo(num, type) {

  let aptartInputs;
  let apartPloshad;
  let apartImage;
  let apartTitle;

  let apartModalPloshad = document.querySelector('.apart__modal__ploshad > span');
  let apartModalInfoBlock = document.querySelector('.apart__modal__info');
  let apartModalImage = document.querySelector('.apart__modal__image');
  let apartModalTitle = document.querySelector('input[name="title"]');

  if (type == 'options') {
    aptartInputs = apartBtns[num].parentNode.querySelectorAll('input[name="info"]');
    apartPloshad = apartBtns[num].parentNode.querySelector('input[name="ploshad"]');
    apartImage = apartBtns[num].parentNode.querySelector('input[name="image"]');
    apartTitle = apartBtns[num].parentNode.querySelector('input[name="title"]');

    apartModalInfoBlock.innerHTML = '';

    aptartInputs.forEach((item, num) => {
      apartModalInfoBlock.innerHTML += `
        <div class="apart__modal__item__out">
          <div class="apart__modal__item">${item.value}</div>
        </div>
      `;
    })
  }

  if (type == 'sections') {
    let sectionsInfo = sectionsBtns[num].childNodes[1].parentNode.querySelectorAll('input[name="info"]');

    apartPloshad = sectionsBtns[num].childNodes[1].parentNode.querySelector('input[name="ploshad"]');
    apartImage = sectionsBtns[num].childNodes[1].parentNode.querySelector('input[name="image"]');
    apartTitle = sectionsBtns[num].childNodes[1].parentNode.querySelector('input[name="title"]');

    apartModalInfoBlock.innerHTML = '';

    sectionsInfo.forEach((item, num) => {
      apartModalInfoBlock.innerHTML += `
        <div class="apart__modal__item__out">
          <div class="apart__modal__item">${item.value}</div>
        </div>
      `;
    })
  }

  apartModalPloshad.innerHTML = `${apartPloshad.value} м²`;
  apartModalImage.src = apartImage.value;
  apartModalTitle.value = apartTitle.value;
}


//mobile modal etaj

const modalItem = document.querySelectorAll('.plan__modal__item');
const mobileItem = document.querySelectorAll('.mobile__modal__house__etaj__item');
const mobileItemMain = document.querySelectorAll('.mobile__modal__house');

function mobileModalBtsHidden() {
  mobileItem.forEach(item => {
    item.classList.remove('active');
  });
}

function mobileModalItemHidden() {
  mobileItemMain.forEach(item => {
    item.classList.remove('active');
  });
}

mobileItem.forEach(item => {
  item.addEventListener('click', () => {
    let mobileModalBottom = item.parentNode.parentNode.parentNode.querySelector('.mobile__modal__house__bottom')
    mobileModalBottomAll = document.querySelectorAll('.mobile__modal__house__bottom');
    mobileModalBottomAll.forEach(item => {
      item.innerHTML = '';
    });

    mobileItemActivate(item.classList[1], mobileModalBottom)
    mobileModalBtsHidden()
    item.classList.add('active');

    mobileModalItemHidden()
    item.parentNode.parentNode.parentNode.classList.add('active');


    mobileModalBottom.innerHTML += '';

    mobileEtajBtnsActive()
  })
});

function mobileItemActivate(etajName, bottomDiv) {
  modalItem.forEach(item => {
    if (item.classList[1] == etajName) {
      let modalRooms = item.childNodes[1].parentNode.querySelectorAll('.room');

      modalRooms.forEach((item, i) => {
        let ploshadItem = item.childNodes[1].parentNode.querySelector('input[name="ploshad"]');
        bottomDiv.innerHTML += `
          <div class="mobile__modal__house__bottom__btn ${item.classList[1]}">Квартира ${i + 1} <br>${ploshadItem.value}м2</div>
        `;
      })
    }
  })
}


//mobile modal apart

const mobileModal = document.querySelector('.mobile__modal');
const mobileModalActivate = document.querySelector('.plan__image__mobile');
const mobileModalCross = document.querySelector('.mobile__modal__cross');

mobileModalActivate.addEventListener('click', () => {
  mobileModal.classList.add('active');
  body.classList.add('no-scroll');
});

mobileModalCross.addEventListener('click', () => {
  mobileModal.classList.remove('active');
  body.classList.remove('no-scroll');
  mobileModalBtsHidden()
  setTimeout(() => {
    mobileModalBottomAll.forEach(item => {
      item.innerHTML = '';
    });
  }, 500);
});

function mobileEtajBtnsActive() {
  let mobileEtajBtns = document.querySelectorAll('.mobile__modal__house__bottom__btn');

  mobileEtajBtns.forEach(item => {
    item.addEventListener('click', () => {

      sectionsBtns.forEach((itemInner, i) => {
        if (itemInner.classList[1] == item.classList[1]) {
          apartModalInfo(i, 'sections');
          mobileModal.classList.remove('active');
          mobileModalBtsHidden()
          setTimeout(() => {
            mobileModalBottomAll.forEach(item => {
              item.innerHTML = '';
            });
          }, 500);
          apartModal.classList.add('active');
        }
      });

    });
  });
}



//footer map
const footerMap = document.querySelector('.footer__bottom');
let footerMapI = 1;

footerMap.addEventListener('mouseover', () => {
  if (footerMapI == 1) {
    footerMap.innerHTML = '<iframe class="footer__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd6c237ac4b6b079751760a7ae5910a1290ed4c1fc3ea3e9ba5ac6f4f7527882&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';
    footerMapI = 2;
  }
})

//start scroll

const scrollBtn = document.querySelector('.header__down__btn');

scrollBtn.addEventListener('click', () => {
  document.querySelector('.gallery').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})


//form checked
const checkAll = document.querySelectorAll('input[type="checkbox"]');

checkAll.forEach(item => {
  item.addEventListener('change', () => {
    let formBtn = item.parentNode.parentNode.querySelector('.btn');
    if (item.checked) {
      formBtn.classList.remove('noclick');
    } else {
      formBtn.classList.add('noclick');
    }
  })
})


//modal outclick hidden
const modalAll = document.querySelectorAll('.modal');

modalAll.forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    if (!item.childNodes[1].contains(target)) {
      item.classList.remove('active')
      body.classList.remove('no-scroll')
    }
  })
})