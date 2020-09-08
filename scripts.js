$(document).ready(function () {
    $.getJSON("https://gorest.co.in/public-api/users", function (data) {
        console.log(data);

        for (var key in data) {
            for (var value in data[key]) {
                var dataList =
                    '<div class="row"><div class="col-1 data item">' + data[key][value].id + '</div> <div class=col-3 name item">' + data[key][value].name + '</div>  <div class=col-3 email item">' + data[key][value].email + '</div> <div class=col-3 gender item">' + data[key][value].gender + '</div> <div class=col-2 status item">' + data[key][value].status + '</div></div> '
                $("#myUL").append(dataList);
            }

            $('select').on('change', function () {
                
            });
        }
        $("#status").change(function () {
            var status = this.value;
            if (status == "Active")
                console.log(status);
            $("#icon_class, #background_class").hide();
        });
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
