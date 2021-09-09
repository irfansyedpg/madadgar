

$(document).ready(function () {


    GetData(0);

    $("#UserType").change(function () {
        var vall = this.value;


        GetData(vall);
    });

});

function GetData(typee) {


  
    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
  

    if (Flag == false) {
        url = "Home/GetUserInfoAction";


    }

    if (Flag == true) {
        url = "GetUserInfoAction";
    }

    $.ajax({
        type: "POST",
        url: "GetUserInfoAction",

        data: { type: typee  },

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

            action =    "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='Aprrove(this)'><button class='btn btn-primary badge'data-toggle='tooltip' type='button'>Approve</button></a></td>"
        }
        else {


            action = "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='Disaprove(this)'><button class='btn btn-success badge'data-toggle='tooltip' type='button'>Approved</button></a></td>"

        }
       

        rows += "<td  style='font-weight: bold'>" + index +

            "<td>" + result[i].name +
            "<td>" + result[i].contactNo +

            "<td> " + result[i].email +
            "<td> " + result[i].district +
            "<td> " + result[i].tehsil +
            "<td> " + result[i].address +
            "<td> " + result[i].type +
            "<td> " + result[i].dateRegistration +
            "<td> " + result[i].latt + ", " + result[i].longg+
            "<td> " + result[i].pk +

            action

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









