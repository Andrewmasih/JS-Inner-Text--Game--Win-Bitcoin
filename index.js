/* properties of objects on the DOM, it allows us to retrieve or set properties of the DOM objects, retrieve or set properties such as 'innerText' and 'style' */


function decrementHP() {
  // Get element with the id of hp
  let el = document.getElementById("hp");
  // Set currentCount to the text of the element
  let currentCount = el.innerText;

  if (currentCount == 0) {
    alert("You've won!!");
  } else {
    // Decrement current count and set it as the new text in our element
    el.innerText = --currentCount;
  }
}
