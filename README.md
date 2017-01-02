<html>
<head>
Practical Exam, Client Side (React)
use npm start
</head>
<body>

Create a single page application (SPA), using react JS, which will serve as a "lobby" page.
The layout should be a plane HTML, with a text saying "welcome to the Netomedia", a login button.
By pressing the "login" button, a modal popup should open (in front of the SPA/lobby page),

This popup will have a close (X) button, and a form with the following fields:
•	"Name" – edit box
•	"Amount" - edit box
•	"Currency" - Combo box with 2 options – "Euro" and "Dollar"
•	"Submit" - button.

By pressing the submit button, need to validate that:
1.	The input fields are not empty
2.	At least one option is selected in the combo box.
3.	The "Name" field is a string, with max length of 15 characters, only: [English characters, space, "-"] are allowed.
4.	The "Amount" field is an integer, with max length of 15 characters, only numbers are allowed.

After submitting a validated form:
•	The popup should close,
•	The lobby text should change to: "welcome back {Name}, your balance is: {Amount} {CurrencySign}"
o	{Name} - the value in the "Name" input field
o	{Amount} - the value in the "Amount" input field
o	{CurrencySign} - a sign (€ or $) mapped to the currency combo box
•	The button text should now say: "change balance".

Pressing the "change balance" button - a modal popup should open.
This popup will have a close (X) button, and a form with the following fields:
•	"Amount" - an integer, with max length of 15 characters, only numbers are allowed.
•	A submit button.

By pressing the submit button, need to validate that:
•	The popup is closed
•	The balance is changed to the new "Amount" value.

Good luck!
</body>
</html>