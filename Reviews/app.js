const reviews = [
{
    id:1,
    name:"Mitsuri",
    job:"Flower Hashira",
    img:"https://staticg.sportskeeda.com/editor/2023/04/2dbd7-16809087782888-1920.jpg",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quasi impedit. Ipsam voluptatum possimus minus iusto, blanditiis in aspernatur ex doloremque, qui, aliquid ea? Sunt earum eum explicabo minima ducimus."
},
{
    id:2,
    name:"Tanjiro",
    job:"Sun Breather",
    img:"https://e1.pxfuel.com/desktop-wallpaper/564/162/desktop-wallpaper-24-about-tanjiro-cute-tanjiro.jpg",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quasi impedit. Ipsam voluptatum possimus minus iusto, blanditiis in aspernatur ex doloremque, qui, aliquid ea? Sunt earum eum explicabo minima ducimus."
},
{
    id:3,
    name:"Giyu",
    job:"Water Hashira",
    img:"https://mangainsider.com/wp-content/uploads/2022/04/giyu_demon_slayer_guide.png",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quasi impedit. Ipsam voluptatum possimus minus iusto, blanditiis in aspernatur ex doloremque, qui, aliquid ea? Sunt earum eum explicabo minima ducimus."
},
{
    id:4,
    name:"Obanai",
    job:"Snake Hashira",
    img:"https://i.pinimg.com/1200x/64/9d/f7/649df7b66ce9d0f951ab54e5e35f3a86.jpg",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quasi impedit. Ipsam voluptatum possimus minus iusto, blanditiis in aspernatur ex doloremque, qui, aliquid ea? Sunt earum eum explicabo minima ducimus."
}

];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem <0 ){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()* reviews.length);
    showPerson(currentItem);
});