"use strict";

//exercise 1
/* gsap.to(".ball", { duration: 2, x: 400 });
gsap.to(".ball", { duration: 2, rotation: 200 });
gsap.to(".ball", { scale: 0, y: 25, duration: 2, delay: 2 }); */

//exercise 3
const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

timeline.to(".ball", { duration: 2, x: 400, rotation: 200 });

timeline.to(".ball", { scale: 0, y: 25, duration: 4, x: 800, y: -800 }, 1.6);
