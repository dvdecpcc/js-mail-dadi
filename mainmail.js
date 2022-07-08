const emails = ['io@io.io', 'me@me.me', 'altro@altro.altro'];
const usermail = prompt('Inserisci la tua email');
let access = false;

for (let x=0; x<emails.length; x++){
    if (emails[x] == usermail){
        access = true;
    }
}

if (access = true){
    alert('welcome!');
} else{
    alert('access denied');
}

//emails.includes(usermail) SCORCIATOIA!