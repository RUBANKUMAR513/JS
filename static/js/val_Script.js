function check() {
  let name=document.getElementById("name").value;
  let num =document.getElementById("num").value;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/
  let msg1;
  let msg2;
  
  if(name.length==0){
	document.getElementById("result1").innerHTML = "Please fill this form"
    document.getElementById("name").style.borderColor="red"
  }
  else{
	if(/[0-9]/.test(name)){
	document.getElementById("result1").innerHTML = "Number's do not allowed"
    document.getElementById("name").style.borderColor="red"
  }
  else if(specialChars.test(name)){
	document.getElementById("result1").innerHTML = "Charater's do not allowed"
    document.getElementById("name").style.borderColor="red" 
 }
 else{
	document.getElementById("result1").innerHTML = "Valid"
	document.getElementById("name").style.borderColor="green"
 }
  }
 if(num.length==0){
	document.getElementById("result2").innerHTML = "Please fill this form"
    document.getElementById("num").style.borderColor="red" 
 }
 else{
	if(specialChars.test(num)){
	document.getElementById("result2").innerHTML = "Charater's do not allowed"
    document.getElementById("num").style.borderColor="red"
 }
 else if(/[A-Za-z]/.test(num)){
	document.getElementById("result2").innerHTML = "Alphabet's do not allowed"
    document.getElementById("num").style.borderColor="red"
 }
 else{
	document.getElementById("result2").innerHTML = "Valid"
	document.getElementById("num").style.borderColor="green"
 } 
 }
 
}



