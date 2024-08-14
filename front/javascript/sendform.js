document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value || ''; // Hacer opcional
    const country = document.getElementById('country-select').value;

    if (name && email && country) { // Verifica que todos los campos requeridos estén completos
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, country, whatsapp })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            alert('Thank you for subscribing!');
            // Limpiar los campos del formulario después de un envío exitoso
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('whatsapp').value = '';
            document.getElementById('country-select').selectedIndex = 0; // Reiniciar la selección del país
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with the subscription. Please try again.');
        });
    } else {
        alert('Please fill in all required fields.'); // Alerta si falta algún campo requerido
    }
});
