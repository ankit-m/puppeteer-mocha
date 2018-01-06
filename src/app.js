function submitForm(e) {
  const data = 'Email:' + document.getElementById('user-email').value + '\n' +
    'Select:' + document.getElementById('user-select').value + '\n';

  window.confirm(data);
  e.preventDefault();
}