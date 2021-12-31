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
    prod1= document.getElementById('prod1'),
    prod2= document.getElementById('prod2'),
    cta= document.getElementById('cta'),
    disc= document.getElementById('disc');

    // GSDevTools.create();

master
  .from( myAd, 0.5, { delay: 0.5 } )
  .from( [prod1, prod2, prod3 ], 0.75, { y: 400, scale: 0.5, ease: Expo.easeOut }, '+=0.25')
  .from( wiggle, 0.5, { x:-150, ease: "Expo.easeOut"}, '-=0.75')
  .from( bgBottom, 0.5, { y:150, ease: "Expo.easeOut"}, '-=0.75')

  .to( prod2, 0.5, { x: -57, ease: Expo.easeOut },'+=0.35')
  .to( prod3, 0.5, { x: 57, ease: Expo.easeOut }, '-=0.5')

  .from( prod4, 0.75, { opacity: 0, ease: Expo.easeOut }, '-=0.03')

  .to( prodWrap, 0.5, { scale: 0.75, x: -32, y: 55, ease: Back.easeOut }, '+=0.5')

  .from( [ head1, head2], 0.75, { x: 100, scale: 0.5, stagger: 0.05, opacity: 0, ease: Expo.easeOut }, '-=0.5')
  .from( sub, 0.75, { x: 100, opacity: 0, ease: Expo.easeOut }, '-=0.5')

  .from( cta, 0.5, { scale: 0.5, opacity: 0, ease: Back.easeOut }, '-=0.25')
  .from( disc, 0.5, { scale: 0.75, opacity: 0, ease: Power1.easeOut }, '-=0.25')

  .from( label, 0.5, { scale: 0.5, x: -150, y: -150, ease: Expo.easeOut }, '-=0.5')
