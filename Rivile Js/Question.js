function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active')
}


    let inp=$('#question');
    let ans1=$('#answer1');
    let ans2=$('#answer2');
    let ans3=$('#answer3');
    let ans4=$('#answer4');
    let corr_ans=$(".choose-ans");
     
 

//inputs and local storage
    $(inp).keyup(function(){
        ans1.css('display','block');
        localStorage.setItem("question",inp.val());
          })

    $(ans1).keyup(function(){
        ans2.css('display','block');
        localStorage.setItem("answer1",ans1.val());
    })

    $(ans2).keyup(function(){
        ans3.css('display','block');
        localStorage.setItem("answer2",ans2.val());
    })

    $(ans3).keyup(function(){
        ans4.css('display','block');
        localStorage.setItem("answer3",ans3.val());
 

    })
    $(ans4).keyup(function(){
        corr_ans.css('display','inline');
        localStorage.setItem("answer4",ans4.val());
 

    })
    //Radio box for storing correct answer in local storage
    let radioBtn1=$("#ans1");
    let radioBtn2=$("#ans2");
    let radioBtn3=$("#ans3");
    let radioBtn4=$("#ans4");

    radioBtn1.click(function(){
        localStorage.setItem("correct",ans1.val());
      })

      radioBtn2.click(function(){
        localStorage.setItem("correct",ans2.val());
      })

      radioBtn3.click(function(){
        localStorage.setItem("correct",ans3.val());
      })
      radioBtn4.click(function(){
        localStorage.setItem("correct",ans4.val());
      })
       
       
     
//storing inserted question and answer
 var btn=document.getElementById("adquiz");
 var div1=document.getElementById("a");
 var tbd=document.getElementById("tbd");

  btn.addEventListener("click",function(e){
      e.preventDefault();
         tbd.innerHTML+=
      `
      <tr>
         <td>${localStorage.getItem("question")}</td>
        <td>${localStorage.getItem("answer1")}</td>
        <td>${localStorage.getItem("answer2")}</td>
        <td>${localStorage.getItem("answer3")}</td>
        <td>${localStorage.getItem("answer4")}</td>
        <td style="background-color:green;color:white">${localStorage.getItem("correct")}</td>
       `
        tbd2.innerHTML+=
        `
        <td>${localStorage.getItem("question")} </td>
        <td>
        <i class="fas fa-trash-alt"> <button id="trash-btn"> Delete</button></i>

    </td>

        `
     })
        if(inp.value=""){
           alert("please enter value") 
        }
     
      
     
    
//delete register question

$('#tab tbody').on('click','#trash-btn',function(){
    if(confirm("do you want to delete this Question")){
        $(this).closest('tr').remove();

    };
})



 
 


 