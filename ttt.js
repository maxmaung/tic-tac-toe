//Ensure the DOM is ready
$(function () {
  var turn = 0;

  $('.circle').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);


    if (self.text() === '') {
      if (turn % 2 === 0) {
        self.text('X');
      }
      else {
        self.text('O');
      }
      turn++;
    }
    else {
      alert("Invalid Entry");
    }
  });
// row 1 2 3
  $('td').on('click', function(){

    if($('#1').text() === $('#2').text() && $('#1').text() === $('#3').text() && $('#1').text().length > 0 ) {

      if ($('#1').text() === 'X'){
        alert("User X Won");
      }
      else {
        alert("User O Won")
      }


    };

  });

// row 4 5 6
  $('td').on('click', function(){

    if($('#4').text() === $('#5').text() && $('#4').text() === $('#6').text() && $('#4').text().length > 0 ) {

      if ($('#4').text() === 'X'){
        alert("User X Won");
      }
      else {
        alert("User O Won")
      }

    };

  });

// row 7,8,9

$('td').on('click', function(){

  if($('#7').text() === $('#8').text() && $('#7').text() === $('#9').text() && $('#7').text().length > 0 ) {

    if ($('#7').text() === 'X'){
      alert("User X Won");
    }
    else {
      alert("User O Won")
    }

  };

});


//column 1 4 7

$('td').on('click', function(){

  if($('#1').text() === $('#4').text() && $('#1').text() === $('#7').text() && $('#1').text().length > 0 ) {

    if ($('#1').text() === 'X'){
      alert("User X Won");
    }
    else {
      alert("User O Won")
    }

  };

});

//column 2 5 8

$('td').on('click', function(){

  if($('#2').text() === $('#5').text() && $('#2').text() === $('#8').text() && $('#2').text().length > 0 ) {

    if ($('#2').text() === 'X'){
      alert("User X Won");
    }
    else {
      alert("User O Won")
    }

  };

});


//column 3 6 9

$('td').on('click', function(){

  if($('#3').text() === $('#6').text() && $('#3').text() === $('#9').text() && $('#3').text().length > 0 ) {

    if ($('#3').text() === 'X'){
      alert("User X Won");
    }
    else {
      alert("User O Won")
    }

  };

});

// diagonal 1 5 9

$('td').on('click', function(){

  if($('#1').text() === $('#5').text() && $('#1').text() === $('#9').text() && $('#1').text().length > 0 ) {

    if ($('#1').text() === 'X'){
      alert("User X Won");
    }
    else {
      alert("User O Won")
    }

  };

});

// diagonal 3 5 7

$('td').on('click', function(){

  if($('#3').text() === $('#5').text() && $('#3').text() === $('#7').text() && $('#3').text().length > 0 ) {

    if ($('#3').text() === 'X'){
      alert("User X Won");
    }
    else {
      alert("User O Won")
    }

  };

});

// reset

$('#reset').on('click', function() {
  $('td').empty()


});







});

$(function () {



});
