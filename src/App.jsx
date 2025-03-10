import './App.css'
import { Stack, Typography, Box } from '@mui/material'

function App() {

  return (
    <Stack alignItems={"center"} spacing={2} p={1}>
      <img style={{ width: 200}} src="https://vencendoojogo.site/biblia-tube/images/LOGO-BRANCA-SEM-FUNDO-e1717859020398-1024x355.webp" />
      <Typography fontWeight={600}>APROXIME O SEU FILHO DE JESUS, ENSINANDO OS PRINCÍPIOS DA BÍBLIA</Typography>
      <img style={{ width: 350}} src="https://vencendoojogo.site/biblia-tube/images/Instagram-post-para-culto-infantil-divertido-colorido-7-1-e1736473927917-1024x696.png-1.webp" />
      <Typography fontWeight={600}>Experimente a Plataforma que Está Mudando a Maneira como as Famílias estão ensinando os <span className='red'>Valores Sagrados</span> aos seus filhos.</Typography>
      <Typography>Dê ao seu filho acesso a uma plataforma única, repleta de desenhos animados, músicas e conteúdos lúdicos que ensinam os valores e princípios bíblicos de forma divertida e envolvente. Aqui, o aprendizado da Palavra de Deus se transforma em momentos de alegria e crescimento, ajudando a moldar o comportamento em casa e na escola. Garanta um entretenimento seguro que não apenas diverte, mas também planta sementes eternas no coração do seu pequeno. Invista hoje no futuro espiritual e emocional do seu filho!</Typography>

      <Stack spacing={2} direction={"row"} className='carousel-container'>
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/PRIMEIRA-1-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/SEGUNDA-2-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/TERCEIRA-2-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/QUARTA-2-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/QUINTA-2-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/SEXTA-2-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/SETIMA-2-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/OITAVA-2-1-768x960.webp" />
      </Stack>


      <Stack spacing={2} direction={"row"} className='carousel-container'>
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Copia-de-Copia-de-Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-10-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Copia-de-Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-9-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-1-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-11-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-13-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-6-768x960.webp" />
        <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-7-768x960.webp" />
      </Stack>

    <Stack alignItems={"center"} spacing={2}>
      <img style={{width: 200}} src="https://vencendoojogo.site/biblia-tube/images/a-melhor-garantia-do-mercado-1.webp" alt="" />
      <Typography fontSize={'1.9rem'} fontWeight={600}>
        Experimente gratuitamente por 7 dias!
      </Typography>
      <Typography>
        Por isso, após a sua inscrição, você terá <Typography fontWeight={600}>7 dias totalmente grátis para experimentar nossa plataforma.</Typography> No entanto, se por qualquer razão, não estiver 100% satisfeita, basta enviar um simples e-mail para nossa atenciosa equipe de atendimento dentro desse período que <Typography fontWeight={600}>reembolsaremos 100% do valor pago. É super simples. Comece agora o seu período experimental!</Typography>
      </Typography>
      <Typography fontSize={'1.2rem'} fontWeight={600}>
        VAI TER ACESSO A JOGOS E ATIVIDADES EDUCATIVAS
      </Typography>
    </Stack>
      
      
    <Stack spacing={2} direction={"row"} className='carousel-container'>
      <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/2-2-768x960.webp" />
      <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/3-2-768x960.webp" />
      <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/4-2-768x960.webp" />
      <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/5-1-768x960.webp" />
      <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/6-1-768x960.webp" />
      <img className='cover' src="https://vencendoojogo.site/biblia-tube/images/7-2-768x960.webp" />
    </Stack>
    <Typography fontSize={'1.6rem'} fontWeight={600}>
      E Muito Mais...
    </Typography>

    <Typography fontSize={'1.6rem'} fontWeight={600}>
      Você sabe o que seu filho está assistindo?
    </Typography>

    <Box style={{ backgroundColor: '#595959' }} p={2} mt={2} borderRadius={2}>
      <Typography  fontSize={'1.48rem'}>
        <Typography  fontSize={'1.48rem'}fontWeight={600}>Os canais de streaming estão inundando nossas crianças com desenhos que introduzem temas inadequados para sua idade.</Typography> Temas para os quais <Typography  fontSize={'1.48rem'}fontWeight={600}>elas não estão emocional ou mentalmente preparadas</Typography> podem causar confusão e impactar negativamente seu desenvolvimento.
      </Typography>
        <br />
      <Typography  fontSize={'1.48rem'}>
        <Typography  fontSize={'1.48rem'}fontWeight={600}>Por outro lado, conteúdos direcionados e seguros</Typography> têm o poder de influenciar positivamente <Typography  fontSize={'1.48rem'}fontWeight={600}>os valores, comportamentos e o desenvolvimento emocional</Typography> dos pequenos. <Typography  fontSize={'1.48rem'}fontWeight={600}>É hora de escolher o que entra na mente e no coração dos seus filhos!</Typography>
      </Typography>
        <br />
      <Stack spacing={2} alignItems={"center"}>
        <img className='notice-cover' src="https://vencendoojogo.site/biblia-tube/images/49-e1737058136398.webp" alt="" />
        <img className='notice-cover' src="https://vencendoojogo.site/biblia-tube/images/50-e1737058165324.webp" alt="" />
        <img className='notice-cover'  src="https://vencendoojogo.site/biblia-tube/images/51-e1737058191101.webp" />
        <img className='notice-cover'  src="https://vencendoojogo.site/biblia-tube/images/55-e1737058217267.webp" />
        <Typography fontSize={'1.6rem'} fontWeight={600}>
          “Ensine a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele.” — Provérbios 22:6
        </Typography>
        <img className='notice-cover' src="https://vencendoojogo.site/biblia-tube/images/52_1-e1737056485555.webp" />
        <img className='notice-cover' src="https://vencendoojogo.site/biblia-tube/images/53-e1737056510181.webp" alt="" />
        <img className='notice-cover' src="https://vencendoojogo.site/biblia-tube/images/54-e1737056537284.webp" />

      </Stack>
    </Box>

    <Typography fontWeight={600} backgroundColor='red' p={2} borderRadius={2} >ESCOLHA O MELHOR PLANO PARA VOCÊ</Typography>
    
    <>
      <Typography class="plan-card">
        <Typography variant='h2' fontWeight={600}>
          BÁSICO
        </Typography>
        <Typography class="subtitle">DE <Typography variant='s'>R$ 47,97</Typography> POR APENAS</Typography>
        <Typography class="price">R$ 1,99</Typography>
        <Typography class="access">Acesso por 3 meses</Typography>

        <ul class="benefits">
          <li>✅ 20 Livros digitais com imagens e ensinamentos práticos</li>
          <li>✅ 10 Atividades Escolares aprovadas por pedagogos</li>
        </ul>

        <button class="cta-button">SIM! QUERO ESSA OPÇÃO</button>
      </Typography>

      <footer class="bottom-banner">
        <p>
          <strong>MAS ANTES DE COMPRAR...</strong><br />
          Temos mais uma oferta <strong>AINDA MAIS vantajosa</strong> para você!<br />
          Leve mais e pague menos, 97% escolhem a nossa <strong>MEGA OFERTA!</strong>
        </p>
      </footer>
    </>



    </Stack>

  )
}

export default App
