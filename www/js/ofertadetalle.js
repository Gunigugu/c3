$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];

$.getJSON(serviceURL + 'ofertadetalleopi.php?id='+id+'&codigo='+codigo, function (data) {
	var datos = data.items;
	$.each(datos, function(index, cursos) {
	$('#actionList').append('<li>' + cursos.opinion + '</li>');
	});
	$('#actionList').listview('refresh');
});

	$.getJSON(serviceURL + 'ofertadetalle.php?id='+id, ofertaDetalle);
});
	
	
function ofertaDetalle(data) {
	var cursos = data.item;
	console.log(cursos);
		texto='';
		texto=texto+'<h3 id="matecurso">'+cursos.matecurso+'</h3><div class="divider"></div>'+
       '<p id="docente"><img class="icon-size-mr" src="img/docente.png"><font color="#555555"><span style="font-size: 10px;">Docente</span></font><br>'+cursos.docente+'</p><div class="divider"></div>'+
       '<p id="sede"><img class="icon-size-mr" src="img/sede.png"><font color="#555555"><span style="font-size: 10px;">Sede</span></font><br>'+cursos.sede+'<div class="divider"></div></p>'+
	   '<p id="diashoras"><img class="icon-size-mr" src="img/horarios.png"><font color="#555555"><span style="font-size: 10px;">Días y Horarios</span></font><br>'+cursos.diashoras+'<div class="divider"></div></p>'+
	   '';
			// texto=texto+'<p>';
			// 	if (cursos.opi>0) {
			// 		texto=texto+'<img src="pics\/si_opinion.png"  width="16" height="16" />';
			// 	} else {
			// 		texto=texto+'<img src="pics\/si_opinion_gr.png" width="16" height="16" />';
			// 	}
			// 	if (cursos.estad>0) {
			// 		texto=texto+'<img src="pics\/si_estad.png"  width="16" height="16" />';
			// 	} else {
			// 		texto=texto+'<img src="pics\/si_estad_gr.png" width="16" height="16" />';
			// 	}
			// 	if (cursos.corte>0) {
			// 		texto=texto+'<img src="pics\/si_corte.png"  width="16" height="16" />';
			// 	} else {
			// 		texto=texto+'<img src="pics\/si_corte_gr.png" width="16" height="16" />';
			// 	}
			// 	if (cursos.punta>0) {
			// 		texto=texto+'<img src="pics\/si_lapiz.png"  width="16" height="16" />';
			// 	} else {
			// 		texto=texto+'<img src="pics\/si_lapiz_gr.png" width="16" height="16" />';
			// 	}
			// 	texto=texto+'</p>';
    texto=texto+'<div class=""><img src="img/puntaje.png" class="icon-size" " /><font color="#555555"><span style="font-size: 10px;"> Puntaje</span></font><h3 class="c-blue">' + cursos.punta +  '</h3></div>';

	$('#OfertaCurso').html(texto);


	/*
	$('#employeePic').attr('src', '' + employee.picture);
	$('#fullName').text(employee.firstName + ' ' + employee.lastName);
	$('#employeeTitle').html(employee.title);
	$('#city').html(employee.city);

	if (employee.managerId>0) {
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
				'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
	}
	if (employee.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + employee.reportCount + '</p></a></li>');
	}
	if (employee.email) {
		$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
				'<p>' + employee.email + '</p></a></li>');
	}
	if (employee.officePhone) {
		$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + employee.officePhone + '</p></a></li>');
	}
	if (employee.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');
*/	

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
