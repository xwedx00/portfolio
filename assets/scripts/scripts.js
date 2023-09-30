let typeSplit = new SplitType('h1', {
    types: 'lines, words, chars',
    tagName: 'h1'
})

gsap.from('h1 .char', {
    opacity: 0,
    duration: 1.2,
    ease: 'elastic.inOut',
    stagger: 0.25,
})
