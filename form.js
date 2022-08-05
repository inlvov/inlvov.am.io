$(function(){





$(document).on("click", "#chks-team", function(e){
	e.preventDefault();

var val = $("#dds").val();
var home = $("#h1-team").val();
var away = $("#h2-team").val();

$.ajax({
		url:"check_team.php",
		type:"POST",
		data:{home:home,val:val,
			away:away},
		dataType:"text",
		beforeSend:function(){
			
		$("#h1-team").val('');
		$("#h2-team").val('');
		},
		success:function(data){
		$("#tab-addst").fadeIn().html(data);
		
		}

	});

});







$(document).on("click", "#chks", function(e){
	e.preventDefault();

var val = $("#dds").val();
var home = $("#h1").val();
var away = $("#h2").val();

$.ajax({
		url:"check_all.php",
		type:"POST",
		data:{home:home,val:val,
			away:away},
		dataType:"text",
		beforeSend:function(){
			
		$("#h1").val('');
		$("#h2").val('');
		},
		success:function(data){
		$("#tab-adds").fadeIn().html(data);
		
		}

	});

});








$(document).on("change", "#title-check", function(e){
	e.preventDefault();

var $this = $(this);
var val = $this.val();
$("#dds").val(val);

$.ajax({
		url:"form_call.php",
		type:"POST",
		data:{val:val},
		dataType:"text",
		beforeSend:function(){

		},
		success:function(data){
		$("#tab-add").html(data);
		$("#tab-adds").fadeOut();

		}

	});

});


$(document).on("click", "#inse", function(e){
	e.preventDefault();

var title = $("#title").val();
var homes = $("#homes").val();
var homes_r = $("#homes-r").val();
var aways = $("#aways").val();
var aways_r = $("#aways-r").val();
var fts = $("#fts").val();


$.ajax({
		url:"form_insert.php",
		type:"POST",
		data:{title:title, homes:homes, 
			homes_r:homes_r, aways:aways, aways_r:aways_r,fts:fts},
		dataType:"text",
		beforeSend:function(){
			
		$("#title").val('');
		$("#homes").val('');
		$("#homes-r").val('');
		$("#aways").val('');
		$("#aways-r").val('');
		$("#fts").val('');

		},
		success:function(data){
		$("#tab-add").html(data);
		$("#title").focus();	
		}

	});

	
});


});