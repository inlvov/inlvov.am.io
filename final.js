$(function(){

$(document).on("click", "#insert-final", function(e){
	e.preventDefault();

var home_one = $("#home-one").val();
var away_one = $("#away-one").val();
var home_two = $("#home-two").val();
var away_two = $("#away-two").val();
var home_team = $("#home-team").val();
var result = $("#result").val();
var away_team = $("#away-team").val();



$.ajax({
		url:"final_insert.php",
		type:"POST",
		data:{
			home_one:home_one,
			away_one:away_one,
			home_two:home_two,
			away_two:away_two,
			home_team:home_team,
			result:result,
			away_team:away_team



		},
		dataType:"text",
		beforeSend:function(){
			
		$("#home-one").val('');
		$("#home-two").val('');
		$("#away-one").val('');
		$("#away-two").val('');
		$("#home-team").val('');
		$("#result").val('');
		$("#away-team").val('');

		},
		success:function(data){
		$("#tab-add").html(data);
		$("#home-one").focus();	
		}

	});

	
});





// check two teams
$(document).on("click", "#chk", function(e){

	e.preventDefault();

var home = $("#h1").val();
var away = $("#h2").val();

$.ajax({
		url:"check_final.php",
		type:"POST",
		data:{home:home,
			away:away},
		dataType:"text",
		beforeSend:function(){
			
		$("#h1").val('');
		$("#h2").val('');
		},
		success:function(data){
		$("#res").fadeIn().html(data);
		
		}

	});

});




// check two teams
$(document).on("click", "#chk-c", function(e){

	e.preventDefault();

var home = $("#c1").val();
var away = $("#c2").val();

$.ajax({
		url:"check_clause.php",
		type:"POST",
		data:{home:home,
			away:away},
		dataType:"text",
		beforeSend:function(){
			
		$("#c1").val('');
		$("#c2").val('');
		},
		success:function(data){
		$("#ress").fadeIn().html(data);
		$("#c1").focus();

		
		}

	});

});






// check four teams
$(document).on("click", "#chk-cs", function(e){

	e.preventDefault();

var home = $("#c1").val();
var away = $("#c2").val();
var home1 = $("#cc1").val();
var away1 = $("#cc2").val();

var team1 = $("#te1").val();
var team2 = $("#te2").val();



$.ajax({
		url:"check_four.php",
		type:"POST",
		data:{home:home,home1:home1,away1:away1,
			away:away,team1:team1,team2:team2},
		dataType:"text",
		beforeSend:function(){
			
		$("#c1").val('');
		$("#c2").val('');
		$("#cc1").val('');
		$("#cc2").val('');
		


		},
		success:function(data){
		$("#ress").fadeIn().html(data);
		$("#c1").focus();

		}
	});
});





// final check
$(document).on("click", "#fhk-cs", function(e){

	e.preventDefault();

var home = $("#f1").val();
var away = $("#f2").val();
var home1 = $("#fc1").val();
var away1 = $("#fc2").val();

var team1 = $("#fe1").val();
var team2 = $("#fe2").val();



$.ajax({
		url:"check_.php",
		type:"POST",
		data:{home:home,home1:home1,away1:away1,
			away:away,team1:team1,team2:team2},
		dataType:"text",
		beforeSend:function(){
			
		$("#f1").val('');
		$("#f2").val('');
		$("#fc1").val('');
		$("#fc2").val('');
		


		},
		success:function(data){
		$("#re").fadeIn().html(data);
		$("#f1").focus();

		
		}

	});

});




});