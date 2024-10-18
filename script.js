const colorPicker = document.getElementById('selector');
const colorDisplay = document.getElementById('mostrar');
const saveColorButton = document.getElementById('guardar');
const colorList = document.getElementById('lista');

// Función para actualizar el color de fondo
colorPicker.addEventListener('input', (event) => {
    var selectedColor = event.target.value;
    var guardado = localStorage.getItem()
    var guardado2 = localStorage.setItem(guardado)
    console.log(guardado2)
    colorDisplay.style.backgroundColor = selectedColor;
    
});

// Función para guardar el color seleccionado
saveColorButton.addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    const listItem = document.createElement('li');
    listItem.style.background = selectedColor;
    listItem.textContent = selectedColor;
    colorList.appendChild(listItem);
    
});