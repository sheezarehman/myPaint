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
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Paint</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li  id="pen" class="  tools icons pen" title="pen"></li>
                        <li  id="gomme" class="  tools icons eraser" title="gomme"></li>
                        <li  id="line" class=" active tools icons line" title="draw line"></li>
                        <li id="circle" class="  tools icons circle" title="draw circle"></li>
                        <li  id="rectangle" class="  tools icons rectangle" title="draw rectangle"></li>
                        <li class="dropdown">
                            <select class="form-control" id="filled">
                                <option value="true">rempli</option>
                                <option value="false">vide</option>
                            </select>
                        </li>

                        <li ><input type="color" name="favcolor" id="color"/></li>
                        <li><input id="size"  type="range" value="5" max="30" min="1"/></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li id="more"><button type="button" class="btn btn-primary">More options</button></li>
                        <li id="reset"><button type="button" class="btn btn-danger ">Reset</button></li>
                        <li ><a id="save" type="button" class="btn btn-info ">Save</a></li>
                        <li></li>
                    </ul>
                </div>

                <div class="collapse custom-file" id="more2">
                    <ul class="nav navbar-nav" id="mynav">
                        <li  id="colors" class="colors" title="colors">
                            <table>
                                <tr>
                                    <td class="mini" id="#3333ff"></td>
                                    <td class="mini" id="#0099ff"></td>
                                    <td class="mini" id="#ccccff"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#ff33cc"></td>
                                    <td class="mini" id="#ff6699"></td>
                                    <td class="mini" id="#ff0000"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#ffff99"></td>
                                    <td class="mini" id="#ff9900"></td>
                                    <td class="mini" id="#ffff00"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors" class="colors" title="colors">
                            <table>
                                <tr>
                                    <td class="mini" id="#99ff33"></td>
                                    <td class="mini" id="#ccffcc"></td>
                                    <td class="mini" id="#009900"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#99ffcc"></td>
                                    <td  class="mini" id="#00cc99"></td>
                                    <td  class="mini" id="#006666"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#003366"></td>
                                    <td class="mini" id="#003300"></td>
                                    <td class="mini" id="#800000"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="rgbLI" class="rgb" title="rgb input">
                            <div class="form-group">
                                <input type="text" class="form-control" id="rgb" placeholder="rgb(255,255,255)">
                            </div>
                        </li>class="mini"
                        <li  id="hslLI" class="rgb" title="rgb input">
                            <div class="form-group">
                                <input type="text" class="form-control" id="hsl" placeholder="hsl(14, 100%, 25%)">
                            </div>
                 class="mini"        </li>

                        <li ><a id="saveColor" type="button" class="btn btn-info ">Save Color</a></li>
                    </ul>
                </div>
      class="mini"       </div>

        </nav>


        <label class="custom-file pull-right" >
            <input type="file" id="file" class="custom-file-input">
            <span class="custom-file-control"></span>
     class="mini"    </label>

        <div id ="main" >
            <h2>Paint</h2>

      class="mini"        <canvas id="mycanvas" width="800" height="600" ></canvas>
            
            <img id="image"/>

        </div>
     class="mini"    <script src="js/scripts.js"></script>
    </body>
</html>