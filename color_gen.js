let body = document.querySelector("body");


body.addEventListener("click" , function(){
    let h =document.querySelector("h2");
    let val=random();
    h.innerText=val;
    body.style.backgroundColor = val;

});
function random(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}