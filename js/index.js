setInterval( ()=>{
    let now =  new Date()
    let past = new Date('2022-09-24T00:00:00')
    let diff = Math.abs(now.getTime() - past.getTime())
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24) - 1);

    let sec = ((now.getTime() - past.getTime()) / 1000).toString().slice(0, -3)
    let anodiff = now.getFullYear() - past.getFullYear()
    let mesdiff = now.getMonth() - past.getMonth()

    document.getElementById("data").innerText = `${days} ${days == 1 ? "dia" : "dias"}`
    document.getElementById('sec').innerText = new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(sec)
    document.getElementById("interface").style.display = "inline";
    document.getElementById("txt").innerText = " que ela disse sim"

    if(now.getDate() == past.getDate()){
        document.getElementById("data").innerText = `${mesdiff} ${mesdiff == 1 ? "mes" : "meses"}`
        document.getElementById("txt").innerText = " que você atura ela"
    
        if(mesdiff == 0){
        document.getElementById("data").innerText = `${anodiff} ${anodiff == 1 ? "ano" : "anos"}`
        document.getElementById("txt").innerText = " que você virou escravo"
    }

    if(mesdiff != 0 && anodiff != 0){
        document.getElementById("data").innerText = `\n${anodiff} ${anodiff == 1 ? "ano" : "anos"} e ${mesdiff} ${mesdiff == 1 ? "mes" : "meses"}`
        document.getElementById("txt").innerText = " que sua liberdade acabou"
    }
        document.body.style.backgroundImage = "url('../img/confetti.gif')";
}

    window.addEventListener('resize', function() {
        if(window.outerWidth <= 350) {
            window.resizeTo(350, window.outerHeight);
        }
    }, true);

    },1000)
    
