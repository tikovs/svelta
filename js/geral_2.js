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

            if (cor === "Preto" &&  (tamanho === "G"  || tamanho === "PP")) {
                document.getElementById("js01-esgotado").style.display = 'block';

            } else {
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

            if (cor !== "escolha" && tamanho !== "escolha") {
                showDivJS02(document.getElementById("js02-tamanho"));
                document.getElementById("js02-esgotado").style.display = 'none';
                document.getElementById("js02-pagseguro").submit();
            }

        }


        function submitJS03(element) {
            let cor = document.getElementById("js03-cor").value;
            let tamanho = document.getElementById("js03-tamanho").value;

            if (cor === "Nude" && (tamanho === "G"|| tamanho === "M")) {
                document.getElementById("js03-esgotado").style.display = 'block';

            }
            else if (cor === "Mostarda" && (tamanho === "G" || tamanho === "M")) {
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

            if (cor === "Off-white" && (tamanho === "G" || tamanho === "PP" || tamanho === "P"  || tamanho === "M")) {
                document.getElementById("js04-esgotado").style.display = 'block';

            }  else if (cor === "Preto" && (tamanho === "PP" || tamanho === "M" || tamanho === "G" || tamanho === "P")) {
                document.getElementById("js04-esgotado").style.display = 'block';

            } else if (cor === "Vermelho" && (tamanho === "PP" || tamanho === "G")) {
                document.getElementById("js04-esgotado").style.display = 'block';

            }else {
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

            } else if (cor === "Branco" && tamanho === "G") {
                document.getElementById("js05-esgotado").style.display = 'block';
            }else {
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

            if (cor !== "escolha" && tamanho !== "escolha") {
                showDivJS06(document.getElementById("js06-tamanho"));
                document.getElementById("js06-esgotado").style.display = 'none';
                document.getElementById("js06-pagseguro").submit();
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
                    document.getElementById("js02").value = cor === "Lima" ? 'C4EA5937C9C9A8144459CFAC6982B929' : '';

                    break;
                case 'P':
                    document.getElementById("js02").value = cor === "Lima" ? '38C6A7F60E0EF94224908FB15F08C499  ' : '';
                    break;
                case 'M':
                    document.getElementById("js02").value = cor === "Lima" ? '97FE3E682929331BB4ECFFB03AF58BDF' : '';
                    break
                case 'G':
                    document.getElementById("js02").value = cor === "Lima" ? 'D7E001AC90900FE11465FFACB7C13740' : '';
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
                        document.getElementById("js03").value = "20178B9F8484451AA4813F80ECF47509";
                        break;
                    case 'P':
                        document.getElementById("js03").value = "9CEBA2021C1CCA2554D1CF9404846D18";
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
                        document.getElementById("js03").value = "B88A9EE46C6C649AA4F37F80667E4B83";

                        break;
                    case 'P':
                        document.getElementById("js03").value = "E9CAB4555858D58AA4548FACE0C2F9B2";
                        break;
                    case 'M':
                        document.getElementById("js03").value = "294C83735C5CAD4FF4523FAEF87F814A";
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
                    document.getElementById("js03").value = "A9D97C828181E3A5540BEFA82CCEF559";

                    break;
                case 'P':
                    document.getElementById("js03").value = "D673B83D93934C20049D0FB4B4E36DAC";
                    break;
                case 'M':
                    document.getElementById("js03").value = "052991C4A1A1773224126F939E239748";
                    break
                case 'G':
                    document.getElementById("js03").value = "2F30CC23BEBE621EE4793F84AD4438FC";
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
                        document.getElementById("js04").value = "C88A3A16F3F3239444B83F9ECE330AE2";
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
                    document.getElementById("js06").value = cor === "Metalizado" ? '5709BEBD1515967DD4265F8322F35DF7' : '';

                    break;
                case 'P':
                    document.getElementById("js06").value = cor === "Metalizado" ? '3B4325B865652AB44402EFB64EA776ED' : '';
                    break;
                case 'M':
                    document.getElementById("js06").value = cor === "Metalizado" ? '684448998A8AFD2AA4F37FAC2FAB110D' : '';
                    break
                case 'G':
                    document.getElementById("js06").value = cor === "Metalizado" ? '9771F5AEACAC537FF481FF8A41BE8A42' : '';
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
                    document.getElementById("js07").value = cor === "Metalizado" ? '3F42BDF82626B42224F1BFA70AF1AEC9' : '';

                    break;
                case 'P':
                    document.getElementById("js07").value = cor === "Metalizado" ? '83D60C57B2B2E79AA4243FA1B7BE1C1F' : '';
                    break;
                case 'M':
                    document.getElementById("js07").value = cor === "Metalizado" ? '6279F92C8B8B4A9774F7DF875BFC80E5' : '';
                    break
                case 'G':
                    document.getElementById("js07").value = cor === "Metalizado" ? '94291BE9AAAAC7811476EF8224F67821' : '';
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
