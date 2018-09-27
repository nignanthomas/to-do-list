//Business Logic
function Task(name, details){
  this.name = name,
  this.details = details
}



//User Interface
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var taskName = $("#task-name").val();
    var taskDetails = $("#task-details").val();
    var newTask = new Task(taskName, taskDetails);
    // $(".to-do").append("<li class='htask'>"+ newTask.name +"</li>");
    $("ol.to-do").append("<li class='htask'>"+ newTask.name +" <ul><li class='hdetails'>"+ newTask.details+"</li></ul><ul><li><button type='button' class='done-btn'>Done</button></li></ul> </li>");
    //in the above line I nested the <ul>s for details and the buttons inside the <li> for task name so that tey are children of the <li> and disappear with the <li> when I click DONE! That's crazy

    // $(".to-do").append("<ul><li class='hdetails'>"+ newTask.details+"</li></ul>");
    // $(".to-do").append("<ul><li><button type='button' class='done-btn'>Done</button></li></ul>");

    $(".done-btn").last().click(function(){
      var completed = $(this).closest("li.htask");

      $("ol.done").append("<li style='background-color: green'>"+completed.text()+"</li>")
      $(this).closest("li.htask").remove();

    })



    $("#task-name").val("");
    $("#task-details").val("");
  });
});
