function sendMessage(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const whatsappNumber = '1234567890';
    const whatsappMessage = `Hola, mi nombre es ${name}. Mi correo es ${email}. ${message}`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    const whatsappButton = document.createElement('button');
    whatsappButton.textContent = 'Enviar a WhatsApp';
    whatsappButton.style.background = '#25D366';
    whatsappButton.style.color = 'white';
    whatsappButton.style.padding = '10px 20px';
    whatsappButton.style.border = 'none';
    whatsappButton.style.borderRadius = '5px';
    whatsappButton.style.cursor = 'pointer';
    
    whatsappButton.onclick = function() {
        window.open(whatsappURL, '_blank');
    };
    
    document.querySelector('.contact-form').appendChild(whatsappButton);
}

  