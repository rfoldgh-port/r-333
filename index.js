


var returnData;
var dataIndex;
$('.search-input').submit(function(){
  event.preventDefault();
  getGif();

});

$('.more-results').click(function(){

  for(var i = dataIndex; i < (dataIndex + 5); i++){
      var gif = returnData.data[i];
      $('.search-results').append(`<div class='gif-box gif'><img src='${gif.images.fixed_height.url}'/></div>`);
  }
  dataIndex += 5;
});

function getGif() {

        var searchTerm = $('.new-search-input').val();

        var endpoint = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`;
      // console.log(endpoint);

           $.ajax({
             url:endpoint,
             type:"GET",
             contentType:"application/json; charset=utf-8",
             dataType:"json",
             success: function(data){
                returnData = data;
                $('.search-results-container').html('');
                for(var i = 0; i < 5; i++){
                    var gif = data.data[i];
                    $('.search-results').append(`<div class='gif-box gif'><img src='${gif.images.fixed_height.url}'/></div>`);
                }
                $('.more-results').show();
                dataIndex = 5;


             },error:function(err){
                console.log(err);
             }
        });

    }
