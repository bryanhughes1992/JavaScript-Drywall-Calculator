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

    function calculateSheets(calcLength, calcWidth) {

        //Set the first parameter the value of the length input field
        calcLength = drywallForm.wallLength.value;

        //Parse the length to a float
        parseFloat(calcLength);

        //Set the second parameter to the value of the width input field
        calcWidth = drywallForm.wallWidth.value;

        //Parse the width to a float
        parseFloat(calcWidth);

        //If these conditions fail, return and focus on the proper field.
        if (calcLength <= 0 || calcLength === null || calcLength === undefined || calcLength === "" || isNaN(calcLength)) {

            //Alert the user to input a valid number
            alert("Please input a valid length");

            //Focus on the length input field
            focus(drywallForm.wallLength);

            //Change the background color to pink
            drywallForm.wallLength.style.backgroundColor = "pink";

            //Stop the form from sending
            return;
        //If these conditions also fail,
        } else if ( calcWidth <= 0 || calcWidth === null || calcWidth === undefined || isNaN(calcWidth)) {
            //Alert the user to input a valid width
            alert("Please enter a valid width");

            //Focus on the width input field
            focus(drywallForm.wallWidth);

            //Set the width input field background color to pink
            drywallForm.wallWidth.style.backgroundColor = "pink";

            //Stop the form from sending
            return;

        //If it passes those conditions,
        } else {
            //Set background color to confirm calculation
            drywallForm.wallLength.style.backgroundColor = "chartreuse";

            //Set background color to confirm calculation
            drywallForm.wallWidth.style.backgroundColor = "chartreuse";

            //Calculate the square footage of the wall
            var wallSqFootage = (calcLength * calcWidth);
            console.log(wallSqFootage);

            //Calculate the amount of sheets needed
            var amountOfSheets = wallSqFootage / 32;
            console.log(amountOfSheets);

            //Hard coded string with amount of sheets needed
            var sheetString = `${Math.ceil(amountOfSheets)} sheets of drywall are needed for this wall`;

            //Display the hidden <div></div>
            hiddenContent.style.display = "inline";
            //Set the div's innerHTML to the sheetString
            hiddenContent.innerText = sheetString;
            console.log(sheetString);

            submitBtn.innerHTML = "Refresh";

            submitBtn.addEventListener("click", refreshPage);

            function refreshPage() {
                setTimeout("location.reload(true);",0);
            }

            //Stop the form from submitting
            return;
        }
    }
};
