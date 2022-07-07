const emails = ['io@io.io', 'me@me.me', 'altro@altro.altro'];
let usermail = prompt('Inserisci la tua email');

if (usermail == emails[0] || usermail == emails[1] || usermail == emails[2]){
    alert('email corretta');
}
else{
    alert('email non valida');
}