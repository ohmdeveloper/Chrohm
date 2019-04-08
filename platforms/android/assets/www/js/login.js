function validate() {
			
            var username = $("#username").val();
            var password = $("#pwd").val();
            if ( username == "") {
                alert("Please enter the username.");
                return false;
            }
            if ( password == "") {
                alert("Please enter the password.");
                return false;
            }
if (username == "gbs" && password == "gbs"){
            alert('Login successful');
}
       
}