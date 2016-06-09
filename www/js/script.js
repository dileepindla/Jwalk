
 $(document).ready(function () {
                $(".btn").hide();
            $.ajax({
                url: "http://dileepindla.16mb.com/server/posts.php",
                type: "post",
                success: function (msg) {
                    $(".list").append(msg);
                    $(".load").hide();
                    $(".btn").show();
                }
            });
        });
    function more(){
            $(".load").show();
            var num=$("#limit").val();
            $.ajax({
                url: "http://dileepindla.16mb.com/server/more.php",
                data:"limit="+num,
                type: "post",
                success: function (data) {
                    $(".list").append(data);
                    $(".load").hide();
                    var add=Number(num)+1;
                    $("#limit").val(add);
                    if(data==""){
                        $("#nodata").html("<strong>No More Results</strong>")
                    }
                }
            });
        }
