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

new Chart(document.getElementById("radar-chart"), {
  type: 'line',
  data: {
    labels: ['외복사근','복직근','기립근','대퇴근막','대퇴사두','전경골근','비복근','대퇴이두'],
    datasets: [ { 
      data: [146.68,	136.29,	113.00,	131.96,	146.34,	201.88,	134.93,	162.27],
      label: "average",
      borderColor: "#1E90FF",
      pointStyle: 'line',
      borderWidth: 2,
      fill: false
    },
      { 
        data: [189.67,	126.33,	107.43,	116.90,	214.80,	281.20,	114.10,	211.07],
        label: "1phase",
        borderColor: "#a9a9a9",
        pointStyle: 'line',
        borderWidth: 2,
        fill: false
      }, { 
        data: [117.67,	150.10,	126.87,	131.87,	120.70,	162.87,	157.97,	141.20],
        label: "2phase",
        borderColor: "#a9a9a9",
        pointStyle: 'line',
        borderWidth: 2,
        fill: false
      }, { 
        data: [132.70,	132.43,	104.70,	147.10,	103.53,	161.57,	132.73,	134.53],
        label: "3phase",
        borderColor: "#a9a9a9",
        pointStyle: 'line',
        borderWidth: 2,
        fill: false
      }
    ]
  },
  options: {
    responsive:false,
    plugins: {
      title: {
          display: true,
          text: '뒤차기 동작 시 사용되는 근육 근전도 평균'
      }
  },
  }
});

new Chart(document.getElementById("mixed-chart"), {
  type: 'bar',
  data: {
      datasets: [{
          label: '외복사근',
          data: [132.30, 134.83	, 136.93, 156.57]
      }, 
      {
        label: '복직근',
        data: [151.50, 197.83, 188.30	,123.03	]
    }, 
    {
      label: '기립근',
      data: [184.63, 202.47, 130.03	, 172.13	]
  }, 
      {
          label: '대퇴근막',
          data: [117.60, 138.50, 139.03, 149.07],
          type: 'line'
      },
      {
        label: '대퇴사두',
        data: [131.37, 206.43, 167.30, 150.83],
        type: 'line'
    },
    {
      label: '전경골근',
      data: [169.03, 102.60, 125.30, 170.47],
      type: 'line'
  },
  {
    label: '비복근',
    data: [276.27, 234.83, 138.27, 170.77],
    type: 'line'
},
{
  label: '대퇴이두',
  data: [170.30, 148.50, 235.57, 139.37],
  type: 'line'
}
    ],
      labels: ['1phase', '2phase', '3phase', '4phase']
  },
  options: {
    responsive:false,
    plugins: {
      title: {
          display: true,
          text: '뒤후리기 동작 시 사용되는 근육 근전도'
      }
  },
  }
});