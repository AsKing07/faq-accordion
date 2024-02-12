// Sélection des éléments une seule fois
const Acc = document.querySelectorAll(".q h2");
const AccIcon = document.querySelectorAll(".iconAcc");
const AccAns = document.querySelectorAll(".a");

// Fonction pour ouvrir un élément d'accordéon
const OpenAcc = (i) => {
    // Fermer tous les éléments d'accordéon sauf celui cliqué
    AccAns.forEach((item, index) => {
        if (index !== i) {
            item.classList.remove('display');
            AccIcon[index].classList.remove('collapsing-ico'); 
        }
    });

    // Ouvrir ou fermer l'élément d'accordéon cliqué
    AccAns[i].classList.toggle("display");
    AccIcon[i].classList.toggle("collapsing-ico");
};

// Ajouter des écouteurs d'événements aux éléments d'accordéon et à leurs icônes correspondantes
Acc.forEach((item, index) => {
    item.addEventListener('click', () => OpenAcc(index));
});

AccIcon.forEach((item, index) => {
    item.addEventListener("click", () => OpenAcc(index));
});
