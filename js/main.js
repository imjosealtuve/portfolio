let h2 = document.getElementById('h2');
let clickHtml = document.getElementById('bs-html');
let clickCss = document.getElementById('bs-css');
let clickJs = document.getElementById('bs-js');
let clickPython = document.getElementById('bs-python');
let clickEnglish = document.getElementById('bs-english');
let clickFrench = document.getElementById('bs-french');
let clickWordpress = document.getElementById('bs-wordpress');
let paragraph = document.getElementById('paragraph');

clickHtml.addEventListener('click', function() {
    let title = "HTML";
    let texto1 = "El lenguaje marcado de hipertexto utilizado en los sitios web y software que he realizado se basa en la buena estructura y prácticas para su correcto funcionamiento. Así como HTML Semántico para optimización SEO.";
    cambiarTexto(texto1, title);
});
clickCss.addEventListener('click', function() {
    let title = "CSS";
    let texto1 = "Completado cursos de frontend y estilizado más de 20 proyectos, también complemento con la disciplina del diseño gráfico, que si bien es distinta al diseño web, me ayuda a crear sitios web y software más estilizados apoyado en mis conocimientos de los fundamentos del diseño.";
    cambiarTexto(texto1, title);
});
clickJs.addEventListener('click', function() {
    let title = "Javascript";
    let texto1 = "Este es el lenguaje en el que tengo tanto mayor experiencia de proyectos y certificados que avalan mi conocimiento. Donde realicé mis primeros ejercicios de lógica y mis primeros proyectos, iniciando mi aprendizaje en la plataforma Platzi que me encantó con su forma de enseñar y su filosofía de nunca parar de aprender, completando diversos cursos en el lenguaje y área de la tecnología. Tengo dominio del manejo del DOM, Asincronismo, POS y buenas prácticas";
    cambiarTexto(texto1, title);
});
clickPython.addEventListener('click', function() {
    let title = "Python";
    let texto1 = "He sido participe de dos cursos de Python en el CDITI SENA, ubicado en Dosquebradas. Tengo conocimiento pleno del lenguaje y el uso de variables, ciclos, funciones, condicionales y proyectos desarrollados con estos mismos. Este lenguaje fue mi introducción al Backend y el que me apasionó por el mismo.";
    cambiarTexto(texto1, title);
});
clickEnglish.addEventListener('click', function() {
    let title = "Inglés";
    let texto1 = `Graduado del Centro Venezolano Americado del Zulia, institución aliada al gobierno estadounidense para la difusión de su idioma, aprendí Inglés en la institución con mayor reconocimiento del departamento completando sus 19 niveles y logrando un nivel B2 conversacional. A su vez he tenido experiencia laboral con clientes en el área del diseño gráfico que me han permitido llevar mi aprendizaje al mundo real y laboral.` ;
    cambiarTexto(texto1, title);
});
clickFrench.addEventListener('click', function() {
    let title = "Francés";
    let texto1 = "Fui estudiante de la Alianza Francesa en su sede en Maracaibo, estado Zulia (Venezuela). Completando 17 de sus 20 niveles y llegando a obtener un B1, conociendo a su vez la cultura francófona. Aprendiendo de nativos del idioma, fue una experiencia máginifica que en algún punto me gustaría completar para dar paso a un nuevo idioma.";
    cambiarTexto(texto1, title);
});
clickWordpress.addEventListener('click', function() {
    let title = "Wordpress";
    let texto1 = "Esta herramienta fue mi introducción y enlace al mundo de la construcción de sitios web, habiendo diseñado para varias empresas sus páginas web, landing pages o ecommerce potenciando así su objetivo y misión de negocio, dándoles un espacio propio en la web. Al mismo tiempo, lentamente fue mi enlace al área de desarrollo web y posteriormente al desarrollo de software.";
    cambiarTexto(texto1, title);
});

function cambiarTexto(value, value2) {
    h2.textContent = value2;
    paragraph.textContent = value;
}