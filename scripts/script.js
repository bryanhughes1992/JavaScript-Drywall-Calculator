window.onload = function() {
    //Capture the entire drywall form as a variable
    var drywallForm = document.forms.drywallForm;
    //Capture the submit button as a variable
    var submitBtn = document.getElementById('submitBtn');
    //Caputre the hidden content as a variable
    var hiddenContent = document.getElementById('hiddenContent');
    //Hide the hidden content
    hiddenContent.display = "none";
    //Listen for a click event on the submit button
    submitBtn.addEventListener("click", hideForm);
    //Listen for the drywall form being submitted
    submitBtn.addEventListener("click", calculateSheets);


    function hideForm() {
        drywallForm.style.display = "none";


    }

    function calculateSheets() {
        var length = drywallForm.wallLength;
        var width = drywallForm.wallWidth;




        if (wallLength < 0 || wallLength === null) {
            return;
        } else if (wallWidth < 0 || wallWidth === null) {
            return;
        } else {
            var wallSquareFootage = wallLength * wallWidth;
            var amountOfSheets = wallSquareFootage / 32;
            var textBox = document.getElementById('amountOfSheets');
            var sheetString = `You need ${amountOfSheets} sheets for this wall! `;
            textBox.innerHTML = sheetString;
            hiddenContent.style.display = "flex";
            return;
        }
    }
    calculateSheets(length, width);
};
