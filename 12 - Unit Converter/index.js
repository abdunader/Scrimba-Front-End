/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  const inputValue = Number(inputEl.value);
  const metersValue = inputValue * 3.281;
  const feetValue = inputValue / 3.281;
  const litersValue = inputValue * 0.264;
  const gallonsValue = inputValue / 0.264;
  const kilosValue = inputValue * 2.204;
  const poundsValue = inputValue / 2.204;

  lengthEl.textContent = `
  ${inputEl.value} meters = ${metersValue.toFixed(3)} feet | ${
    inputEl.value
  } feet = ${feetValue.toFixed(3)} meters
  `;
  volumeEl.textContent = `
  ${inputEl.value} liters = ${litersValue.toFixed(3)} gallons | ${
    inputEl.value
  } gallons = ${gallonsValue.toFixed(3)} liters
  `;
  massEl.textContent = `
  ${inputEl.value} kilos = ${kilosValue.toFixed(3)} pounds | ${
    inputEl.value
  } pounds = ${poundsValue.toFixed(3)} kilos
  `;
});
