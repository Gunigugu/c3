$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'aulasdetalle.php?id='+id, aulasDetalle);
});

function aulasDetalle(data) {
	var aulacurso = data.item;
	console.log(aulacurso);
		texto='';
	texto=texto+'<h3 id="matecurso">'+aulacurso.matecurso+'</h3>'+
       '<p id="docente"><img src="pics/fle-naranja.png"><font color="#ff6600">Docente: </font>'+aulacurso.docente+'</p>'+
       '<p id="sede"><img src="pics/fle-naranja.png"><font color="#ff6600">Sede: </font>'+aulacurso.sede+'</p>'+
	   '<p id="diashoras"><img src="pics/fle-naranja.png"><font color="#ff6600">Dias y Horario: </font>'+aulacurso.diashoras+'</p>'+
	   '<h3 id="aulas"><img src="pics/fle-naranja.png"><font color="#ff6600">Aula: </font>'+aulacurso.aula+'</h3>';

	$('#AulaCurso').html(texto);
	
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
