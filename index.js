$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        $("ul").append("<li><span><i class='fa fa - trash'></i></span> "+$(this).val()+"</li>");
        $(this).val("");
    }
});
$(".toggleInput").on("click",function(){
    $("input[type='text']").fadeToggle();
});