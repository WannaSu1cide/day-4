const img = document.querySelectorAll(".wrapper img");
const right =document.querySelector(".next");
const left =document.querySelector(".prev");
const x =document.querySelector(".closeBtn")
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__inner img");
var currentIndex =0 
const imgFirst = document.querySelectorAll(".wrapper img:first-child");
const imgLast = document.querySelectorAll(".wrapper img:last-child");
img.forEach((item,index) =>{
    item.addEventListener("click",()=>{
    currentIndex =index;
    galleryShow();
 
    })
})

    x.onclick = function (){
        gallery.classList.remove("show");
    }
    document.addEventListener("keydown",(e)=>{
        if(e.keyCode == 27){    
            gallery.classList.remove("show")
        }
    })


    right.addEventListener("click",()=>{
        if(currentIndex < img.length -1){
            currentIndex++;
            galleryShow();
        }
     
    })



 left.addEventListener("click",()=>{
if(currentIndex > 0){
    currentIndex--
    galleryShow();

}


})

function galleryShow(){
    gallery.classList.add("show");
    galleryImg.src =img[currentIndex].src ;
    if(currentIndex == 0){
        left.classList.add("hide")
    }else{
        left.classList.remove("hide")
    }
    
    if(currentIndex == 7){
        right.classList.add("hide")
    }else{
        right.classList.remove("hide")
    }
    
}


