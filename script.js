/* EJERCICIO 1 */

document.getElementById("btnPalindromo").addEventListener(
    "click",
    function () {

        let palabra = document
            .getElementById("palindromo")
            .value
            .toLowerCase()
            .replace(/\s/g, "");

        let invertida = palabra
            .split("")
            .reverse()
            .join("");

        let resultado =
            document.getElementById(
                "resultadoPalindromo"
            );

        if (palabra === invertida) {

            resultado.innerHTML =
                "✨ ¡Es un palíndromo mágico!";
        }
        else {

            resultado.innerHTML =
                "❌ No es un palíndromo.";
        }
    }
);

/* EJERCICIO 2 */

document.getElementById("btnMayor").addEventListener(
    "click",
    function () {

        let numero1 = Number(
            document.getElementById(
                "numero1"
            ).value
        );

        let numero2 = Number(
            document.getElementById(
                "numero2"
            ).value
        );

        let resultado =
            document.getElementById(
                "resultadoMayor"
            );

        if (numero1 > numero2) {

            resultado.innerHTML =
                "🏆 El número mayor es: " +
                numero1;
        }
        else if (numero2 > numero1) {

            resultado.innerHTML =
                "🏆 El número mayor es: " +
                numero2;
        }
        else {

            resultado.innerHTML =
                "🤝 Ambos números son iguales.";
        }
    }
);

/* EJERCICIO 3 */

document.getElementById("btnVocales").addEventListener(
    "click",
    function () {

        let frase = document
            .getElementById("fraseVocales")
            .value
            .toLowerCase();

        let vocalesEncontradas = [];

        if (frase.includes("a")) {
            vocalesEncontradas.push("A");
        }

        if (frase.includes("e")) {
            vocalesEncontradas.push("E");
        }

        if (frase.includes("i")) {
            vocalesEncontradas.push("I");
        }

        if (frase.includes("o")) {
            vocalesEncontradas.push("O");
        }

        if (frase.includes("u")) {
            vocalesEncontradas.push("U");
        }

        document.getElementById(
            "resultadoVocales"
        ).innerHTML =
            "Vocales encontradas: " +
            vocalesEncontradas.join(", ");
    }
);

/* EJERCICIO 4 */

document.getElementById("btnContador").addEventListener(
    "click",
    function () {

        let frase = document
            .getElementById(
                "fraseContador"
            )
            .value
            .toLowerCase();

        let a = 0;
        let e = 0;
        let i = 0;
        let o = 0;
        let u = 0;

        for (let letra of frase) {

            switch (letra) {

                case "a":
                    a++;
                    break;

                case "e":
                    e++;
                    break;

                case "i":
                    i++;
                    break;

                case "o":
                    o++;
                    break;

                case "u":
                    u++;
                    break;
            }
        }

        document.getElementById(
            "resultadoContador"
        ).innerHTML =

            "A: " + a +
            " | E: " + e +
            " | I: " + i +
            " | O: " + o +
            " | U: " + u;
    }
);

/* URL por defecto */

window.addEventListener(
    "load",
    function () {

        document.getElementById(
            "url"
        ).value = window.location.href;
    }
);


/* Mostrar contenidos */

document.getElementById(
    "btnMostrar"
).addEventListener(
    "click",
    realizarPeticion
);


function realizarPeticion() {

    let url =
        document.getElementById(
            "url"
        ).value;

    let xhr = new XMLHttpRequest();

    let estados =
        document.getElementById(
            "estados"
        );

    let contenidos =
        document.getElementById(
            "contenidos"
        );

    let cabeceras =
        document.getElementById(
            "cabeceras"
        );

    let codigo =
        document.getElementById(
            "codigo"
        );


    xhr.onreadystatechange =
        function () {

            let estadoTexto = "";

switch (xhr.readyState) {

    case 0:
        estadoTexto =
            "Solicitud no iniciada";
        break;

    case 1:
        estadoTexto =
            "Conexión establecida";
        break;

    case 2:
        estadoTexto =
            "Solicitud recibida";
        break;

    case 3:
        estadoTexto =
            "Procesando respuesta";
        break;

    case 4:
        estadoTexto =
            "Petición completada";
        break;
}

estados.innerHTML = estadoTexto;

            if (xhr.readyState === 4) {

                contenidos.textContent =
                    xhr.responseText;

                cabeceras.textContent =
                    xhr.getAllResponseHeaders();

                codigo.textContent =
                    xhr.status +
                    " - " +
                    xhr.statusText;
            }
        };


    xhr.open(
        "GET",
        url,
        true
    );

    xhr.send();
}

