let typeSplit = new SplitType('h1', {
    types: 'lines, words, chars',
    tagName: 'h1'
  })
  
  gsap.from('h1 .char', {
    opacity: 0,
    duration: 1,
    ease: 'power1.out',
    stagger: 0.1,
  })
  