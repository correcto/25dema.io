$(document).ready(function () {
  $('#formpres').on('submit', function (e) {
    e.preventDefault();
    var originalButtonText = $('#submitButton').text(); // Guardar o texto original do botão

    $('#submitButton').text('A enviar...').prop('disabled', true); // Alterar texto e desabilitar botão para prevenir envios múltiplos

    var formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: 'https://script.google.com/macros/s/AKfycbxugxI5zc_PZH1QcODNdWwngC4Ixzm3RVNiwo0Jxq_fxaHka8U6cb8dj6yZCZwi_JPZ/exec',
      data: formData,
      success: function (response) {
        mostrarPopupAlerta('Mensagem recebida, obrigada!', true);
        $('#submitButton').text(originalButtonText).prop('disabled', false); // Restaurar texto e habilitar botão
        $('#formpres')[0].reset();
      },

      error: function () {
        mostrarPopupAlerta(
          'Pedimos desculpa, mas houve um erro ao enviar sua resposta. Por favor, tente novamente.',
          false
        );
        $('#submitButton').text(originalButtonText).prop('disabled', false); // Em caso de erro, também restaurar
        $('#formpres')[0].reset();
      },
    });
  });

  // Fechar popup ao clicar em 'x'

  $('.popup-fechar').click(function () {
    $('#popupAlerta').hide();
  });

  // Função para mostrar o popup de alerta

  function mostrarPopupAlerta(mensagem, sucesso) {
    $('#popupMensagem').text(mensagem);
    $('#popupAlerta').show();
  }

  $(document).mouseup(function (e) {
    var popupConteudo = $('#popupAlerta .popup-conteudo'); // Seleciona o conteúdo interno do pop-up

    // Verifica se o clique foi fora do conteúdo do pop-up (no overlay)
    if (
      !popupConteudo.is(e.target) &&
      popupConteudo.has(e.target).length === 0
    ) {
      $('#popupAlerta').hide(); // Esconde o overlay e o pop-up
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var params = new URLSearchParams(window.location.search);
  var presente = params.get('presente');
  if (presente) {
    document.getElementById('gift').value = decodeURIComponent(presente);
  }
});
