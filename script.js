var rowCount=0;


function start(){
    var first=document.getElementById("grades");
    var table=document.createElement("table");
        table.setAttribute("id", "table1");
        first.appendChild(table);
        addRow();
}

function addRow(){
    newRow();
    if(rowCount >=6 ){
        document.getElementById("rowbutton").disabled=true;
    }
}

function newRow(){
    var table=document.getElementById("table");
    //rows
    var tr1 = document.createElement("tr");
    var tr2=document.createElement("tr");

    // table data   
    var td=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4= document.createElement("td");

    document.getElementById("grades").appendChild(tr1);
    document.getElementById("grades").appendChild(tr2);

    var cat= document.getElementById("label").value;

    var input2=document.createElement("input");
    var input=document.createElement("input");

    if(cat.length==0){
        cat= "homework";
    }
    input.setAttribute("value", "90,90,90,90,90,90");
    input2.setAttribute("value","20");

    td.innerHTML= cat + "  points";
    td2.innerHTML=cat + " weight";
    // adopting children
    td3.appendChild(input);
    td4.appendChild(input2);

    td.appendChild(td3);
     td2.appendChild(td4);

    tr1.appendChild(td);
    tr2.appendChild(td2);


   tr1.appendChild(tr2);
   tr1.setAttribute("id","tables");

    rowCount++;

    console.log(rowCount);

    input.setAttribute("id","gr" + rowCount);
    input2.setAttribute( "id" ,"wgt" + rowCount);

}

function grade() {
    var final=0;
    var totalweight=0;
    var arr = [];
    var arr2= [];
    for (var i = 1; i <= rowCount; i++) {
        var str = document.getElementById("gr" + i).value;
        arr.push(convertStringToArray(str));

        var str2=document.getElementById("wgt" + i).value;
        arr2.push(convertStringToArray(str2));

        arr[i-1]= gAverage(arr[i-1]);

        final =  final + arr[i - 1] * (arr2[i - 1] / 100);

        var totalweight= totalweight + parseInt(arr2[i-1]);

        console.log(final);

     console.log(arr);
        document.getElementById("finalgrade").innerHTML="your current grade is " + final;
    }
    if(totalweight > 100) {
        alert("you have done something wrong");
        document.getElementById("finalgrade").innerHTML="make sure all the weights add up to less than 100";


    }
    if(final== NaN){
        alert("it seams as though you have entered letters and not numbers, please change it if you dont mind");
    }
    return final;
}



function convertStringToArray(str){
var answer=str.split(",");
for(var i=0; i < answer.length;i++){
    answer[i]= parseInt(answer[i]);
}
console.log(answer);
return answer;
}



function gAverage(array){
    var num=0;
    for(var i=0;i < array.length;i++){
        num+= array[i]
    }
    var average= num/array.length;
    console.log(average);
    return average;
}

function finalGrade(){
    var current=grade();
    var wanted=document.getElementById("gradewanted").value;
    var wgt= document.getElementById("finalwgt").value;
    var a = current* (1-(wgt/100));
    var b=wanted -a;
    var needed= 100*(b/wgt);
    needed=needed*100;
    needed=Math.round(needed);
    needed=needed/100;
    console.log(needed);
    document.getElementById("need").innerHTML="you need a " + needed + " to get a " + wanted;

}