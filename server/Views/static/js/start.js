// Add rules to input type file upload
$('input[name^="fileupload"]').each(function() {
  $(this).rules("add", {
    required: true,
    accept: "image/jpeg, image/pjpeg"
  });
});

// Post Bill
// $.post($SCRIPT_ROOT + "/api/drive/upload/bill", data => {
//   console.log("BILL", data);
// });
//
// //Post EOB
// $.post($SCRIPT_ROOT + "/api/drive/upload/eob", data => {
//   console.log("EOB", data);
// });
