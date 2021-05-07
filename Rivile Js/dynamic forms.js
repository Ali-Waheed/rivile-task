function toggleSidebar(){
   document.getElementById("sidebar").classList.toggle('active')
}

var btn=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var d=document.getElementById("d");

 var table=document.querySelector('tbody')
 var mytable=document.getElementById('mytable')

   //add function

 function addrow(){
   table.innerHTML+=`
   <tr>
      <td></td>
      <td></td>
   
   </tr>
   `}

btn.addEventListener("click",addrow);

  //delete function
 function deleterow(){
   mytable.deleteRow(table.rows.length-1);
   
 }

  btn2.addEventListener('click',deleterow)

  
//   var table=document.querySelector('tbody')
//    for(var i=0;i<table.rows;i++){
//      table.deleteRow(i); 
//    }

  

