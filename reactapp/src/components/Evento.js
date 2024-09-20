

export default function Evento(nome1,nome2){

    function meuEvento(){

        console.log("Ativado")
        console.log(nome1,nome2)
    }


    return(

        <div>
            <p>Clique para disparar um Evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>

    )

}