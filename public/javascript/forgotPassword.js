// function to send email to anyone's email that is entered in the text box
function forgotPassword(){
    var userEmail = document.getElementById("forgotEmail").value;
	
    Email.send({
        SecureToken : "5ab59dd6-af1a-4b50-993f-b05307e6b009",
        Host : "smtp.gmail.com",
        Username : "wong.ryan5091@gmail.com",
        Password : "grazous123456",
        To : userEmail,
        From : "wong.ryan5091@gmail.com",
        Subject : "Reset password",
        Body : "Reset your password"+
                "<a href='http://127.0.0.1:8080/resetPassword.html'>Click here</a>"
    }).then(
        message => alert(message)
    );
}