
var database = firebase.database();
var ref = database.ref('products/product');
ref.once('value', gotData, errData);

function gotData(data) {
    var data = data.val();
    var keys = Object.keys(data);
    console.log(keys[2])
    console.log(data[keys[2]])

}

function errData(error){
    console.log(error.message , error.code)
}



function quickview3() {   
    for ( 
         var i = 0; i< Object.keys.length; i++){
        var data = data.val();
        var keys = Object.keys(data);
        $(document).ready(function() {
             h2.textContent = data[keys[0]].name;
             p.textContent = data[keys[1]].name
             img.setAttribute('src', 'data[keys[2]].name')
             place.appendChild(D1);
        });
    }
    };