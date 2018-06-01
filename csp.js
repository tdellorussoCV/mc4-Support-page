//alert("test");

function loader()
{
  listeners();
  dropdown();
}


function listeners(){
$(".btn-client .fa-plus-square").click(function(){
  $("a.client").fadeToggle("slow");
  });
$(".btn-mm .fa-plus-square").click(function(){
  $("a.mm").fadeToggle("slow");
  });
$(".btn-msg .fa-plus-square").click(function(){
   $("a.msg").fadeToggle("slow");
  });
$(".btn-server .fa-plus-square").click(function(){
   $("a.server").fadeToggle("slow");
      });
$(".btn-unix .fa-plus-square").click(function(){
   $("a.unix").fadeToggle("slow");
  });
}


function dropdown(mySel)
      {
      var myWin, myVal, myId, myUrl;
      myVal = mySel.options[mySel.selectedIndex].value;
      myId = myForm.CCID.value;
      myUrl = myVal + myId;
      if(myVal)
         {
        window.open(myUrl)
         }
      return false;
      }