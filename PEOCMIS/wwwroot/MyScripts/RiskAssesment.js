

$(document).ready(function () {


    $("#form_submit").submit(function (event) {
        event.preventDefault();


        InsertData();

        return false;
    });


});


function uploadfile() {


 
    //upload file is html tag for upload
    var fileUpload = $("#uploadfile").get(0);
    var files = fileUpload.files;
    var data = new FormData();
    if (files.length != 0) {
        data.append(files[0].name, files[0]);

        $.ajax({
            //fileUploader.ashx is request function which will store the image in a folder on serer
            url: "fileUploader.ashx",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,
            success: function (result) {
                //console.log(result);
                result = JSON.parse(result);
                //result will get the name and url of image and then you can save in database 
                $("#itempic").text(result.image.toLowerCase());


            },
            error: function (err) {
                alert(err.statusText)
            }
        });

    }

}



function InsertData() {



    var Pageurl = window.location.href;


    var Flag = Pageurl.includes("Home");


    if (Flag == false) {
        url = "Home/ImageAction";


    }

    if (Flag == true) {
        url = "ImageAction";
    }




    var fileUpload = $("#uploadfile").get(0);
    var files = fileUpload.files;
    var formData = new FormData();

        formData.append("ImageFile", files[0]);
        formData.append("Title","Title" );
        formData.append("ImageName", "ImageName");
    

    


    console.log(formData);


    $.ajax({
        type: "POST",
        url: "ImageAction",







        data: formData,

        data: formData,
        processData: false,
        contentType: false,
        type: "POST",
        success: function (response) {
            console.log(response);
            if (response.message == "error") {
                toastr["error"]("this book", response.message);
            }
            else {
                toastr["success"](response.message, 'Success!');
        

            }

        },


    });


}

function previewimg(url) {
    var ext = $('#uploadfile').val().split('.').pop().toLowerCase();
    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
        alert('Only Images are Allowed!');
    }

    else {
        var file_size = $('#uploadfile')[0].files[0].size;
        if (file_size > 1048576) {

            alert("Image size is greater than 1MB");


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




