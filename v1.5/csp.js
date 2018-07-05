// csp.js Javascript for the MC$ Support Page Setup.
// Design by Thomas Dellorusso
// tdellorusso@commvault.com 
// @2018
// Based from original design by Ted Polny. 172.19.21.10/advanced/

// Initial Load
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

function loaders(){
  fadelisteners();
  alexlisteners();
  buttonlisteners();
  englisteners();
  doclisteners();
  binglisteners();
  goolisteners();
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

function goolisteners(){
  $("#gooSrchInput[type='text']").keypress(function(event){
    //console.trace();
    if(event.which === 13){
      var gooinput = $(this).val();
      var goostatic = "https://www.google.com/search?safe=active&q=";
      var goourl = goostatic + gooinput;
      window.open(goourl);
      $(this).val("");
    }
  });
 }

 function binglisteners(){
  $("#bingSrchInput[type='text']").keypress(function(event){
    //console.trace();
    if(event.which === 13){
      var binginput = $(this).val();
      var bingstatic = "https://www2.bing.com/search?q=";
      var bingurl = bingstatic + binginput;
      window.open(bingurl);
      $(this).val("");
    }
  });
 }

function doclisteners(){
  $("#docSrchInput[type='text']").keypress(function(event){
    //console.trace();
    if(event.which === 13){
      var docinput = $(this).val();
      var docstatic = "http://documentation.commvault.com/commvault/v11/search.jsp?q=";
      var docurl = docstatic + docinput;
      window.open(docurl);
      $(this).val("");
    }
  });
 }

function englisteners(){
  $("#engweb[type='text']").keypress(function(event){
    //console.trace();
    if(event.which === 13){
      var engwebinput = $(this).val();
      var engwebstatic = "https://engweb.commvault.com/search/?searchQuery=";
      var engwebappend = "&sourceType=all"
      var engweburl = engwebstatic + engwebinput + engwebappend; 
      window.open(engweburl);
      $(this).val("");
    }
  });
 }
function buttonlisteners(){
  $(".cvlogs").click(function(){
    var copyText = $(this);
    var cvid = $(copyText).attr("title");
    var dummyContent = cvid;
    var dummy = $('<input id="dummy_id">').val(dummyContent).appendTo('body').select();
    document.execCommand('copy');
    $( "input" ).remove( "#dummy_id" );
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

function celogfiles(){
  $("#CELOGS").click(function(){
    var ccid = $("#CCID").val();
    var copyText = $(this).attr("title");
    var logurl = copyText + ccid;
    var dummy = $('<input id="dummy_id">').val(logurl).appendTo('body').select();
    document.execCommand('copy');
    $( "input" ).remove( "#dummy_id" );
    return false;
  });
}

function englogfiles(){
  $("#engLogs").click(function(){
    var ccid = $("#CCID").val();
    var copyText = $(this).attr("title");
    var logurl = copyText + ccid;
    var dummy = $('<input id="dummy_id">').val(logurl).appendTo('body').select();
    document.execCommand('copy');
    $( "input" ).remove( "#dummy_id" );
    return false;
  });
}
function ftplogfiles(){
  $("#QNFTP").click(function(){
    var ccid = $("#CCID").val();
    var copyText = $(this).attr("title");
    var logurl = copyText + ccid;
    var dummy = $('<input id="dummy_id">').val(logurl).appendTo('body').select();
    document.execCommand('copy');
    $( "input" ).remove( "#dummy_id" );
    return false;
  });

function openExplorer(test){
  var objecttxt =  test;
  console.log(objecttxt);
  window.open(objecttxt);
};  
}

function clfbutton(){
    $("button.logfiles").fadeToggle("slow");
    $("input.logfiles").fadeToggle("slow");
}
function labbutton(){
    $("button.labsys").fadeToggle("slow");
    $("input.labsys").fadeToggle("slow");
}



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
