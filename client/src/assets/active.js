function initOnScroll(){
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-50
        }, 500);
    });
}

function initMobileMenu(){
    $('.main-navigation').meanmenu({
        meanScreenWidth: "992",
        meanMenuContainer: '.mobile-menu',
        meanMenuClose: "<i class='icon icon-simple-remove'></i>",
        meanMenuOpen: "<i class='icon icon-menu-34'></i>",
        meanExpand: "",
    });
}

function initCTA(){
    $('#cta-submit').on('click', function(e) {
        e.preventDefault()
        var state = $('#cta-state').val();
        window.location.href = `/start?state=${state}`;
    })
}

$('document').ready(function(){
    initOnScroll();
    initMobileMenu();
    initCTA();
})
