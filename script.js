const ctx=document.getElementById('mychart');
const btx=document.getElementById('mybarchart');

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

new Chart(btx, {
  type: 'bar',
  data: {
    labels: ['태권도','검도','수영','권투','유도'],
    datasets: [
      {
        label: "비율",
        backgroundColor: ["#40E0D0", "#a9a9a9","#a9a9a9","#a9a9a9","#a9a9a9"],
        data: [34.1,23.1,14.9,10,4.7]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

new Chart(document.getElementById("pieChart"), {
  type: 'doughnut',
  data: {
    labels: ['성인','아동(유치부~초등부)','청소년(중고등부)'],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
      data: [3.4,86.4,10.2]
    }]
  },
  options: {
    responsive: false,
    title: {
      display: true,
      text: '제목 왜 안보임'
    }
  }
});