//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


$(document).ready(function(){

       var whatever = localStorage.getItem("whatever");
       $("#9A").val(whatever);

       var tenSlot = localStorage.getItem("tenSlot");
       $("#10A").val(tenSlot);

       var elevenSlot = localStorage.getItem("elevenSlot");
       $("#11A").val(elevenSlot);

       var twelveSlot = localStorage.getItem("twelveSlot");
       $("#12p").val(twelveSlot);

       var oneSlot = localStorage.getItem("oneSlot");
       $("#1P").val(oneSlot);

       var twoSlot = localStorage.getItem("twoSlot");
       $("#2P").val(twoSlot);

       var threeSlot = localStorage.getItem("threeSlot");
       $("#3P").val(threeSlot);

       var fourSlot = localStorage.getItem("fourSlot");
       $("#4P").val(fourSlot);

       var fiveSlot = localStorage.getItem("fiveSlot");
       $("#5P").val(fiveSlot);
   

   
    var nineAm = document.getElementById("9A");
    var tenAm = document.getElementById("10A");
    var elevenAm = document.getElementById("11A");
    var twelvePm = document.getElementById("12P");
    var onePm = document.getElementById("1P");
    var twoPm = document.getElementById("2P");
    var threePm = document.getElementById("3P");
    var fourPm = document.getElementById("4P");
    var fivePm = document.getElementById("5p");
 
    
    
    
    
    
    
    
    
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
        var fiveNoon = $("#5P").val();

     localStorage.setItem("whatever", nineMorn);
     localStorage.setItem("elevenSlot", elevenMorn);
     localStorage.setItem("twelveSlot", twelveNoon);
     localStorage.setItem("oneSlot", oneNoon);
     localStorage.setItem("twoSlot", twoNoon);
     localStorage.setItem("threeSlot", threeNoon);
     localStorage.setItem("fourSlot", fourNoon);
     localStorage.setItem("fiveSlot", fiveNoon);
     localStorage.setItem("tenSlot", tenMorn);
    });


    
    
    
    //input display. Past hours need to be grey. Current hour needs to be red. Remaining hours for the day need to be blue/green.
    
    
    $("textarea").css("background-color", "green")

    var now = moment().get('hour');
        var nine = moment().set("hour",9);
        var nineTime = Number(nine)
        console.log(nineTime)
    //  var timeBox = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm,fourPm, fivePm];
    //  console.log(timeBox)
    
    // for(var i = 0; i <timeBox.length; i++){
        
    //    if (Number (now) > ){
    //         alert("this happened")
    //     } else {
    //         alert("this didnt happen")
    //     };
    // };
    
    
    
    
    
    
    
    
    
    
    });