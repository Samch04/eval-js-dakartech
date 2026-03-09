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

    li.append(boutonTermine);
    document.getElementById("listetache").appendChild(li); }
