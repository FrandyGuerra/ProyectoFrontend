let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
       console.log(menu)
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        menu
        menu.style.height = `${height}px`;

    })
});

let listElementsSegundo= document.querySelectorAll('.list__button--inside-click');

listElementsSegundo.forEach(item=>{
    item.addEventListener('click',()=>{

        item.classList.toggle('desplegar');

        let height = 0;
        let menu = item.nextElementSibling;
       console.log(menu)
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        menu
        menu.style.height = `${height}px`;
    })
});

const btn = document.querySelector("#btn-menu");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".home_content");

btn.onclick = toggleSidebar;

// btn.addEventListener("click", toggleSidebar);

// searchBtn.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("uncollapse");
}

$(document).ready(function() {
    $('#table_id').DataTable({
        responsive: true,
        language: {
            url: './es-ar.json' //Ubicacion del archivo con el json del idioma.
        },
        searching: false,
        bFilter: false,
        "lengthChange": false,


        "iDisplayLength": 3,
        "bDestroy":true,
        "scrollCollapse": false,
        "scrollX": false
    
        
    });

   
});

// **************************************GRAFICA**************************************************************

var densityCanvas = document.getElementById("trabajadores");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 12;

var indicador1 = {
  label: 'Indicador 1',
  data: [70, 65, 66, 68, 55],
  backgroundColor: 'rgba(28, 109, 208,1)',
  borderWidth: 0,
};

var indicador2 = {
    label: 'Indicador 2',
    data: [40, 50, 70, 35, 52],
    backgroundColor: 'rgba(28, 109, 208,0.6)',
    borderWidth: 0,
  };

  var indicador3 = {
    label: 'Indicador 3',
    data: [75, 35, 43 , 65, 54],
    backgroundColor: 'rgba(28, 109, 208,0.2)',
    borderWidth: 0,
  };


var etiquetas=["Trabajador 1","Trabajador 2","Trabajador 3","Trabajador 4","Trabajador 5"];

  
  var chartOptions = {
    
    scales: {
      xAxes: [{
        barPercentage: 0.8,
        categoryPercentage: 0.4,
        gridLines: {
            display:false
      }}],
      yAxes: [
          { ticks: {
        beginAtZero: true
    },
        
        gridLines: {
        display: false
        } 
  }]}};
  
  var barChart = new Chart(densityCanvas, {
    type: 'bar',
    data:{
        labels:etiquetas,
        datasets:[indicador1,indicador2,indicador3]
    },
    options: chartOptions
  });