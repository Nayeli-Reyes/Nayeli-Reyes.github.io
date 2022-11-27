
document.addEventListener("DOMContentLoaded", (e) => {


    let datos = [];
    const contenido = document.querySelector("#contenido");


    boton.addEventListener('click', () => {
        
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api/?results=50'

        }).then(res => {
            datos = res.data.results;
            console.log(datos);
            mostrarDatos();

        })
            .catch((res) => {
                console.log('Se produjo un error durante el proceso');
            });
    });
    
    

    let inicio = 0;
    let final = 10;
    let total = 50;

    

    const mostrarDatos = () => {
        const fragment = document.createDocumentFragment();
        if (final >= total) {
            console.log('Completo');
        } else {
            for (let i = inicio; i < final; i++) {
                const card = document.createElement("div");
                const nombre = document.createElement("h2");
                const apellido = document.createElement("h3");
                const foto = document.createElement("img");
                const edad = document.createElement("div");
                const sexo = document.createElement("div");
                const cel = document.createElement("div");
                const username = document.createElement("h4");
                const pais = document.createElement("div");
                const correo = document.createElement("h6");
                card.classList.add("cards");
                nombre.textContent = datos[i].name.first;
                apellido.textContent = datos[i].name.last;
                foto.src = datos[i].picture.thumbnail;
                edad.textContent = datos[i].dob.age;
                sexo.textContent = datos[i].gender;
                cel.textContent = datos[i].phone;
                correo.textContent = datos[i].email;
                username.textContent = datos[i].login.username;
                pais.textContent = datos[i].location.country;
                card.appendChild(foto);
                card.appendChild(nombre);
                card.appendChild(apellido);
                card.appendChild(username);
                card.appendChild(pais);
                card.appendChild(sexo);
                card.appendChild(edad);
                card.appendChild(cel);
                card.appendChild(correo);
                
                fragment.appendChild(card);
                
            }
            inicio += 10;
            final += 10;
            contenido.append(fragment);

            
        }
        
        setObserver();
    };

    const setObserver = () => {
        const options = { threshold: 0.5 }
        const observer = new IntersectionObserver(observar, options);
        observer.observe(contenido.lastElementChild);
    }

    const observar = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                mostrarDatos();
            }
        })
    };
   
    $("#oculta").click(() => { $(contenido).hide("slow"); });
    $("#muestra").click(() => { $(contenido).show("slow"); });
    $("#visible").click(() => { $(contenido).slideToggle(); });
   

});


