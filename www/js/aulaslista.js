$('#aulasListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	console.log("aulas for " + id);
	$.getJSON(serviceURL + 'aulas.php?id='+id+'&codigo='+codigo, function (data) {
		var aulas = data.items;
		$.each(aulas, function(index, employee) {
			$('#aulasList').append('<li class="lista_personalizada"><a href="aulasdetalle.html?id=' + employee.id +'&codigo='+ codigo + '">' +
					'<h4>' + employee.firstName + '</h4>' +
					'<p>' + employee.lastName + '</p>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">Aula: ' + employee.reportCount + '</span></a></li>');
		});
		$('#aulasList').listview('refresh');
	});
});
