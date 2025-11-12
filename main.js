const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 1000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");



function playAnimation() {

const x = alice1.animate(aliceTumbling, aliceTiming);
const p1 = x.finished;

return p1.then(() => {
  const p2 = alice2.animate(aliceTumbling, aliceTiming)
  return p2.finished;
})
.then(()=> {
  const p3 = alice3.animate(aliceTumbling, aliceTiming)
  return p3.finished;
})
.catch((err) => console.log(err));
   
}
// playAnimation();

async function runloops(){
  for(let i=0; i<5; i++){
    const p1 = await playAnimation();
    console.log(p1);
  }
}

runloops();

// async function playAnimation2(num){

//   if(num <= 0) {
//     return
//   }

//   try{


//    await alice1.animate(aliceTumbling, aliceTiming).finished;
//    await alice2.animate(aliceTumbling, aliceTiming).finished;
//    await alice3.animate(aliceTumbling, aliceTiming).finished;
  

// }
// catch (err) {
//   console.log(err);
// }
//   playAnimation2(num-1);
  
// }
// playAnimation2(2);


async function playAnimation2(){

  try{


   await alice1.animate(aliceTumbling, aliceTiming).finished;
   await alice2.animate(aliceTumbling, aliceTiming).finished;
   await alice3.animate(aliceTumbling, aliceTiming).finished;
  

}
catch (err) {
  console.log(err);
}
  
}
// playAnimation2();


function playAnimationInLoop() {
   return new Promise((resolve) => {
    playAnimation();
    resolve();
  })

  // for(let i=0; i<5; i++){
  //  promise.then(()=>playAnimation());
  // }

}

// playAnimationInLoop();









