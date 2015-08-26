$(document).ready(function(){

    imageLinks(); 
    
    var adClass = $("ul a");
    for (var i = 0; i<adClass.length; i++){
        adClass[i].setAttribute("id", i);
        
    }
    arrowClick();
    textToggle();
});

 var app= {
     ind:0
 }


   function picChange(pic){
   var source = pic.getAttribute("href");
   var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    
    if (placeholder.style.display="none"){
    $(placeholder).fadeToggle(800,"swing");}
    textSwap(pic);
    
          }

function imageLinks(){
    var gallery = document.getElementById("images");
    var links = gallery.getElementsByTagName("a");
    
    for (var i=0; i<links.length; i++){
        links[i].onclick = function(){
            picChange(this);
            return false;
        }
        
    }
    
          }

function arrowClick(){
    $('.arrow-right').click(function(){
        app.ind++;
        var pic = $("ul a[id="+app.ind+"]").get(0);
        picChange(pic);
    
        
    });
    
    $('.arrow-left').click(function(){
        if (app.ind>=1){
        app.ind--;
        var pic = $("ul a[id="+app.ind+"]").get(0);
        picChange(pic);
    }
            
    });
}

function textToggle(){
    $('span.text').click(function(){
           var txt = $('#place1').is(':hidden')?'text: on' : 'text: off';
        $('span.text').text(txt);
        $('#place1').slideToggle();
    
        
    });
    
}




function textSwap(picTxt){
    var title = document.getElementsByTagName("h3")[0];
    title.innerHTML = picTxt.innerHTML;
    
    var ind = picTxt.getAttribute("id");
    app.ind = ind;
   
    var desc0 = document.getElementById("desc"+ind).innerHTML;
     var place = document.getElementById("place1");
    place.innerHTML = desc0;
    }

