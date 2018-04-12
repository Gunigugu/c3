$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'calendariodetalle.php?id='+id, calendarioDetalle);
});

function calendarioDetalle(data) {
	var dia = data.item;
	console.log(dia);
		texto='';
				texto=texto+'' +
					'<img src="' + dia.imagen + '"  width="99%" />' +
					'<h4>'+ dia.titulo + '</h4>' +
					'<p>' + dia.descrip +'</p>';
					
	texto=texto+'';
	texto=texto+'';
	$('#calendario').html(texto);

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
