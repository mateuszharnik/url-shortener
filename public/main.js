const onError = (error) => {
  const message = (error.responseJSON && error.responseJSON.message) || error.responseText;
  const resultEl = $('.result');
  const p = $(`<p class="m-0">${message}</p>`);

  resultEl.html('').append(p);
};

const onSuccess = (result) => {
  const resultEl = $('.result');
  const url = window.location.href + result.name;

  const p = $('<p class="m-0">Twój skrócony link:</p>');
  const a = $(`<a title="Przejdź do strony" href="${url}">${url}</a>`);

  resultEl.html('').append(p).append(a);
};

const formSubmit = (urlInput, nameInput, event) => {
  event.preventDefault();

  $.ajax({
    url: window.location.href,
    method: 'post',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      url: urlInput.val(),
      name: nameInput.val(),
    }),
  })
    .done(onSuccess)
    .fail(onError);
};

const addActiveClass = (input) => {
  if (input.val()) {
    $(`[for="${input.attr('id')}"]`).addClass('active');
  }
};

const appReady = () => {
  const urlInput = $('#url');
  const nameInput = $('#name');

  addActiveClass(nameInput);
  addActiveClass(urlInput);

  $('form').submit(formSubmit.bind(null, urlInput, nameInput));
};

$(appReady);
