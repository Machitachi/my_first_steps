let main = document.querySelector("main");
main.style.backgroundImage = "url('img/metal.jpg')";
main.style.backgroundSize = "cover";
main.style.backgroundPosition = "fixed";
main.style.backgroundRepeat = "no-repeat"; 

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
description1.innerHTML =  "Massacration é uma banda humorística de heavy metal (semelhante ao Spinal Tap) criada por integrantes do programa de humor da MTV Brasil intitulado Hermes e Renato. O quadro de humor no qual a banda aparecia acabou tomando proporções enormes e criando uma legião de admiradores, o que levou a banda a fazer concertos de verdade. Fazendo paródias de bandas de heavy metal como Manowar, a banda lançou em 2005 seu primeiro CD, produzido pelo VJ João Gordo."

let description2 = document.querySelector("#paragraph2");
description2.innerHTML =  "Na SuperLiveNerd, a banda entra e faz uma chamada para o vídeo de 'Metal Galera', novo clipe do Massacration, que é apresentado em primeira mão na sequência, conta Torres, que dirigiu o trabalho junto com o cineasta Alexandre Machado."

let description3 = document.querySelector("#paragraph3");
description3.innerHTML =  "O Massacration se apresentou ao lado de outras bandas fictícias do selo Trololó Records, como Coração Melão e MC Sacana. Esta era a segunda aparição do grupo, após o clipe de Metal Massacre Attack. Além desta, o Massacration apresentou uma canção então inédita: Metal Bucetation. Com uma apresentação energética, culminando com a destruição do violão por parte de Blondie Hammet, o Massacration atingiu enorme repercussão entre os telespectadores do programa e headbangers."

let description4 = document.querySelector("#paragraph4");
description4.innerHTML =  "Seguiram-se novas aparições no programa Hermes e Renato com os clipes de 'Metal Bucetation' e 'Metal Milk-Shake' e uma apresentação no programa 'Cláudio Ricardo' (para promover o 'single' Metal Bucetation) além de entrevistas e participações em outros programas da MTV (como o Garagem do Edgar e a premiação anual VMB)."

let img1 = document.querySelector("#img1");
img1.src = "img/metal1.jpg";

let img2 = document.querySelector("#img2");
img2.src = "img/metal2.JPG";

let img3 = document.querySelector("#img3");
img3.src = "img/metal3.jpg";

let img4 = document.querySelector("#img4");
img4.src = "img/metal4.jpg";

let img5 = document.querySelector("#img5");
img5.src = "img/metal5.jpg";

let img6 = document.querySelector("#img6");
img6.src = "img/metal6.jpg";

let img7 = document.querySelector("#img7");
img7.src = "img/metal7.jpg";

let img8 = document.querySelector("#img8");
img8.src = "img/metal8.jpg";

let img9 = document.querySelector("#img9");
img9.src = "img/metal9.jpg";






