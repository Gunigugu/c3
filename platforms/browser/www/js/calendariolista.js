$('#calendarioListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	console.log("sedes de " + id);
	$.getJSON(serviceURL + 'calendario.php?id='+id+'&codigo='+codigo, function (data) {
		var calendario = data.items;
		$.each(calendario, function(index, dia) {
				texto='';
				texto=texto+'<li class="lista_personalizada"><a href="calendariodetalle.html?id=' + dia.id +'&codigo='+codigo+ '">' +
					'<h4>'+ dia.titulo + '</h4>';
					//texto=texto+'<p>';
					
					'</a></li>';
					$('#calendarioList').append(texto);
		});
		$('#calendarioList').listview('refresh');
	});
});
