module.exports = {
  dialect: 'postgres',
  host: 'postgresapp',
  username: 'postgres',
  password: 'docker',
  database: 'development',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
