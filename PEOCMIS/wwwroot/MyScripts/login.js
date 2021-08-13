$(document).ready(function () {

    $("#form_login_id").submit(function ( event) {
        event.preventDefault();



        let uname = document.forms["form_login_id"]["uname"].value;
        let pwd = document.forms["form_login_id"]["pwd"].value;


        if (uname == "") {
          

            toastr["error"]("Enter Value", 'Please Enter Your Email!');

            return false;
        }

        if (pwd == "") {

            toastr["error"]("Enter Value", 'Please Enter Your Password!');

            return false;
        }



        Login();
        return false;
    });


});
function Login() {

    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/SigInAction";


    }

    if (Flag == true) {
        url = "SigInAction";
    }

    $.ajax({
        type: "POST",
        url: "SigInAction",

        data: { Email: $("#uname").val(), Password: $("#pwd").val() },

        dataType: "JSON",
        success: function (response) {
            
            if (response.message == 'error') {

                toastr["error"]('Incorrect Username/password', 'Login Failed!');
            }
            else {
                
                toastr["success"]("Valid User", 'Login Success!');
                localStorage.setItem("userName", response.result.userName);
                localStorage.setItem("ContactNo", response.result.contactNo);
                //localStorage.setItem("logId", $("#uname").val());

                if (Flag == false) {
                    window.location.href = "Home/Index";
                }
                else {
                    window.location.href = "Index";
                }
            }

        },
        error: function (status, error) {

        },

    });

}
function Result(text) {

    if (text == "Record Already Exists" || text == "Incorrect" || text == "Error") {
        ErrMessage(text);
    }
    else {
        SuccMessage(text);
    }
}

//function Result(text) {

//    if (text == "Record Already Exists" || text == "Incorrect" || text == "Error") {
//        ErrMessage(text);
//    }
//    else {
//        SuccMessage(text);
//    }
//}


