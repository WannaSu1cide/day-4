const img = document.querySelectorAll(".img");
const right =document.querySelector(".right");
const left =document.querySelector(".left");
const x =document.querySelector(".x");
const gallery = document.querySelector(".card__galery");
var currentIndex =0 

img.forEach((item,index)=>{
    img[index].onclick = ()=>{
        console.log(12)
    }
})




left.onclick = function (){
  
}



x.onclick = function ()
{
    gallery.style.opacity ="0";
}


