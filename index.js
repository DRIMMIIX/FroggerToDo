function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  // Create a <p> element for the text
  var paragraph = document.createElement("h5");
  paragraph.textContent = inputValue;

  // Generate a unique number string for the ID
  var randomNumber = Math.floor(Math.random() * 1000000);
  li.id = "element_" + randomNumber;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("UL").appendChild(li);

    li.appendChild(paragraph);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var subheader = document.createElement("p");
    subheader.contentEditable = true; // Allow editing the subheader content
    subheader.innerText = "click to edit";
    li.appendChild(subheader);

    var okButton = document.createElement("button");
    okButton.className = "ok-button";
    okButton.innerText = "OK";
    li.appendChild(okButton);

    li.addEventListener("click", function() {
      displayCard(li.id);
    });

    close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}
