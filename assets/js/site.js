var i = 0;

$(document).ready(function(){
    int = setInterval("BoxLoad(i)",500);
});

function BoxLoad() {
    var box = $('#boxes div').length;
    if (i >= box) {
        clearInterval(int);
    }

    $('#boxes div:hidden').eq(0).fadeIn(500);

    i++;
}

$(function(){
    $("#about").click(function() {
        document.getElementById("about").id = 'motion';
        var position_p = document.getElementById('motion').style.marginLeft;
        if(position_p == '-44px') {
            $("#motion img").delay(200).fadeOut(500);
            $("#about_page").fadeOut(500, function(){
                document.getElementById('motion').style.position = '';
                $("#motion").animate({ marginLeft: "+=50px",}, 1000 ).delay(300).animate({ marginTop: "+=240px"}, 1000, function () {
                    $("#boxes div").fadeIn(500);
                    $("#motion .description").html("bio");
                    document.getElementById("motion").id = 'about';
                });
            });
        }else{
            var position = document.getElementById('blog_page').style.marginRight;
            if(position == '540px') {
                $("#blog_close").delay(200).fadeOut(500);
                $("#blog_page").delay(200).animate({ marginRight: "-=540px",}, 1000, function (){document.getElementById('blog_page').style.display = 'none';} );
                $("#blog .description").html("works");
            }
            $("#boxes div").not(':eq(0)').fadeOut(500);
            $("#motion").animate({ marginLeft: "-=50px",}, 1000 ).delay(300).animate({ marginTop: "-=240px"}, 1000, function(){ $("#about_page").delay(200).fadeIn(500); $("#motion .description").html("back");  $("#motion img").delay(200).fadeIn(500); document.getElementById('motion').style.position = 'fixed'; document.getElementById("motion").id = 'about';});
        }
    });

    $("#portfolio").click(function() {
        document.getElementById("portfolio").id = 'motion';
        var position_p = document.getElementById('motion').style.marginLeft;
        if(position_p == '-44px') {
            $("#motion img").delay(200).fadeOut(500);
            $("#portfolio_page").fadeOut(500, function(){document.getElementById('motion').style.position = ''; $("#motion").animate({ marginLeft: "+=157px",}, 1000 ).delay(300).animate({ marginTop: "+=240px"}, 1000, function () {$("#boxes div").fadeIn(500); $("#motion .description").html("expertise"); document.getElementById("motion").id = 'portfolio';} ); });
        }else{
            var position = document.getElementById('blog_page').style.marginRight;
            if(position == '540px') {
                $("#blog_close").delay(200).fadeOut(500);
                $("#blog_page").delay(200).animate({ marginRight: "-=540px",}, 1000, function (){document.getElementById('blog_page').style.display = 'none';} );
                $("#blog .description").html("works");
            }
            $("#boxes div").not(':eq(1)').fadeOut(500);
            $("#motion").animate({ marginLeft: "-=157px",}, 1000 ).delay(300).animate({ marginTop: "-=240px"}, 1000, function(){ $("#portfolio_page").delay(200).fadeIn(500); $("#motion .description").html("back");  $("#motion img").delay(200).fadeIn(500); document.getElementById('motion').style.position = 'fixed'; document.getElementById("motion").id = 'portfolio';});
        }
    });

    $("#blog").click(function () {
        document.getElementById("blog").id = 'motion';
        var position = document.getElementById('blog_page').style.marginRight;
        //alert(position);
        if(position == '540px') {
            $("#blog_close").delay(200).fadeOut(500);
            $("#blog_page").delay(200).animate({ marginRight: "-=540px",}, 1000, function (){document.getElementById('blog_page').style.display = 'none';document.getElementById("motion").id = 'blog';} );
            $("#motion .description").html("works");
        }else{
            document.getElementById('blog_page').style.display = '';
            $("#blog_page").delay(200).animate({ marginRight: "+=540px",}, 1000, function (){$("#blog_close").delay(200).fadeIn(500); document.getElementById("motion").id = 'blog';} );
            $("#motion .description").html("close");
        }
    });

    $("#blog_close").click(function() {
        document.getElementById("blog_close").id = 'motion';
        $("#motion").delay(200).fadeOut(500);
        $("#blog_page").delay(200).animate({ marginRight: "-=540px",}, 1000, function (){document.getElementById('blog_page').style.display = 'none'; document.getElementById("motion").id = 'blog_close';} );
        $("#blog .description").html("works");
    });

    $('#twitterButton').hover(
        function(){ $('#twitterbox').show(); },
        function(){ $('#twitterbox').hide(); }
    );

    /*var hash = window.location.hash.substr(1);
    $(document).ready(function(){
        if(hash== 'blog'){
            document.getElementById("blog").id = 'motion';
            var position = document.getElementById('blog_page').style.marginRight;
            document.getElementById('blog_page').style.display = '';
            $("#blog_page").delay(200).animate({ marginRight: "+=540px",}, 1000, function (){$("#blog_close").delay(200).fadeIn(500); document.getElementById("motion").id = 'blog';} );
            $("#motion .description").html("close");
        }
    });
    */
});
