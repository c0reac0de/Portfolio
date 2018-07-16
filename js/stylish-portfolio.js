

jQuery(document).ready(function($) {
	
  $('.lightbox_trigger').click(function(e) {
    e.preventDefault();
    var image_href = $(this).attr("href");
    if ($('#lightbox').length > 0) { // #lightbox exists
	
      //insert img tag with clicked link's href as src value
      $('#content').html('<img src="' + image_href + '" />');
         
      //show lightbox window - you can use a transition here if you want, i.e. .show('fast')
      $('#lightbox').show();
    } else{ //#lightbox does not exist 
	
      //create HTML markup for lightbox window
      var lightbox = 
      '<div id="lightbox">' +
        '<p>Click to close</p>' +
        '<div id="content">' + //insert clicked link's href into img src
          '<img src="' + image_href +'" />' +
        '</div>' +	
      '</div>';
        
      //insert lightbox HTML into page
      $('#wrapper').append(lightbox);
    }      
  });
  //click anywhere on page to close lightbox
  $('#lightbox').click('click', function() {
    $('#lightbox').hide();
  });

});
