$.getJSON("data.json", function( data ){
  $.each(data, function(index, value){
    var i = index + 1;
    $("#tab-title" + i).html(value.title);
    $("#tab" + i).html(value.content);
    $("#card-title-" + i).html(value.title);
    $("#card-content-" + i).html(value.content);
  });
});
