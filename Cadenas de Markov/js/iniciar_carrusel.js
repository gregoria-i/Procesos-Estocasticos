// Lista de imágenes para cada tarjeta
const images = [
    ["Cadenas de Markov/img/proceso_estocastico.jpg",
    "Cadenas de Markov/img/cadena_markov.jpg",
    "Cadenas de Markov/img/propiedad_markov.jpg",
    "Cadenas de Markov/img/probabilidad_llegar_primera_vez_n_pasos.jpg",
    "Cadenas de Markov/img/probabilidad_transicion.jpg",
    "Cadenas de Markov/img/probabilidad_transicion_n_pasos.jpg",
    "Cadenas de Markov/img/matriz_transicion.jpg",
    "Cadenas de Markov/img/matriz_estocastica_regular.jpg",
    "Cadenas de Markov/img/cadena_o_matriz_regular.jpg",
    "Cadenas de Markov/img/accesibilidad.jpg",
    "Cadenas de Markov/img/comunicacion.jpg",
    "Cadenas de Markov/img/periodo.jpg",
    "Cadenas de Markov/img/clase_comunicacion_y_periodo.jpg",
    "Cadenas de Markov/img/cadena_irreducible.jpg",
    "Cadenas de Markov/img/cadena_reversible.jpg",
    "Cadenas de Markov/img/cadena_irreducible_dist_reversible.jpg",
    "Cadenas de Markov/img/coleccion_cerrada.jpg",
    "Cadenas de Markov/img/existencia_y_unicidad.jpg",
    "Cadenas de Markov/img/particularidad_teorema_existencia_unicidad.jpg",
    "Cadenas de Markov/img/primer_momento_positivo_en_conjunto.jpg",
    "Cadenas de Markov/img/tiempo_llegada_por_primera_vez.jpg",
    "Cadenas de Markov/img/tiempo_medio_de_recurrencia.jpg",
    "Cadenas de Markov/img/distribucion_estacionaria.jpg",
    "Cadenas de Markov/img/distribucion_estacionaria_matriz.jpg",
    "Cadenas de Markov/img/estado_recurrente_nulo.jpg",
    "Cadenas de Markov/img/recurrente_positivo.jpg",
    "Cadenas de Markov/img/transitivo_o_recurrente_nulo_dist_estacionaria.jpg",
    "Cadenas de Markov/img/recurrentes_nulos_en_cadenas_finitas.jpg",
    "Cadenas de Markov/img/tipo_cadena_dos_estados.jpg",
    "Cadenas de Markov/img/tipo_cadena_ehrenfest.jpg",
    "Cadenas de Markov/img/tipo_cadena_racha_exitos.jpg",
    "Cadenas de Markov/img/convergencia_a_dist_estacionaria.jpg",
    "Cadenas de Markov/img/convergencia_para_cadena_markov.jpg"], // Imágenes de Cadenas de Markov
    [], // Imágenes de Proceso Poisson
    []  // Imágenes de Cadenas de Markov continuas
];

function setCarousel(cardIndex) {
    const carouselItems = document.getElementById("carouselItems");
    const carousel = document.getElementById("carouselExampleIndicators");

    // Limpiar el carrusel anterior
    carouselItems.innerHTML = "";

    // Insertar nuevas imágenes
    images[cardIndex].forEach((image, index) => {
        const isActive = index === 0 ? "active" : "";  // La primera imagen es la activa
        carouselItems.innerHTML += `
            <div class="carousel-item ${isActive}">
                <img src="${image}" class="d-block w-100" alt="Imagen ${index + 1}">
            </div>
        `;
    });

    // Mostrar el carrusel
    carousel.classList.remove("d-none");
}
