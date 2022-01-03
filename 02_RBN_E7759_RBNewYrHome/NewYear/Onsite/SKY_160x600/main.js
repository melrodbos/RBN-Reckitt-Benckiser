let
    master = gsap.timeline( { repeat: 2, repeatDelay: 5 } ),
    bg= document.getElementById('bg'),
    bgBottom= document.getElementById('bgBottom'),
    bgDark= document.getElementById('bgDark'),
    wiggle= document.getElementById('wiggle'),
    copyWrap = document.getElementsByClassName('copyWrap'),
    head1= document.getElementById('head1'),
    head2= document.getElementById('head2'),
    sub= document.getElementById('sub'),
    label= document.getElementById('label'),
    prodWrap = document.getElementsByClassName('prodWrap'),
    group= document.getElementById('group'),
    prod1= document.getElementById('prod1'),
    prod2= document.getElementById('prod2'),
    prod3= document.getElementById('prod3'),
    prod4= document.getElementById('prod4'),
    prod5= document.getElementById('prod5'),
    cta= document.getElementById('cta'),
    disc= document.getElementById('disc');

    // GSDevTools.create();

master
  .from( myAd, 0.5, { delay: 0.5 } )
  .to( bg, 0.5, { opacity: 0, ease: Power0.easeOut })
  .from( prod1, 1, { rotate: 360, y: -600, scale: 0, ease: Elastic.easeOut.config(1.1, 0.8 ) }, '+=0.25')
  .from( prod2, 1, { rotate: -360, y: -600, scale: 0, ease: Elastic.easeOut.config(1.1, 0.8 ) }, '-=0.99')
  .from( prod3, 1, { rotate: 360, y: -600, scale: 0, ease: Elastic.easeOut.config(1.1, 0.8 ) }, '-=0.98')
  .from( prod4, 1, { rotate: -360, y: -600, scale: 0, ease: Elastic.easeOut.config(1.1, 0.8 ) }, '-=0.97')
  .from( prod5, 1, { rotate: 360, y: -600, scale: 0, ease: Elastic.easeOut.config(1.1, 0.8 ) }, '-=0.96')

  .to( prod1, 0.5, { x: -16, y: 196, rotate: 26, ease: Expo.easeOut }, '+=1')
  .to( prod2, 0.5, { x: -38, y: 337, rotate: -31, ease: Expo.easeOut }, '-=0.5')
  .to( prod3, 0.5, { x: 6, y: 35, rotate: 24, ease: Expo.easeOut }, '-=0.5')
  .to( prod4, 0.5, { x: 85, y: 122, rotate: -15, ease: Expo.easeOut }, '-=0.5')
  .to( prod5, 0.5, { x: -40, y: -70, rotate: 17, ease: Expo.easeOut }, '-=0.5')
  .from( group, 0.5, { opacity: 0, ease: Power1.easeOut }, '-=0.03')

  .from( bgBottom, 0.5, { y:300, ease: "Expo.easeOut"}, '-=0.75')

  .from( head, 0.75, { y: -50, scale: 0.5, stagger: 0.05, opacity: 0, ease: Expo.easeOut }, '-=0.5')
  .from( sub, 0.75, { y: -50, opacity: 0, ease: Expo.easeOut }, '-=0.5')

  .from( cta, 0.5, { scale: 0.5, opacity: 0, ease: Back.easeOut }, '-=0.45')
