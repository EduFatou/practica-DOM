/*
const cuerpo = document.body;
const principal = document.createElement('main');
principal.setAttribute('id', 'general');
cuerpo.appendChild(principal);

//secciones
const seccion1 = document.createElement('section');
seccion1.setAttribute('id', 'bienvenidos');
principal.appendChild(seccion1)

const seccion2 = document.createElement('section');
seccion2.setAttribute('id', 'recomendados');
principal.appendChild(seccion2);

const seccion3 = document.createElement('section');
seccion3.setAttribute('id', 'destinos');
principal.appendChild(seccion3);

//títulos
const tituloSeccion1 = document.createElement('h2');
tituloSeccion1.setAttribute('id', 'tituloBienvenidos');
tituloSeccion1.innerText = 'Bienvenidos';
seccion1.appendChild(tituloSeccion1);

const tituloSeccion2 = document.createElement('h2');
tituloSeccion2.setAttribute('id', 'tituloRecomendados');
tituloSeccion2.innerText = 'Recomendados';
seccion2.appendChild(tituloSeccion2);

const tituloSeccion3 = document.createElement('h2');
tituloSeccion3.setAttribute('id', 'tituloDestinos');
tituloSeccion3.innerText = 'Destinos';
seccion3.appendChild(tituloSeccion3);

*/

const banner = document.getElementById('banner');


const funcionBanner = () => {

    let arrayDiapositivas = ['Práctica DOM/assets/banner/1.jpg', 'Práctica DOM/assets/banner/2.jpg', 'Práctica DOM/assets/banner/3.jpg', 'Práctica DOM/assets/banner/4.jpg', 'Práctica DOM/assets/banner/5.jpg', 'Práctica DOM/assets/banner/6.jpg', 'Práctica DOM/assets/banner/7.jpg', 'Práctica DOM/assets/banner/8.jpg'];
    let arrayAlts = ['imagen 1', 'imagen 2', 'imagen 3', 'imagen 4', 'imagen 5', 'imagen 6', 'imagen 7', 'imagen 8'];

    let numeroDiapositiva = Math.floor(Math.random * arrayDiapositivas.length);

    banner.src = `${arrayDiapositivas[numeroDiapositiva]}`;
    banner.alt = `${arrayAlts[numeroDiapositiva]}`;
}
banner.getAttribute(src);
console.log(banner);