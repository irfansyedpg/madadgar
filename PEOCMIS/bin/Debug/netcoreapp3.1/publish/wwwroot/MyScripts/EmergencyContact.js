


$(document).ready(function () {


    GetEmergency();

    GetDistrict();

  
    $("#form_submit").submit(function ( event) {
        event.preventDefault();
       

        let dptName = document.forms["form_submit"]["deptName"].value;
        let cntNumber = document.forms["form_submit"]["cntNumber"].value;

        let orderNumber = document.forms["form_submit"]["orderNumber"].value;

        if (dptName == "") {
       //     alert("Please Enter Department Name");


            toastr["error"]("Enter Value", 'Please Enter Department!');

            return false;
        }
       
        if (cntNumber == "") {
            toastr["error"]("Enter Value", 'Please Enter Department Contact Number!');
            return false;
        }

        if (orderNumber == "") {
            toastr["error"]("Enter Value", 'Please Enter Order Number!');
            return false;
        }

        InsertEmergency();

        return false;
    });






});
function InsertEmergency() {

    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/InsertEmergencyContactAction";


    }

    if (Flag == true) {
        url = "InsertEmergencyContactAction";
    }

    var distid = $('#Districts').val();


    $.ajax({
        type: "POST",
        url: "InsertEmergencyContactAction",

        

        data: { Department: $("#deptName").val(), Contact: $("#cntNumber").val(), Districtid: distid, orderNumber: $("#orderNumber").val() },

        dataType: "JSON",
        success: function (response) {
            
            if (response.message == 'error') {

               toastr["error"]('Unable to Insert', 'Something went wrong');

              
            }
            else {
                
                toastr["success"]("Data Inserted", 'Data Inserted Succefully!');

                $("#deptName").val("");
                $("#cntNumber").val(""); 
                var result = response.result;
             
                PopulateTable(result);

            }

        },
        error: function (status, error) {

        },

    });

}

function GetEmergency() {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
  

    if (Flag == false) {
        url = "Home/GetEmergencyContactAction";


    }

    if (Flag == true) {
        url = "GetEmergencyContactAction";
    }

    $.ajax({
        type: "POST",
        url: "GetEmergencyContactAction",

        data: {  },

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

    var index = 1;
    for (var i = 0; i < result.length; i++) {

        var rows = "";
        console.log(result[i].department);

        rows += "<td  style='font-weight: bold'>" + index +

            "<td>" + result[i].department +
            "<td>" + result[i].contact +
            "<td>" + result[i].district +
            "<td> " + result[i].pk +

            "<td> " + result[i].orderr +



            "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='View(this)'><button class='btn btn-primary badge'data-toggle='tooltip' type='button'>Delete</button></a></td>"

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
function View(ele) {
    let logId = $(ele).closest("tr").find("td:eq(4)").text();


    var r = confirm("ARE YOU SURE TO DELETE!  \n\nPress OK to Delete");
    if (r == true) {

        DeleteEmergency(logId);
       
    } else {


    }
}



function DeleteEmergency(pk) {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/DeleteEmergencyContactAction";


    }

    if (Flag == true) {
        url = "DeleteEmergencyContactAction";
    }

    $.ajax({
        type: "POST",
        url: "DeleteEmergencyContactAction",


        data: { PK: pk },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

            
                toastr["error"]("Unable to Delete", 'Some thing is wrong!');
            }
            else {


                var result = response.result;

                toastr["success"]("Deleted", 'Data Delete Succefully');


                GetEmergency();

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


                console.log(result);
                for (var i = 0; i < result.length; i++) {

                 
               

                    $('#Districts')
                        .append($('<option>', { value: result[i].pk })
                            .text(result[i].district)); 
            }
            }

        },
        error: function (status, error) {

        },

    });

}






