jQuery.noConflict();

/*var i = 0;

myLoop();

function myLoop() {
    (function($) {
        $(".load-value").html(i + '%');
        i++;
        setInterval(function() {
            if (i < 101) {
                myLoop();
            }
        }, 99);

    })(jQuery);
};

(function __loadEnd($) {
    setTimeout(function() {
        $(".loader").fadeOut(2000);
    }, 2000);
    setTimeout(function() {
        $("#all-content").toggleClass('hidden');
    }, 2000);

})(jQuery);*/

jQuery(function($) {
    $('#tel').focusout(function() {
        var phone, element;
        element = $(this);
        element.unmask();
        phone = element.val().replace(/\D/g, '');
        if (phone.length > 10) {
            element.mask("(99) 9 9999-999?9");
        }
        else {
            element.mask("(99) 9999-9999?9");
        }
    }).trigger('focusout');
})

function validacaoEmail(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        (function($) {
            $("#email").toggleClass('error');
        })(jQuery);
    }
    else {
        (function($) {
            $("#email").toggleClass('error');
        })(jQuery);
    }
}

function validacaoNome(field) {
    var nome = field.value;
    if ((nome.length >= 1) &&
        (nome.search(" ") == -1) &&
        (nome.search(".") != -1)) {

        (function($) {
            $("#name").toggleClass('error');
        })(jQuery);
    }
    else {
        (function($) {
            $("#name").toggleClass('error');
        })(jQuery);
    }
}
