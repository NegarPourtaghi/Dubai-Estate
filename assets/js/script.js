$('#nextPage').click(function() {
        $('.c2').removeClass('c2');
        $('.c1').addClass('c11');
        $('#nextbtn').addClass('btnremove');


    });


    $('#previosPage').click(function() {
        $('.container2').addClass('c2');
        $('.c1').removeClass('c11');
setTimeout(() => {
    $('#nextbtn').removeClass('btnremove');

}, 600);
    });


    
   
    $('.scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });




