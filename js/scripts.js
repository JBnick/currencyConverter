/*function convertFunction() {

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
            $('#secondTxtField').val(convertedValue);
        }
    });
}*/



$('#firstDropDown')
    .dropdown()
;
$('#secondDropDown')
    .dropdown()
;



function firstTxtFieldFocus() {

// set endpoint and your access key
    endpoint = 'live';
    access_key = '3c9e5c71c23eca9176a2c3e6d7a65850';
    currencies = document.getElementById("firstDropDown").options[document.getElementById("firstDropDown").selectedIndex].value + ',' + document.getElementById("secondDropDown").options[document.getElementById("secondDropDown").selectedIndex].value;
    amount = document.getElementById("firstTxtField").value;
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

            //conversion factor determined
            var conversionFactor = obj[Object.keys(obj)[1]] / obj[Object.keys(obj)[0]];
            conversionFactor = conversionFactor.toFixed(4);

            //perform conversion
            var convertedValue = currencyFromToUSD * obj[Object.keys(obj)[1]];
            convertedValue = convertedValue.toFixed(2);
            document.getElementById("result").innerHTML = "1 " + document.getElementById("firstDropDown").options[document.getElementById("firstDropDown").selectedIndex].title + " equals " + conversionFactor + " " + document.getElementById("secondDropDown").options[document.getElementById("secondDropDown").selectedIndex].title;
            $('#secondTxtField').val(convertedValue);
        }
    });
}



function secondTxtFieldFocus() {

// set endpoint and your access key
    endpoint = 'live';
    access_key = '3c9e5c71c23eca9176a2c3e6d7a65850';
    currencies = document.getElementById("firstDropDown").options[document.getElementById("firstDropDown").selectedIndex].value + ',' + document.getElementById("secondDropDown").options[document.getElementById("secondDropDown").selectedIndex].value;
    amount = document.getElementById("secondTxtField").value;
    console.log(currencies);
    console.log(amount);


    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key + '&currencies=' + currencies + '&format=1',
        dataType: 'jsonp',
        success: function(json) {
            var obj = json.quotes;
            console.log(obj);

            //convert currencyFrom into USD
            var currencyFromToUSD = amount / obj[Object.keys(obj)[1]];

            //conversion factor determined
            var conversionFactor = obj[Object.keys(obj)[0]] / obj[Object.keys(obj)[1]];
            conversionFactor = conversionFactor.toFixed(4);

            //perform conversion
            var convertedValue = currencyFromToUSD * obj[Object.keys(obj)[0]];
            convertedValue = convertedValue.toFixed(2);
            document.getElementById("result").innerHTML =  "1 " + document.getElementById("secondDropDown").options[document.getElementById("secondDropDown").selectedIndex].title + " equals " + conversionFactor + " " + document.getElementById("firstDropDown").options[document.getElementById("firstDropDown").selectedIndex].title;;
            $('#firstTxtField').val(convertedValue);
        }
    });
}

jQuery("#responsive_headline").fitText(1.2, { minFontSize: '40px', maxFontSize: '60px' });