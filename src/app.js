let pronoun = ["yo", "usted", "el", "ella", "eso", "nosotros", "ellos"];
let adj = ["suave", "grande", "dulce", "lindo", "veloz"];
let noun = ["casa", "silla", "ciudad", "perro", "camisa"];
let action = ["saltar", "comer", "jalar", "pintar", "escribir"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let n = 0; n < action.length; n++) {
        console.log(pronoun[i] + adj[j] + noun[k] + action[n] + ".com");
      }
    }
  }
}
