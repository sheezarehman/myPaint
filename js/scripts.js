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
    var allowed=false;



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
        widthLine = $( "#size" ).val();
        ctx.lineWidth = $( "#size" ).val();
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
        ctx.globalCompositeOperation="source-over";
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
        if (allowed == true && action == "Ongomme()"){
            ctx.globalCompositeOperation = "destination-out";
            ctx.strokeStyle = 'rgba(0,0,0,1.0)';
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }
    function Onpen(){
        if (allowed == true && action == "Onpen()"){
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }

    mycanvas.mousemove(function(e) {
        if(action == "Onpen()" || action == "Ongomme()" ) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        }
    });

    mycanvas.mousedown(function(e) {
        if(action == "Onpen()" || action == "Ongomme()" ) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            allowed = true;
            if (action == "Onpen()"){
                mycanvas.mousemove(Onpen);
            }else{
                mycanvas.mousemove(Ongomme);
            }
        }
    });

    mycanvas.mouseup( function() {
        if(action == "Onpen()" || action == "Ongomme()" ) {
            allowed = false;
        }
    });

});