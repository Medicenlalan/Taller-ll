// Agregar botones a cada card
document.querySelectorAll('.card').forEach(card => {
    // Crea botones con me intersa y no me interesa
    const btnInteresa = document.createElement('button');
    btnInteresa.textContent = 'Me interesa';
    btnInteresa.classList.add('btn-interesa');
    
    const btnNoInteresa = document.createElement('button');
    btnNoInteresa.textContent = 'No me interesa'; 
    btnNoInteresa.classList.add('btn-no-interesa');

    // Agregar eventos a los botones
    btnInteresa.addEventListener('click', () => {
        card.classList.add('interesa');
        card.classList.remove('no-interesa');
        alert('¡Te interesa!');
    });

    btnNoInteresa.addEventListener('click', () => {
        card.classList.add('no-interesa');
        card.classList.remove('interesa');
    });

    // Crea contenedor para botones
    const botonesContainer = document.createElement('div');
    botonesContainer.classList.add('botones-container');
    
    // Agrega los botones al contenedor
    botonesContainer.appendChild(btnInteresa);
    botonesContainer.appendChild(btnNoInteresa);
    
    //Agrega los botones a las cards
    card.appendChild(botonesContainer);
});
const cuerpo = document.body;
const modoGuardado = localStorage.getItem("modo");

if (modoGuardado === "oscuro") {
  cuerpo.classList.add("oscuro");
}

function toggleModo() {
  cuerpo.classList.toggle("oscuro");

  // Guardar la preferencia
  if (cuerpo.classList.contains("oscuro")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

const texto = document.getElementById("hoverText");

texto.addEventListener("mouseover", () => {
  texto.textContent = "Dune";
});

texto.addEventListener("mouseout", () => {
  texto.textContent = "Pasa el mouse por aquí";
});
