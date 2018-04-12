$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'planesestudiodetalle.php?id='+id, planesestudioDetalle);
});

function planesestudioDetalle(data) {
	var planes = data.item;
	console.log(planes);
		texto='';
				texto=texto+'' +
					'<img src="' + planes.imagen + '"  width="99%" />' +
					'<h4>'+ planes.titulo + '</h4>' +
					'<p>' + planes.descrip +'</p>';
					
	texto=texto+'';
	texto=texto+'';
	$('#planesestudio').html(texto);

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
