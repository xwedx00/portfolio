




let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'h1'
})

gsap.from('[animate] .word', {
  opacity: 0.3,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: '[animate]',
    start: 'top center',
    scrub: true
  }
})