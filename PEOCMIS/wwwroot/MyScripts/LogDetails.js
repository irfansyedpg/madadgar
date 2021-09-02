$(document).ready(function () {
  
   
    FnLoadData();

});






function GetRDImages(logidd) {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");


    if (Flag == false) {
        url = "Home/GetRDImgagesAction";


    }

    if (Flag == true) {
        url = "GetRDImgagesAction";
    }

    $.ajax({
        type: "POST",
        url: "GetRDImgagesAction",

        data: { logid: logidd},

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

    $("#tbl_image").DataTable().destroy();
    $("#tbl_image tbody").empty();

    var index = 1;
    for (var i = 0; i < result.length; i++) {

        var rows = "";
        console.log(result[i].department);

        rows += "<td style='font-weight: bold'>" + "Picture "+ index +

          
            "<td><img id='timg' name='timg'  src='/pdmamadadgar/ReportDisaterImages/" + result[i].path + "'  style='background-size: contain; background-repeat: no-repeat; background-position: center; max-width:550px;  max-height:300px;'/>"


        +
            "</td>"

        var tbody = document.querySelector("#tbl_image tbody");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr);
        index++;


    }
}






var table;
function FnLoadData() {
    var url;

    var Pageurl = window.location.href;
    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/GetLogsDetailAction";


    }

    if (Flag == true) {
        url = "GetLogsDetailAction";
    }



    let logId = localStorage.getItem("logId");
    $.ajax({
        type: "POST",
        url: "GetLogsDetailAction",
        datatype: "json",
        data: { logId: logId,},
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
                      result[i].varname +
                    "<td>" + result[i].response +
                    "</td>"


                var tbody = document.querySelector("#tbl_data tbody");
                var tr = document.createElement("tr");
                tr.innerHTML = rows;
                tbody.appendChild(tr);
                index++;


            }


            /// for table info



            var rows = "";

            rows += "<td  style='font-weight: bold'>" + result[0].name +
                //AppPK, b.Response, b.VarName, b.Section 
             
             
                "<td>" + result[0].contactNo +
                "<td>" + result[0].district +
                "<td>" + result[0].datee +
                "<td>" + result[0].section +
                "<td>" + result[0].disasterType +
                "<td>" + result[0].lat +", "+ result[0].long +
                "</td>"

            var tbody = document.querySelector("#tbl_info tbody");
            var tr = document.createElement("tr");
            tr.innerHTML = rows;
            tbody.appendChild(tr);


            if (result[0].section == "Report Disaster") {
                GetRDImages(logId);

            }


            //


           // $('#tbl_data').DataTable();

           // $('#cgrid').show();
            table = $("#tbl_data").DataTable({

                "iDisplayLength": 25,
                dom: "Bfrtip",
                buttons: [
                    {
                        extend: "copy",
                        className: "btn-sm"
                    },
                    {
                        extend: "csv",
                        className: "btn-sm"
                    },
                    {
                        extend: "excel",
                        className: "btn-sm"
                    },
                    {
                        extend: "pdfHtml5",
                        className: "btn-sm"
                    },
                    {
                        extend: "print",
                        className: "btn-sm"
                    },
                ],

            });



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
        center: new google.maps.LatLng(locations[0].lat, locations[0].long),
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