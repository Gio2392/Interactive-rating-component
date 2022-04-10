const d = document;
const submitBtn = d.querySelector('.btn');
const rates = d.querySelectorAll('.card__rate-item');
const card = d.getElementById('card');
const cardTy = d.getElementById('card-ty');
const text = d.querySelector('.card__rate-result');

let rateValue = 0;

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    deSelect();
    rate.classList.add('selected');
    rateValue = rate.textContent;
  });
});

function deSelect() {
  rates.forEach((rate) =>
    rate.classList.contains('selected') ? rate.classList.remove('selected') : ''
  );
}

submitBtn.addEventListener('click', () => {
  if (rateValue <= 0) return alert('Plese select a rating');
  card.style.display = 'none';
  cardTy.style.display = 'flex';
  text.textContent = `You selected ${rateValue} out of 5`;
});
