# yarn init -y
# yarn add express
# yarn add typescript -D
# yarn tsc --init
# yarn add  @types/express -D
# yarn add ts-node-dev
# use a propriedade transpileOnly, quando o build estiver lento.
"scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"
# editorconfig for vscode
# yarn add eslint -D
# yarn eslint --init
# yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest
# Instalar o ESLint
# yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
# yarn add date-fns
# yarn add uuidv4
# yarn add typeorm pg

## Migrations Criações
# yarn typeorm migration:create -n CreateAgendamento
# yarn typeorm migration:create -n CreateUsuarios
# yarn add bcryptjs
# yarn add -D @types/bcryptjs


## Migrations Manipulações
# yarn typeorm migrations:run
# yarn typeorm migrations:show
# yarn typeorm migrations:revert

# git commit -m "Atualizando"
# git remote add origin https://github.com/MarcusSOliveira/GoBarber-Backend.git
# git pull
# git push -u origin master
