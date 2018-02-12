function doToElementsInArray(array, callback) {
  array.forEach(callback);
}



function changeCompletely(array) {

  array.prototype.forEach(function(value) {
    value += ' updated!';
  });

}

// Add your changeCompletely() function here:
