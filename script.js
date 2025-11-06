const btnKrychle = document.getElementById("btnKrychle");
const btnKvadr = document.getElementById("btnKvadr");
const krychleDiv = document.getElementById("krychleDiv");
const kvadrDiv = document.getElementById("kvadrDiv");

btnKrychle.onclick = function() {
    krychleDiv.style.display = "block";
    kvadrDiv.style.display = "none";
    btnKrychle.classList.add("active");
    btnKvadr.classList.remove("active");
};

btnKvadr.onclick = function() {
    krychleDiv.style.display = "none";
    kvadrDiv.style.display = "block";
    btnKvadr.classList.add("active");
    btnKrychle.classList.remove("active");
};

document.getElementById("vypocetKrychle").onclick = function() {
    let a = parseFloat(document.getElementById("a").value);

    if (isNaN(a) || a <= 0) {
        alert("Zadej platnou délku hrany!");
        return;
    }

    let S = 6 * a * a;
    let V = a * a * a;

    document.getElementById("povrch").innerText = "Povrch: " + S.toFixed(2) + " m²";
    document.getElementById("objem").innerText = "Objem: " + V.toFixed(2) + " m³";
};

document.getElementById("vycistiKrychle").onclick = function() {
    document.getElementById("a").value = "";
    document.getElementById("povrch").innerText = "Povrch: —";
    document.getElementById("objem").innerText = "Objem: —";
};

document.getElementById("vypocetKvadr").onclick = function() {
    let a = parseFloat(document.getElementById("aKvadr").value);
    let b = parseFloat(document.getElementById("bKvadr").value);
    let c = parseFloat(document.getElementById("cKvadr").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert("Zadej platné rozměry!");
        return;
    }

    let S = 2 * (a*b + b*c + a*c);
    let V = a * b * c;

    document.getElementById("povrch").innerText = "Povrch: " + S.toFixed(2) + " m²";
    document.getElementById("objem").innerText = "Objem: " + V.toFixed(2) + " m³";
};

document.getElementById("vycistiKvadr").onclick = function() {
    document.getElementById("aKvadr").value = "";
    document.getElementById("bKvadr").value = "";
    document.getElementById("cKvadr").value = "";
    document.getElementById("povrch").innerText = "Povrch: —";
    document.getElementById("objem").innerText = "Objem: —";
};
