$(document).ready(function () {
    $.getJSON("https://gorest.co.in/public-api/users", function (data) {
        console.log(data);
        for (var key in data) {
            for (var value in data[key]) {
                var dataList =
                    '<div class="row"><div class="col-1 d-none d-md-block data item">' + data[key][value].id + '</div> <div class="col-3 name item">' + data[key][value].name + '</div>  <div class="col-3 d-none d-lg-block email item">' + data[key][value].email + '</div> <div class="col-3 gender item">' + data[key][value].gender + '</div> <div class="col-2 status item">' + data[key][value].status + '</div></div> '
                $("#myUL").append(dataList);

                // $.each(data[key][value], function (key, val) {
                //     $('#gender').append('<option value="' + key + '">' + val.gender + '</option>');
                // });

                // $.each(data[key][value], function (key, val) {
                //     $('#gender').append('<option value="' + key + '">' + val + '</option>');
                // });
                // var dropdown =
                //     '<select id="gender"><option value="">Gender</option><option value=""> '+ data[key][value].gender +'</option></select>'
                // $("#drop").append(dropdown);
                // console.log(dropdown)
            }
        }
    });

    // For search filter
    $("#search").keyup(function () {
        var filter = $(this).val(),
            count = 0;
        $('#myUL div').each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
        });
    });

    // For even and odd color
    $("#myUL > div:nth-child(even)").addClass("even");
});


   // var dropdown =
                //     '<select id="gender"><option value="">Gender</option><option value=""> '+ data[key][value].gender +'</option></select>'
                // $("#drop").append(dropdown);
                // console.log(dropdown)