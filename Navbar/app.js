
const navToggle = document.querySelector('.nav-toggle');
const icons = document.querySelector('.icons');

navToggle.addEventListener('click', function(){
    // console.log(icons.classList.contains('toggle')
    // );

    if (icons.classList.contains("toggle")){
        icons.classList.remove("toggle");
    }
    else{
        icons.classList.add("toggle");
    }
})