$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit' , function(e){
        e.preventDefault();
        const endNovaImagem = $('#imgurl').val()
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endNovaImagem}"/>`).appendTo(novoItem);
        $(`
          <div class="overlay-image-link">
          <a href="${endNovaImagem}" target="_blank" title="Ver imagem em tamanho Real">
          Ver Imagem em tamanho real
          </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1500);
        $('#imgurl').val(' ')
        


        
        
    })
});