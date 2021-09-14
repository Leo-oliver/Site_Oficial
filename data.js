var dataTop=new Date();
var diaS=dataTop.getDay();
var diaM=dataTop.getDate();
if(diaM < 10)
{
    diaM="0" +diaM;
}
var mes=dataTop.getMonth();
var ano=dataTop.getFullYear();
var semanaArray= new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-Feira","Sexta-feira","Sábado");
var mesArray= new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
var hora=dataTop.getHours();
var min=dataTop.getMinutes();
if(min<10)
{
    min="0"+min;
}
if(hora<12)
{
    var comprimento=("Bom dia!")
}
if(hora>=12)
{
    var comprimento=("Boa tarde!")
}
if(hora>=18)
{
  var comprimento=("Boa Noite!")
}


document.write("<p> <font color='white' face='Arial' size='4'>" +semanaArray[diaS]+ " , " +diaM+ " de " +mesArray[mes]+ " de " +ano+  ", " +comprimento+ "</font><p>")

