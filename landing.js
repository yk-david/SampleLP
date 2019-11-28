$(document).ready(function() {
  $(document).on('mouseenter', '.ulli', function() {
    $(this).addClass('hover');
  }).on('mouseout', '.ulli', function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $(document).on('mouseenter', '#help', function() {
    $(this).addClass('hover2');
  }).on('mouseout', '#help', function() {
    $(this).removeClass('hover2');
  });
});