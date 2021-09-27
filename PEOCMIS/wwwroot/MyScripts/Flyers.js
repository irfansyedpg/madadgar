

$(document).ready(function () {



    GetData();

    $("#form_submit").submit(function (event) {
        event.preventDefault();




        let name = document.forms["form_submit"]["name"].value;

  
   

        console.log(document.getElementById("img").src)




        if (document.getElementById("img").src < 1) {
            toastr["error"]("Enter Value", 'Please Upload Image');

            return false;
        }



        if (name == "") {
               


            toastr["error"]("Enter Value", 'Please Enter Title!');

            return false;
        }

        let Typee = document.forms["form_submit"]["Typee"].value;
    
        if (Typee == "Select Type") {
            toastr["error"]("Enter Value", 'Please Select Type');
            return false;
        }

       
    


       InsertData();

        return false;
    });


});




function InsertData() {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");


    if (Flag == false) {
        url = "Home/InsertFlyersAction";


    }

    if (Flag == true) {
        url = "InsertFlyersAction";
    }




    var fileUpload = $("#uploadfile").get(0);
    var files = fileUpload.files;
    var formData = new FormData();

    formData.append("ImageFile", files[0]);
    formData.append("Title", $("#name").val() );
    formData.append("Typee", $("#Typee").val() );


    

    


    console.log(formData);


    $.ajax({
        type: "POST",
        url: url,







        data: formData,

        data: formData,
        processData: false,
        contentType: false,
        type: "POST",
        success: function (response) {
            console.log(response);
            if (response.message == "error") {
                toastr["error"]( response.message);
            }
            else {
                toastr["success"]("Data Inserted Succefully", 'Success!');

             
                $("#name").val("");
           //     $("#Detail").html('some_value');
         
            
     
                $("#uploadfile").val("");

                GetData();
         
      


        

            }

        },


    });


}

function previewimg(url) {
    var ext = $('#uploadfile').val().split('.').pop().toLowerCase();
    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
  
        toastr["error"]("Only Picture Formate allowed");
        return false;
    }

    else {
        var file_size = $('#uploadfile')[0].files[0].size;
        if (file_size > 1048576) {


            toastr["error"]("Picture Size should be less then 1 MB");


            return false;
        }
        else if (url.files && url.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#img").attr('src', e.target.result);
            }
            reader.readAsDataURL(url.files[0]);
        }

    }

}





function GetData() {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");


    if (Flag == false) {
        url = "Home/GetFlyersAction";


    }

    if (Flag == true) {
        url = "GetFlyersAction";
    }

    $.ajax({
        type: "POST",
        url: "GetFlyersAction",

        data: {},

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

            "<td>" + result[i].title +

            "<td>" + result[i].typee +
      
            "<td><img id='timg' name='timg'  src='/pdmamadadgar/Flyers/" + result[i].imageName+"'  style='background-size: contain; background-repeat: no-repeat; background-position: center; max-width:350px;  max-height:200px;'/>"



           + "<td>" + result[i].pk +

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

    $('#tbl_data td').css('white-space', 'initial');
}




function View(ele) {
    let logId = $(ele).closest("tr").find("td:eq(4)").text();


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
        url = "Home/DeleteFlyersAction";


    }

    if (Flag == true) {
        url = "DeleteFlyersAction";
    }

    $.ajax({
        type: "POST",
        url: "DeleteFlyersAction",


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

