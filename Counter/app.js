//select initial count
let count = 0;

//select values and buttons
const value = document.getElementById('value');


// const inc = document.querySelector('.increase');
// const dec = document.querySelector('.decrease');
// const rst = document.querySelector('.reset');

// inc.addEventListener('click', function(){
//     count++;
//     value.textContent = count;
// }); 
//same for decrease and reset

const btns = document.querySelectorAll('.btn');

btns.forEach (function(btn) {
    btn.addEventListener('click',function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('increase')){
            count++;
        }
        else if (styles.contains('decrease')){
            count--;
        }
        else{
            count=0;
        }

        if (count > 0){
            value.style.color = 'green';
        }
        if (count < 0){
            value.style.color = 'red';
        }
        if (count === 0){
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});