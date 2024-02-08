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

    console.log(r1,r2,vin,vout,Unit_1,Unit_2);
  
    if(r1!="" && vin!="" && vout!="" && r2!="" || r1=="" && vin=="" && vout=="" && r2=="") {
        console.log("hi")
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
        if(r1==r2){
        if(vin.length==0){
          let ans1=2*vout;
          document.getElementById("Vin").setAttribute('value',ans1);
        }
        else if(vout.length==0){
            let ans2=vin*0.5;
            document.getElementById("Vout").setAttribute('value',ans2);
        }
    }
    else{
        if(r1.length==0){
            let r1_ans=r2*((vin/vout)-r2);
            document.getElementById("R1").setAttribute('value',r1_ans);
           
    }
        else if(r2.length==0){
            let r2_ans=r1*(vout/(vin-vout));
            document.getElementById("R2").setAttribute('value',r2_ans);
    }       

        else if(vin.length==0){
            let vin_ans=vout*((r1+r2)/r2);
            document.getElementById("Vin").setAttribute('value',vin_ans);

    }
        else if(vout.length==0){
            let vout_ans=vin*(r2/(r1+r2));
            document.getElementById("Vout").setAttribute('value',vout_ans);
    }
}
}