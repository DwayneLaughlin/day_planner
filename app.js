//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

console.log("Load")
$(document).ready(function(){
    var nineAm = document.getElementById("9A");
    var tenAm = document.getElementById("10A");
    var elevenAm = document.getElementById("11A");
    var twelvePm = document.getElementById("12P");
    var onePm = document.getElementById("1P");
    var twoPm = document.getElementById("2P");
    var threePm = document.getElementById("3P");
    var fourPm = document.getElementById("4P");
    var fivePm = document.getElementById("5p");
 
    // var now = moment().get('hour');
    
    
    
    
    
    
    
    //display time and date
    setInterval(function(){
        $("#dateDisplay").text(moment().format("MMMM D YYYY hh:mm:ss")) 
        }, 1000);
    
    
    //save button functionality. must write to local storage
    
    
    
    
    
    $(".saveButton").on("click", function(e){
        e.preventDefault();
        var nineMorn = $("#9A").val();
        var tenMorn = $("#10A").val();
        var elevenMorn = $("#11A").val()
        var twelveNoon = $("#12P").val()
        var oneNoon = $("#1P").val()
        var twoNoon = $("#2P").val()
        var threeNoon = $("#3P").val()
        var fourNoon = $("#4P").val()
        var fiveNoon = $("#5P").val()

     localStorage.setItem("whatever", nineMorn);
     localStorage.getItem("whatever");

     localStorage.setItem("elevenSlot", elevenMorn);
     localStorage.getItem("elevenSlot");

     localStorage.setItem("twelveSlot", twelveNoon);
     localStorage.getItem("twelveSlot");

     localStorage.setItem("oneSlot", oneNoon);
     localStorage.getItem("oneSlot");

     localStorage.setItem("twoSlot", twoNoon);
     localStorage.getItem("twoSlot");

     localStorage.setItem("threeSlot", threeNoon);
     localStorage.getItem("threeSlot");

     localStorage.setItem("fourSlot", fourNoon);
     localStorage.getItem("fourSlot");

     localStorage.setItem("fiveSlot", fiveNoon);
     localStorage.getItem("fiveSlot");

     localStorage.setItem("tenSlot", tenMorn);
     localStorage.getItem("tenSlot");
     
   
     
    
        
       
    });
    
    
    
    //input display. Past hours need to be grey. Current hour needs to be red. Remaining hours for the day need to be blue/green.
    
    
    $("textarea").css("background-color", "green")
    // var timeBox = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm,fourPm, fivePm];
    // console.log(timeBox)
    
    //for(var i = 0; i <timeBox.length; i++){
        
      //  if (now > timeBox[i.hour]){
            //alert("this happened")
        //} else {
            //alert("this didnt happen")
        //};
    //};
    
    
    
    
    
    
    
    
    
    
    });