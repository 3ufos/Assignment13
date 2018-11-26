$(document).ready(function(){
	$.ajax({
		'url':"https://api.thecatapi.com/v1/images/search?",
			'type':"GET",
			'dataType':"JSON",
			'data':{
					'size':"full",
				},
				success:function(data){
					console.log(data[0].url);
					$('p').append("<img id='under' src='" + data[0].url + "'>");
				},
				error:function(data,textStatus,errorThrown){
					alert("error");
					console.log(errorThrown);
				},
	});
})