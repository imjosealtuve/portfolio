let h2 = document.getElementById('h2');
let clickEnglish = document.getElementById('bs-english');
let clickFrench = document.getElementById('bs-french');
let clickWordpress = document.getElementById('bs-wordpress');
let paragraph = document.getElementById('paragraph');
let clickPhotoshop = document.getElementById('bs-photoshop');
let clickIllustrator = document.getElementById('bs-illustrator');
let clickFrontend = document.getElementById('bs-frontend');

clickEnglish.addEventListener('click', function() {
    let title = "Inglés";
    let texto1 = `
Graduado del Centro Venezolano Americano del Zulia, una institución aliada con el gobierno de los EE. UU. para la promoción de su idioma, aprendí inglés en la institución más reconocida del departamento, completando sus 19 niveles y alcanzando un nivel conversacional B2. Además, he tenido experiencia laboral con clientes en el campo del diseño gráfico, lo que me ha permitido aplicar mis conocimientos en contextos reales y profesionales.` ;
    cambiarTexto(texto1, title);
});
clickFrench.addEventListener('click', function() {
    let title = "Francés";
    let texto1 = "Fui estudiante de la Alianza Francesa en Maracaibo, Estado Zulia (Venezuela). Completé 17 de sus 20 niveles, alcanzando un nivel B1 y adquiriendo conocimiento de la cultura francófona. Aprendiendo de hablantes nativos, fue una experiencia magnífica que me gustaría completar en algún momento para avanzar hacia un nuevo idioma.";
    cambiarTexto(texto1, title);
});
clickWordpress.addEventListener('click', function() {
    let title = "Wordpress";
    let texto1 = "Esta herramienta fue mi introducción y puerta de entrada al mundo de la construcción de sitios web. He diseñado sitios web, páginas de aterrizaje y sitios de comercio electrónico para varias empresas, mejorando sus objetivos y misiones comerciales al brindarles su propio espacio en la web. Al mismo tiempo, esto me llevó gradualmente al campo del desarrollo web y, eventualmente, al desarrollo de software.";
    cambiarTexto(texto1, title);
});
clickPhotoshop.addEventListener('click', function() {
    let title = "Adobe Photoshop";
    let texto1 = `Con más de 6 años de experiencia y un dominio absoluto en este programa de edición, he perfeccionado mis habilidades a través de cursos en plataformas como Udemy, Crehana y Platzi. Este software fue mi puerta de entrada al diseño y me ha permitido colaborar con empresas globales, aportando en proyectos creativos y tecnológicos. Lo manejo con total fluidez, explorando técnicas como el matte painting para integrar personajes y elementos en mis diseños, además de crear mockups funcionales para web y flyers publicitarios para redes sociales.`;
    cambiarTexto(texto1, title);
});
clickIllustrator.addEventListener('click', function() {
    let title = "Adobe Illustrator";
    let texto1 = "Con 4 años de experiencia en Adobe Illustrator, he trabajado en proyectos para diversas empresas, incluyendo la creación de estampados para una de las mayores compañías de ropa en Pereira, Colombia. Además, he desarrollado diseños de logotipos, aportando soluciones visuales en identidades de marca.";
    cambiarTexto(texto1, title);
});
clickFrontend.addEventListener('click', function() {
    let title = "Frontend Developer";
    let texto1 = "Como Frontend Developer, domino habilidades en UX/UI, CSS, JavaScript, React, Node.js y MySQL, lo que me ha permitido desarrollar diversos proyectos, software y sitios web, ya sea utilizando WordPress o código puro. Comencé mi trayectoria en el desarrollo de software a través de Platzi hace 3 años, complementando mis conocimientos con una tecnología en progreso en el CDITI SENA";
    cambiarTexto(texto1, title);
});

// Codigo para el portfolio de diseño




function cambiarTexto(value, value2) {
    h2.textContent = value2;
    paragraph.textContent = value;
}

function copyUrl(){
    let url = document.getElementById('url');
    let copy = document.getElementById('copy');

    navigator.clipboard.writeText(url.textContent);
    copy.textContent = 'Copied';
}
function copyUrl2(){
    let url2 = document.getElementById('url2');
    let copy2 = document.getElementById('copy2');

    navigator.clipboard.writeText(url2.textContent);
    copy2.textContent = 'Copied';
}
function copyUrl3(){
    let url = document.getElementById('url');
    let copy = document.getElementById('copy');

    navigator.clipboard.writeText(url.textContent);
    copy.textContent = 'Copiado';
}
function copyUrl4(){
    let url2 = document.getElementById('url2');
    let copy2 = document.getElementById('copy2');

    navigator.clipboard.writeText(url2.textContent);
    copy2.textContent = 'Copiado';
}