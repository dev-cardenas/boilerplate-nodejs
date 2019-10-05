# Para iniciar el proyecto correr
```
yarn
```
or
```
npm install
```

## Para crear migration
Puedes ver la documentacion de [sequelize](https://sequelize.org/master/)
```
yarn sequelize migration:create --name=create-users
```

para correr la migracion debes correr

```
yarn sequelize db:migrate
```
