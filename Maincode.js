
        let loading_line;
        window.onload= () => {
            loading_line = document.getElementById('loading-line');
        };

        window.onscroll = (e) => {
            let d_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let percentage = (window.scrollY / d_height) * 100;
            loading_line.style.width = percentage + '%';
        };

        function checkLabel(labelID, input){
            let label = document.getElementById(labelID);
            input = input;
        }

        // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

function gotoClay(){
  location.href = "./clay.html";
}

function gotowashis(){
  location.href = "./washis.html";
}

function gotoPens(){
  location.href = "./pens.html";
}

function gotojewels(){
  location.href = "./jewels.html";
}

function gotoBooks(){
  location.href = "./notebooks.html";
}
////////////********     click wali animation     ***************  */
const circle = new mojs.Shape({
  left: 0,
  isShowStart: true,
  top: 0,
  strokeWidth: 8,
  fill: 'none',
  radius: 80,
  scale: {0 :1},
  opacity: {1 : 0},
  shape: 'circle',
  stroke: '#5386E4',
  duration: 500,
});

const burst = new mojs.Burst({
  count: 10,
  left: 0,
  isShowStart: true,
  isShowStart: true,
  top: 0,
  children: {
shape: ['circle', 'polygon', 'rect'],
fill: ['#6886c5', '#ffe0ac', '#ffacb7'],
degreeShift: 'rand(-360, 360)',
delay: 'stagger(0,30)'
  },
  duration: 400,
});

const bang = new mojs.Burst({
  isShowStart: true,
  left:0, top:0,
  radius:{2:40},
  angle:45,
  count:8,
  children:{
    radius: 8,
    fill: 'white',
    scale: {1 : 0, easing:'sin.in'},
    pathScale: [.7, null],
    duration: [500, 700],
    degreeShift: [13, null],
  }
});

document.onclick = (e) => {
  const position = {
    x: e.pageX,
    y: e.pageY
  }
  circle.tune(position);
  burst.tune(position);
  bang.tune(position);
  burst.replay();
  bang.replay();
  circle.replay();
}
//// Yaha se physedelic wali animation
 const redCirc = new mojs.Shape({
  left:0, 
  top: 0, 
  fill:           'none',
  stroke:         'red',
  radius: 15,
  strokeWidth:    10,
 
  
  duration:       100
})
.then({
  strokeWidth:    0,
  scale:          { 1: 2, easing: 'sin.in' },
  duration: 500
});

const sparks = new mojs.Burst({
   left:0,  
  top: 0,  
  radius: {0:30, easing:'cubic.out'},
  angle:{0: 90,easing:'quad.out'},
  children:{
    shape: 'cross',
    stroke: 'white',
    points: 12,
    radius:10,
    fill:'none',
    angle:{0:360},
    duration:300
    
  }
 
  
});

const redSparks = new mojs.Burst({
  left: 0, top: 0, 
  count:8,
  radius: { 150: 350 },
  angle: {0:90 ,easing:'cubic.out'},
  children: {
    shape: 'line',
    stroke: {'red':'transparent'},
    strokeWidth: 5,
    scaleX: {  0.5:0},
    degreeShift:  'rand(-90, 90)',
    radius:       'rand(20, 300)',
    duration:     200,
    delay:        'rand(0, 150)',
 
  }
});

const triangles = new mojs.Burst({
  radius: { 0 : 1000,easing: 'cubic.out'},
  angle:  {1080 : 0,easing: 'quad.out'},
  left: 0,        top: 0,  
  count: 20,
  children : {
    shape: 'polygon',
    points: 3,
    radius: { 10 : 100 },
    fill: ['red','yellow','blue','green'],
    duration: 3000
  }
});

const pentagons = new mojs.Burst({
  radius: { 0 : 1000,easing: 'cubic.out'},
  angle: {0 : 720,easing: 'quad.out'},
  left: 0,        top: 0,  
  count: 20,
  children : {
    shape: 'polygon',
    radius: { 1 : 300 },
    points: 5,
    fill: ['purple','pink','yellow','green'], 
    delay:500,
    duration: 3000
  }
});

const lines = new mojs.Burst({
  radius: { 0 : 1000,easing: 'cubic.out'},
  angle: {0 : 1440,easing: 'cubic.out'},
  left: 0,        top: 0,
  count: 50, 
  children : {
    shape: 'line',
    radius: { 1 : 100,easing:'elastic.out' },
    fill: 'none',
    stroke: ['red','orange'],
    delay:         'stagger(10)',
    duration: 1000
  }
});

const redSquares = new mojs.Burst({
  radius: { 0 : 1000,easing: 'cubic.out'},
  angle: {360 : 0,easing: 'quad.out'},
  left: 0,        top: 0, 
  count: 20,
  children : {
    shape: 'rect',
    radiusX: { 1 : 1000 },
    radiusY:50,
    points: 5,
    fill: 'none',
    stroke: {'red':'orange'}, 
    strokeWidth:{5:15},
    delay:1000,
    duration: 3000
  }
});



document.addEventListener( 'click', function (e) {
  
   redCirc
    .tune({ x: e.pageX, y: e.pageY,  })
    .replay();
  
     sparks
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();

    redSparks
    .tune({ x: e.pageX, y: e.pageY  })
    .replay()
    .generate();
  
      triangles
    .tune({ x: e.pageX, y: e.pageY,})
    .replay()
  
     pentagons
    .tune({ x: e.pageX, y: e.pageY,})
    .replay()
  
   lines
    .tune({ x: e.pageX, y: e.pageY,})
    .replay()
  
  redSquares
    .tune({ x: e.pageX, y: e.pageY,})
    .replay()
    

});
