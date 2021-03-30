//This function is to call the shop api and get all the shop 
function getGameShopData() {

    var request = new XMLHttpRequest();
    request.open('GET', shop_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {

        //get all the shop records into our shop array
        shop_array = JSON.parse(request.responseText);

        //call the function so as to display all shop tiles for 
        displayShops();
    };

    //This command starts the calling of the shop web api
    request.send();
}

//This function is to display the shop tiles 
function displayShops() {

    var table = document.getElementById("shopTable");
    var shopCount = 0;
    var message = "";

    table.innerHTML = "";
    totalShops = shop_array.length;
    for (var count = 0; count < totalShops; count++) {
        var shop_name = shop_array[count].shop_name;
        var shop_address = shop_array[count].shop_address;
        var cell =
            '<div id="shop">' +
            '<span id="shopName">' + shop_name + '</span>' +
            '<br>' +
            '<span id="shopAddres">' + shop_address + '</span>' +
            '</div>';

        table.insertAdjacentHTML('beforeend', cell);
        shopCount++;
    }
    message = "Total shops " + shopCount;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}
