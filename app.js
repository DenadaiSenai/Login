const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// Configurar a conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'phpmyadmin',
    password: 'aluno',
    database: 'mydb',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida.');
});

// Configurar a sessão
app.use(
    session({
        secret: 'sua_chave_secreta',
        resave: true,
        saveUninitialized: true,
    })
);

app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como o motor de visualização
app.set('view engine', 'ejs');

// Rota para a página de login
app.get('/', (req, res) => {
    res.render('pages/index');
});

// Página de login
app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.get('/about', (req, res) => {
    res.render('pages/about')
});

// Rota para processar o formulário de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ? AND password = SHA1(?)';

    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/dashboard');
        } else {
            // res.send('Credenciais incorretas. <a href="/">Tente novamente</a>');
            res.redirect('/login_failed');
        }
    });
});

// Rotas para cadastrar
app.get('/cadastrar', (req, res) => {
    res.render('pages/cadastrar');
});

app.post('/cadastrar', (req, res) => {
    const { username, password } = req.body;

    const query = 'INSERT INTO users (username, password) VALUES (?, SHA1(?))';

    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/dashboard');
        } else {
            // res.send('Credenciais incorretas. <a href="/">Tente novamente</a>');
            res.redirect('/login_failed');
        }
    });
});

app.get('/login_failed', (req, res) => {
    res.render('pages/login_failed');
});

// Rota para a página do painel
app.get('/dashboard', (req, res) => {
    //
    //modificação aqui
    if (req.session.loggedin) {
        //res.send(`Bem-vindo, ${req.session.username}!<br><a href="/logout">Sair</a>`);
        // res.sendFile(__dirname + '/index.html');
        res.render('pages/dashboard');
    } else {
        res.send('Faça login para acessar esta página. <a href="/">Login</a>');
    }
});

// Rota para fazer logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});