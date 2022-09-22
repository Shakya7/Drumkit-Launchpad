let bass=document.querySelector(".ten");
let crash=document.querySelector(".one");
let splash=document.querySelector(".two");
let ride=document.querySelector(".three");
let openHihat=document.querySelector(".four");
let smallTom=document.querySelector(".five");
let bigTom=document.querySelector(".six");
let closHihat=document.querySelector(".seven");
let snare=document.querySelector(".eight");
let floorTom=document.querySelector(".nine");


//Crash - tab 1
crash.addEventListener("click",()=>{
    const crash=new Audio("./sounds/crash.mp3");
    crash.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyQ"){
        crash.classList.add("active");
        const crash1=new Audio("./sounds/crash.mp3");
        crash1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyQ"){
        crash.classList.remove("active");
    }
})

//Splash - tab 2
splash.addEventListener("click",()=>{
    const splash=new Audio("./sounds/splash.mp3");
    splash.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyW"){
        splash.classList.add("active");
        const splash1=new Audio("./sounds/splash.mp3");
        splash1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyW"){
        splash.classList.remove("active");
    }
})


//Ride - tab 3
ride.addEventListener("click",()=>{
    const ride=new Audio("./sounds/ride.mp3");
    ride.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyE"){
        ride.classList.add("active");
        const ride1=new Audio("./sounds/ride.mp3");
        ride1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyE"){
        ride.classList.remove("active");
    }
})

//Open HiHat - tab 4
openHihat.addEventListener("click",()=>{
    const opHihat=new Audio("./sounds/hi-hat-open.mp3");
    opHihat.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyA"){
        openHihat.classList.add("active");
        const opHihat=new Audio("./sounds/hi-hat-open.mp3");
        opHihat.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyA"){
        openHihat.classList.remove("active");
    }
})

//Left Tom - tab 5
smallTom.addEventListener("click",()=>{
    const smallTom=new Audio("./sounds/small-tom.mp3");
    smallTom.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyS"){
        smallTom.classList.add("active");
        const smallTom1=new Audio("./sounds/small-tom.mp3");
        smallTom1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyS"){
        smallTom.classList.remove("active");
    }
})

//Right Tom - tab 6
bigTom.addEventListener("click",()=>{
    const bigTom=new Audio("./sounds/medium-tom.mp3");
    bigTom.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyD"){
        bigTom.classList.add("active");
        const bigTom1=new Audio("./sounds/medium-tom.mp3");
        bigTom1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyD"){
        bigTom.classList.remove("active");
    }
})

//Close HiHat - Tab 7
closHihat.addEventListener("click",()=>{
    const closHihat=new Audio("./sounds/hi-hat-closed.mp3");
    closHihat.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyZ"){
        closHihat.classList.add("active");
        const closHihat1=new Audio("./sounds/hi-hat-closed.mp3");
        closHihat1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyZ"){
        closHihat.classList.remove("active");
    }
})

//Snare - Tab 8
snare.addEventListener("click",()=>{
    const snare=new Audio("./sounds/snare.wav");
    snare.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyX"){
        snare.classList.add("active");
        const snare1=new Audio("./sounds/snare.wav");
        snare1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyX"){
        snare.classList.remove("active");
    }
})

//Floor Tom - Tab 8
floorTom.addEventListener("click",()=>{
    const floorTom=new Audio("./sounds/floor-tom.mp3");
    floorTom.play();
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="KeyC"){
        floorTom.classList.add("active");
        const floorTom1=new Audio("./sounds/floor-tom.mp3");
        floorTom1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="KeyC"){
        floorTom.classList.remove("active");
    }
})

//Bass - Tab 9
bass.addEventListener("click",()=>{
    const bass=new Audio("./sounds/bass.mp3");
    bass.play();
    
})
document.addEventListener("keydown",(event)=>{
    if(event.code=="Space"){
        bass.classList.add("active");
        const bass1=new Audio("./sounds/bass.mp3");
        bass1.play();
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.code=="Space"){
        bass.classList.remove("active");
    }
})