document.addEventListener('DOMContentLoaded', function() {



    let titulos = document.getElementsByClassName("border");
   // console.log(titulos);



    window.onscroll = function () {

        if (document.body.scrollTop > 0 || document.documentElement.scrollTop < 350) {

        

        console.log("onscroll");



            titulos[0].classList.toggle("slideUp");

            // titulos[0]

            console.log(titulos[0]);

        }


        else if  (document.body.scrollTop > 700 || document.documentElement.scrollTop < 1200) {



            console.log("onscroll 2");

        }



        else if  (document.body.scrollTop > 1000 || document.documentElement.scrollTop < 1300) {



            console.log("onscroll 3");

        }

    }









});