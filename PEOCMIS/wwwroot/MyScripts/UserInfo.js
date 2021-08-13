

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
       

        rows += "<td  style='font-weight: bold'>" + index +

            "<td>" + result[i].name +
            "<td>" + result[i].contactNo +

            "<td> " + result[i].email +
            "<td> " + result[i].district +
            "<td> " + result[i].tehsil +
            "<td> " + result[i].address +
            "<td> " + result[i].type +
            "<td> " + result[i].dateRegistration +

            "</td>"

         //   "< td class='text-center align-middle' > <div class='btn-group align-top'><a onclick='View(this)'><button class='btn btn-primary badge' data-toggle='tooltip' type='button'>Delete</button></a></td>"

        var tbody = document.querySelector("#tbl_data tbody");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr);
        index++;


    }
}










