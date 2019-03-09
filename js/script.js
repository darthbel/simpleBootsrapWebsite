
// function to create the gift card
function createCard() {
  // elements receive the values of fields in the form
  var bgImg = document.createElement("img");
  var name = document.getElementById("cardName").value;
  var message = document.getElementById("cardMessage").value;

  //validation for empty values
  if (name == "" || name == null) {
    alert("Name empty or invalid.")
    return;
  }

  if (message == "" || message == null) {
    alert("Message empty or invalid.")
  }

  if(document.getElementById("cardBG1").checked) {
    var option = 1;
  } else if(document.getElementById("cardBG2").checked) {
    var option = 2;
  } else if(document.getElementById("cardBG3").checked) {
    var option = 3;
  } else {
    alert("No card background option selected.");
    return;
  }

  switch(option) {
    case 1:
      bgImg.src = "./img/card1.jpg";
      break;
    case 2:
      bgImg.src = "./img/card2.jpg";
      break;
    case 3:
      bgImg.src = "./img/card3.jpg";
      break;
  }

  // assigning the new values for the existing fields on html file
  document.getElementById("createdBgImgCard").src = bgImg.src;
  document.getElementById("createdCardName").innerHTML = "From: " + name;
  document.getElementById("createdCardMessage").innerHTML = message;

  // after new values are assignes, the content is visible
  document.getElementById("createdCard").style.display = "block";

}