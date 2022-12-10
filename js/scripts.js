$('#refresh').click(function () {
    update_price();
});

$(document).ready(function (){
    update_price();
});

function update_price(){
    $('.price-box h4').addClass('blur');

    $.get('https://api.boodje.com/api/price/latest', function (data, status) {
        data = JSON.parse(data);
        data = data.data;
        console.log(data);
        $("#sekke-qadim").html(number_format(data[3].price ) + ',000');
        $("#sekke-jadid").html(number_format(data[4].price ) + ',000');
        $("#sekke-nim").html(number_format(data[5].price ) + ',000');
        $("#sekke-rob").html(number_format(data[6].price ) + ',000');
        $("#sekke-21").html(number_format(data[7].price));

        $("#gold-18").html(number_format(data[0].price));
        $("#gold").html(number_format(data[1].price));
        $("#silver").html(number_format(data[2].price));

        $("#usa").html(number_format(data[8].price));
        $("#euro").html(number_format(data[9].price));
        $("#uae").html(number_format(data[10].price));


        // Time
        $("#time").html(data['date']);

        $('.price-box h4').removeClass('blur');
    });
}

function number_format(number, decimals, dec_point, thousands_point) {

    if (number == null || !isFinite(number)) {
        throw new TypeError("number is not valid");
    }

    if (!decimals) {
        var len = number.toString().split('.').length;
        decimals = len > 1 ? len : 0;
    }

    if (!dec_point) {
        dec_point = '.';
    }

    if (!thousands_point) {
        thousands_point = ',';
    }

    number = parseFloat(number).toFixed(decimals);

    number = number.replace(".", dec_point);

    var splitNum = number.split(dec_point);
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
    number = splitNum.join(dec_point);

    return number;
}