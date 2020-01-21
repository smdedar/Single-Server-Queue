
var serviceTime = new Array();
var arrivalTime = new Array();
var serviceTimeStart = new Array();
var serviceTimeEnd = new Array();
var waitingTime = new Array();
var spendTime = new Array();
var idleTime = new Array();

function getRandomServiceTime(min,max){
    for (var i=0;i<10;i++){  
    serviceTime[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function getRandomArrivalTime(min,max){
    for (var i=0;i<10;i++){  
    arrivalTime[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    arrivalTime.sort();
}

function calculation(){
    serviceTimeStart[0] = arrivalTime[0];   //Initilize service start time for 1st arrival customer
    serviceTimeEnd[0] = serviceTimeStart[0] + serviceTime[0];  //Calculate Service end time for 1st arrival customer
    
    //Calculate serviceStartTime and serviceEndTime
    for(i=1; i<10; i++){

      if(serviceTimeEnd[[i-1]] <= arrivalTime[i]){
        serviceTimeStart[i] = arrivalTime[i];
        serviceTimeEnd[i] = serviceTimeStart[i] + serviceTime[i];
      } 
      else{
        serviceTimeStart[i] = serviceTimeEnd[i-1];
        serviceTimeEnd[i] = serviceTimeStart[i] + serviceTime[i];
      }

    }

    //Calculate waitingTime 
    //waitingTime[0] = 0;    //initilize waiting time for first arrival customer       
    for( i=0; i<10; i++){
        waitingTime[i] = serviceTimeStart[i] - arrivalTime[i];
    }
  
    //Calculate spendTime
    for(i=0; i<10;i++){
        spendTime[i] = serviceTimeEnd[i] - arrivalTime[i];
    }

    //Calculate idleTime
    idleTime[0] = 0;  //Initilize idleTime for 1st arrival customer
    for( i=1; i<10; i++){
       idleTime[i] = serviceTimeStart[i] - serviceTimeEnd[i-1];
    }

   
}


var a = 1;

var count_3 = 0;
var count_6 = 0;
var count_9 = 0;
var count_10 = 0;
var count_12 = 0;
var count_15 = 0;
var count_18 = 0;
var count_21 = 0;
var count_24 = 0;
var count_27 = 0;
var count_30 = 0;
var count_33 = 0;
var count_36 = 0;


function count(){

    for(i=0; i<10; i++){
        if(arrivalTime[i] <= 3 && serviceTimeEnd[i] >=3){
            count_3++;
        }
    
        if(arrivalTime[i] <= 6 && serviceTimeEnd[i] >=6){
            count_6++;
        }
    
        if(arrivalTime[i] <= 9 && serviceTimeEnd[i] >=9){
            count_9++;
        }
    
        if(arrivalTime[i] <= 12 && serviceTimeEnd[i] >=12){
            count_12++;
        }

        if(arrivalTime[i] <= 15 && serviceTimeEnd[i] >=15){
            count_15++;
        }

        if(arrivalTime[i] <= 18 && serviceTimeEnd[i] >=18){
            count_18++;
        }

        if(arrivalTime[i] <= 21 && serviceTimeEnd[i] >=21){
            count_21++;
        }

        if(arrivalTime[i] <= 24 && serviceTimeEnd[i] >=24){
            count_24++;
        }

        if(arrivalTime[i] <= 27 && serviceTimeEnd[i] >=27){
            count_27++;
        }

        if(arrivalTime[i] <= 30 && serviceTimeEnd[i] >=30){
            count_30++;
        }

        if(arrivalTime[i] <= 33 && serviceTimeEnd[i] >=33){
            count_33++;
        }

        if(arrivalTime[i] <= 36 && serviceTimeEnd[i] >=36){
            count_36++;
        }

        }

}

    
    




function graphShow() {
    
   
calculation();
count();
dataTable();
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Single Server Queue Graph"
        },
        axisY: {
            title: "Customers",
            suffix: ""
        },
        data: [{
            type: "stepArea",
            markerSize: 0,
            dataPoints: [
                { x: 03, y: count_3 },
                { x: 06, y: count_6 },
                { x: 09, y: count_9 },
                { x: 12, y: count_12 },
                { x: 15, y: count_15 },
                { x: 18, y: count_18 },
                { x: 21, y: count_21 },
                { x: 24, y: count_24 },
                { x: 27, y: count_27 },
                { x: 30, y: count_30 },
                { x: 33, y: count_33 },
                { x: 36, y: count_36 }
            ]
        }]
    });
    chart.render();
    
}







function dataTable(){


var dataSet = [
    [1,arrivalTime[0],serviceTime[0],serviceTimeStart[0],serviceTimeEnd[0],waitingTime[0],spendTime[0],idleTime[0]],
    [2,arrivalTime[1],serviceTime[1],serviceTimeStart[1],serviceTimeEnd[1],waitingTime[1],spendTime[1],idleTime[1]],
    [3,arrivalTime[2],serviceTime[2],serviceTimeStart[2],serviceTimeEnd[2],waitingTime[2],spendTime[2],idleTime[2]],

    [4,arrivalTime[3],serviceTime[3],serviceTimeStart[3],serviceTimeEnd[3],waitingTime[3],spendTime[3],idleTime[3]],
    [5,arrivalTime[4],serviceTime[4],serviceTimeStart[4],serviceTimeEnd[4],waitingTime[4],spendTime[4],idleTime[4]],
    [6,arrivalTime[5],serviceTime[5],serviceTimeStart[5],serviceTimeEnd[5],waitingTime[5],spendTime[5],idleTime[5]],

    [7,arrivalTime[6],serviceTime[6],serviceTimeStart[6],serviceTimeEnd[6],waitingTime[6],spendTime[6],idleTime[6]],
    [8,arrivalTime[7],serviceTime[7],serviceTimeStart[7],serviceTimeEnd[7],waitingTime[7],spendTime[7],idleTime[7]],
    [9,arrivalTime[8],serviceTime[8],serviceTimeStart[8],serviceTimeEnd[8],waitingTime[8],spendTime[8],idleTime[8]],
    [10,arrivalTime[9],serviceTime[9],serviceTimeStart[9],serviceTimeEnd[9],waitingTime[9],spendTime[9],idleTime[9]]
];



$(document).ready(function() {
    
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Service No" },
            { title: "Arrival Time" },
            { title: "Service Time" },
            { title: "Service Start Time" },
            { title: "Service End Time" },
            { title: "Waiting Time" },
            { title: "Spend Time" },
            { title: "Idle Time" },
            
        ]
    } );
} );
    

 document.getElementById("testStart").disabled = true;
 calculateAverage();

 }

 document.onkeydown = function (e) {
     if (event.keyCode == 123) {
         return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
         return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
         return false;
     }
     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
         return false;
     }
 }



function calculateAverage(){
    var totalWaitingTime = 0;
    var totalIdleTime = 0;
    var totalRunTime = 40;
    var totalServiceTime = 0;
    var totalCustomer = 10;

    for(i=0; i<10; i++){
        totalWaitingTime = totalWaitingTime +  waitingTime[i];
        totalIdleTime = totalIdleTime + idleTime[i];
        totalServiceTime = totalServiceTime + serviceTime[i];
    }


    var averageWaitingTime = totalWaitingTime / totalCustomer;
    var averageServiceTime = totalServiceTime/ totalCustomer;

    document.getElementById("avgWaitingTime").innerHTML="Average Waiting Time : "+totalWaitingTime+"/"+totalCustomer+" = "+averageWaitingTime;
    document.getElementById("avgServicetime").innerHTML="Average Service TIme : "+totalServiceTime+"/"+totalCustomer+" = "+averageServiceTime;
}