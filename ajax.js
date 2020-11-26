
var para=document.getElementById('chks');
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var list=JSON.parse(this.responseText);
        var check1="<input type=checkbox id=customCheck1 onclick=countChecked(this)> ";
        var check2="<input type=checkbox checked id=customCheck2 disabled onclick=countChecked(this)> ";
        var output='';
        var completed='';
        for(var i=0;i<list.length;i++){
            completed=list[i].completed;
            if(completed==true){
                output+=check2;
                output+=list[i].title+'</input></br>';
            }
            else{
                output+=check1;
                output+=list[i].title+'</input></br>';
            }            
        }
        chks.innerHTML=output;        
    }
}
xhttp.open('GET','data.json',true);
xhttp.send();

function countChecked(){
    let myPromise= new Promise(function(myResolve, myReject) {
        var check=document.querySelectorAll('input[type="checkbox"]');
        var count=0;
        for(var i=0;i<check.length;i++){
            if(check[i].checked==true&&check[i].disabled==false){
                count++;
            }
            if(count<5){
                continue;
            }
            else{
                myResolve(check);
            }
        }  
    });
    
    myPromise
    .then(function(check){
        alert('"WOW" Congrats you have been Successfully Completed 5 Tasks....');
        alert('OK , Now you are Done...');
        for(var i=0;i<check.length;i++){
            check[i].disabled=true;
        }
    }) 
    .catch(function(){
        alert('There is an error on selection please check again...');
    });    
}


// to edit option. It reset check boxes.
function editOption(){
    var inputCheck=document.querySelectorAll('#customCheck1');
    for(var i=0;i<inputCheck.length;i++){
        inputCheck[i].checked=false;
        inputCheck[i].disabled=false;
    }
}