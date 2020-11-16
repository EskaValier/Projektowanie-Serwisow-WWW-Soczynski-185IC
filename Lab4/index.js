
var myGamePiece;    //pierwszy element gry - sterowany kwadrat
var myObstacles = [];   //przeszkody dla obiektu - trzeba omijać je kwadratem
var myScore;    //wynik jaki uzyskaliśmy

// utworzenie poszczególnych komponentów (gracz i wynik) oraz wystartowanie gry
function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

//stworzenie pustego canvasa jako pole na gre
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;    // szerokosc canvas
        this.canvas.height = 270;   // wysokosc canvas
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 15);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// component czyli gracz (kwadrat) oraz przeszkoda
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    // aktualizacja pola gry
    this.update = function() {
        ctx = myGameArea.context;
        // dla wyniku
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } 
        // dla gracza
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        console.log("X: " + myGamePiece.x + "\nY: " + myGamePiece.y);
    }
    // ustalenie nowej pozycji gracza
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
        this.hitTop();
    }
    // zabezpieczenie zeby element nie spadl ponizej canvasa
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    // zabezpieczenie zeby element nie wzleciał powyzej canvasa
    this.hitTop = function() {
        if (this.y < 0) {
            this.y = 0;
            this.gravitySpeed = 0.05;
        }
    }
    // detekcja kolizji z obiektem "otherobj"
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var noCrash = true;
        // warunki kolizji
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            noCrash = false;
        }
        return noCrash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    // spradzenie kolizji z wszystkimi przeszkodami (przejscie for'em po tablicy przeszkod)
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            gameOver();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    // rysowanie i losowanie układu przeszkod dla gracza; 
    // ustalenie rozmiarow dziury (max i min) oraz odstepow miedzy przeszkodami(max i min)
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);   // losowanie wielkosci przejscia
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);               // losowanie odstepu przeszkod
        // dodanie nowej przeszkody (kazda sklada sie z 2 obiektow: gorny i dolny)
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    // przesuwanie przeszkodami
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x -= 1;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

// napis konca gry
function gameOver(){
    document.getElementById("wynik").innerText = "Congratulations, your score is: " + myGameArea.frameNo;
}

// nowa przeszkoda po kazdych 150 krokach (klatkach / przesunieciach)
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

// poruszanie kwadratem - zmiana grawitacji
function accelerate(n) {
    myGamePiece.gravity = n;
}

// załadowanie ponowne strony w celu uruchomienia ponownie gry
function newGame(){
    document.location.reload();
}

// poruszanie kwadratem - zmiana grawitacji (spacja)
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 32) {
        accelerate(-0.15);
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 32) {
        accelerate(0.05);
    }
}