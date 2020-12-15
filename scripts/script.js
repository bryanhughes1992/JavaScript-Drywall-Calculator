window.onload = function() {
    //Capture the entire drywall form as a variable
    var drywallForm = document.forms.drywallForm;
    //Capture the submit button as a variable
    var submitBtn = document.getElementById('submitBtn');
    //Capture the hidden content as a variable
    var hiddenContent = document.getElementById('hiddenContent');
    //Hide the hidden content
    hiddenContent.style.display = "none";
    //Listen for the drywall form being submitted
    submitBtn.addEventListener("click", calculateSheets);

    function calculateSheets(wallLength, wallWidth) {
        //If the wall's length is
        if (wallLength < "0" || wallLength === "" || wallLength === null) {
            alert("Please input a positive number");
            focus(wallLength);
            return;
        } else if (wallWidth === "" || wallWidth < "0" || wallWidth === null) {
            alert("test");
            return;
        } else {
            drywallForm.style.display = "none";
            hiddenContent.style.display = "flex";
            hiddenContent.style.flexFlow = "column";
            //Set the first parameter the value of the length input field
            wallLength = document.drywallForm.wallLength.value;
            //Set the second parameter to the value of the width input field
            wallWidth = document.drywallForm.wallWidth.value;
            //The wall's square footage is equal to this
            var wallSquareFootage = wallLength * wallWidth;
            //The amount of sheets needed is equal the wall's square footage divided by the square footage of the drywall sheet
            var amountOfSheets = wallSquareFootage / 32;
            //Set a hardcoded string to the display this message
            var sheetString = `You need ${amountOfSheets} sheets for this wall! `;
            hiddenContent.innerText = sheetString;
            return;
        }
    }
};
