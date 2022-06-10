
const fecha = document.getElementById("fecha")
const nombre = document.getElementById("name")
const passport = document.getElementById("passport")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code')

console.log(code);
fetch("./data.json").then(response => {
    return response.json()
}).then(json => {
    const px = json[`${code}`]
    nombre.innerHTML = px["name"].toUpperCase()
    passport.innerHTML = px["passport"]
    fecha.innerHTML = px["fecha"]
})



