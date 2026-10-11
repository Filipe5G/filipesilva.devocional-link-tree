document.addEventListener("DOMContentLoaded", () => {
  // Atualiza dinamicamente o ano no rodapé
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Efeito suave de entrada nos cards
  const cards = document.querySelectorAll(".link-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 * index);
  });
});

// Funcionalidade do Botão de Compartilhar (Web Share API)
  const shareBtn = document.getElementById("shareBtn");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Filipe Silva | Devocional",
            text: "Acompanhe nossas lives devocionais e fortaleça a sua fé!",
            url: window.location.href,
          });
        } catch (err) {
          console.log("Compartilhamento cancelado.");
        }
      } else {
        // Fallback: Copiar Link se o navegador não suportar
        navigator.clipboard.writeText(window.location.href);
        alert("Link do perfil copiado para a área de transferência!");
      }
    });
  }