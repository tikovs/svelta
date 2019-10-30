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

            if (cor === "Preto" && tamanho === "G") {
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

            if (cor === "Nude" && tamanho === "G") {
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

            if (cor === "Off-white" && tamanho === "G") {
                document.getElementById("js04-esgotado").style.display = 'block';

            }  else if (cor === "Preto" && tamanho === "G") {
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

            if (cor === "Off-white" && tamanho === "G") {
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
                    document.getElementById("js01").value = cor === "Preto" ? '74A5158F02028D9774A08F9789796898' : '645059B06969D2CDD4CE1FBA71D228FA';

                    break;
                case 'P':
                    document.getElementById("js01").value = cor === "Preto" ? 'E43E67376C6C84BBB4958F89BE67932A' : 'C5351EA24949E2EFF4DA9F989A8C42AD';
                    break;
                case 'M':
                    document.getElementById("js01").value = cor === "Preto" ? '29FDCB3A5A5A80D3347DAF99D1431989' : '1122AA2EC7C7B1C994EBEF8A3D08462B';
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

        function showDivJS03(element) {
            alertasJS03();
            let cor = document.getElementById("js03-cor").value;

            if (cor === "Mostarda") {
                switch (element.value) {
                    case 'PP':
                        document.getElementById("js03").value = "FF17B6124141430554F28F80D8C4C382";
                        break;
                    case 'P':
                        document.getElementById("js03").value = "72281EDFBBBBE459949F0F9B66BA0E8E";
                        break;
                    case 'M':
                        document.getElementById("js03").value = "9EC2A9A1EDED6CDFF491EFBE3A9C90F8";
                        break
                    case 'G':
                        document.getElementById("js03").value = "D4D8B3203E3E638CC4A80FA67AC84057";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Nude") {
                switch (element.value) {
                    case 'PP':
                        document.getElementById("js03").value = "EFE991A7C4C4C71554F6CF8B4D2DA087";

                        break;
                    case 'P':
                        document.getElementById("js03").value = "73FDA4553333900EE4A66FBA96E08C86";
                        break;
                    case 'M':
                        document.getElementById("js03").value = "CAE133761818E5C2240F5FA445AE410B";
                        break
                    case 'G':
                        document.getElementById("js03").value = " ";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Off-white") {
                switch (element.value) {
                case 'PP':
                    document.getElementById("js03").value = "AC0A63826C6CF06444F7EFBD07823B3B";

                    break;
                case 'P':
                    document.getElementById("js03").value = "DD1096A2DBDB394774BC3FA2477E11EC";
                    break;
                case 'M':
                    document.getElementById("js03").value = "0F022CF62B2B1134441CBFA64ADF0AE5";
                    break
                case 'G':
                    document.getElementById("js03").value = "4BF473B30A0A74ECC486BFBBCF840B0C";
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
                        document.getElementById("js04").value = "21683A2A3A3A012224336FB87DE22100";
                        break;
                    case 'P':
                        document.getElementById("js04").value = "64F6D5CD43430C7DD406BFB47BD01203";
                        break;
                    case 'M':
                        document.getElementById("js04").value = "A28F7FF43E3E651444D8DF9A4E46943B";
                        break
                    case 'G':
                        document.getElementById("js04").value = "E17D1CC17B7B0C4884AC7FA43B43EF19";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Preto") {
                switch (element.value) {
                    case 'PP':
                        document.getElementById("js04").value = "6A229AC08F8F202004463F95F8F883A0";

                        break;
                    case 'P':
                        document.getElementById("js04").value = "B7B129DEA2A22D0334059F9EC15BBFFE";
                        break;
                    case 'M':
                        document.getElementById("js04").value = "02753904F9F9A56BB4100FB5FD7F1483";
                        break
                    case 'G':
                        document.getElementById("js04").value = "44A28F775B5B1F62248E3F8842DFCF5B";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Off-white") {
                switch (element.value) {
                case 'PP':
                    document.getElementById("js04").value = "FA1E16B86767C31FF4645FA7F6A92B87";

                    break;
                case 'P':
                    document.getElementById("js04").value = "2A4AAA002929871DD4C46FB981C5BA9F";
                    break;
                case 'M':
                    document.getElementById("js04").value = "5EECA865B5B580B99431FF89CE4110CC";
                    break
                case 'G':
                    document.getElementById("js04").value = "";
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
                        document.getElementById("js05").value = "CB5AD795C4C40CA444DBCFA01AE7EA3E";
                        break;
                    case 'P':
                        document.getElementById("js05").value = "7E07C1F4D5D5C3CDD4E8BFBFD13D47AE";
                        break;
                    case 'M':
                        document.getElementById("js05").value = "BCB090B4FEFE9DBCC4DC8F8F212524D3";
                        break
                    case 'G':
                        document.getElementById("js05").value = "";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Off-white") {
                switch (element.value) {
                    case 'PP':
                        document.getElementById("js05").value = "47743EE5C6C60EBDD453DF9932CB2738";

                        break;
                    case 'P':
                        document.getElementById("js05").value = "E0EAC8D3DCDC169884558FA96D4EF161";
                        break;
                    case 'M':
                        document.getElementById("js05").value = "31BB81431F1F829EE4A4CF81EBD689F7";
                        break
                    case 'G':
                        document.getElementById("js05").value = "";
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
                    document.getElementById("js06").value = cor === "Metalizado" ? '85214A0BD5D542BBB4C1FF989ACC44DC' : '';

                    break;
                case 'P':
                    document.getElementById("js06").value = cor === "Metalizado" ? '685C99BED2D292C9949C6F87AD656C94' : '';
                    break;
                case 'M':
                    document.getElementById("js06").value = cor === "Metalizado" ? '99CD0FA7ACAC36B444F68F9FD9F6A74C' : '';
                    break
                case 'G':
                    document.getElementById("js06").value = cor === "Metalizado" ? 'B35710EA02027BF334EDCFB29E306B2C' : '';
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
                    document.getElementById("js07").value = cor === "Metalizado" ? 'AAE9BB9F4343194444A9DFAC1B6B77E6' : '';

                    break;
                case 'P':
                    document.getElementById("js07").value = cor === "Metalizado" ? '9C7B3D2DB0B0204224BD3F8114B5268B' : '';
                    break;
                case 'M':
                    document.getElementById("js07").value = cor === "Metalizado" ? 'EFB8582D0606163444CE9FBEF075CE9D' : '';
                    break
                case 'G':
                    document.getElementById("js07").value = cor === "Metalizado" ? '2DFA9BCB3F3F19E664673F98DAAE44E8' : '';
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
