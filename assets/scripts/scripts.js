let typeSplit = new SplitType('h1', {
    types: 'lines, words, chars',
    tagName: 'h1'
})

gsap.from('h1 .char', {
    opacity: 0.3,
    duration: 3,
    ease: 'elastic.inOut',
    stagger: 0.25,
})
