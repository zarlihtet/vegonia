// Start jQuery Area

$(document).ready(function(){
// console.log("heee");
	
	// Start Header
	// Start Navbar

	$(".navbuttons").click(function(){

		$(this).toggleClass("crossxs");


	});

	// End Navbar
	// End Header

	// Start Login Box

	$("#openform").click(function(){

		$("#form-popup").css("display","block");

	});

	$("#form-close-btn").click(function(){
		document.getElementById("form-popup").style.display = "none";
	});

	// End Login Box



});

// End jQuery Area



// Start Javascript Area

// Start Student Counter Section

var getcountervalues = document.querySelectorAll(".countervalues");
// console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){

	getcountervalue.textContent = 0;


	const updatecounter = function(){
		// console.log("i am working");

		const getcttarget = +getcountervalue.getAttribute("data-target");
		// console.log(getcttarget);
		// console.log(typeof getcttarget);

		const getctcontent = +getcountervalue.innerText;
		// console.log( getctcontent);

		const incnumber = getcttarget / 100;
		// console.log(incnumber);

		if(getctcontent < getcttarget){

			getcountervalue.textContent = incnumber + getctcontent;

			setTimeout(updatecounter,50);

		}


	}

	updatecounter();

});

// End Student Counter Section

// Start Rating Section

// start google chart api
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

    	var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Sirilanka',    8]
        ]);

        var options = {
          title: 'International Students',
          is3D: true,
          // pieHole: 0.4,
          // pieSliceTextStyle: {
          //   color: 'black',
          // },
          width:550,
          height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

// end google chart api

// End Rating Section

// Start Footer Section

document.getElementById('getyear').textContent = new Date().getUTCFullYear();

// End Footer Section

// End Javascript Area