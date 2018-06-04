$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'credencialdetalle.php?id='+id, credencialDetalle);
});

function credencialDetalle(data) {
	var beneficios = data.item;
	console.log(beneficios);

		texto='';
				texto=texto+'<span class="tags">' + beneficios.rubro + '</span>' + '';
				texto=texto+'' +
					'<img src="http://www.cece.org/cece2013/logos/' + beneficios.imagen + '" />' +
					'<h3>'+ beneficios.comercio + '</h3><div class="divider"></div>' +
                    '<p><img class="icon-size-mr" src="img/direccion.png"><font color="#555555"><span style="font-size: 10px;">Dirección</span></font><br>'+beneficios.direccion+'</p><div class="divider"></div>'+
					'<p><img class="icon-size-mr" src="img/contacto.png"><font color="#555555"><span style="font-size: 10px;">Contacto</span></font><br>'+beneficios.contacto+'</p><div class="divider"></div>'+
					'<p><img class="icon-size-mr" src="img/contacto.png"><font color="#555555"><span style="font-size: 10px;">Medios de pago</span></font><br>'+beneficios.mediopago+'</p><div class="divider"></div>'+
					'<p><img class="icon-size-mr" src="img/contacto.png"><font color="#555555"><span style="font-size: 10px;">Beneficio</span></font><br>'+beneficios.descuento+'</p><div class="divider"></div>';


					

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
