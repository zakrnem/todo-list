//Checks if item exist in storage, if it doesn't we add the custom values to the storage
if (!localStorage.getItem("bgcolor")) {
    populateStorage();
  } else {
    setStyles();
  }
//If it exist we run a function to set the styles stored

function setStyles() {
    const currentColor = localStorage.getItem("bgcolor");
    const currentFont = localStorage.getItem("font");
    const currentImage = localStorage.getItem("image");
  
    document.getElementById("bgcolor").value = currentColor;
    document.getElementById("font").value = currentFont;
    document.getElementById("image").value = currentImage;
  
    htmlElem.style.backgroundColor = `#${currentColor}`;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute("src", currentImage);
  }
  
  function populateStorage() {
    localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
    localStorage.setItem("font", document.getElementById("font").value);
    localStorage.setItem("image", document.getElementById("image").value);
  
    setStyles();
  }
  