function display(){
    var status;
    function display(login){
        var v=login();
            if(v==1){
                status=1;

            }
            else{
                document.getElementById("err").style.colour="red";
                err.innerHTML="Incorrect username or Password";
                status=0;
            }
    }
    function validate(){
        var name="admin"; 
        var pass="12345";
        var username=document.getElementById("nameid").value;
        var paswrd=document.getElementById("psw").value;
        if((username==name)&&(paswrd==pass)){
            return 1;
        }
            else{
            return 0;

        }
    }
    display(validate);
    if(status==0){
        return false;
    }
    else{
        return true;
    }
}