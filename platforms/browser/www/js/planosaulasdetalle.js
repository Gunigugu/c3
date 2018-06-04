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
					'<img src="' + planos.imagen + '"  width="100%" /><div class="divider"></div>' +
					'<h3>'+ planos.titulo + '</h3><div class="divider"></div>' +
                    '<p><img class="icon-size-mr" src="img/sede.png"><font color="#555555"><span style="font-size: 10px;">Sede</span></font><br>'+planos.sede+'</p><div class="divider"></div>'+
					'<p>'+planos.descrip+'</p>';
					
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
