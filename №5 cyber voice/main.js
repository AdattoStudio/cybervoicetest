const formBtn = document.querySelectorAll('.card__button');
const zona = document.querySelector('.card-zona')
const close = document.querySelector('.card-close-img')

formBtn.forEach(b=>b.addEventListener('click', function () {
	zona.classList.toggle('active');
	galleryBtn.classList.toggle('active');
}))
close.addEventListener('click', function () {
	zona.classList.toggle('active');
	galleryBtn.classList.toggle('active');
})