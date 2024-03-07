


var data = []
var reg = []
qtyarray = []
var formCount = 0;
var num1 = 0
total = 0
qtymin = 0


// main.js

// Modules to control application life and create native browser window



function check() {
    var cnt = document.getElementsByClassName("cnt")
    var rc = document.getElementsByClassName("rc")
    cnt[0].innerHTML = total
    if (total > 0 && total <= 12) {
        qtymin = 12

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 12 && total <= 24) {
        qtymin = 24

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    } if (total > 24 && total <= 36) {
        qtymin = 36

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 36 && total <= 48) {
        qtymin = 48

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 48 && total <= 60) {
        qtymin = 60

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 60 && total <= 72) {
        qtymin = 72

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 72 && total <= 84) {
        qtymin = 84

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 84 && total <= 96) {
        qtymin = 96

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 96 && total <= 108) {
        qtymin = 108

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        console.log("abs" + min)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 108 && total <= 120) {
        qtymin = 120

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 120 && total <= 132) {
        qtymin = 132

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
    if (total > 132 && total <= 144) {
        qtymin = 144

        var rcnt = document.getElementsByClassName("rcnt")
        min = Math.abs(total - qtymin)
        rcnt[0].innerHTML = min
        rcnt[0].style.color = "red"
        rc[0].style.color = "red"
        if (min === 0) {
            rcnt[0].style.color = "white"
            rc[0].style.color = "white"
        }
    }
}
function datasent() {
    sessionStorage.setItem("Region", JSON.stringify(reg));
    sessionStorage.setItem("data", JSON.stringify(data));
    
    window.location.href = 'gen.html';
}
function hidsh() {
    var x = document.getElementById("modelselector");
    x.style.display = 'block';
}
function regsel() {
    var Region = document.getElementById('Region').value;
    var Date = document.getElementById('Date').value;
    var formvalues = {
        Region: Region,
        Date: Date
    };
    reg.push(formvalues)
    hidsh()

}

function addForm() {
    formCount++;

    var formsContainer = document.getElementById('forms-container');

    var newForm = document.createElement('div');
    newForm.className = 'form-group';
    newForm.id = 'form-' + formCount;

    newForm.innerHTML = `
        <form id="inner-form-${formCount}">
            <h6 style="color: white;display: inline-block;margin-left: 41px; margin-top: 12px;">Model</h6>
            <h6 style="color: white;display: inline-block;margin-left: 149px; margin-top: 12px;">Quantity</h6><br>
            <select id="Model-${formCount}" name="Model-${formCount}" required class="dropm" style="margin-left: 40px;
            height: 40px;
            width: 200px;
            position: relative;
            display: inline-block;
            color: white;
            background-color: #282828;
            border: 1px solid #ccc;
            border-radius: 4px;
            ">
                <option value="2003">2003</option>
                <option value="2003 Inly">2003 Inly</option>
                <option value="2003 DLX">2003 DLX</option>
                <option value="2031">2031</option>
                <option value="2043">2043</option>
                <option value="2040">2040</option>
                <option value="2041">2041</option>
                <option value="2036">2036</option>
                <option value="2039">2039</option>
                <option value="1004 Large">1004 Large</option>
                <option value="2003 Large">2003 Large</option>
                <option value="2041 Large">2041 Large</option>
                <option value="1012">1012</option>
                <option value="1010">1010</option>
                <option value="1014">1014</option>
                <option value="1006">1006</option>
                <option value="1007">1007</option>
                <option value="LOGOS">Logos</option>
            </select>
            
            <input type="number" id="Quantity-${formCount}" name="Quantity-${formCount}" required style="color: white;
            background-color: #282828;
            height: 40px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            width: 200px;">
            <input type="submit" value="Submit" class="conf_btn">
        </form>
        
    `;

    formsContainer.appendChild(newForm);

    document.getElementById(`inner-form-${formCount}`).addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission here, you can access form data using the form elements' values.
        var formData = {
            Model: document.getElementById(`Model-${formCount}`).value,
            Quantity: document.getElementById(`Quantity-${formCount}`).value,
        };
        qty = document.getElementById(`Quantity-${formCount}`).value
        var num = parseInt(qty);
        qtyarray.push(num)
        data.push(formData);
        total = parseInt(num + total);
        check()
    });
}

function removeForm() {
    var formsContainer = document.getElementById('forms-container');
    var lastForm = formsContainer.lastChild;

    if (lastForm) {
        formsContainer.removeChild(lastForm);
        formCount--;
    }
    data.pop()
    var popt = qtyarray.pop()
    total = total - popt
    check()
}