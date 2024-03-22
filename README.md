## Este é o meu projeto pessoal Haikyuu.

A aplicação está em produção para teste, acesse: https://haikyuu.vercel.app/

Ele foi inicialmente criado apenas em html e css, porém conforme fui aprendendo a utilizar outras tecnologias eu decidi migrar ele de vez para o react, se você viu o meu repositório do back-end deste projeto, sabe que eu tive que lidar com requisições para o server side, para isso eu utilizei a biblioteca Axios e achei ela muito boa. Como dito anteriormente, tive que lidar com alguns problemas de CORS e CSP, o cors eu consegui resolver porém acabei deixando as funções que fazem as requisições para o banco de dados dentro de cada página que será requisitada para evitar o problema de CSP pois futuramente irei resolver.

- A minha ideia com esse projeto era fazer landing pages com personagens do anime japônes Haikyuu, onde contassem suas respectivas histórias e que tivesse uma aba de comunidade, mas o que foi feito até agora?
Até o momento eu tenho algumas pages para navegação sem conteúdo nenhum, foquei principalmente na lógica de segurança do login do cliente, para isso eu usei a biblioteca jwt-decode para decodificar e validar o token do usuário ao fazer login, novamente, se você leu o repositório antigo saberá que eu utilizei uma biblioteca chamada cookie-parser para armazenar o token gerado ao fazer login em um cookie de forma segura, e por fim garantindo a segurança e apenas necessitando fazer login caso o cookie seja deletado.
- Ainda não tive a oportunidade de fazer a aba de comunidade, e na realidade nem sei por onde começar pois seria algo muito novo para mim, porém tenho planos de utilizar a api da disqus futuramente pois eu acho ela muito versátil e esteticamente bonita.
- Utilizei a biblioteca react-toastify para sinalizar para os usuários as operações de fetch como login, registro, recovery e redefinição de senha, tratando de sinalizar operações concluídas (201) e sinalizando os erros com o servidor, eu gostei muito da biblioteca e irei usar-la mais vezes.
- No repositório do back-end eu citei que ao usuário requisitar uma troca de senha, o link enviado para o email do mesmo conteria o token com um tempo de validação, e para obter o mesmo eu usei o params do react para pegar diretamente da url.

Com isso o meu projeto não está concluido ainda, mas grande parte dele foi feito offline, porém a partir de hoje irei deixar ele por aqui, para tentar melhorar minhas atividades dentro do GitHub, então podem esperar diversas mudanças por aqui, e muitos commits.

OBS: Atualmente estou testando formas de obter informações de usuário como data de criação de conta, armazenamento de imagens e requisição para uma futura criação de página Profile, porém a que tem no projeto até o momento é algo meramente ilustrativo sem refletir na conta real do usuário, é apenas para teste.


![Screenshot 2024-03-21 at 22-56-38 Haikyuu !!](https://github.com/accsj/Haikyuu/assets/109449153/c8e9cc60-48a6-42f9-8343-39cf0f964131)


![Screenshot 2024-03-21 at 22-56-46 Haikyuu !!](https://github.com/accsj/Haikyuu/assets/109449153/01832cc5-a4a0-4c57-b1b0-ff4cc2ce5e34)


![Screenshot 2024-03-21 at 22-56-52 Haikyuu !!](https://github.com/accsj/Haikyuu/assets/109449153/c8268b9b-cb0b-4053-bc20-05c62c263bd3)


![Screenshot 2024-03-21 at 22-58-47 Haikyuu !!](https://github.com/accsj/Haikyuu/assets/109449153/4ec24d49-b5cf-4151-86a5-c778d6be859f)
