const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');

if(menu&&nav){
  menu.addEventListener('click',()=>{
    nav.style.display=nav.style.display==='flex'?'none':'flex';
    nav.style.position='absolute';
    nav.style.top='76px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.padding='22px 7vw';
    nav.style.background='#090b0f';
    nav.style.flexDirection='column';
    nav.style.gap='18px';
  });
}

/* Shaba's World seasonal landing-page backgrounds */
const landingHero=document.querySelector('#home.hero');

if(landingHero){
  const month=new Date().getMonth()+1;
  let season='fall';

  if(month===12||month<=2) season='winter';
  else if(month>=3&&month<=5) season='spring';
  else if(month>=6&&month<=8) season='summer';

  const seasonalBackgrounds={
    fall:['images/seasonal/fall-01.jpg','images/seasonal/fall-02.jpg','images/seasonal/fall-03.jpg','images/seasonal/fall-04.jpg'],
    winter:['images/seasonal/winter-01.webp','images/seasonal/winter-02.jpg','images/seasonal/winter-03.jpg','images/seasonal/winter-04.jpg','images/seasonal/winter-05.jpg'],
    spring:[],
    summer:[]
  };

  const available=seasonalBackgrounds[season];

  /* Until the other seasonal collections are added, Fall is the fallback. */
  const choices=available.length ? available : seasonalBackgrounds.fall;
  const selected=choices[Math.floor(Math.random()*choices.length)];

  landingHero.style.setProperty('--seasonal-hero-image',`url("${selected}")`);
  landingHero.dataset.season=available.length ? season : 'fall';
}
