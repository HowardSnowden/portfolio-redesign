
$(document).ready(function(){
    
    init();
    pageNum=0;
    if(checkPage()=="prepare"){
    max=2;
    }
    if(checkPage()=="checking"){
    max=3;
    }
    min=0;
    
    if (checkPage()=="enter"){
        $("#placeholder").hide();
    }
    
});

var pageNum = 0;
function checkPage(){
 var page = $("title").attr('id');
 if (page==0){
     return "prepare";
 }
if (page==1){
    return "checking";
}
if (page==2){
    return "enter";
}
}

function init(){
    $("#placeholder").attr('src','content/'+checkPage()+'/img'+pageNum+'.jpg');
    $("#text").load('content/'+checkPage()+'/text'+pageNum+'.txt');
}

function forward(){
    if (pageNum !=max){
    pageNum++;
    $("#placeholder").attr('src','content/'+checkPage()+'/img'+pageNum+'.jpg');
    $("#text").load('content/'+checkPage()+'/text'+pageNum+'.txt');
    }
    
    if (pageNum==max){
        $(".lesson").css("display", "block");
    }
    
}

function back(){
    if (pageNum !=min){
     pageNum--;
    $("#placeholder").attr('src','content/'+checkPage()+'/img'+pageNum+'.jpg');
    $("#text").load('content/'+checkPage()+'/text'+pageNum+'.txt');
    }
    
}

