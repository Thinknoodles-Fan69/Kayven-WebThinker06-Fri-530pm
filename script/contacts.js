
let validate = () => {
let inputfirstName = document.getElementById("firstname");
console.log("I got this " + inputfirstName.value);

if (inputfirstName.value.length > 0) {
	inputfirstName.classList = "form-control is-valid";
	document.getElementById("firstnameError").classList = "text-danger d-none";
} else {
	inputfirstName.classList = "form-control is-invalid";
	document.getElementById("firstnameError").classList = "text-danger";
}

let inputemail = document.getElementById("email");
console.log("I got this " + inputemail.value);

if (inputemail.value.length > 0) {
	inputemail.classList = "form-control is-valid";
	document.getElementById("emailError").classList = "text-danger d-none";
} else {
	inputemail.classList = "form-control is-invalid";
	document.getElementById("emailError").classList = "text-danger";
}




if (document.getElementsByClassName("is-invalid").length > 0) {
	console.log("Please check for any errors. This form will be deleted by 30 minutes if the error is not cleared")
	} else {
	console.log("Form is submitted! Please hold on for a reply from a online and vacant helper")
	}
}	
				
				
			
			  
			 