window.onload = function() {

    //Capture the entire drywall form as a variable
    var drywallForm = document.forms[0];

    //Capture the submit button as a variable
    var submitBtn = document.getElementById('submitBtn');

    //Capture the hidden content as a variable
    var hiddenContent = document.getElementById('hiddenContent');

    //Hide the hidden content
    hiddenContent.style.display = "none";

    //Listen for the calculate button being clicked
    submitBtn.addEventListener("click", calculateSheets);

    //Listen for the calculate button being clicked


    function calculateSheets(calcLength, calcWidth) {

        //Set the first parameter the value of the length input field
        calcLength = drywallForm.wallLength.value;

        Math.ceil(parseFloat(calcLength));

        //Set the second parameter to the value of the width input field
        calcWidth = drywallForm.wallWidth.value;

        Math.ceil(parseFloat(calcWidth));

        //If the wall's length is
        if (calcLength <= 0 || calcLength === null || calcLength === undefined || calcLength === "" || isNaN(calcLength)) {

            alert("Please input a valid length");

            focus(drywallForm.wallLength);

            return;

        } else if ( calcWidth <= 0 || calcWidth === null || calcWidth === undefined || isNaN(calcWidth)) {

            alert("Please enter a valid width");

            focus(drywallForm.wallWidth);

            drywallForm.wallWidth.style.backgroundColor = "pink";

            return;

        } else {

            var wallSqFootage = calcLength * calcWidth;

            var amountOfSheets = wallSqFootage / 32;

            var sheetString = `${amountOfSheets} sheets of drywall are needed for this wall`;

            drywallForm.style.display = "none";

            hiddenContent.style.display = "flex";

            hiddenContent.style.flexFlow = "column wrap";

            hiddenContent.innerHTML = sheetString;


            return;
        }

    }
};
