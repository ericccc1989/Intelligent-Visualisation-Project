
/* The openNav and closeNav function is based on example from W3school. It makes sure the sideNav can be access normally*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
/*Those top functions is the function that make sure the window can scroll to each parts of content successfully*/
function topFunction1() {
  window.scrollTo({top: screen.height-100, behavior: 'smooth'});
}
function topFunction2() {
  window.scrollTo({top:2350, behavior: 'smooth'});
}

function topFunction3() {
  window.scrollTo({top:3750,  behavior: 'smooth'});
}

function topFunction4() {
  window.scrollTo({top:4650, behavior: 'smooth'});
}
/*The chart1 is a bar type chart based on template from https://www.chartjs.org/. Since it has to be incorporated naturally in my web. I've done a lot styling below*/
const chart1 = document.getElementById('chart1');
const myChart1 = new Chart(chart1, {
      type: 'bar',
      data: {
          labels: ['Industry', 'Transport', 'Residential', 'Commercial and public services', 'Agriculture', 'Final consumption not elsewhere specified','Electricity and heat producers'],
          datasets: [{
              label:'Emission',
              data: [2996, 828, 365, 150, 109, 93, 4266],
              backgroundColor: [
                  '#FFF',
                  '#E2684A',
                  '#FFF',
                  '#FFF',
                  '#FFF',
                  '#FFF',
                  '#FFF'
              ],
              borderWidth: 1
          }]
      },
      options: {
        /* The responsive and mainaspectratio make sure that I can adjust chart dimension in CSS file*/
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          /* I dont wanna display legend here */
          legend: {
            display: false,
          },
          /* Title's styling */
          title: {
              display: true,
              text: 'CO2 Emission in China by sectors(2015)',
              color: '#FFF'
          },
          /* Add unit to the chart */
          tooltip: {
            callbacks: {
                label: (item) =>
                    `${item.dataset.label}: ${item.formattedValue} Mt`,
            },
        },
      },
          scales: {
            /* Styling the axes and grid */
            x: {
              ticks: {
                color: '#FFF'
              },
              grid: {
                color: 'transparent',
                borderColor: '#FFF' 
              }
            },
            y: {
              ticks: {
                color: '#FFF'
              },
              grid: {
                color: 'transparent',
                borderColor: '#FFF' 
              }
            },
          }
      }
  });

/* Chart is a line chart.*/
const chart2 = document.getElementById('chart2');
const myChart2 = new Chart(chart2, {
      type: 'line',
      labels:'Emission',
      data: {
          labels: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
          datasets: [{
              label:'Emission',
              data: [2088.9,2200.9,2295.8,2500.7,2599.5,2900.3,2872.0,2925.8,3020.7,2920.9,3097.4,3253.3,3508.9,4065.5,4739.6,5407.4,5961.8,6473.3,6669,7310.9,7830.6,8569.0,8823.4,9232.7,9224.1,9135.2,9127.9,9334.9,9712.8,9876.5],
              backgroundColor: [
                  '#FFF',
              ],
              borderColor: [
                  '#FFF',
              ],
              borderWidth: 3
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
              display: true,
              text: "Total CO2 emissions, People's Republic of China 1990-2019",
              color: '#FFF'
          },
          tooltip: {
            callbacks: {
                label: (item) =>
                    `${item.dataset.label}: ${item.formattedValue} Mt`,
            },
        },
      },
          scales: {
            x: {
              ticks: {
                color: '#FFF',
                autoSkip: true,
                /* This is a line chart with a lot data labels. To avoid too many labels displayed at the same time, I set the maxTickslimit to make it more concise. */
                maxTicksLimit: 8
              },
              grid: {
                color: 'transparent',
                borderColor: '#FFF' 
              }
            },
            y: {
              ticks: {
                color: '#FFF'
              },
              grid: {
                color: 'transparent',
                borderColor: '#FFF' 
              }
            },
          }
      }
  });

  /* Chart 3 is a stacked bar chart */
  const chart3= document.getElementById('chart3');
  var myChart3 = new Chart(chart3, {
    type: 'bar',
    data: {
       labels: ['2013', '2014','2015','2016','2017','2018','2019'],
       datasets: [{
          label: 'China',
          data: [32.2, 85.3, 292.7, 628.7, 1207.7,2288.8, 3349.1],
          backgroundColor: '#E2684A'
       }, {
          label: 'United States',
          data: [171.4, 290.2, 404.1, 563.7, 762.1, 1123.4, 1450],
          backgroundColor: '#994499'
       }, {
          label: 'Norway',
          data: [15.7, 35.4, 69.2, 114.1, 176.3, 249, 328.6],
          backgroundColor: '#316395'
       }, {
          label: 'Japan',
          data: [69.5, 101.7, 126.4, 151.2, 205.3, 255.1, 294],
          backgroundColor: '#b82e2e'
       }, {
          label: 'Others',
          data: [97.5, 180, 343.3, 530.5, 785.4, 1195.6, 1746.1],
          backgroundColor: '#66aa00'
       },]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
       scales: {
          x: {
             stacked: true,
             ticks: {
              color: '#FFF',
              autoSkip: true,
              maxTicksLimit: 8
            },
            grid: {
              color: 'transparent',
              borderColor: '#FFF' 
            }
          },
          y: {
            /* The stacked true help me to make mutiple data sets into a stacked bar chart */
             stacked: true,
             ticks: {
              color: '#FFF'
            },
            grid: {
              color: 'transparent',
              borderColor: '#FFF' 
            }
          }
       },
       plugins: {
        legend: {
          labels: {
            color: '#FFF'
         }
        },
        title: {
            display: true,
            text: "Total EVs stock by countries(2013-2019)",
            color: '#FFF'
        },
        tooltip: {
          callbacks: {
              label: (item) =>
                  `${item.dataset.label}: ${item.formattedValue}k`,
          },
      },
    },
    }
 });

/* Chart4 is a simple donut chart*/
 const chart4= document.getElementById('chart4');
 var myChart4 = new Chart(chart4, {
  type: 'doughnut',
  data: {
    labels: [
      'Electric Vehicle',
      'Others',
    ],
    datasets: [{
      label: 'Percentage',
      data: [60, 40],
      backgroundColor: [
        '#E2684A',
        '#FFF',
      ],
      hoverOffset: 4
    }]
  },
  options:{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#FFF'
       }
      },
      title: {
          display: true,
          text: "Predicted Bus market share(2030)",
          color: '#FFF'
      },
      tooltip: {
        callbacks: {
            label: (item) =>
                `${item.dataset.label}: ${item.formattedValue}%`,
        },
    },
  },
  }
});

/* Chart5 is a complicated mixed chart. Thus I use some help from youtube tutorial by Chart JS and adjust the styling */
/*--Reference: Chart JS.(2022,Jan 9). How to Show Two Scales in Bar Line Combo Chart in Chart js[Video file]. Retrieved from https://www.youtube.com/watch?v=sXSOCaXhD9w*/
const chart5 =document.getElementById('chart5');
var myChart5 = new Chart(chart5, {
  type: 'bar',
  data:{
    labels: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
    datasets: [{
      label: 'EVs Stock',
      data: [0, 0.5, 1.9, 7, 16.9, 32.2, 85.3, 292.7, 628.7, 1207.7, 2288.8,3349.1],
      backgroundColor: [
        '#E2684A'
      ],
      borderWidth: 1,
      /* The axisID is the main function that help one chart display two different data and yAxis */
      yAxisID:'stock',
      order: 2
    },{
      label: 'CO2 Emission Yearly Change',
      data: [38,10,52,53,64,55,29,58,17,33,25,-2],
      backgroundColor: [
        '#FFF'
      ],
      borderColor:[
        '#FFF'
      ],
      type:'line',
      yAxisID:'emission',
      order: 1,

    }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#FFF'
         }
        },
        title: {
            display: true,
            text: "EVs Stock vs CO2 Emission Yearly Change(China)",
            color: '#FFF'
        },
     },
      scales: {
          x: {
             stacked: true,
             ticks: {
              color: '#FFF',
              autoSkip: true,
              maxTicksLimit: 8
            },
            grid: {
              color: 'transparent',
              borderColor: '#FFF' 
            }
          },
      /* I can style each yAxis individually here  */    
      stock: {
        beginAtZero: true,
        type:'linear',
        position:'left',
        grid: {
            display:false
        },
        stacked: true,
             ticks: {
              color: '#FFF'
            },
            grid: {
              color: 'transparent',
              borderColor: '#FFF' 
           }
      },
      emission: {
        beginAtZero: true,
        type:'linear',
        position:'right',
        grid: {
            display:false
        },
        stacked: true,
             ticks: {
              color: '#FFF'
            },
            grid: {
              color: 'transparent',
              borderColor: '#FFF' 
          },
      }
    }
  }
});