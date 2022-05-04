
const modals = (triggerSelector, modalSelector, closeSelector) => {
  
  const trigger = document.querySelector(triggerSelector),
  modal = document.querySelector(modalSelector),
  close = modal.querySelector(closeSelector);

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.classList.add('hide-overflow');
 
}

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.classList.remove('hide-overflow');
  
}

 modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal__dialog')) {
    closeModal();
  }
 })


trigger.addEventListener('click', openModal);
close.addEventListener('click', closeModal);


}

export default modals;