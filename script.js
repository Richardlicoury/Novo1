let contador = 0;
let input= document.getElementById('input-tarefa');
let btnadd=document.querySelector('.btn-add');
let main =document.getElementById('arealista');
function addtarefa(){
    //PRIMEIRO PEGAR O VALOR DIGITADO NO INPUT
let valorInput= input.value;
//SE NAO FOR VAZIO NEM NULO E NEM INDEFINIDO
if ( (valorInput !== "") && (valorInput!== null)  && (valorInput !== undefined)) {
    ++contador
    let novoItem =` <div id ="${contador}" class="item">
                <div  onclick= "marcarTarefa (${contador})" class="item-icone">
                    <i id="icone_${contador}" class="fa-regular fa-circle"></i>
                </div>
                <div onclick="marcarTarefa (${contador}) " class="item-nome">
                ${valorInput}
                </div>
                <div  class="item-botao">
                    <button onclick ="deletar(${contador})" class="delete">
                        <i class="fa-solid fa-trash"></i> Deletar

                    </button>
                </div>

            </div>`;
            //ADICIONAR NOVOS ITEM NO MAIN
            main.innerHTML += novoItem ;
            //ZERAR OS CAMPOS 
            input.value = "" ;
            input.focus();

}

}
function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    if( classe == "item"){
        item.classList.add('clicado');
        var icone =document.getElementById('icone_'+id)
        icone.classList.remove('fa-circle')
        icone.classList.add('fa-circle-check')
        
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');
        var icone =document.getElementById('icone_'+id)
        icone.classList.remove('fa-circle-check')
        icone.classList.add(' fa-circle ')

    }
}

input.addEventListener("keyup", function(event) {
    // Se a tecla pressionada for a tecla Enter (código 13)
    if (event.key === "Enter") {
        event.preventDefault();
        btnadd.click();  // Aqui estamos chamando o método click corretamente
    }
});
