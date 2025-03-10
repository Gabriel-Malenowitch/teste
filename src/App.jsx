import './App.css'
import {useState, useEffect} from 'react'
import { AccordionDetails, Accordion, Stack, Typography, Box, Grid, AccordionSummary } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';

const Question = ({pergunta, resposta}) => (
  <>
    <Accordion sx={{
      backgroundColor: '#444 !important',
      borderRadius: 2,
      color: 'white',
      borderBottomColor: 'red',
      borderBottom: '4px solid red',
      width: '90%',
    }}>
      <AccordionSummary expandIcon={<Box color="white"><ExpandMore color="inherit" /></Box>}>
        <Typography fontWeight={600}>
          {pergunta}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography textAlign="start">
          {resposta}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </>
)

const CountDown = () => {
  // Inicializa com 9 minutos (9 * 60 = 540 segundos)
  const [time, setTime] = useState(540);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup: limpa o interval quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  // Calcula minutos e segundos restantes
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Formata os segundos para exibir sempre dois dígitos
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <Grid container spacing={1} alignItems="center" justifyContent="center" mt={2}>
      <Grid
        item
        xs={5}
        sx={{
          backgroundColor: 'red',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          fontSize="4rem"
          lineHeight="3rem"
          overflow="hidden"
          id="minutes"
          fontWeight={600}
        >
          {minutes}
        </Typography>
        <Typography>Minutos</Typography>
      </Grid>

      <Grid item xs={0.5} />

      <Grid
        item
        xs={5}
        sx={{
          backgroundColor: 'red',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          fontSize="4rem"
          lineHeight="3rem"
          overflow="hidden"
          id="seconds"
          fontWeight={600}
        >
          {formattedSeconds}
        </Typography>
        <Typography>Segundos</Typography>
      </Grid>
    </Grid>
  );
}

function App() {

  return (
    <Stack alignItems={"center"} spacing={2} p={1}>
    <Stack alignItems={"center"} spacing={2} p={1}  style={{
      backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("./images/Modern-Colorful-Gaming-YouTube-Channel-Art-_46_.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
    }}>
      <img loading="lazy"
        width={200}
        height={69}
        style={{ width: 200, height: 69, aspectRatio: '200/69' }} src="./images/LOGO-BRANCA-SEM-FUNDO-e1717859020398-1024x355.webp" />
      <Typography fontWeight={600}>APROXIME O SEU FILHO DE JESUS, ENSINANDO OS PRINCÍPIOS DA BÍBLIA</Typography>
      <img loading="lazy"
        width={350}
        height={238}
        style={{ width: 350, height: 238, aspectRatio: '350/238' }} src="./images/Instagram-post-para-culto-infantil-divertido-colorido-7-1-e1736473927917-1024x696.png-1.webp" />
      <Typography fontWeight={600}>Experimente a Plataforma que Está Mudando a Maneira como as Famílias estão ensinando os <span className='red'>Valores Sagrados</span> aos seus filhos.</Typography>
      <Typography>Dê ao seu filho acesso a uma plataforma única, repleta de desenhos animados, músicas e conteúdos lúdicos que ensinam os valores e princípios bíblicos de forma divertida e envolvente. Aqui, o aprendizado da Palavra de Deus se transforma em momentos de alegria e crescimento, ajudando a moldar o comportamento em casa e na escola. Garanta um entretenimento seguro que não apenas diverte, mas também planta sementes eternas no coração do seu pequeno. Invista hoje no futuro espiritual e emocional do seu filho!</Typography>
    </Stack>

      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Stack spacing={2} direction={"row"} className='carousel-container'>
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/PRIMEIRA-1-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/SEGUNDA-2-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/TERCEIRA-2-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/QUARTA-2-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/QUINTA-2-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/SEXTA-2-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/SETIMA-2-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/OITAVA-2-1-768x960.webp" />
        </Stack>
      </Box>


      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Stack spacing={2} direction={"row"} className='carousel-container'>
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Copia-de-Copia-de-Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-10-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Copia-de-Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-9-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-1-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-11-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-13-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-6-768x960.webp" />
          <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/Post-instagram-retrato-culto-de-santa-ceia-moderno-marrom-e-bege-7-768x960.webp" />
        </Stack>
      </Box>

    <Stack alignItems={"center"} spacing={2}>
      <img width={200} height={170} style={{width: 200, height: 170}} loading="lazy"  src="./images/a-melhor-garantia-do-mercado-1.webp" alt="" />
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
      
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Stack spacing={2} direction={"row"} className='carousel-container'>
        <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/2-2-768x960.webp" />
        <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/3-2-768x960.webp" />
        <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/4-2-768x960.webp" />
        <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/5-1-768x960.webp" />
        <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/6-1-768x960.webp" />
        <img width={136} height={170} style={{width: 136, height: 170, aspectRatio: '136/170'}} loading="lazy" className='cover' src="./images/7-2-768x960.webp" />
      </Stack>
    </Box>
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
        <img width={352} height={262} style={{width: 352, height: 262}} loading="lazy" className='notice-cover' src="./images/49-e1737058136398.webp" alt="" />
        <img width={352} height={262} style={{width: 352, height: 262}} loading="lazy" className='notice-cover' src="./images/50-e1737058165324.webp" alt="" />
        <img width={352} height={262} style={{width: 352, height: 262}} loading="lazy" className='notice-cover'  src="./images/51-e1737058191101.webp" />
        <img width={352} height={262} style={{width: 352, height: 262}} loading="lazy" className='notice-cover'  src="./images/55-e1737058217267.webp" />
        <Typography fontSize={'1.6rem'} fontWeight={600}>
          “Ensine a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele.” — Provérbios 22:6
        </Typography>
        <img width={352} height={262} style={{width: 352, height: 262}} loading="lazy" className='notice-cover' src="./images/52_1-e1737056485555.webp" />
        <img width={352} height={262} style={{width: 352, height: 262}} loading="lazy" className='notice-cover' src="./images/53-e1737056510181.webp" alt="" />
        <img width={352} height={262} style={{width: 352, height: 262}} loading="lazy" className='notice-cover' src="./images/54-e1737056537284.webp" />
      </Stack>
    </Box>

    <Typography fontWeight={600} backgroundColor='red' p={2} borderRadius={2} >ESCOLHA O MELHOR PLANO PARA VOCÊ</Typography>
    
    <>
      <Stack spacing={2} class="plan-card" sx={{
        backgroundColor: '#444 !important',
        borderRadius: 2,
        padding: 2,
        alignItems: 'center',
      }}>
        <Box>
          <Typography variant='h4' fontWeight={600}>
            BÁSICO
          </Typography>
          <Typography>DE <s>R$ 47,97</s> POR APENAS</Typography>
          <Typography variant='h2' fontWeight={600} >R$ 1,99</Typography>
          <Typography ></Typography>
        </Box>

        <ul>
          <hr />
          <li>✅ Acesso por 3 meses</li>
          <hr />
          <li>✅ 20 Livros digitais com imagens e ensinamentos práticos</li>
          <hr />
          <li>✅ 10 Atividades Escolares aprovadas por pedagogos</li>
          <hr />
        </ul>

        <br />
        <a >SIM! QUERO ESSA OPÇÃO</a>
        <br />
        <br />
        <br />


        <Stack backgroundColor="#222" p={2} mt={2} borderRadius={2}>
          <Typography>🚨</Typography>
          <Typography fontWeight={600} color="red">MAS ANTES DE COMPRAR...</Typography>
          <Typography>
            Temos mais uma oferta <strong style={{ color: 'orange' }}>AINDA MAIS</strong> vantajosa para você!
          </Typography>
          <Typography>
            Leve mais e pague menos, 97% escolhem a nossa <strong style={{ color: 'orange' }}>MEGA OFERTA!</strong>
          </Typography>
          <Typography>
            👇{' '}👇{' '}👇{' '}👇{' '}👇{' '}👇{' '}👇{' '}👇{' '}👇{' '}👇
          </Typography>
        </Stack>

      
      </Stack>

      <Stack spacing={2} class="plan-card" sx={{
        backgroundColor: '#444 !important',
        borderRadius: 2,
        padding: 2,
        alignItems: 'center',
      }}>
        <Box>
          <Typography color="red" variant='h4' fontWeight={600}>
            PREMIUM
          </Typography>
          <img loading="lazy" width={341} height={231} style={{ width:341, height: 231 }} src="./images/Instagram-post-para-culto-infantil-divertido-colorido-7-1-e1736473927917-1024x696.png-1.webp" alt="" />
          <Typography fontWeight={600}>DE <s style={{ color: 'red' }}>R$ 47,97</s> POR APENAS</Typography>
          <Typography variant='h2' color="#12FF00" fontWeight={600} >R$ 19,97</Typography>
          <Typography></Typography>
        </Box>

        {/* <Typography fontWeight={600} backgroundColor="orange" p={1} px={2} borderRadius={2}>MUITO MAIS BENEFÍCIOS!</Typography> */}

      <CountDown />

        <ul>  
          <li>✅ Mais de 800 Conteúdos, Desenhos animados, Músicas, brincadeira e Jogos e atividades Educacionais.</li>
          <hr />
          <li>✅ Animações bíblicas no estilo Disney</li>
          <hr />
          <li>✅ Atividades escolares aprovadas por pedagogas</li>
          <hr />
          <li>✅ Livros digitais com imagens e ensinamentos práticos.</li>
          <hr />
          <li>✅ Músicas, Jogos e Desenhos para Colorir.</li>
          <hr />
          <li>✅ Momento de Oração com As Crianças.</li>
          <hr />
          <li>✅ Filmes Bíblicos para Assistir na Tv, Celular ou Tablet .</li>
          <hr />
          <li>✅ Suporte dedicado e personalizado.</li>
          <hr />
          <li>✅ Plataforma Exclusiva</li>
          <hr />
          <li>✅ Garantia Incondicional de 30 Dias</li>
          <hr />
          <li>✅ Acesso Imediato e Vitalício</li>
          <hr />

        </ul>

        <Typography my={2} color="orange" variant='h5' fontWeight={600}>
          Adquirindo Hoje leve o Super Bônus, CRESCENDO COM CRISTO.
        </Typography>
        <img loading="lazy" width="425" height="231" sx={{ width: "425", height: "231" }} src="images/esent-1024x556-1.webp" alt="" />        
        <br />
        <br />
        <br />
        <a className='mainBuyButton'>SIM! QUERO ESSA OPÇÃO</a>
        <br />
        <br />
      </Stack>
    </>

    <Typography my={2} color="white" variant='h5' fontWeight={600}>
      PERGUNTAS FREQUENTES
    </Typography>

    <Question
      pergunta="COMO SERÁ DISPONIBILIZADO O MEU ACESSO À PLATAFORMA?"
      resposta="Após a confirmação do pagamento, o acesso à plataforma será imediatamente liberado. Você receberá um e-mail contendo o link de acesso para baixar o aplicativo, além de seu login e senha exclusivos."
    />
    <Question
      pergunta="ONDE POSSO ASSISTIR?"
      resposta="Assista onde quiser, quando quiser. Faça login com sua conta para começar a assistir no computador ou em qualquer aparelho como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames."
    />
    <Question
      pergunta="COMO FAÇO PARA CANCELAR?"
      resposta="Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento"
    />
    <Question
      pergunta="PARA QUAIS IDADES O BÍBLIATUBE KIDS É RECOMENDADO?"
      resposta="Nossos programas são voltados para crianças de 1 a 12 anos."
    />

    <Box>
      <Typography fontWeight={600}>
        Feito Com ❤ Para Sua Família!
      </Typography>
      <Typography fontWeight={600}>Feito Com ❤ Para Sua Família!
        Todos os direitos reservados.
      </Typography>
    </Box>
    </Stack>

  )
}

export default App
