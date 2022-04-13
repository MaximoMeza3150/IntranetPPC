// Construir la data del form para operadores
const registroFormOp = document.getElementById("form_equipos_op")

registroFormOp.addEventListener('submit', (e)=>{
    e.preventDefault()
    const actualizador = registroFormOp["Actualizador"].value
    const detalle = registroFormOp["detalle"].value
    const estado = registroFormOp["radio_status_equipos"].value;
    const fechaAct = document.getElementById("fechaAct").value;
    console.log(actualizador,detalle,estado,fechaAct)
})

function traerTag(value){
    window.location.href = "./form_equipos_Op.html"
    console.log(value)
}


let label = document.createElement("label");
label.classList.add("form-label")
let texto = document.createTextNode("esperando ...")

let tagName = document.getElementById("tag_name");
label.appendChild(texto);
tagName.appendChild(label)

