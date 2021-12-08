

$(document).ready(function () {


   // GetData(2);
    GetDistrict();
    $("#Districts").change(function () {
        var sel = document.getElementById("Districts");
        var text = sel.options[sel.selectedIndex].text;


       

        GetData(text);
    });





    $("#form_submit").submit(function (event) {
        event.preventDefault();




        let message = document.getElementById("message").value;

        let dist = document.forms["form_submit"]["Districts"].value;



        if (dist == "District") {
            toastr["error"]("Enter Value", 'Please Select District');
            return false;
        }

    

        if (message.length < 2) {
            toastr["error"]("Enter Value", 'Please Enter message Detail!');

            return false;
        }


        var sel = document.getElementById("Districts");

        var distt = sel.options[sel.selectedIndex].text;
        distt = distt.replace(/ /g, "_");

  

        PushNotificaitonAndorid(distt, message);

        return false;
    });


});

function GetData(district) {


  
    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
  

    if (Flag == false) {
        url = "Home/GetUserInfoUserEngAction";


    }

    if (Flag == true) {
        url = "GetUserInfoUserEngAction";
    }

    $.ajax({
        type: "POST",
        url: "GetUserInfoUserEngAction",

        data: { district: district },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

                   toastr["error"]('Unable to Get Data', 'ERROR');

          
            }
            else {


                var result = response.result;

                PopulateTable(result);

            }

        },
        error: function (status, error) {

        },

    });

}
function PopulateTable(result) {

    $("#tbl_data").DataTable().destroy();
    $("#tbl_data tbody").empty();


    console.log(result);
    var index = 1;
    for (var i = 0; i < result.length; i++) {

        var rows = "";

        var action = "";
        if (result[i].status == 0) {

            action = "";

        }

        if (result[i].status == 1) {

            action = "Active";

        }
        else {


            action = "NotActive";
          

        }
       

        rows += "<td  style='font-weight: bold'>" + index +

            "<td> " + result[i].statusCheckedDate +
            "<td> " + action +
            "<td>" + result[i].name +
            "<td>" + result[i].contactNo +

            "<td> " + result[i].email +
            "<td> " + result[i].district +
            "<td> " + result[i].tehsil +
            "<td> " + result[i].address +
            "<td> " + result[i].type +
            "<td> " + result[i].dateRegistration +
            "<td> " + result[i].latt + ", " + result[i].longg +
            "<td> " + result[i].pk +  "</td>";

         //   "< td class='text-center align-middle' > <div class='btn-group align-top'><a onclick='View(this)'><button class='btn btn-primary badge' data-toggle='tooltip' type='button'>Delete</button></a></td>"

        var tbody = document.querySelector("#tbl_data tbody");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr);
        index++;


    }

    $('#tbl_data').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf'
        ]
    });
}



function Aprrove(ele) {
    let logId = $(ele).closest("tr").find("td:eq(10)").text();

  

    var r = confirm("Are You Sure to Change the User Status!  \n\nPress OK to Change");
    if (r == true) {

        UpdateUserInfo(logId,1);

    } else {


    }
}

function Disaprove(ele) {
    let logId = $(ele).closest("tr").find("td:eq(10)").text();



    var r = confirm("Are You Sure to Change the User Status!  \n\nPress OK to Change");
    if (r == true) {

        UpdateUserInfo(logId,0);

    } else {


    }
}

function UpdateUserInfo(pk,status) {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/UpdateUserInfoAction";


    }

    if (Flag == true) {
        url = "UpdateUserInfoAction";
    }

    $.ajax({
        type: "POST",
        url: "UpdateUserInfoAction",


        data: { UserId: pk, Status: status },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {


                toastr["error"]("Unable to Change Status", 'Some thing is wrong!');
            }
            else {


                var result = response.result;

                toastr["success"]("Updated", 'Updated Succefully');


                GetData(0);

            }

        },
        error: function (status, error) {

        },

    });

}


function GetDistrict() {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");


    if (Flag == false) {
        url = "Home/GetDistrictsAction";


    }

    if (Flag == true) {
        url = "GetDistrictsAction";
    }

    $.ajax({
        type: "POST",
        url: "GetDistrictsAction",

        data: {},

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {



                alert('error');
            }
            else {


                var result = response.result;


                for (var i = 0; i < result.length; i++) {




                    $('#Districts')
                        .append($('<option>', { value: result[i].pk })
                            .text(result[i].district));
                }

                $('#Districts')
                    .append($('<option>', { value: "All" })
                        .text("All"));
            }

        },
        error: function (status, error) {

        },

    });


    // firbase triger  





}




function PushNotificaitonAndorid(district, message) {


   // alert('/topics/' + district)
  
    var message = {
        to: '/topics/' + district,
        collapse_key: 'type_a',
        notification: {
            title: 'PDMA Volunteers Activation',
            body: message
        }
    }



    $.ajax({
        type: "POST",
        url: "https://fcm.googleapis.com/fcm/send",
        contentType: 'application/json',
        processData: false,
        dataType: "JSON",

        headers: {
            Authorization: 'key=AAAANd_f4bQ:APA91bFwAO1pJpw7Uj85Sa_NwBYP_XEn7FJyXg3E0I1JfBJYWiomf2l2gRNGDFiYBhhRiDlLva_A-cl6oFaHH77z2pFMoo7VjP4r1JdeX_CmjNuBp3y57WeE6YQgAzg2GcGiVnI06Kd3'

        },

        data: JSON.stringify(message),

        success: function (response) {


            toastr["success"]("Sent", 'Message broadcasted Successfully!');

            $("#message").val("");
        


        }

    });

}






