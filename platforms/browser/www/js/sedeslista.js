$('#sedesListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	console.log("sedes de " + id);
	$.getJSON(serviceURL + 'sedes.php?id='+id+'&codigo='+codigo, function (data) {
		var sedes = data.items;
		$.each(sedes, function(index, sede) {
				texto='';
				texto=texto+'<li><a href="sedesdetalle.html?id=' + sede.id +'&codigo='+codigo+ '">' +
					'<img src="' + sede.imagen + '"/>' +
					'<h4>'+ sede.titulo + '</h4>' +
					'<p>' +sede.descrip +'</p>';
					//texto=texto+'<p>';
					
					'</a></li>';
					$('#sedesList').append(texto);
		});
		$('#sedesList').listview('refresh');
	});
});
