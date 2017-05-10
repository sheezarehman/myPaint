<!doctype html>

<html lang="fr">
    <head>
        <meta charset="utf-8">

        <title>My paint</title>
        <meta name="paint editor" content="paint stuff">
        <meta name="Sheeza" content="Sheeza">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>

    <body>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Paint</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li  id="pen" class="  tools icons pen" title="pen"></li>
                        <li  id="gomme" class="active  tools icons eraser" title="gomme"></li>
                        <li  id="line" class="active  tools icons line" title="draw line"></li>
                        <li id="circle" class="active  tools icons circle" title="draw circle"></li>
                        <li  id="rectangle" class="active  tools icons rectangle" title="draw rectangle"></li>
                        <li class="dropdown">
                            <select class="form-control" id="filled">
                                <option value="true">rempli</option>
                                <option value="false">vide</option>
                            </select>
                        </li>

                        <li ><input type="color" name="favcolor" id="color"/></li>
                        <li><input id="size"  type="range" value="15" max="30" min="1"/></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id ="main" >
            <h2>Paint</h2>

            <canvas id="mycanvas" width="800" height="600" ></canvas>
        </div>
        <script src="js/scripts.js"></script>
    </body>
</html>