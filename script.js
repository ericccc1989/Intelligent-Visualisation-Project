
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const chart1 = document.getElementById('chart1');
const myChart = new Chart(chart1, {
      type: 'bar',
      data: {
          labels: ['Industry', 'Transport', 'Residential', 'Commercial and public services', 'Agriculture', 'Final consumption not elsewhere specified','Electricity and heat producers'],
          datasets: [{
              data: [2996, 828, 365, 150, 109, 93, 4266],
              backgroundColor: [
                  '#E2684A',
              ],
              borderColor: [
                  '#E2684A',
              ],
              borderWidth: 1
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
              text: 'CO2 Emission in China by sectors(2015)',
              color: '#FFF'
          },
      },
          scales: {
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