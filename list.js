$("ul").on("click", "li", function ()
                    {
                        $(this).toggleClass("toggle");
                    }
);
$("ul").on("click", "span", function(event)
                            {
                                $(this).parent().fadeOut(function(event)
                                                            {
                                                                $(this).remove();
                                                            }
                                                        );    
                                event.stopPropogation();                    
                            }  
);          
$("input[type='text']").keypress(function(event)
                                 {
                                    
                                     if(event.which === 13)
                                     { 
                                        var newText=$(this).val();
                                        $(this).val("");
                                        $("ul").append("<li><span><i class='fas fa-archive'></i></span> " +newText+ "</li>")
                                     }
                                 }
);
$(".fa-pen").click(function()
                   {
                       $("#inputText").fadeToggle();
                   }              
);

