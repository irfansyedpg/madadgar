

$(document).ready(function () {


    GetData();


 

  
    $("#form_submit").submit(function ( event) {
        event.preventDefault();
       

        let dptName = document.forms["form_submit"]["deptName"].value;
        let cntNumber = document.forms["form_submit"]["link"].value;
        if (dptName == "") {
       //     alert("Please Enter Department Name");


            toastr["error"]("Enter Value", 'Please Enter Department!');

            return false;
        }
       
        if (cntNumber == "") {
            toastr["error"]("Enter Value", 'Please Enter Department Link!');
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
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/InsertQuickLinksAction";


    }

    if (Flag == true) {
        url = "InsertQuickLinksAction";
    }




    $.ajax({
        type: "POST",
        url: "InsertQuickLinksAction",



        data: { Department: $("#deptName").val(), Link: $("#link").val() },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

                toastr["error"]('Unable to Insert', 'Something went wrong');


            }
            else {

                toastr["success"]("Data Inserted", 'Data Inserted Succefully!');

                $("#deptName").val("");
                $("#link").val("");
                var result = response.result;

                  PopulateTable(result);

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
        url = "Home/GetQuickLinksAction";


    }

    if (Flag == true) {
        url = "GetQuickLinksAction";
    }

    $.ajax({
        type: "POST",
        url: "GetQuickLinksAction",

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
            "<td>" + result[i].link +

            "<td> " + result[i].pk +

            "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='View(this)'><button class='btn btn-primary badge'data-toggle='tooltip' type='button'>Delete</button></a></td>"

        var tbody = document.querySelector("#tbl_data tbody");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr);
        index++;


    }
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
        url = "Home/DeleteQuickLinksAction";


    }

    if (Flag == true) {
        url = "DeleteQuickLinksAction";
    }

    $.ajax({
        type: "POST",
        url: "DeleteQuickLinksAction",


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









