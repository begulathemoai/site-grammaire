// Pour créer un ~embed :
// 1. Importer ce script
// 2. Créer une div
// -------------------------------------
// <div class="embed" data-meta="300px|300px|images/arrow/arrow_icon.png|Automatically generated embed.|https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement|Cette flèche redirige vers une page lambda des docs Mozilla !"></div>
// ajouter la classe "embed" et dans un attribut data-meta mettre :
// "largeur de l'image|hauteur de l'image|chemin vers l'image|texte alt de l'image|lien de l'embed|texte de l'embed"
// "[unité css (px)]  |[unité css (px)]  |[lien/chemin]      |[string]            |[lien]         |[string]        "
// -------------------------------------
// 3. Profit
// Note : Oui c'est très overkill

let embeds = Array.from(document.getElementsByClassName("embed"));

for (let embed of embeds) {
    md = embed.getAttribute("data-meta");
    md = md.split("|")
    console.log(md)
    
    embed.innerHTML = "";
    embed.style.display = "flex";
    embed.style.margin = "5px";
    embed.style.height = "fit-content";
    anchor = document.createElement("a");
    img = document.createElement("img");
    h5 = document.createElement("h5");
    img.style.width = md[0];
    img.style.height = md[1];
    img.src = md[2];
    img.alt = md[3];
    anchor.href = md[4];
    anchor.target = "_blank";
    anchor.style.display = "grid";
    anchor.style.gridTemplateColumns = "repeat(2,50%)";
    img.style.gridColumnMin = "0";
    img.style.gridColumnMax = "0";
    img.style.scale = 0.8;
    img.style.background = "transparent";
    h5.style.zIndex = 1;
    h5.style.gridColumnMin = "1";
    h5.style.gridColumnMax = "1";
    h5.style.margin = "10px";
    h5.innerHTML = md[5];
    h5.style.alignSelf = "center";
    h5.style.justifySelf = "center";
    h5.style.textAlign = "center";
    h5.style.background = "transparent";

    anchor.appendChild(img);
    embed.appendChild(anchor);
    anchor.appendChild(h5);
    embed.addEventListener("mouseover",startHover);
    embed.addEventListener("mouseout",endHover);
    embed.style.transition = "all 0.2s";
    embed.getElementsByTagName("img")[0].style.transition = "all 0.2s";
}

function startHover() {
    this.style.boxShadow = "0px 0px 0px 5px #000000";
    this.getElementsByTagName("img")[0].style.scale = 1.0;
    console.log("Start Hover")
}

function endHover() {
    this.style.boxShadow = "none";
    this.getElementsByTagName("img")[0].style.scale = 0.8;
    console.log("End Hover");
}
