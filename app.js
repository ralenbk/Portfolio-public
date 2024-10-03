// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active');
            });

        }
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbabr links

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.getElementById("contact").addEventListener("submit", function(event){
    event.preventDefault();
    
    var nombre = document.querySelector('input[placeholder="Full Name"]').value;
    var correo = document.querySelector('input[placeholder="Email Address"]').value;
    var telefono = document.querySelector('input[placeholder="Mobile Number"]').value;
    var asunto = document.querySelector('input[placeholder="Email Subject"]').value;
    var mensaje = document.querySelector('textarea[placeholder="Your Message"]').value;
    
    var textoWhatsapp = "Hola mi nombre es: " + nombre + "%0A" + "Correo electrónico: " + correo + "%0A" + "Teléfono: " + telefono + "%0A" + "Asunto: " + asunto + "%0A" + "Mensaje: " + mensaje;
    var urlWhatsapp = "https://wa.me/543404646119/?text=" + textoWhatsapp;
    
    window.open(urlWhatsapp);
});

//Idiomas
const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

//Textos 

const home = document.getElementById('home-menu');
const about = document.getElementById('about-menu');
const education = document.getElementById('education-menu');
const skills = document.getElementById('skills-menu');
const projects = document.getElementById('projects-menu');
const contact = document.getElementById('contact-menu');

//Falta agregar todo el texto aqui arriba en las variables

//toogle lista de idiomas
idiomaActual.addEventListener('click', ()=>{
    listaIdiomas.classList.toggle('toggle')
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click', ()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLocaleLowerCase();
        establecerIdioma(idioma);
        
    });
})

function establecerIdioma (idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `images/${idioma}.png`;
    switch (idioma) {
        case 'español':
            home.textContent = 'Inicio';
            about.textContent = 'Sobre Mi';
            education.textContent = 'Educacion';
            skills.textContent = 'Habilidades';
            projects.textContent = 'Proyectos';
            contact.textContent = 'Contacto';
            break;

            case 'ingles':
            home.textContent = 'Home';
            about.textContent = 'About';
            education.textContent = 'Education';
            skills.textContent = 'Skills';
            projects.textContent = 'Projects';
            contact.textContent = 'Contact';
            break;

            case 'portugues':
            home.textContent = 'Início';
            about.textContent = 'Sobre Mim';
            education.textContent = 'Educação';
            skills.textContent = 'Competências';
            projects.textContent = 'Projetos';
            contact.textContent = 'Contato';
            break;

            case 'italiano':
            home.textContent = 'Casa';
            about.textContent = 'Su di me';
            education.textContent = 'Educazione';
            skills.textContent = 'Competenze';
            projects.textContent = 'Progetti';
            contact.textContent = 'Contatto';
            break;

            default:
                break;


    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    console.log(navigator.language)
    switch(navigator.language) {
        case 'en-US':
            establecerIdioma('ingles');
            break;


            default: 
            establecerIdioma('español');
                break;
    }
})

