// EVENTO SCROLL

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll",()=>{
    if (window.scrollY > 0) {
        navbar.classList.add("navScrolled")    
    } else {
        navbar.classList.remove("navScrolled")
    }
});


let numArticles = document.querySelector("#numArticles")
let numUsers = document.querySelector ("#numUsers")
let numComments = document.querySelector("#numComments")

// INTERVALLO SEZIONE NUMERI

function creaIntervallo (idElemento, finalNum, frequenza){
    let counter = 0 
    let intervallo = setInterval(()=>{
        if (counter < finalNum) {
            counter ++
            idElemento.innerHTML = counter ;
        } else {
            clearInterval(intervallo)
        }
    }, frequenza);
}

// INTERSECTION OBSERVER NUMERI DINAMCI

let sonoIntersecato = false ;


const intersectionObv = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{ 
        if (entry.isIntersecting && sonoIntersecato == false){
            
            creaIntervallo(numArticles, 500, 8)
            creaIntervallo(numUsers, 1000, 0.5)
            creaIntervallo(numComments, 200, 20)
            sonoIntersecato = true;
            setTimeout (()=>{
                sonoIntersecato = false;
            }, 10000 );   
        }
    })
})

intersectionObv.observe(numArticles)


// ULTIMI ANNUNCI

let announcements = [
    {name: "Katana di Hattori Hanzo", categoria: "Accessori", prezzo: 500, img: "https://picsum.photos/200"},
    {name: "Vaso Ming", categoria: "Arredamento", prezzo: 700, img: "https://picsum.photos/201"},
    {name: "Statua di terracotta", categoria: "Arredamento", prezzo: 650, img: "https://picsum.photos/202"},
    {name: "Quadro di Buddha", categoria: "Arredamento", prezzo: 350, img: "https://picsum.photos/203"},
    {name: "Guqin", categoria: "Musica", prezzo: 1000, img: "https://picsum.photos/204"},
];

let cardsWrapper = document.querySelector("#cardWrapper")

function CreateCards(){
announcements.forEach((annuncio, i )=>{
    if (i >= announcements.length - 3) {
        let column = document.createElement("div");
        column.classList.add("col-11", "col-lg-3", "my-3")
        column.innerHTML = `
        
        <div class="card position-relative h-100">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-2">
        NEW
        </span>
        <div class="overflow-hidden">
        <img src=${annuncio.img} class="card-img-top imgCard" alt="">
        </div>
        <div class="card-body d-flex flex-column justify-content-between ">
        <h4 class="card-title fw-bold text-center">${annuncio.name}</h4>
        <p class="card-text">Categoria: <span class="fs-4">${annuncio.categoria}</span></p>
        <p class="card-text">Prezzo: <span class="fs-4">${annuncio.prezzo}</span>€</p>
        </div>
        <div class="d-flex justify-content-between">
        <i class="bi bi-heart fs-3"></i>
        <a href="#" class="btn btn-success">Aggiungi al Carrello</a>
        </div>
        </div>
        `
        cardsWrapper.appendChild(column)
    }
})
}
CreateCards()

// SWIPER CAROSELLO
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  






