# Atividade de git e gitHub - Aula 27/09/21
<h3> 1 - Após criado a sua conta no GitHub, crie um repositório remoto público chamado “my_first_steps” e cole o link aqui.</h3>
<p> R: https://github.com/Machitachi/my_first_steps </p>

<h3> 2 - Crie um diretório em sua máquina e o vincule ao seu repositório remoto “my_first_steps” utilizando os comandos git necessários para a realização desta tarefa. </h3>
 <p> R: Criei um diretório com:
mkdir alpha ----> cd alpha entrei nele ----> criei uma diretório mkdir git_github -----> e na pasta raiz "alpha" dei um git init para inicializar meu repositorio local ---------> meu git estava como master e coloquei para ficar o repositorio principal como "main"  git branch -M main -------> entrei no diretorio git_  - github cd git_github --------> mkdir introducao_e_conceitos_basicos_sobre_web_27_09_21 ----->  voltei para raiz do meu repositorio(diretorio alpha) com cd .. ---------> 
Vinculei meu local com meu remoto na raiz  com git remote add origin git@github.com:Machitachi/my_first_steps.git ---->
Verifiquei se estava vinculado,  git remote -v -> origin  git@github.com:Machitachi/my_first_steps.git (fetch)
origin  git@github.com:Machitachi/my_first_steps.git (push)
OK </p>

<h3> 3 - Dentro do diretório em sua máquina, crie um arquivo chamado “ola_mundo.txt”, adicione algum texto da sua preferência e adicione-o ao seu repositório remoto utilizando os comandos git necessários para a realização desta tarefa. </h3>
<p> R: Como estava na raiz entao entrei cd git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21/ --------->
criei com  cat >> ola_mundo.txt
 What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
cd .. 
na raiz do meu diretorio eu dei um git add . e um git commit -m "Criei um ola_mundo.txt"
git push -u origin main
e subi para o repositorio remoto.</p>

<h3> 4 - Se não existir em seu diretório, adicione ao seu diretório um arquivo com o nome de “.gitignore”. Em seguida, crie um arquivo chamado “serei_ignorado.txt” e adicione algum texto dentro dele. Adicione a instrução ao arquivo “.gitignore” para que as alterações realizadas no arquivo “serei_ignorado.txt” não seja controlado pelo git. </h3>
<p> R: pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha (main)
$ cd git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21/
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ ls
ola_mundo.txt
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ touch serei_ignorado.txt
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ ls
ola_mundo.txt  serei_ignorado.txt
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ code . dentro do meu IDE criei um .gitignore e adicionei o arquivo serei_ignorado.txt
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
nothing added to commit but untracked files present (use "git add" to track)
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ cat .gitignore
#ignorar o arquivo
serei_ignorado.txt
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
nothing added to commit but untracked files present (use "git add" to track)</p>

<h3> 5 - Dentro do seu diretório local, crie um arquivo chamado “README.md” e edite-o contendo todas as respostas aos enunciados das questões anteriores. Adicione-o ao seu repositório remoto utilizando os comandos git necessários para a realização desta tarefa.</h3>
<p>Criei o README.md dentro da minha IDE Visual studio code
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ ls
README.md  ola_mundo.txt  serei_ignorado.txt
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        README.md
nothing added to commit but untracked files present (use "git add" to track)
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ git add .
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .gitignore
        new file:   README.md
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ git commit -m "Criando .gitignore e README.md!"
[main a95dd70] Criando .gitignore e README.md!
 2 files changed, 62 insertions(+)
 create mode 100644 git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21/.gitignore
 create mode 100644 git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21/README.md
pascj@LAPTOP-G0NR32FB MINGW64 ~/Desktop/alpha/git_github/introducao_e_conceitos_basicos_sobre_web_27_09_21 (main)
$ git push
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 2.34 KiB | 598.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:Machitachi/my_first_steps.git
   6f984eb..a95dd70  main -> main</p>
