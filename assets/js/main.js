
    (function () {
      const status = document.getElementById("robusta-status-horario");
      const linhas = document.querySelectorAll(".robusta-horarios__tabela tr[data-dia]");

      if (!status) return;

      function horarioSaoPaulo() {
        const partes = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Sao_Paulo",
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23"
        }).formatToParts(new Date());

        const valores = {};
        partes.forEach(function (parte) {
          valores[parte.type] = parte.value;
        });

        const dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
        return {
          dia: dias[valores.weekday],
          minutos: Number(valores.hour) * 60 + Number(valores.minute)
        };
      }

      function atualizarHorario() {
        const agora = horarioSaoPaulo();
        const diaUtil = agora.dia >= 1 && agora.dia <= 5;
        const aberto = diaUtil && agora.minutos >= 480 && agora.minutos < 1020;

        linhas.forEach(function (linha) {
          if (Number(linha.dataset.dia) === agora.dia) {
            linha.setAttribute("aria-current", "date");
          } else {
            linha.removeAttribute("aria-current");
          }
        });

        if (aberto) {
          status.textContent = "Aberto hoje 08:00 – 17:00";
          return;
        }

        if (diaUtil && agora.minutos < 480) {
          status.textContent = "Fechado agora · abre hoje às 08:00";
        } else if (agora.dia >= 1 && agora.dia <= 4) {
          status.textContent = "Fechado agora · abre amanhã às 08:00";
        } else {
          status.textContent = "Fechado agora · abre segunda às 08:00";
        }
      }

      atualizarHorario();
      window.setInterval(atualizarHorario, 60000);
    }());
  
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
