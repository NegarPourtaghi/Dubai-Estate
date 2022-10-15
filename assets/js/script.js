$('#nextPage').click(function() {
        $('.c2').removeClass('c2');
        $('.c1').addClass('c11');

    });


    $('#previosPage').click(function() {
        $('.container2').addClass('c2');
        $('.c1').removeClass('c11');

    });


    
   
    $('.scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });




