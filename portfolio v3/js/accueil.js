let lenis;

const text = document.querySelector('.hero__text'),
    goToTop = document.querySelector('.hero__gallery__info__action');


    const init = () => {
        lenis = new Lenis({
            lerp: 0.05,
            smoothWheel: true,
        });

        lenis.on('scroll', ({scroll})=> {
            text.style.transform = `translate3D(${-scroll}px, 0, 0)`;
        });

        function raf(time){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        addEventListener();
    };
    

const addEventListener = () => {
    goToTop.addEventListener('click', ()=> lenis.scrollTo(1, {lerp: 0.05}));
};

init();