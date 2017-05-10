$( document ).ready(function() {

    var mycanvas = $('#mycanvas');
    var x;
    var y;
    var timeout
    var count = 0;
    var color="#000000";


    mycanvas.click(function( event ) {
        mycanvas.css("cursor", "crosshair");
    });

    $( "#color" ).change(function() {
        color = $( "#color" ).val();
    });

    mycanvas.mousemove(function(e){
        if(e.which==1) {

            var ctx = mycanvas[0].getContext("2d");
            ctx.fillStyle=color;
            ctx.beginPath();
            ctx.fillRect( e.pageX  - this.offsetLeft , e.pageY - this.offsetTop, 1.5, 1.5);
            ctx.closePath();
        }
        x = e.pageX  - this.offsetLeft ;
        y = e.pageY - this.offsetTop ;
    });

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