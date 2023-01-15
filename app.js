let disponible = document.getElementById("disponible")
let totalIngresos = document.getElementById("totalIngresos")
let idFootIngresos = document.getElementById("idFootIngresos")
let idFootGastos = document.getElementById("idFootGastos")
let totalGastos = document.getElementById("totalGastos")
let idDivGastos = document.getElementById("idDivGastos")
let idDarkMode = document.getElementById("darkMode")
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
     idFootIngresos.innerText = `$${dinero}`


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
          idFootGastos.innerText = `$${gastosSumador}`
          if (dinero < 0) {
               disponible.style.color = `red`
          }
          idDivGastos.insertAdjacentHTML("beforeend", `<div class="gasto" id="idItemGasto${sumX}"  >´
<h3 class="gastoRealizado">${gasto}</h3>
<h3 class="precio" id="idMontos${sumX}" >$${monto}</h3>
<a href="#" class="iconoTacho" id="idEliminarDiv" onclick="eliminarDIV(${sumX})"><i class="fa-regular fa-trash-can iconoEliminar"></i></a>

</div>`)

          document.getElementById("idInputGasto").value = ``
          document.getElementById("idInputMonto").value = ``

          sumX = sumX + 1
     }
     else {
          alert("Ingrese dinero a su cuenta para empezar a calcular sus gastos!!")
     }

}