function deletelist(){
    $("#bt1").off().on("click",function(){
        console.log(111);
        $('ul>li:eq(2)').remove();
    })
}

function changecolor(){
    $("#bt2").off().on("click",function(){
        console.log(222)
        $("#p1").css('background', 'orange')
    })
}

function focusclick(){
    $("#p2").hover(function () {
        $(this).css('background', 'red');
    }, function () {
        $(this).removeAttr("style")
    }
)}

function click1(){
    $("#bt3").off().on("click",function(){
            var array = [1,2,3,4];
            var sum=0;
                for (let index = 0; index < array.length; index++) {
                      sum = sum + array[index];
                }
                console.log(sum);
             $("#listresult").text(sum);
        }
    )
}