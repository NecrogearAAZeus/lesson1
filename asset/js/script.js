
// $('.tab-button').on('click',function(){
//     var num = $(this).index();
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $(this).addClass('orange');
//     $('.tab-content').eq(num).addClass('show');
//     console.log(num);
// });

// for(var i = 0; i<3; i++){
//     console.log('안녕');
// }
$('.list').click(function(e){
    tabChange(e.target.dataset.id);
});

function tabChange(number){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(number).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(number).addClass('show');
}

var car =['소나타', [60000,3000,4000] ,'흰색']
var car2 ={name : '소나타', price : [60000,3000,4000] , color : '흰색'}

$(document).ready(function(){
    $('.card').html(car[0]+' / '+ car2.price[0]);

});

$('.cloth').on('input',function(){
    $('.test').empty();
    var pants = [28,30,32,34];
    var sharts = [95,100,105];
    var test2 = {name : 123 , 이건머냐 : 123456}
    var val = $(this).val(); 
    if(val == '모자'){

        sharts.forEach(function(A){
            $('.test').append(`<option>${A}</option>`)
        });
    }
    else{
console.log(pants[0]);
console.log(test2.name);

};
    
    if(val == '셔츠'){

        sharts.forEach(function(A){
            $('.test').append(`<option>${A}</option>`)
        });
    }
    else{


    };
    if(val == '바지'){
        pants.forEach(function(a , i){
            $('.test').append(`<option>${a}</option>`);
        });

                    }
    else{


};

});
var 템플릿 ='<p>안녕</p>';
$('#test').append(템플릿);
