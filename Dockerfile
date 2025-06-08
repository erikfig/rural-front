# Etapa de build
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package.json yarn.lock ./

# Instala as dependências
RUN yarn install --frozen-lockfile

# Copia o restante do código
COPY . .

# Executa o build
RUN yarn build

# Etapa de produção
FROM nginx:stable-alpine

# Copia os arquivos buildados para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove configurações padrão do Nginx e adiciona a customizada
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
