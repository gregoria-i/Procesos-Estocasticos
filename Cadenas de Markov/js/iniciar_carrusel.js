// Lista de imágenes para cada tarjeta
const images = [
    ["img/proceso_estocastico.jpg",
    "img/cadena_markov.jpg",
    "img/propiedad_markov.jpg",
    "img/probabilidad_llegar_primera_vez_n_pasos.jpg",
    "img/probabilidad_transicion.jpg",
    "img/probabilidad_transicion_n_pasos.jpg",
    "img/matriz_transicion.jpg",
    "img/matriz_estocastica_regular.jpg",
    "img/cadena_o_matriz_regular.jpg",
    "img/accesibilidad.jpg",
    "img/comunicacion.jpg",
    "img/periodo.jpg",
    "img/clase_comunicacion_y_periodo.jpg",
    "img/cadena_irreducible.jpg",
    "img/cadena_reversible.jpg",
    "img/cadena_irreducible_dist_reversible.jpg",
    "img/coleccion_cerrada.jpg",
    "img/existencia_y_unicidad.jpg",
    "img/particularidad_teorema_existencia_unicidad.jpg",
    "img/primer_momento_positivo_en_conjunto.jpg",
    "img/tiempo_llegada_por_primera_vez.jpg",
    "img/tiempo_medio_de_recurrencia.jpg",
    "img/distribucion_estacionaria.jpg",
    "img/distribucion_estacionaria_matriz.jpg",
    "img/estado_recurrente_nulo.jpg",
    "img/recurrente_positivo.jpg",
    "img/transitivo_o_recurrente_nulo_dist_estacionaria.jpg",
    "img/recurrentes_nulos_en_cadenas_finitas.jpg",
    "img/tipo_cadena_dos_estados.jpg",
    "img/tipo_cadena_ehrenfest.jpg",
    "img/tipo_cadena_racha_exitos.jpg",
    "img/convergencia_a_dist_estacionaria.jpg",
    "img/convergencia_para_cadena_markov.jpg"], // Imágenes de Cadenas de Markov
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
