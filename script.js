const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
  if (window.scrollY>=navbarHeight) {
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

function scrolltot(a,b)
{
  a.addEventListener('click',()=>{
    window.scrollTo(b.offsetLeft,b.offsetTop);
  })
}

let a=document.querySelector('#navbar__logo');
let b=document.querySelector('#Home');
scrolltot(a,b);

let c=document.querySelector('#home');
let d=document.querySelector('#Home');
scrolltot(c,d);

let e=document.querySelector('#abstract');
let f=document.querySelector('#Abstract');
scrolltot(e,f);

let g=document.querySelector('#goal');
let h=document.querySelector('#Intro__Goal');
scrolltot(g,h);

let i=document.querySelector('#reason');
let j=document.querySelector('#Intro__Reason');
scrolltot(i,j);

let k=document.querySelector('#problem');
let l=document.querySelector('#Intro__Problem');
scrolltot(k,l);

let m=document.querySelector('#muscle');
let n=document.querySelector('#Body__Muscle__backkick');
scrolltot(m,n);

let o=document.querySelector('#bone');
let p=document.querySelector('#Body__Bone__Physical');
scrolltot(o,p);

let q=document.querySelector('#body');
let r=document.querySelector('#Body__Construct');
scrolltot(q,r);

let s=document.querySelector('#blood');
let t=document.querySelector('#Body__Blood');
scrolltot(s,t);

let u=document.querySelector('#result');
let v=document.querySelector('#Con__Result');
scrolltot(u,v);

let w=document.querySelector('#reff');
let x=document.querySelector('#Con__Ref');
scrolltot(w,x);

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
        label: "?????? ???",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    plugins: {
      title: {
          display: true,
          text: '????????? ?????? ???????????? ??? ??????'
      }
  },
  }
});

new Chart(btx, {
  type: 'bar',
  data: {
    labels: ['?????????','??????','??????','??????','??????'],
    datasets: [
      {
        label: "??????",
        backgroundColor: ["#40E0D0", "#a9a9a9","#a9a9a9","#a9a9a9","#a9a9a9"],
        data: [34.1,23.1,14.9,10,4.7]
      }
    ]
  },
  options: {
    // maxBarThickness: 50,
    plugins: {
      title: {
          display: true,
          text: '2017??? 10??? ?????? ???????????? ?????? 5??????'
      }
  },
  }
});

new Chart(ptx, {
  type: 'doughnut',
  data: {
    labels: ['??????','??????(?????????~?????????)','?????????(????????????)'],
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
          text: '2014?????? ????????? ????????? ????????? ??????'
      }
  }
  }
  
});

new Chart(rtx, {
  type: 'line',
  data: {
    labels: ['????????????','?????????','?????????','????????????','????????????','????????????','?????????','????????????'],
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
          text: '????????? ?????? ??? ???????????? ?????? ????????? ??????'
      }
  },
  }
});

new Chart(mtx, {
  type: 'bar',
  data: {
      datasets: [{
          label: '????????????',
          data: [132.30, 134.83	, 136.93, 156.57]
      }, 
      {
        label: '?????????',
        data: [151.50, 197.83, 188.30	,123.03	]
    }, 
    {
      label: '?????????',
      data: [184.63, 202.47, 130.03	, 172.13	]
  }, 
      {
          label: '????????????',
          data: [117.60, 138.50, 139.03, 149.07],
          type: 'line'
      },
      {
        label: '????????????',
        data: [131.37, 206.43, 167.30, 150.83],
        type: 'line'
    },
    {
      label: '????????????',
      data: [169.03, 102.60, 125.30, 170.47],
      type: 'line'
  },
  {
    label: '?????????',
    data: [276.27, 234.83, 138.27, 170.77],
    type: 'line'
},
{
  label: '????????????',
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
          text: '???????????? ?????? ??? ???????????? ?????? ?????????'
      }
  },
  }
});

let chart = new CanvasJS.Chart("bone-chart", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "????????? ????????? ????????? ?????? ??????"
  },
  axisX:{
    title: "?????? ??????"
  },
  axisY:{
    title: "??????(g/cm2)"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "????????? ?????? ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}g/cm2",
    dataPoints: [
      { y: 0.35, label: "?????????", color:"#a9a9a9" },
      { y: 0.48, label: "?????????" }
    ]
  },
  {
    type: "error",
    color: "firebrick",
    whiskerLength: 30,
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}g/cm2",
    dataPoints: [
      { y: [0.34, 0.36], label:"?????????"},
      { y: [0.47, 0.49], label:"?????????" },        
    ]
  }],
  
});
chart.render();

let chart1 = new CanvasJS.Chart("grip", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "??????"
  },
  axisY:{
    title: "kg"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "?????? ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}kg",
    dataPoints: [
      { y: 38.50, label: "?????????", color:"#a9a9a9" },
      { y: 48.60, label: "?????????" }
    ]
  },
  {
    type: "error",
    color: "firebrick",
    whiskerLength: 20,
    name: "???????????? ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}kg",
    dataPoints: [
      { y: [35.40, 41.60], label:"?????????"},
      { y: [46.30, 50.90], label:"?????????" },        
    ]
  }]
});
chart1.render();

let chart2 = new CanvasJS.Chart("situp", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "?????? (??????????????????)"
  },
  axisY:{
    title: "??????"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "?????? ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}???",
    dataPoints: [
      { y: 28.50, label: "?????????",color:"#a9a9a9" },
      { y: 42.60, label: "?????????" }
    ]
  },
  {
    type: "error",
    color: "firebrick",
    whiskerLength: 20,
    name: "???????????? ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}???",
    dataPoints: [
      { y: [25.06, 31.94], label:"?????????" },
      { y: [38.85, 46.35], label:"?????????" },        
    ]
  }]
});
chart2.render();

let chart3 = new CanvasJS.Chart("react", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "????????????"
  },
  axisY:{
    title: "???(sec)"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "?????? ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}???",
    dataPoints: [
      { y: 0.45, label: "?????????", color:"#a9a9a9"},
      { y: 0.32, label: "?????????" }
    ]
  },
  {
    type: "error",
    color: "firebrick",
    whiskerLength: 20,
    name: "???????????? ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}???",
    dataPoints: [
      { y: [0.435, 0.465], label:"?????????" },
      { y: [0.31, 0.33], label:"?????????" },        
    ]
  }]
});
chart3.render();

let chart4 = new CanvasJS.Chart("jump", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "????????? ????????????"
  },
  axisY:{
    title: "??????(cm)"
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "column",
    name: "?????? ",
    toolTipContent: "<b>{label}</b> <br> <b>{name}:</b> {y}cm",
    dataPoints: [
      { y: 39.90, label: "?????????", color:"#a9a9a9"},
      { y: 46.80, label: "?????????" }
    ]
  },
  {
    type: "error",
    color: "firebrick",
    whiskerLength: 20,
    name: "???????????? ",
    toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]}cm",
    dataPoints: [
      { y: [35.05, 44.75], label:"?????????" },
      { y: [50.90, 42.70], label:"?????????" },        
    ]
  }]
});
chart4.render();

// ???????????? ?????????
let chart5 = new CanvasJS.Chart("protein", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "????????? ?????? ??? ????????? ??????"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "?????????(kg)",
		suffix: " kg"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} kg",
			markerType: "none",
			dataPoints: [
				{ y: 13.87, label: "?????? ???" },
				{ y: 15.35, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} kg - {y[1]} kg",
			dataPoints: [
				{ y: [13.48, 14.26], label: "?????? ???" },
				{ y: [15.07, 15.63], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} kg",
			markerType: "none",
			dataPoints: [
				{ y: 14.70, label: "?????? ???", color:"#a9a9a9"},
				{ y: 14.96, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} kg - {y[1]} kg",
			dataPoints: [
				{ y: [13.86, 15.54], label: "?????? ???" },
				{ y: [14.255, 15.665], label: "?????? ???" }
			]
	}]
});
chart5.render();

let chart6 = new CanvasJS.Chart("chegi", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "???????????? ??????"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "????????????(%)",
		suffix: " %"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 18.20, label: "?????? ???", color:"#a9a9a9"},
				{ y: 13.62, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [18.20-2.10/2, 18.20+2.10/2], label: "?????? ???" },
				{ y: [13.62-2.51/2, 13.62+2.51/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 14.70, label: "?????? ???", color:"#a9a9a9" },
				{ y: 14.96, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [13.86, 15.54], label: "?????? ???" },
				{ y: [14.255, 15.665], label: "?????? ???" }
			]
	}]
});
chart6.render();

let chart7 = new CanvasJS.Chart("bokbu", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "??????????????? ??????"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "???????????????(%)",
		suffix: " %"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.86, label: "?????? ???" },
				{ y: 0.78, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 10,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [0.86-0.04	/2, 0.86+0.04/2], label: "?????? ???" },
				{ y: [0.78-0.01/2, 0.78+0.01/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.84, label: "?????? ???" },
				{ y: 0.82, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 10,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} % - {y[1]} %",
			dataPoints: [
				{ y: [0.84-0.38/2, 0.84+0.38/2], label: "?????? ???" },
				{ y: [0.82-0.34/2, 0.82+0.34/2], label: "?????? ???" }
			]
	}]
});
chart7.render();

let chart8 = new CanvasJS.Chart("bokbu2", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "??????????????? ?????? (???????????? ??????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "???????????????(%)",
		suffix: " %"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
      color: "firebrick",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.86, label: "?????? ???" },
				{ y: 0.78, label: "?????? ???" }
			]
		},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} %",
			markerType: "none",
			dataPoints: [
				{ y: 0.84, label: "?????? ???" },
				{ y: 0.82, label: "?????? ???" }
			]
		}]
});
chart8.render();

// ????????? ?????????
let chart9 = new CanvasJS.Chart("fvc", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "FVC (????????? ?????????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(L)",
		suffix: " L"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 4.84, label: "?????? ???" },
				{ y: 5.19, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [4.84-0.33/2, 4.84+0.33/2], label: "?????? ???" },
				{ y: [5.19-0.28/2, 5.19+0.28/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 4.66, label: "?????? ???" },
				{ y: 4.63, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [4.66-0.56/2, 4.66+0.56/2], label: "?????? ???" },
				{ y: [4.63-0.54/2, 4.63+0.54/2], label: "?????? ???" }
			]
	}]
});
chart9.render();

let chart10 = new CanvasJS.Chart("vc", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "VC (?????????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(L)",
		suffix: " L"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 2.87, label: "?????? ???" },
				{ y: 3.45, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [2.87-0.70/2, 2.87+0.70/2], label: "?????? ???" },
				{ y: [3.45-0.51/2, 3.45+0.51/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 2.62, label: "?????? ???" },
				{ y: 2.72, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [2.62-0.42/2, 2.62+0.42/2], label: "?????? ???" },
				{ y: [2.72-0.50/2, 2.72+0.50/2], label: "?????? ???" }
			]
	}]
});
chart10.render();

let chart11 = new CanvasJS.Chart("erv", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "ERV (?????? ?????????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(L)",
		suffix: " L"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 1.66, label: "?????? ???" },
				{ y: 2.04, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [1.66-0.25/2, 1.66+0.25/2], label: "?????? ???" },
				{ y: [2.04-0.31/2, 2.04+0.31/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L",
			markerType: "none",
			dataPoints: [
				{ y: 1.50, label: "?????? ???" },
				{ y: 1.58, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L - {y[1]} L",
			dataPoints: [
				{ y: [1.50-0.55/2, 1.50+0.55/2], label: "?????? ???" },
				{ y: [1.58-0.61/2, 1.58+0.61/2], label: "?????? ???" }
			]
	}]
});
chart11.render();

let chart12 = new CanvasJS.Chart("mvv", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "MVV (?????? ?????? ?????????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(L/ml)",
		suffix: " L/ml"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L/ml",
			markerType: "none",
			dataPoints: [
				{ y: 173.41, label: "?????? ???" },
				{ y: 185.35, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L/ml - {y[1]} L/ml",
			dataPoints: [
				{ y: [173.41-24.23/2, 173.41+24.23/2], label: "?????? ???" },
				{ y: [185.35-17.77/2, 185.35+17.77/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} L/ml",
			markerType: "none",
			dataPoints: [
				{ y: 171.01, label: "?????? ???" },
				{ y: 178.36, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} L/ml - {y[1]} L/ml",
			dataPoints: [
				{ y: [171.01-28.35/2, 171.01+28.35/2], label: "?????? ???" },
				{ y: [178.36-20.57/2, 178.36+20.57/2], label: "?????? ???" }
			]
	}]
});
chart12.render();

// ???????????? ?????????
let chart13 = new CanvasJS.Chart("tc", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "TC (??? ???????????????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 177.11, label: "?????? ???" },
				{ y: 140.27, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [177.11-35.26/2, 177.11+35.26/2], label: "?????? ???" },
				{ y: [140.27-27.06/2, 140.27+27.06/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 176.91, label: "?????? ???" },
				{ y: 172.36, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [176.91-32.35/2, 176.91+32.35/2], label: "?????? ???" },
				{ y: [172.36-20.10/2, 172.36+20.10/2], label: "?????? ???" }
			]
	}]
});
chart13.render();

let chart14 = new CanvasJS.Chart("tg", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "TG (????????????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 102.91, label: "?????? ???" },
				{ y: 79.09, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [102.91-25.02/2, 102.91+25.02/2], label: "?????? ???" },
				{ y: [79.09-11.55/2, 79.09+11.55/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 113.09, label: "?????? ???" },
				{ y: 108.09, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [113.09-68.84/2, 113.09+68.84/2], label: "?????? ???" },
				{ y: [108.09-29.89/2, 108.09+29.89/2], label: "?????? ???" }
			]
	}]
});
chart14.render();

let chart15 = new CanvasJS.Chart("crea", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "???????????????"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 0.88, label: "?????? ???" },
				{ y: 1.01, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [0.88-0.37/2, 0.88+0.37/2], label: "?????? ???" },
				{ y: [1.01-0.32/2, 1.01+0.32/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 0.89, label: "?????? ???" },
				{ y: 0.90, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [0.89-0.39/2, 0.89+0.39/2], label: "?????? ???" },
				{ y: [0.90-0.25/2, 0.90+0.25/2], label: "?????? ???" }
			]
	}]
});
chart15.render();

let chart16 = new CanvasJS.Chart("hdl", {
	animationEnabled: true,
  theme: "light2",
	title:{
		text: "HDL-C (????????? ???????????????)"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "??????(mg/dl)",
		suffix: " mg/dl"
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "?????????",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 55.36, label: "?????? ???" },
				{ y: 75.91, label: "?????? ???" }
			]
		},
		{
			type: "error",
      color: "firebrick",
      whiskerLength: 0,
			name: "????????????",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [55.36-10.45/2, 55.36+10.45/2], label: "?????? ???" },
				{ y: [75.91-9.10/2, 75.91+9.10/2], label: "?????? ???" }
			]
	},
  {
		type: "line",
			name: "?????????",
      color:"#a9a9a9",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} mg/dl",
			markerType: "none",
			dataPoints: [
				{ y: 53.18, label: "?????? ???" },
				{ y: 60.45, label: "?????? ???" }
			]
		},
		{
			type: "error",
      whiskerLength: 0,
			name: "????????????",
      color:"#a9a9a9",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} mg/dl - {y[1]} mg/dl",
			dataPoints: [
				{ y: [53.18-12.44/2, 53.18+12.44/2], label: "?????? ???" },
				{ y: [60.45-11.51/2, 60.45+11.51/2], label: "?????? ???" }
			]
	}]
});
chart16.render();