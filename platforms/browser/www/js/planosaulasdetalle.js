$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'planosaulasdetalle.php?id='+id, planosaulasDetalle);
});

function planosaulasDetalle(data) {
	var planos = data.item;
	console.log(planos);
		texto='';
				texto=texto+'' +
					'<img src="' + planos.imagen + '"  width="99%" />' +
					'<h4>'+ planos.titulo + '</h4>' +
					'<p>Sede: ' + planos.sede  +'</p>'+
					'<p>' + planos.descrip +'</p>';
					
	texto=texto+'';
	texto=texto+'';
	$('#planosaulas').html(texto);

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
