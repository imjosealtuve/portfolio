let h2 = document.getElementById('h2');
let clickHtml = document.getElementById('bs-html');
let clickCss = document.getElementById('bs-css');
let clickJs = document.getElementById('bs-js');
let clickPython = document.getElementById('bs-python');
let clickEnglish = document.getElementById('bs-english');
let clickFrench = document.getElementById('bs-french');
let clickWordpress = document.getElementById('bs-wordpress');
let paragraph = document.getElementById('paragraph');
let clickPhotoshop = document.getElementById('bs-photoshop');

clickHtml.addEventListener('click', function() {
    let title = "HTML";
    let texto1 = "El lenguaje marcado de hipertexto utilizado en los sitios web y software que he realizado se basa en la buena estructura y prácticas para su correcto funcionamiento. Así como HTML Semántico para optimización SEO.";
    cambiarTexto(texto1, title);
});
clickCss.addEventListener('click', function() {
    let title = "CSS";
    let texto1 = "I have completed frontend courses and styled over 20 projects, also complementing with graphic design discipline, which, although different from web design, helps me create more polished websites and software supported by my knowledge of design fundamentals.";
    cambiarTexto(texto1, title);
});
clickJs.addEventListener('click', function() {
    let title = "Javascript";
    let texto1 = "This is the language in which I have the most experience with projects and certificates that validate my knowledge. It was where I did my first logic exercises and projects, starting my learning on the Platzi platform, which I loved for its teaching style and philosophy of never stopping learning, completing various courses in the language and technology field. I am proficient in DOM manipulation, Asynchronous programming, POS, and best practices.";
    cambiarTexto(texto1, title);
});
clickPython.addEventListener('click', function() {
    let title = "Python";
    let texto1 = "I have participated in two Python courses at CDITI SENA, located in Dosquebradas. I have a thorough understanding of the language and the use of variables, loops, functions, conditionals, and projects developed with these concepts. This language was my introduction to Backend development and the one that sparked my passion for it.";
    cambiarTexto(texto1, title);
});
clickEnglish.addEventListener('click', function() {
    let title = "Inglés";
    let texto1 = `Graduated from the Centro Venezolano Americano del Zulia, an institution allied with the U.S. government for the promotion of its language, I learned English at the most recognized institution in the department, completing its 19 levels and achieving a B2 conversational level. Additionally, I have had work experience with clients in the graphic design field, which has allowed me to apply my learning in real-world and professional contexts.` ;
    cambiarTexto(texto1, title);
});
clickFrench.addEventListener('click', function() {
    let title = "Francés";
    let texto1 = "I was a student at the Alliance Française in Maracaibo, Zulia State (Venezuela). I completed 17 of their 20 levels, achieving a B1 level and gaining knowledge of Francophone culture. Learning from native speakers, it was a magnificent experience that I would like to complete at some point to move on to a new language.";
    cambiarTexto(texto1, title);
});
clickWordpress.addEventListener('click', function() {
    let title = "Wordpress";
    let texto1 = "This tool was my introduction and gateway to the world of website construction. I have designed websites, landing pages, and e-commerce sites for several companies, enhancing their business objectives and missions by giving them their own space on the web. At the same time, it gradually led me to the field of web development and eventually to software development.";
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