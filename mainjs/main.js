$(document).ready(function () {

  $('select').on('change', function (event) {
    event.preventDefault();
    $('header').css('height, auto');
    $('.headlines').empty();
    // $('#loading-gif').show();

    var selection = $('.drop-down option:selected').filter(':selected').val();

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selection + '.json';
    url += '?' + $.param({
      'api-key': "64943540dcf7458ebe1ff9f5ae1860f9"
    });

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (data) {
      var newsImages = data.results.filter(function (value) {
        return (value.multimedia.length);
      }).slice(0, 12);

      $.each(newsImages, function (index, value) {
        $('.headlines').append('<a href="' + value.url + '" id="' + index + '"><p>' + value.abstract + '</p></a>');
        $('#' + index).css('background-image', 'url(' + value.multimedia[4].url + ')');
      });
    }).fail(function () {
      $('.headlines').append('<p"Sorry, something went wrong."</p>');
      // }
      //     $('.loading-gif').hide();
    });
  });
});
