$(document).ready(function () {

  // Event
  $('select').on('change', function (event) {
    event.preventDefault();

    $('#loading0image').hide();

    var selection = $('.drop-down option:selected').filter(':selected').val();
    console.log(selection);

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selection + '.json';
    url += '?' + $.param({
      'api-key': "64943540dcf7458ebe1ff9f5ae1860f9"
    });
    console.log(url);

    $.ajax({
      url: url,
      method: 'GET',
    })
      .done(function (data) {
        console.log(data);

        var news_images = data.results.filter(function (value) {
          return (value.multimedia.length);
        }).slice(0, 12);

        console.log(news_images)

        $.each(news_images, function (index, value) {
          $('.headlines').append('<a href="' + value.url + '" id="' + index + '"><p>' + value.abstract + '</p></a>');
          $('#' + index).css('background-image', 'url(' + value.multimedia[4].url + ')');
        });

        $('#loading0image').hide();

      });
  });
});

// write filter to grab headlines and image

    // }).fail(function(err) {
    //   throw err;