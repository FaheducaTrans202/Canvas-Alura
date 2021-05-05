function calculaImc(altura, peso) {
    if (altura == 0) {
        return 0
    }
    
    return peso/(altura * altura)
}

function chamarCalculo() {
    altura = document.getElementById("altura").value / 100
    peso = document.getElementById("peso").value
    document.getElementById("resultado").innerHTML = calculaImc(altura, peso)
}

document.getElementById('altura').addEventListener('change', chamarCalculo)
document.getElementById('peso').addEventListener('change', chamarCalculo)
