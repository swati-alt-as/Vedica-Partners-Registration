  
$(function () {
    $('.liactive li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
})