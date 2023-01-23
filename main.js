$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insire o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposincorretos = validador.numberOfInvalids();
            if (camposincorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    })
