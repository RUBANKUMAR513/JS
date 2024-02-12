document.getElementById("storeinputs").addEventListener("submit",function(e){
    e.preventDefault();
} );

function del(id){
    let value= document.getElementsByClassName("del");
    console.log(id);
    let name="ruban"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        refresh();
    }
    };
    xhttp.open("POST","/deletedata", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("id="+id+"&name="+name);
}
function submit_form(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //alert(this.responseText);
        refresh();
    }
    };
    let storeform = document.getElementById("storeinputs");
    let r1 = storeform['r1_1'];
    let r2 = storeform['r2_1'];
    let vin = storeform['Vin_1'];
    let vout = storeform['Vout_1'];
    xhttp.open("POST","/insertdata", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("resistor1="+r1.value+"&resistor2="+r2.value+"&vin="+vin.value+"&vout="+vout.value);
    
}
function refresh(){
    var xhttp = new XMLHttpRequest();
    var dataTable = document.getElementById("datatable");
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data=this.response;
        let a = JSON.parse(data);
        var tableHTMLString ='<thead ><tr><th>SI.NO</th><th>R1</th><th>R2</th><th>Vin</th><th>Vout</th><th>Delete</th></tr></thead>';
        a.forEach(function(item){
            tableHTMLString += '<tr> <td></td>  <td class="d">'+item['R1']+'</td><td class="d">'+item['R2']+'</td><td class="d">'+item['Vin']+'</td><td class="d">'+item['Vout']+'</td><td class="d"><div class="del_btn"><input class="del" type="submit" value="Delete" id='+item["Id"]+' onclick="del(this.id)"></div></td></tr>';
        });
        dataTable.innerHTML=tableHTMLString;
        
    }
    };
    xhttp.open("GET","/refresh", true);
    xhttp.send();
}