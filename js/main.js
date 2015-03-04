$(document).ready(function(){
    $('body,html').scrollTop(0);

});



// ****** sliders
$('#bpSlider').bxSlider({
      autoControls: true,
      infiniteLoop: false,
      hideControlOnEnd: true
    });
  $('#dsSlider').bxSlider({
      autoControls: true,
      infiniteLoop: false,
      hideControlOnEnd: true
    });
  $('#patSlider').bxSlider({
      autoControls: true,
      infiniteLoop: false,
      hideControlOnEnd: true
    });
  $('#tcoSlider').bxSlider({
      autoControls: true,
      infiniteLoop: false,
      hideControlOnEnd: true
    });
  $('#appSlider').bxSlider({
      autoControls: true,
      infiniteLoop: false,
      hideControlOnEnd: true
    });

// ********  F  U  N  C  T  I  O  N  :  scrollToAnchor ****************
//performs an slow motion scroll to Anchor
var linkToAnchor = [];
var myAnchor = [];

function scrollToAnchor (linkToAnchor,myAnchor) {
  linkToAnchor.click( function(){
     $('html,body').animate( {scrollTop: myAnchor.offset().top} , 1000 );
  });

};


//CALL FUNCTIONS
scrollToAnchor ($('#goWorks'),$("a[name=dsSite]"))
scrollToAnchor ($('#goPat'),$("a[name=patSite]"))
scrollToAnchor ($('#goTco'),$("a[name=tcoSite]"))
scrollToAnchor ($('#goBp'),$("a[name=bpSite]"))




scrollToAnchor ($('#goApp'),$("a[name=bpApp]"))
scrollToAnchor ($('#goFooter'),$("a[name=myFooter]"))



//CUSTOM: for Link to footer
var goAbout = $('#goAbout');
var goCup = $('#goCup');
var goBio = $('#goBio');
var anchorFooter = $ ("a[name=myFooter]")

//CALL FUNCTIONS
scrollToAnchor (goAbout,anchorFooter)
scrollToAnchor (goCup,anchorFooter)
scrollToAnchor (goBio,anchorFooter)





