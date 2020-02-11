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
                    document.getElementById("js02").value = cor === "Lima" ? 'D7E8936F3D3D34D994C75F8513ED8017' : '';

                    break;
                case 'P':
                    document.getElementById("js02").value = cor === "Lima" ? '2B19CF003333DA255486DFBA116E274A  ' : '';
                    break;
                case 'M':
                    document.getElementById("js02").value = cor === "Lima" ? '6FCF2074CFCF42344417DF9D9A229463' : '';
                    break
                case 'G':
                    document.getElementById("js02").value = cor === "Lima" ? 'A2EDBC739F9F11A774CB6F8FE9A80C5F' : '';
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
                        document.getElementById("js03").value = "3A8AB006B0B0286884FF4FBECDC955FB";
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
                    document.getElementById("js03").value = "31D78FE5ACAC1CC224530FA797956756";

                    break;
                case 'P':
                    document.getElementById("js03").value = "5F24748C2F2FD02DD4F99F80D93F5BF3";
                    break;
                case 'M':
                    document.getElementById("js03").value = "8AA47C41CDCD659EE41EDF8EBCEF804E";
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
                    document.getElementById("js06").value = cor === "Metalizado" ? 'F9838B0F656519ABB41C9FBDB2C08084' : '';

                    break;
                case 'P':
                    document.getElementById("js06").value = cor === "Metalizado" ? 'D30A42F045453E7774699F88D2411D9E' : '';
                    break;
                case 'M':
                    document.getElementById("js06").value = cor === "Metalizado" ? '0662D5469E9E1B3DD4B6CFB323CF5A5A' : '';
                    break
                case 'G':
                    document.getElementById("js06").value = cor === "Metalizado" ? '35687830EDEDEF1DD4154F8E0B0EAE33' : '';
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
                    document.getElementById("js07").value = cor === "Metalizado" ? 'C005A795CDCD3C277436FFBF5F07B02F' : '';

                    break;
                case 'P':
                    document.getElementById("js07").value = cor === "Metalizado" ? 'F86B70297878C645546ADFAAC2E719D5' : '';
                    break;
                case 'M':
                    document.getElementById("js07").value = cor === "Metalizado" ? '248D9599A5A56DEDD4746F84FB8CCD12' : '';
                    break
                case 'G':
                    document.getElementById("js07").value = cor === "Metalizado" ? '56A9F3B47979981BB444DFBBFFC6714E' : '';
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
