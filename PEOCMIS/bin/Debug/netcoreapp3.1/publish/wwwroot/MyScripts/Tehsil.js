

$(document).ready(function () {



    GetDistrict();

    GetData();

 

  
    $("#form_submit").submit(function ( event) {
        event.preventDefault();
       


        let tehsilname = document.forms["form_submit"]["tehsilname"].value;
        let dist = document.forms["form_submit"]["Districts"].value;
    
    
    
        if (tehsilname == "") {
       //     alert("Please Enter Department Name");


            toastr["error"]("Enter Value", 'Please Enter Tehsil!');

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
        url = "Home/InsertTehsillAction";


    }

    if (Flag == true) {
        url = "InsertTehsillAction";
    }




    $.ajax({
        type: "POST",
        url: "InsertTehsillAction",



        data: { tehsil: $("#tehsilname").val(), distid: $('#Districts').val()},

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

                toastr["error"]('Unable to Insert', 'Something went wrong');


            }
            else {

                toastr["success"]("Data Inserted", 'Data Inserted Succefully!');

                $("#tehsilname").val("");
            
          
                var result = response.result;

                GetData();

            }

        },
        error: function (status, error) {

        },

    });


}

function GetData() {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
  

    if (Flag == false) {
        url = "Home/GetTehsilAction";


    }

    if (Flag == true) {
        url = "GetTehsilAction";
    }

    $.ajax({
        type: "POST",
        url: "GetTehsilAction",

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
        console.log(result);

        rows += "<td  style='font-weight: bold'>" + index +

            "<td>" + result[i].district +
            "<td>" + result[i].tehsil +
    

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
    let logId = $(ele).closest("tr").find("td:eq(3)").text();


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
        url = "Home/DeletTehsilAction";


    }

    if (Flag == true) {
        url = "DeletTehsilAction";
    }

    $.ajax({
        type: "POST",
        url: "DeletTehsilAction",


        data: { PK: pk },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

            
                toastr["error"]("Unable to Delete", 'Some thing is wrong!');
            }
            else {


                var result = response.result;

                toastr["success"]("Deleted", 'Data Delete Succefully');


                GetData();

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



