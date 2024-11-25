const images = [
    'Image/bungee.jpeg',
    'Image/doggie.jpeg',
    'Image/descarga (1).jpeg',
    'Image/descarga (2).jpeg'
];

let currentIndex = 0;
const header = document.getElementById('slider');

function changeBackgroundImage() {
    header.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000);


function mostrarSeccion(seccion) {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('galeria').style.display = 'none';
    document.getElementById('soporte').style.display = 'none';
    document.getElementById('acerca').style.display = 'none';
    let secciones = document.querySelectorAll('section');
    secciones.forEach(sec => sec.style.display = 'none');

    document.getElementById(seccion).style.display = 'block';
}

