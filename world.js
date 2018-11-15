// JavaScript File

var search = document.getElementById("lookup");
var str = document.getElementById("country");

search.onclick = function Lookup() {
          
           /*if (str.length==0) { 
               document.getElementById("result").innerHTML="";
               document.getElementById("result").style.border="0px";
               return;
            }*/
          // body...
           var url = "world.php?q="+str.value;
          var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             document.getElementById("result").innerHTML = this.responseText;
            
    
            }
          };
            xhttp.open("GET", url, true);
            xhttp.send(null);
         }