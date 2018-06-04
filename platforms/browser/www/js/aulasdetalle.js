$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	$.getJSON(serviceURL + 'aulasdetalle.php?id='+id, aulasDetalle);
});

function aulasDetalle(data) {
	var aulacurso = data.item;
	console.log(aulacurso);
		texto='';
	texto=texto+'<h3 id="matecurso">'+aulacurso.matecurso+'</h3><div class="divider"></div>'+

        '<p id="docente"><img class="icon-size-mr" src="img/docente.png"><font color="#555555"><span style="font-size: 10px;">Docente</span></font><br>'+aulacurso.docente+'</p><div class="divider"></div>'+
        '<p id="sede"><img class="icon-size-mr" src="img/sede.png"><font color="#555555"><span style="font-size: 10px;">Sede</span></font><br>'+aulacurso.sede+'<div class="divider"></div></p>'+
        '<p id="diashoras"><img class="icon-size-mr" src="img/horarios.png"><font color="#555555"><span style="font-size: 10px;">Días y Horarios</span></font><br>'+aulacurso.diashoras+'<div class="divider"></div></p>'+

        '<div class=""><img src="img/aula.png" class="icon-size" " /><font color="#555555"><span style="font-size: 10px;"> Aula</span></font><h3 class="c-green">'+aulacurso.aula+'</h3></div>';

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
