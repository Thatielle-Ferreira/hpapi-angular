# Define a versão no node que será utilizada
FROM node:22.12.0

# Define o diretório de trabalho, que é onde o sistema roda
WORKDIR /var/www/app/front-hpapi-angular

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o nosso projeto para a pasta desejada
COPY . .

# Instala o Angular CLI globalmente
RUN npm install -g @angular/cli@19.0.6

# Mostra a porta que está rodando o projeto
EXPOSE 4200

# Comando para iniciar o servidor em modo de desenvolvimento
ENTRYPOINT ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll=2000"]