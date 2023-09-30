let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .char', {
  opacity: 0.3,
  duration: 1.2,
  ease: 'power1.out',
  stagger: 0.1,
  
})