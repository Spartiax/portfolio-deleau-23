let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100) / calcHeight);

    if(pos>100){
        // scrollProgress.style.display = "grid";
        scrollProgress.classList.add('active');
    } else{
        // scrollProgress.style.display = "none";
        scrollProgress.classList.remove('active');

    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#4c0012 ${scrollValue}%, #1C1C1C ${scrollValue}%`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;