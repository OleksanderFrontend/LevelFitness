import getResources from "./services";

const cards = (parentSelector) => {

  const parent = document.querySelector(parentSelector);

  class Traning {
    constructor(src, altImg, title, descr, parentSelector) {
      this.src = src;
      this.altImg = altImg;
      this.title = title;
      this.descr = descr;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      let element = document.createElement('li'),
          modal = document.createElement('div');

      element.classList.add('programs__card');
     
      element.innerHTML = `<article class="card">
                                <img class="card__picture" src="${this.src}" alt="${this.altImg}" width="310" height="180">
                                <h4 class="card__title">${this.title}</h3>
                                <p class="card__text">${this.descr}</p>
                                <button class="card__btn" type="button">Записаться</button>
                            </article>`
    this.parent.append(element);

      modal.classList.add('modal');

      modal.innerHTML = `  <div class="modal__dialog">
                              <div class="modal__content">
                                <button class="modal__close">
                                     <span></span>
                                     <span></span>
                                 </button>
                                 <div class="modal__img">
                                    <img class="modal__img" src="${this.src}" alt="${this.altImg}" width="540" height="379">
                                  </div>
                                 <form action="#" class="modal__form">
                                    <label class="modal__label" for="name-id">Имя</label>
                                    <input class="modal__input" type="text" name="name" id="name-id" placeholder="Например Алина" required>
                                    <label class="modal__label" for="tel-id">Номер телефона</label>
                                    <input class="modal__input" type="tel" name="telephone" id="tel-id" placeholder="+7 (___) ___ — __ — __"
                                     required>
                                     <button class="modal__btn" type="submit">Записаться на тренировку</button>
                                  <div class="modal__desc">Спортивное счастье рядом!</div>
                                  </form>
                                </div>
                              </div>`
          
    
      document.body.insertBefore(modal, document.querySelector('script'));
     
    }

    

  }

 

  getResources('http://localhost:3000/trainings')
    .then(data =>{
      data.forEach(({img, alt, title, descr}) => {
        new Traning(img, alt, title, descr, '.programs__cards').render();
      });
    })
}

export default cards;