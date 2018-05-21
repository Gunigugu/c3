$('#ofertaListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	console.log("oferta de " + id);
	$.getJSON(serviceURL + 'oferta.php?id='+id+'&codigo='+codigo, function (data) {
		var oferta = data.items;
		$.each(oferta, function(index, cursos) {
				texto='';
				texto=texto+'<li class="lista_personalizada"><a href="ofertadetalle.html?id=' + cursos.id +'&codigo='+codigo +'">' +
					'<h4><span style="font-size: 10px;">'+ cursos.mate + '-' + cursos.curso + '</span> ' + cursos.materias + '</h4>' +
					'<p><span class="light">Docente:</span> ' + cursos.docente + '</p>' +
					'<p>' + cursos.sedes + ' | ' + cursos.dias + ' | ' + cursos.horas +'</p>';
					//texto=texto+'<p>';
					texto=texto+'<span class="puntaje">';
				// if (cursos.opi>0) {
				// 	texto=texto+'<img src="pics\/si_opinion.png"  width="16" height="16" />';
				// } else {
				// 	texto=texto+'<img src="pics\/si_opinion_gr.png" width="16" height="16" />';
				// }
				// if (cursos.estad>0) {
				// 	texto=texto+'<img src="pics\/si_estad.png"  width="16" height="16" />';
				// } else {
				// 	texto=texto+'<img src="pics\/si_estad_gr.png" width="16" height="16" />';
				// }
				// if (cursos.corte>0) {
				// 	texto=texto+'<img src="pics\/si_corte.png"  width="16" height="16" />';
				// } else {
				// 	texto=texto+'<img src="pics\/si_corte_gr.png" width="16" height="16" />';
				// }
				// if (cursos.punta>0) {
				// 	texto=texto+'<img src="pics\/si_lapiz.png"  width="16" height="16" />';
				// } else {
				// 	texto=texto+'<img src="pics\/si_lapiz_gr.png" width="16" height="16" />';
				// }
				//texto=texto+'</p>';
					texto=texto+'<div class="fce-logos"><img src="img/puntaje.png" style="max-height: 12px;" /></div> ' + cursos.punta + '</span>' +
					'</a></li>';
					$('#ofertaList').append(texto);
		});
		$('#ofertaList').listview('refresh');
	});
});
