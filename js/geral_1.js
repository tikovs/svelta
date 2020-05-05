function callAlertas() {
    alertasJS01();
    alertasJS02();
    alertasJS03();
    alertasJS04();
    alertasJS05();
    alertasJS06();
    alertasJS07();
    alertasJS09();
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

    document.getElementById("cupomJS02-alerta-falha").style.display = 'none';
    document.getElementById("cupomJS02-alerta-sucesso").style.display = 'none';
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

    document.getElementById("cupomJS04-alerta-falha").style.display = 'none';
    document.getElementById("cupomJS04-alerta-sucesso").style.display = 'none';
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

function alertasJS09() {
    let cor = document.getElementById("js09-cor").value;
    let alertCor = document.getElementById("js09-campo-cor");

    let tamanho = document.getElementById("js09-tamanho").value;
    let alertTamanho = document.getElementById("js09-campo-tamanho");

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


function cupomJS02(element) {
    let cupomJS02 = document.getElementById("cupomJS02").value;
    let cupomJS02Valido = document.getElementById("cupomJS02-valido").value;

    if (cupomJS02 === "NAOEXISTECUPOMAQUIAINDA25212") {
        document.getElementById("cupomJS02-valido").value = true;
        document.getElementById("priceJS02").value = "R$300,77";
        document.getElementById("cupomJS02-alerta-falha").style.display = 'none';
        document.getElementById("cupomJS02-alerta-sucesso").style.display = 'block';
    } else {
        document.getElementById("cupomJS02-valido").value = false;
        document.getElementById("cupomJS02-alerta-falha").style.display = 'block';
        document.getElementById("cupomJS02-alerta-sucesso").style.display = 'none';
        document.getElementById("priceJS02").value = "R$467,70";
    }
}



function cupomJS04(element) {
    let cupomJS04 = document.getElementById("cupomJS04").value;
    let cupomJS04Valido = document.getElementById("cupomJS04-valido").value;

    if (cupomJS04 === "VITORIA" || cupomJS04 === "JULIANA" ) {
        document.getElementById("cupomJS04-valido").value = "true";
        document.getElementById("priceJS04").value = "R$406,57";
        document.getElementById("cupomJS04-alerta-falha").style.display = 'none';
        document.getElementById("cupomJS04-alerta-sucesso").style.display = 'block';
    } else {
        document.getElementById("cupomJS04-valido").value = "false";
        document.getElementById("cupomJS04-alerta-falha").style.display = 'block';
        document.getElementById("cupomJS04-alerta-sucesso").style.display = 'none';
        document.getElementById("priceJS04").value = "R$427,97";
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

    if (cor === "Nude") {
        document.getElementById("js03-esgotado").style.display = 'block';

    }
    else if (cor === "Off-white" && (tamanho === "PP" || tamanho === "G")) {
        document.getElementById("js03-esgotado").style.display = 'block';

    }
    else if (cor === "Mostarda") {
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

    if (cor === "Off-white" && (tamanho === "46")) {
        document.getElementById("js04-esgotado").style.display = 'block';

    } else if (cor === "Preto" && (tamanho === "GG" || tamanho === "46")) {
        document.getElementById("js04-esgotado").style.display = 'block';

    } else if (cor === "Vermelho") {
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

    if (tamanho === "G") {
        document.getElementById("js07-esgotado").style.display = 'block';
    } else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS07(document.getElementById("js07-tamanho"));
            document.getElementById("js07-esgotado").style.display = 'none';
            document.getElementById("js07-pagseguro").submit();
        }
    }

}


function submitJS09(element) {
    let cor = document.getElementById("js09-cor").value;
    let tamanho = document.getElementById("js09-tamanho").value;

    if (cor === "Coral" && (tamanho === "GG")) {
        document.getElementById("js09-esgotado").style.display = 'block';

    } else {
        if (cor !== "escolha" && tamanho !== "escolha") {
            showDivJS09(document.getElementById("js09-tamanho"));
            document.getElementById("js09-esgotado").style.display = 'none';
            document.getElementById("js09-pagseguro").submit();
        }
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
    let cupomJS02 = document.getElementById("cupomJS02-valido").value;

    switch (element.value) {
        case 'PP':

            document.getElementById("js02").value = cor === "Lima" ? '9B33433FAAAA56AAA49E8FAD0CADC9C1' : '';
            break;
        case 'P':
            if (cupomJS02 === "true") {
                document.getElementById("js02").value = cor === "Lima" ? 'AQUISIM' : '';
            } else {
                document.getElementById("js02").value = cor === "Lima" ? '148B2B2FC0C071C00424DFA79501C348  ' : '';
            }
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
    let cupomJS04 = document.getElementById("cupomJS04-valido").value;

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
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "BA9D0CD5A2A24677749FEF8DD6322F10";
                } else {
                    document.getElementById("js04").value = "4FE502F0434329B3344FAF8EC06C7123";
                }
                break;
            case 'P':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "FD2F40934444433CC476AF8BEBDC2CCE";
                } else {
                    document.getElementById("js04").value = "C73153DC7F7FEDF994BD5F8945731FF5";
                }
                break;
            case 'M':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "277940ED646448CCC4811FBAB75A0128";
                } else {
                    document.getElementById("js04").value = "FC4E815142425CE774841F820F5E5E69";
                }
                break
            case 'G':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "602FAFCC6F6F3F5CC4BD2F8A24E0A27C";
                } else {
                    document.getElementById("js04").value = "2487DF70606072BEE40E9F992135A37A";
                }
                break;
            case 'GG':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "8D365C946565C3C774802FA62DABEA1C";
                } else {
                    document.getElementById("js04").value = "9A2E9E9F0202CBB22438EF80DB41A2C6";
                }
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Off-white") {
        switch (element.value) {
            case 'PP':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "DEDF93798F8F885444318FA91EFE0404";
                } else {
                    document.getElementById("js04").value = "BCC5C649A8A8E7FFF40F4F92476BF604";
                }

                break;
            case 'P':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "0D15FB99BABACD2554495F88CC8C730E";
                } else {
                    document.getElementById("js04").value = "ECF798E073736DC224ED1FB5CDCA7919";
                }
                break;
            case 'M':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "39E5EB7BA8A8546224682FB037651635";
                } else {
                    document.getElementById("js04").value = "18E2D97D8F8F3EFBB42AAFA5069CF1A9";
                }
                break
            case 'G':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "7756A3C1F9F9695444688F8C6729E50F";
                } else {
                    document.getElementById("js04").value = "3F924F876969A66BB4794F9EF419C8B5";
                }
                break;
            case 'GG':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "D8C2289480808FB22469FFBA6F0D89BE";
                } else {
                    document.getElementById("js04").value = "69602615DFDFD1A004DF9FA28C717ABA";
                }
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Azul") {
        switch (element.value) {
            case 'PP':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "4333D2CC9C9CD62EE4C52F87FE44851A";
                } else {
                    document.getElementById("js04").value = "4122BA039595DBC00439EF91226B8EC4";
                }

                break;
            case 'P':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "807E662322222E3DD4693FA21B40C8C8";
                } else {
                    document.getElementById("js04").value = "64C1C80F7D7DBAACC44B0FAAC739115C";
                }
                break;
            case 'M':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "B54D04672A2A5DABB409FF948179DA1C";
                } else {
                    document.getElementById("js04").value = "930757807F7FC45FF4735FA39B20D8EF";
                }
                break
            case 'G':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "DDEEE8FC6F6F92BEE4525F88374C723D";
                } else {
                    document.getElementById("js04").value = "BF48C367555520D334839FA92E7C4429";
                }
                break;
            case 'GG':
                if (cupomJS04 === "true") {
                    document.getElementById("js04").value = "0502CA2EBCBCB68994360FAF5A1C6D76";
                } else {
                    document.getElementById("js04").value = "E8532738B8B8E2B114E51FB40FBB6BD2";
                }
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



function showDivJS09(element) {
    alertasJS09();
    let cor = document.getElementById("js09-cor").value;

    if (cor === "Preto") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js09").value = "33B1B3950A0AF8F444327F8FC17C553F";
                break;
            case 'P':
                document.getElementById("js09").value = "5B31A6A8B3B3D475542E0F87EC8A67F4";
                break;
            case 'M':
                document.getElementById("js09").value = "81386A0B9090E8E77475FF8FFA6D42F1";
                break
            case 'G':
                document.getElementById("js09").value = "BC793D548787C9CCC4202F9D1127481F";
                break;
            case 'GG':
                document.getElementById("js09").value = "E4396168565625A444A86FBBA76AE5BF";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Coral") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js09").value = "1B5C8A76EBEBFAFCC4A6BFBB3838963A";
                break;
            case 'P':
                document.getElementById("js09").value = "46062F68E3E35A2EE4867FB13413A5A9";
                break;
            case 'M':
                document.getElementById("js09").value = "70E8A4F48E8E873DD43BCFA199F4DB4A";
                break
            case 'G':
                document.getElementById("js09").value = "9AE7C017959540CBB47E5F81BE66C833";
                break;
            case 'GG':
                document.getElementById("js09").value = "D22661684545454884F99FA76A80D711";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }

    if (cor === "Azul") {
        switch (element.value) {
            case 'PP':
                document.getElementById("js09").value = "92FD065BA9A972FFF42AEFA56A420E6E";

                break;
            case 'P':
                document.getElementById("js09").value = "F8E5422E5858C9A444356F86B5840851";
                break;
            case 'M':
                document.getElementById("js09").value = "1E156681B3B3B18444865FA984105ECE";
                break
            case 'G':
                document.getElementById("js09").value = "4771298CAFAF7390047AAFB6E6BFBFF8";
                break;
            case 'GG':
                document.getElementById("js09").value = "6BF74A6B4D4DF6C664DACFA5D84AC8FA";
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
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
