let h2 = document.getElementById('h2');
let clickEnglish = document.getElementById('bs-english');
let clickFrench = document.getElementById('bs-french');
let clickWordpress = document.getElementById('bs-wordpress');
let paragraph = document.getElementById('paragraph');
let clickPhotoshop = document.getElementById('bs-photoshop');
let clickIllustrator = document.getElementById('bs-illustrator');
let clickFrontend = document.getElementById('bs-frontend');

clickEnglish.addEventListener('click', function() {
    let title = "English";
    let texto1 = `
Graduated from the Venezuelan American Center of Zulia, an institution allied with the U.S. government for the promotion of its language, I learned English at the most recognized institution in the department, completing its 19 levels and reaching a B2 conversational level. In addition, I have had work experience with clients in the field of graphic design, which has allowed me to apply my knowledge in real and professional contexts.`;
    cambiarTexto(texto1, title);
});

clickFrench.addEventListener('click', function() {
    let title = "French";
    let texto1 = "I was a student at the French Alliance in Maracaibo, Zulia State (Venezuela). I completed 17 of its 20 levels, reaching a B1 level and gaining knowledge of Francophone culture. Learning from native speakers was a wonderful experience that I would like to complete at some point to advance towards a new language.";
    cambiarTexto(texto1, title);
});

clickWordpress.addEventListener('click', function() {
    let title = "WordPress";
    let texto1 = "This tool was my introduction and gateway into the world of website building. I have designed websites, landing pages, and e-commerce sites for various companies, enhancing their business goals and missions by providing them with their own space on the web. At the same time, this gradually led me into the field of web development and eventually into software development.";
    cambiarTexto(texto1, title);
});

clickPhotoshop.addEventListener('click', function() {
    let title = "Adobe Photoshop";
    let texto1 = `With over 6 years of experience and absolute mastery of this editing software, I have honed my skills through courses on platforms like Udemy, Crehana, and Platzi. This software was my gateway to design and has allowed me to collaborate with global companies, contributing to creative and technological projects. I handle it with complete fluency, exploring techniques like matte painting to integrate characters and elements into my designs, as well as creating functional mockups for the web and promotional flyers for social media.`;
    cambiarTexto(texto1, title);
});

clickIllustrator.addEventListener('click', function() {
    let title = "Adobe Illustrator";
    let texto1 = "With 4 years of experience in Adobe Illustrator, I have worked on projects for various companies, including creating prints for one of the largest clothing companies in Pereira, Colombia. In addition, I have developed logo designs, providing visual solutions for brand identities.";
    cambiarTexto(texto1, title);
});

clickFrontend.addEventListener('click', function() {
    let title = "Frontend Developer";
    let texto1 = "As a Frontend Developer, I have mastered skills in UX/UI, CSS, JavaScript, React, Node.js, and MySQL, which has allowed me to develop various projects, software, and websites, either using WordPress or pure code. I started my journey in software development through Platzi 3 years ago, complementing my knowledge with ongoing technical studies at CDITI SENA.";
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