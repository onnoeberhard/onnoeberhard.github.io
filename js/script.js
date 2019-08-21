$(function () {
    function setAspectRatio() {
        $(".youtube").each(function () {
            $(this).css('height', $(this).width() * 9 / 16);
        });
    }

    setAspectRatio();
    $(window).resize(setAspectRatio);
});

// AJAX something cool from onnoeberhard.com
// $("#sidetext").load("https://onnoeberhard.com/somethingcool")

// Hide all but the first footnote-link (useful for captions)
for (i = 1; i <= Number($(".footnotes > ol > li:last-child").attr('id').substring(3)); i++) {
    $("#fnref\\:" + i).last().hide()
    $("#fnref\\:" + i).first().show()
}

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}