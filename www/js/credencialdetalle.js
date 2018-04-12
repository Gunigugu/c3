$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'credencialdetalle.php?id='+id, credencialDetalle);
});

function credencialDetalle(data) {
	var beneficios = data.item;
	console.log(beneficios);
		texto='';
				texto=texto+'' +
					'<img src="http://www.cece.org/cece2013/logos/' + beneficios.imagen + '"  width="99%"  />' +
					'<h4>'+ beneficios.comercio + '</h4>' +
					'<p>Direccion: ' + beneficios.direccion +'</p>' +
					'<p>Contacto: ' + beneficios.contacto +'</p>' +
					'<p>Medios de Pago: ' + beneficios.mediopago +'</p>' +
					'<p>Beneficio: ' + beneficios.descuento +'</p>';
					//texto=texto+'<p>';
					texto=texto+'<p>Rubro: ' + beneficios.rubro + '</p>' +
					'';
					
	texto=texto+'';
	texto=texto+'';
	$('#BeneficiosCredencial').html(texto);

	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
