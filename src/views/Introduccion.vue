<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.cblanco
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.order-md-first.order-sm-last
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará la descripción y el funcionamiento de equipos electrónicos. La explicación de planos esquemáticos y la interpretación de los componentes y variables asociadas a un equipo electrónico, resultan de gran importancia a la hora de establecer las pruebas o procedimientos para realizar a futuro, debido a que son responsables de establecer qué tipo de herramientas, técnicas o rangos, se deben tener en cuenta en cada una de las fases del mantenimiento y reparación de los equipos electrónicos.
          br
          br
          |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-md-5.order-md-last.order-sm-first(data-aos='fade-left')
        figure
          img(src="@/assets/curso/temas/f1.svg", alt="imagen relacionada")

    figure
      .video
        iframe(width='560' height='315' src='https://www.youtube.com/embed/4G2Jr5Uo428' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='allowfullscreen')

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
