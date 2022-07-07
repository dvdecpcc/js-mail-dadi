let user = Math.floor(Math.random() *6 +1);
let computer = Math.floor(Math.random() *6 +1);

if (user > computer){
    console.log('you won!');
} else if (user < computer){
    console.log('computer won!');
} else{
    console.log('peer!')
}