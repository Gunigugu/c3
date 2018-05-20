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
			texto=texto+'<li><a href="ofertalista.html?id=9002&codigo='+codigo+'"><img src="menu/oferta_.png" style="height: 40px;" /><p>Oferta Calificada</p></a></li>';
			texto=texto+'<li><a href="aulaslista.html?id=9001&codigo='+codigo+'"><img src="menu/aulas_.png" style="height: 40px;" /><p>Aulas</p></a></li>';
			texto=texto+'<li><a href="novedadeslista.html?id=9003&codigo='+codigo+'"><img src="menu/noticias_.png" style="height: 40px;" /><p>Info del Mes</p></a></li>';
			texto=texto+'<li><a href="credenciallista.html?id=9004&codigo='+codigo+'"><img src="menu/credencial_.png" style="height: 40px;" /><p>Beneficios Credencial</p></a></li>';
			texto=texto+'<li><a href="sedeslista.html?id=8005&codigo='+codigo+'"><img src="menu/sedes_.png" style="height: 40px;" /><p>Sedes</p></a></li>';
			texto=texto+'<li><a href="calendariolista.html?id=8006&codigo='+codigo+'"><img src="menu/calendario_.png" style="height: 40px;" /><p>Calendario</p></a></li>';
			texto=texto+'<li><a href="actividadeslista.html?id=8006&codigo='+codigo+'"><img src="menu/actividades_.png" style="height: 40px;" /><p>Actividades Gratuitas</p></a></li>';
			texto=texto+'<li><a href="planosaulaslista.html?id=8006&codigo='+codigo+'"><img src="menu/planos_.png" style="height: 40px;" /><p>Planos Aulas</p></a></li>';
			texto=texto+'<li><a href="planesestudiolista.html?id=8006&codigo='+codigo+'"><img src="menu/planes_.png" style="height: 40px;" /><p>Plan de Estudio</p></a></li>';
			texto=texto+'<li><a href="contacto.html?id=8006&codigo='+codigo+'"><img src="menu/contactos_.png" style="height: 40px;" /><p>Contacto</p></a></li>';
			texto=texto+'<li style="width: 100% !important;"><a href="salir.html?id=8006&codigo='+codigo+'"><img src="menu/usuario_.png" style="height: 40px;" /><p>Cerrar sesión</p></a></li>';
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
