$(document).ready(function () {
  
   
    FnLoadData();

});


var table;
function FnLoadData() {
    var url;

    var Pageurl = window.location.href;
    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/ActionLogdetails";


    }

    if (Flag == true) {
        url = "ActionLogdetails";
    }

    let logId = localStorage.getItem("logId");
    $.ajax({
        type: "POST",
        url: "ActionLogdetails",
        datatype: "json",
        data: { logId: logId,},
        dataType: "JSON",
        success: function (result) {




            //console.log('result', result)

            InitMap(result)

            $("#tbl_data").DataTable().destroy();
            $("#tbl_data tbody").empty();

            var index = 1;

            for (var i = 0; i < result.length; i++) {

                var rows = "";

                rows += "<td  style='font-weight: bold'>" + index +
                    //AppPK, b.Response, b.VarName, b.Section 
                    "<td>" + result[i].appPK +
                    "<td>" + result[i].response +
                    "<td>" + result[i].varName +
                    "<td> " + result[i].section +
                    "</td>"


                var tbody = document.querySelector("#tbl_data tbody");
                var tr = document.createElement("tr");
                tr.innerHTML = rows;
                tbody.appendChild(tr);
                index++;


            }
             $('#tableFIR').DataTable();

            $('#cgrid').show();
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
    console.log(locations)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(locations[0].lat, locations[0].long),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //console.log(map);
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        console.log(locations[i].lat);
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