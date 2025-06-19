// AQUÍ VA EL CARRUSEL DE LOS ATLETAS


function showCard(cardNumber) {
  console.log("🔄 Mostrando card:", cardNumber);
  document.querySelectorAll('.ath-carrousel').forEach(card => {
    card.classList.remove('active');
  });
  const selectedCard = document.getElementById(`card-${cardNumber}`);
  if (selectedCard) {
    selectedCard.classList.add('active');
  }
}

window.onload = function () {
  document.querySelectorAll('.nav').forEach(button => {
    button.addEventListener('click', function () {
      const targetCard = this.dataset.next ?? this.dataset.prev;
      console.log("➡️ Clic detectado. Ir a:", targetCard);
      if (targetCard !== undefined) {
        showCard(targetCard);
      }
    });
  });

  showCard(0);
};
