
var Data = {
    
 views:null,
 keyViews:null,

    
};



 function makeViews(){
   
    $.get('views/patron_info_view.html', function(data){
            Data.views = data;
            
        }).done(function(){
        setViews(Data.views);

   
});
 }

function setViews(file){
   
    $('#hidden').html(file);
    var views = $('#hidden').find('div');
    var viewArr = new Array();
    $(views).each(function(index, element){
       var key = $(element).find(':first-child').attr('id');
       viewArr[key] = $(element).html();
        
    });
        
    Data.keyViews = viewArr;
    
}





