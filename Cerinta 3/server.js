// JavaScript source code
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const combinatie = [
    { 'user': 'mihai', 'pass': '12345' },
    {'user':'ionel','pass':'2002'}
]

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});
/* Codul bun
app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});
*/
//EXPERIMENT
app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    let ok = 0;
    for (let obiect of combinatie)
    { 
        if (obiect.user === username && obiect.pass=== password)
{
    res.send(`Bine ai venit, ${username}!`)
    ok = 1;
}
    }
if (ok === 0)
    res.send(`${username} ||| ${password} nu este o combinatie valida!`)
});

const port = 3000;
app.listen(port, () => console.log(`This app is listening on port ${port}`));