

let splash = document.querySelector('.splash');
window.addEventListener('load',()=>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    },5000);
});

let  load=document.getElementById('load');
window.addEventListener('load',()=>{
    setTimeout(() => {
       load.style.display="none";
    }, 4500);
});