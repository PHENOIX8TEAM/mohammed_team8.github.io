function validate() {  

    var user=document.user.value;  
    var pass=document.pass.value; 
    if (user==null && user=="" ) {  

        alert("Name can't be blank");  
            return false;  
    }  
    else if(pass.length<6) {
          
        alert("Password must be at least 6 characters long.");  
            return false;  

       
    }   
 }  
