const items = [
    {
      id: 1,
      title: "Valija Mediana 24¨ Premium",
      shortDescription: "Para viajeros que van a comprar y necesitan espacio, ideal para viajes largos.",
      description: "Material liviano ABS (2,8 mm de espesor), flexible que resiste golpes y caídas.Manija de aluminio (0,8 mm de espesor). Cuatro ruedas giratorias 360 ° reforzadas de nylon GF. Silenciosas, resistentes a la fricción y de alto impacto.Candado TSA para una inspección personalizada sin romper el bloqueo, más fuerte que el candado combinado.Revestimiento interior de alta densidad 210D, malla con bolsillo y 2 bolsillos y separaciones de servicio. Fuelle expansible",
      price: 3990,
      category: "valijas",
      pictureUrl: "../assets/static/icono_equipaje.png",
    },
    {
      id: 2,
      title: "Articulo 2",
      description: "descripcion articulo 2",
      price: 200,
      pictureUrl: "url2",
    },
    {
      id: 3,
      title: "Articulo 3",
      description: "descripcion articulo 3",
      price: 300,
      pictureUrl: "url3",
    },
    {
      id: 4,
      title: "Articulo 4",
      description: "descripcion articulo 4",
      price: 400,
      pictureUrl: "url4",
    },
    {
      id: 5,
      title: "Articulo 5",
      description: "descripcion articulo 5",
      price: 500,
      pictureUrl: "url5",
    },
  ];
  
  const getFetch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });
  };

  export default getFetch;