<template>
<div class="geral">
  <preloader></preloader>
  <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2123037ff42904702b737_hero_shape.png" loading="lazy" height="250" style="opacity: 1;" srcset="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2123037ff42904702b737_hero_shape-p-500.png 500w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2123037ff42904702b737_hero_shape-p-800.png 800w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2123037ff42904702b737_hero_shape.png 867w" sizes="(max-width: 479px) 100vw, 203.9027862548828px" alt="" class="hero-graphic-right">
<div class="navigation-wrap">
   <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navigation w-nav" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
      <div class="navigation-container">
         <div class="navigation-left">
            <a href="#" class="brand w-nav-brand">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2.png" width="50" sizes="(max-width: 767px) 100vw, 50px" srcset="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2-p-500.png 500w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2-p-800.png 800w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2.png 1000w" alt="" class="image">
            </a>
         </div>
         <div class="navigation-right">
            <nav role="navigation" class="nav-menu-2 w-nav-menu">
               <a href="#" class="nav-link w-nav-link">Quem Somos</a>
               <a href="#" class="nav-link w-nav-link">Business</a>
               <a href="#" class="nav-link w-nav-link">Soluções</a>
               <a href="#" class="nav-link w-nav-link">Contato</a>
            </nav>
            <router-link v-if="!logado" to="/market" target="_blank" class="text-decoration-none primary-cta w-inline-block" style="padding-top:16px!important;padding-bottom:16px!important">
               <div class="nav-link dark-blue">Acessar Agora</div>
               <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c205418f1ad655cd224228_arrow-left.png" alt="" class="arrow">
            </router-link>
            <router-link v-else to="/login" target="_blank" class="text-decoration-none primary-cta w-inline-block" style="padding-top:16px!important;padding-bottom:16px!important">
               <div class="nav-link dark-blue">Acessar Agora</div>
               <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c205418f1ad655cd224228_arrow-left.png" alt="" class="arrow">
            </router-link>
         </div>
      </div>
      <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
   </div>
   <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease-out" data-easing2="ease-out" role="banner" class="navigation-mob w-nav">
      <div class="navigation-container-mob">
         <a href="#" class="w-nav-brand">
         <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2.png" sizes="(max-width: 767px) 40px, 100vw" srcset="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2-p-500.png 500w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2-p-800.png 800w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2.png 1000w" alt="" class="nav-logo">
         </a>
         <nav role="navigation" class="mobile-nav w-nav-menu">
            <a href="#" class="mobile-nav-link w-nav-link">Home</a>
            <a href="#" class="mobile-nav-link w-nav-link">Mobile Link 1</a>
            <a href="#" class="mobile-nav-link w-nav-link">Mobile Link 2</a>
            <a href="#" class="mobile-nav-link w-nav-link">Mobile Link 3</a>
            <a href="#" class="mobile-nav-link w-nav-link">Mobile Link 4</a>
            <a href="#" class="mobile-nav-link w-nav-link">Sign Up</a>
         </nav>
         <div class="menu-mob w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-1" aria-haspopup="menu" aria-expanded="false">
            <div class="w-icon-nav-menu"></div>
         </div>
      </div>
      <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-1"></div>
   </div>
</div>
<div class="hero-section">
   <div class="flex-container">
      <div class="w-layout-grid hero-grid-wrapper">
         <div id="w-node-_96611e63-f868-bab7-b4e8-a00ebf768a65-b0201310" class="hero-text-block">
            <h1 style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" class="hero-h1">Um universo de
               <span class="text-span">Indicações </span>ao seu alcance!
            </h1>
            <p style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" class="hero-paragraph">Na Indicou você tem Centenas de Opções de Empresas, Serviços e Produtos para indicar e tudo isso em troca de Excelentes Comissões!</p>
            <router-link v-if="!logado" to="/market" target="_blank" data-w-id="721feb71-7d31-83e1-9841-fb0555821526" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" class="text-decoration-none button-hero w-button">Acessar Agora</router-link>
            <router-link v-else to="/login" target="_blank" data-w-id="721feb71-7d31-83e1-9841-fb0555821526" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" class="text-decoration-none button-hero w-button">Acessar Agora</router-link>
         </div>
         <div class="hero-image-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c163f20efc8aca2042dcb4_image-home.png" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" sizes="(max-width: 479px) 100vw, (max-width: 1252px) 94vw, 1177px" srcset="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c163f20efc8aca2042dcb4_image-home-p-500.png 500w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c163f20efc8aca2042dcb4_image-home-p-800.png 800w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c163f20efc8aca2042dcb4_image-home.png 1177w" alt="" class="hero-image">
         </div>
      </div>
   </div>
</div>
<div class="service-section bg-white">
   <div class="flex-container">
      <h2 class="h2 h2-centre fw-700" style="font-size:48px">São Benefícios que você quer?</h2>
      <p class="standard-paragraph center">Com a Indicou qualquer pessoa pode ganhar Dinheiro com indicações, as melhores comissões do mercado você recebe aqui! E ainda com a Indicou Business sua empresa também pode crescer muito!</p>
      <div class="w-layout-grid service-grid">
         <a href="#" class="grid-block w-inline-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d463320131b_yellow-icon-01.svg" alt="" class="grid-icon">
            <div class="profile-details">
               <div class="faq-title">Fature como nunca visto antes</div>
               <p class="paragraph-basic">Indique inúmeros produtos/serviços e ganhe excelentes comissões.</p>
            </div>
         </a>
         <a href="#" class="grid-block w-inline-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004dda62201319_icon-2.svg" alt="" class="grid-icon">
            <div class="profile-details">
               <div class="faq-title">Gere Leads, Clientes e Conversões!</div>
               <p class="paragraph-basic">A sua empresa pode gerar um amplo público com base em seus objetivos pré-definidos.</p>
            </div>
         </a>
         <a href="#" class="grid-block w-inline-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d6a74201320_icon-3.svg" alt="" class="grid-icon">
            <div class="profile-details">
               <div class="faq-title">Gere crescimento a você e sua empresa!</div>
               <p class="paragraph-basic">Com o aumento de clientes o seu faturamento aumentará consideravelmente.</p>
            </div>
         </a>
      </div>
      <a href="#" class="button dark-blue w-button">Veja mais</a>
   </div>
</div>
<div class="content-section bg-white">
   <div class="flex-container">
      <div class="w-layout-grid features-grid-wrapper">
         <div class="feature-image-block my-5">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2400d1570b1a3318f0107_content-image-1.png" alt="" class="feature-image-1">
         </div>
         <div class="feature-text-block">
            <h2 class="h2 fw-700  my-4" style="font-size:46px">A Única e Melhor Plataforma de Indicações!</h2>
            <p class="standard-paragraph _40-bottom-margin">Somos a única e Melhor Plataforma de Marketing de Indicações do Mercado. Somos uma central de indicações completa que reúne inúmeros tipos de indicações e uma alta flexibilidade na definição de objetivo, recebimentos e pagamentos de comissões. </p>
            <div class="small-blocks">
               <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d463320131b_yellow-icon-01.svg" alt="" class="feature-icon">
               <div class="feature-text">Indicação via Formulário</div>
            </div>
            <div class="small-blocks">
               <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d067320131e_yellow-icon-02.svg" alt="" class="feature-icon">
               <div class="feature-text">Indicação via Link</div>
            </div>
         </div>
         <div id="w-node-_81897d98-5728-bd56-d865-56baff40e11e-b0201310" class="feature-text-block-2 mt-5 pt-5">
            <h2 class="h2 fw-700" style="font-size:46px">Perfeito para qualquer tipo de Negócio.</h2>
            <p class="standard-paragraph _40-bottom-margin">A Indicou serve para qualquer tipo de Negócio! Possuímos todos os recursos necessários tanto para você que quer indicar, quanto para você que é empresa e deseja aumentar seus clientes/faturamento.</p>
            <a href="#" class="button _0-top-margin w-button">Saiba mais</a>
         </div>
         <div id="w-node-a39fd47a-3a83-c060-10b6-94a4efe98bb3-b0201310" class="feature-image-block mt-5 pt-5">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2439b1b58e2377e391353_content-image-02.png" srcset="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2439b1b58e2377e391353_content-image-02-p-500.png 500w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2439b1b58e2377e391353_content-image-02.png 710w" sizes="(max-width: 479px) 95vw, (max-width: 767px) 94vw, 500px" width="540" alt="" class="feature-image-1">
         </div>
      </div>
   </div>
</div>
<div class="feature-section bg-white">
   <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004daf0220131f_dots.svg" alt="" class="halftone-pattern">
   <div class="gradient-div"></div>
   <div class="flex-container">
      <h2 class="h2 h2-centre fw-700" style="font-size:42px">Um amplo mix de Indicações</h2>
      <p class="standard-paragraph center">Dentro da indicou abrangemos todo tipo de Indicação, assim as pessoas que indicam podem ter inúmeros valores de comissões que variam conforme cada anuncio.</p>
      <div class="w-layout-grid grid-wrapper-2">
         <div class="feature-grid-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d580c20133d_parcel.svg" alt="" class="icon-image">
            <div class="feature-header">Produtos</div>
            <div class="standard-paragraph">Temos anúncios de inúmeros tipos de Produtos tantos Produtos Digitais como também Produtos Físicos.</div>
         </div>
         <div class="feature-grid-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d6c4c201340_chatting.svg" alt="" class="icon-image">
            <div class="feature-header">Pessoas</div>
            <div class="standard-paragraph">Você pode simplesmente indicar uma pessoa para uma tarefa ou uma determinada vaga de emprego.</div>
         </div>
         <div class="feature-grid-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004dabd8201341_videocall.svg" alt="" class="icon-image">
            <div class="feature-header">Serviços</div>
            <div class="standard-paragraph">Indicar dezenas de Serviços como Pedreiro, Pintor, Barbeiro nunca foi tão facil e rápido!</div>
         </div>
         <div class="feature-grid-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d13bb201342_notification.svg" alt="" class="icon-image">
            <div class="feature-header">Empresas</div>
            <div class="standard-paragraph">Empresas dos mais variados ramos de atuação estão inseridas na Indicou com variadas propostas de indicação</div>
         </div>
         <div class="feature-grid-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d0ac6201343_calendar.svg" alt="" class="icon-image">
            <div class="feature-header">Negócios</div>
            <div class="standard-paragraph">Quer indicar negócios para uma pessoa, parceiro, amigo? Opções não faltam para você.</div>
         </div>
         <div class="feature-grid-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d783520133f_open-box.svg" alt="" class="icon-image">
            <div class="feature-header">Lugares</div>
            <div class="standard-paragraph">Sabe aquele lugar legal que você foi? Então! Você pode indicar pessoas para visita-lo e receber comissões.</div>
         </div>
      </div>
   </div>
</div>
<div class="testimonial-section">
   <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004df1e6201324_Hero%20Shape%20CTA.svg" style="opacity: 1;" alt="" class="hero-graphic-right">
   <h2 class="h2 white fw-700" style="font-size:47px">
      <strong>Nossos clientes sabem melhor</strong>
   </h2>
   <p class="standard-paragraph center white">São milhares de clientes que já utilizam a Indicou e nos dão seus feedbacks para estarmos melhorando cada dia mais!</p>
   <div data-animation="slide" data-duration="500" data-infinite="1" class="slider w-slider" role="region" aria-label="carousel">
      <div class="mask w-slider-mask" id="w-slider-mask-0">
         <div class="slide w-slide" style="opacity: 1; transform: translateX(0px);" aria-label="1 of 3" role="group">
            <div class="slide-wrap">
               <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d0477201327_icn.svg" alt="" class="quotes-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
               <div class="standard-paragraph">Com a Indicou eu deixei de ser um morador de rua para virar um grande empresário brasileiro apenas com <b>indicações!</b></div>
               <div class="profile-block">
                  <img src="../assets/wommer.jpg" width="80" alt="" class="profile-image">
                  <div class="profile-details">
                     <div class="faq-title">Thiago Wommer</div>
                     <div class="paragraph-basic">Empresário</div>
                  </div>
               </div>
            </div>
         </div>
         <div class="slide w-slide" style="opacity: 0.5; transform: translateX(0px);" aria-label="2 of 3" role="group" aria-hidden="true">
            <div class="slide-wrap" aria-hidden="true">
               <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d0477201327_icn.svg" alt="" class="quotes-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" aria-hidden="true">
               <div class="standard-paragraph" aria-hidden="true">De ex-presidiário para CEO de uma das maiores empresas multinacionais do mundo. Tudo isso só foi possível graças a plataforma <b>Indicou!</b></div>
               <div class="profile-block" aria-hidden="true">
                  <img src="../assets/douglas.jpeg" width="80" alt="" class="profile-image" aria-hidden="true">
                  <div class="profile-details" aria-hidden="true">
                     <div class="faq-title" aria-hidden="true">Douglas Pires</div>
                     <div class="paragraph-basic" aria-hidden="true">CEO - Google, Inc.</div>
                  </div>
               </div>
            </div>
         </div>
         <div class="slide w-slide" style="opacity: 0.5; transform: translateX(0px);" aria-label="3 of 3" role="group" aria-hidden="true">
            <div class="slide-wrap" aria-hidden="true">
               <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004d0477201327_icn.svg" alt="" class="quotes-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" aria-hidden="true">
               <div class="standard-paragraph" aria-hidden="true">Larguei as drogas graças a Indicou. Essa plataforma incrível vêm me proporcionando muito <b>dinheiro!</b></div>
               <div class="profile-block" aria-hidden="true">
                  <img src="../assets/matheus.jpg" width="80" alt="" class="profile-image" aria-hidden="true">
                  <div class="profile-details" aria-hidden="true">
                     <div class="faq-title" aria-hidden="true">Matheus de Sá</div>
                     <div class="paragraph-basic" aria-hidden="true">Bilionário e Filantropo</div>
                  </div>
               </div>
            </div>
         </div>
         <div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore=""></div>
      </div>
      <div class="arrow-left w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-0" aria-label="previous slide">
         <div class="icon w-icon-slider-left"></div>
      </div>
      <div class="arrow-right w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-0" aria-label="next slide">
         <div class="icon w-icon-slider-right"></div>
      </div>
      <div class="slide-nav w-slider-nav w-round">
         <div class="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 3" aria-pressed="true" role="button" tabindex="0"></div>
         <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 3" aria-pressed="false" role="button" tabindex="-1"></div>
         <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 3" aria-pressed="false" role="button" tabindex="-1"></div>
      </div>
   </div>
   <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c0efa002004daf0220131f_dots.svg" alt="" class="halftone-pattern-2">
</div>
<div class="blog-section bg-white">
   <div class="flex-container">
      <h2 class="h2 fw-700" style="font-size:47px">Notícias e Artigos</h2>
      <p class="standard-paragraph center">Confira aqui o que a mídia fala da gente!</p>
      <div class="w-layout-grid news-grid">
         <a href="#" class="articles-block w-inline-block">
            <img src="../assets/top1.jpg" alt="" class="article-thumbnail">
            <div class="blog-category">Líder de Mercado</div>
            <div class="blog-title" style="text-align: justify;">O prêmio de melhor empresa do ano de 2021 vai para a Indicou, StartUp focada em marketing de indicações!</div>
            <div class="article-profile-block">
               <img src="../assets/datena.jpg" width="46" alt="" class="article-profile-image">
               <div class="profile-details">
                  <div class="author-title">José Luiz Datena</div>
                  <div class="date">21 de Junho de 2021</div>
               </div>
            </div>
         </a>
         <a href="#" class="articles-block w-inline-block">
            <img src="../assets/indicação.jpeg" alt="" class="article-thumbnail">
            <div class="blog-category">Marketing de Indicações</div>
            <div class="blog-title" style="text-align: justify;">O Marketing de Indicação vem sendo apontado com uma das principais tendências de marketing voltados para geração de leads qualificados dos últimos tempos.</div>
            <div class="article-profile-block">
               <img src="../assets/bonner.jpg" width="46" alt="" class="article-profile-image">
               <div class="profile-details">
                  <div class="author-title">William Bonner</div>
                  <div class="date">27 de Maio de 2021</div>
               </div>
            </div>
         </a>
         <a href="#" class="articles-block w-inline-block">
            <img src="../assets/parceirias.jpg" alt="" class="article-thumbnail">
            <div class="blog-category">Parceirias</div>
            <div class="blog-title" style="text-align: justify;">A StartUp Indicou firmou novas parceirias com as grandes empresas multinacionais, sendo algumas delas: Google, Microsoft, Apple e Tesla.</div>
            <div class="article-profile-block">
               <img src="../assets/siqueira.jpg" width="46" alt="" class="article-profile-image">
               <div class="profile-details">
                  <div class="author-title">Siqueira Jr</div>
                  <div class="date">09 de Junho de 2021</div>
               </div>
            </div>
         </a>
      </div>
   </div>
</div>
<div class="bottom-section bg-white">
   <div class="flex-container horizontal">
      <h3 class="h3">Perguntas frequentes...</h3>
      <div class="w-layout-grid grid-faq">
         <div class="questions-block">
            <div class="faq-title">Como eu faço para Indicar?</div>
            <p class="standard-paragraph" style="text-align: justify;"><b>É muito simples!</b> Você cria uma conta na Indicou, acessa o nosso mercado e já pode começar a indicar os milhares produtos e serviços disponíveis em nossa plataforma.</p>
         </div>
         <div class="questions-block">
            <div class="faq-title">O que é o Indicou Business?</div>
            <p class="standard-paragraph" style="text-align: justify;">O Indicou Business é nossa plataforma comercial, para que as Empresas ou MEI possam criar anúncios de seus produtos ou serviços para terem uma <b>ampla divulgação!</b></p>
         </div>
         <div class="questions-block">
            <div class="faq-title">Como ganhar dinheiro com o Indicou?</div>
            <p class="standard-paragraph" style="text-align: justify;">Cada empresa parceira pode conceder diferentes tipos de comissões, como vendas, aluguéis, leads ou várias outras. Ou seja, quanto mais você indicar, mais você poderá <b>ganhar dinheiro!</b></p>
         </div>
         <div class="questions-block">
            <div class="faq-title">O que eu posso Indicar?</div>
            <p class="standard-paragraph" style="text-align: justify;">Na Indicou, <b>VOCÊ</b> pode indicar de <b>TUDO!</b> <br><br>Sério, tudo mesmo! Nossa plataforma contém todos os produtos que você pode imaginar, desde um simples bichinho de pelúcia até uma magnífica casa!</p>
         </div>
      </div>
   </div>
   <div class="gradient-div"></div>
   <div class="banner">
      <div class="banner-text-wrapper">
         <div class="cta-header">Inicie agora com o Indicou Business</div>
         <div class="standard-paragraph">Você tem empresa ou deseja criar um anuncio de Indicação? Entre agora para o Indicou Business e tenha uma plataforma completa de Indicações!</div>
      </div>
      <a href="" target="_blank" class="banner-button w-button">Iniciar Agora de Graça!</a>
   </div>
   <section id="contact-form" class="contact-form">
      <div class="w-container">
         <h2 class="heading">Vamos tomar um café?!</h2>
         <p>Entre em contato para parcerias, negócios ou até mesmo conversar :)</p>
         <div id="formInstructions" class="small-text">
            <em class="italic-text-2">Campos com asterisco (*) são obrigatórios.</em>
         </div>
         <div class="w-form">
            <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form">
               <div class="contact-form-grid">
                  <div id="w-node-_206afa00-ca51-014b-6d17-23249ef97ebc-b0201310">
                     <label for="First-Name" id="contact-first-name">Primeiro nome *</label>
                     <input type="text" class="w-input" maxlength="256" name="First-Name" data-name="First Name" id="First-Name" required="">
                  </div>
                  <div id="w-node-_206afa00-ca51-014b-6d17-23249ef97ec0-b0201310">
                     <label for="Last-Name" id="contact-last-name">Sobrenome *</label>
                     <input type="text" class="w-input" maxlength="256" name="Last-Name" data-name="Last Name" id="Last-Name" required="">
                  </div>
                  <div id="w-node-_206afa00-ca51-014b-6d17-23249ef97ec4-b0201310">
                     <label for="Email" id="contact-email">Email *</label>
                     <input type="email" class="w-input" maxlength="256" name="Email" data-name="Email" id="Email" required="">
                  </div>
                  <div id="w-node-_206afa00-ca51-014b-6d17-23249ef97ec8-b0201310">
                     <label for="Contact-Phone-Number" id="contact-phone">Número de Telefone</label>
                     <input type="tel" class="w-input" maxlength="256" name="Contact-Phone-Number" data-name="Contact Phone Number" id="Contact-Phone-Number">
                  </div>
                  <div id="w-node-_206afa00-ca51-014b-6d17-23249ef97ecc-b0201310">
                     <label for="Message" id="contact-message">Messagem</label>
                     <textarea data-name="Message" maxlength="5000" id="Message" name="Message" class="w-input"></textarea>
                  </div>
               </div>
               <input type="submit" value="Enviar" data-wait="Aguarde..." class="submit-button-2 w-button">
            </form>
            <div class="w-form-done">
               <div>Obrigado! Sua mensagem foi enviada!</div>
            </div>
            <div class="w-form-fail">
               <div>Oops! Algo deu errado ao enviar o formulário.</div>
            </div>
         </div>
      </div>
   </section>
   <div class="flex-container">
      <div class="w-layout-grid footer-grid">
         <div class="footer-block">
            <img src="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2.png" width="54" sizes="54px" srcset="https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2-p-500.png 500w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2-p-800.png 800w, https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/60c2076f28a726074ecb67d1_koala-logo2.png 1000w" alt="" class="footer-logo">
            <div class="paragraph-basic">A Plataforma de Indicações mais Completa do Mercado!</div>
         </div>
         <div class="footer-block">
            <div class="footer-title">Sobre nós</div>
            <a href="#" class="paragraph-basic _40-bottom-padding">Business</a>
            <a href="#" class="paragraph-basic _40-bottom-padding">Soluções</a>
            <a href="#" class="paragraph-basic _40-bottom-padding">Contato</a>
            <a href="#" class="paragraph-basic _40-bottom-padding">Depoimentos</a>
         </div>
         <div class="footer-block">
            <div class="footer-title">Redes Sociais</div>
            <a href="#" class="paragraph-basic _40-bottom-padding">Instagram</a>
            <a href="#" class="paragraph-basic _40-bottom-padding">Facebook</a>
            <a href="#" class="paragraph-basic _40-bottom-padding">Linkedin</a>
         </div>
         <div class="w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
               <div class="footer-title">Se increva em nossa Newsletter!</div>
               <div class="paragraph-basic _40-bottom-padding">Se inscreva e receba novidades, atualizações e ofertas da Indicou!</div>
               <input type="email" class="input-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Insira seu e-mail" id="name">
               <input type="submit" value="Se inscrever" data-wait="Please wait..." class="submit-button w-button">
            </form>
            <div class="w-form-done">
               <div>Obrigado! Seu e-mail foi recebido!</div>
            </div>
            <div class="w-form-fail">
               <div>Oops! Algo deu errado ao enviar o formulário.</div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="blue-bar">
   <div class="legal-container">
      <div class="legal-text">Copyright © 2021 Indicou</div>
   </div>
</div>
<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" type="application/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="../assets/webflow.js" type="application/javascript"></script>
</div>
</template>

<style scoped>
@import 'https://uploads-ssl.webflow.com/60c0ef9f02004d7d5320130c/css/douglass-top-notch-project-d1daf3.webflow.8a2c09ce7.css';
.geral{
  zoom:95%!important;
}
.button-hero:hover{
  color:white!important;
}

</style>

<script>
import '../assets/webflow'
import { db, auth } from '../firebase'
import Preloader from '../components/global/Preloader'

export default {
  name: 'Home',
  components: {
    Preloader
  },
  data () {
    return {
      Home: {
        nome: '',
        empresa: '',
        email: '',
        tel: ''
      },
      loginShow: false,
      registerShow: false,
      enviando: false,
      mensagem: false,
      logado: true,
      forget: false
    }
  },
  created () {
    this.$root.$emit('Business::hide')
    this.$root.$emit('MenuBar::hide')
    if (auth.currentUser === null) {
      this.logado = true
    } else {
      this.logado = false
    }
  },
  mounted () {
    this.$nextTick(function () {
      const Webflow = document.createElement('script')
      Webflow.setAttribute('src', '../assets/webflow.js')
      Webflow.head.appendChild(Webflow)
      Webflow.destroy()
      Webflow.ready()
      Webflow.require('ix2').init()
    })
  },
  methods: {
    async EntreContato () {
      db.collection('home').doc(this.Home.nome).set({
        nome: this.Home.nome,
        empresa: this.Home.empresa,
        email: this.Home.email,
        tel: this.Home.tel
      }).then(() => {
        this.enviando = true
        this.mensagem = true
      })
    }
  }
}
</script>
