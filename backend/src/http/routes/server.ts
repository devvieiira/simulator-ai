import fastify from "fastify"

const app = fastify()

app.listen({port: 4000, host: "0.0.0.0"}).then((value) => {
  console.log("server running!")
})