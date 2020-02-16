
function dateValidate(){
   var eventTitle = document.getElementById('title');
    var start = document.getElementById('eventDate1').value;
    var end = document.getElementById('eventDate2').value;
    var postdate = document.getElementById('postDate').value;
   

    if(eventTitle.value.length == 0){
      alert("Event title is empty");
   }

    if(start < end){

    }
    else{
       alert("Invalid date");
    }

    if(postdate.value.length == 0){
       alert("Posting Dates field is empty");
    }

    

}