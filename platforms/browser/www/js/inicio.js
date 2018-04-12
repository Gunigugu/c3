var serviceURL = "http://www.cece.org/services/v1.4/";
var employees;
var parteURL = window.location.href;

$('#inicioListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var codigo  = getUrlVars()["codigo"];
		$.getJSON(serviceURL + 'inicio.php?codigo='+codigo, function (data) {
		var datos = data.items;
		$.each(datos, function(index, base) {
		texto=base.nombre;
			$('#menu').html(texto);
		});
	});
	
	getInicioList(codigo);		
});

function getInicioList(codigo) {


		texto='<ul id="inicioList" class="rig columns-2">';
			texto=texto+'<li><a href="ofertalista.html?id=9002&codigo='+codigo+'"><img src="menu/oferta.png" /><p>Oferta Calificada</p></a></li>';
			texto=texto+'<li><a href="aulaslista.html?id=9001&codigo='+codigo+'"><img src="menu/aulas.png" /><p>Aulas</p></a></li>';
			texto=texto+'<li><a href="novedadeslista.html?id=9003&codigo='+codigo+'"><img src="menu/noticias.png" /><p>Info del Mes</p></a></li>';
			texto=texto+'<li><a href="credenciallista.html?id=9004&codigo='+codigo+'"><img src="menu/credencial.png" /><p>Beneficios Credencial</p></a></li>';
			texto=texto+'<li><a href="sedeslista.html?id=8005&codigo='+codigo+'"><img src="menu/sedes.png" /><p>Sedes</p></a></li>';
			texto=texto+'<li><a href="calendariolista.html?id=8006&codigo='+codigo+'"><img src="menu/calendario.png" /><p>Calendario</p></a></li>';
			texto=texto+'<li><a href="actividadeslista.html?id=8006&codigo='+codigo+'"><img src="menu/actividades.png" /><p>Actividades Gratuitas</p></a></li>';
			texto=texto+'<li><a href="planosaulaslista.html?id=8006&codigo='+codigo+'"><img src="menu/planos.png" /><p>Planos Aulas</p></a></li>';
			texto=texto+'<li><a href="planesestudiolista.html?id=8006&codigo='+codigo+'"><img src="menu/planes.png" /><p>Plan de Estudio</p></a></li>';
			texto=texto+'<li><a href="contacto.html?id=8006&codigo='+codigo+'"><img src="menu/contactos.png" /><p>Contacto</p></a></li>';
			texto=texto+'<li></li>';
			texto=texto+'<li><a href="salir.html?id=8006&codigo='+codigo+'"><img src="menu/usuario.png" /><p>Cambiar Usuario</p></a></li>';
			texto=texto+'</ul>';
	$('#three-columns').html(texto);
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
