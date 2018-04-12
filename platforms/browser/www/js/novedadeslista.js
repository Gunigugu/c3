$('#novedadesListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("novedades for " + id);
	$.getJSON(serviceURL + 'novedades.php?id='+id, function (data) {
		var novedades = data.items;
		$.each(novedades, function(index, employee) {
				texto='';
					texto=texto+'<li><a href="novedadesdetalle.html?id=' + employee.id + '">' +
					'<img src="' + employee.picture + '"/>' +
						'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' ;
					if (employee.reportCount>0) {
						texto=texto+'<span class="ui-li-count">' + employee.reportCount + '</span>' ;
						}
					texto=texto+'</a></li>';
			$('#novedadesList').append(texto);
		});
		$('#novedadesList').listview('refresh');
	});
});
