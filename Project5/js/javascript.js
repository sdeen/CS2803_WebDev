var total = 0;

function pageLayout(){
    var gridCols = [0, 50, 450, 570, 930];
    var gridRows = [0,50, 70, 150, 180];
    var buttonCols = [0, 150, 350, 550, 750 ];
    var buttonRows = [0, 200, 450, 700, 950, 1200, 1450];
    var gamePrices = [79.99, 69.99, 59.99, 49.99, 39.99,
                  29.99, 19.99, 10.99, 70.01, 30.00,
                  29.59, 20.50, 15.99, 17.99, 24.99,
                  23.05, 30.45, 25.09, 60.99, 50.99,
                  22.09, 33.05, 12.99, 13.99 ];
    var gameNames = ['Sims 4', 'Need for Speed' ,
                     'Assassins Creed IV', 'Thief', 'Call of Duty',
                     'Grand Theft Auto V', 'Just Dance',
                     'Halo Reach', 'Skyrim', 'Dragon Age Origins',
                     'Dragon Age II', 'The Witcher 2', 'Watch Dogs',
                     'Destiny', 'Titanfall', 'Fable III',
                     'Fallout 3 ', 'Dark Souls II', 'Mass Effect', 'Final Fantasy XIII',
                      'Darksiders II','FIFA Soccer 13', 'Mortal Kombat X','Bully' ];

    var elements = [
                    ['regtop', 2, 0 , 400, 100],
                    ['regBottom', 1, 3 , 1200, 1550],
                    ['scTotal', 2, 0, 400, 60],
                    ['scReciept', 4, 4, 280, 1500],
                    ['logo', 0, 0, 150,84],
                    ['reset', 3, 2 , 180, 50]
                    ];

    for (var i = 0; i < elements.length; i++) {
        var div = document.createElement('div');
            div.id = elements[i][0];
            div.style.position = "absolute";
            div.style.left = gridCols[elements[i][1]] + 'px';
            div.style.top = gridRows[elements[i][2]] + 'px';
            div.style.width = elements[i][3] + 'px';
            div.style.height = elements[i][4] + 'px';
            document.body.appendChild(div);
    }

    var buttonCount=1;
    for(row=1; row<buttonRows.length; row++){
        for(col=1; col<buttonCols.length; col++){
            var button = document.createElement('div');
                button.id = 'button'+buttonCount;
                button.className = 'button';
                button.style.position = "absolute";
                button.style.left = buttonCols[ col ]+'px';
                button.style.top = buttonRows[ row ]+'px';
                button.style.width = 156 +'px';
                button.style.height = 220 +'px';

                var gameCover = document.createElement('img');
                gameCover.id = 'pic'+buttonCount;
                gameCover.className = 'gameCover';
                gameCover.setAttribute('data-itemname', gameNames[buttonCount-1]);
                gameCover.src = 'img/'+gameCover.id+'.gif' ;
                button.appendChild(gameCover);

                var gamePrice = document.createElement('span');
                gamePrice.className = 'gamePrice';
                gamePrice.innerHTML = '$'+gamePrices[buttonCount-1].toFixed(2);

                button.appendChild(gamePrice);

                button.onmousedown = buttonDown;
                button.onmouseup = buttonUp;
                button.onclick = addToReceipt;
            document.body.appendChild(button);
            buttonCount++;
        }
    }
    createReset();

}

function buttonDown() {
    this.style.border = "inset 4px";
}

function buttonUp(){
    this.style.border = "outset 4px";
}

function addToReceipt (argument) {
    var scReciept = document.getElementById('scReciept');
    scReciept.innerHTML = this.firstChild.getAttribute('data-itemname') + '&nbsp;&nbsp;&nbsp;&nbsp;' + this.lastChild.innerHTML +'<br>' + scReciept.innerHTML;

    var scTotal = document.getElementById('scTotal');
    var price = parseFloat(this.lastChild.innerHTML.slice(1));
    total += price;
    scTotal.innerHTML = '$'+total.toFixed(2);
}
function createReset(){
    document.getElementById('reset').innerHTML = "Reset";
    document.getElementById('reset').onclick = reset;

}

function reset(){
 total = 0;
 document.getElementById("scTotal").innerHTML = "";
 document.getElementById("scReciept").innerHTML = "";
}
