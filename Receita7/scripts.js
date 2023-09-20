const carregarDiv = (objs, props = ['brand', 'name', 'ibu', 'malts']) => {
    const div = document.getElementById("objetosDiv")
    const itensHtml = objs.map((object) => `<div>${object[props[0]]} -- ${object[props[1]]} -- ${object[props[2]]} -- ${object[props[3]]}</div>`)
    div.innerHTML = `${itensHtml.join("\n")}`
}

async function carregarCervejas() {
    try{
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
        cervejas = await res.json()
        carregarDiv(cervejas)
    }catch(err){
        console.log(err.message);
        document.getElementById("objetosDiv").innerHTML = "<div>Fudeu...</div>"
    }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas())
