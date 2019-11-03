// This function is for the process after clicking the submit button
function addRecord()
{
	if (validateYear() && validateInput())
	{
	// Transfer text box values to variables
	var fullName = $("#fullName").val();
	var major = $("#major").val();
	var startYear = $("#startYear").val();

	// This converts the year to a number
	var startYearInt = parseInt(startYear);

	// This sets the time to display (gets hours and minutes)
	var time = setTime(time);

	// Concatenate the filled-up fields with the time
	$("#records").append("<p>" + time + " - " + fullName + ", " + major + ", " + startYearInt + "</p>");

	// Clear the current input
	$("#fullName").val("");
	$("#major").val("");
	$("#startYear").val("");
	};
};


// This function is for the checking if the year entered is valid
function validateYear()
{	
	// Temporary variable to serve as a flag if the year is invalid
	var tmp = true;

	// Transfer text box values to variables
	var startYear = $("#startYear").val();
	var startYearInt = parseInt(startYear);

	if (startYearInt < 2000)
	{
		tmp = false;
		var alertYear = "Incorrect Year: " + startYearInt;
		window.alert(alertYear);
	};

	return tmp;
};


// This function is for the checking if the fields are blank
function validateInput()
{	
	// Temporary variable to serve as a flag if the fields are blank
	var checker = true;

	// Transfer text box values to variables
	var fullName = $("#fullName").val();
	var major = $("#major").val();
	var startYear = $("#startYear").val();

	// Checks if the fields are blank to display an alert box
	if ( fullName == "" ||
		 major == "" ||
		 startYear == "" )
	{
		checker = false;
		var alertInput = "Please fill-up all parameters.";
		window.alert(alertInput);
	};

	return checker;
};


// This function is to get current time and date
function setTime()
{
	var myDate = new Date();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();

	// This is to add a leading zero if the current hour is below 10 (single digit)
	if (hour < 10)
	{
    	hour = "0" + hour;
  	};

	// This is to add a leading zero if the current minute is below 10 (single digit)
  	if (minute < 10)
	{
    	minute = "0" + minute;
  	};

  	// Combine the hour and minute into one variable
  	var time = hour + ":" + minute;

  	// Return the final time
  	return time;
};