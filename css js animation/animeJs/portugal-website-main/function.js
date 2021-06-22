let header=document.querySelector(".header h1");
header.innerHTML=header.innerText.split("").map((char)=>{
    if(char==" "){
        char="&nbsp;";
    }
    return "<span>"+char+"</span>";
}).join("");

let animation = anime({
    targets: '.header h1 span',
    translateX:["50px",0],
    opacity:[0,1],
    scale:[5,1],
    marginLeft:'30px',
    delay:function(element,i){
        return i*200
    }
  });    

var textAnimation= anime({
    targets: 'section h1',
    scale:[0,1],
    autoplay: false,
    duration:1000,
  });

window.onscroll=function(e){
    console.log(window.pageYOffset);
    textAnimation.seek(window.pageYOffset);
    if(window.pageYOffset==254.6666717529297){
        console.log("hello");
        textAnimation.seek(1500);
    }
}

