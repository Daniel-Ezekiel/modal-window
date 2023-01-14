'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Select all buttons and add the event listeners
const btnModals = document.querySelectorAll('.btn-modal');
btnModals.forEach(btnModal => btnModal.addEventListener('click', showModal));

// Function to add class name
function addClassName(element, className) {
  element.classList.add(`${className}`);
}
// Function to remove class name;
function removeClassName(element, className) {
  element.classList.remove(`${className}`);
}

// Show modal
function showModal() {
  addClassName(modal, 'active');
  addClassName(overlay, 'active');
}

// Close modal
function closeModal() {
  removeClassName(modal, 'active');
  removeClassName(overlay, 'active');
}

document.querySelector('.btn-close').addEventListener('click', closeModal);

// Close modal on 'esc' keydown
document.querySelector('body').addEventListener('keydown', e => {
  if (e.key == 'Escape' && modal.classList.contains('active')) closeModal();
});
