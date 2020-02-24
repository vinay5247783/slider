const mycontainer = document.querySelector('.slider');
const Images = document.querySelectorAll('.slider img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let count = 1;
const size = Images[0].clientWidth;// to get width of ourimages in
mycontainer.style.transform = 'translateX('+(-size * count)+'px)';

next.addEventListener('click', () => {
 if (count >= Images.length - 1) return;
	mycontainer.style.transition = "transform 1s ease-in-out";
	count++;
	mycontainer.style.transform = 'translateX(' + (-size * count) + 'px)';
});
prev.addEventListener('click',()=>{
	if (count<=0) return ;
	mycontainer.style.transition = "transform 0.4s ease-in-out";
	count--;
	mycontainer.style.transform = 'translateX(' + (-size*count)+'px)';
});
mycontainer.addEventListener('transitionend', ()=>{
	if (Images[count].id === 'last') {
		mycontainer.style.transition = "none" ;
		count = Images.length - 2;
		mycontainer.style.transform = 'translateX(' + (-size*count) + 'px)';
	}
	if (Images[count].id === 'first') {
		mycontainer.style.transition = "none" ;
		count = Images.length - count;
		mycontainer.style.transform = 'translateX(' + (-size*count) + 'px)';

	}
});

