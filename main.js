/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function() {
    // Realiza una solicitud para cargar los estados
    fetch('cargarEstados')
    .then(response => response.json())
    .then(data => {
        const select = document.querySelector('#estadoSelect');
        select.innerHTML = '';  // Limpiar cualquier valor por defecto
        data.forEach(estado => {
            let option = document.createElement('option');
            option.text = estado.nombre;
            option.value = estado.id;
            select.add(option);
        });
    })
    .catch(error => {
        console.error('Error loading the states:', error);
        document.querySelector('#errorMessage').style.display = 'block';  // Mostrar mensaje de error
    });
});


