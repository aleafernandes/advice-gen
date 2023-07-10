let num = document.getElementById('adviceNum') //Advice Header Div
let tex = document.getElementById('adviceTxt') //Advice content
const btn = document.getElementById('genBtn') //Generator Button

async function generateAdv(){
    const advice = await fetch("https://api.adviceslip.com/advice")
    const pAdvice = await advice.json()
    const idAdvice = pAdvice.slip.id
    const txAdvice = pAdvice.slip.advice
    num.innerHTML = `Advice #${idAdvice}`
    tex.innerHTML = `"${txAdvice}"`
    return pAdvice

}

btn.addEventListener('click', async () => {
    let pAdvice = []

    try{
        pAdvice = await generateAdv()
    } catch (e){
        console.log('Error!')
        console.log(e)
    }

})