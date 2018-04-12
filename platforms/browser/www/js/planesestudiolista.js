$('#planesestudioListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
	console.log("planesestudio de " + id);
	$.getJSON(serviceURL + 'carreraalu.php?codigo='+codigo, function (data) {
		var carreras = data.items;
		$.each(carreras, function(index, carrera) {
				/* var carreraCP=carrera.alumnoCP;
				var carreraSI=carrera.alumnoSI;
				localStorage.setItem("carreraCP", carreraCP); 
				localStorage.setItem("carreraSI", carreraSI); 
				$('#carreraSI').attr('checked')= true;
				$('#carreraSI').attr( 'checked', true );
				$('#carreraSI').attr('checked');
				$('#carreraSI').checked=true;
				$('#carreraSI').setAttribute("checked", "checked");
				$('#carreraSI').checked = true;*/
				texto='';
				texto=texto+'<li><a href="carrera.html?id=8&codigo='+codigo+ '">' +
					'<h4>'+ carrera.carreraCP + '</h4>' +
					'<p>' +carrera.carreraSI +'-'+carrera.carreraLA +'-'+carrera.carreraLE +'-'+carrera.carreraAE +'</p>';
					
					'</a></li>';
					$('#planesestudioList').append(texto);
		});
		$('#planesestudioList').listview('refresh');
	});

/*
	$.getJSON(serviceURL + 'planesestudio.php?id='+id+'&codigo='+codigo, function (data) {
		var planesestudio = data.items;
		$.each(planesestudio, function(index, planes) {
				texto='';
				texto=texto+'<li><a href="planesestudiodetalle.html?id=' + planes.id +'&codigo='+codigo+ '">' +
					'<img src="' + planes.imagen + '"/>' +
					'<h4>'+ planes.titulo + '</h4>' +
					'<p>' +planes.descrip +'</p>';
					//texto=texto+'<p>';
					
					'</a></li>';
					$('#planesestudioList').append(texto);
		});
		$('#planesestudioList').listview('refresh');
	});
	*/
});


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
