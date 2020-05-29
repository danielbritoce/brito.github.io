
var brito = document.querySelector('.brito');
var grafico = document.querySelector('.grafico');
var ilustra = document.querySelector('.ilustra');
var mostrarBrito =document.querySelector('#mostrarBrito');
var mostrarGrafico =document.querySelector('#mostrarGrafico');
var mostrarIlustra =document.querySelector('#mostrarIlustra');

mostrarBrito.addEventListener('mouseover',() => {
    brito.classList.add('mostrar');

    setTimeout(() => {
        brito.classList.add("animar");
        brito.classList.add("fadein");
      }, 300)
})

mostrarBrito.addEventListener('mouseleave',() => {
    brito.classList.remove('animar', 'fadein');

    setTimeout(() => {
        brito.classList.remove("mostrar");
      }, 300)
    
})

mostrarGrafico.addEventListener('mouseover',() => {
    grafico.classList.add('mostrar');

    setTimeout(() => {
        grafico.classList.add("animar");
        grafico.classList.add("fadein");
      }, 300)
})

mostrarGrafico.addEventListener('mouseleave',() => {
    grafico.classList.remove('animar', 'fadein');
    
    setTimeout(() => {
        grafico.classList.remove("mostrar");
      }, 600)
})

mostrarIlustra.addEventListener('mouseover',() => {
    ilustra.classList.add('mostrar');

    setTimeout(() => {
        ilustra.classList.add("animar");
        ilustra.classList.add("fadein");
      }, 300)
})

mostrarIlustra.addEventListener('mouseleave',() => {
    ilustra.classList.remove('animar', 'fadein');

    setTimeout(() => {
        ilustra.classList.remove("mostrar");
      }, 600)
})

