console.log('CONECTED');

const porcentM = document.getElementById('porcentM')
const porcentT = document.getElementById('porcentT')
const porcentW = document.getElementById('porcentW')
const porcentTh = document.getElementById('porcentTh')
const porcentF = document.getElementById('porcentF')
const porcentS = document.getElementById('porcentS')
const porcentSu = document.getElementById('porcentSu')


url = fetch('data.json')
    .then(res => res.json())
    .then( getJson = (res) => {
        console.log(res);
        porcentM.innerHTML = `$${res[0].amount}`
        porcentT.innerHTML = `$${res[1].amount}`
        porcentW.innerHTML = `$${res[2].amount}`
        porcentTh.innerHTML = `$${res[3].amount}`
        porcentF.innerHTML = `$${res[4].amount}`
        porcentS.innerHTML = `$${res[5].amount}`
        porcentSu.innerHTML = `$${res[6].amount}`
    })

    .catch(e => console.log(e))
