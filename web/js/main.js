(() => {
  console.log('fired!');

  // select elements here
  let beerlid = document.querySelector("#beerlid");

  //funtions go in the middle
  function logID() {
    console.log(this.id);
  }

  // event hadling
  beerlid.addEventListener("click", logID);

})();
