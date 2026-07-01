let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let img3=document.querySelector(".img3");
let img4=document.querySelector(".img4");
let img5=document.querySelector(".img5");

let arr=[img1,img2,img3,img4,img5];
let index=0;


setInterval(() => {
    
    arr.forEach(idx => {
    idx.style.visibility="hidden";
});

    arr[index].style.visibility="visible";
    index=(index+1)%arr.length;


}, 1000);

