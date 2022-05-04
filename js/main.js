import slider from './modules/slider';
import modals from './modules/modal'
import cards from './modules/cards';

window.addEventListener('DOMContentLoaded', () => {
  'use strict'
 
  cards('.programs__cards');
  slider();
  modals('.header__btn', '.modal', '.modal__close');
 
  
});