const carregarDiv = (objs, props = ['brand', 'name', 'ibu', 'malts']) => {
    const div = document.getElementById("objetosDiv")
    const itensHtml = objs.map((object) => `<div>${object[props[0]]} -- ${object[props[1]]} -- ${object[props[2]]} -- ${object[props[3]]}</div>`)
    div.innerHTML = `${itensHtml.join("\n")}`
}

async function carregarCervejas() {
    
    fetch("https://random-data-api.com/api/v2/beers?size=3")
    .then(res => res.json())
    .then(res => {
        carregarDiv(res)
    }).catch(err => {
        console.log(err.message);
        document.getElementById("objetosDiv").innerHTML = "<div>Fudeu...</div>"
    });
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas())
