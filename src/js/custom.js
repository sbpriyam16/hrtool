//main customjs

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
});

$('[data-toggle="tooltip"]').tooltip(); 

$('[data-toggle="popover"]').popover(); 


// Calendar events
$('.event-calendar').equinox({
	events: [{
		start: '2018-08-06 9:00',
		end: '2018-08-06 18:00',
		title: 'Leave Approved',
		class: 'leave-approved',
		data: {}
	},
	{
		start: '2018-08-07 9:00',
		end: '2018-08-07 18:00',
		title: 'Sick Leave',
		class: 'sick-leave',
		data: {}
	},
	{
		start: '2018-08-08 9:00',
		end: '2018-08-08 18:00',
		title: 'Emergency',
		class: 'emergency-leave',
		data: {}
	},
	{
		start: '2018-08-09 9:00',
		end: '2018-08-09 18:00',
		title: 'Work From Home',
		class: 'work-from-home',
		data: {}
	},
	{
		start: '2018-08-10 9:00',
		end: '2018-08-10 18:00',
		title: 'Training',
		class: 'training',
		data: {}
	},
	{
		start: '2018-08-13 9:00',
		end: '2018-08-17 13:00',
		title: 'Leave Requested',
		class: 'leave-requested',
		data: {}
	},
	{
		start: '2018-08-20 9:00',
		end: '2018-08-20 13:00',
		title: 'First half',
		class: 'leave-requested first-half',
		data: {}
	},
	{
		start: '2018-08-21 9:00',
		end: '2018-08-21 13:00',
		title: 'Second Half',
		class: 'leave-requested second-half',
		data: {}
	}],
});
