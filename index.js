const server = require("./src/app/app.js");
const { conn } = require("./src/app/db.js");

// Syncing all the models at once.s

conn.sync({ force: false }).then(() => {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});
