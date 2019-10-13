$('.second').waypoint(function () {
    $('.text').addClass('animated');
},{offset:'20%'});

$('.third').waypoint(function(direction){
    if(direction === 'down'){
        $('.text1').addClass('animated');
    }else{
        $('.text1').removeClass('animated');
    }
},{offset:'20%'});