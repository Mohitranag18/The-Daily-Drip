let crcr = document.querySelector("#cursor")
let crcr_blur = document.querySelector("#cursor_blur")
let crcr_cng = document.querySelectorAll(".crcr_cng ")
let cards = document.querySelectorAll(".card")
let p6cards = document.querySelectorAll(".p6card")
let p6h4 = document.querySelector("#p6heading")
let simg = document.querySelector("#imagediv img")
let dots = document.querySelectorAll("#dots .dot")

let i= 1;
dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        i = index +1;
        updateImage();
        updateDots();
    })
})

function updateImage(){
    simg.src = `images/simg${i}.avif`
}

function updateDots(){
    dots.forEach((dot, index)=>{
        if(index+1 == i){
            dot.style.backgroundColor = "#d4a373"
            dot.style.transform = "scale(1.4)"
        }
        else{
            dot.style.backgroundColor = "white"
            dot.style.transform = "scale(1)"
        }
    });
}
setInterval(function(){
    updateDots();
    updateImage();
    i = (i%3)+1;
},4000);

document.addEventListener("mousemove",function(dets){
    crcr.style.left= dets.x-25 +"px"
    crcr.style.top= dets.y-25 +"px"
    crcr_blur.style.left= (dets.x-200) +"px"
    crcr_blur.style.top= (dets.y-200)+"px"
})

// crcr_cng.forEach(element=>{
//     element.addEventListener("mouseenter",()=>{
//         crcr.style.transform = "scale(3.5)"
//         crcr.style.backgroundColor = "transparent"
//         crcr.style.border= "0.1px solid #fefae0"
//     })
//     element.addEventListener("mouseleave",()=>{
//         crcr.style.transform = "scale(1)"
//         crcr.style.backgroundColor = "#fefae0"
//         crcr.style.border= "none"
//     })
// })

cards.forEach(eve=>{
    eve.addEventListener("mouseenter",()=>{
        crcr.style.borderColor = "#fefae0"
        eve.classList.add("hovered")
    })
    eve.addEventListener("mouseleave",()=>{
        crcr.style.borderColor = "#fefae0"
        cards.classList.remove("hovered")
    })
})

p6cards.forEach(eve=>{
    eve.addEventListener("mouseenter",()=>{
        p6h4.style.webkitTextStroke = "1px #fefae0"
    })
    eve.addEventListener("mouseleave",()=>{
        p6h4.style.webkitTextStroke = "1px white"
    })
})

gsap.to("nav",{
    backgroundColor: "#d4a373",
    duration: 0.5,
    height: "80px",
    scrollTrigger:{
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 3
    }
})
gsap.from("#colun1",{
    y:-70,
    scrollTrigger:{
        trigger:"#colun1",
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:3
    }
})
gsap.from("#colun2",{
    y:80,
    scrollTrigger:{
        trigger:"#colun2",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:3
    }
})
gsap.from("#p6heading",{
    y:100,
    scrollTrigger:{
        trigger:"#p6heading",
        scroller:"body",
        start:"top 100%",
        end:"top 70%",
        scrub:1
    }
})

// logic for menu section
let coffee = document.querySelector("#coffee");
let snacks = document.querySelector("#snacks");
let desserts = document.querySelector("#desserts");
let coffeeItems = document.querySelector("#coffee-items");
let snacksItems = document.querySelector("#snacks-items");
let dessertsItems = document.querySelector("#desserts-items");
let item_head = 1;

coffee.addEventListener("click", () => {
    item_head = 1;
    updateDisplay();
});

snacks.addEventListener("click", () => {
    item_head = 2;
    updateDisplay();
});

desserts.addEventListener("click", () => {
    item_head = 3;
    updateDisplay();
});

function updateDisplay() {
    // Reset styles
    coffee.style.backgroundColor = '';
    snacks.style.backgroundColor = '';
    desserts.style.backgroundColor = '';
    coffeeItems.style.display = 'none';
    snacksItems.style.display = 'none';
    dessertsItems.style.display = 'none';

    // Show the appropriate section and change background color
    if (item_head === 1) {
        coffeeItems.style.display = '';
        coffee.style.backgroundColor = '#6F4E37';
    } else if (item_head === 2) {
        snacksItems.style.display = '';
        snacks.style.backgroundColor = '#6F4E37';
    } else if (item_head === 3) {
        dessertsItems.style.display = '';
        desserts.style.backgroundColor = '#6F4E37';
    }
}
updateDisplay();



