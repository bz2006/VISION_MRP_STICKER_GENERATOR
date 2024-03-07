document.addEventListener("DOMContentLoaded", function () {
    var shop = {
        "2003": ["2003", "2890.00"],
        "2003 Inly": ["2003 Inly", "2990.00"],
        "2003 DLX": ["2003 DLX", "2990.00"],
        "2031": ["2031", "2600.00"],
        "2043": ["2043", "2600.00"],
        "2040": ["2040", "2600.00"],
        "2041": ["2041", "1600.00"],
        "2036": ["2036", "2600.00"],
        "2039": ["2039", "2600.00"],
        "1004 Large": ["1004 Large", "3500.00"],
        "2003 Large": ["2003 Large", "3850.00"],
        "2041 Large": ["2041 Large", "2890.00"],
        "1012": ["1012", "2600.00"],
        "1010": ["1010", "2600.00"],
        "1014": ["1014", "2600.00"],
        "1006": ["1006", "2600.00"],
        "1007": ["1007", "2600.00"],
		"LOGOS": ["LOGOS", "3250.00"]
    }
    var Logos = {
        "LOGOS": ["LOGOS", "3250.00"],

    }
    var LuluKerala = {
        "2003": ["2003", "2990.00"],
        "2003 Inly": ["2003 Inly", "3150.00"],
        "2003 DLX": ["2003 DLX", "3150.00"],
        "2031": ["2031", "2700.00"],
        "2043": ["2043", "2700.00"],
        "2040": ["2040", "2700.00"],
        "2041": ["2041", "1700.00"],
        "2036": ["2036", "2700.00"],
        "2039": ["2039", "2700.00"],
        "1004 Large": ["1004 Large", "3600.00"],
        "2003 Large": ["2003 Large", "3850.00"],
        "2041 Large": ["2041 Large", "2990.00"],
        "1012": ["1012", "2700.00"],
        "1010": ["1010", "2700.00"],
        "1014": ["1014", "2700.00"],
        "1006": ["1006", "2700.00"],
        "1007": ["1007", "2700.00"],
		"LOGOS": ["LOGOS", "3250.00"]
    }
    var LuluTamilnadu = {
        "2003": ["2003", "3290.00"],
        "2003 Inly": ["2003 Inly", "3450.00"],
        "2003 DLX": ["2003 DLX", "3450.00"],
        "2031": ["2031", "2990.00"],
        "2043": ["2043", "2990.00"],
        "2040": ["2040", "2990.00"],
        "2041": ["2041", "1900..00"],
        "2036": ["2036", "2990.00"],
        "2039": ["2039", "2990.00"],
        "1004 Large": ["1004 Large", "3900.00"],
        "2003 Large": ["2003 Large", "3850.00"],
        "2041 Large": ["2041 Large", "3290.00"],
        "1012": ["1012", "2990.00"],
        "1010": ["1010", "2990.00"],
        "1014": ["1014", "2990.00"],
        "1006": ["1006", "2990.00"],
        "1007": ["1007", "2990.00"],
    }
    var LuluHYD = {
        "2003": ["2003", "3490.00"],
        "2003 Inly": ["2003 Inly", "3650.00"],
        "2003 DLX": ["2003 DLX", "3650.00"],
        "2031": ["2031", "3200.00"],
        "2043": ["2043", "3200.00"],
        "2040": ["2040", "3200.00"],
        "2041": ["2041", "2100.00"],
        "2036": ["2036", "3200.00"],
        "2039": ["2039", "3200.00"],
        "1004 Large": ["1004 Large", "4100.00"],
        "2003 Large": ["2003 Large", "3850.00"],
        "2041 Large": ["2041 Large", "3490.00"],
        "1012": ["1012", "3200.00"],
        "1010": ["1010", "3200.00"],
        "1014": ["1014", "3200.00"],
        "1006": ["1006", "3200.00"],
        "1007": ["1007", "3200.00"],
    }
    var LuluLucknow = {
        "2003": ["2003", "3490.00"],
        "2003 Inly": ["2003 Inly", "3650.00"],
        "2003 DLX": ["2003 DLX", "3650.00"],
        "2031": ["2031", "3200.00"],
        "2043": ["2043", "3200.00"],
        "2040": ["2040", "3200.00"],
        "2041": ["2041", "2100.00"],
        "2036": ["2036", "3200.00"],
        "2039": ["2039", "3200.00"],
        "1004 Large": ["1004 Large", "4100.00"],
        "2003 Large": ["2003 Large", "3850.00"],
        "2041 Large": ["2041 Large", "3490.00"],
        "1012": ["1012", "3200.00"],
        "1010": ["1010", "3200.00"],
        "1014": ["1014", "3200.00"],
        "1006": ["1006", "3200.00"],
        "1007": ["1007", "3200.00"],
    }

    var date = ""
    var reg = ""
    var price = {}
    var sessionString = sessionStorage.getItem('Region');
    var Region = JSON.parse(sessionString);
    var sessionString1 = sessionStorage.getItem('data');
    var Data = JSON.parse(sessionString1);
    //console.log(Region,Data)


    switch (Region[0]["Region"]) {
        case "Shop":
            //console.log(Region[0]["Region"])
            var date = Region[0]["Date"]
            var reg = Region[0]["Region"]
            var price = shop
            break;
        case "Logos":
            //console.log(Region[0]["Region"])
            var date = Region[0]["Date"]
            var reg = Region[0]["Region"]
            var price = Logos
            break;
        case "LuluKerala":
            console.log(Region[0]["Region"])
            var date = Region[0]["Date"]
            var reg = Region[0]["Region"]
            var price = LuluKerala
            break;
        case "LuluTamilnadu":
            console.log(Region[0]["Region"])
            var date = Region[0]["Date"]
            var reg = Region[0]["Region"]
            var price = LuluTamilnadu
            break;
        case "LuluHYD":
            console.log(Region[0]["Region"])
            var date = Region[0]["Date"]
            var reg = Region[0]["Region"]
            var price = LuluHYD
            break;
        case "LuluLucknow":
            console.log(Region[0]["Region"])
            var date = Region[0]["Date"]
            var reg = Region[0]["Region"]
            var price = LuluLucknow
            break;


        default:
            console.log("error")
            break;
    }

    var limit = 0
    var a4 = document.createElement("div");
    a4.className = "a4";
    for (let i = 0; i < Data.length; i++) {



        var qty = Data[i]["Quantity"]


        for (let j = 0; j < qty; j++) {



            console.log(Data[i])
            console.log(price[Data[i]])
            var model = Data[i]["Model"]
            var mrp = price[Data[i]["Model"]][1]
            displayDiv()
            var limit = limit + 1

            if (limit === 12) {
                var a4 = document.createElement("div");
                a4.className = "a4";
                var limit = 0

            }
        }
    }
    // function displayDiv() {

    // Create a new div element
    //         var newDiv = document.createElement("div");
    //         newDiv.style.width = "377.95275591px";


    //         // Set the inner HTML content of the div
    //         newDiv.innerHTML = `<div class="mrp">
    //         <h6 class="mrpelem" style="margin-top: 2.5px;">Model
    //             No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${model}
    //         </h6>
    //         <h6 class="mrpelem" style="margin-top: -6px; margin-bottom:0px;">Maximum Retail
    //             Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${mrp}
    //         </h6>
    //         <h6 class="inc">
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Inclusive
    //             Of All Taxes)</h6>
    //         <h6 class="mrpelem" style="margin-top: -6px; margin-bottom: -2px;">Manufatured Month &amp;
    //             Year&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${date}</h6>
    //         <h6 class="mrpelem" style="margin-top: -6px; display: inline;">
    //             Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
    //             <h6 class="mrpelem" style="display: inline; margin-top: -13px;">This Box Contain
    //                 Only </h6>
    //         </h6>
    //         <h6 class="mrpelem" style="margin-top: -6px; margin-bottom: -5px;">
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One
    //             Quartz Clock</h6>

    //         <h6 class="mrpelem" style="margin-top: -6px; display: inline;">Manufatured
    //             By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
    //         </h6>
    //         <h6 class="mrpelem" style="display: inline;">VISION INDUSTRIES</h6>
    //         <h6 class="mrpelem" style="margin-top: -6px; margin-bottom: 3px;">
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BRAHMAPURAM
    //             P.O, COCHIN,</h6>
    //         <h6 class="mrpelem" style="margin-top: -6px; margin-bottom: -6px;">
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KERALA
    //             - 682303</h6>

    //         <h6 class="mrpelem" style="margin-top: 7px;">Customer Care
    //             No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;+91
    //             9400990387</h6>

    //         <h6 class="mrpelem" style="margin-top: -9px;">Visit Us
    //             On&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
    //             www.visionwoodenclocks.com</h6>
    //         <h6 class="mrpelem" style=" display: inline;"></h6>
    //     </div>`;


    //         document.body.appendChild(newDiv);
    //     }


    // });

    function displayDiv() {

        var newDiv = document.createElement("div");
        newDiv.style.width = "377.95275591px";


        newDiv.innerHTML = `<div id="mrp" >
        <img src="LOGOgrey.png" alt="" class="lggr">
        <h6 class="modno">Model No</h6>
        <h6 class="col">:</h6>
        <h6 class="modl">${model}</h6>
        <h6 class="mrpp">Maximum Retail Price</h6>
        <h6 class="col2">:</h6>
        <h6 class="mrc">${mrp}
            <h6 class="incl">(Inclusive Of All Taxes)</h6>
        <h6 class="manmy">MFD Month &amp; Year</h6>
        <h6 class="col3">:</h6>
        <h6 class="date">${date}</h6>
        <h6 class="qty">Quantity</h6>
        <h6 class="col4">:</h6>
        <h6 class="qtycon">This Box Contain Only</h6>
        <h6 class="qtycon2">One Quartz Clock</h6>
        <h6 class="manfby">Manufatured By</h6>
        <h6 class="col5">:</h6>
        <h6 class="manfby1">VISION INDUSTRIES</h6>
        <h6 class="manfby2">Brahmapuram, Cochin</h6>
        <h6 class="manfby3">Kerala - 682303, India</h6>
        <h6 class="custno">Customer Care No</h6>
        <h6 class="col6">:</h6>
        <h6 class="custnum">+91 9400990387</h6>
        <h6 class="vuo">Visit Us On</h6>
        <h6 class="col7">:</h6>
        <h6 class="vuocont">www.visionwoodenclocks.com</h6>








    </div>`;
    

        a4.appendChild(newDiv);
        document.body.appendChild(a4);
    }
    
});
