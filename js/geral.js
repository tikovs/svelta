function callAlertas() {
    alertasJS01();
    alertasJS02();
}

function alertasJS01() {
    let cor = document.getElementById("js01-cor").value;
    let alertCor = document.getElementById("js01-campo-cor");

    let tamanho = document.getElementById("js01-tamanho").value;
    let alertTamanho = document.getElementById("js01-campo-tamanho");

    alertCor.style.display = cor === "escolha" ? 'block' : 'none';
    alertTamanho.style.display = tamanho === "escolha" ? 'block' : 'none';
}

function alertasJS02() {
    let cor = document.getElementById("js02-cor").value;
    let alertCor = document.getElementById("js02-campo-cor");

    let tamanho = document.getElementById("js02-tamanho").value;
    let alertTamanho = document.getElementById("js02-campo-tamanho");

    alertCor.style.display = cor === "escolha" ? 'block' : 'none';
    alertTamanho.style.display = tamanho === "escolha" ? 'block' : 'none';
}

function submitJS02(element) {
    let cor = document.getElementById("js02-cor").value;
    let tamanho = document.getElementById("js02-tamanho").value;

    if (cor !== "escolha" && tamanho !== "escolha") {
        showDivJS01(document.getElementById("js02-tamanho"));
        document.getElementById("js02-esgotado").style.display = 'none';
        document.getElementById("js02-pagseguro").submit();
    }


}

function showDivJS01(element) {
    alertasJS01();
    let cor = document.getElementById("js01-cor").value;

    switch (element.value) {
        case 'PP':
            document.getElementById("js01").value = cor === "Preto" ? '8F49FAC33232A0B4443DFF9E96053DA6' : '645059B06969D2CDD4CE1FBA71D228FA';

            break;
        case 'P':
            document.getElementById("js01").value = cor === "Preto" ? 'E0E95CCE2929A2A884A8CFBFB6E6853B' : 'C5351EA24949E2EFF4DA9F989A8C42AD';
            break;
        case 'M':
            document.getElementById("js01").value = cor === "Preto" ? '4AC59188AEAE8C4AA46D6FA78568E9E0' : '1122AA2EC7C7B1C994EBEF8A3D08462B';
            break;
        case 'G':
            document.getElementById("js01").value = cor === "Preto" ? '' : 'B9DF082FEDEDB43004C14FBADD42FB65';
            break;
        default:
            console.log('Sorry, we are out of ' + expr + '.');
    }
}

function showDivJS02(element) {
    alertasJS02();
    let cor = document.getElementById("js02-cor").value;

    switch (element.value) {
        case 'PP':
            document.getElementById("js02").value = cor === "Lima" ? '28CADE504A4A243444C85F960E90C119' : '';

            break;
        case 'P':
            document.getElementById("js02").value = cor === "Lima" ? 'DC03439B272743E994B01F853A45052F' : '';
            break;
        case 'M':
            document.getElementById("js02").value = cor === "Lima" ? '27D04AF3DDDDAB0FF4F67FBD4D18F923' : '';
            break
        case 'G':
            document.getElementById("js02").value = cor === "Lima" ? 'A4716D170C0CA08CC49DEFAB379D9146' : '';
            break;
        default:
            console.log('Sorry, we are out of ' + expr + '.');
    }
}


$(document).ready(function() {
    $('#subscribe-form').submit(function(e) {
        var email = $('#emailSubscribe');

        if (email.val() === "") {
            $('.submit-fail').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: '//formspree.io/mvopzgzw',
                data: $('#subscribe-form').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            $('.submit-success').fadeToggle(400);
        }
    });

    $('.submit-fail, .submit-success').click(function() {
        $(this).hide();
    })

    $('#email-form').submit(function(e) {
        var email = $('#emailMessage');
        var subject = $('#subject');
        var name = $('#name');
        var message = $('#message');

        if (email.val() === "" || subject.val() === "" || name.val() === "" || message.val() === "") {
            $('.submit-email-fail').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: '//formspree.io/mvopzgzw',
                data: $('#email-form').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            $('.submit-email-success').fadeToggle(400);
        }
    });

    $('.submit-email-fail, .submit-email-success').click(function() {
        $(this).hide();
    })
});