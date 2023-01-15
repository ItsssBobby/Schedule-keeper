// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    
    $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY')); 

    $(".saveBtn").on("click",function(){
        var time = $(this).parent().attr("id")
        var value = $(this).siblings(".description").val()
        localStorage.setItem(time,value)
    })
   
   function timeChecker() {
    var currentTime = parseInt(dayjs().format('H'));
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockTime);

        if(blockTime < currentTime) {
            $(this).addClass("past");
        } else if(blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
   }

   timeChecker()
   setInterval(timeChecker,30000)
    
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))


});