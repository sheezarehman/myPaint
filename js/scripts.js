$( document ).ready(function() {
    var mycanvas = $('#mycanvas');

    var timeout
    var count = 0;
    var color="#000000";
    var filled = "true";
    var widthLine=5;
    var mouse = {x: 0, y: 0};
    var saved={x: 0, y: 0};
    var ctx = mycanvas[0].getContext('2d');
    ctx.lineWidth = widthLine;
    ctx.strokeStyle = color;
    var action = "Online()";
    var count=0;

    console.log("kjbkjbn");


    mycanvas.click(function( event ) {
        mycanvas.css("cursor", "crosshair");
    });

    $( "#color" ).change(function() {
        color = $( "#color" ).val();
    });

    $( "#filled" ).change(function() {
        filled = $( "#filled" ).val();
    });

    $( ".tools" ).click(function(e) {
        console.log($(this).attr('id'));
        count=0;
        action = "On"+$(this).attr('id')+"()";

    });

    mycanvas.click(function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        // console.log(action);
        eval(action);
    });

    function Online(){
        if(count == 0){
            saved.x=mouse.x;
            saved.y=mouse.y;
            count=1;
        }else{

            ctx.moveTo(saved.x,saved.y);
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
            count=0;
        }
    }

    function Oncircle(){
        if (count == 0){
            saved.x=mouse.x;
            saved.y=mouse.y;
            count=1;
        }else {
            ctx.beginPath();
            if(filled == "true"){
                console.log(saved);
                console.log(mouse);
                rad = Math.sqrt(Math.pow((mouse.x -saved.x), 2) + Math.pow((mouse.y -saved.y), 2));
                ctx.arc(saved.x,saved.y ,rad,0,2*Math.PI);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.stroke();
            }else{
                rad = Math.sqrt(Math.pow((mouse.x -saved.x), 2) + Math.pow((mouse.y -saved.y), 2));
                ctx.arc(saved.x,saved.y ,rad,0,2*Math.PI);
                ctx.stroke();
            }
            count=0;
        }

    }

    function Ongomme(){

    }

    function Onpen(){

    }
    function Onrectangle(){
        if (count == 0){
            saved.x=mouse.x;
            saved.y=mouse.y;
            count=1;
        }else {
            if(filled == "true"){
                console.log(saved);
                console.log(mouse);
                ctx.fillRect(saved.x,saved.y,(mouse.x -saved.x),(mouse.y -saved.y));
            }else{
                ctx.rect(saved.x,saved.y,(mouse.x -saved.x),(mouse.y -saved.y));
                ctx.stroke();
            }
            count=0;
        }

    }










    // /* Mouse Capturing Work */
    // mycanvas.mousemove(function(e) {
    //     console.log("tada");
    //     mouse.x = e.pageX - this.offsetLeft;
    //     mouse.y = e.pageY - this.offsetTop;
    // });
    //
    // /* Drawing on Paint App */
    // ctx.lineWidth = widthLine;
    // ctx.lineJoin = 'round';
    // ctx.lineCap = 'round';
    // ctx.strokeStyle = color;
    //
    // mycanvas.mousedown(function(e) {
    //     console.log("tada");
    //     ctx.beginPath();
    //     ctx.moveTo(mouse.x, mouse.y);
    //
    //     mycanvas.mousemove( onPaint);
    // });
    //
    // mycanvas.mouseup( function() {
    //     // mycanvas.mousemove( onPaint);
    // });
    //
    // var onPaint = function() {
    //     ctx.lineTo(mouse.x, mouse.y);
    //     ctx.stroke();
    // }

    // mycanvas.mousemove(function(e){
    //     if(e.which==1) {
    //
    //         var ctx = mycanvas[0].getContext("2d");
    //         ctx.fillStyle=color;
    //         ctx.beginPath();
    //         ctx.lineJoin = 'round';
    //         ctx.lineCap = 'round';
    //         ctx.fillRect( e.pageX  - this.offsetLeft , e.pageY - this.offsetTop, 1.5, 1.5);
    //         ctx.closePath();
    //     }
    //     x = e.pageX  - this.offsetLeft ;
    //     y = e.pageY - this.offsetTop ;
    // });




    // mycanvas.mousedown(function(event){
    //     console.log(event);
    //     timeout = setInterval(function(){
    //
    //         mycanvas.mousemove(function( event ) {
    //             var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
    //             var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
    //             console.log( "( event.pageX, event.pageY ) : " + pageCoords );
    //             console.log( "( event.clientX, event.clientY ) : " + clientCoords );
    //         });
    //
    //         // console.log(x+" "+y);
    //         console.log(count++);
    //     }, 100);
    //
    //     return false;
    // });
    // $(document).mouseup(function(){
    //     clearInterval(timeout);
    //     return false;
    // });




});