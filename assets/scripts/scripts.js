gsap.from("#page1 h1",{
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.2
})



let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'h1'
})

gsap.from('[animate] .char', {
  opacity: 0.3,
  duration: 1.2,
  ease: 'power1.out',
  stagger: 0.1,
  
})