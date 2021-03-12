// Canvas
    var canvas = new fabric.Canvas("_Canvas");

// Block Properties
    var blockImageWidth = 30;
    var blockImageHeight = 30;
    var blockImageObjects = "";

// Player
    // Properties
    var playerX = 10;
    var playerY = 10;

    var playerObjects = "";

// Player update
    function playerUpdate() 
    { 
        fabric.Image.fromURL("player.png", function(Img) 
        { 
            playerObjects = Img;

            playerObjects.scaleToWidth(150);
            playerObjects.scaleToHeight(140);
            playerObjects.set( { top:playerY, left:playerX } );

            canvas.add(playerObjects);
        });
    }

// New image
    function newImage(get_image) 
    { 
        fabric.Image.fromURL(get_image, function(Img) 
        { 
            blockImageObjects = Img;

            blockImageObjects.scaleToWidth(blockImageWidth);
            blockImageObjects.scaleToHeight(blockImageHeight);
            blockImageObjects.set( { top:playerY, left:playerX } );

            canvas.add(blockImageObjects);
        });
    }

// Input
    window.addEventListener("keydown", _keydown);

    function _keydown(e) 
    { 
        keyPressed = e.keyCode;
        if (e.shiftKey == true && keyPressed == "80") 
        { 
            blockImageWidth += 10;
            blockImageHeight += 10;

            document.getElementById("current_width").innerHTML = blockImageWidth;
            document.getElementById("current_height").innerHTML = blockImageHeight;
        }

        if (e.shiftKey == true && keyPressed == "77") 
        { 
            blockImageWidth -= 10;
            blockImageHeight -= 10;

            document.getElementById("current_width").innerHTML = blockImageWidth;
            document.getElementById("current_height").innerHTML = blockImageHeight;
        }

        // Movement
        if (keyPressed == "38") 
        { 
            up();
        }

        if (keyPressed == "40") 
        { 
            down();
        }

        if (keyPressed == "37") 
        { 
            left();
        }

        if (keyPressed == "39") 
        { 
            right();
        }

        // Building
        if (keyPressed == "87") 
        { 
            newImage("wall.jpg");
        }

        if (keyPressed == "71") 
        { 
            newImage("ground.png");
        }

        if (keyPressed == "76") 
        { 
            newImage("light_green.png");
        }

        if (keyPressed == "84") 
        { 
            newImage("trunk.jpg");
        }

        if (keyPressed == "82") 
        { 
            newImage("roof.jpg");
        }

        if (keyPressed == "89") 
        { 
            newImage("yellow_wall.png");
        }

        if (keyPressed == "68") 
        { 
            newImage("dark_green.png");
        }

        if (keyPressed == "85") 
        { 
            newImage("unique.png");
        }

        if (keyPressed == "67") 
        { 
            newImage("cloud.jpg");
        }

        if (keyPressed == "76") 
        { 
            newImage("ladder.png");
        }

        if (keyPressed == "72") 
        { 
            newImage("Re_wood.png")
        }
    }

// Up
    function up() 
    { 
        if (playerY => 0) 
        { 
            playerY -= blockImageHeight;
            canvas.remove(playerObjects);
            playerUpdate();
        }
    }

// Down
    function down() 
    { 
        if (playerY <= 500) 
        { 
            playerY += blockImageHeight;
            canvas.remove(playerObjects);
            playerUpdate();
        }
    }

// Left
    function left() 
    { 
        if (playerX > 0) 
        { 
            playerX -= blockImageWidth;
            canvas.remove(playerObjects);
            playerUpdate();
        }
    }

// Right
    function right() 
    { 
        if (playerX < 975) 
        { 
            playerX += blockImageWidth;
            canvas.remove(playerObjects);
            playerUpdate();
        }
    }