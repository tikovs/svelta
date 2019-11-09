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

            if (cor === "Nude" && tamanho === "G") {
                document.getElementById("js03-esgotado").style.display = 'block';

            }
            else if (cor === "Mostarda" && tamanho === "G") {
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

            }  else if (cor === "Preto" && (tamanho === "PP" || tamanho === "M")) {
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
                    document.getElementById("js02").value = cor === "Lima" ? '51F9931F9C9C2A57749B7FABB1F6EE53' : '';

                    break;
                case 'P':
                    document.getElementById("js02").value = cor === "Lima" ? 'DC0BE38030301D9554C3EFAE3EC8BB2B' : '';
                    break;
                case 'M':
                    document.getElementById("js02").value = cor === "Lima" ? '15C92C09DBDB438BB49FBFB8A020E2F9' : '';
                    break
                case 'G':
                    document.getElementById("js02").value = cor === "Lima" ? '5A0628525F5F474444180FAF67676CEB' : '';
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
                        document.getElementById("js03").value = "1BF05A5D5E5EA9E11421DFB5921392F3";
                        break;
                    case 'P':
                        document.getElementById("js03").value = "6AB08D87DBDBF1FCC4D47FB7A8F7BEB3";
                        break;
                    case 'M':
                        document.getElementById("js03").value = "B8ACCAE81919D4E55400AFB7118EB7AB";
                        break
                    case 'G':
                        document.getElementById("js03").value = "FF3AE2111A1A932DD4FB0FB5F1D587A4";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Nude") {
                switch (element.value) {
                    case 'PP':
                        document.getElementById("js03").value = "7D481FF55D5DD192244C1F87B0A9F3EC";

                        break;
                    case 'P':
                        document.getElementById("js03").value = "AB7C2564DADAFA52247E7F81BC4AD804";
                        break;
                    case 'M':
                        document.getElementById("js03").value = "D8590D932727FF72246CEF83F89C7B75";
                        break
                    case 'G':
                        document.getElementById("js03").value = "09A126F5C1C191C9946FCF96373F9535";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Off-white") {
                switch (element.value) {
                case 'PP':
                    document.getElementById("js03").value = "6DEBE67E1010699334DC3F845B07EE60";

                    break;
                case 'P':
                    document.getElementById("js03").value = "A375DDA8B1B1F70224AFDF91BF873C6C";
                    break;
                case 'M':
                    document.getElementById("js03").value = "DD1BE2E51A1AACFEE41B3F9C94811BD4";
                    break
                case 'G':
                    document.getElementById("js03").value = "10A5F0CE2D2D85B114371F9C2422AC4B";
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
                        document.getElementById("js04").value = "5A531331212105A3347D7F96F7A2AA21";
                        break;
                    case 'P':
                        document.getElementById("js04").value = "B2F8579F2323C7F6647F7F8C064BEC9D";
                        break;
                    case 'M':
                        document.getElementById("js04").value = "DDFA2CC9AEAE91E44433AFA00A7D75E2";
                        break
                    case 'G':
                        document.getElementById("js04").value = "0A9768C04E4E0B7994817FA99F4FA0AB";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Preto") {
                switch (element.value) {
                    case 'PP':
                        document.getElementById("js04").value = "BCF02A497979C16DD4925FB892DA1320";

                        break;
                    case 'P':
                        document.getElementById("js04").value = "E123CB828282A56224A06FA369DC9694";
                        break;
                    case 'M':
                        document.getElementById("js04").value = "0BA4FDB0A9A933DCC4D22FAD2F55F104";
                        break
                    case 'G':
                        document.getElementById("js04").value = "3BAB36565E5E249EE42CEF9B4FF420CC";
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            } 

             if (cor === "Off-white") {
                switch (element.value) {
                case 'PP':
                    document.getElementById("js04").value = "911656099C9C778EE4A93FA5536DF379";

                    break;
                case 'P':
                    document.getElementById("js04").value = "B38028141010A34664874F975EDEF555";
                    break;
                case 'M':
                    document.getElementById("js04").value = "D8C54FF9B1B1A79BB4D00FAF844F78F2";
                    break
                case 'G':
                    document.getElementById("js04").value = "039EDE19C0C094EDD4220FA538995971";
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
                    document.getElementById("js07").value = cor === "Metalizado" ? 'E66509D24444AA63347A0FB8536F0E1D' : '';

                    break;
                case 'P':
                    document.getElementById("js07").value = cor === "Metalizado" ? 'AF45AAD08282360664150F950047BE23' : '';
                    break;
                case 'M':
                    document.getElementById("js07").value = cor === "Metalizado" ? 'DAAA1EFF2727A4F004E72F900CC7F474' : '';
                    break
                case 'G':
                    document.getElementById("js07").value = cor === "Metalizado" ? '1EBBBA227070E39AA4E40F882595A184' : '';
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
