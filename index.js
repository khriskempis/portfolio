
let musicArr = ['.m', '.u', '.s', '.i', '.c']

TweenMax.staggerFrom(musicArr, 0.2, {opacity: 0, y: -20}, 0.2)

const wordTimeline = new TimelineMax();

wordTimeline
.from('.teacher-word', 0.5, {
  y: -40,
  autoAlpha: 0,
  ease: Back.easeOut
})
.to('.teacher-word', 1, {
  y: 50,
  autoAlpha: 0, 
  ease: Back.easeIn,
  delay: 3
})
.set('.teacher-word', {display: 'none'})
.set('.musician-word', {display: 'block'})
.from('.musician-word', 0.5, {
  y: -40, 
  autoAlpha: 0, 
  ease: Back.easeOut
})
.to('.musician-word', 1, {
  y: 50,
  autoAlpha: 0,
  ease: Back.easeIn,
  delay: 3
})
.set('.musician-word', {display: 'none'})
.set('.developer-word', {display: 'block'})
.from('.developer-word', 0.5, {
  y: -40,
  autoAlpha: 0,
  ease: Back.easeOut
})
.to('.developer-word', 1, {
  y: 50,
  autoAlpha: 0,
  ease: Back.easeIn,
  delay: 3
})
.repeat(-1)

// const wordsArr = ['.teacher-word', '.musician-word', '.developer-word']

// const wordAnimation = 
//   wordsArr.forEach((word, i) => {

//     wordTimeline.from(word, 0.5, {
//       y: -40,
//       autoAlpha: 0,
//       ease: Back.easeOut
//     })
//     .to(word,  1, {
//       y: 50,
//       autoAlpha: 0, 
//       ease: Back.easeIn,
//       delay: 3
//     })
//     .set(word,  {display: 'none'})
    
//     wordsArr[i+1] && wordTimeline.set(wordsArr[i+1], {display: 'block'})
//   })




  
// scroll controller
const controller = new ScrollMagic.Controller();

// hero scroll animation

const headerTL = new TimelineLite();

headerTL.to('header', 5, {y: -50, opacity: 0.5})
  .to('.name', 5, {y:50}, 0)

const heroScene = new ScrollMagic.Scene({
  triggerElement: 'header',
  duration: '50%',
  triggerHook: 0
})
.setTween(headerTL)
// .addIndicators()
.addTo(controller)


// parallax scroll effect

// const headers = document.querySelectorAll('.section-header')

// headers.forEach(element => {

//   const headerScroll = 
//     TweenMax.to(element, 1, {y: 200, opacity: 0})

//   const Scene1 = new ScrollMagic.Scene({
//     triggerElement: element,
//     offset: -100,
//     duration: '80%',
//     triggerHook: 0.2

//   })
//   .setTween(headerScroll)
//   .addIndicators()
//   .addTo(controller)

// })

// const fixedNavbar = new ScrollMagic.Scene({
//   triggerElement: '.projects',
//   offset: -70,
//   triggerHook: 'onLeave'
// })
// .setClassToggle('.nav-links', 'navbar-fixed')
// .addIndicators()
// .addTo(controller);



// section enter animation

const imgs = document.querySelectorAll('.display-img');

imgs.forEach(element => {

  const imgEnter = TweenMax.from(element, 2, {y: 50, opacity: 0.9})

  const imgEnterScene = new ScrollMagic.Scene({
    triggerElement: element,
    duration: '95%',
    triggerHook: 1,
    reverse: false
  })
  // .addIndicators()
  .setTween(imgEnter)
  .addTo(controller)
})

const containers = document.querySelectorAll('.container');

containers.forEach(element => {

  const container = TweenMax.from(element, 2, {y: 100, opacity: 0.5})

  const imgEnterScene = new ScrollMagic.Scene({
    triggerElement: element,
    duration: '100%',
    triggerHook: 1,
    reverse: false
  })
  // .addIndicators()
  .setTween(container)
  .addTo(controller)
})

