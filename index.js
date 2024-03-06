// Definir las preguntas y respuestas en un array de objetos
const preguntas = [
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Amazonas", "Yangtsé", "Misisipi", "Nilo"],
        respuesta: "Nilo"
    },
    {
        pregunta: "¿Cuál es la película más taquillera de todos los tiempos?",
        opciones: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars: El despertar de la fuerza"],
        respuesta: "Avengers: Endgame"
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Cervantes", "Shakespeare", "García Márquez", "Tolstói"],
        respuesta: "Cervantes"
    },
    {
        pregunta: "¿Quién fue Manuel Belgrano?",
        opciones: ["Un explorador europeo", "Un prócer de la Independencia Argentina", "Un líder revolucionario francés", "El que mando a River a la B"],
        respuesta: "Un prócer de la Independencia Argentina"
    },
    {
        pregunta: "¿Cuándo cayó el Muro de Berlín?",
        opciones: ["1989", "1991", "1993", "1987"],
        respuesta: "1989"
    },
    {
        pregunta: "¿Cuál es el pogo más grande del mundo?",
        opciones: ["El 38-Divididos", "Nos Siguen Pegando Abajo-Charly García", "Ji Ji Ji-Los Redondos", "El Rebelde-La Renga"],
        respuesta: "Ji Ji Ji-Los Redondos"
    },
    {
        pregunta: "¿Cuál es el club más grande de Argentina?",
        opciones: ["Boca Juniors", "River Plate", "Independiente", "Racing Club"],
        respuesta: "Boca Juniors"
    },
    {
        pregunta: "¿Quién es Diosito?",
        opciones: ["Maradona", "Personaje de 'Breaking Bad'", "Personaje de 'El Marginal'", "Ninguna de las anteriores"],
        respuesta: "Personaje de 'El Marginal'"
    },
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        opciones: ["Monte Everest", "K2", "Kangchenjunga", "Lhotse"],
        respuesta: "Monte Everest"
    }
];



// Variable para almacenar el puntaje del jugador
let puntaje = 0;

// Variable para almacenar las respuestas del usuario
let respuestasUsuario = [];


// Función para solicitar nombre y apellido del jugador
function ingresarNombre() {
    let nombre, apellido;
    do {
        nombre = prompt("Por favor, ingresa tu nombre:");
        if (!nombre || !isNaN(nombre)) {
            alert("Error: Por favor, ingresa un nombre válido.");
        }
    } while (!nombre || !isNaN(nombre));

    do {
        apellido = prompt("Por favor, ingresa tu apellido:");
        if (!apellido || !isNaN(apellido)) {
            alert("Error: Por favor, ingresa un apellido válido.");
        }
    } while (!apellido || !isNaN(apellido));

    return nombre + " " + apellido;
}

// Función para presentar las preguntas y evaluar las respuestas
function jugar() {
    const nombreCompleto = ingresarNombre();
    if (!nombreCompleto) {
        alert("Nombre y apellido no ingresados. El juego se ha cancelado.");
        return;
    }

    alert(`¡Bienvenido a TriviaPuch, ${nombreCompleto}!`);



    // Iterar sobre cada pregunta en orden
    let continuarJuego = true;
    for (let i = 0; i < preguntas.length && continuarJuego; i++) {
        const pregunta = preguntas[i];

        const respuestaUsuario = prompt(`${pregunta.pregunta}\nOpciones:\n1. ${pregunta.opciones[0]}\n2. ${pregunta.opciones[1]}\n3. ${pregunta.opciones[2]}\n4. ${pregunta.opciones[3]}\nPara cancelar el juego, ingresa 0:`);

        // Verificar si el usuario ingresó una respuesta válida y evaluarla
        if (respuestaUsuario !== null) {
            if (respuestaUsuario === "0") {
                alert("Juego cancelado por el jugador.");
                continuarJuego = false;
            } else if (respuestaUsuario >= 1 && respuestaUsuario <= 4) {
                const respuestaElegida = pregunta.opciones[respuestaUsuario - 1];
                evaluarRespuesta(pregunta, respuestaElegida);
                respuestasUsuario.push({ pregunta: pregunta.pregunta, respuesta: respuestaElegida }); // Guardar la pregunta y respuesta del usuario
            } else {
                alert("Por favor, ingresa un número válido correspondiente a una opción o 0 para cancelar el juego.");
                i--; // Decrementar i para repetir la misma pregunta en el próximo ciclo
            }
        } else {
            alert("Gracias por jugar. ¡Hasta luego!");
            continuarJuego = false; // Cambiar el estado de la variable para salir del bucle
        }
    }

    // Mostrar el puntaje final al jugador
    alert(`¡Juego terminado, ${nombreCompleto}!\nPuntaje final: ${puntaje}/${preguntas.length}`);
    console.log("Nombre y Apellido:", nombreCompleto);
    console.log("Respuestas del usuario:", respuestasUsuario); // Mostrar las respuestas del usuario en la consola
}

// Función para evaluar la respuesta del usuario y actualizar el puntaje
function evaluarRespuesta(pregunta, respuestaUsuario) {
    if (respuestaUsuario === pregunta.respuesta) {
        alert("¡Respuesta correcta!");
        puntaje++; // Incrementar el puntaje si la respuesta es correcta
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta es: ${pregunta.respuesta}`);
    }
}

// Llamar a la función para iniciar el juego
jugar();