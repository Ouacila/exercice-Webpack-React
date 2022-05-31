import { useState } from 'react'

function Home() {
    const [imc, setImc] = useState()

    const [inputWeight, setInputWeight] = useState()
    const [inputHeight, setInputHeight] = useState()

    const handleChangeWeight = e => parseFloat(setInputWeight(e.target.value))
    const handleChangeHeight = e => parseFloat(setInputHeight(e.target.value))

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(inputWeight, inputHeight)
        const heightC = inputHeight * inputHeight
        setImc(inputWeight / heightC)
    }


    return (
        <div className="App">
            <h3>Calcul d'IMC</h3>
            <h5>Renseignez votre masse et votre taille (en m)</h5>
            <form onSubmit={handleSubmit} className="form">
                <input onChange={handleChangeWeight} value={inputWeight} type="number"></input>
                <input onChange={handleChangeHeight} value={inputHeight} type="number"></input>
                <button type="submit">Valider</button>
            </form>
            <h5>Votre IMC est de :
                {imc}
            </h5>
            {
                imc < 20 ?
                    <h4 style={{ color: "red", }}> Votre Imc est faible</h4>
                    : imc < 25 ?
                        <h4 style={{ color: "green", }}> Votre Imc est normal</h4>
                        : imc > 25 ?
                            < h4 style={{ color: "red", }}> Votre Imc est élevé</h4>
                            :
                            <h4></h4>
            }
        </div >


    )
}

export default Home
