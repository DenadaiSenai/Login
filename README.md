# Base de aplicação back-end:  
## Nodejs + MySQL + Express + EJS
>Aplicação base para uso com nodejs.  
>_Utilizado no curso Técnico de Desenvolvimento de Sistemas - SENAI "Celso Charurui" CFP 5.12 - Sumaré - SP_  
---  
## Instalação e execução  
1 - Instalar o [Nodejs](https://nodejs.org/en/download) de acordo com o sitema operacional  
2 - Clonar este repositório com [git clone](https://github.com/DenadaiSenai/LoginSQLite.git), ou outro aplicativo de versionamento  
3 - Instalar os módulos utilizados pelo aplicativo  
```npm install```  

4 - Instalar o MySQL e criar o banco de dados (mydb) e executar o arquivo _mydb.sql_ na pasta SQL, no MySQL  
>[Ajuste o usuário e a senha](https://github.com/DenadaiSenai/Login/blob/7b09fb26c3f6f34d8226a5720d1c22a84b125b70/app.js#L7) do banco de dados para a conexão do Nodejs, no arquivo _'app.js'_ 
>(https://github.com/DenadaiSenai/Login/blob/7b09fb26c3f6f34d8226a5720d1c22a84b125b70/app.js#L7-L13) 

5 - Executar o aplicativo:  
```node app.js```  
  
6 - Executar o browser e abrir a url [http://localhost:3000](http://localhost:3000)   
7 - Testar o aplicativo  

---    
## A fazer (TO DO)
- [x] Criptografrar as senhas no banco de dados
- [x] Configurar o banco de dados a usar somente comparação _'BINÁRIA'_, para evitar o efeito de _'cadastro duplicado'_
- [ ] Criar um campo extra na página de cadastro para verificar a senha antes de realizar o inclusão no banco de dados
---
## Ambiente de execução e teste
***Windows 10 Education 22H2***  
- XAMPP - v3.3.0 (Apache + MySQL)  
- Nodejs - v16.16.0  

***Linux Ubuntu 20.04.6 LTS***  
- MariaDB - v10.3  
- Nodejs - v18.17.1  
---
### Autor:
**Marcio Denadai**  
_Instrutor de Formação Profissional_  
_SENAI 'Celso Charuri' - Sumaré / SP - CFP 5.12_  
