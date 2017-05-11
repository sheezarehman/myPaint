$( document ).ready(function() {
    var mycanvas = $('#mycanvas');

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



    mycanvas.click(function( event ) {
        mycanvas.css("cursor", "crosshair");
    });

    $( "#color" ).change(function() {
        console.log("old :"+color+ "new :"+$( "#color" ).val() );
        color = $( "#color" ).val();
        ctx.strokeStyle = $( "#color" ).val();
        console.log("color changed");
    });

    $( "#size" ).change(function() {
        console.log("size :"+$( "#size" ).val() );
        widthLine = $( "#size" ).val();
        ctx.lineWidth = $( "#size" ).val();
        console.log("size of line changed");
    });

    $( "#filled" ).change(function() {
        filled = $( "#filled" ).val();
    });

    $( ".tools" ).click(function(e) {
        console.log($(this).attr('id'));
        count=0;
        action = "On"+$(this).attr('id')+"()";

        $( ".tools" ).each(function( index ) {
                $(this).removeClass( "active");
        });
        $(this ).addClass( "active" );

    });



    mycanvas.click(function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        eval(action);
    });

    function Online(){
        // ctx.strokeStyle =color;
        if(count == 0){
            saved.x=mouse.x;
            saved.y=mouse.y;
            count=1;
        }else{
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(saved.x,saved.y);
            ctx.lineTo(mouse.x,mouse.y);

            ctx.stroke();
            count=0;
        }
    }

    function Oncircle(){
        // ctx.strokeStyle =color;
        if (count == 0){
            saved.x=mouse.x;
            saved.y=mouse.y;
            count=1;
        }else {
            ctx.beginPath();
            var rad = Math.sqrt(Math.pow((mouse.x -saved.x), 2) + Math.pow((mouse.y -saved.y), 2));
            ctx.arc(saved.x,saved.y ,rad,0,2*Math.PI);
            if(filled == "true"){
                ctx.fillStyle = color;
                ctx.fill();
            }
            ctx.stroke();
            count=0;
        }
    }

    function Onrectangle(){
        ctx.beginPath();
        if (count == 0){
            saved.x=mouse.x;
            saved.y=mouse.y;
            count=1;
        }else {
            if(filled == "true"){
                ctx.fillStyle=color;
                ctx.fillRect(saved.x,saved.y,(mouse.x -saved.x),(mouse.y -saved.y));
            }else{
                ctx.rect(saved.x,saved.y,(mouse.x -saved.x),(mouse.y -saved.y));
                ctx.stroke();
            }
            count=0;
        }
    }


    function Ongomme(){
        console.log('hjkjfbdkfjnedfkjsenfgkjsn');
        // ctx.globalCompositeOperation = "destination-out";
        ctx.strokeStyle = 'rgba(0,0,0,1.0)';
        ctx.beginPath();
        ctx.lineTo(mouse.x,mouse.y);
        ctx.stroke();

    }
    function Onpen(){


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