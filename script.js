const frutas = ["laranja", "limão", "uva"];

document.getElementById("fruta-1").innerHTML = frutas[0]
document.getElementById("fruta-2").innerHTML = frutas[1]
document.getElementById("fruta-3").innerHTML = frutas[2]

// document.getElementById("fruta-4").innerHTML = document.getElementById("addtext").value

// const adiciona = () => {
//     if(frutas.length === 3){
//     frutas.push(addtext.value)
//     document.getElementById("fruta-4").innerHTML = frutas[3]
//     addtext.value = ""
//     }else{
//         frutas.push(addtext.value)
//         let lista = document.getElementById("lista-de-frutas")
//         lista.innerHTML += `<li id="fruta-${frutas.length + 1}">${addtext.value}</li>`
//         addtext.value = ""
//     }
// }
const adiciona = () => {
    if(frutas.length === 3){
        frutas.push(addtext.value)
        document.getElementById("fruta-4").innerHTML = frutas[3]
        addtext.value = ""
    }else{
        frutas.push(addtext.value)
        document.getElementById("lista-de-frutas").innerHTML += `<li id="fruta-${frutas.length + 1}">${addtext.value}</li>`
        addtext.value = ""
    }
}