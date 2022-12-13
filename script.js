const ctx=document.getElementById('mychart');
const btx=document.getElementById('mybarchart');
const ptx=document.getElementById("pieChart");
const rtx=document.getElementById("radar-chart");
const mtx=document.getElementById("mixed-chart");

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

new Chart(ptx, {
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

new Chart(rtx, {
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

new Chart(mtx, {
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

let chart = new CanvasJS.Chart("bone-chart", {
  animationEnabled: true,
  title:{
    text: "태권도 수련시 골밀도 수치 비교"
  },
  axisX:{
    title: "집단 분류"
  },
  axisY:{
    title: "수치(g/cm2)"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "골밀도 수치 ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}g/cm2",
    dataPoints: [
      { y: 0.35, label: "제어군" },
      { y: 0.48, label: "운동군" }
    ]
  },
  {
    type: "error",
    name: "오차범위 ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}g/cm2",
    dataPoints: [
      { y: [0.34, 0.36], label:"제어군" },
      { y: [0.47, 0.49], label:"운동군" },        
    ]
  }]
});
chart.render();

let chart1 = new CanvasJS.Chart("grip", {
  animationEnabled: true,
  title:{
    text: "악력"
  },
  axisY:{
    title: "kg"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "악력 ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}kg",
    dataPoints: [
      { y: 38.50, label: "제어군" },
      { y: 48.60, label: "운동군" }
    ]
  },
  {
    type: "error",
    name: "오차범위 ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}kg",
    dataPoints: [
      { y: [35.40, 41.60], label:"제어군" },
      { y: [46.30, 50.90], label:"운동군" },        
    ]
  }]
});
chart1.render();

let chart2 = new CanvasJS.Chart("situp", {
  animationEnabled: true,
  title:{
    text: "싯업 (윗몸일으키기)"
  },
  axisY:{
    title: "개수"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "개수 ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}개",
    dataPoints: [
      { y: 28.50, label: "제어군" },
      { y: 42.60, label: "운동군" }
    ]
  },
  {
    type: "error",
    name: "오차범위 ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}개",
    dataPoints: [
      { y: [25.06, 31.94], label:"제어군" },
      { y: [38.85, 46.35], label:"운동군" },        
    ]
  }]
});
chart2.render();

let chart3 = new CanvasJS.Chart("react", {
  animationEnabled: true,
  title:{
    text: "전신반응"
  },
  axisY:{
    title: "초(sec)"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "시간 ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}초",
    dataPoints: [
      { y: 0.45, label: "제어군" },
      { y: 0.32, label: "운동군" }
    ]
  },
  {
    type: "error",
    name: "오차범위 ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}초",
    dataPoints: [
      { y: [0.435, 0.465], label:"제어군" },
      { y: [0.31, 0.33], label:"운동군" },        
    ]
  }]
});
chart3.render();

let chart4 = new CanvasJS.Chart("jump", {
  animationEnabled: true,
  title:{
    text: "제자리 높이뛰기"
  },
  axisY:{
    title: "높이(cm)"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "높이 ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}cm",
    dataPoints: [
      { y: 39.90, label: "제어군" },
      { y: 46.80, label: "운동군" }
    ]
  },
  {
    type: "error",
    name: "오차범위 ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}cm",
    dataPoints: [
      { y: [35.05, 44.75], label:"제어군" },
      { y: [50.90, 42.70], label:"운동군" },        
    ]
  }]
});
chart4.render();

let chart5 = new CanvasJS.Chart("protein", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart5.render();

let chart6 = new CanvasJS.Chart("chegi", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart6.render();

let chart7 = new CanvasJS.Chart("bokbu", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart7.render();

let chart8 = new CanvasJS.Chart("bokbu2", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart8.render();

let chart9 = new CanvasJS.Chart("fvc", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart9.render();

let chart10 = new CanvasJS.Chart("vc", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart10.render();

let chart11 = new CanvasJS.Chart("erv", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart11.render();

let chart12 = new CanvasJS.Chart("mvv", {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart12.render();
