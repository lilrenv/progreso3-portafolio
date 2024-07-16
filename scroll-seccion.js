 // JavaScript para el scroll suave
 document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = scrollLink.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});