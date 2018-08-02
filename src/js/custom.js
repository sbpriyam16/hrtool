//main customjs

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
});


// Calendar events
$('.event-calendar').equinox();