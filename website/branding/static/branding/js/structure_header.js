// Committee/Section header
$('#section-switch').click(function(ev) {
    ev.preventDefault();
    setTimeout(function () {
        $('.committees').hide();
        $('.sections').show();
    }, 100);
});
$('#committee-switch').click(function(ev) {
    ev.preventDefault();
    setTimeout(function () {
        $('.sections').hide();
        $('.committees').show();
    }, 100);
});