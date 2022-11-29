

const ctx=document.getElementById('mychart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1995,2000,2005,2010,2011,2012,2013,2016,2020],
    datasets: [{ 
        data: [4528,7266,7923,8759, 8802, 9189, 8765, 9839, 9888],
        label: "도장 수",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: '전국 태권도장 수(1995~2020)'
    }
  }
});