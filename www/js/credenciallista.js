$('#credencialListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	console.log("credencial de " + id);
	$.getJSON(serviceURL + 'credencial.php?id='+id+'&codigo='+codigo, function (data) {
		var credencial = data.items;
		$.each(credencial, function(index, beneficios) {
				texto='';
				texto=texto+'<li><a href="credencialdetalle.html?id=' + beneficios.id +'&codigo='+codigo+ '">' +
					'<img src="http://www.cece.org/cece2013/logos/' + beneficios.imagen + '"/>' +
					'<h4>'+ beneficios.comercio + '</h4>' +
					'<p>' + beneficios.mediopago +'</p>' +
					'<p>' + beneficios.descuento +'</p>';
					//texto=texto+'<p>';
					texto=texto+'<span class="ui-li-count">' + beneficios.rubro + '</span>' +
					'</a></li>';
					$('#credencialList').append(texto);
		});
		$('#credencialList').listview('refresh');
	});
});
