var scg = d3.select("#svg-container").append("svg").attr("width","1500").attr("height","1000");

var rect = scg.append("rect").attr("class","rect-effect").attr("width","1000").attr("height","500").attr("fill","green").attr("x",0).attr("y",0);



document.getElementById("btn-effect").addEventListener("click",function(){

    let xAxis = 50;
    let yAxis = 50;
    let z=150;
    for(let i=0;i<1000;i+=6)
    {
        for(let j=0;j<500;j+=6)
        {
            scg.append("rect").attr("class","rect-effect").attr("width","3").attr("height","3").attr("fill","rgb("+Math.floor(Math.random() * (2*j))+",105,0)").attr("x",i).attr("y",j).transition().duration(6000).attr("transform","rotate("+Math.floor(Math.random() * 10)+")").attr("fill","black"); 
        }
        xAxis+=15;
        yAxis+=15;
    }

    rect.style("fill","black");
    //scg.append("rect").attr("class","rect-effect").attr("width","400").attr("height","140").attr("fill","yellow").attr("x",50).attr("y",50);

})


