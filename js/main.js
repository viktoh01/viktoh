let slideindex=1
showslide(slideindex)
function plusslide(n){
    showslide(slideindex += n)
}
function currentslide(n){showslide(slideindex=n)
}
function showslide(n) {let i
    let slides=document.getElementsByClassName("mySlides")
    let dots=document.getElementsByClassName("dot")
    if(n>slides.length){slideindex=1}
    if(n<1){slideindex=slides.length}

for(i=0; i<slide.length; i++){
    slide[i].style.display="none"
}
for(i=0; i<dots.length;i++){
    dots[i].className=dots[i].className.replace("active","")
}
slides[slideindex-1].style.display="block"
dots[slideindex-1].className+="active"
}
