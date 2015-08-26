$(document).ready(function(){
    
  $(glob.port+", .nav-trigger").on('click', function(e){
      var t = "";
      e.preventDefault();
      appFront.menuSwitch(function(){
          
      t = glob.last;
      glob.last = glob.curr;
      glob.curr = t;
      });
     
      
  });
    
    
    
    
    
});


var glob = {
    last : "#right", 
    curr : "#left", 
    port : "#main-nav a:contains(Portfolio)"
    
};

var appFront = {
    
    
     menuSwitch : function(callback){

                      
                      $(glob.last).animate({left:'20%'}, 200, function(){
                          $(this).css('z-index', '200');
                          $(glob.curr).css('z-index', '100');
                          $(this).animate({left:'0%'}, 200, function(){
                             $(glob.last+' *').each(function(id){
                                 var stall = 15 * parseInt(id);
                                 $(this).delay(stall).animate({opacity: 1});
                             });
                              $(glob.curr+' *').css('opacity', 0.5);
                              callback();
                             });
                          
                          
                      });
                 
             }




};


