/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.

BONUS 1:
Trasformare la stringa foto in una immagine effettiva.

BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto.
    
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/

//-----------------------------------------------------------------------

// prendo gli elementi dal DOM
const teamCards = document.getElementById("team-cards");

// creo array
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

let cards = "";
// creo ciclo per stampare le info
for (let i = 0; i < team.length; i++) {
  cards += `<div class="col mb-5">
  <div class="card">
    <img
      class="mb-3"
      src="img/${team[i].image}"
      alt="Card-Image"
    />
    <div>
      <h6>${team[i].name}</h6>
      <p>${team[i].role}</p>
    </div>
  </div>
</div>`;
}

teamCards.innerHTML = cards;
