$(document).ready(function() {
  function headSelected() {
    var fselector = $("#file-selector");
    var selected = fselector.find(":selected");
    if (selected.size() == 0) {
      $('#preview-head').html('not available');
    } else {
      $.ajax({
        type: "GET",
        url: "/head.jsp",
        data: {
          file: selected.val(),
          lines: 10,
        },
        success: function(response) {
          $('#preview-head').html(response.trim());
        }, error: function(xhr, error) {
          $('#preview-head').html('not available');
          alert(xhr.responseText);
        }
    });
    }
    
  }

  $("#file-selector").change(headSelected);
/*
  $('#run-pig').submit(function(e) {
    e.preventDefault();
    var form = $(this);
    var action = form.attr('action');
    var data = form.serialize();
    $.ajax({
      type: "POST",
      url: action,
      data: data,
      success: function(response) { alert('success');},
      error: function(response) {
        $('#preview-head').html(response.trim());
      }
    });
  });
  */
  // For initial case
  headSelected();
});
