            document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const menu = document.getElementById('menu');
            const header = document.querySelector('header');
            const navBar = document.querySelector('.navBar');

            menuToggle.addEventListener('click', function() {
                menu.classList.toggle('active');
            });

            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
            });

            document.addEventListener('click', function(event) {
                const target = event.target;
                const isMenuToggle = target.closest('#menuToggle');
                const isMenu = target.closest('#menu');
                const isNavBar = target.closest('.navBar');

                if (!isMenuToggle && !isMenu && !isNavBar) {
                    menu.classList.remove('active');
                }
            });
        });

        const typed = new Typed('.auto-type', {
            strings: ['Full-Stack Development','Web Development'],
            typeSpeed: 90,
            backSpeed: 90,
            loop: true
        });