$(document).ready(function() {
    
    $(".myskills-btn").mouseenter(function(){
        $(".myskills-btn").addClass("highlight-box highlight-text");
    }).mouseleave(function(){
        $(".myskills-btn").removeClass("highlight-box highlight-text");
    })
    
    $(".aboutme, .myskills").mouseenter(function(){
        $(".skills").hide();
    });
    $("button").click(function () {
        $(".skill-1").fadeIn("slow").next().delay(300).fadeIn("slow").next().delay(600).fadeIn("slow");
        $(".skill-4").delay(900).fadeIn("slow").next().delay(1200).fadeIn("slow").next().delay(1500).fadeIn("slow");
    });

})