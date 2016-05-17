

function drawTitle() {
    d3.select('#svg')                      
		.append("text")
 		.text("Chico State Design Alumni")
        .attr("id","title")
		.attr("x",512)
        .attr("y",50)
        .style("font-family","Brandon-Grotesque","myriad-pro-semi-condensed-2")
        .style("font-size","22px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(51,51,51)")
        .style("opacity", .75);
	}


function drawSubTitle() {
    d3.select('#svg')                      
		.append("text")
 		.html("Statistics from the Graphic Design Graduating Classes from 2000 &ndash; 2015")
        .attr("id","title")
		.attr("x",512)
        .attr("y",70)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(51,51,51)")
        .style("opacity", 0.5);
	}

function drawlabel() {
    d3.select('#svg')                      
		.append("text")
 		.text("Organize By:")
        .attr("id","title")
		.attr("x",682)
        .attr("y",115)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(196,186,169)")
        .style("opacity", 1);
	}


function drawButton1() {
     d3.select('#svg')
     	.append("rect")
        .attr("id","buttonHome1")
        .attr("x",640)                
        .attr("y",210)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",115)
        .attr("height",50)
        .style("fill","#ffffff")
	 	.style('cursor','pointer')
        .style("opacity", 0.5)
        .on("mouseover",function() {
        	d3.select(this)
                .style("fill","rgb(196,186,169)");
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(255,255,255)")
                })
	 	
		.on("click",function() {
           	d3.selectAll('.alumniCircles')
                .transition()
				.duration(500)
                .style("fill","rgb(196,186,169)")
 		 	d3.select('#subbuttonHome1').style('opacity',0.5);
		 	d3.select('#maletext').style('opacity',0.75);
		 	d3.select('#subbuttonHome2').style('opacity',0.5);
		 	d3.select('#femaletext').style('opacity',0.75);
                });
   	d3.select('#svg')  
        .append("text")
 		.text("Gender")
        .attr("id","gendertext")
		.attr("x",695)
        .attr("y",240)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#918779")
        .style("pointer-events","none")
        .style("opacity", 0.75);
	}

function drawButton2() {
     d3.select('#svg')
     	.append("rect")
        .attr("id","buttonHome2")
        .attr("x",645)                
        .attr("y",320)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",150)
        .attr("height",50)
        .style("fill","#ffffff")
	 	.style('cursor','pointer')
        .style("opacity", .5)
        .on("mouseover",function() {
        	d3.select(this)
                .style("fill","rgb(196,186,169)");
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(255,255,255)")
                })
	 
     .on("click",function() {
           	d3.selectAll('.alumniCircles')
                .transition()
				.duration(500)
                .style("fill","rgb(196,186,169)")
 		 	d3.select('#subbuttonHome5').style('opacity',0.5);
		 	d3.select('#printtext').style('opacity',0.75);
		 	d3.select('#subbuttonHome6').style('opacity',0.5);
		 	d3.select('#screentext').style('opacity',0.75);
                });
   	d3.select('#svg')  
        .append("text")
 		.text("Type of Designer")
        .attr("id","designertext")
		.attr("x",720)
        .attr("y",350)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#918779")
        .style("pointer-events","none")
        .style("opacity", 0.75);
	}


function drawMainButton1() {
    d3.select('#svg')
        .append("line")
        .attr("id","line")
        .attr("class","allbottomtext")
        .attr("x1",36.7)                
        .attr("y1",26)
        .attr("x2",36.7)
        .attr("y2",644)
        .style("stroke","#999999")
        .style("fill","none")
        .style("opacity", 0);
    
    d3.select('#svg')
        .append("polyline")
        .attr("id","polyline")
        .attr("class","allbottomtext")
        .attr("points","27,41.7 36.7,26 47,40")                
        .style("stroke","#999999")
        .style("fill","none")
        .style("opacity", 0);
    
     d3.select('#svg')
     	.append("rect")
        .attr("id","buttonHome3")
        .attr("x",636)                
        .attr("y",125)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",150)
        .attr("height",45)
        .style("fill","rgb(196,186,169)")
	 	.style('cursor','pointer')
        .style("opacity", .75)
     
        .on("mouseover",function() {
        	d3.select(this)
                .style("fill","#b6ceca")
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(196,186,169)")
                })
	 	
        .on("click",function() {
           	d3.select(this).style("fill","rgb(196,186,169)");
		 	drawData();
        d3.selectAll(".allbottomtext").transition().duration(500).delay(2500).style("opacity",0.5);
        
         d3.select(".line").transition().duration(500).delay(2500).style("opacity",1);
         
        d3.select(".polyline").transition().duration(500).delay(2500).style("opacity",1);
             });
////////////////////////////SHOW HIDE DELAY////////////

	d3.select('#svg')  
        .append("text")
 		.text("Year of Graduation")
        .attr("id","yeartext")
		.attr("x",712)
        .attr("y",150)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#ffffff")
        .style("pointer-events","none")
        .style("opacity", 1);
	}

function drawMainButton2() {
     d3.select('#svg')
     	.append("rect")
        .attr("id","buttonHome3")
        .attr("x",800)                
        .attr("y",125)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",150)
        .attr("height",45)
        .style("fill","rgb(196,186,169)")
	 	.style('cursor','pointer')
        .style("opacity", .75)
    
        .on("mouseover",function() {
        	d3.select(this)
                .style("fill","#b6ceca")
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(196,186,169)")
                })
	 	
		.on("click",function() {
           	d3.select(this).style("fill","rgb(196,186,169)");
		 	drawAlumniLocation();
         
           d3.selectAll(".allbottomtext").style("opacity",0.5);
          
                });
    //////////////////////////
    
    d3.select('#svg')  
        .append("text")
 		.text("Current Location")
        .attr("id","locaiontext")
		.attr("x",875)
        .attr("y",150)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#ffffff")
        .style("pointer-events","none")
        .style("opacity", 1);
	}

function drawsubButton1() {
     d3.select('#svg')
     	.append("rect")
        .attr("id","subbuttonHome1")
        .attr("x",650)                
        .attr("y",265)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",70)
        .attr("height",30)
        .style("fill","#ffffff")
	 	.style('cursor','pointer')
        .style("opacity", 0)
        .on("mouseover",function() {
        	d3.select(this)
                .style("fill","rgb(196,186,169)");
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(255,255,255)")
                })
	 	
		.on("click",function() {
            d3.selectAll('.printCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
            d3.selectAll('.screenCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
           	d3.selectAll('.femaleCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
           	d3.selectAll('.maleCircles')
                .transition()
				.duration(500)
                .style("fill","#00ffc2")
                .style("opacity", .5);
	 });
   	d3.select('#svg')  
        .append("text")
 		.text("Male")
        .attr("id","maletext")
		.attr("x",685)
        .attr("y",284)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","12px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#918779")
        .style("pointer-events","none")
        .style("opacity", 0);
	}

function drawsubButton2() {
     d3.select('#svg')
     	.append("rect")
        .attr("id","subbuttonHome2")
        .attr("x",740)                
        .attr("y",265)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",70)
        .attr("height",30)
        .style("fill","#ffffff")
	 	.style('cursor','pointer')
        .style("opacity", 0)
        .on("mouseover",function() {
        	d3.select(this)
                .style("fill","rgb(196,186,169)");
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(255,255,255)")
                })
	 	
		.on("click",function() {
            d3.selectAll('.printCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
            d3.selectAll('.screenCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
           	d3.selectAll('.maleCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
          	d3.selectAll('.femaleCircles')
                .transition()
				.duration(500)
                .style("fill","#ff4e00")
                .style("opacity", .5);
                });
   	d3.select('#svg')  
        .append("text")
 		.text("Female")
        .attr("id","femaletext")
		.attr("x",775)
        .attr("y",284)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","12px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#918779")
        .style("pointer-events","none")
        .style("opacity", 0);
	}



function drawsubButton3() {
     d3.select('#svg')
     	.append("rect")
        .attr("id","subbuttonHome5")
        .attr("x",750)                
        .attr("y",370)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",80)
        .attr("height",30)
        .style("fill","#ffffff")
	 	.style('cursor','pointer')
        .style("opacity", 0)
	 	.on("mouseover",function() {
        	d3.select(this)
                .style("fill","rgb(196,186,169)");
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(255,255,255)");
                })
        .on("click",function() {
           
            d3.selectAll('.maleCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
          	d3.selectAll('.femaleCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
            d3.selectAll('.printCircles')
                .transition()
				.duration(500)
                .style("fill","yellow")
                .style("opacity", .5);
            d3.selectAll('.screenCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
            
           
           	
                });
   	d3.select('#svg')  
        .append("text")
 		.text("Print")
        .attr("id","printtext")
		.attr("x",790)
        .attr("y",390)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","12px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#918779")
        .style("pointer-events","none")
        .style("opacity", 0);
	}

function drawsubButton4() {
     d3.select('#svg')
     	.append("rect")
        .attr("id","subbuttonHome6")
        .attr("x",653)                
        .attr("y",370)
        .attr("rx",10)
        .attr("ry",10)
        .attr("width",80)
        .attr("height",30)
        .style("fill","#ffffff")
	 	.style('cursor','pointer')
        .style("opacity", 0)
	 	.on("mouseover",function() {
        	d3.select(this)
                .style("fill","rgb(196,186,169)");
                })
        .on("mouseout",function() {
            d3.select(this)
                .style("fill","rgb(255,255,255)")
                })
        .on("click",function() {
         	d3.selectAll('.femaleCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
            d3.selectAll('.screenCircles')
                .transition()
				.duration(500)
                .style("fill","#a271cc");
            d3.selectAll('.printCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
            d3.selectAll('.maleCircles')
                .style("fill","rgb(196,186,169)")
                .style("opacity", .5);
            
                
                });
   	d3.select('#svg')  
        .append("text")
 		.text("Screen")
        .attr("id","screentext")
		.attr("x",690)
        .attr("y",390)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","12px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","#918779")
        .style("pointer-events","none")
        .style("opacity", 0);
	} 


	
function distanceChico() {
    d3.select('#svg')                      
		.append("text")
 		.text("Distance")
        .attr("id","bottomtext1")
        .attr("class","allbottomtext")
		.attr("x",40)
        .attr("y",660)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","12px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(51,51,51)")
        .style("opacity", 0);
    
    d3.select('#svg')                      
		.append("text")
 		.text("From")
        .attr("id","bottomtext2")
        .attr("class","allbottomtext")
		.attr("x",40)
        .attr("y",675)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","12px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(51,51,51)")
        .style("opacity", 0);
    
    d3.select('#svg')                      
		.append("text")
 		.text("Chico")
        .attr("id","bottomtext3")
        .attr("class","allbottomtext")
		.attr("x",40)
        .attr("y",690)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","12px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(51,51,51)")
        .style("opacity", 0);
	}

function bottomNumbers() {
    d3.select('#svg')                      
		.append("text")
 		.text("2000")
        .attr("id","bottomtext4")
        .attr("class","allbottomtext")
		.attr("x",110)
        .attr("y",670)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(51,51,51)")
        .style("opacity", 0);
    
    d3.select('#svg')                      
		.append("text")
 		.text("2015")
        .attr("id","bottomtext5")
        .attr("class","allbottomtext")
		.attr("x",950)
        .attr("y",670)
        .style("font-family","raleway","myriad-pro-semi-condensed-2")
        .style("font-size","14px")
        .style("font-weight","200")
        .style("text-anchor","middle")
        .style("fill","rgb(51,51,51)")
        .style("opacity", 0);
    }


    
function drawData() {
 	for(var alum = 0; alum < alumni.length; alum++) {
		d3.select('#alumniNumber_' + alum)
			.transition()
		  	.duration(4000)
 		.attr("cx",function(d,i) {
            return 100 + (d[12] - 2000) * 55;
            })
        .attr("cy",function(d,i) {
            //console.log(Math.abs(d[7]-39.75));
            //console.log(Math.abs(d[8]+121.84));
            //console.log(i);
            if(Math.abs(d[7]-39.75) >= 0) {
                return 600 - (Math.abs(d[7]-39.75) + Math.abs(d[8]+121.84)) * 8;
                }
            else { return 800; }
            })
        .style("fill","rgb(196,186,169)");
	}
	}

function drawDataType() {
    d3.select('#svg').selectAll('alumni.circles2') 
        .data(alumni)
        .enter()
		.append("circle")
 		.attr('id',function(d,i) {
			if(d[11] == "US") { return 'alumniNumber_' + i; }
			else { return 'foreign'; }
			})			  
       .attr("class",function(d,i) {
			if(d[2] == "M" && d[3] == "Screen") { return "alumniCircles maleCircles screenCircles"; }
			if(d[2] == "M" && d[3] == "Print") { return "alumniCircles maleCircles printCircles"; }
			if(d[2] == "F" && d[3] == "Screen") { return "alumniCircles femaleCircles screenCircles"; }
			if(d[2] == "F" && d[3] == "Print") { return "alumniCircles femaleCircles printCircles"; }
			console.log(d[2]);
        console.log(d[3]);
    })
    
		.attr("cx",-10)
            //return 100 + (d[12] - 2000) * 55;
            
        .attr("cy",function(d,i) {
            //console.log(Math.abs(d[7]-39.75));
            //console.log(Math.abs(d[8]+121.84));
            //console.log(i);
            if(Math.abs(d[7]-39.75) >= 0) {
                return 600 - (Math.abs(d[7]-39.75) + Math.abs(d[8]+121.84)) * 8;
                }
            else { return 800; }
            })
        .attr("r",10)
        .style("fill","rgb(196,186,169)")
        .style("opacity", .5);
	}

var scaleY = d3.scale.linear().domain([29,48]).range([600,100]); //[7]
var scaleX = d3.scale.linear().domain([-123,-81]).range([100,900]); //[8]
// 47.6306,-122.3468,"Seattle"
// 29.653195,-82.324400,"Gainesville","FL"

function drawAlumniLocation() {
	for(var alum = 0; alum < alumni.length; alum++) {
		d3.select('#alumniNumber_' + alum)
			.on('mouseover',function(d) {
				console.log(d[1]);
				})
			.transition()
		  	.duration(4000)
 			.attr("cx",function() {
            	return scaleX(alumni[alum][8]);
            	})
        	.attr("cy",function() {
            	return scaleY(alumni[alum][7]);
           		})
        	.style("fill","rgb(196,186,169)");
		}
}

window.onload = function() {
    drawTitle();
    drawSubTitle();
    drawlabel();
	drawButton1();
    drawButton2();
    drawMainButton1();
    drawMainButton2();
    drawsubButton1();
    drawsubButton2();
    drawsubButton3();
    drawsubButton4();
    distanceChico();
    bottomNumbers();
    //drawData();
    drawDataType();
	}



 