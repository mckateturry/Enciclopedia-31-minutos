const personajes = [
  {
    titulo: "Tulio Triviño",
    descripcion: "Tulio es el rostro principal del programa. Es millonario y proviene de una familia con gran participación en la historia de Titirilquén, su pueblo natal, del que no le gusta hablar mucho.",
    imagen: "assets/img/tulio_trivino.png",
    likes: 0
  },
  {
    titulo: "Juan Carlos Bodoque",
    descripcion: "Bodoque es malhumorado, taciturno, bohemio, ingenioso, apostador, mujeriego y poeta ocasional: Juan Carlos Bodoque es un periodista a la vieja usanza.",
    imagen: "assets/img/Juan_Carlos_Bodoque.png",
    likes: 0
  },
  {
    titulo: "Juanín Juan Harry",
    descripcion: "Juanín Juan Harry es el productor de 31 minutos, trabajólico, tierno, dulce y leal. Conoce a sus compañeros Tulio y Bodoque desde niño ya que ellos lo encontraron abandonado en el campo cuando eran Scouts.",
    imagen: "assets/img/juanin_juan_harry.png",
    likes: 0
  },
  {
    titulo: "Patana",
    descripcion: "Patana es una niña astuta, inteligente, sensata, cariñosa, sensible y preocupada por los demás. Es el personaje femenino más importante del programa y la más joven.",
    imagen: "assets/img/Patana.png",
    likes: 0
  },
  {
    titulo: "Mario Hugo",
    descripcion: "Mario Hugo es latero, afectado en el hablar (con un tono de voz impostado para parecer más elegante de lo que es), rastrero, distraído, revoltoso y romántico. ",
    imagen: "assets/img/Mario_Hugo.png",
    likes: 0
  },
  {
    titulo: "Policarpo",
    descripcion: "Policarpo Avendaño es el excéntrico y solitario comentarista de espectáculos. Está a cargo de una de las secciones más importantes: el Ranking Top Top Top, donde cada semana se elige el primer lugar entre las canciones del programa. ",
    imagen: "assets/img/Policarpo.png",
    likes: 0
  },
  {
    titulo: "Calcentín con Rombos Man",
    descripcion: "Calcetín con Rombos Man es un popular superhéroe que siempre defiende los derechos del niño. Solo es vencido en las encuestas por “El Soquete Musculoso”, que también es el favorito de Rombos Man y fue uno de sus profesores cuando estudió.",
    imagen: "assets/img/Calcetin.png",
    likes: 0
  },
  {
    titulo: "Guaripolo",
    descripcion: "Policarpo Avendaño es el excéntrico y solitario comentarista de espectáculos. Está a cargo de una de las secciones más importantes: el Ranking Top Top Top, donde cada semana se elige el primer lugar entre las canciones del programa. ",
    imagen: "assets/img/Guaripolo.png",
    likes: 0
  },
  {
    titulo: "Huachimingoo",
    descripcion: "Milenario animal. Pariente lejano del conejo y la alcachofa. Estuvo perdido durante miles de años, hasta que fue encontrado en una cabaña de los Himalayas y fue entrevistado por Mario Hugo.",
    imagen: "assets/img/Huachimingo.png",
    likes: 0
  },
  {
    titulo: "Tramoyas",
    descripcion: "Los tramoyas son los múltiples y enigmáticos funcionarios a cargo de Juanín Juan Harry. La mayor parte del tiempo solo los vemos al fondo del estudio haciendo muchas cosas, aunque su función efectiva es solo aparentar que trabajan en algo, ya que en realidad todo el trabajo detrás de escenas lo hace Juanín. ",
    imagen: "assets/img/Tramoyas.png",
    likes: 0
  },

];

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");


function renderCards(data) {
  cardContainer.innerHTML = "";
  data.forEach(personaje => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <img src="${personaje.imagen}" alt="${personaje.titulo}" />
  <h3>${personaje.titulo}</h3>
  <p>${personaje.descripcion.slice(0, 100)}...</p>
  <button class="likeBtn">
    <span class="icono-corazon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      </svg>
    </span>
    Me gusta (<span class="likeCount">${personaje.likes}</span>)
  </button>
`;


    // Mostrar modal al hacer clic en la tarjeta
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("likeBtn")) return;
      modalTitle.textContent = personaje.titulo;
      modalDescription.textContent = personaje.descripcion;
      modal.classList.remove("hidden");
    });

    // Botón de "Me gusta"
    const likeBtn = card.querySelector(".likeBtn");
    const likeCount = card.querySelector(".likeCount");

    likeBtn.addEventListener("click", () => {
      personaje.likes++;
      likeCount.textContent = personaje.likes;
      alert(`Te gusta "${personaje.titulo}"`);
    });

    cardContainer.appendChild(card);
  });
}



searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = personajes.filter(p => p.titulo.toLowerCase().includes(query));
  renderCards(filtered);
});


closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Render inicial
renderCards(personajes);

