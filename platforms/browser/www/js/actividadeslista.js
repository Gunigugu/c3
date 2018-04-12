$('#actividadesListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("actividades for " + id);
	$.getJSON(serviceURL + 'actividades.php?id='+id, function (data) {
		var actividades = data.items;
		$.each(actividades, function(index, employee) {
				texto='';
					texto=texto+'<li><a href="novedadesdetalle.html?id=' + employee.id + '">' +
					'<img src="' + employee.picture + '"/>' +
						'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' ;
					if (employee.reportCount>0) {
						texto=texto+'<span class="ui-li-count">' + employee.reportCount + '</span>' ;
						}
					texto=texto+'</a></li>';
			$('#actividadesList').append(texto);
		});
		$('#actividadesList').listview('refresh');
	});
});
