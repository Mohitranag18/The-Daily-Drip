let crcr = document.querySelector("#cursor")
let crcr_blur = document.querySelector("#cursor_blur")
let crcr_cng = document.querySelectorAll(".crcr_cng ")
let cards = document.querySelectorAll(".card")

document.addEventListener("mousemove",function(dets){
    crcr.style.left= dets.x-25 +"px"
    crcr.style.top= dets.y-25 +"px"
    crcr_blur.style.left= (dets.x-200) +"px"
    crcr_blur.style.top= (dets.y-200)+"px"
})

crcr_cng.forEach(element=>{
    element.addEventListener("mouseenter",()=>{
        console.log("hello")
        crcr.style.transform = "scale(3.5)"
        crcr.style.backgroundColor = "transparent"
        crcr.style.border= "0.1px solid #ddf9c1"
    })
    element.addEventListener("mouseleave",()=>{
        crcr.style.transform = "scale(1)"
        crcr.style.backgroundColor = "#ddf9c1"
        crcr.style.border= "none"
    })
})

cards.forEach(eve=>{
    eve.addEventListener("mouseenter",()=>{
        crcr.style.borderColor = "#d45113"
        eve.classList.add("hovered")
    })
    eve.addEventListener("mouseleave",()=>{
        crcr.style.borderColor = "#ddf9c1"
        cards.classList.remove("hovered")
    })
})

gsap.to("nav",{
    backgroundColor: "#813405",
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

