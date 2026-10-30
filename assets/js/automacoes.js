
    (function () {
      var telefone = "5514991307050";
      var formulario = document.getElementById("ra-auto-formulario");
      var status = document.getElementById("ra-auto-status");
      var horarioHoje = document.getElementById("ra-auto-horario-hoje");
      var linhas = document.querySelectorAll("#ra-auto-semana [data-dia]");

      function horarioSaoPaulo() {
        var partes = new Intl.DateTimeFormat("pt-BR", {
          timeZone: "America/Sao_Paulo",
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }).formatToParts(new Date());

        var valores = {};
        partes.forEach(function (parte) {
          valores[parte.type] = parte.value;
        });

        var dias = {
          "dom.": 0,
          "seg.": 1,
          "ter.": 2,
          "qua.": 3,
          "qui.": 4,
          "sex.": 5,
          "sáb.": 6
        };

        return {
          dia: dias[valores.weekday],
          minutos: Number(valores.hour) * 60 + Number(valores.minute)
        };
      }

      function atualizarHorario() {
        var agora = horarioSaoPaulo();
        var diaUtil = agora.dia >= 1 && agora.dia <= 5;
        var aberto = diaUtil && agora.minutos >= 480 && agora.minutos < 1020;

        status.textContent = aberto ? "Aberto agora" : "Fechado agora";
        horarioHoje.textContent = diaUtil ? "08:00 – 17:00" : "Fechado";

        linhas.forEach(function (linha) {
          linha.classList.toggle("ra-auto__dia-atual", Number(linha.dataset.dia) === agora.dia);
        });
      }

      var campoNome = document.getElementById("ra-auto-nome");
      var campoEmail = document.getElementById("ra-auto-email");
      var campoMensagem = document.getElementById("ra-auto-mensagem");
      var botao = formulario.querySelector("button[type=submit]");

      [campoNome, campoMensagem].forEach(function (campo) {
        campo.addEventListener("input", function () { campo.setCustomValidity(""); });
      });

      formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var nome = campoNome.value.trim();
        var email = campoEmail.value.trim();
        var mensagem = campoMensagem.value.trim();

        campoNome.setCustomValidity(nome ? "" : "Informe seu nome.");
        campoMensagem.setCustomValidity(mensagem ? "" : "Escreva sua mensagem.");
        if (!formulario.reportValidity()) return;

        var partes = [
          "Olá! Entrei em contato pelo site da Robusta Automações.",
          "",
          "Nome: " + nome
        ];
        if (email) partes.push("E-mail: " + email);
        partes.push("Mensagem: " + mensagem);

        var linkWhatsApp = document.createElement("a");
        linkWhatsApp.href = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(partes.join("\n"));
        linkWhatsApp.target = "_blank";
        linkWhatsApp.rel = "noopener noreferrer";
        linkWhatsApp.setAttribute("aria-hidden", "true");
        document.body.appendChild(linkWhatsApp);
        linkWhatsApp.click();
        linkWhatsApp.remove();
      });

      // Habilita a continuação somente após registrar o encaminhamento acima.
      // Sem o script, o botão desativado evita o envio nativo dos campos pela URL.
      botao.disabled = false;

      atualizarHorario();
      window.setInterval(atualizarHorario, 60000);
    }());
  