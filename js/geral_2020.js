function callAlertas() {
    alertasJS01();
    alertasJS02();
    alertasJS03();
    alertasJS04();
    alertasJS05();
    alertasJS06();
    alertasJS07();
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

function alertasJS03() {
    let cor = document.getElementById("js03-cor").value;
    let alertCor = document.getElementById("js03-campo-cor");

    let tamanho = document.getElementById("js03-tamanho").value;
    let alertTamanho = document.getElementById("js03-campo-tamanho");

    alertCor.style.display = cor === "escolha" ? 'block' : 'none';
    alertTamanho.style.display = tamanho === "escolha" ? 'block' : 'none';
}

function alertasJS04() {
    let cor = document.getElementById("js04-cor").value;
    let alertCor = document.getElementById("js04-campo-cor");

    let tamanho = document.getElementById("js04-tamanho").value;
    let alertTamanho = document.getElementById("js04-campo-tamanho");

    alertCor.style.display = cor === "escolha" ? 'block' : 'none';
    alertTamanho.style.display = tamanho === "escolha" ? 'block' : 'none';
}

function alertasJS05() {
    let cor = document.getElementById("js05-cor").value;
    let alertCor = document.getElementById("js05-campo-cor");

    let tamanho = document.getElementById("js05-tamanho").value;
    let alertTamanho = document.getElementById("js05-campo-tamanho");

    alertCor.style.display = cor === "escolha" ? 'block' : 'none';
    alertTamanho.style.display = tamanho === "escolha" ? 'block' : 'none';
}

function alertasJS06() {
    let cor = document.getElementById("js06-cor").value;
    let alertCor = document.getElementById("js06-campo-cor");

    let tamanho = document.getElementById("js06-tamanho").value;
    let alertTamanho = document.getElementById("js06-campo-tamanho");

    alertCor.style.display = cor === "escolha" ? 'block' : 'none';
    alertTamanho.style.display = tamanho === "escolha" ? 'block' : 'none';
}

function alertasJS07() {
    let cor = document.getElementById("js07-cor").value;
    let alertCor = document.getElementById("js07-campo-cor");

    let tamanho = document.getElementById("js07-tamanho").value;
    let alertTamanho = document.getElementById("js07-campo-tamanho");

    alertCor.style.display = cor === "escolha" ? 'block' : 'none';
    alertTamanho.style.display = tamanho === "escolha" ? 'block' : 'none';
}



function submitJS01(element) {
    let cor = document.getElementById("js01-cor").value;
    let tamanho = document.getElementById("js01-tamanho").value;

    if (cor === "Preto") {
        document.getElementById("js01-esgotado").style.display = 'block';

    } else if (cor === "Champagne" && tamanho === "M") {
        document.getElementById("js01-esgotado").style.display = 'block';
    }
    else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS01(document.getElementById("js01-tamanho"));
            document.getElementById("js01-esgotado").style.display = 'none';
            document.getElementById("js01-pagseguro").submit();
        }
    }


}

function submitJS02(element) {
    let cor = document.getElementById("js02-cor").value;
    let tamanho = document.getElementById("js02-tamanho").value;


    if (tamanho === "PP") {
        document.getElementById("js02-esgotado").style.display = 'block';
    }
    else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS02(document.getElementById("js02-tamanho"));
            document.getElementById("js02-esgotado").style.display = 'none';
            document.getElementById("js02-pagseguro").submit();
        }
    }

}


function submitJS03(element) {
    let cor = document.getElementById("js03-cor").value;
    let tamanho = document.getElementById("js03-tamanho").value;

    if (cor === "Nude" && (tamanho === "G" || tamanho === "PP" || tamanho === "P")) {
        document.getElementById("js03-esgotado").style.display = 'block';

    }
    else if (cor === "Off-white" && tamanho === "PP") {
        document.getElementById("js03-esgotado").style.display = 'block';

    }
    else if (cor === "Mostarda" && (tamanho === "G" || tamanho === "M" || tamanho === "P")) {
        document.getElementById("js03-esgotado").style.display = 'block';

    } else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS03(document.getElementById("js03-tamanho"));
            document.getElementById("js03-esgotado").style.display = 'none';
            document.getElementById("js03-pagseguro").submit();
        }
    }

}

function submitJS04(element) {
    let cor = document.getElementById("js04-cor").value;
    let tamanho = document.getElementById("js04-tamanho").value;

    if (cor === "Off-white" && (tamanho === "G" || tamanho === "PP" || tamanho === "P" || tamanho === "M")) {
        document.getElementById("js04-esgotado").style.display = 'block';

    } else if (cor === "Preto" && (tamanho === "PP" || tamanho === "M" || tamanho === "G" || tamanho === "P")) {
        document.getElementById("js04-esgotado").style.display = 'block';

    } else if (cor === "Vermelho" && (tamanho === "PP" || tamanho === "P" || tamanho === "G")) {
        document.getElementById("js04-esgotado").style.display = 'block';

    } else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS04(document.getElementById("js04-tamanho"));
            document.getElementById("js04-esgotado").style.display = 'none';
            document.getElementById("js04-pagseguro").submit();
        }
    }

}


function submitJS05(element) {
    let cor = document.getElementById("js05-cor").value;
    let tamanho = document.getElementById("js05-tamanho").value;


    if (cor === "Off-white" && (tamanho === "G" || tamanho === "M")) {
        document.getElementById("js05-esgotado").style.display = 'block';
    } else if (cor === "Branco" && (tamanho === "G" || tamanho === "PP")) {
        document.getElementById("js05-esgotado").style.display = 'block';
    } else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS05(document.getElementById("js05-tamanho"));
            document.getElementById("js05-esgotado").style.display = 'none';
            document.getElementById("js05-pagseguro").submit();
        }
    }

}

function submitJS06(element) {
    let cor = document.getElementById("js06-cor").value;
    let tamanho = document.getElementById("js06-tamanho").value;
    if (tamanho === "G" || tamanho === "PP") {
        document.getElementById("js06-esgotado").style.display = 'block';

    } else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS06(document.getElementById("js06-tamanho"));
            document.getElementById("js06-esgotado").style.display = 'none';
            document.getElementById("js06-pagseguro").submit();
        }
    }
}


function submitJS07(element) {
    let cor = document.getElementById("js07-cor").value;
    let tamanho = document.getElementById("js07-tamanho").value;

    if (cor !== "escolha" && tamanho !== "escolha") {
        showDivJS07(document.getElementById("js07-tamanho"));
        document.getElementById("js07-esgotado").style.display = 'none';
        document.getElementById("js07-pagseguro").submit();
    }

}


function showDivJS01(element) {
    alertasJS01();
    let cor = document.getElementById("js01-cor").value;

    switch (element.value) {
        case 'PP':
            document.getElementById("js01").value = cor === "Preto" ? 'E37A8BD4202001D00439FFBF1A3CF306' : '66FA4E4F8F8FF89EE4E44FBB42E3274E';

            break;
        case 'P':
            document.getElementById("js01").value = cor === "Preto" ? '13FCCF552B2B615AA422EF834B971C09' : 'ECE2FE19BABA4CBFF4560FBF550905D1';
            break;
        case 'M':
            document.getElementById("js01").value = cor === "Preto" ? '50A8A78E7C7C37B664FBAF810912D834' : '207E277E23234539949BBF867864D4AB';
            break;
        case 'G':
            document.getElementById("js01").value = cor === "Preto" ? '97ED7E2F43437D09940D5F8F7CE1D46F' : '5086EA2D313164B994F5AFA2A6C99132';
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
            document.getElementById("js02").value = cor === "Lima" ? '9B33433FAAAA56AAA49E8FAD0CADC9C1' : '';

            break;
        case 'P':
            document.getElementById("js02").value = cor === "Lima" ? '148B2B2FC0C071C00424DFA79501C348  ' : '';
            break;
        case 'M':
            document.getElementById("js02").value = cor === "Lima" ? '429D41122A2AC58BB4002F96753864CE' : '';
            break
        case 'G':
            document.getElementById("js02").value = cor === "Lima" ? '6EE3A617E7E796CCC4EA5F847732B644' : '';
            break;
        default:
            console.log('Sorry, we are out of ' + expr + '.');
    }
}

function showDivJS03(element) {
    alertasJS03();
    let cor = document.getElementById("js03-cor").value;

    if (cor === "Mostarda") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js03").value = "83C567DF909036A774BC8FBA7C1D5A52";
                break;
            case 'P':
                document.getElementById("js03").value = "6E6D90DBCACA735FF4C8AF8BDB61FDBB";
                break;
            case 'M':
                document.getElementById("js03").value = "CCB6D25C7272A96DD4B1FF801362E632";
                break
            case 'G':
                document.getElementById("js03").value = "6E38102C8D8D9EDBB49FDFBC1CD1611F";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Nude") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js03").value = "B2C2AE0F0B0BFF8554333F961A8D1CCA";

                break;
            case 'P':
                document.getElementById("js03").value = "E860B13E8989ACB334FDCF86BF90DC69";
                break;
            case 'M':
                document.getElementById("js03").value = "187E0F5CD8D8F1C884F6AF85CE3508BE";
                break
            case 'G':
                document.getElementById("js03").value = "56C4E30AE9E9708994444FADC08247A2";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Off-white") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js03").value = "31D78FE5ACAC1CC224530FA797956756";

                break;
            case 'P':
                document.getElementById("js03").value = "BA3384A33737FA455459EFB8B67856A3";
                break;
            case 'M':
                document.getElementById("js03").value = "7360C17A171731A334B2BFBB64BD6D47";
                break
            case 'G':
                document.getElementById("js03").value = "CA9C7C7060601E3FF435AFB801338317";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }


}


function showDivJS04(element) {
    alertasJS04();
    let cor = document.getElementById("js04-cor").value;

    if (cor === "Vermelho") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js04").value = "6A352B8667674A6884EBAF9F9C3FDB14";
                break;
            case 'P':
                document.getElementById("js04").value = "A5460CA12121BFB224EE9FBACFCC6D4C";
                break;
            case 'M':
                document.getElementById("js04").value = "32555E7CDEDE5A133444DF9BBC389166";
                break
            case 'G':
                document.getElementById("js04").value = "F4CB4D79B8B8700DD46A1F87F2CE3848";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Preto") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js04").value = "48BD8B9B353571FEE4CB1F93F08C010D";

                break;
            case 'P':
                document.getElementById("js04").value = "8C982B9BCCCCA85AA401DFA2C935EDC5";
                break;
            case 'M':
                document.getElementById("js04").value = "CC206A26FFFF576554D92F87699EF55E";
                break
            case 'G':
                document.getElementById("js04").value = "FDAD62E1B3B3D90994B01FB0749282A3";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Off-white") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js04").value = "4D40DA8720200F2BB49FBF821655D295";

                break;
            case 'P':
                document.getElementById("js04").value = "757C1B244C4C5C077457CF83882E915E";
                break;
            case 'M':
                document.getElementById("js04").value = "A75BB3F6C3C33DC114A62F9AFAD8DCFB";
                break
            case 'G':
                document.getElementById("js04").value = "D1B21FCE7E7E24E774E47FBA7424409E";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }


}



function showDivJS05(element) {
    alertasJS05();
    let cor = document.getElementById("js05-cor").value;

    if (cor === "Branco") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js05").value = "E738F3D6E5E56EE8849A2F961FEAB1FC";
                break;
            case 'P':
                document.getElementById("js05").value = "370471BEB8B896699427EF9C9978E3A3";
                break;
            case 'M':
                document.getElementById("js05").value = "7226F6094747037EE499DFA531EE487C";
                break
            case 'G':
                document.getElementById("js05").value = "9F974A1FD1D1BAAEE4663F9401CEC139";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Off-white") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js05").value = "EE9A58394545C9B77444DFAC63A109B2";

                break;
            case 'P':
                document.getElementById("js05").value = "25D6C19765650FE774A6EF9A16CA6774";
                break;
            case 'M':
                document.getElementById("js05").value = "57D6EF6E25259F233456FFB5FDA85BD5";
                break
            case 'G':
                document.getElementById("js05").value = "86816B949F9F4C111480EF810D1495F7";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Prata") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js05").value = "";

                break;
            case 'P':
                document.getElementById("js05").value = "";
                break;
            case 'M':
                document.getElementById("js05").value = "";
                break
            case 'G':
                document.getElementById("js05").value = "";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }


}


function showDivJS06(element) {
    alertasJS06();
    let cor = document.getElementById("js06-cor").value;

    switch (element.value) {
        case 'PP':
            document.getElementById("js06").value = cor === "Metalizado" ? 'E79552F65B5B5C8DD4D8EFB69E32CEFD' : '';

            break;
        case 'P':
            document.getElementById("js06").value = cor === "Metalizado" ? '6B95C0C39E9EE2A0043FBF99566F63A0' : '';
            break;
        case 'M':
            document.getElementById("js06").value = cor === "Metalizado" ? '9AD947222F2FB79FF4D27FBABB5C467D' : '';
            break
        case 'G':
            document.getElementById("js06").value = cor === "Metalizado" ? 'CF7147B97575DAAEE487AFA368F64FED' : '';
            break;
        default:

            console.log('Sorry, we are out of ' + expr + '.');
    }
}


function showDivJS07(element) {
    alertasJS07();
    let cor = document.getElementById("js07-cor").value;

    switch (element.value) {
        case 'PP':
            document.getElementById("js07").value = cor === "Metalizado" ? '3B7A7AF6E4E4B0977400DF822210B339' : '';

            break;
        case 'P':
            document.getElementById("js07").value = cor === "Metalizado" ? 'C9977E7DC2C2A931146BAF8A9C47CA7C' : '';
            break;
        case 'M':
            document.getElementById("js07").value = cor === "Metalizado" ? '22CF113E5A5A3D94449ADFB49FFF184B' : '';
            break
        case 'G':
            document.getElementById("js07").value = cor === "Metalizado" ? '8B2032178787EB88849A0F80596538A5' : '';
            break;
        default:
            console.log('Sorry, we are out of ' + expr + '.');
    }
}




$(document).ready(function () {
    $('#subscribe-form').submit(function (e) {
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

    $('.submit-fail, .submit-success').click(function () {
        $(this).hide();
    })

    $('#email-form').submit(function (e) {
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

    $('.submit-email-fail, .submit-email-success').click(function () {
        $(this).hide();
    })
});
