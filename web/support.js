var c,ctx,maxWidth,lineHeight,x,y;c=document.getElementById('canvas');ctx=c.getContext('2d');maxWidth=window.innerWidth-500;lineHeight=36;x=25;y=36;function clear(){ctx.clearRect(0,0,c.width,c.height)}
function wrapText(context,text,x,y,maxWidth,lineHeight){var cars=text.split("\n");for(var ii=0;ii<cars.length;ii++){var line="";var words=cars[ii].split(" ");for(var n=0;n<words.length;n++){var testLine=line+words[n]+" ";var metrics=context.measureText(testLine);var testWidth=metrics.width;if(testWidth>maxWidth){context.fillText(line,x,y);line=words[n]+" ";y+=lineHeight}
else{line=testLine}}
context.fillText(line,x,y);y+=lineHeight}
return y}
function addtext(item){ctx.font="18px sans-serif";ctx.fillStyle='white';var b=wrapText(ctx,item,x,y,maxWidth,lineHeight)}
