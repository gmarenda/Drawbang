var trying_to_save = false;

function popupCenter(url, width, height, name) {
  var left = (screen.width/2)-(width/2);
  var top = (screen.height/2)-(height/2);
  return window.open(url, name, "menubar=no,toolbar=no,status=no,width="+width+",height="+height+",toolbar=no,left="+left+",top="+top);
}

function reload(user_header) {
  $("#auth .right").html(user_header);
  $("#flash_wrapper").html("");
  trying_to_save && performUpload();
}

function flash(html) {
  trying_to_save = false;
  $("#flash_wrapper").html(html);
}

$(document).ready(function() {
  $("a.popup").click(function(e) {
    popupCenter($(this).attr("href"), $(this).attr("data-width"), $(this).attr("data-height"), "authPopup");
    e.stopPropagation();
    return false;
  });
});