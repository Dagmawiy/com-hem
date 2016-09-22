$.getJSON( "json/input.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      
      $.each( val, function( val, markers) {
        items.push('<section class="column"><img src="'+ markers.image +'"><article><h2>' + markers.title + '</h2><hr/><span> '+ markers.date +'</span><p>'+ markers.teaser + '</p><a href="#" class="boutton"> Läsmer </a></article></section>')
      });
    });
    $( "<section/>", {
      "id": "news-page",
      "class": "row clearfix",
      html: items.join( "" )
    }).appendTo( "#wrapper" );
});



