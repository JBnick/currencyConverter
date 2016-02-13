/**
 * Created by EveryDayUse on 5/02/2016.
 */

function convertFunction() {

    // set endpoint and your access key
    endpoint = 'live';
    access_key = '3c9e5c71c23eca9176a2c3e6d7a65850';
    currencies = document.getElementById("currencyFrom").options[document.getElementById("currencyFrom").selectedIndex].value + ',' + document.getElementById("currencyTo").options[document.getElementById("currencyTo").selectedIndex].value;
    amount = document.getElementById("currencyInput").value;
    console.log(currencies);
    console.log(amount);


    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key + '&currencies=' + currencies + '&format=1',
        dataType: 'jsonp',
        success: function(json) {
            var obj = json.quotes;
            console.log(obj);

            //convert currencyFrom into USD
            var currencyFromToUSD = amount / obj[Object.keys(obj)[0]];

            //perform conversion
            var convertedValue = currencyFromToUSD * obj[Object.keys(obj)[1]];
            convertedValue = convertedValue.toFixed(2);
            document.getElementById("result").innerHTML = convertedValue;
        }
    });
}



$("#fittext").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px' });