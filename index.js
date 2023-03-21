let input = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let itemLength = document.getElementById("itemLength")
let itemVolume = document.getElementById("itemVolume")
let itemMass = document.getElementById("itemMass")

convertBtn.addEventListener("click", function() {
    let num = input.value
   itemLength.textContent = `${num} meters = ${(num/0.3048).toFixed(3)} feet | ${num} feet = ${(num*0.3048).toFixed(3)} meters`
   itemVolume.textContent = `${num} liters = ${(num*0.2641720524).toFixed(3)} gallons | ${num} gallons = ${(num/0.2641720524).toFixed(3)} liters`
   itemMass.textContent = `${num} kilos = ${(num/0.45359237).toFixed(3)} pounds | ${num} pounds = ${(num*0.45359237).toFixed(3)} kilos`
})