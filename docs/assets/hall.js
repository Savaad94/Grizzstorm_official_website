let hofCurrentIndex = 0;
const hofCards = document.querySelectorAll('.hall-fame .hall-ath');

function showHofCard(index) {
  hofCards.forEach((card, i) => {
    card.classList.toggle('actives', i === index);
  });
}

function changeHofCard(dir) {
  hofCurrentIndex += dir;

  if (hofCurrentIndex < 0) hofCurrentIndex = hofCards.length - 1;
  if (hofCurrentIndex >= hofCards.length) hofCurrentIndex = 0;

  showHofCard(hofCurrentIndex);
}

showHofCard(hofCurrentIndex);
