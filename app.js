
let disponible = document.getElementById("disponible")
let totalIngresos = document.getElementById("totalIngresos")
let idIngresos = document.getElementById("idIngresos")
let idGastos = document.getElementById("idGastos")
let totalGastos = document.getElementById("totalGastos")
let idDivGastos = document.getElementById("idDivGastos")
let darkMode = document.getElementById("darkMode")
let body = document.getElementById("body")
let billeteraStyle = document.getElementById("billeteraStyle")
let gastoMontoStyle = document.getElementById("gastoMontoStyle")
let headerStyle = document.getElementById("headerStyle")
let idFootResponsive = document.getElementById("idFootResponsive")
let idStyleIconoDinero = document.getElementById("idStyleIconoDinero")
let idStyleIconoAgregar = document.getElementById("idStyleIconoAgregar")




let dinero = 0
let monto = 0
let gasto = ``
let gastosSumador = 0
let sumX = 1
let restarString = ``
let restar = 0
let darkSum = 0




function haceClick() {
     let idInputDinero = document.getElementById("idInputDinero").value;
     dinero = parseFloat(idInputDinero)

     disponible.innerText = `$${dinero}`
     totalIngresos.innerText = `$${dinero}`
     idIngresos.innerText = `$${dinero}`


}



function agregarDinero() {
     if (dinero > 0 || sumX > 1) {
          let idInputGasto = document.getElementById("idInputGasto").value;
          let idInputMonto = document.getElementById("idInputMonto").value;
          gasto = idInputGasto
          monto = parseFloat(idInputMonto)
          dinero = dinero - monto
          gastosSumador = gastosSumador + monto
          disponible.innerText = `$${dinero}`
          totalGastos.innerText = `$${gastosSumador}`
          idGastos.innerText = `$${gastosSumador}`
          if (dinero < 0) {
               disponible.style.color = `red`
          }
          idDivGastos.insertAdjacentHTML("beforeend", `<div class="gasto" id="idItemGasto${sumX}"  >
<h3 class="gastoRealizado">${gasto}</h3>
<h3 class="precio" id="idMontos${sumX}" >$${monto}</h3>
<a href="#" class="iconoTacho" id="idEliminarDiv" onclick="eliminarDIV(${sumX})"><i class="bi bi-trash iconoEliminar"></i></a>

</div>`)



          document.getElementById("idInputGasto").value = ``
          document.getElementById("idInputMonto").value = ``

          sumX = sumX + 1
     }
     else {
          alert("Ingrese dinero a su cuenta para empezar a calcular sus gastos!!")
     }

}



function eliminarDIV(a) {


     let idMontos = document.getElementById(`idMontos${a}`).innerHTML.slice(1)
     restar = parseFloat(idMontos)
     gastosSumador = gastosSumador - restar
     dinero = dinero + restar
     disponible.innerText = `$${dinero}`
     totalGastos.innerText = `$${gastosSumador}`
     idFootGastos.innerText = `$${gastosSumador}`

     if (dinero >= 0) {
          disponible.style.color = `green`
     }






     let elimino = document.getElementById(`idItemGasto${a}`)
     elimino.remove();





}



function onOffMode() {
     if (darkSum == 0) {

          darkMode.innerHTML = `<i class=""bi bi-toggle-off""></i>`

          body.style.backgroundColor = "#bdc3c7"
          billeteraStyle.style.backgroundColor = "#95a5a6"
          gastoMontoStyle.style.backgroundColor = "#95a5a6"
          headerStyle.style.backgroundColor = "#7f8c8d"
          idInputDinero.style.backgroundColor = "#bdc3c7"
          idInputGasto.style.backgroundColor = "#bdc3c7"
          idInputMonto.style.backgroundColor = "#bdc3c7"
          idFootResponsive.style.backgroundColor = "#7f8c8d"
          idInputDinero.style.color = "black"
          idInputGasto.style.color = "black"
          idInputMonto.style.color = "black"
          document.documentElement.style.setProperty(`--colorIconos`, `#b55b52`)
          document.documentElement.style.setProperty(`--colorPlaceholder`, `#b55b52`)

          document.documentElement.style.setProperty(`--contColorResponsive`, `#c8825b`)
          document.documentElement.style.setProperty(`--lineaDiv`, `#b55b52`)
          document.documentElement.style.setProperty(`--txtColor`, `#b55b52`)






          darkSum = darkSum + 1

     }
     else if (darkSum == 1) {

          darkMode.innerHTML = `<i class=""bi bi-toggle-off""></i>`
          body.style.backgroundColor = " #0D0E0F"
          billeteraStyle.style.backgroundColor = "rgba(36, 139, 156, 0.9)"
          gastoMontoStyle.style.backgroundColor = "#131415"
          headerStyle.style.backgroundColor = "#C5FC6B"
          idInputDinero.style.backgroundColor = "#1B1C1E"
          idInputGasto.style.backgroundColor = "#1B1C1E"
          idInputMonto.style.backgroundColor = "#1B1C1E"
          idFootResponsive.style.backgroundColor = "#C5FC6B"
          idInputDinero.style.color = "white"
          idInputGasto.style.color = "white"
          idInputMonto.style.color = "white"

          document.documentElement.style.setProperty(`--colorPlaceholder`, `#C5FC6B`)
          document.documentElement.style.setProperty(`--contColorResponsive`, `#1B1C1E`)
          document.documentElement.style.setProperty(`--colorIconos`, `#C5FC6B`)
          document.documentElement.style.setProperty(`--lineaDiv`, `silver`)
          document.documentElement.style.setProperty(`--txtColor`, `white`)

          darkSum = darkSum - 1
     }
}