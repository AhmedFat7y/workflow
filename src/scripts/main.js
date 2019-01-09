import $ from 'jquery';
// function registerServiceWorker() {
//	 if ('serviceWorker' in navigator) {
//		 window.addEventListener('load', () => {
//			 navigator.serviceWorker
//				 .register('/sw.js')
//				 .then(registration => {
//					 console.log('SW registered: ', registration);
//				 })
//				 .catch(registrationError => {
//					 console.log('SW registration failed: ', registrationError);
//				 });
//		 });
//	 }
// }

// Uncomment for service worker support
// registerServiceWorker();

$(document).on('click', '.burger', ev => {
	const $self = $(ev.currentTarget);
	$self.toggleClass('burger--open');
	$self.siblings('.header__nav__list').toggleClass('header__nav__list--open');
});

$(document).ready(() => {});
