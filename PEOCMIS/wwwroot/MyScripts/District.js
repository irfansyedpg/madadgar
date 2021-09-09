

$(document).ready(function () {



    GetDistrict();

  
    $("#form_submit").submit(function ( event) {
        event.preventDefault();
       

        let distname = document.forms["form_submit"]["distname"].value;
    
        if (distname == "") {
       //     alert("Please Enter Department Name");


            toastr["error"]("Enter Value", 'Please Enter Department!');

            return false;
        }
       

        InsertDistrict();

        return false;
    });




});
function InsertDistrict() {

    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/InsertDistrictAction";


    }

    if (Flag == true) {
        url = "InsertDistrictAction";
    }




    $.ajax({
        type: "POST",
        url: "InsertDistrictAction",

        

        data: { distt: $("#distname").val() },

        dataType: "JSON",
        success: function (response) {
            
            if (response.message == 'error') {

               toastr["error"]('Unable to Insert', 'Something went wrong');

              
            }
            else {
                
                toastr["success"]("Data Inserted", 'Data Inserted Succefully!');

                $("#distname").val("");
             

                GetDistrict();

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

            "<td>" + result[i].district +
            "<td> " + result[i].pk +

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
    let logId = $(ele).closest("tr").find("td:eq(2)").text();



    var r = confirm("ARE YOU SURE TO DELETE!  \n\nPress OK to Delete");
    if (r == true) {

        DeleteDistrict(logId);
       
    } else {


    }
}



function DeleteDistrict(pk) {





    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/DeleteDistrictAction";


    }

    if (Flag == true) {
        url = "DeleteDistrictAction";
    }

    $.ajax({
        type: "POST",
        url: "DeleteDistrictAction",


        data: { PK: pk },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

            
                toastr["error"]("Unable to Delete", 'Some thing is wrong!');
            }
            else {


                var result = response.result;

                toastr["success"]("Deleted", 'Data Delete Succefully');


                GetDistrict();

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


                $("#tbl_data").DataTable().destroy();
                $("#tbl_data tbody").empty();

                var index = 1;
                for (var i = 0; i < result.length; i++) {

                    var rows = "";
                  

                    rows += "<td  style='font-weight: bold'>" + index +

                        "<td>" + result[i].district +
                        "<td>" + result[i].pk +

                    
                        "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='View(this)'><button class='btn btn-primary badge'data-toggle='tooltip' type='button'>Delete</button></a></td>"

                    var tbody = document.querySelector("#tbl_data tbody");
                    var tr = document.createElement("tr");
                    tr.innerHTML = rows;
                    tbody.appendChild(tr);
                    index++;


                }
            }

        },
        error: function (status, error) {

        },

    });

}






