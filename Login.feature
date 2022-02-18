BDD (Behavior Driven Development)
Desenvolvimento guiado por Comportamento

Feature: Login Page

Sendo um visitante do site time.ly
Quero fazer o meu Login
Para que eu possa ter acesso a minha pagina de eventos


Scenario: Login com sucesso
Dado que acesso a página de Login
Quando submeto o meu acesso com email e senha 
Então devo ser redirecionado para a área logada

Scenario:Nenhum campo preenchido
Dado que acesso a página de Login
Quando submeto meu acesso sem preencher os campos
Então devo ver Email is required
E devo ver Password is required

Scenario: Email não informado
Dado que acesso a página de Login
Quando submeto o meu acesso sem o email
Então devo ver Email is required 

Scenario: Senha não informada
Dado que acesso a página de Login
Quando submeto o meu acesso sem a senha
Então devo ver Password is required

Scenario:Senha divergente
Dado que acesso a página de Login
Quando submeto meu acesso com senha divergente
Então devo ver Wrong email or password.

Scenario:Email divergente
Dado que acesso a página de Login
Quando submeto meu acesso com email divergente
Então devo ver Wrong email or password.

