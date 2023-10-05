export default {
  global: {
    componenteFormativo: 'Descripción y funcionamiento de equipos electrónicos',
    descripcionCurso:
      'La descripción y funcionamiento de equipos electrónicos permitirá, a través del estudio de conceptos básicos, realizar la identificación, interpretación y caracterización de equipos electrónicos teniendo en cuenta los diferentes elementos presentes en un plano esquemático, variables eléctricas y electrónicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-elipse'],
        imagen: require('@/assets/curso/portada/banner-elipse.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Identificación e interpretación de los diferentes elementos presentes en un plano esquemático',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Comprobación del correcto funcionamiento de los circuitos de acuerdo con procedimientos técnicos y normativos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Identificación e interpretación de los diferentes elementos presentes en un plano esquemático',
      referencia:
        'Jfetronic: Electrónica y Más. (2016). <em>Tutorial Multisim 14: Introducción y manejo básico [video].</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Bm8Uk2RhYK0',
    },
    {
      tema:
        'Identificación e interpretación de los diferentes elementos presentes en un plano esquemático',
      referencia:
        'Kriss Electronics. (2016). <em>Proteus Design Suite Version 8 [video].</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CFuGS9iz320',
    },
    {
      tema:
        'Identificación e interpretación de los diferentes elementos presentes en un plano esquemático',
      referencia:
        'Floyd, T. L., & Salas, R. N. (2008). <em>Dispositivos electrónicos 8ED.</em> Pearson Educación.',
      tipo: 'Libro',
      link:
        'https://latecnicalf.com.ar/descargas/material/electronicaanalogica/Dispositivos%20Electronicos%208va.edicion-%20Floyd.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Carga',
      significado:
        'son partículas que generan acciones de repulsión o atracción con otras partículas.',
    },
    {
      termino: 'Circuito electrónico',
      significado:
        'es una estructura compuesta por componentes pasivos, activos y semiconductores conectados entre sí formando trayectorias cerradas que inician y terminan en un mismo punto.',
    },
    {
      termino: 'Corriente',
      significado:
        'flujo de carga eléctrica que pasa por dos puntos de un circuito en un determinado instante de tiempo.',
    },
    {
      termino: 'Estator',
      significado: 'parte fija del componente rotativo de un motor eléctrico.',
    },
    {
      termino: 'Fuerza: electromotriz',
      significado:
        'es todo el trabajo que debe realizar un dispositivo o fuente de energía para mover cargas eléctricas a través de un circuito.',
    },
    {
      termino: 'Flujo',
      significado:
        'se denomina flujo a la cantidad de carga eléctrica que atraviesa una superficie.',
    },
    {
      termino: 'Ley de Coulomb',
      significado:
        'establece que la fuerza eléctrica de atracción o repulsión entre dos cargas en reposo es directamente proporcional al producto de las cargas y a la constante de Coulomb e inversamente proporcional a la distancia de separación al cuadrado.',
    },
    {
      termino: 'Ley de Kirchoff',
      significado:
        'establece el comportamiento que tiene la corriente y el voltaje en los nodos y mallas de un circuito.',
    },
    {
      termino: 'Ley de Watt',
      significado:
        'establece la relación que existe entre la potencia consumida, la tensión y la corriente eléctrica de una carga, se define como:<br>P=V*I<br>Donde P es la potencia.',
    },
    {
      termino: 'Malla',
      significado:
        'trayectoria cerrada de un circuito electrónico compuesto por elementos. ',
    },
    {
      termino: 'Nodo',
      significado:
        'punto común en donde se unen dos o más elementos de un circuito electrónico.',
    },
    {
      termino: 'Rotor',
      significado:
        'es la pieza rotatoria de un motor eléctrico, es la contraparte del estator. ',
    },
    {
      termino: 'Voltaje',
      significado:
        '“la carga eléctrica que adquiere un objeto, se llama potencial eléctrico, debido a que los electrones desplazados acumulan energía potencial que se puede utilizar para mover a otros electrones” (Mileaf, H., 2002).',
    },
  ],
  referencias: [
    {
      referencia:
        'Aprende Institute. (2022). <em>Herramientas utilizadas en la reparación electrónica.</em>',
      link:
        'https://aprende.com/blog/oficios/reparacion-electronica/herramientas-utilizadas-en-la-reparacion-electronica/',
    },
    {
      referencia:
        'Cortez, E., Cortez, L., Paredes, A., Cortez, E., Muñoz, G., & García, G. T. (2014). <em>Análisis y diseño de circuitos eléctricos</em>. Alianza Editorial.',
    },
    {
      referencia:
        'Dorf, R., & Svoboda, J. (2015). <em>Circuitos Eléctricos</em>. Alianza Editorial.',
    },
    {
      referencia:
        'Fernández, E. J. L., García, S. C., Lezcano, R. A. G., & Contreras, G. S. (2020). <em>Electricidad y magnetismo.</em> Ibergarceta Publicaciones, S.L.',
    },
    {
      referencia:
        'Floyd, T. L. & Salas, R. N. (2008). Dispositivos electrónicos 8ED. Pearson Educación.',
    },
    {
      referencia: 'Fluke. (2016). <em>¿Qué es la ley de Ohm?</em> Fluke.',
      link:
        'https://www.fluke.com/es-co/informacion/blog/electrica/que-es-la-ley-de-ohm ',
    },
    {
      referencia: 'Fluke. (2021). <em>¿Qué es la continuidad?</em> Fluke.',
      link:
        'https://www.fluke.com/es-co/informacion/blog/electrica/que-es-la-continuidad',
    },
    {
      referencia: 'Fluke. (2021). <em>¿Qué es un diodo?</em> Fluke.',
      link:
        'https://www.fluke.com/es-co/informacion/blog/electrica/que-es-un-diodo',
    },
    {
      referencia: 'Mileaf, H. (2002). <em>Electricidad</em>. Limusa.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
