const button=document.querySelector('.menu-button');
const mobileNav=document.querySelector('.mobile-nav');
button?.addEventListener('click',()=>{const isOpen=mobileNav.classList.toggle('open');button.setAttribute('aria-expanded',String(isOpen));button.textContent=isOpen?'Закрыть':'Меню'});
