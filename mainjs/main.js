$(document).ready(function(){

// Event
  $('select').on('change', function() {

    var url = "https://api.nytimes.com/svc/topstories/v2/sports.json";
    
    url += '?' + $.param({
      'api-key': "64943540dcf7458ebe1ff9f5ae1860f9"
    });
      console.log(url);

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      console.log(data);

      $.each(data.results, function( index, value ){
      console.log(value.multimedia !== undefined); 
      console.log('hiiiii');
            // write filter to grab headlines and image
    
    }).fail(function(err) {
      throw err;
      });
    });
  });
});