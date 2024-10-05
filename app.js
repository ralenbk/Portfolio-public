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
const yoSoy = document.getElementById('yo-soy');
const descFirst = document.getElementById('desc-first');
const contratame = document.getElementById('contratame');
const hablemos = document.getElementById('hablemos');
const aboutMe = document.getElementById('about-me');
const descTwo = document.getElementById('desc-two');
const readMore = document.getElementById('read-more');
const myJourney = document.getElementById('my-journey');
const educationTwo = document.getElementById('education-two');
const tecAux = document.getElementById('tecnico-aux-titulo');
const tecAuxDesc = document.getElementById('desc-teclab-aux');
const tecTitulo = document.getElementById('tecnico-titulo');
const tecTituloDesc = document.getElementById('desc-teclab-titulo');
const tituloUdemy = document.getElementById('titulo-udemy');
const descUdemy = document.getElementById('desc-udemy');
const experience = document.getElementById('experience-section');
const freelance = document.getElementById('freelance');
const freelanceDesc = document.getElementById('freelance-desc');
const mySkills = document.getElementById('my-skills');
const skillsCoding = document.getElementById('coding-skills');
const skillsProf = document.getElementById('prof-skills');
const webDesign = document.getElementById('web-design');
const webDev = document.getElementById('web-development');
const engCap = document.getElementById('enlgish-capabilites');
const porCap = document.getElementById('portugues-capabilites');
const esCap = document.getElementById('spanish-capabilites');
const myDevelop = document.getElementById('my-developments');
const onlineStore = document.getElementById('online-store');
const visitV1 = document.getElementById('visit-v1');
const visitV2 = document.getElementById('visit-v2');
const contactMe = document.getElementById('contact-me');
const submitForm = document.getElementById('submit-form');
const derechos = document.getElementById('derechos');

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
            yoSoy.textContent = 'Yo Soy';
            descFirst.textContent = 'Este portafolio muestra mi capacidad para crear soluciones integrales de alta calidad para problemas complejos. Cada proyecto se centra en el usuario y tiene un enfoque intuitivo y bien diseñado, lo que demuestra mi capacidad para crear aplicaciones web eficaces y eficientes.';
            contratame.textContent = 'Contratame';
            hablemos.textContent = 'Hablemos';
            aboutMe.textContent = 'Sobre Mi';
            descTwo.textContent = 'Soy un apasionado Full Stack Developer al que le encanta crear soluciones tecnológicas innovadoras. Mi experiencia en la construcción de aplicaciones web y móviles, junto con mi dominio de lenguajes de programación y frameworks, me permite construir soluciones escalables y de alto rendimiento. Estoy comprometido con la mejora continua y el aprendizaje constante para estar al día de las últimas tendencias tecnológicas.';
            readMore.textContent = 'Leer Más';
            myJourney.textContent = 'Mi Experiencia';
            educationTwo.textContent = 'Educación';
            tecAux.textContent = 'Técnico Auxiliar en Programación - Teclab';
            tecAuxDesc.textContent = 'El programa de Técnico Auxiliar en Programación proporciona conocimientos fundamentales sobre lenguajes de programación, algoritmos y metodologías de desarrollo de software.';
            tecTitulo.textContent = 'Técnico Superior en Programación - Teclab';
            tecTituloDesc.textContent = 'El programa de Técnico Superior en Programación proporciona conocimientos avanzados de lenguajes de programación, arquitectura de software y metodologías de gestión de proyectos.';
            tituloUdemy.textContent = 'Desarrollo Web Completo - Udemy';
            descUdemy.textContent = 'El curso de Desarrollo Web Fullstack cubre HTML, CSS, JavaScript, AJAX PHP y MySQL y frameworks populares para construir aplicaciones web escalables y responsivas.';
            experience.textContent = 'Experiencia';
            freelance.textContent = 'Desarrollador Web - Freelance';
            freelanceDesc.textContent = 'Como desarrollador web autónomo, diseño y desarrollo sitios web personalizados para clientes, ofreciéndoles soluciones a medida que satisfagan sus necesidades empresariales únicas.';
            mySkills.textContent = 'Mis Habilidades';
            skillsCoding.textContent = 'Habilidades de Programación';
            skillsProf.textContent = 'Habilidades Profesionales';
            webDesign.textContent = 'Diseño Web';
            webDev.textContent = 'Desarrollo Web';
            engCap.textContent = 'Inglés';
            porCap.textContent = 'Portugués';
            esCap.textContent = 'Español';
            myDevelop.textContent = 'Mis Proyectos';
            onlineStore.textContent = 'Tienda Online';
            visitV1.textContent = 'Visitar';
            visitV2.textContent = 'Visitar';
            contactMe.textContent = 'Contactame';
            submitForm.textContent = 'Enviar';
            derechos.textContent = 'Copyright © 2023 por Ramiro Cavallero | Todos los derechos Reservados.';
            break;

            case 'ingles':
            home.textContent = 'Home';
            about.textContent = 'About';
            education.textContent = 'Education';
            skills.textContent = 'Skills';
            projects.textContent = 'Projects';
            contact.textContent = 'Contact';
            yoSoy.textContent = 'Hi, I am';
            descFirst.textContent = 'This portfolio showcases my ability to create high-quality, end-to-end solutions for complex problems.Each project is user-focused and has an intuitive, well-designed approach, demonstrating my ability to create effective and efficient web applications.';
            contratame.textContent = 'Hire Me';
            hablemos.textContent = 'Lets Talk';
            aboutMe.textContent = 'About Me';
            descTwo.textContent = 'I am a passionate Full Stack Developer who loves to create innovative technological solutions. My experience in building web and mobile applications, along with my proficiency in programming languages and frameworks, allows me to build scalable and high-performance solutions. I am committed to continuous improvement and constant learning to stay up-to-date with the latest technological trends.';
            readMore.textContent = 'Read More';
            myJourney.textContent = 'My Journey';
            educationTwo.textContent = 'Education';
            tecAux.textContent = 'Auxiliary Technician in Programming - Teclab';
            tecAuxDesc.textContent = 'The Technical Assistant in Programming program provides fundamental knowledge of programming languages, algorithms, and software development methodologies.';
            tecTitulo.textContent = 'Superior Technician in Programming - Teclab';
            tecTituloDesc.textContent = 'The Superior Technician in Programming program provides advanced knowledge of programming languages, software architecture, and project management methodologies.';
            tituloUdemy.textContent = 'Complete Web Development - Udemy';
            descUdemy.textContent = 'Fullstack Web Development course covers HTML, CSS, JavaScript,  AJAX PHP y MySQL and popular frameworks for building scalable and responsive web applications.';
            experience.textContent = 'Experience';
            freelance.textContent = 'Web Developer - Freelance';
            freelanceDesc.textContent = 'I design and develop custom websites for clients, delivering tailored solutions that meet their unique business needs as a freelance web developer.';
            mySkills.textContent = 'My Skills';
            skillsCoding.textContent = 'Coding Skills';
            skillsProf.textContent = 'Professional Skills';
            webDesign.textContent = 'Web Design';
            webDev.textContent = 'Web Development';
            engCap.textContent = 'English';
            porCap.textContent = 'Portuguese';
            esCap.textContent = 'Spanish';
            myDevelop.textContent = 'My Developments';
            onlineStore.textContent = 'Online Store';
            visitV1.textContent = 'Visit Site';
            visitV2.textContent = 'Visit Site';
            contactMe.textContent = 'Contact Me';
            submitForm.textContent = 'Submit';
            derechos.textContent = 'Copyright © 2023 by Ramiro Cavallero | All Rights Reserved.';
            break;

            case 'portugues':
            home.textContent = 'Início';
            about.textContent = 'Sobre Mim';
            education.textContent = 'Educação';
            skills.textContent = 'Competências';
            projects.textContent = 'Projetos';
            contact.textContent = 'Contato';
            yoSoy.textContent = 'Eu Sou';
            descFirst.textContent = 'Este portefólio mostra a minha capacidade de criar soluções completas e de alta qualidade para problemas complexos. Cada projeto é centrado no utilizador e tem uma abordagem intuitiva e bem concebida, demonstrando a minha capacidade de criar aplicações Web eficazes e eficientes.';
            contratame.textContent = 'Contratar-me';
            hablemos.textContent = 'Falemos';
            aboutMe.textContent = 'Sobre mim';
            descTwo.textContent = 'Sou um programador Full Stack apaixonado que adora criar soluções tecnológicas inovadoras. A minha experiência na construção de aplicações web e móveis, juntamente com a minha proficiência em linguagens de programação e frameworks, permite-me construir soluções escaláveis e de alto desempenho. Estou empenhado na melhoria contínua e na aprendizagem constante para me manter atualizado com as últimas tendências tecnológicas.';
            readMore.textContent = 'Ler mais';
            myJourney.textContent = 'A minha experiência';
            educationTwo.textContent = 'Educação';
            tecAux.textContent = 'Assistente Técnico de Programação - Teclab';
            tecAuxDesc.textContent = 'O programa de Assistente Técnico de Programação fornece conhecimentos fundamentais sobre linguagens de programação, algoritmos e metodologias de desenvolvimento de software.';
            tecTitulo.textContent = 'Técnico de Programação Avançada - Teclab';
            tecTituloDesc.textContent = 'O programa Técnico de Programação Avançada proporciona conhecimentos avançados de linguagens de programação, arquitetura de software e metodologias de gestão de projectos.';
            tituloUdemy.textContent = 'Desenvolvimento Web completo - Udemy';
            descUdemy.textContent = 'O curso de Desenvolvimento Web Fullstack abrange HTML, CSS, JavaScript, AJAX, PHP e MySQL e estruturas populares para a criação de aplicações Web escaláveis e reactivas.';
            experience.textContent = 'experiência';
            freelance.textContent = 'Programador Web - Freelance';
            freelanceDesc.textContent = 'Como programador Web freelancer, concebo e desenvolvo sítios Web personalizados para clientes, oferecendo-lhes soluções à medida que satisfazem as suas necessidades comerciais específicas.';
            mySkills.textContent = 'As minhas competências';
            skillsCoding.textContent = 'Competências de programação';
            skillsProf.textContent = 'Competências profissionais';
            webDesign.textContent = 'Desenho Web';
            webDev.textContent = 'Desenvolvimento Web';
            engCap.textContent = 'Inglês';
            porCap.textContent = 'Português';
            esCap.textContent = 'espanhol';
            myDevelop.textContent = 'Os meus projectos';
            onlineStore.textContent = 'Loja online';
            visitV1.textContent = 'Visitar o sítio';
            visitV2.textContent = 'Visitar o sítio';
            contactMe.textContent = 'Contacte-me';
            submitForm.textContent = 'Enviar';
            derechos.textContent = 'Copyright © 2023 por Ramiro Cavallero | Todos os direitos reservados.';
            
            break;

            case 'italiano':
            home.textContent = 'Casa';
            about.textContent = 'Su di me';
            education.textContent = 'Educazione';
            skills.textContent = 'Competenze';
            projects.textContent = 'Progetti';
            contact.textContent = 'Contatto';
            yoSoy.textContent = 'Io Sono';
            descFirst.textContent = 'Questo portfolio mostra la mia capacità di creare soluzioni end-to-end di alta qualità per problemi complessi. Ogni progetto è incentrato sull utente e ha un approccio intuitivo e ben progettato, dimostrando la mia capacità di creare applicazioni web efficaci ed efficienti.';
            contratame.textContent = 'Assumetemi';
            hablemos.textContent = 'Parliamo';
            aboutMe.textContent = 'Su di me';
            descTwo.textContent = 'Soy un apasionado Full Stack Developer al que le encanta crear soluciones tecnológicas innovadoras. Mi experiencia en la construcción de aplicaciones web y móviles, junto con mi dominio de lenguajes de programación y frameworks, me permite construir soluciones escalables y de alto rendimiento. Estoy comprometido con la mejora continua y el aprendizaje constante para estar al día de las últimas tendencias tecnológicas.';
            readMore.textContent = 'Per saperne di più';
            myJourney.textContent = 'La mia esperienza';
            educationTwo.textContent = 'Educazione';
            tecAux.textContent = 'Assistente tecnico di programmazione - Teclab';
            tecAuxDesc.textContent = 'Il programma di assistente tecnico di programmazione fornisce le conoscenze fondamentali dei linguaggi di programmazione, degli algoritmi e delle metodologie di sviluppo del software.';
            tecTitulo.textContent = 'Tecnico di programmazione avanzata - Teclab';
            tecTituloDesc.textContent = 'Il programma Advanced Programming Technician fornisce una conoscenza avanzata dei linguaggi di programmazione, dell architettura del software e delle metodologie di gestione dei progetti.';
            tituloUdemy.textContent = 'Sviluppo web completo - Udemy';
            descUdemy.textContent = 'Il corso Fullstack Web Development copre HTML, CSS, JavaScript, AJAX, PHP e MySQL e i framework più diffusi per la realizzazione di applicazioni web scalabili e reattive.';
            experience.textContent = 'Esperienza';
            freelance.textContent = 'Sviluppatore web - Freelance';
            freelanceDesc.textContent = 'Come sviluppatore web freelance, progetto e sviluppo siti web personalizzati per i clienti, offrendo loro soluzioni su misura che soddisfano le loro esigenze aziendali uniche.';
            mySkills.textContent = 'Le mie capacità';
            skillsCoding.textContent = 'Competenze di programmazione';
            skillsProf.textContent = 'Competenze professionali';
            webDesign.textContent = 'Web Design';
            webDev.textContent = 'Sviluppo web';
            engCap.textContent = 'Inglese';
            porCap.textContent = 'Portoghese';
            esCap.textContent = 'Spagnolo';
            myDevelop.textContent = 'I miei progetti';
            onlineStore.textContent = 'Negozio online';
            visitV1.textContent = 'Visitare';
            visitV2.textContent = 'Visitare';
            contactMe.textContent = 'Contattare';
            submitForm.textContent = 'Inviare';
            derechos.textContent = 'Copyright © 2023 di Ramiro Cavallero | Tutti i diritti riservati.';
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

