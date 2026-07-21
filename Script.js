// ======================================
// PREMIUM BIRTHDAY WEBSITE V3
// PART 1
// ======================================

// Elements
const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const website = document.getElementById("website");
const music = document.getElementById("bgMusic");

const chapters = document.querySelectorAll(".chapter");
const nextBtns = document.querySelectorAll(".nextBtn");
const prevBtns = document.querySelectorAll(".prevBtn");

let currentChapter = 0;

// Hide all chapters
function hideAllChapters() {
    chapters.forEach(chapter => {
        chapter.classList.remove("active");
        chapter.style.display = "none";
    });
}

// Show one chapter
function showChapter(index) {

    if (index < 0) index = 0;
    if (index >= chapters.length) index = chapters.length - 1;

    hideAllChapters();

    currentChapter = index;

    chapters[currentChapter].style.display = "flex";

    setTimeout(() => {
        chapters[currentChapter].classList.add("active");
    }, 100);

    updateProgress();
}

// Progress
function updateProgress() {

    const progress = document.getElementById("progress");

    if (progress) {
        progress.textContent = `Chapter ${currentChapter + 1} / ${chapters.length}`;
    }

}

// Start Journey
if (startBtn) {

    startBtn.addEventListener("click", () => {

        welcome.style.display = "none";
        website.style.display = "block";

        showChapter(0);

        if (music) {
            music.volume = 0.5;

            music.play().catch(() => {});
        }

    });

}

// Next Buttons
nextBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (currentChapter < chapters.length - 1) {

            showChapter(currentChapter + 1);

        }

    });

});

// Previous Buttons
prevBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (currentChapter > 0) {

            showChapter(currentChapter - 1);

        }

    });

});

// Keyboard Navigation
document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight" && currentChapter < chapters.length - 1) {

        showChapter(currentChapter + 1);

    }

    if (e.key === "ArrowLeft" && currentChapter > 0) {

        showChapter(currentChapter - 1);

    }

});
// Chapter 9 Special Song (Separate from background music)
const musicBtn = document.getElementById("musicBtn");
const chapter9Song = document.getElementById("chapter9Song");

if (musicBtn && chapter9Song) {
    let isPlaying = false;

    musicBtn.addEventListener("click", () => {
        if (isPlaying) {
            chapter9Song.pause();
            musicBtn.innerHTML = "▶ Play Song";
            musicBtn.style.background = "";
        } else {
            chapter9Song.play().catch(() => {});
            musicBtn.innerHTML = "⏸ Pause Song";
            musicBtn.style.background = "linear-gradient(45deg, #ff69b4, #ff1493)";
        }
        isPlaying = !isPlaying;
    });

    // Auto stop when leaving Chapter 9
    const chapters = document.querySelectorAll(".chapter");
    const chapter9 = chapters[8]; // Chapter 9 is the 9th chapter (index 8)

    if (chapter9) {
        const observer = new MutationObserver(() => {
            if (!chapter9.classList.contains("active")) {
                chapter9Song.pause();
                musicBtn.innerHTML = "▶ Play Song";
                isPlaying = false;
            }
        });
        observer.observe(chapter9, { 
            attributes: true, 
            attributeFilter: ["class"] 
        });
    
// ======================================
// PREMIUM BIRTHDAY WEBSITE V3
// PART 2
// Hearts • Sparkles • Cake • Gifts • Photos
// ======================================

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["❤️","💕","💖","💗","💘"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,800);

// Sparkles

document.addEventListener("click",(e)=>{

    for(let i=0;i<8;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left=(e.clientX+Math.random()*60-30)+"px";
        sparkle.style.top=(e.clientY+Math.random()*60-30)+"px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{
            sparkle.remove();
        },2000);

    }

});

// ======================================
// Cake
// ======================================

const cakeBtn=document.getElementById("cakeBtn");
const cake=document.getElementById("cake");

if(cakeBtn){

    cakeBtn.addEventListener("click",()=>{

        if(cake){
            cake.innerHTML="🎂💨";
        }

        cakeBtn.innerHTML="✨ Wish Made!";
        createHeart();

        setTimeout(()=>{
            alert("🎉 Happy Birthday Madhu Priya ❤️");
        },600);

    });

}

// ======================================
// Gifts
// ======================================

const gifts=document.querySelectorAll(".gift");
const giftMessage=document.getElementById("giftMessage");

gifts.forEach(gift=>{

    gift.addEventListener("click",()=>{

        gift.style.transform="scale(1.2) rotate(10deg)";
        gift.innerHTML="💝";

        if(giftMessage){

            giftMessage.innerHTML=gift.dataset.message;

        }

        setTimeout(()=>{

            gift.style.transform="";
            gift.innerHTML="🎁";

        },500);

    });

});

// ======================================
// Photo Animation
// ======================================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.style.transform="scale(1.08)";
        img.style.transition=".4s";

        setTimeout(()=>{
            img.style.transform="scale(1)";
        },400);

    });

});
// ======================================
// PREMIUM BIRTHDAY WEBSITE V3
// PART 3
// Fireworks • Roses • Replay
// ======================================

// Fireworks

function launchFirework() {

    const fw = document.createElement("div");

    fw.innerHTML = ["🎆","✨","🎇","💥"][Math.floor(Math.random()*4)];

    fw.style.position = "fixed";
    fw.style.left = Math.random()*100 + "vw";
    fw.style.top = Math.random()*70 + "vh";
    fw.style.fontSize = "40px";
    fw.style.pointerEvents = "none";
    fw.style.zIndex = "9999";

    document.body.appendChild(fw);

    fw.animate([
        {transform:"scale(.2)",opacity:0},
        {transform:"scale(2)",opacity:1},
        {transform:"scale(3)",opacity:0}
    ],{
        duration:1500
    });

    setTimeout(()=>{
        fw.remove();
    },1500);

}

// Launch fireworks automatically on Chapter 10

const chapter10 = chapters[9];

if(chapter10){

    const observer = new MutationObserver(()=>{

        if(chapter10.classList.contains("active")){

            for(let i=0;i<20;i++){

                setTimeout(launchFirework,i*120);

            }

        }

    });

    observer.observe(chapter10,{
        attributes:true,
        attributeFilter:["class"]
    });

}

// Falling Roses

function createRose(){

    const rose=document.createElement("div");

    rose.innerHTML="🌹";

    rose.style.position="fixed";
    rose.style.left=Math.random()*100+"vw";
    rose.style.top="-40px";
    rose.style.fontSize=(20+Math.random()*20)+"px";
    rose.style.pointerEvents="none";
    rose.style.zIndex="999";

    document.body.appendChild(rose);

    rose.animate([
        {transform:"translateY(0) rotate(0deg)"},
        {transform:"translateY(110vh) rotate(720deg)"}
    ],{
        duration:7000
    });

    setTimeout(()=>{
        rose.remove();
    },7000);

}

setInterval(createRose,2500);

// Replay Button

const restart=document.getElementById("restart");

if(restart){

    restart.addEventListener("click",()=>{

        currentChapter=0;

        showChapter(0);

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

// Welcome

hideAllChapters();

console.log("❤️ Happy Birthday Madhu Priya ❤️");
console.log("Premium Birthday Website Loaded Successfully!");
// Typing Effect

const letter = document.getElementById("letterText");

if (letter) {

    const text = letter.innerHTML;
    letter.innerHTML = "";

    let i = 0;

    function typeLetter() {

        if (i < text.length) {
            letter.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeLetter, 30);
        }

    }

    // Start typing when Chapter 8 becomes active
    const chapter8 = chapters[7];

    if (chapter8) {

        const observer = new MutationObserver(() => {

            if (chapter8.classList.contains("active") && letter.innerHTML === "") {
                typeLetter();
            }

        });

        observer.observe(chapter8, {
            attributes: true,
            attributeFilter: ["class"]
        });

    }

}
