


$(document).on("change", "#tea", function(e){
e.preventDefault();

var $this = $(this);
var v = $this.val();

$("#dd").val(v);

});

$(document).on("change", "#gg_se", function(e){
e.preventDefault();

var $this = $(this);
var v = $this.val();

$("#dd_se").val(v);

});



// goal search

$(document).on("click", "#goal_go" , function(e){
	e.preventDefault();

var search = $("#gg_search").val();
var team = $("#dd_se").val();


if (search !== "") {
	$.ajax({
		url:"next_check.php",
		type:"POST",
		data:{
			search:search,
			team:team
		},
		dataType:"text",
		success:function(data){
		
			$("#divs_se").fadeIn().html(data);

				}
	});
}else{
	$("#divs_se").val("");
}

});






// double search
$(document).on("click", "#match_btn", function(e){
e.preventDefault();

var home = $("#h_match").val();
var away = $("#a_match").val();
var draw = $("#d_match").val();

$.ajax({
	url:"match.php",
	type:"POST",
	data:{home:home, away:away, draw:draw},
	dataType:"text",
	success:function(data){
			$("#divs-m").html(data);
	}

});

});



// double search
$(document).on("click", "#dob_btn", function(e){
e.preventDefault();

var home = $("#h_dob").val();
var away = $("#a_dob").val();

$.ajax({
	url:"double.php",
	type:"POST",
	data:{home:home, away:away},
	dataType:"text",
	success:function(data){
			$("#divs-d").html(data);
	
	}

});

});



// shs search

$("#shs_search").on("keyup" , function(e){
	e.preventDefault();

var $this = $(this);
var search = $(this).val();
var team = $("#dd").val();


if (search !== "") {
	$.ajax({
		url:"single_home.php",
		type:"POST",
		data:{
			search:search,
			team:team
		},
		dataType:"text",
		success:function(data){
		
			$("#divs").fadeIn().html(data);

				}
	});
}else{
	$("#divs").val("");
}

});



$("#res").on("keyup" , function(e){
	e.preventDefault();

var search = $(this).val();

if (search !== "") {
	$.ajax({
		url:"res.php",
		type:"POST",
		data:{
			search:search
		},
		dataType:"text",
		success:function(data){
		
			$("#divs_odd").html(data);

				}
	});
}else{
	$("#divs_odd").clear();
}

});





$("#odds").on("keyup" , function(e){
	e.preventDefault();

var search = $(this).val();

if (search !== "") {
	$.ajax({
		url:"single_odd.php",
		type:"POST",
		data:{
			search:search
		},
		dataType:"text",
		success:function(data){
		
			$("#divs_odd").html(data);

				}
	});
}else{
	$("#divs_odd").clear();
}

});





//delete fixture
$(document).on("click", "#delete", function(e){
e.preventDefault();

var id = $(this).data('id');

$.ajax({
	url:"delete.php",
	type:"POST",
	data:{id:id},
	dataType:"text",
	success:function(){
		$("tr[data-id='"+id+"']").fadeOut();
	}

});

});



// edit results
$(document).on("keyup", "#rs", function(e){

	if (e.keyCode == 13) {

e.preventDefault();

var $this = $(this);
var id = $this.data("id");

var v = $this.val();

$.ajax({
	url:"edit.php",
	type:"POST",
	data:{v:v,id:id},
	dataType:"text",
	beforeSend:function(){

	},
	success:function(data){
$("#rs[data-id='"+id+"']").val(data);
	}
});


}



});


// $.ajax({
// 	url:"games.php",
// 	type:"GET",
// 	dataType:"text",
// 	success:function(data){
// 		$("#tab-all").fadeIn();
// 	$(".all").fadeIn().html(data);
// 	}
// });



$(document).on("keyup", "#ht", function(e){

	  if (e.keyCode == 13) {
	e.preventDefault();

var team = $("#team").val();
var home = $("#home").val();
var draw = $("#draw").val();
var away = $("#away").val();
var ft = $("#ft").val();
var ht = $("#ht").val();



	$.ajax({
		url:"insert.php",
		type:"POST",
		data:{home:home, draw:draw, 
			away:away, ht:ht, ft:ft, team:team},
		dataType:"text",
		beforeSend:function(){
			
		$("#team").val('');
		$("#home").val('');
		$("#draw").val('');
		$("#away").val('');
$("#ft").val('');
$("#ht").val('');
		},
		success:function(data){
			$("#tab-add").html(data);
		$("#team").focus();	
		}

	});
}
});


// check two teams
$(document).on("click", "#chk", function(e){

	e.preventDefault();

var home = $("#h1").val();
var away = $("#h2").val();

$.ajax({
		url:"check.php",
		type:"POST",
		data:{home:home,
			away:away},
		dataType:"text",
		beforeSend:function(){
			
		$("#h1").val('');
		$("#h2").val('');
		},
		success:function(data){
		$("#divs").fadeIn().html(data);
		
		}

	});

});



// insert single
$(document).on("click", "#insert-s", function(e){

	e.preventDefault();

var home = $("#homes").val();
var away = $("#aways").val();
var ft = $("#fts").val();



	$.ajax({
		url:"insert_single.php",
		type:"POST",
		data:{home:home,
			away:away, ft:ft},
		dataType:"text",
		beforeSend:function(){
			
		$("#homes").val('');
		$("#aways").val('');
		$("#fts").val('');
		},
		success:function(data){
		$("#tab-add").html(data);
		$("#homes").focus();	
		}

	});
});










$(document).on("click", "#insert-btn", function(e){

	e.preventDefault();

var team = $("#team").val();
var home = $("#home").val();
var draw = $("#draw").val();
var away = $("#away").val();
var ft = $("#ft").val();
var ht = $("#ht").val();



	$.ajax({
		url:"insert.php",
		type:"POST",
		data:{home:home, draw:draw, 
			away:away, ht:ht, ft:ft, team:team},
		dataType:"text",
		beforeSend:function(){
			
		$("#team").val('');
		$("#home").val('');
		$("#draw").val('');
		$("#away").val('');
$("#ft").val('');
$("#ht").val('');
		},
		success:function(data){
			$("#tab-add").html(data);
		$("#team").focus();	
		}

	});
});







// last 
$(document).on("click", "#insert-btnl", function(e){
e.preventDefault();

var home = $("#homel").val();
var draw = $("#drawl").val();
var away = $("#awayl").val();
var result = $("#resultl").val();

	$.ajax({
		url:"insert_last.php",
		type:"POST",
		data:{home:home, draw:draw, away:away, result:result},
		dataType:"text",
		beforeSend:function(){
			

		$("#homel").val('');
		$("#drawl").val('');
		$("#awayl").val('');
		$("#resultl").val('');



		},
		success:function(data){
			$("#tab-addl").html(data);
		}

	});


});





// double search
$(document).on("click", "#lob_btn", function(e){
e.preventDefault();

var home = $("#h_dob").val();
var away = $("#a_dob").val();

$.ajax({
	url:"double_last.php",
	type:"POST",
	data:{home:home, away:away},
	dataType:"text",
	success:function(data){
			$("#divs-d").html(data);
	
	}

});

});



// shs search

$("#lhs_search").on("keyup" , function(e){
	e.preventDefault();

var search = $(this).val();

if (search !== "") {
	$.ajax({
		url:"single_home_last.php",
		type:"POST",
		data:{
			search:search
		},
		dataType:"text",
		success:function(data){
		
			$("#divs").html(data);

				}
	});
}else{
	$("#divs").clear();
}

});
