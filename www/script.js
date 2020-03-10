 const staticInputData ={
     login: $("#login").val(),
     password: $("#password").val(),
     eyeflag: false
};
$("#btn-notshow").hide();
$(".btn-eye").click(function(){
    if(staticInputData.eyeflag == false){
        $("#btn-show").hide();
        $("#btn-notshow").fadeIn(500);
        $("#password").attr("type","text");
        staticInputData.eyeflag = true;
    } else {
        $("#btn-show").fadeIn(500);
        $("#btn-notshow").hide();
        $("#password").attr("type","password");
        staticInputData.eyeflag = false;
    }
});

 function checkInput(x,y){
     if ( !(x == staticInputData.login) ) {
        $("#E-mail_hint").css("color","#737382");
        $("#login").attr("placeholder", "");
     } else{
        $("#E-mail_hint").css("color","#44434F"); 
        $("#login").attr("placeholder", "E-mail");
     }
     if ( !(y == staticInputData.password) ) {
        $("#Password_hint").css("color","#737382");
        $("#password").attr("placeholder", "");
    } else{
        $("#Password_hint").css("color","#44434F");
        $("#password").attr("placeholder", "Пароль");
    }
};
setInterval(function(){
    logVar = $("#login").val();
    passVar = $("#password").val();
    checkInput(logVar,passVar);
},100);

