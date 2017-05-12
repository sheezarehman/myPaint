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
                        <li ><a id="save"  class="btn btn-info ">Save</a></li>
                        <li></li>
                    </ul>
                </div>

                <div class="collapse custom-file" id="more2">
                    <ul class="nav navbar-nav" id="mynav">
                        <li  id="colors" class="colors" title="colors">
                            <table>
                                <tr>
                                    <td class="mini" id="#b3ffff"></td>
                                    <td class="mini" id="#00e6e6"></td>
                                    <td class="mini" id="#004d4d"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#99ebff"></td>
                                    <td class="mini" id="#00ccff"></td>
                                    <td class="mini" id="#006680"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#8cb3d9"></td>
                                    <td class="mini" id="#336699"></td>
                                    <td class="mini" id="#19334d"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors2" class="colors" title="blue">
                            <table>
                                <tr>
                                    <td class="mini" id="#809fff"></td>
                                    <td class="mini" id="#0033cc"></td>
                                    <td class="mini" id="#001a66"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#99bbff"></td>
                                    <td  class="mini" id="#1a66ff"></td>
                                    <td  class="mini" id="#0044cc"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#8c8cd9"></td>
                                    <td class="mini" id="#333399"></td>
                                    <td class="mini" id="#19194d"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors3" class="colors" title="purple">
                            <table>
                                <tr>
                                    <td class="mini" id="#b366ff"></td>
                                    <td class="mini" id="#6600cc"></td>
                                    <td class="mini" id="#330066"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#dd99ff"></td>
                                    <td  class="mini" id="#aa00ff"></td>
                                    <td  class="mini" id="#660099"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#ff80df"></td>
                                    <td class="mini" id="#e600ac"></td>
                                    <td class="mini" id="#800060"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors4" class="colors" title="red">
                            <table>
                                <tr>
                                    <td class="mini" id="#ff80b3"></td>
                                    <td class="mini" id="#e6005c"></td>
                                    <td class="mini" id="#800033"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#ff8080"></td>
                                    <td  class="mini" id="#ff1a1a"></td>
                                    <td  class="mini" id="#990000"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#ffb3b3"></td>
                                    <td class="mini" id="#ff0000"></td>
                                    <td class="mini" id="#660000"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors5" class="colors" title="brown">
                            <table>
                                <tr>
                                    <td class="mini" id="#d98c8c"></td>
                                    <td class="mini" id="#993333"></td>
                                    <td class="mini" id="#732626"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#ff661a"></td>
                                    <td  class="mini" id="#cc4400"></td>
                                    <td  class="mini" id="#993300"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#ff8000"></td>
                                    <td class="mini" id="#cc6600"></td>
                                    <td class="mini" id="#994d00"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors6" class="colors" title="yellow">
                            <table>
                                <tr>
                                    <td class="mini" id="#ffe066"></td>
                                    <td class="mini" id="#ffcc00"></td>
                                    <td class="mini" id="#b38f00"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#ffff4d"></td>
                                    <td  class="mini" id="#ffff00"></td>
                                    <td  class="mini" id="#cccc00"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#ffffb3"></td>
                                    <td class="mini" id="#ffff1a"></td>
                                    <td class="mini" id="#b3b300"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors7" class="colors" title="green">
                            <table>
                                <tr>
                                    <td class="mini" id="#b3ff99"></td>
                                    <td class="mini" id="#66ff33"></td>
                                    <td class="mini" id="#2db300"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#85e085"></td>
                                    <td  class="mini" id="#33cc33"></td>
                                    <td  class="mini" id="#1f7a1f"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#66ff66"></td>
                                    <td class="mini" id="#73e600"></td>
                                    <td class="mini" id="#336600"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="colors8" class="colors" title="black">
                            <table>
                                <tr>
                                    <td class="mini" id="#D8D8D8"></td>
                                    <td class="mini" id="#C8C8C8"></td>
                                    <td class="mini" id="#B0B0B0"></td>
                                </tr>
                                <tr>
                                    <td  class="mini" id="#A8A8A8"></td>
                                    <td  class="mini" id="#909090"></td>
                                    <td  class="mini" id="#707070"></td>
                                </tr>
                                <tr>
                                    <td class="mini" id="#505050"></td>
                                    <td class="mini" id="#282828"></td>
                                    <td class="mini" id="#080808"></td>
                                </tr>
                            </table>
                        </li>
                        <li  id="rgbLI" class="rgb" title="rgb input">
                            <div class="form-group">
                                <input type="text" class="form-control" id="rgb" placeholder="rgb(255,255,255)">
                            </div>
                        </li>
                        <li  id="hslLI" class="rgb" title="rgb input">
                            <div class="form-group">
                                <input type="text" class="form-control" id="hsl" placeholder="hsl(14, 100%, 25%)">
                            </div></li>

<!--                        <li ><a id="saveColor" type="button" class="btn btn-info ">Save Color</a></li>-->
                    </ul>
                </div>
            </div>

        </nav>


        <label class="custom-file pull-right" >
            <input type="file" id="file" class="custom-file-input">
            <span class="custom-file-control"></span>
        </label>

        <div id ="main" >
            <h2>Paint</h2>

             <canvas id="mycanvas" width="800" height="600" ></canvas>


        </div>
        <script src="js/scripts.js"></script>
    </body>
</html>