//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

$(document).ready(function () {
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

  //display time and date
  setInterval(function () {
    $("#dateDisplay").text(moment().format("MMMM D YYYY hh:mm:ss"));
  }, 1000);

  //save button functionality. must write to local storage

  $(".saveButton").on("click", function (e) {
    e.preventDefault();

    var nineMorn = $("#9A").val();
    var tenMorn = $("#10A").val();
    var elevenMorn = $("#11A").val();
    var twelveNoon = $("#12P").val();
    var oneNoon = $("#1P").val();
    var twoNoon = $("#2P").val();
    var threeNoon = $("#3P").val();
    var fourNoon = $("#4P").val();
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

  var nineTime = moment().set("hour", 9).format("HH");
  var tenTime = moment().set("hour", 10).format("H");
  var elevenTime = moment().set("hour", 11).format("H");
  var twelveTime = moment().set("hour", 12).format("H");
  var oneTime = moment().set("hour", 13).format("H");
  var twoTime = moment().set("hour", 14).format("H");
  var threeTime = moment().set("hour", 15).format("H");
  var fourTime = moment().set("hour", 16).format("H");
  var fiveTime = moment().set("hour", 17).format("H");

  //input display. Past hours need to be grey. Current hour needs to be red. Remaining hours for the day need to be blue/green.

  var now = moment().format("HH");

  if (now > nineTime) {
    $("#9A").css("background-color", "grey");
  } else if (now === nineTime) {
    $("#9A").css("background-color", "red");
  } else {
    $("#9A").css("background-color", "green");
  }

  if (now > tenTime) {
    $("#10A").css("background-color", "grey");
  } else if (now === tenTime) {
    $("#10A").css("background-color", "red");
  } else {
    $("#10A").css("background-color", "green");
  }

  if (now > elevenTime) {
    $("#11A").css("background-color", "grey");
  } else if (now === elevenTime) {
    $("#11A").css("background-color", "red");
  } else {
    $("#11A").css("background-color", "green");
  }

  if (now > twelveTime) {
    $("#12P").css("background-color", "grey");
  } else if (now === twelveTime) {
    $("#12P").css("background-color", "red");
  } else {
    $("#12P").css("background-color", "green");
  }

  if (now > oneTime) {
    $("#1P").css("background-color", "grey");
  } else if (now === oneTime) {
    $("#1P").css("background-color", "red");
  } else {
    $("#1P").css("background-color", "green");
  }

  if (now > twoTime) {
    $("#2P").css("background-color", "grey");
  } else if (now === twoTime) {
    $("#2P").css("background-color", "red");
  } else {
    $("#2P").css("background-color", "green");
  }

  if (now > threeTime) {
    $("#3P").css("background-color", "grey");
  } else if (now === threeTime) {
    $("#3P").css("background-color", "red");
  } else {
    $("#3P").css("background-color", "green");
  }

  if (now > fourTime) {
    $("#4P").css("background-color", "grey");
  } else if (now === fourTime) {
    $("#4P").css("background-color", "red");
  } else {
    $("#4P").css("background-color", "green");
  }

  if (now > fiveTime) {
    $("#5P").css("background-color", "grey");
  } else if (now === fiveTime) {
    $("#5P").css("background-color", "red");
  } else {
    $("#5P").css("background-color", "green");
  }
});
