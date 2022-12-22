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
    plugins: {
      title: {
          display: true,
          text: '연도별 전국 태권도장 수 변화'
      }
  },
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
    plugins: {
      title: {
          display: true,
          text: '2017년 10대 교외 체육활동 상위 5종목'
      }
  },
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
    responsive:false,
    plugins: {
      title: {
          display: true,
          text: '2014년도 연령별 태권도 수련생 비율'
      }
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
      { y: 0.35, label: "제어군", color:"#a9a9a9" },
      { y: 0.48, label: "운동군" }
    ]
  },
  {
    type: "error",
    name: "오차범위 ",
    errorWidth: "20px",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}g/cm2",
    dataPoints: [
      { y: [0.34, 0.36], label:"제어군"},
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
      { y: 38.50, label: "제어군", color:"#a9a9a9" },
      { y: 48.60, label: "운동군" }
    ]
  },
  {
    type: "error",
    name: "오차범위 ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}kg",
    dataPoints: [
      { y: [35.40, 41.60], label:"제어군"},
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
      { y: 28.50, label: "제어군",color:"#a9a9a9" },
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
      { y: 0.45, label: "제어군", color:"#a9a9a9"},
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
      { y: 39.90, label: "제어군", color:"#a9a9a9"},
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

// 신체구성 그래프
let chart5 = new CanvasJS.Chart("protein", {
	animationEnabled: true,
	title:{
		text: "태권도 수련 시 단백질 변화"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "단백질(kg)",
		suffix: " kg"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} kg",
			markerType: "none",
			dataPoints: [
				{ y: 13.87, label: "실험 전" },
				{ y: 15.35, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} kg - {y[1]} kg",
			dataPoints: [
				{ y: [13.48, 14.26], label: "실험 전" },
				{ y: [15.07, 15.63], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} kg",
			markerType: "none",
			dataPoints: [
				{ y: 14.70, label: "실험 전", color:"#a9a9a9"},
				{ y: 14.96, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} kg - {y[1]} kg",
			dataPoints: [
				{ y: [13.86, 15.54], label: "실험 전" },
				{ y: [14.255, 15.665], label: "실험 후" }
			]
	}]
});
chart5.render();

let chart6 = new CanvasJS.Chart("chegi", {
	animationEnabled: true,
	title:{
		text: "체지방율 변화"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "체지방율(%)",
		suffix: " %"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 18.20, label: "실험 전", color:"#a9a9a9"},
				{ y: 13.62, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [18.20-2.10/2, 18.20+2.10/2], label: "실험 전" },
				{ y: [13.62-2.51/2, 13.62+2.51/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 14.70, label: "실험 전", color:"#a9a9a9" },
				{ y: 14.96, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [13.86, 15.54], label: "실험 전" },
				{ y: [14.255, 15.665], label: "실험 후" }
			]
	}]
});
chart6.render();

let chart7 = new CanvasJS.Chart("bokbu", {
	animationEnabled: true,
	title:{
		text: "복부지방율 변화"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "복부지방율(%)",
		suffix: " %"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.86, label: "실험 전" },
				{ y: 0.78, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [0.86-0.04	/2, 0.86+0.04/2], label: "실험 전" },
				{ y: [0.78-0.01/2, 0.78+0.01/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.84, label: "실험 전" },
				{ y: 0.82, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [0.84-0.38/2, 0.84+0.38/2], label: "실험 전" },
				{ y: [0.82-0.34/2, 0.82+0.34/2], label: "실험 후" }
			]
	}]
});
chart7.render();

let chart8 = new CanvasJS.Chart("bokbu2", {
	animationEnabled: true,
	title:{
		text: "복부지방율 변화 (오차범위 제거)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "복부지방율(%)",
		suffix: " %"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.86, label: "실험 전" },
				{ y: 0.78, label: "실험 후" }
			]
		},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.84, label: "실험 전" },
				{ y: 0.82, label: "실험 후" }
			]
		}]
});
chart8.render();

// 폐기능 그래프
let chart9 = new CanvasJS.Chart("fvc", {
	animationEnabled: true,
	title:{
		text: "FVC (노력성 폐활량)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(L)",
		suffix: " L"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 4.84, label: "실험 전" },
				{ y: 5.19, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [4.84-0.33/2, 4.84+0.33/2], label: "실험 전" },
				{ y: [5.19-0.28/2, 5.19+0.28/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 4.66, label: "실험 전" },
				{ y: 4.63, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [4.66-0.56/2, 4.66+0.56/2], label: "실험 전" },
				{ y: [4.63-0.54/2, 4.63+0.54/2], label: "실험 후" }
			]
	}]
});
chart9.render();

let chart10 = new CanvasJS.Chart("vc", {
	animationEnabled: true,
	title:{
		text: "VC (폐활량)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(L)",
		suffix: " L"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 2.87, label: "실험 전" },
				{ y: 3.45, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [2.87-0.70/2, 2.87+0.70/2], label: "실험 전" },
				{ y: [3.45-0.51/2, 3.45+0.51/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 2.62, label: "실험 전" },
				{ y: 2.72, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [2.62-0.42/2, 2.62+0.42/2], label: "실험 전" },
				{ y: [2.72-0.50/2, 2.72+0.50/2], label: "실험 후" }
			]
	}]
});
chart10.render();

let chart11 = new CanvasJS.Chart("erv", {
	animationEnabled: true,
	title:{
		text: "ERV (호기 예비량)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(L)",
		suffix: " L"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 1.66, label: "실험 전" },
				{ y: 2.04, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [1.66-0.25/2, 1.66+0.25/2], label: "실험 전" },
				{ y: [2.04-0.31/2, 2.04+0.31/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 1.50, label: "실험 전" },
				{ y: 1.58, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [1.50-0.55/2, 1.50+0.55/2], label: "실험 전" },
				{ y: [1.58-0.61/2, 1.58+0.61/2], label: "실험 후" }
			]
	}]
});
chart11.render();

let chart12 = new CanvasJS.Chart("mvv", {
	animationEnabled: true,
	title:{
		text: "MVV (최대 노력 환기량)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(L/ml)",
		suffix: " L/ml"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L/ml",
			markerType: "none",
			dataPoints: [
				{ y: 173.41, label: "실험 전" },
				{ y: 185.35, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L/ml - {y[1]} L/ml",
			dataPoints: [
				{ y: [173.41-24.23/2, 173.41+24.23/2], label: "실험 전" },
				{ y: [185.35-17.77/2, 185.35+17.77/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L/ml",
			markerType: "none",
			dataPoints: [
				{ y: 171.01, label: "실험 전" },
				{ y: 178.36, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L/ml - {y[1]} L/ml",
			dataPoints: [
				{ y: [171.01-28.35/2, 171.01+28.35/2], label: "실험 전" },
				{ y: [178.36-20.57/2, 178.36+20.57/2], label: "실험 후" }
			]
	}]
});
chart12.render();

// 혈액성분 그래프
let chart13 = new CanvasJS.Chart("tc", {
	animationEnabled: true,
	title:{
		text: "TC (총 콜레스테롤)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 177.11, label: "실험 전" },
				{ y: 140.27, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [177.11-35.26/2, 177.11+35.26/2], label: "실험 전" },
				{ y: [140.27-27.06/2, 140.27+27.06/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 176.91, label: "실험 전" },
				{ y: 172.36, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [176.91-32.35/2, 176.91+32.35/2], label: "실험 전" },
				{ y: [172.36-20.10/2, 172.36+20.10/2], label: "실험 후" }
			]
	}]
});
chart13.render();

let chart14 = new CanvasJS.Chart("tg", {
	animationEnabled: true,
	title:{
		text: "TG (중성지방)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 102.91, label: "실험 전" },
				{ y: 79.09, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [102.91-25.02/2, 102.91+25.02/2], label: "실험 전" },
				{ y: [79.09-11.55/2, 79.09+11.55/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 113.09, label: "실험 전" },
				{ y: 108.09, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [113.09-68.84/2, 113.09+68.84/2], label: "실험 전" },
				{ y: [108.09-29.89/2, 108.09+29.89/2], label: "실험 후" }
			]
	}]
});
chart14.render();

let chart15 = new CanvasJS.Chart("crea", {
	animationEnabled: true,
	title:{
		text: "크레아티닌"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 0.88, label: "실험 전" },
				{ y: 1.01, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [0.88-0.37/2, 0.88+0.37/2], label: "실험 전" },
				{ y: [1.01-0.32/2, 1.01+0.32/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 0.89, label: "실험 전" },
				{ y: 0.90, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [0.89-0.39/2, 0.89+0.39/2], label: "실험 전" },
				{ y: [0.90-0.25/2, 0.90+0.25/2], label: "실험 후" }
			]
	}]
});
chart15.render();

let chart16 = new CanvasJS.Chart("hdl", {
	animationEnabled: true,
	title:{
		text: "HDL-C (고밀도 콜레스테롤)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "수치(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "실험군",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 55.36, label: "실험 전" },
				{ y: 75.91, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [55.36-10.45/2, 55.36+10.45/2], label: "실험 전" },
				{ y: [75.91-9.10/2, 75.91+9.10/2], label: "실험 후" }
			]
	},
  {
		type: "line",
			name: "통제군",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 53.18, label: "실험 전" },
				{ y: 60.45, label: "실험 후" }
			]
		},
		{
			type: "error",
			name: "오차범위",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [53.18-12.44/2, 53.18+12.44/2], label: "실험 전" },
				{ y: [60.45-11.51/2, 60.45+11.51/2], label: "실험 후" }
			]
	}]
});
chart16.render();