var x;

x = 16;

while(x < 10) {
    console.log(x);
    x++;
}

do {//Se corre por lo menos una vez aunque lo de abajo sea falso
    console.log(x);
    x++;
} while(x < 10);