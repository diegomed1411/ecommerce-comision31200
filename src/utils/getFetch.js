const items = [
    {
      id: 1,
      title: "Valija Mediana 24 Premium",
      shortDescription: "Para viajeros que van a comprar y necesitan espacio, ideal para viajes largos.",
      description: "Material liviano ABS (2,8 mm de espesor), flexible que resiste golpes y caídas.Manija de aluminio (0,8 mm de espesor). Cuatro ruedas giratorias 360 ° reforzadas de nylon GF. Silenciosas, resistentes a la fricción y de alto impacto.Candado TSA para una inspección personalizada sin romper el bloqueo, más fuerte que el candado combinado.Revestimiento interior de alta densidad 210D, malla con bolsillo y 2 bolsillos y separaciones de servicio. Fuelle expansible",
      price: 3990,
      category: "valijas",
      pictureUrl: "https://cdn.shopify.com/s/files/1/0121/1849/1193/products/DEMOTROTAMUNDOS220801-1_8c470683-f137-4d64-a55c-40a07e599c8a_600x.png",
    },
    {
      id: 2,
      title: "Valija Grande 28 Premium",
      shortDescription: "Las valijas de tamaño grande permite guardar y transportar todo lo que necesitas de una forma cómoda y segura.",
      description: "Confeccionada en material liviano ABS (2,8 mm de espesor), flexible que resiste golpes y caídas. Manija de aluminio (0,8 mm de espesor). Cuatro ruedas giratorias 360 ° reforzadas de nylon GF. Silenciosas, resistentes a la fricción y de alto impacto. Candado TSA para una inspección personalizada sin romper el bloqueo, más fuerte que el candado combinado.",
      price: 4490,
      category: "valijas",
      pictureUrl: "https://cdn.shopify.com/s/files/1/0121/1849/1193/products/VALIJAGRANDEGRIS-2_fca88a53-2a5a-49a7-9fb7-3d7240e76bc1_600x.png?v=1589382296",
    },
    {
      id: 3,
      title: "Valija 20 Carry on policarbonato",
      shortDescription: "Ideal para llevar como equipaje de mano en viajes en avión o para escapadas de fin de semana.",
      description: "Material policarbonato el cual tiene una elevada resistencia a los impactos, Adaptable a cualquier superficie y cuenta con una gran estabilidad dimensional, Candado TSA, ruedas 360°, dos compartimientos separados por un cierre cada uno.",
      price: 3890,
      category: "valijas",
      pictureUrl: "https://cdn.shopify.com/s/files/1/0121/1849/1193/products/Aviso_500x.jpg?v=1648505118",
    },
    {
      id: 4,
      title: "Mochila Mochilero 45 Litros",
      shortDescription:"Ideal para viajeros que van a acampar, hacer treking o senderismo. Para llevar a excursiones, como equipaje de mano o para despachar",
      description: "Capacidad Litros: 45 + 5 litros. Capacidad práctica: ideal equipaje de mano. Posee tirantes ajustables para reducir y ampliar la capacidad. Cobertor de lluvia. Bolsillo superior, frontal, lateral y en la faja de la cintura. Acceso superior e inferir al bolsillo principal. Cierres dobles para poder colocar candado.",
      price: 3990,
      category: "mochilas",
      pictureUrl: "https://cdn.shopify.com/s/files/1/0121/1849/1193/products/12_d9783248-6fa7-4ad4-b311-6b0c486f14c6_600x.png?v=1632839972",
    },
    {
      id: 5,
      title: "Mochila Lateral Seguridad",
      shortDescription:"Excelente mochila compacta, lateral. Diseño clásico y minimalista, liviana, ideal para el día a día. ",
      description: "Tela impermeable con forro EPE, cómoda y segura. Diseño de anillo en D, metálico, permite cambiar el lado de la mochila de hombro izquierdo o derecho. 5 compartimientos en total, con el bolsillo frontal oculto 32cm  x 17,5 cm x 8 cm.",
      price: 1490,
      category: "mochilas",
      pictureUrl: "https://cdn.shopify.com/s/files/1/0121/1849/1193/products/WhatsAppImage2019-06-03at3.54.02PM_600x.jpg?v=1597261872",
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