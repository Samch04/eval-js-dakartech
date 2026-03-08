function Ajoutertache() {
    const tache = document.getElementById("ajouttache").value; 
    const messageErreur = document.getElementById("messageerreur"); 

    if (!tache){
        messageerreur.textContent = "Saisie la tache "; 
        return; 
    }

    document.getElementById("listetache").innerHTML += `<li>${tache}</li>`; 

    
    document.getElementById("ajouttache").value = ""; 
    messageerreur.textContent = ""; 
}
