async function cont(){

    setInterval( ()=>{
    let now =  new Date()
    let past = new Date('2022-03-26T00:00:00')
    let diff = Math.abs(now.getTime() - past.getTime())
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24) - 1);
    let sec = ((now.getTime() - past.getTime()) / 1000).toString().slice(0, -3)
    let anodiff = now.getFullYear() - past.getFullYear()
    let mesdiff = now.getMonth() - past.getMonth()
    document.getElementById("data").innerText = `${days.toString()} dias`
    document.getElementById('sec').innerText = new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(sec)
    document.getElementById("interface").style.display = "inline";

    if(now.getDate() == past.getDate()){
        document.getElementById("data").innerText = `${mesdiff} ${mesdiff == 1 ? "mes" : "meses"}`
    if(mesdiff == 0){
        document.getElementById("data").innerText = `${anodiff} ${anodiff == 1 ? "ano" : "anos"}`
    }
    if(mesdiff != 0){
        document.getElementById("data").innerText = `\n${anodiff} ${anodiff == 1 ? "ano" : "anos"} e ${mesdiff} ${mesdiff == 1 ? "mes" : "meses"}`
    }
    }

    },1000)
    }
    cont()