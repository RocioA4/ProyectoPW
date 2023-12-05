

function mostrarContenido(id) {
    var contenido = document.getElementById(id);
    if (contenido.style.display === 'none') {
      contenido.style.display = 'block';
    } else {
      contenido.style.display = 'none';
    }
  }


  document.addEventListener("DOMContentLoaded", () => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    });


    function submitDonation() {

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var amount = document.getElementById("amount").value;
      
        
        if (name && email && amount) {
      
          document.getElementById("submit").disabled = true;
      
          setTimeout(function() {
         
            document.getElementById("message").innerHTML = "Gracias, " + name + ", por tu generosa donación de Lps." + amount + ". Te hemos enviado un correo de confirmación a " + email + ".";
            document.getElementById("message").style.display = "block";
      
         
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("amount").value = "";
      
            
            document.getElementById("submit").disabled = false;
          }, 3000); 
        } else {
          
          alert("Por favor, completa todos los campos del formulario.");
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        var header = document.getElementById("header");
        var imagenes = ["Tituloindex.jpg", "tituloindex2.jpg"];
        var index = 0;
    
        setInterval(function () {
            index = (index + 1) % imagenes.length;
            header.style.backgroundImage = "url('" + imagenes[index] + "')";
        }, 3000); 
    });