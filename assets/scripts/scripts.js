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
  <script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>

<script>
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .char', {
  
  
})
</script>