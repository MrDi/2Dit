$(document).ready(function(){

var ErrorPhone = true;

var index = 0;
var click_id=0;

 var jVal = {
                   'f_phone' : function(index) {
             
                        
                        var ele = $("#form"+index+" .valid");
                        
                        ErrorPhone = true;
                        if(ele.val().length < 6){
                       ele.css('border-bottom','1px solid red');
                         /*  ele.css('border-color',colorError);*/
                        }
                         else{
                            ErrorPhone = false;
                           ele.css('border-bottom','1px solid green');
                             /*ele.css('border-color',colorNoError);*/
                             
                        }
                       
                      
                       
                       
                },
                
                'sendIt':function() {
                    
                           //$('#jform').submit(); 
                }
 }



$.change_form = function(index){
  
    $("#form"+index+" .valid").change(function(){ jVal.f_phone(index); });
   
}

$.change_form(1);
$.change_form(2);

//Кликаем на красную кнопку, получам её id
$(".my_feed_button").click(function(e){
  
    click_id =e.target.id;
    click_id = click_id.substr(11);
    e.preventDefault();
    $.change_form(click_id);
    jVal.f_phone(click_id);
    console.log(click_id);
    if(!ErrorPhone){
       jQuery.ajax({
            url: "action/form.php",
            type: "POST",
            cache: false,//url-адрес, по которому будет отправлен запрос
            dataType: "html", //
            data: jQuery("#form"+click_id).serialize(), 
            success:function(html){
                
             $("#form"+click_id+" .inp2").val("");
             $("#form"+click_id+" .valid").val("");   
             $("#form"+click_id+" .valid").css('border-bottom','');
             $("#form"+click_id+" > .line_input").addClass('hide');
             $("#form"+click_id+" .message_ok").fadeIn();
             
            },
            error:function (xhr, ajaxOptions, thrownError){
                console.log("Упс!"); //выводим ошибку
            }
        });
    }
    else {
        return false;
    }
    
});











});