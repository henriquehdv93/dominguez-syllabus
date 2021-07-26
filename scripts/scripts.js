// Button Dark-Mode

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    if (this.checked) {
        $html.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true');
    }
    else {
        $html.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
    }
});
// Recovery Dark Mode data //
function recuperarDarkMode() {
    const valor = localStorage.getItem('dark-mode');
    if (valor == 'true') {
        $html.classList.add('dark-mode');
        $checkbox.setAttribute('checked', 'checked');
    }
    else {
        $html.classList.remove('dark-mode');
    }
}
recuperarDarkMode();    
// Acordeon //

const acordeonArray=document.getElementsByClassName('acordeon');

for(var i=0;i<acordeonArray.length;i++){
    acordeonArray[i].addEventListener("click",function(){
        this.classList.toggle("selection");
        const painel=this.nextElementSibling;
        if(painel.style.maxHeight){
            painel.style.maxHeight=null;
        }else{
            painel.style.maxHeight=painel.scrollHeight+"px";
        }
    });
    }

    // Semana 1 //

function abrirTab(evt,nomeTab){
    const conteudoTab=document.getElementsByClassName("conteudoTab");
    for(var i=0;i<conteudoTab.length;i++){
        conteudoTab[i].style.display="none";
    }
    const btnTabs=document.querySelectorAll('[data-btnTabs');
    for(var i=0;i<btnTabs.length;i++){
        btnTabs[i].classList.remove('active');
    }
    document.getElementById(nomeTab).style.display="block";
}
document.getElementById("first").click();

    // Semana 2 //

function abrirTab2(evt,nomeTab){
    const conteudoTab2=document.getElementsByClassName("conteudoTab2");
    for(var i=0;i<conteudoTab2.length;i++){
        conteudoTab2[i].style.display="none";
    }
    const btnTabs2=document.querySelectorAll('[data-btnTabs');
    for(var i=0;i<btnTabs2.length;i++){
        btnTabs2[i].classList.remove('active');
    }
    document.getElementById(nomeTab).style.display="block";
}
document.getElementById("second").click();

    // Semana 3 //

    function abrirTab3(evt,nomeTab){
        const conteudoTab3=document.getElementsByClassName("conteudoTab3");
        for(var i=0;i<conteudoTab3.length;i++){
            conteudoTab3[i].style.display="none";
        }
        const btnTabs3=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs3.length;i++){
            btnTabs3[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("third").click();
    
    // Semana 4 //

    function abrirTab4(evt,nomeTab){
        const conteudoTab4=document.getElementsByClassName("conteudoTab4");
        for(var i=0;i<conteudoTab4.length;i++){
            conteudoTab4[i].style.display="none";
        }
        const btnTabs4=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs4.length;i++){
            btnTabs4[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("fourth").click();

    // Semana 5 //

    function abrirTab5(evt,nomeTab){
        const conteudoTab5=document.getElementsByClassName("conteudoTab5");
        for(var i=0;i<conteudoTab5.length;i++){
            conteudoTab5[i].style.display="none";
        }
        const btnTabs5=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs5.length;i++){
            btnTabs5[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("fifth").click();

    // Semana 6 //

    function abrirTab6(evt,nomeTab){
        const conteudoTab6=document.getElementsByClassName("conteudoTab6");
        for(var i=0;i<conteudoTab6.length;i++){
            conteudoTab6[i].style.display="none";
        }
        const btnTabs6=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs6.length;i++){
            btnTabs6[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("sixth").click();

    // Semana 7 //

    function abrirTab7(evt,nomeTab){
        const conteudoTab7=document.getElementsByClassName("conteudoTab7");
        for(var i=0;i<conteudoTab7.length;i++){
            conteudoTab7[i].style.display="none";
        }
        const btnTabs7=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs7.length;i++){
            btnTabs7[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("seventh").click();

    // Semana 8 //

    function abrirTab8(evt,nomeTab){
        const conteudoTab8=document.getElementsByClassName("conteudoTab8");
        for(var i=0;i<conteudoTab8.length;i++){
            conteudoTab8[i].style.display="none";
        }
        const btnTabs8=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs8.length;i++){
            btnTabs8[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("eighth").click();

    // Semana 9 //

    function abrirTab9(evt,nomeTab){
        const conteudoTab9=document.getElementsByClassName("conteudoTab9");
        for(var i=0;i<conteudoTab9.length;i++){
            conteudoTab9[i].style.display="none";
        }
        const btnTabs9=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs9.length;i++){
            btnTabs9[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("ninth").click();

    // Semana 10 //

    function abrirTab10(evt,nomeTab){
        const conteudoTab10=document.getElementsByClassName("conteudoTab10");
        for(var i=0;i<conteudoTab10.length;i++){
            conteudoTab10[i].style.display="none";
        }
        const btnTabs10=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs10.length;i++){
            btnTabs10[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("tenth").click();

    // Semana 11 //

    function abrirTab11(evt,nomeTab){
        const conteudoTab11=document.getElementsByClassName("conteudoTab11");
        for(var i=0;i<conteudoTab11.length;i++){
            conteudoTab11[i].style.display="none";
        }
        const btnTabs11=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs11.length;i++){
            btnTabs11[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("eleventh").click();

    // Semana 12 //

    function abrirTab12(evt,nomeTab){
        const conteudoTab12=document.getElementsByClassName("conteudoTab12");
        for(var i=0;i<conteudoTab12.length;i++){
            conteudoTab12[i].style.display="none";
        }
        const btnTabs12=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs12.length;i++){
            btnTabs12[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("twelfth").click();

    // Semana 13 //

    function abrirTab13(evt,nomeTab){
        const conteudoTab13=document.getElementsByClassName("conteudoTab13");
        for(var i=0;i<conteudoTab13.length;i++){
            conteudoTab13[i].style.display="none";
        }
        const btnTabs13=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs13.length;i++){
            btnTabs13[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("thirteenth").click();

    // Semana 14 //

    function abrirTab14(evt,nomeTab){
        const conteudoTab14=document.getElementsByClassName("conteudoTab14");
        for(var i=0;i<conteudoTab14.length;i++){
            conteudoTab14[i].style.display="none";
        }
        const btnTabs14=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs14.length;i++){
            btnTabs14[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("fourteenth").click();

    // Semana 15 //

    function abrirTab15(evt,nomeTab){
        const conteudoTab15=document.getElementsByClassName("conteudoTab15");
        for(var i=0;i<conteudoTab15.length;i++){
            conteudoTab15[i].style.display="none";
        }
        const btnTabs15=document.querySelectorAll('[data-btnTabs');
        for(var i=0;i<btnTabs15.length;i++){
            btnTabs15[i].classList.remove('active');
        }
        document.getElementById(nomeTab).style.display="block";
    }
    document.getElementById("fifteenth").click();
