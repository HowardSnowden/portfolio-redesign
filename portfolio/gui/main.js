$(document).ready(function(){
    makeViews();
    
    //search box behahvior
    $('#collapse').click(function(){
        $('#search').slideToggle();
    });
    
    
 
    //menu behavior
    
    
    $('nav ul a').bind('mouseover', showMenu);
    $('nav ul li').bind('mouseleave',hideMenu);
    $('nav ul a').bind('click',function(e){menuClick(e)});
    
    function showMenu(){
        $(this).parent().find("ul").first().show();
    }
    
    function hideMenu(){
        
        $(this).parent().find("ul").hide();
        
    }
    
    function menuClick(e){
        var ob = $(e.target);
        var str1 = $(ob).parents('li').filter(function(index){
            return index===1}).find('a').first().text();
        var str2 = $(ob).text();
        var result = str1+ " "+str2;
        
        if (str1 =='Transactions'){
            result = str2;
        }
        
        $('#main').hide(200, function(){
        $('#main').html(Data.keyViews[result]);
        });
        $('#main').fadeIn(200);
        
        
        
    }
    
    

    
    //tab behavior
    
    $('#tab span').click(function(event){
        
        var e = event.target;
        
        var curr = $(e).text();
        if (!$(e).hasClass('active')){
        $('#tab span').removeClass('active');
        $(e).addClass('active');
        $('#main').fadeOut(200, function(){
        $('#main').html(Data.keyViews[curr]);
        });
        $('#main').fadeIn(200);
        }
        
        });
    
    
    
    
    $(document).on('click', 'tr', (function(){
       $('tr').css('background-color', 'white');
       $(this).css('background-color', 'blue');
       
    }));
});