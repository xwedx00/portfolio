let typeSplit = new SplitType('h1', {
    types: 'lines, words, chars',
    tagName: 'h1'
})

gsap.from('h1 .char', {
    opacity: 0.5,
    duration: 2,
    ease: 'elastic.inOut',
    stagger: 0.2,
})

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.loader').classList.add('loaded');
});


Splitting();

let cursor = document.querySelector('.cursor'),
    cursorText = cursor.querySelectorAll('.char');


function rounded(radius) {
  
    for (let i = 0; i < cursorText.length; i++) {
        let rotation = i * (360 / cursorText.length);
        gsap.set(cursorText[i], {
            transformOrigin: `0px ${radius}px`,
            x: radius,
            rotate: rotation
        });
        gsap.set(cursor, { transformOrigin: "center center", rotation: 0, width: radius * 2, height: radius * 2 })

    }

    let rotate = gsap.timeline({ repeat: -1 })
    rotate.to(cursor, { rotation: 360, duration: 5, ease: "none", })
}

let radius = 70


function cursorMove(e) {
    var mouseX = e.clientX,
        mouseY = e.clientY
    tl = gsap.timeline();
    tl.to(cursor, {
        duration: 1,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease
    })
}



function init() {
    rounded(radius);
    window.addEventListener('mousemove', cursorMove);
}

window.addEventListener("load", function () {
    init();
})
