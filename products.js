var firebaseConfig = {
    apiKey: "AIzaSyBZ7UUkdb9gz4NrOyk1AEa7IwIh3T8buss",
    authDomain: "el-motamyz.firebaseapp.com",
    databaseURL: "https://el-motamyz.firebaseio.com",
    projectId: "el-motamyz",
    storageBucket: "el-motamyz.appspot.com",
    messagingSenderId: "137501119962",
    appId: "1:137501119962:web:15dcd29e9df46e25485ce3",
    measurementId: "G-ZS8X5QPQ0R"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var ref = database.ref('/' + 'products/');
ref.once('value', gotData, errData);

function gotData(data) {
    var data = data.val();
    var keys = Object.keys(data);

    for (var i = 0; i< keys.length; i++){

        var k = keys[i];
        var img = data[k].img;        

        var info = {
            ai: i,
            k: keys[i],
            img: data[k].img
        };


        var ia = document.createElement('a')
        var img = document.createElement('img')
        var row = document.getElementById('row')
        var ianum = i;
        ia.className += "box";
        ia.id += 'box-' + i ;
        ia.appendChild(img)


        img.src = data[k].image;

        row.appendChild(ia);


        ia.onclick = function () {var -yuhqdocument.querySelector('ia').id;}
        
    }
}
function errData(error) {
    //console.log(error.message , error.code)
}
//*h2.textContent = data[k].header;p.textContent = data[k].content;img.src = data[k].image;//*
