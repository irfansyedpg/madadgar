﻿

$(document).ready(function () {



    GetDistrict();

    GetData(0);

 

  
    $("#form_submit").submit(function ( event) {
        event.preventDefault();
       

        let centername = document.forms["form_submit"]["centername"].value;
        let lat = document.forms["form_submit"]["lat"].value;
        let long = document.forms["form_submit"]["long"].value;
        let dist = document.forms["form_submit"]["Districts"].value;
    
    
    
        if (centername == "") {
       //     alert("Please Enter Department Name");


            toastr["error"]("Enter Value", 'Please Enter Centername!');

            return false;
        }
       
        if (lat == "") {
            toastr["error"]("Enter Value", 'Please Enter GPS Latitude');
            return false;
        }


        if (long == "") {
            toastr["error"]("Enter Value", 'Please Enter GPS Longitude');
            return false;
        }

        if (dist == "District") {
            toastr["error"]("Enter Value", 'Please Select District');
            return false;
        }
        InsertData();

        return false;
    });




});
function InsertData() {

    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
   

    if (Flag == false) {
        url = "Home/InsertEvacuationCenterAction";


    }

    if (Flag == true) {
        url = "InsertEvacuationCenterAction";
    }




    $.ajax({
        type: "POST",
        url: "InsertEvacuationCenterAction",



        data: { CenterName: $("#centername").val(), Latitude: $("#lat").val(), Longitude: $("#long").val(), Districtid: $('#Districts').val()},

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

                toastr["error"]('Unable to Insert', 'Something went wrong');


            }
            else {

                toastr["success"]("Data Inserted", 'Data Inserted Succefully!');

                $("#centername").val("");
                $("#lat").val("");
                $("#long").val("");
          
                var result = response.result;

                  PopulateTable(result);

            }

        },
        error: function (status, error) {

        },

    });


}

function GetData(Type) {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
  

    if (Flag == false) {
        url = "Home/GetEvacuationCenterAction";


    }

    if (Flag == true) {
        url = "GetEvacuationCenterAction";
    }

    $.ajax({
        type: "POST",
        url: "GetEvacuationCenterAction",

        data: { Type: Type },

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
        console.log(result);



        var action = "";
        if (result[i].status == 0) {

            action = "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='Disabled(this)'><button class='btn btn-primary badge'data-toggle='tooltip' type='button'>Dormant</button></a></td>"
        }
        else {


            action = "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='Enabled(this)'><button class='btn btn-success badge'data-toggle='tooltip' type='button'>Active</button></a></td>"

        }

        rows += "<td  style='font-weight: bold'>" + index +

            "<td>" + result[i].district +
            "<td>" + result[i].centerName +
            "<td>" + result[i].latitude +
            "<td>" + result[i].longitude +
           

            "<td> " + result[i].pk +

            "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='View(this)'><button class='btn btn-primary badge'data-toggle='tooltip' type='button'>Delete</button></a></td>"
            +  action

        var tbody = document.querySelector("#tbl_data tbody");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr);
        index++;


    }

    $('#tbl_data td').css('white-space', 'initial');

    $('#tbl_data').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf'
        ]
    });

}
function View(ele) {
    let logId = $(ele).closest("tr").find("td:eq(5)").text();


    var r = confirm("ARE YOU SURE TO DELETE!  \n\nPress OK to Delete");
    if (r == true) {

        DeleteData(logId);
       
    } else {


    }
}



function DeleteData(pk) {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/DeleteEvacuationCentersAction";


    }

    if (Flag == true) {
        url = "DeleteEvacuationCentersAction";
    }

    $.ajax({
        type: "POST",
        url: "DeleteEvacuationCentersAction",


        data: { PK: pk },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

            
                toastr["error"]("Unable to Delete", 'Some thing is wrong!');
            }
            else {


                var result = response.result;

                toastr["success"]("Deleted", 'Data Delete Succefully');


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
            }

        },
        error: function (status, error) {

        },

    });

}



function Disabled(ele) {
    let logId = $(ele).closest("tr").find("td:eq(5)").text();



    var r = confirm("Are You Sure you want to Enable this Site !  \n\nPress OK to Change");
    if (r == true) {

        UpdateEvacuationCenterAction(logId, 1);

    } else {


    }
}

function Enabled(ele) {
    let logId = $(ele).closest("tr").find("td:eq(5)").text();
    


    var r = confirm("Are You Sure you want to Disable this Site !  \n\nPress OK to Change");

    if (r == true) {

        UpdateEvacuationCenterAction(logId, 0);

    } else {


    }
}


function UpdateEvacuationCenterAction(pk, status) {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/UpdateEvacuationCenterAction";


    }

    if (Flag == true) {
        url = "UpdateEvacuationCenterAction";
    }

    $.ajax({
        type: "POST",
        url: "UpdateEvacuationCenterAction",


        data: { PK: pk, Status: status },

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


