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


  timeChecker()
  setInterval(timeChecker,30000)


   
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


});