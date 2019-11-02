$(document).on('ready', function(){
    
    $(".has_submenu > a").click(function(e){
        e.preventDefault();
        var menu_li = $(this).parent("li");
        var menu_ul = $(this).next("ul");

        if(menu_li.hasClass("open")){
          menu_ul.slideUp(350);
          menu_li.removeClass("open")
        }
        else{
          $(".left-menu .nav-side > li > ul").slideUp(350);
          $(".left-menu .nav-side > li").removeClass("open");
          menu_ul.slideDown(350);
          menu_li.addClass("open");
        }
    });
    
    $('#navigation-toogle').on('click', function(){
        $('body').toggleClass('sidebar-open');
    });
    
    $('[data-inputype-file]').on('click', function(e){
        e.preventDefault();
        $('#'+$(this).data('inputype-file')).trigger('click');
        
    });
    
    
    
    if($('#mapsAddress').length && typeof mapEdit === 'function'){
        mapEdit();
    }
    
    if(typeof footable_init === 'function'){
        footable_init();
    }
    
})