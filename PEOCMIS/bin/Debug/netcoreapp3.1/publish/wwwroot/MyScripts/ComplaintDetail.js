$(document).ready(function () {
  
   
    FnLoadData();



    $("#form_submit").submit(function (event) {
        event.preventDefault();


        let actionby = document.forms["form_submit"]["actionby"].value;
        let detail = document.forms["form_submit"]["detail"].value;
        if (actionby == "") {
            //     alert("Please Enter Department Name");


            toastr["error"]("Enter Value", 'Please Enter User Name!');

            return false;
        }

        if (detail == "") {
            toastr["error"]("Enter Value", 'Please Enter Detail!');
            return false;
        }

        InsertData();

        return false;
    });

});










var table;
function FnLoadData() {
    var url;

    var Pageurl = window.location.href;
    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/GetComplaintDetailAction";


    }

    if (Flag == true) {
        url = "GetComplaintDetailAction";
    }



    let ComPK = localStorage.getItem("ComPK");

 

    $.ajax({
        type: "POST",
        url: "GetComplaintDetailAction",
        datatype: "json",
        data: { CompID: ComPK,},
        dataType: "JSON",
        success: function (result) {




            //console.log('result', result)

            InitMap(result)
            console.log(result);

            $("#tbl_data").DataTable().destroy();
            $("#tbl_data tbody").empty();

            $("#tbl_info").DataTable().destroy();
            $("#tbl_info tbody").empty();


            var index = 1;

            for (var i = 0; i < result.length; i++) {




                var rows = "";

                rows += "<td>" + index


                    +"<td  style='font-weight: bold'>" + 




                    //AppPK, b.Response, b.VarName, b.Section 
                    result[i].actionBy +
                    "<td>" + result[i].actionTaken + 
                    "<td>" + result[i].dated +
                    "</td>"


                var tbody = document.querySelector("#tbl_data tbody");
                var tr = document.createElement("tr");
                tr.innerHTML = rows;
                tbody.appendChild(tr);
                index++;


            }


            document.getElementById('cmpdetail').innerHTML = result[0].detail


            $('#tbl_data td').css('white-space', 'initial');

 

        

            /// for table info

     

            var rows = "";

            rows += 
                //AppPK, b.Response, b.VarName, b.Section 



               
         
             
                "<td>" + result[0].title +
           
                "<td>" + result[0].name +
                "<td>" + result[0].contactNo +
                "<td>" + result[0].district +

                "<td>" + result[0].tehsil +
                "<td>" + result[0].address +
                "<td>" + result[0].type +
                "<td>" + result[0].dateRegistration +
         
            
                "</td>"

            var tbody = document.querySelector("#tbl_info tbody");
            var tr = document.createElement("tr");
            tr.innerHTML = rows;
            tbody.appendChild(tr);


   
      

            


            //


           // $('#tbl_data').DataTable();

           // $('#cgrid').show();
            $('#tbl_data').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'csv', 'excel', 'pdf'
                ]
            });





            /// Images Table 


            $("#tbl_image").DataTable().destroy();
            $("#tbl_image tbody").empty();

            var index = 1;
            for (var i = 0; i < result.length && i<2; i++) {

                var rows = "";
             

                rows += "<td style='font-weight: bold'>" + "Picture " + index +


                    "<td><img id='timg' name='timg'  src='/pdmamadadgar/ReportDisaterImages/" + result[i].pics + "'  style='background-size: contain; background-repeat: no-repeat; background-position: center; max-width:550px;  max-height:300px;'/>"


                    +
                    "</td>"

                var tbody = document.querySelector("#tbl_image tbody");
                var tr = document.createElement("tr");
                tr.innerHTML = rows;
                tbody.appendChild(tr);
                index++;


            }

            $('#tbl_image td').css('white-space', 'initial');



            TableManageButtons = function () {
                "use strict";
                return {
                    init: function () {
                        handleDataTableButtons();
                    }
                };
            }
                ();

            table.on('search.dt', function () {
                var data = table.rows({ filter: 'applied' }).data();
                summaryFilter(data);
            });
            table.on('order.dt', function () {
                var data = table.rows({ filter: 'applied' }).data();
                summaryFilter(data);
            });
            summaryFilter(table.rows().data());

        },
        error: function (status, error) {

        },

    });



}
//var locations = [
//    ['Raj Ghat', 28.648608, 77.250925, 1],
//    ['Purana Qila', 28.618174, 77.242686, 2],
//    ['Red Fort', 28.663973, 77.241656, 3],
//    ['India Gate', 28.620585, 77.228609, 4],
//    ['Jantar Mantar', 28.636219, 77.213846, 5],
//    ['Akshardham', 28.622658, 77.277704, 6]
//];


function InitMap(locations) {




    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(locations[0].latt, locations[0].longg),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //console.log(map);
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
     
        marker = new google.maps.Marker({

            position: new google.maps.LatLng(locations[i].lat, locations[i].long),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
//    var param = [];
//    var proc = '[users_view]';
//    Selector(param, proc).then(function (result) {

//        //$res = JSON.parse(result);

//    });

//}
function Result(res) {

}

function View(ele) {
    let logId = $(ele).closest("tr").find("td:eq(1)").text();
    localStorage.setItem("logId", logId);
    window.location.href = "LogDetails";
}

function summaryFilter(data) {

}


function InsertData() {

    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/InsertActionDetailAction";


    }

    if (Flag == true) {
        url = "InsertActionDetailAction";
    }




    $.ajax({
        type: "POST",
        url: "InsertActionDetailAction",



        data: { ComPK: localStorage.getItem("ComPK"), ActionBy: $("#actionby").val(), ActionTaken: $("#detail").val() },

        dataType: "JSON",
        success: function (response) {

            if (response.message == 'error') {

                toastr["error"]('Unable to Insert', 'Something went wrong');


            }
            else {

                toastr["success"]("Data Inserted", 'Data Inserted Succefully!');

                $("#deptName").val("");
                $("#link").val("");
              

                FnLoadData();

            }

        },
        error: function (status, error) {

        },

    });


}