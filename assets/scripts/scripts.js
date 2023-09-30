let typeSplit = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'h1'
  })
  
  gsap.from('[animate] .char', {
    opacity: 0,
    duration: 1,
    ease: 'power1.out',
    stagger: 0.1,
  })