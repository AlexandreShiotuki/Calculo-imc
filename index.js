function calculateImc() {
   let weight = document.getElementById('weight').value 
   let height = (document.getElementById('height').value) / 100

   let imc = weight / (height * height)

   if(imc < 18.5) {
    var classification = "magreza"
   } else if(imc < 24.9) {
    var classification = "normal"
   } else if(imc < 29.9) {
    var classification = "sobrepeso"
   } else if(imc < 39.9) {
    var classification = "obesidade"
   } else if(imc > 40) {
    var classification = "obesidade grave"
   }

   let divIMC = `<p>Seu imc é: ${imc}</p>
   Classificação: ${classification}`

   let div = document.getElementById('imc')
   div.innerHTML = divIMC
   div.classList.add('green')
   
   document.getElementById('weight').value = ''
   document.getElementById('height').value = ''
  }
 
