var ret;
//Admin Function start here

function Selector(param) {
  
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
   
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: { Id: param },
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;
        },
        async:true,
        error: errorFn
    });
    
}

function FnLogin(param) {

    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    //var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/SigInAction";


    }

    if (Flag == true) {
        url = "SigInAction";
    }
 
    //var url = "SigInAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;


        },
        async: true,
        error: errorFn
    });

}
function SelectorGeneral(param, proc) {
    
    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/GeneralList";

    }
    else {
        if (Flag1 == false) {
            url = "OnlineServices/GeneralList";

        }
    }

    if (Flag == true) {
        url = "GeneralList";
    }
    else if (Flag1 == true) {
        url = "GeneralList";
    }
  
    
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;


        },
        async: true,
        error: errorFn
    });

}
var ret;
function Selector(param) {
  
    var url = "MultiList";

    return $.ajax({
        url: url,
        type: "POST",
        data: { Id: param },
        dataType: "JSON",
        success: function (data) {
            ret = data;
        },
        async: true,
        error: errorFn
    });

}
function Selector1(param, proc) {
    var url = "SingleList";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;

            
        },
        async: true,
        error: errorFn
    });

}

function AdminLogout() {

    var url = "Logout";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",        
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;
        },
        async: true,
        error: errorFn
    });

}

function FnforgotPass(param, proc,Email) {
    var url = "FnForgotPassword";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc,
            "Email":Email
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;


        },
        async: true,
        error: errorFn
    });
}
function ActionSignUp(param) {
   
    var url = "SignUpAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data);
            //SuccMessage(data.d);

        },
        error: errorFn

    });
}
//Reset Password

function ActionReset(param, proc) {

    var url = "ResetAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
           
           
        }),
        
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data.d);
           
           
           // SuccMessage(data.d);
          

        },
        error: errorFn

    });
}
function Action(param, proc) {
    
    var url = "SingleAction";
   return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data);
            //SuccMessage(data.d);
           
        },
        error: errorFn
       
   });
}

function NewAction(param, proc) {

    var url = "SingleAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data);
            //SuccMessage(data.d);

        },
        async: false,
        error: errorFn

    });
}
function ActionCheck(param, proc) {
    var url = "SingleAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
           
            Result(data);

        },
        error: errorFn

    });
}

function ActionDelete(param, proc, ele)
{
    var url = "SingleAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data.d); 
            if (data.d == "Operation Successfully Performed") {
                FnRowDelete(ele);


            }
        },
        error: errorFn

    });
}

function ActionNewRecord(param, proc,Status) {
    var url = "SingleAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data);
            //SuccMessage(data.d);
           
        },
        error: errorFn

    });
}

function Action1(param,col,arry,proc) {
    var url = "MultiAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "colms": col,
            "Details":arry,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            },
        error: errorFn
    });
}
function ArrayMultiValues(param, col, arry, proc) {
    var url = "MultiAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "colms": col,
            "Details": arry,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          
        },
        error: function (data) {
            notif({
                msg: "<b>Oops!</b> " + data,
                type: "warning",
                position: "center"
            });
        }
    });
}

function ActionMultiHotel(param, col, arry, proc) {

    var url = "ActionMultiHotels";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "colms": col,
            "Details": arry,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
},
        error: errorFn
    });
}
//Admin Function End here

//Email Sending Function
function EmailFn(ToName,ToEmail,BusinessName,Type,ApplicationId,FileNo,CDate,SlipNo,Remarks,Status) {
    var url = "EmailSending";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "ToName": ToName,
            "ToEmail": ToEmail,
            "BusinessName": BusinessName,
            "BusinessType": Type,
            "ApplicationNo": ApplicationId,
            "FileNo": FileNo,
            "ApplicationDate": CDate,
            "DespositeSlip": SlipNo,
            "ApplicationRemarks": Remarks,
            "ApplicationStatus": Status
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
           
            //toastr["Success"]("Email has been sent", 'Success');

        },
        error: errorFn

    });
}

//Error Function when any of the defined function in this documents return any errro
function errorFn(err, status, xhr) {
    
    console.log(status.toUpperCase() + "! " + xhr + " !" + err);
    toastr["error"](status.toUpperCase() + "! " + xhr + " !", 'Server Error!');
    //ErrMessage(status.toUpperCase() + "! " + xhr);
   // toastr["error"]("Error, Server is down OR internet connection problem", 'Server Error!');
    //ErrMessage("Error, Server is down OR internet connection problem");
}

//Inspector Functions starts
function InspectorSelectorSignleDataTable(param, proc) {
    var url = "InspectorSingleList";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;


        },
        async: true,
        error: errorFn
    });

}

function InspectorSelectorMultiDataTable(param, proc) {
    var url = "InspectorMultiList";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;


        },
        async: true,
        error: errorFn
    });

}
function InspectorAction(param, proc) {

    var url = "InspectorSingleAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data);
            //SuccMessage(data.d);

        },
        error: errorFn

    });
}

function InspectorLogout() {

    var url = "InspectorLogout";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;
        },
        async: true,
        error: errorFn
    });

}

//Inspector Function End


//Operator Functions starts
function FnOperatorSelector(param, proc) {
    var url = "OperatorSingleList";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;


        },
        async: true,
        error: errorFn
    });

}

function FnOperatorSelectorMulti(param, proc) {
    var url = "OperatorMultiList";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;


        },
        async: true,
        error: errorFn
    });

}
function FnOperatorAction(param, proc) {

    var url = "OperatorSingleAction";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Result(data);
            //SuccMessage(data.d);

        },
        error: errorFn

    });
}

function FnOperatorLogout() {

    var url = "OperatorLogout";
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;
        },
        async: true,
        error: errorFn
    });

}
function SelectorNoSession1(param, proc) {

  
    var url;

    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");
    var Flag1 = Pageurl.includes("OnlineServices");

    if (Flag == false) {
        url = "Home/MultiListNoSession";

    }
    else {
        if (Flag1 == false) {
            url = "OnlineServices/MultiListNoSession";

        }
    }

    if (Flag == true) {
        url = "MultiListNoSession";
    }
    else if (Flag1 == true) {
        url = "MultiListNoSession";
    }
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "json",
        data: JSON.stringify({
            "data": param,
            "action": proc
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ret = data;
        },
        async: true,
        error: errorFn
    });

}
//Inspector Function End
