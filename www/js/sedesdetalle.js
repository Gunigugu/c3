$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'sedesdetalle.php?id='+id, sedeDetalle);
});

function sedeDetalle(data) {
	var sede = data.item;
	console.log(sede);
		texto='';
			texto=texto+'' +
				'<img src="' + sede.imagen + '"  width="100%" /><div class="divider"></div>';

				texto=texto+'' +
					'<h3>'+ sede.titulo + '</h3>' +
					'<p>' + sede.descrip +'</p>';
					
	texto=texto+'';
	texto=texto+'';
	$('#sedes').html(texto);

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
