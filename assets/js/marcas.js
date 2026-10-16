
    (function () {
      var carrossel = document.getElementById("rb-marcas-carrossel");
      var anterior = document.getElementById("rb-marcas-anterior");
      var proximo = document.getElementById("rb-marcas-proximo");
      var intervalo = null;
      var pausado = false;

      function distancia() {
        var card = carrossel.querySelector(".rb-marcas__logo-card");
        var trilho = carrossel.querySelector(".rb-marcas__trilho");
        var estilo = window.getComputedStyle(trilho);
        return card.getBoundingClientRect().width + parseFloat(estilo.columnGap || estilo.gap || 0);
      }

      function ajustarLoop() {
        var metade = carrossel.scrollWidth / 2;
        if (carrossel.scrollLeft >= metade - 2) {
          carrossel.scrollLeft = carrossel.scrollLeft - metade;
        }
      }

      function mover(direcao) {
        var metade = carrossel.scrollWidth / 2;
        if (direcao < 0 && carrossel.scrollLeft <= 2) {
          carrossel.scrollLeft = metade;
        }
        carrossel.scrollBy({ left: distancia() * direcao, behavior: "smooth" });
        window.setTimeout(ajustarLoop, 650);
      }

      function iniciar() {
        window.clearInterval(intervalo);
        intervalo = window.setInterval(function () {
          if (!pausado && !document.hidden) {
            mover(1);
          }
        }, 2800);
      }

      anterior.addEventListener("click", function () { mover(-1); });
      proximo.addEventListener("click", function () { mover(1); });
      carrossel.addEventListener("scroll", ajustarLoop, { passive: true });
      carrossel.addEventListener("mouseenter", function () { pausado = true; });
      carrossel.addEventListener("mouseleave", function () { pausado = false; });
      carrossel.addEventListener("focusin", function () { pausado = true; });
      carrossel.addEventListener("focusout", function () { pausado = false; });

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        iniciar();
      }
    }());
  