var form = document.querySelector('#libForm');
form.addEventListener('submit', function (e) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
});

const aadi = 'checking';
console.log(aadi);