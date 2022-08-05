


$(function(){




// insert single
$(document).on("click", "#ins", function(e){

	e.preventDefault();

var yes = $("#yes").val();
var clause = $("#clause").val();
var ft = $("#f_t").val();
var mday = $("#mday").val();

	$.ajax({
		url:"insert_clause.php",
		type:"POST",
		data:{mday:mday,
			clause:clause, ft:ft},
		dataType:"text",
		beforeSend:function(){
			
		$("#yes").val('');
		$("#clause").val('');
		$("#f_t").val('');
		$("#mday").val('');

		},
		success:function(data){
		$("#tab-k").html(data);
		$("#mday").focus();	
		}

	});
});



$(document).on("click","#chk-v", function(e){
	e.preventDefault();

	var Result = $("#pre").val();
	var mday =	$("#mda").val();
	var clause =	$("#claus").val();
	var yes =	$("#btts").val();

	ars_cry(Result,yes,clause,mday);

});


});




function ars_cry(Result,yes,clause,mday){

var gg = [1,2];
var gc = [1,2,3,4,5,6,7,8];
var res = [1,2,3];

// btts 
var get_btts = Math.floor(Math.random() * gg.length);
var btts_res = gc[get_btts];

// hda
var get_res = Math.floor(Math.random() * res.length);
var res_res = res[get_res];

if (btts_res == 1) {
	var b_re = "yes";
}else{
	var b_re = "no";
}






if (res_res == 1) {
	var f_re = "Home";
}else if(res_res == 2){
	var f_re = "draw";
}else{
	var f_re = "away";
}


// $(".btts").html("Both to Score: " + b_re);
// $(".full-time").html("Full time " + f_re);

$(".btt").html("JavaScript ft: " + f_re);

$.ajax({
		url:"clause_result.php",
		type:"POST",
		data:{yes:yes,mday:mday,
			clause:clause, ft:Result},
		dataType:"text",
		beforeSend:function(){
			
		$("#mda").val('');
		$("#claus").val('');
		$("#btts").val('');
		$("#pre").val('');

		},
		success:function(data){
		
$(".full-time").html("Php Full time " + data );

		}

	});


}