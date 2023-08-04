/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// déconte0

        $(document).ready(function () {
            // Début du compteur
            var startValue = 0;
            // Valeur finale du compteur
            var endValue = 2000;
            // Durée du compteur en millisecondes
            var duration = 2000;
            // Intervalle de mise à jour du compteur en millisecondes
            var interval = 50;
            // Calcul du nombre d'itérations
            var iterations = Math.ceil(duration / interval);
            // Calcul de l'incrément pour chaque itération
            var increment = Math.ceil((endValue - startValue) / iterations);

            // Fonction pour mettre à jour le compteur
            function updateCounter(value) {
                document.getElementById("counter").innerHTML = value;
            }

            // Lancer le compteur
            var current = startValue;
            var counterInterval = setInterval(function () {
                if (current >= endValue) {
                    updateCounter(endValue);
                    clearInterval(counterInterval);
                } else {
                    updateCounter(current);
                    current += increment;
                }
            }, interval);
        });