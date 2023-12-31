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


