// Add your doToElementsInArray() function here:
// function doToElementsInArray(callback, array) {
//
//   array.forEach(callback(value) {
//
//   })
//
// }

function changeCompletely(array) {

  array.prototype.forEach(function(value) {
    value += ' updated!';
  });

}

// Add your changeCompletely() function here:
