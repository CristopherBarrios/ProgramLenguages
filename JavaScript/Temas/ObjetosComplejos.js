var ordenesDePizzas = [
    {
      "tipo": "margarita",
      "tamaño": "individual",
      "precio": 5.67,
      "toppings": [
          "extra queso",
          "champiñones",
          "piña"
      ],
      "paraLlevar": true
    },
    {
      "tipo": "cuatro quesos",
      "tamaño": "familiar",
      "precio": 18.34,
      "toppings": [
          "extra queso",
          "pimentón"
      ],
      "paraLlevar": false
    },
    {
        "tipo": "napolitana",
        "tamaño": "individual",
        "precio": 6.78,
        "toppings": [],
        "paraLlevar": true
      }
  ];

  console.log(ordenesDePizzas[0]);
  console.log("------------------------")
  console.log(ordenesDePizzas[1]);

  console.log("------------------------")
  console.log("------------------------")

  console.log(ordenesDePizzas[0].tipo);
  console.log(ordenesDePizzas[0]["precio"]);

