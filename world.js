// JavaScript File
window.onload = function () {
    // body...

var search = document.getElementById("lookup");
var str = document.getElementById("country");
var checkBox = document.getElementById("myCheck");

    search.addEventListener('click', Lookup);
            
            function Lookup() {
          
           /*if (str.length==0) { 
               document.getElementById("result").innerHTML="";
               document.getElementById("result").style.border="0px";
               return;
            }*/
          // body...
           if (checkBox.checked == true ){
               var url = "world.php?all=true";
           }else {
           var url = "world.php?country="+ str.value;
           }
          var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             document.getElementById("result").innerHTML = this.responseText;
            
    
            }
          };
            xhttp.open("GET", url, true);
            xhttp.send(null);
         }
}     