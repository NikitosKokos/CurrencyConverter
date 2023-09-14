/**
 * data-state="active" make open current select
 * data-default set deafault value before initialization
 */

const selectSingle = document.querySelectorAll('[data-state]');
const selectSingle_title = document.querySelectorAll('[data-default]');

if (selectSingle) {
   selectSingle.forEach((element, index) => {
      const title = selectSingle_title[index];

      title.innerHTML = title.dataset.default;

      document.addEventListener('click', documentActions);

      function documentActions(e) {
      const targetEl = e.target;
   
         if(!targetEl.closest('[data-state]')){
            element.setAttribute('data-state', '');
            element.querySelector('.select__title').classList.remove('active');
         }
      }

      // Toggle menu
      title.addEventListener('click', () => {
         if ('active' === element.getAttribute('data-state')) {
            element.setAttribute('data-state', '');
            element.querySelector('.select__title').classList.remove('active');
         } else {
            selectSingle.forEach(el => {
               el.setAttribute('data-state', '');
               el.querySelector('.select__title').classList.remove('active');
            })
            element.setAttribute('data-state', 'active');
            element.querySelector('.select__title').classList.add('active');
         }
      });
      let selectSingle_labels = element.querySelectorAll('label');
      // Close when click to option
      for (let i = 0; i < selectSingle_labels.length; i++) {
         selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title[index].textContent = evt.target.textContent;
            element.setAttribute('data-state', '');
         });
      }
   });
}