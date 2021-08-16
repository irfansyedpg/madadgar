$(document).ready(function () {






    FnLoadData("0", "0", "0");
    GetDistrict();






    $("#Districts").change(function () {


        


        onccclick();

 
    }); 

    $("#distype").change(function () {
       

        onccclick();


        
    });


    $("#section").change(function () {
        

        onccclick();
     
    });



 
});


function onccclick() {


    var district = $("#Districts").val();
    var distype = $('#distype option:selected').val();
    var section = $("#section").val();


    if (district == 'District' || district == null) {
        district = "0";
    }

    if (distype == 'Types Of Disaster') {
        distype = "0";
    }
    if (section == 'Section' || section == null) {
        section = "0";

    }

    if (section == 'DNA') {
        distype = "0";
      


    }

    FnLoadData(district, distype, section);




}
var username = localStorage.getItem("userName");
var ContactNo = localStorage.getItem("ContactNo");

var table;
function FnLoadData(district, disastertype, section) {

    var url;

    var Pageurl = window.location.href;
    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/MultiList";


    }

    if (Flag == true) {
        url = "MultiList";
    }

    $("#tbl_data").DataTable().destroy();
    $("#tbl_data tbody").empty();
    let logId = 0;
        $.ajax({
            type: "POST",
            url: "MultiList",
            data: { district: district, disastertype: disastertype, section: section},
            dataType: "JSON",
            success: function (result) {




               

            InitMap(result)
           

            var index = 1;

            for (var i = 0; i < result.length; i++) {

                var rows = "";

                rows += "<td  style='font-weight: bold'>" + index +

                    "<td>" + result[i].logPK +
                    "<td>" + result[i].name +
                    "<td>" + result[i].contactNo +
                    "<td>" + result[i].district +
                    "<td>" + result[i].section +
                    "<td>" + result[i].disasterType +

                    "<td>" + result[i].datee +

                    "<td>" + result[i].lat +
                    "<td>" + result[i].long +
                  
                    "</td><td class='text-center align-middle'><div class='btn-group align-top'><a onclick='View(this)'><button class='btn btn-primary badge'data-toggle='tooltip' type='button'>View</button></a></td>"


                var tbody = document.querySelector("#tbl_data tbody");
                var tr = document.createElement("tr");
                tr.innerHTML = rows;
                tbody.appendChild(tr);
                index++;


            }
            // $('#tableFIR').DataTable();

            //$('#cgrid').show();
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


            // barchartnew(ActiveUsers, InActiveUsers);
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



function InitMap(locations) {

    console.log(locations)


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(locations[0].lat, locations[0].long),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        console.log( locations[i].contactNo )
        marker = new google.maps.Marker({

            
            position: new google.maps.LatLng(locations[i].lat, locations[i].long),
            map: map,
            title: 'username: ' + locations[i].name + ' contact no ' + locations[i].contactNo
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent('username: ' + name + ' contact no ' + contactNo);
                infowindow.open(map, marker);
            }
        })(marker, i));

    }
}
function fromLatLngToPoint(latLng, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}
function Result(res) {

}

function View(ele) {
    let logId = $(ele).closest("tr").find("td:eq(1)").text();
    localStorage.setItem("logId", logId);
    window.location.href = "LogDetails";
}

function summaryFilter(data) {

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