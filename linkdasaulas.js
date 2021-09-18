/* LINK DAS AULAS DE ADM 1 ANO */




/* LINK DAS AULAS DE SEG 1 ANO */





/* LINK DAS AULAS DE ADM 2 ANO */




/* LINK DAS AULAS DE SEG 2 ANO */




/* LINK DAS AULAS REOFERTA 1 ANO ADM*/




/* LINK DAS AULAS REOFERTA 1 ANO SEG*/



/* LINK DAS AULAS REOFERTA 2 ANO ADM*/




/* LINK DAS AULAS REOFERTA 2 ANO SEG*/






/*ATUALIZACÃO */


/* SE TIVER ATUALIZAÇÃO DEIXAR "BLOCK", SE NAO DEIXAR "NONE" */

var boxupdate = document.getElementById("boxupdate")
boxupdate.style.display = "none"

var btnupdate = document.getElementById("btnupdate")
btnupdate.onclick = function() {

    location.href = "#link"

}

/*BOX MSG INFORMATICA*/
var boxmsg = document.getElementById("boxmsg")
var msg = document.getElementById("msg")


boxmsg.style.display = "none"
msg.innerText = "##MENSAGEM AQUI##"