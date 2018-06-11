//alert("test");
function loaders(){
  fadelisteners();
  alexlisteners();
  buttonlisteners();
}

function fadelisteners(){
  $(".btn-client .fa-plus-square").click(function(){
    $("button.client").fadeToggle("slow");
  });
  $(".btn-mm .fa-plus-square").click(function(){
    $("button.mm").fadeToggle("slow");
  });
  $(".btn-msg .fa-plus-square").click(function(){
    $("button.msg").fadeToggle("slow");
  });
  $(".btn-server .fa-plus-square").click(function(){
    $("button.server").fadeToggle("slow");
  });
  $(".btn-unix .fa-plus-square").click(function(){
    $("button.unix").fadeToggle("slow");
  });
  
}

function alexlisteners(){
  $("#alex[type='text']").keypress(function(event){
    //console.trace();
    if(event.which === 13){
      var alexinput = $(this).val();
      var alexstatic = "https://alexandria.commvault.com/#!/search;searchTerms=";
      var alexurl = alexstatic + alexinput;
      window.open(alexurl);
      $(this).val("");
    }
  });
 }

function buttonlisteners(){
  $(".cvlogs").click(function(){
    var copyText = $(this);
    var cvid = $(copyText).attr("title");
    var dummyContent = cvid;
    var dummy = $('<input>').val(dummyContent).appendTo('body').select();
    document.execCommand('copy');
    // $('input').css('display','none');
    // $('#alex').fadeToggle();
    // $('#cvgetlog').fadeToggle();
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
      };


function openExplorer(test){
  var objecttxt =  test;
  console.log(objecttxt);
  window.open(objecttxt);
};  

// function copyToClipboard(val){
//     //var dummy = document.createElement("input");
//     //document.body.appendChild(dummy);
//     //$(dummy).css('display','none');
//     //dummy.setAttribute("id", "dummy_id");
//     document.getElementById("dummy_id").value=val;
//     dummy.select();
//     document.execCommand("copy");
//     // document.body.removeChild(dummy);

//};
