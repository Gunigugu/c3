$('#planosaulasListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	console.log("planosaulas de " + id);
	$.getJSON(serviceURL + 'planosaulas.php?id='+id+'&codigo='+codigo, function (data) {
		var planosaulas = data.items;
		$.each(planosaulas, function(index, planos) {
				texto='';
				texto=texto+'<li class="lista_personalizada"><a href="planosaulasdetalle.html?id=' + planos.id +'&codigo='+codigo+ '">' +
					'<img src="' + planos.imagen + '"/>' +
					'<h4>'+ planos.titulo + '</h4>' +
					'<p>Sede: ' + planos.sede  +
					'| ' + planos.descrip +'</p>';
					//texto=texto+'<p>';
					
					'</a></li>';
					$('#planosaulasList').append(texto);
		});
		$('#planosaulasList').listview('refresh');
	});
});
