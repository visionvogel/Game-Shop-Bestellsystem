const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const products = [
  { id: 1, name: "Ea Sports FC 25", price: 149.9 },
  { id: 2, name: "Grand Theft Auto V", price: 49.95 },
  { id: 3, name: "Battlefield 2042 Cross", price: 99.95 },
  { id: 4, name: "Star Wars Jedi", price: 109.9 },
  { id: 5, name: "Call of Duty: Black Ops Cold War", price: 49.9 },
  { id: 6, name: "The Crew Motorfest", price: 19.5 },
  { id: 7, name: "Marvel’s Spider-Man", price: 79.9 },
  { id: 8, name: "Call of Duty: Modern Warfare 3", price: 29.99 },
  { id: 9, name: "Gran Turismo 7", price: 39.99 },
  { id: 10, name: "UFC 5", price: 89.99 },
];

rl.question(
  "Willkommen im Game-Shop!\nWie heißt du in der Welt der Menschen? ",
  function (name) {
    console.log(`\nHallo ${name}! Hier sind unsere Produkte:\n`);

    products.forEach((product) => {
      console.log(
        `${product.id}. ${product.name} - ${product.price.toFixed(2)}€`
      );
    });

    rl.question(
      "\nBitte gib die Nummer des gewünschten Produkts ein: ",
      function (productNumber) {
        const selectedProduct = products.find(
          (p) => p.id === parseInt(productNumber)
        );

        if (!selectedProduct) {
          console.log("\nFehler: Ungültige Produktauswahl!");
          rl.close();
          return;
        }

        rl.question(`\nWie viele möchtest du kaufen? `, function (quantity) {
          const amount = parseInt(quantity);
          if (isNaN(amount) || amount <= 0) {
            console.log("\nFehler: Ungültige Anzahl!");
            rl.close();
            return;
          }

          const totalPrice = selectedProduct.price * amount;
          console.log(
            `\n${name}, du hast ${amount}x ${selectedProduct.name} bestellt.`
          );
          console.log(`Gesamtpreis: ${totalPrice.toFixed(2)}€`);

          rl.close();
        });
      }
    );
  }
);
