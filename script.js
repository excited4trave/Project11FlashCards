const flashcards=document.getElementsByClassName("flash-cards")[0];
let ContentArray=localStorage.getItem('items')? jason.parse(localStorage.getItem('items')):[];

function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML='';
    ContentArray=[];
}
function add_flash_card(){

  if (document.getElementById("question").value=="") {

    alert("Please Enter a value Question & Answer");

    
  } else {

   
   var flash_card_info={'my_question':'Q1','my_answer':'A1'}
   console.log("Entering");
   var jarray=JSON.stringify(flash_card_info);
   localStorage.setItem('my_items',jarray);
   var str=localStorage.getItem('my_items');
   var get_back_jarray=json.parse(str);
   console.log(localStorage.getItem('my_items'));
   
   /*  ***example*** 

   const person = { name: "Alex" };
   localStorage.setItem("user", person);
   console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
   localStorage.setItem("user", JSON.stringify(person));
   console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" } 
   */
 //localStorage.setItem('items',JSON.stringify(ContentArray)); 
 
 //console.log(jason.parse(localStorage.getItem("items"))); 
 
 //divMaker(ContentArray);
document.getElementById("question").value='';
document.getElementById("answer").value=''; 
  

}

}

function divMaker(text){
    alert("inside div maker"); 
    var div=document.createElement("div");
    var h2_question=docume.createElement("h2");
    var h2_answer=document.createElement("h2");
    h2_question.innerHTML=text.my_question;
    h2_answer.innerHTML=text.my_answer;
    div.appendChild(h2_answer);
    div.className='flash-card';
    div.addEventListener("dblclick",function(){h2_answer.style.display="block";})
    
    div.appendChild(question);
    
    flashcards.appendChild(div);

}

function close_flash_card_window(){
 //alert("function called");
    document.getElementById('create-box-id').style.display="none";
}
function show_flash_card_window(){
    document.getElementById('create-box-id').style.display="block";
}
