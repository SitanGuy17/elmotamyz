var D1 = document.createElement('div')
var D2 = document.createElement('div')
var D3 = document.createElement('div')
var D4 = document.createElement('div')
var img = document.createElement('img')
var h2 = document.createElement('h2')
var p = document.createElement('p')
D1.className = "none"
D2.className = "popup-inner"
D1.appendChild(D2)
D2.appendChild(D3)
D2.appendChild(D4)
D3.appendChild(img)
D4.appendChild(h2)
D4.appendChild(p)

var place = document.getElementById('place')

place.appendChild(D1);


place.onclick = function () { D1.className = "none";}


function quickview(info) {
         
}
function removeD1() {
          D1.className = "none";
}
