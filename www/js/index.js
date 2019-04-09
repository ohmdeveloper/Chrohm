
$(document).ready(function(){
    $(".btn-submit").click(function(){

var username = $("#username").val();
            var password = $("#pwd").val();
            if ( username == "") {
                alert("Please enter the username.");
                return false;
            }
alert (" uname ")
            if ( password == "") {
                alert("Please enter the password.");
                return false;
            }
if (username == "gbs" && password == "gbs"){
            alert('Login successfull');
}
}
});
