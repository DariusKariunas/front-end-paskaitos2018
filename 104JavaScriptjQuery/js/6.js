$(document).ready(function(){
    $("div button").on("click",function(){
        $(this).hide("slow");
    });
   
    $("article button").on("click",function(){
        $("article p").toggle("slow");
    });

});

$(document).ready(function(){
   
    $("div#sss button").on("click",function(){
        $(".visi").hide("slow");
    });
});

$(document).ready(function(){
   /* $("#sarasass button").on("click",function(){
        $(this).hide("slow");
    });*/

    $("#sarasass button").on("click", function() {
        
        $(this).parent().hide();
      });

/*

    $("#du").on("click",function(){
        $("#du1").hide("slow");
    });
    $("#trys").on("click",function(){
        $("#trys1").hide("slow");
    });
    $("#keturi").on("click",function(){
        $("#keturi1").hide("slow");
    });
    $("#penki").on("click",function(){
        $("#penki1").hide("slow");
    });
    $("#sesi").on("click",function(){
        $("#sesi1").hide("slow");
    });
    $("#septyni").on("click",function(){
        $("#septyni1").hide("slow");
    });
    $("#astuoni").on("click",function(){
        $("#astuoni1").hide("slow");
    });
    $("#devyni").on("click",function(){
        $("#devyni1").hide("slow");
    });
    $("#desimt").on("click",function(){
        $("#desimt1").hide("slow");
    });  
    */
});


$(document).ready(function(){
   
    $("button:nth-child").on("click",function(){
        $("li").hide("slow");
    });
});

$(document).ready(function(){
   
    $("#pranesimas").on("click",function(){
        alert("Your pc will blow up after 3.. 2.. 1..");
    });
    $("#pranesimas2").on("click",function(){
        alert("I said our pc will blow up after 3.. 2.. 1..");
    });
    $("#su_pranesimu").on("click",function(){
        alert("Skaityti toliau..");
    });

    $("#iconsole li").on("click",function(){
        console.log($(this).text());
    });

});

$(document).ready(function(){
   
    $("#dydis").on("click",function(){
        $(".keistiformata").css("font-size", "2em");
    });

    $("#spalva").on("click",function(){
        $(".keistiformata").css("color", "red");
    });

});


