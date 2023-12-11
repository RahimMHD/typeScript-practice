import './style.css'

window.onload = () => {
  window.scrollTo(0, 0);
}

const intro = <HTMLElement> document.querySelector('.intro');
const introImage = <HTMLElement> document.querySelector('.intro .image-intro');
const introPiece = <HTMLElement> document.querySelector('.intro .image-intro .effectLogo');
const logo_mhd = <HTMLElement> document.querySelector(".intro .image-intro .logo-mhd");

setTimeout(() => {
  introPiece ?.classList.add("stop");
  setInterval(() => {
    showLetters();
  }, 400)
}, 1428);

// const exmple = document.getElementById("words");
let arrExm = ["M", 'H', 'D', '.'];
let index = 0;
let sentens = '';

function showLetters() {
  if (index < arrExm.length) {
    sentens += arrExm[index];
    logo_mhd ? logo_mhd.innerHTML = `<span style='transiton: 1s'>${sentens}</span>`: null; 
    index = index + 1;
  }
}


setTimeout(() => {
  introImage?.classList.add('none');
  setTimeout(() => {
    intro?.classList.add('height');
    setTimeout(() => {
      intro?.classList.add('none');
    }, 400)
  }, 500)
}, 3300)


const links = <NodeList> document.querySelectorAll('.header .container .box li#hov');

links.forEach((link: any) => {
  link.addEventListener('mouseover', () => {
    link.childNodes.length > 4 
    ? link.childNodes[1].childNodes[0].classList.add('fa-beat')
    : link.childNodes[0].childNodes[0].classList.add('fa-beat');
  })
  link.addEventListener('mouseout', () => {
    link.childNodes.length > 4
    ? link.childNodes[1].childNodes[0].classList.remove('fa-beat')
    : link.childNodes[0].childNodes[0].classList.remove('fa-beat');
  })
})


const lendingContainer = <HTMLElement> document.querySelector(".lending .container");

const containerImageOne = <HTMLElement> document.querySelector(".lending .container .image .one");
const containerImageTwo = <HTMLElement> document.querySelector(".lending .container .image .two");
const containerImageThree = <HTMLElement> document.querySelector(".lending .container .image .three");
const containerImageFour = <HTMLElement> document.querySelector(".lending .container .image .four");
const containerImageFive = <HTMLElement> document.querySelector(".lending .container .image .five");
const containerImageSex = <HTMLElement> document.querySelector(".lending .container .image .sex");
const containerImageSeven = <HTMLElement> document.querySelector(".lending .container .image .seven");


// const ballImageCountainer = document.querySelector(".lending .container .image .image-ball .ball");

const canvas = <HTMLCanvasElement> document.getElementById("ball");
const context = canvas.getContext('2d');

let x= canvas.width / 2;
let y= canvas.height / 2;
const raduis= 50;
const imageSpeed= 2;

// let angle: number = 0;
let dx= imageSpeed;
let dy= imageSpeed;

const imgBall = new Image();
imgBall.src = './landing-image.png';

function drawImage() {
  context?.clearRect(0, 0, canvas.width, canvas.height);

  context?.drawImage(imgBall, x / 2, y / 2, 450, 270);

  x += dx;
  y += dy;

  if (x + raduis <= -30 || x >= canvas.width - 249) {
    dx = -dx; // Reverse the horizontal direction
  }

  if (y - raduis <= -100 || y >= canvas.height - 70) {
    dy = -dy; // Reverse the vertical direction
  }

  requestAnimationFrame(drawImage);
  
}

imgBall.onload = () => {
  drawImage()
};


const containerH = <HTMLElement> document.querySelector(".lending .container .info h1");
const containerP = <HTMLElement> document.querySelector(".lending .container .info p");

const games: NodeListOf<Element> = document.querySelectorAll(".games")

const gallery = document.querySelector(".gallery .container") as HTMLElement;

const features: NodeListOf<Element> = document.querySelectorAll(".features .container .box");

const testimonials: NodeListOf<Element> = document.querySelectorAll(".testimonials .container .box");

const team: NodeListOf<Element> = document.querySelectorAll(".team .container .box");

const services: NodeListOf<Element> = document.querySelectorAll(".services .container .box");

const skillsimage = <HTMLElement> document.querySelector(".skills .container .image");
const skills: NodeListOf<Element> = document.querySelectorAll(".skills .container .info .lang");

const worklmage = <HTMLElement> document.querySelector(".work .container .image");
const work: NodeListOf<Element> = document.querySelectorAll(".work .container .info");

const eventsImage = <HTMLElement> document.querySelector(".event .container img");
const events = <HTMLElement> document.querySelector(".event .container .info");
const eventsD = document.querySelector(".event .container .info #days") as HTMLElement;
const eventsH = document.querySelector(".event .container .info #hours") as HTMLElement;
const eventsM = document.querySelector(".event .container .info #minutes") as HTMLElement;
const eventsS = document.querySelector(".event .container .info #second") as HTMLElement;
const eventsForm = <HTMLElement> document.querySelector(".event .container form");

const price: NodeListOf<Element> = document.querySelectorAll(".price .container .box");

const video = <HTMLElement> document.querySelector(".video .container");

const stats: NodeListOf<Element> = document.querySelectorAll(".stats .container .box");
const statsValue:NodeListOf<Element> = document.querySelectorAll(".stats .container .box h3");

const discountColH = <HTMLElement> document.querySelector(".discount .box .pay .col h2");
const discountColP = <HTMLElement> document.querySelector(".discount .box .pay .col p");
const discountimage = <HTMLElement> document.querySelector(".discount .box .pay .col img");
const discountInput: NodeListOf<Element> = document.querySelectorAll(".discount .box .request .input");
const discountLink = <HTMLElement> document.querySelector(".discount .box .request .link");

const option = {
    threshold: 0.7,
};

const sectionObserve = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("move-up")
            sectionObserve.unobserve(entry.target)
        }
    });
}, option);

sectionObserve.observe(introPiece)

setTimeout(() => {
  containerH.classList.add("move-up");
  containerP.classList.add("move-up");
  setTimeout(() => {
      sectionObserve.observe(containerImageOne);
      setTimeout(() => {
          sectionObserve.observe(containerImageTwo);
          setTimeout(() => {
              sectionObserve.observe(containerImageThree);
              setTimeout(() => {
                  sectionObserve.observe(containerImageFour);
                  setTimeout(() => {
                      sectionObserve.observe(containerImageFive);
                      setTimeout(() => {
                          sectionObserve.observe(containerImageSex);
                          setTimeout(() => {
                              sectionObserve.observe(containerImageSeven);
                          }, 200);
                      }, 200);
                  }, 200);
              }, 200);
          }, 200);
      }, 200);
  }, 500)
}, 4000)


// const gameOne = document.querySelector('.article .container .games:first-child')

// let valrotate = 0;
let scrollTopY = 0;

window.addEventListener("scroll", () => {
  scrollTopY = window.scrollY - 750;
  let scrollTopX : string | number = "";
  
  if (scrollTopY >= -450 && scrollTopY <= 1470) {
    games.forEach((game: any , index : number ) => {
    
      const offset = index * 200;
      
      scrollTopX = 3 * (+scrollTopY - offset);

      const rotation = -5 + (Math.abs(scrollTopX) / 100);

      let scale = 0.84;

      if (-scrollTopX >= 100 && -scrollTopX <= 1200) {
        scale = 0.9;
      }

      game.style.transition = 'transform 0.09s ease';
      game.style.transform = `
        translate(${-scrollTopX}px, ${-scrollTopY - 350}px)
        rotate(${rotation}deg)
        scale(${scale})
      `;

    });
  }
  
})

features.forEach((item) => sectionObserve.observe(item));

testimonials.forEach((item) => sectionObserve.observe(item));

team.forEach((item) => sectionObserve.observe(item));

services.forEach((item) => sectionObserve.observe(item));

skills.forEach((item) => sectionObserve.observe(item));
sectionObserve.observe(skillsimage);

work.forEach((item) => sectionObserve.observe(item));
sectionObserve.observe(worklmage);

sectionObserve.observe(events);
sectionObserve.observe(eventsImage);
sectionObserve.observe(eventsForm);

price.forEach((item) => sectionObserve.observe(item));

sectionObserve.observe(video);

stats.forEach((item) => sectionObserve.observe(item));

sectionObserve.observe(discountColH);
sectionObserve.observe(discountColP);
sectionObserve.observe(discountimage);

discountInput.forEach((item) => sectionObserve.observe(item));

sectionObserve.observe(discountLink);


// const myUpdatTime = setInterval(myTime, 1000);

const minutetest = 1000 * 60;
const hourtest = minutetest * 60;
const daytest = hourtest * 24;
// const mounthtest = daytest * 30;

function myTime(): void {
    const time = new Date();
    eventsD.innerHTML = `${Math.trunc(time.getTime() / daytest - 19170)}`;
    eventsH.innerHTML = `${time.getHours()}`;
    eventsM.innerHTML = `${time.getMinutes()}`;
    eventsS.innerHTML = `${time.getSeconds()}`;
}

setInterval(() => myTime(), 1000)

let updateStateObserv = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            const updateCount = () => {
                const dataTarget: number | string | null = entry.target.getAttribute("data-target");
                let entryTarget: any  = entry.target;
                const text = +entry.target.innerHTML;
                if (dataTarget) {
                  const increment = Math.floor((+dataTarget - text) / speed);
  
                  if (text < +dataTarget && increment > 0) {
                      entryTarget.innerHTML = text + increment;

                      setTimeout(updateCount, 30);
                  } else {
                      entry.target.innerHTML = dataTarget;
                  }
                }
            }
            updateCount();
            updateStateObserv.unobserve(entry.target);
        }
    });
}, option);

const speed = 10;

statsValue.forEach(item => updateStateObserv.observe(item));
    
window.addEventListener('scroll', function() {
  let value = (window.scrollY * 0.2);
  value = value >= 70 ? 70 : window.scrollY * 0.2;
  
  lendingContainer.style.transform = `perspective(2000px) rotateX(-${value}deg)`;
});

const imagesElement = [
  "./gallery-01.png",
  "./gallery-02.png",
  "./gallery-03.jpg",
  "./gallery-04.png",
  "./gallery-05.jpg",
  "./gallery-06.png",
  "./gallery-01.png",
  "./gallery-02.png",
  "./gallery-03.jpg",
  "./gallery-04.png",
  "./gallery-05.jpg",
  "./gallery-06.png",
  "./gallery-01.png",
  "./gallery-02.png",
  "./gallery-03.jpg",
  "./gallery-04.png",
  "./gallery-05.jpg",
  "./gallery-06.png",
]

imagesElement.map(ele => gallery.innerHTML += `
  <div class="box">
    <div class="image slideImg">
      <img src=${ele}>
    </div>
  </div>`
)








