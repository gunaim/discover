/*search input text clear*/
    $('.left-side .input-group-append').click(function () {
        $(".left-side #search-input").val("");
    })

/*range slider start*/
var $range = $("#range_49");
var min = 0;
var max = 250;
var  $input1 = $(".c1");
var  $input2 = $(".d1");
$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 0,
    to: 177,
    onStart: function (data) {
        $input1.prop("value", data.from);
        $input2.prop("value", data.to);
    },
    onChange: function (data) {
        $input1.prop("value", data.from);
        $input2.prop("value", data.to);
    }
});

var instance = $range.data("ionRangeSlider");
$input1.on("change keyup",function () {
    var val = $(this).prop("value");
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }
    instance.update({
        from: val
    });
});

$input2.on("change keyup",function () {
    var val = $(this).prop("value");
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }
    instance.update({
        to: val
    });
});

/*no-photo img*/
$('img').on("error",function(){
    $(this).attr('src', '../img/image-not-found.png');
});

/*hover change img*/

var $img=$('.reklam a img');
var $url=$img.attr("src");
$('.reklam a').hover(function () {
    $img.attr('src',$img.attr('data-src'));
},function () {
    $img.attr('src',$url);
});