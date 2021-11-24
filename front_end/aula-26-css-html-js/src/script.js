//Imagem de fundo do main
let content = document.querySelector(".main");

window.onload = function (){
    content.style.backgroundImage = "url('img/fundo.jpg')";
    content.style.backgroundSize = "cover";
    content.style.backgroundPosition = "fixed";
    content.style.backgroundRepeat = "no-repeat";
    content.style.height = "200vh";
}

// Title
let title = document.querySelector("#title");

title.innerHTML = "Paulo Alexandre";
title.style.fontSize = "30px";
title.style.color = "red";

let eu = document.querySelector("#foto");
eu.src = "img/eu.jpg";
eu.style.borderRadius = "50%";

let p1 = document.querySelector("#estado");
p1.innerHTML = "Guarulhos / São Paulo";

let time = 2000;
let currentImageIndex = 0;
let imagens = document.querySelectorAll("#slider img");
let max = imagens.length;

function nextImage() {
    imagens[currentImageIndex].classList.remove("selected");

    currentImageIndex++;

    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    imagens[currentImageIndex].classList.add("selected");
}

function start() {
    
    setInterval(() => {
        //troca de image
        nextImage();       
    }, time)
}
window.addEventListener("load", start)


let description1 = document.querySelector("#paragraph1");
description1.innerHTML =  "Os peixes estão entre os seres vivos mais primitivos do planeta. Existem mais de 34 mil espécies de peixes, vivendo em dois tipos de habitat natural: nas águas salgadas dos oceanos e mares, e nas águas doces de rios, lagos e açudes."

let description2 = document.querySelector("#paragraph2");
description2.innerHTML =  "Na realidade, os peixes foram os primeiros vertebrados a colonizar a terra quando se tornaram tetrápodes, ou seja, desenvolveram as quatro patas. Acredita-se que eles habitem o planeta há mais de 500 milhões de anos."

let description3 = document.querySelector("#paragraph3");
description3.innerHTML =  "A comunicação entre os peixes acontece principalmente de forma química, por feromônios, mas pode ser também visual. Sua principal importância é durante o período reprodutivo e para evitar a predação."

let description4 = document.querySelector("#paragraph4");
description4.innerHTML =  "Os peixes são animais vertebrados, aquáticos, tipicamente ectotérmicos, que possuem o corpo fusiforme, os membros transformados em barbatanas ou nadadeiras (ausentes em alguns grupos) sustentadas por raios ósseos ou cartilaginosos, guelras ou brânquias com que respiram o oxigénio dissolvido na água."

let img1 = document.querySelector("#img1");
img1.src = "img/peixe1.jpg";

let img2 = document.querySelector("#img2");
img2.src = "img/peixe2.JPG";

let img3 = document.querySelector("#img3");
img3.src = "img/peixe3.jpg";

let img4 = document.querySelector("#img4");
img4.src = "img/peixe4.jpg";

let img5 = document.querySelector("#img5");
img5.src = "img/peixe5.jpg";

let img6 = document.querySelector("#img6");
img6.src = "img/peixe6.jpg";

let img7 = document.querySelector("#img7");
img7.src = "img/peixe7.jpg";

let img8 = document.querySelector("#img8");
img8.src = "img/peixe8.jpg";

let img9 = document.querySelector("#img9");
img9.src = "img/peixe9.jpg";

let link1 = document.getElementById("link1");
link1.href = "https://brasilescola.uol.com.br/biologia/peixes.htm";

let link2 = document.getElementById("link2");
link2.href = "https://www.todamateria.com.br/peixes/";





