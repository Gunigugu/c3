$(document).ready(function(){
	
//agrego esto para recuperar el usuario
var codigo = localStorage.getItem('codigo') || '';
$('#codigo').val(codigo);
/*
$.getJSON(serviceURL + 'carreraalu.php?codigo='+codigo, function (data) {
		var carreras = data.items;
		$.each(carreras, function(index, carrera) {
				var carreraCP=carrera.alumnoCP;
				var carreraSI=carrera.alumnoSI;
				localStorage.setItem("carreraCP", carreraCP); //solo agregue esto para grabar
				localStorage.setItem("carreraSI", carreraSI); //solo agregue esto para grabar
				$('#carreraSI').attr('checked')= true;
		});
	});
*/

/*
var carreraCP = localStorage.getItem('carreraCP') || '';
$('#carreraCP').attr('checked')= true;
var carreraLA = localStorage.getItem('carreraLA') || '';
$('#carreraLA').attr('checked')= true;
var carreraLE = localStorage.getItem('carreraLE') || '';
$('#carreraLE').attr('checked')= true;
var carreraSI = localStorage.getItem('carreraSI') || '';
$('#carreraSI').attr('checked')= true;
var carreraAA = localStorage.getItem('carreraAA') || '';
$('#carreraAA').attr('checked')= true;
var carreraAE = localStorage.getItem('carreraAE') || '';
$('#carreraAE').attr('checked')= true;
*/

//agrego esto para recuperar el usuario
if (codigo >'') {
  $.mobile.changePage("menu.html"+"?codigo="+codigo);
}
  
    $("#errorMsg").hide();
    $("#btnLogin").click(function(){
        var usu = $("#txtuser").val();
        var pass = $("#txtpassword").val();
	  
        $.post("http://www.cece.org/services/v1.4/login.php",{ usu : usu, pass : pass},function(respuesta){
            if (respuesta == false) {
                $.mobile.changePage('#pageError', 'pop', true, true);
            }
            else{
				localStorage.setItem("codigo", respuesta); //solo agregue esto para grabar
                $.mobile.changePage("menu.html"+"?codigo="+respuesta);
                /*$("#errorMsg").fadeIn(300);
                $("#errorMsg").css("display", "block");*/
            }
        });
    });
    $("#btnRecup").click(function(){
        var dni = $("#txtdni").val();
		if (dni >'') {
			$.post("http://www.cece.org/services/v1.4/recuperar.php",{ dni : dni},function(operacion){
				if (operacion == false) {
					$.mobile.changePage('#pageErrorRecup', 'pop', true, true);
				}
				else{
					$.mobile.changePage('#pageCorectRecup', 'pop', true, true);
					/*$("#errorMsg").fadeIn(300);
					$("#errorMsg").css("display", "block");*/
				}
			});
		}
    });	
	
/*
	$("#btnCarrera").click(function(){
		//var codigo  = getUrlVars()["codigo"];
        var carreraCP = $("#carreraCP").val();
        var carreraLA = $("#carreraLA").val();
        var carreraLE = $("#carreraLE").val();
        var carreraSI = $("#carreraSI").val();
        var carreraAA = $("#carreraAA").val();
        var carreraAE = $("#carreraAE").val();
		localStorage.setItem("carreraCP", carreraCP); 
		localStorage.setItem("carreraLA", carreraLA); 
		localStorage.setItem("carreraLE", carreraLE); 
		localStorage.setItem("carreraSI", carreraSI); 
		localStorage.setItem("carreraAA", carreraAA); 
		localStorage.setItem("carreraAE", carreraAE); 
		
        $.post("http://www.cece.org/services/v1.4/carreras.php",{ codigo:codigo, carreraCP:carreraCP, carreraLA:carreraLA, carreraLE:carreraLE, carreraSI:carreraSI, carreraAA:carreraAA, carreraAE:carreraAE},function(respuesta){
            if (respuesta == false) {
			    $.mobile.changePage("materias2.html"+"?codigo="+codigo);
                //$.mobile.changePage('#pageError', 'pop', true, true);
            }
            else{
                $.mobile.changePage("materias.html"+"?codigo="+codigo);
            }
        });
    });
*/
});