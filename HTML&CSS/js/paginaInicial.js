var btnMenuMobile = $('#btnMenuMobile');
var menu = $('.menu-mobile-itens');
menu.toggle();
btnMenuMobile.click(function(){
    console.log('Clique');

    if (menu.hasClass('aberto')) {
        console.log("aberto")
        menu.removeClass('aberto').addClass('fechado').toggle();
    } else {
        console.log("fechado")
        menu.removeClass('fechado').addClass('aberto').toggle();
    }
});
