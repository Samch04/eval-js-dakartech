function Ajoutertache() {
    const tache = document.getElementById("ajouttache").value;
    const messageerreur = document.getElementById("messageerreur"); 

    if (!tache){
        messageerreur.textContent = "saisie la tache."; 
        return;
    }
    const li = document.createElement("li");
    li.textContent = tache

    const boutonTermine = document.createElement("button");
    boutonTermine.textContent = "Termine";
    boutonTermine.onclick = () => li.style.textDecoration = "line-through";

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.onclick = () => li.remove();

    li.append(boutonTermine,boutonSupprimer);
    document.getElementById("listetache").appendChild(li); }
