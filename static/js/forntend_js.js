document.getElementById("ok-btn").addEventListener("click", function (event) {
                event.preventDefault();
            });


function change(x) {
    let unit=0;
    if(x=="mega"){
      unit=Math.pow(10,6)
    }
    else if(x=="kilo"){
        unit=Math.pow(10,3)
    }
    else if(x=="ohms"){
        unit=Math.pow(10,1)
    }
    return unit; 
}
function calculate(){
    let x = document.forms["component_input_forms"];
    const r1= x["R1"].value;
    const r2= x["R2"].value;
    const vin= x["Vin"].value;
    const vout= x["Vout"].value;
    const Unit_1= change(x["Unit1"].value);
    const Unit_2= change(x["Unit2"].value);
    document.getElementById("r1_1").value=r1;
    document.getElementById("r2_1").value=r2;
    document.getElementById("Vin_1").value=vin;
    document.getElementById("Vout_1").value=vout;
    console.log(r1,r2,vin,vout,Unit_1,Unit_2);
  
    if(r1!="" && vin!="" && vout!="" && r2!="" || r1=="" && vin=="" && vout=="" && r2=="") {
    	let msg = document.getElementById("msg");
        msg.style.color = "red";
        msg.innerHTML="Give Exactly Three Inputs";
    }
    else  if(r1!="" && r2!="" && vin!="" || r1!="" && r2!="" && vout!="" || r1!="" && r2!="" && vout!="" || r1!="" && vin!="" && vout!="" || r2!="" && vin!="" && vout!="" ) {
    	let msg=document.getElementById("msg");
        msg.style.color = "green";
        msg.style.fontSize="20px";
        msg.innerHTML="Valid";
        source(r1,r2,vin,vout,Unit_1,Unit_2);
    }
    else {
    	let msg=document.getElementById("msg");
        msg.style.color = "red";
        msg.innerHTML="Give Exactly Three Inputs";
    }
    }
    
    
function source(r1,r2,vin,vout,Unit_1,Unit_2){
        if(r1.length==0){
            r2=r2*Unit_2;
            let r1_ans=((vin-vout)*r2)/vout;
            if(Unit_1==1000000){
                r1_ans=r1_ans/1000000;
                document.getElementById("R1").value=r1_ans.toFixed(2);
                document.getElementById("r1_1").value=r1_ans.toFixed(2);
            }else if(Unit_1==1000){
                r1_ans=r1_ans/1000;
                document.getElementById("R1").value=r1_ans.toFixed(2);
                document.getElementById("r1_1").value=r1_ans.toFixed(2);
            }
            else{
                document.getElementById("R1").value=r1_ans.toFixed(2);
                document.getElementById("r1_1").value=r1_ans.toFixed(2);
            }
    }
        else if(r2.length==0){
            r1=r1*Unit_1;
            let r2_ans=(vout*r1)/(vin-vout); 
            if(Unit_2==1000000){
                r2_ans=r2_ans/1000000;
                document.getElementById("R2").value=r2_ans.toFixed(2);
                document.getElementById("r2_1").value=r2_ans.toFixed(2);
            }else if(Unit_2==1000){
                r2_ans=r2_ans/1000;
                document.getElementById("R2").value=r2_ans.toFixed(2);
                document.getElementById("r2_1").value=r2_ans.toFixed(2);
            }
            else{
                document.getElementById("R2").value=r2_ans.toFixed(2);
                document.getElementById("r2_1").value=r2_ans.toFixed(2);
            }
    }       

        else if(vin.length==0){
            r1=r1*Unit_1;
            r2=r2*Unit_2;
            let vin_ans=(vout*(r1+r2)/r2);
            document.getElementById("Vin").value=vin_ans.toFixed(2);
            document.getElementById("Vin_1").value=vin_ans.toFixed(2);

    }
        else if(vout.length==0){
            r1=r1*Unit_1;
            r2=r2*Unit_2;
            let vout_ans=(r2*vin)/(r1+r2);
            document.getElementById("Vout").value=vout_ans.toFixed(2);
            document.getElementById("Vout_1").value=vout_ans.toFixed(2);
    }
}
