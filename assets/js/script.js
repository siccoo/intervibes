// // $('#myModal').on('shown.bs.modal', function () {
// //     $('#myModal').focus()
// //   })


// // Declaring an on click function with <a> class
// $(document).on("click", ".openImage", function() {
//   // Then get data from data-id
//   var myModal = $(this).data('assets/images/bcg3.jpg');
//   // After this passdata to img src on body
//   $(".modal-body, #myModal").attr("assets/images/bcg3.jpg", myModal);
// });

$(window).load(function() {
  $('img').on('click', function() {
    var src = $(this).attr('src');
    $('#model-img').attr('src', src);
    $('#imgId').modal('show');
  });
});