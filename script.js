document.addEventListener("DOMContentLoaded",()=>{

const hero=document.querySelector(".hero-content");

hero.style.opacity="0";
hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="all 1s ease";

hero.style.opacity="1";

hero.style.transform="translateY(0)";

},200);

});
// ==========================
// Animación historia
// ==========================

const pasos = document.querySelectorAll(".paso");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.3
});

pasos.forEach((paso,i)=>{

    setTimeout(()=>{

        observer.observe(paso);

    },i*250);

});
// ==========================
// Dibujar camino
// ==========================

const camino = document.querySelector(".linea-camino");

const caminoObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            camino.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

caminoObserver.observe(document.querySelector(".camino"));
