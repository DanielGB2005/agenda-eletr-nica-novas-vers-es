while(document.getElementById("name").value.length<10){
    document.getElementById("name").style.color = "MediumSeaGreen";
}


if(document.getElementById("user").value.length>10){
    document.getElementById("user").style.color = "MediumSeaGreen";
}

if(document.getElementById("senha").value == document.getElementById("confirm").value){
    document.getElementById("confirm").style.color = "MediumSeaGreen";
}

function checar(){

    if(document.getElementById("name").value.length>10 && document.getElementById("user").value.length<10 && document.getElementById("email").value && document.getElementById("senha").value == document.getElementById("confirm").value) { 

     const email = document.getElementById("email").value;

     for(i=0; i<=document.getElementById("email").value.length; i++){
        const letra = email.substr(i, 1);
        
        console.log(letra);
        if(letra == "@"){
             window.location.href = "./inicial.html";       
        }
     }
      

   }

   else{
      alert("é preciso que você faça o login adequadamente, respeitando os critérios de cada campo!");
   }
} 

