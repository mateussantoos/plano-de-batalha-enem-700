export const studyData = {
  overview: {
    title: "Visão Geral e Estratégia",
    intro:
      "Bem-vindo(a) ao seu centro de comando. Aqui você encontra a filosofia por trás do seu plano de estudos e as ferramentas para visualizar a estratégia. O sucesso no ENEM começa com um plano inteligente, focado na Teoria de Resposta ao Item (TRI).",
    strategyMatrix: {
      labels: [
        "Interpretação de Textos",
        "Proporcionalidade",
        "Funções da Linguagem",
        "Operações Básicas",
        "Ecologia",
        "Análise de Gráficos",
        "Química Básica",
        "Física Básica",
        "Brasil Colônia/Império",
        "Era Vargas",
        "Cinemática",
        "Estatística",
        "Geometria Plana",
        "Urbanização",
        "Eletrodinâmica",
        "Análise Combinatória",
      ],
      datasets: [
        {
          label: "Incidência na Prova",
          data: [
            10, 9.8, 8.5, 9.5, 9.2, 8.8, 7, 6.8, 8.7, 8.6, 7.5, 8.4, 8.3, 8.2,
            7.8, 6.5,
          ],
          backgroundColor: "rgba(58, 134, 255, 0.6)",
        },
        {
          label: "Amigabilidade-TRI (Facilidade)",
          data: [
            10, 9.8, 9.5, 10, 8, 9.2, 9, 9.1, 7, 7.2, 6.5, 7.8, 6.8, 7.5, 5.5,
            4,
          ],
          backgroundColor: "rgba(255, 159, 64, 0.6)",
        },
      ],
    },
  },
  schedule: {
    title: "Cronograma Semanal Interativo",
    intro:
      "Selecione a semana para ver seu plano de estudos diário. Use os botões ✨ para gerar questões e aprofundar seu conhecimento com a ajuda da IA.",
    weeks: [
      {
        focus: "Fundamentos de Matemática e Linguagens",
        days: [
          {
            day: "Segunda",
            subject: "Matemática",
            content: "As 4 operações básicas e expressões numéricas",
            activity: "Teoria (45 min) + 15 exercícios (45 min).",
            videoTitle:
              "EXPRESSÕES NUMÉRICAS: Ordem nas Operações | Matemática Básica - Aula 3",
            videoUrl: "http://www.youtube.com/watch?v=BhDm2qGy780",
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Tipologia e Gêneros Textuais",
            activity: "Teoria (45 min) + Prática de identificação (45 min).",
            videoTitle:
              "Compreensão e Interpretação de Texto – Revisão ENEM [Prof. Noslen]",
            videoUrl: "http://www.youtube.com/watch?v=XsN0e_xPyNI",
          },
          {
            day: "Quarta",
            subject: "Matemática",
            content: "Frações e Operações com Frações",
            activity: "Teoria (45 min) + 15 exercícios (45 min).",
            videos: [
              {
                videoTitle:
                  "FRAÇÕES (Parte 1): Notação de Frações e suas propriedades | Matemática Básica - Aula 4",
                videoUrl: "http://www.youtube.com/watch?v=YJyY6A_MOQc",
              },
              {
                videoTitle:
                  "FRAÇÕES (Parte 2): Operações Básicas | Matemática Básica - Aula 5",
                videoUrl: "http://www.youtube.com/watch?v=SgJpB78R7x0",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Linguagens",
            content: "Elementos da Comunicação e Funções da Linguagem",
            activity: "Teoria (45 min) + Análise de tirinhas (45 min).",
            videoTitle:
              "Funções da Linguagem – Referencial, Emotiva e Conativa ou Apelativa [Prof Noslen]",
            videoUrl: "http://www.youtube.com/watch?v=5JrCUWnqHBk",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Entendendo a Estrutura Dissertativo-Argumentativa",
            activity:
              "Assistir vídeos sobre a função de cada parágrafo (90 min).",
            videoTitle: "COMO FAZER REDAÇÃO MODELO ENEM",
            videoUrl: "http://www.youtube.com/watch?v=PYGzF4b0Kbk",
          },
          {
            day: "Sábado",
            subject: "Prática e Introdução",
            content:
              "Manhã (3h): 40 exercícios de Matemática. Tarde (2h): Introdução à Biologia (Níveis de organização, Ecologia básica).",
            activity: "Resolução e leitura.",
            videos: [
              {
                videoTitle:
                  "NÍVEIS DE ORGANIZAÇÃO DOS SERES VIVOS | Biologia com Samuel Cunha",
                videoUrl: "http://www.youtube.com/watch?v=GnGybrCkIz8",
              },
              {
                videoTitle:
                  "Conceitos Básicos da ECOLOGIA | Prof. Paulo Jubilut",
                videoUrl: "http://www.youtube.com/watch?v=XvdePktAui8",
              },
            ],
          },
          {
            day: "Domingo",
            subject: "Redação #1 e Simulado #1",
            content:
              "Redação sobre educação digital. Simulado (30Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Avançando nos Fundamentos e Introduzindo Ciências",
        days: [
          {
            day: "Segunda",
            subject: "Matemática",
            content: "Porcentagem",
            activity: "Teoria (45 min) + 15 exercícios (45 min).",
            videoTitle: "Calculando Porcentagem de Cabeça no ENEM | Ferretto+",
            videoUrl: "https://www.youtube.com/watch?v=4y2TpS5DZ1A",
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Identificação de Tese e Argumentos",
            activity: "Teoria (45 min) + Prática em textos (45 min).",
            videoTitle:
              "ESTRATÉGIAS ARGUMENTATIVAS PARA A REDAÇÃO DO ENEM - Débora Aladim",
            videoUrl: "https://www.youtube.com/watch?v=ahqhxiIRkhA",
          },
          {
            day: "Quarta",
            subject: "Matemática",
            content: "Regra de 3 Simples e Composta",
            activity: "Teoria (45 min) + 15 exercícios (45 min).",
            videos: [
              {
                videoTitle:
                  "REGRA DE 3 COMPOSTA: Simples e rápido para você nunca mais esquecer",
                videoUrl: "https://www.youtube.com/watch?v=2qBeh6mnHP0",
              },
              {
                videoTitle: "Questão 10: Regra de Três Composta",
                videoUrl: "https://www.youtube.com/watch?v=NVLx8lWGeDE",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Química",
            content: "Matéria, substâncias e misturas",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
            videoTitle:
              "3. Substância Pura, Mistura e Alotropia [Química Geral]",
            videoUrl: "https://www.youtube.com/watch?v=VVIUBoydb5Q",
          },
          {
            day: "Sexta",
            subject: "Física",
            content: "Notação Científica e Ordem de Grandeza",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
            videoTitle:
              "Scientific Notation, International System (SI) and Order of Magnitude - Prof. Boaro",
            videoUrl: "https://www.youtube.com/watch?v=FtLtDqE-VX0",
          },
          {
            day: "Sábado",
            subject: "Prática e Revisão",
            content:
              "Manhã (3h): 30 exercícios (Mat/Qui/Fis). Tarde (2h): Revisar temas da Semana 1.",
            activity: "Resolução e revisão ativa.",
          },
          {
            day: "Domingo",
            subject: "Redação #2 e Simulado #2",
            content:
              "Redação sobre vacinação. Simulado (35Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Consolidando Fundamentos e Humanas",
        days: [
          {
            day: "Segunda",
            subject: "Matemática",
            content: "Potenciação e Radiciação",
            activity: "Teoria (45 min) + 15 exercícios (45 min).",
            videos: [
              {
                videoTitle: "Matemática Básica - Aula 16 - Potenciação",
                videoUrl: "https://www.youtube.com/watch?v=vA8j9nqBlBM",
              },
              {
                videoTitle:
                  "Matemática Básica - Aula 19 - Radiciação (parte 2)",
                videoUrl: "https://www.youtube.com/watch?v=ULydE64exnA",
              },
            ],
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Figuras de Linguagem",
            activity:
              "Teoria (45 min) + 10 exercícios de identificação (45 min).",
            videoTitle:
              "FIGURAS DE LINGUAGEM: Aula COMPLETA para Você NÃO Errar Mais!",
            videoUrl: "https://www.youtube.com/watch?v=zTe7izGQ8-4",
          },
          {
            day: "Quarta",
            subject: "História",
            content: "Fontes Históricas e Periodização",
            activity: "Teoria (45 min) + Análise de fontes (45 min).",
            videos: [
              {
                videoTitle: "FONTES HISTÓRICAS",
                videoUrl: "https://www.youtube.com/watch?v=7rIa-byNws8",
              },
              {
                videoTitle:
                  "PERIODIZAÇÃO DA HISTÓRIA E LINHAS DO TEMPO | RESUMO ESCOLAR",
                videoUrl: "https://www.youtube.com/watch?v=cLLn2mtp_j8",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Geografia",
            content: "Conceitos da Geografia e Introdução à Cartografia",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
            videos: [
              {
                videoTitle: "CONCEITOS BÁSICOS DA GEOGRAFIA",
                videoUrl: "https://www.youtube.com/watch?v=KenPt4ELUXo",
              },
              {
                videoTitle: "O que é CARTOGRAFIA? | Resumo",
                videoUrl: "https://www.youtube.com/watch?v=EPs91IKitlA",
              },
            ],
          },
          {
            day: "Sexta",
            subject: "Revisão Ativa",
            content: "Revisar caderno de erros das semanas 1 e 2",
            activity: "Refazer 10 questões erradas (90 min).",
          },
          {
            day: "Sábado",
            subject: "Prática Intensiva",
            content:
              "Manhã (3h): 40 exercícios (Mat/Ling/Hist/Geo). Tarde (2h): Aprofundar em Cartografia (escalas).",
            activity: "Resolução de exercícios.",
          },
          {
            day: "Domingo",
            subject: "Redação #3 e Simulado #3",
            content:
              "Redação sobre fake news. Simulado (40Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Revisão da Fundação e Variação Linguística",
        days: [
          {
            day: "Segunda",
            subject: "Matemática",
            content: "Revisão: Porcentagem e Regra de 3",
            activity: "20 exercícios de fixação (90 min).",
            videos: [
              {
                videoTitle:
                  "PORCENTAGEM: Teoria e Exemplos | Matemática Básica - Aula 29",
                videoUrl: "http://www.youtube.com/watch?v=CERiIwParX4",
              },
              {
                videoTitle:
                  "REGRA DE TRÊS SIMPLES: Grandezas Proporcionais | Matemática Básica - Aula 26",
                videoUrl: "http://www.youtube.com/watch?v=alLifth7gxE",
              },
              {
                videoTitle:
                  "REGRA DE TRÊS COMPOSTA: Macete Matador | Matemática Básica - Aula 27",
                videoUrl: "http://www.youtube.com/watch?v=buYey1YGJhA",
              },
            ],
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Variação Linguística (Social, Regional, Histórica)",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
            videoTitle: "Variação Linguística [Prof Noslen]",
            videoUrl: "http://www.youtube.com/watch?v=6fBOVygtNoU",
          },
          {
            day: "Quarta",
            subject: "Química e Física",
            content: "Revisão: Misturas e Notação Científica",
            activity: "20 exercícios (10 de cada) (90 min).",
            videos: [
              {
                videoTitle:
                  "Separação de Misturas: Tudo que você precisa saber! | Química | Quer Que Desenhe",
                videoUrl: "http://www.youtube.com/watch?v=YRGyXswza8g",
              },
              {
                videoTitle:
                  "NOTAÇÃO CIENTÍFICA | Física, Química  8°, 9° ano , conceito e exercícios | Potencia base 10",
                videoUrl: "http://www.youtube.com/watch?v=tMOqp1Rqr0E",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Humanas",
            content: "Revisão: Periodização Histórica e Cartografia",
            activity: "Releitura e 10 exercícios (90 min).",
            videos: [
              {
                videoTitle:
                  "Os Períodos Históricos - Pré-História, História Antiga, Medieval, Moderna e Contemporânea",
                videoUrl: "http://www.youtube.com/watch?v=rQMY-Ib-t8s",
              },
              {
                videoTitle: "CARTOGRAFIA | QUER QUE DESENHE | DESCOMPLICA",
                videoUrl: "http://www.youtube.com/watch?v=tR_rXa4BdpE",
              },
            ],
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Análise da Competência 1 (Gramática) e 4 (Coesão)",
            activity: "Corrigir erros gramaticais de textos antigos (90 min).",
            videos: [
              {
                videoTitle: "Competência 1 da Redação Enem - Professor Noslen",
                videoUrl: "http://www.youtube.com/watch?v=AMbFB_cFYek",
              },
              {
                videoTitle: "Competência 4 da Redação Enem",
                videoUrl: "http://www.youtube.com/watch?v=kGeeuAq9xhc",
              },
            ],
          },
          {
            day: "Sábado",
            subject: "Prática Geral",
            content:
              "Manhã (3h): Lista com 30 exercícios variados da Fase 1. Tarde (2h): Leitura de atualidades.",
            activity: "Resolução e leitura.",
          },
          {
            day: "Domingo",
            subject: "Redação #4 e Simulado #4",
            content:
              "Redação sobre lixo eletrônico. Simulado (45Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Ecologia, Brasil Colônia e Análise de Gráficos",
        days: [
          {
            day: "Segunda",
            subject: "Biologia",
            content: "Relações Ecológicas Harmônicas e Desarmônicas",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle:
                  "RELAÇÕES ECOLÓGICAS - Harmônicas e Desarmônicas | Biologia com Samuel Cunha",
                videoUrl: "http://www.youtube.com/watch?v=cpmcIciaIWc",
              },
              {
                videoTitle:
                  "RELAÇÕES ECOLÓGICAS - Harmônicas e Desarmônicas | ANIMAÇÃO",
                videoUrl: "http://www.youtube.com/watch?v=--axTRLZLsE",
              },
            ],
          },
          {
            day: "Terça",
            subject: "História",
            content: "Brasil Colônia: Economia Açucareira e Sociedade",
            activity: "Teoria (50 min) + Leitura de textos de época (40 min).",
            videos: [
              {
                videoTitle:
                  "A ECONOMIA AÇUCAREIRA NO BRASIL COLÔNIA | Resumo de História para o Enem",
                videoUrl: "http://www.youtube.com/watch?v=G8jMJpQqDwY",
              },
              {
                videoTitle: "Economia Açucareira - Brasil Escola",
                videoUrl: "http://www.youtube.com/watch?v=yUYwrqkS2bg",
              },
            ],
          },
          {
            day: "Quarta",
            subject: "Matemática",
            content: "Análise de Gráficos e Tabelas",
            activity: "Teoria (40 min) + 15 exercícios práticos (50 min).",
            videos: [
              {
                videoTitle:
                  "Matemática | Gráficos e Tabelas para o ENEM | Semana da matemática",
                videoUrl: "http://www.youtube.com/watch?v=XzZGAwfKs_k",
              },
              {
                videoTitle:
                  "Questões Comentadas: Análise de Gráficos (Aula 9 de 15)",
                videoUrl: "http://www.youtube.com/watch?v=8sXnloWAU8s",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Linguagens",
            content: "Interpretação: Identificar tese em textos complexos",
            activity: "Prática em artigos de opinião (90 min).",
            videoTitle:
              "Um PASSO A PASSO para INTERPRETAÇÃO DE TEXTOS | Seja Um Estudante Melhor",
            videoUrl: "http://www.youtube.com/watch?v=wkcF4XHr9wA",
          },
          {
            day: "Sexta",
            subject: "Química",
            content: "Modelos Atômicos e Tabela Periódica",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle:
                  "MODELOS ATÔMICOS: Dalton, Thomson e Rutherford | QUER QUE DESENHE?",
                videoUrl: "http://www.youtube.com/watch?v=lDrKIqubzdw",
              },
              {
                videoTitle:
                  "Entenda a TABELA PERIÓDICA em 10 minutos - Toda Matéria",
                videoUrl: "http://www.youtube.com/watch?v=Vsnq2hJ2UZc",
              },
            ],
          },
          {
            day: "Sábado",
            subject: "Prática e Aprofundamento",
            content:
              "Manhã (3h): 40 exercícios dos temas da semana. Tarde (2h): Geografia: Urbanização e Problemas Urbanos.",
            activity: "Resolução e teoria.",
            videoTitle:
              "O QUE É URBANIZAÇÃO? RESUMO E CONCEITOS | QUER QUE DESENHE?",
            videoUrl: "http://www.youtube.com/watch?v=7f8CXiFp6fk",
          },
          {
            day: "Domingo",
            subject: "Redação #5 e Simulado #5",
            content:
              "Redação sobre trabalho escravo. Simulado (50Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Alta Frequência: MUV, Estatística e Violência",
        days: [
          {
            day: "Segunda",
            subject: "Física",
            content: "Cinemática: Movimento Uniforme (MU) e MUV",
            activity: "Teoria e fórmulas (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle:
                  "MOVIMENTO UNIFORME - FÍSICA BÁSICA (FÍSICA do ZERO) - Teoria e Exercícios - AULA 01",
                videoUrl: "http://www.youtube.com/watch?v=g61dy6E8JNo",
              },
              {
                videoTitle:
                  "MOVIMENTO UNIFORMEMENTE VARIADO - (MUV) - [CINEMÁTICA DO ZERO]",
                videoUrl: "http://www.youtube.com/watch?v=r6pKRscSTyg",
              },
            ],
          },
          {
            day: "Terça",
            subject: "Matemática",
            content: "Estatística: Média, Moda e Mediana",
            activity: "Teoria (40 min) + 15 exercícios (50 min).",
            videos: [
              {
                videoTitle: "Estatística - Média, Moda e Mediana",
                videoUrl: "http://www.youtube.com/watch?v=2KjlM-5FVqA",
              },
            ],
          },
          {
            day: "Quarta",
            subject: "História",
            content: "Brasil Império: Primeiro e Segundo Reinado",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle:
                  "O PRIMEIRO REINADO NO BRASIL | Resumo de História do Brasil para o Enem",
                videoUrl: "http://www.youtube.com/watch?v=l-aRBhaHwgE",
              },
              {
                videoTitle: "SEGUNDO REINADO | QUER QUE DESENHE | MAPA MENTAL",
                videoUrl: "http://www.youtube.com/watch?v=qM8Q5IByILk",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Geografia",
            content: "Problemas Ambientais Urbanos e Rurais",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle: "Problemas ambientais urbanos - Brasil Escola",
                videoUrl: "http://www.youtube.com/watch?v=1ybcobZL4Po",
              },
              {
                videoTitle: "Problemas ambientais do espaço rural",
                videoUrl: "http://www.youtube.com/watch?v=NTdN8hWrDnk",
              },
            ],
          },
          {
            day: "Sexta",
            subject: "Revisão Espaçada",
            content: "Revisar caderno de erros das semanas 1-3",
            activity: "Refazer 10 questões erradas (90 min).",
          },
          {
            day: "Sábado",
            subject: "Prática Intensiva",
            content:
              "Manhã (3h): 50 exercícios dos temas da semana. Tarde (2h): Biologia: Desequilíbrios Ambientais.",
            activity: "Resolução e teoria.",
            videoTitle:
              "🌱 Ecologia (7/7): Desequilíbrios Ambientais - Biologia - ENEM",
            videoUrl: "http://www.youtube.com/watch?v=k1hTepClCcQ",
          },
          {
            day: "Domingo",
            subject: "Redação #6 e Simulado #6",
            content:
              "Redação sobre violência contra a mulher. Simulado (60Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Geometria Plana e Era Vargas",
        days: [
          {
            day: "Segunda",
            subject: "Matemática",
            content: "Geometria Plana: Áreas e Perímetros",
            activity: "Teoria e fórmulas (50 min) + 12 exercícios (40 min).",
            videos: [
              {
                videoTitle:
                  "Dicasdemat Sandro Curió - ÁREA DAS PRINCIPAIS FIGURAS PLANAS | GEOMETRIA PLANA",
                videoUrl: "http://www.youtube.com/watch?v=th5k6bzSDTA",
              },
              {
                videoTitle:
                  "Dicasdemat Sandro Curió - RÁPIDO e FÁCIL | PERÍMETRO DE FIGURAS PLANAS",
                videoUrl: "http://www.youtube.com/watch?v=BaJnnrMSzGk",
              },
            ],
          },
          {
            day: "Terça",
            subject: "História",
            content: "Era Vargas",
            activity: "Teoria (50 min) + análise de documentos (40 min).",
            videoTitle:
              "Débora Aladim - TUDO QUE VOCÊ PRECISA SABER SOBRE A ERA VARGAS: tá longo, mas vale a pena! (Débora Aladim)",
            videoUrl: "http://www.youtube.com/watch?v=jQU6Ojetq8M",
          },
          {
            day: "Quarta",
            subject: "Química",
            content: "Ligações Químicas (Iônica, Covalente, Metálica)",
            activity: "Teoria (50 min) + 15 exercícios (40 min).",
            videoTitle:
              "Professor Igor Química - LIGAÇÕES QUÍMICAS | REGRA DO OCTETO | IÔNICA, COVALENTE E METÁLICA | REVISÃO",
            videoUrl: "http://www.youtube.com/watch?v=UjXlHX3EEi0",
          },
          {
            day: "Quinta",
            subject: "Linguagens",
            content: "Intertextualidade e Paráfrase",
            activity: "Teoria e prática com textos e músicas (90 min).",
            videoTitle:
              "Professor Noslen - Intertextualidade e Paráfrase [Prof Noslen]",
            videoUrl: "http://www.youtube.com/watch?v=DS5r3S_jGY0",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Análise da Competência 3 (Argumentação)",
            activity:
              "Revisar a força dos argumentos dos seus textos (90 min).",
            videoTitle: "Professor Noslen - Competência 3 da Redação Enem",
            videoUrl: "http://www.youtube.com/watch?v=_MbA7VJyPMU",
          },
          {
            day: "Sábado",
            subject: "Prática e Revisão",
            content:
              "Manhã (3h): 40 exercícios da semana. Tarde (2h): Revisar Ecologia.",
            activity: "Resolução e revisão.",
            videoTitle:
              "Paulo Jubilut - Tudo sobre ECOLOGIA para o ENEM | Prof. Paulo Jubilut",
            videoUrl: "http://www.youtube.com/watch?v=Rr-zQYqRCzo",
          },
          {
            day: "Domingo",
            subject: "Redação #7 e Simulado #7",
            content:
              "Redação sobre saúde mental. Simulado (60Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Termoquímica e Proposta de Intervenção",
        days: [
          {
            day: "Segunda",
            subject: "Química",
            content: "Termoquímica: Entalpia e Leis",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videos: [
              {
                videoTitle: "Termoquímica - Brasil Escola",
                videoUrl: "http://www.youtube.com/watch?v=5aPH2E9UxhM",
              },
              {
                videoTitle: "O que é Termoquímica?| Química | Quer Que Desenhe",
                videoUrl: "http://www.youtube.com/watch?v=esqhgvFljIY",
              },
            ],
          },
          {
            day: "Terça",
            subject: "Matemática",
            content: "Geometria Espacial: Prismas e Cilindros",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle: "PRISMAS EM 10 MINUTOS | ÁREA e VOLUME",
                videoUrl: "http://www.youtube.com/watch?v=Bz1lw74k4XI",
              },
              {
                videoTitle: "Sólidos de Revolução - Geometria Espacial",
                videoUrl: "http://www.youtube.com/watch?v=GMWEiRH0PLI",
              },
            ],
          },
          {
            day: "Quarta",
            subject: "Física",
            content: "Leis de Newton e Aplicações",
            activity: "Teoria (50 min) + 12 exercícios (40 min).",
            videos: [
              {
                videoTitle: "Física - Leis de Newton",
                videoUrl: "http://www.youtube.com/watch?v=dU14qCv5AuI",
              },
              {
                videoTitle: "As 3 LEIS DE NEWTON: Resumo em 5 Minutos!",
                videoUrl: "http://www.youtube.com/watch?v=W9fnE9NdFzo",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Biologia",
            content: "Citologia: Membrana e Organelas",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle:
                  "Citologia 1/2: Estrutura Básica das Células | Anatomia e etc",
                videoUrl: "http://www.youtube.com/watch?v=YB-zfUXDBHA",
              },
              {
                videoTitle:
                  "MEMBRANA PLASMÁTICA - CÉLULA - Citologia | Biologia com Samuel Cunha",
                videoUrl: "http://www.youtube.com/watch?v=9Nf0EJtwxn0",
              },
            ],
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Competência 5: Esboço da Proposta de Intervenção (PI)",
            activity: "Praticar a criação de PIs para temas antigos (90 min).",
            videoTitle:
              "COMPETÊNCIA 5 DA REDAÇÃO DO ENEM: COMO TIRAR 200 PONTOS NA PROPOSTA DE INTERVENÇÃO",
            videoUrl: "http://www.youtube.com/watch?v=-VPsVrUxe9o",
          },
          {
            day: "Sábado",
            subject: "Prática Intensiva",
            content:
              "Manhã (3h): 40 exercícios da semana. Tarde (2h): Revisar Brasil Colônia/Império.",
            activity: "Resolução e revisão.",
            videos: [
              {
                videoTitle:
                  "BRASIL COLÔNIA | Resumo de História do Brasil para o Enem",
                videoUrl: "http://www.youtube.com/watch?v=RX2eB7zf87g",
              },
              {
                videoTitle:
                  "BRASIL IMPÉRIO | O que Aconteceu Depois do Grito da Independência?",
                videoUrl: "http://www.youtube.com/watch?v=eERlMeLvQlI",
              },
            ],
          },
          {
            day: "Domingo",
            subject: "Redação #8 e Simulado #8",
            content:
              "Redação sobre segurança alimentar. Simulado (70Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Revisão Gramatical e Humanas",
        days: [
          {
            day: "Segunda",
            subject: "Linguagens",
            content: "Revisão Ortográfica e Gramatical",
            activity:
              "Focar nos erros da Competência 1 das suas redações (90 min).",
            videoTitle:
              "Português sem Enrolação - Professora Lis - 5 REGRAS de Gramática que Você PRECISA Saber!",
            videoUrl: "http://www.youtube.com/watch?v=9tW83jfWX7U",
          },
          {
            day: "Terça",
            subject: "História",
            content: "Ditadura Militar no Brasil",
            activity:
              "Teoria (50 min) + análise de músicas de protesto (40 min).",
            videoTitle:
              "Débora Aladim - TUDO SOBRE A DITADURA MILITAR (1964-1985) - Débora Aladim",
            videoUrl: "http://www.youtube.com/watch?v=0A8fvJKzhcc",
          },
          {
            day: "Quarta",
            subject: "Geografia",
            content: "Fontes de Energia e Indústria no Brasil",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
            videos: [
              {
                videoTitle:
                  "FONTES DE ENERGIA RENOVÁVEIS E NÃO RENOVÁVEIS | QUER QUE DESENHE?",
                videoUrl: "http://www.youtube.com/watch?v=bdgYTLW4ec4",
              },
              {
                videoTitle: "Industrialização Brasileira - Geobrasil",
                videoUrl: "http://www.youtube.com/watch?v=b8TlLqb07xs",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Revisão Matemática",
            content: "Revisar Geometria Plana e Estatística",
            activity: "20 exercícios dos temas (90 min).",
            videoTitle:
              "Dicasdemat Sandro Curió - GEOMETRIA PLANA | ENEM | REVISÃO",
            videoUrl: "http://www.youtube.com/watch?v=EzGf1UEnnsY",
          },
          {
            day: "Sexta",
            subject: "Revisão Natureza",
            content: "Revisar Leis de Newton e Ligações Químicas",
            activity: "20 exercícios dos temas (90 min).",
            videos: [
              {
                videoTitle: "As 3 LEIS DE NEWTON: Resumo em 5 Minutos!",
                videoUrl: "http://www.youtube.com/watch?v=W9fnE9NdFzo",
              },
              {
                videoTitle: "Ligações químicas: Tipos e Características",
                videoUrl: "http://www.youtube.com/watch?v=FDnxddw0P1g",
              },
            ],
          },
          {
            day: "Sábado",
            subject: "Prática Geral",
            content:
              "Manhã (3h): 40 exercícios variados da Fase 2. Tarde (2h): Leitura de atualidades.",
            activity: "Resolução e leitura.",
            atualidades_temas: [
              "O Impacto das mudanças climáticas no Brasil.",
              "A violência doméstica e o combate ao feminicídio.",
              "O impacto das redes sociais na saúde mental dos jovens.",
              "O papel da IA na transformação da educação: limites e possibilidades.",
              "Sustentabilidade ambiental nas grandes cidades.",
              "Privacidade e segurança nas novas tecnologias.",
            ],
          },
          {
            day: "Domingo",
            subject: "Redação #9 e Simulado #9",
            content:
              "Revisão ortográfica e gramatical da redação da semana 8. Simulado (70Q) e Correção Ativa.",
            activity: "Reescrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Eletrodinâmica, Orgânica e Detalhando a PI",
        days: [
          {
            day: "Segunda",
            subject: "Física",
            content: "Eletrodinâmica: Circuitos e Leis de Ohm",
            activity: "Teoria (60 min) + 8 exercícios (30 min).",
            videoTitle:
              "Professor Boaro - PRIMEIRA LEI DE OHM | ELETRODINÂMICA | AULA 5 - Professor Boaro",
            videoUrl: "http://www.youtube.com/watch?v=LC0nL4cjxYg",
          },
          {
            day: "Terça",
            subject: "Química",
            content: "Química Orgânica: Funções Oxigenadas",
            activity:
              "Teoria e nomenclatura (60 min) + 10 exercícios (30 min).",
            videoTitle:
              "Brasil Escola Oficial - Funções orgânicas oxigenadas - Brasil Escola",
            videoUrl: "http://www.youtube.com/watch?v=Rk5Y2_FvdHY",
          },
          {
            day: "Quarta",
            subject: "Filosofia",
            content: "Filosofia Antiga: Sócrates e Platão",
            activity: "Teoria (60 min) + Leitura de trecho (30 min).",
            videoTitle:
              "Foca na História - Os 3 Grandes Filósofos Gregos - Sócrates - Platão - Aristóteles - Os Grandes Pensadores",
            videoUrl: "http://www.youtube.com/watch?v=eOed-ZxFOzQ",
          },
          {
            day: "Quinta",
            subject: "Matemática",
            content: "Probabilidade (conceitos básicos)",
            activity: "Teoria (60 min) + 8 exercícios (30 min).",
            videoTitle:
              "Professor Ferretto | ENEM e Vestibulares - Probabilidade - Como calcular? 🤓",
            videoUrl: "http://www.youtube.com/watch?v=HWlZtfp-TKQ",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Detalhando a PI: Agente e Ação",
            activity: "Praticar o detalhamento em temas antigos (90 min).",
            videoTitle:
              "Brasil Escola Oficial - Como fazer o detalhamento na proposta de intervenção da redação do Enem? - Brasil Escola",
            videoUrl: "http://www.youtube.com/watch?v=FFNJ2-Y2utI",
          },
          {
            day: "Sábado",
            subject: "Prática e Sociologia",
            content:
              "Manhã (3h): Prática dos temas da semana. Tarde (3h): Sociologia Clássica (Durkheim, Weber, Marx).",
            activity: "Resolução e teoria.",
            videoTitle:
              "Leitura ObrigaHISTÓRIA - O tripé da Sociologia: Durkheim, Weber e Marx (ft. Tese Onze)",
            videoUrl: "http://www.youtube.com/watch?v=T_tUOFvGEWg",
          },
          {
            day: "Domingo",
            subject: "Redação #10 e Simulado #10",
            content:
              "Redação sobre IA na educação. Simulado (80Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Ondulatória e Simulado Dia 1",
        days: [
          {
            day: "Segunda",
            subject: "Física",
            content: "Ondulatória: Fenômenos e Equação Fundamental",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videoTitle:
              "Professor Boaro - EQUAÇÃO FUNDAMENTAL DA ONDULATÓRIA ONDULATÓRIA AULA 2",
            videoUrl: "http://www.youtube.com/watch?v=nl7lKCY5Ed4",
          },
          {
            day: "Terça",
            subject: "Química",
            content: "Estequiometria: Cálculos básicos",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videoTitle:
              "Professor Gabriel Cabral - Estequiometria Básica - Passo a Passo!",
            videoUrl: "http://www.youtube.com/watch?v=lHaNpSqdabs",
          },
          {
            day: "Quarta",
            subject: "Biologia",
            content: "Genética: Leis de Mendel",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videoTitle:
              "Descomplica - GENÉTICA: LEIS DE MENDEL, GENES, DNA E CROMOSSOMOS | QUER QUE DESENHE?",
            videoUrl: "http://www.youtube.com/watch?v=-Vv3USW7iRU",
          },
          {
            day: "Quinta",
            subject: "Matemática",
            content: "Análise Combinatória",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videoTitle:
              "Professor Ferretto | ENEM e Vestibulares - Ferretto Prepara #12: Análise Combinatória (Replay)",
            videoUrl: "http://www.youtube.com/watch?v=AytTPFOKXdg",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Detalhando a PI: Meio/Modo e Finalidade",
            activity: "Praticar o detalhamento completo (90 min).",
            videoTitle:
              "Brasil Escola Oficial - Como fazer o detalhamento na proposta de intervenção da redação do Enem? - Brasil Escola",
            videoUrl: "http://www.youtube.com/watch?v=FFNJ2-Y2utI",
          },
          {
            day: "Sábado",
            subject: "Revisão Geral Humanas",
            content:
              "Revisar todo o conteúdo de Humanas através de mapas mentais e 30 questões.",
            activity: "Revisão e prática.",
            videoTitle:
              "Prof. JeanGrafia | GabaritaGeo | - ENEM 2025| REVISÃO COMPLETA DE CIÊNCIAS HUMANAS |",
            videoUrl: "http://www.youtube.com/watch?v=ka2w_C8rJfQ",
          },
          {
            day: "Domingo",
            subject: "Redação #11 e Simulado #11",
            content:
              "Redação sobre sustentabilidade. Simulado Dia 1 (90Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Eletromagnetismo e Simulado Dia 2",
        days: [
          {
            day: "Segunda",
            subject: "Física",
            content: "Eletromagnetismo: Indução e Força",
            activity: "Teoria (60 min) + 8 exercícios (30 min).",
            videoTitle:
              "Curso Enem Gratuito - INDUÇÃO ELETROMAGNÉTICA | Resumo de Física para o Enem",
            videoUrl: "http://www.youtube.com/watch?v=XXTnXZzB0GQ",
          },
          {
            day: "Terça",
            subject: "Química",
            content: "Soluções: Concentração e Diluição",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videos: [
              {
                videoTitle:
                  "Canal Futura - Concentração das soluções - Química - Ensino Médio",
                videoUrl: "http://www.youtube.com/watch?v=yU70WTXKyrc",
              },
              {
                videoTitle:
                  "Brasil Escola Oficial - Diluição de Soluções - Brasil Escola",
                videoUrl: "http://www.youtube.com/watch?v=a76XYmgL3WU",
              },
            ],
          },
          {
            day: "Quarta",
            subject: "Biologia",
            content: "Evolução: Darwinismo e Neodarwinismo",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videoTitle:
              "Estudar Mais Biologia com Prof. Fontinele - Darwin e Lamarck - EVOLUÇÃO | Resumo Completo",
            videoUrl: "http://www.youtube.com/watch?v=KvxeYq4cAwI",
          },
          {
            day: "Quinta",
            subject: "Matemática",
            content: "Logaritmos: Propriedades e Equações",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
            videoTitle:
              "Professor Ferretto | ENEM e Vestibulares - Logaritmo: Introdução Parte 1 (Aula 1 de 14)",
            videoUrl: "http://www.youtube.com/watch?v=esdFuyG7zGs",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Competência 5: O 'Detalhamento'",
            activity: "Garantir o 5º elemento da PI (90 min).",
            videoTitle: "Professor Noslen - Competência 5 da Redação Enem",
            videoUrl: "http://www.youtube.com/watch?v=caiqJbCHni4",
          },
          {
            day: "Sábado",
            subject: "Revisão Geral Natureza e Matemática",
            content: "Revisar através de mapas mentais e 40 questões.",
            activity: "Revisão e prática.",
            videoTitle:
              "Professor Ferretto | ENEM e Vestibulares - Revisão Final ENEM 2021 - Aula 1 - Matemática e Ciências da Natureza",
            videoUrl: "http://www.youtube.com/watch?v=vAS2I7dwUYU",
          },
          {
            day: "Domingo",
            subject: "Redação #12 e Simulado #12",
            content:
              "Redação sobre privacidade. Simulado Dia 2 (90Q) e Correção Ativa.",
            activity: "Escrita, resolução e análise.",
          },
        ],
      },
      {
        focus: "Simulado Completo e Gestão de Tempo",
        days: [
          {
            day: "Segunda",
            subject: "Revisão",
            content: "Revisar caderno de erros dos simulados 11 e 12",
            activity: "Refazer as questões erradas (90 min).",
          },
          {
            day: "Terça",
            subject: "Revisão",
            content: "Revisar as fórmulas mais importantes de Exatas",
            activity: "Criar um 'formulário de emergência' (90 min).",
            videoTitle:
              "Descomplica - AULÃO DE EXATAS! | TODAS as fórmulas mais importantes para o Enem!",
            videoUrl: "http://www.youtube.com/watch?v=4ESZxEeZ4EI",
          },
          {
            day: "Quarta",
            subject: "Revisão",
            content: "Revisar os conceitos mais importantes de Humanas",
            activity: "Leitura rápida de resumos (90 min).",
            videoTitle:
              "Débora Aladim - DICAS PARA A PROVA DE HUMANAS DO ENEM 2023 (Débora Aladim)",
            videoUrl: "http://www.youtube.com/watch?v=WonbbuWeazY",
          },
          {
            day: "Quinta",
            subject: "Revisão",
            content: "Revisar os conceitos mais importantes de Natureza",
            activity: "Leitura rápida de resumos (90 min).",
            videoTitle:
              "Umberto Mannarino - CIÊNCIAS DA NATUREZA SEM SABER A MATÉRIA!! - Estratégias ENEM 2023",
            videoUrl: "http://www.youtube.com/watch?v=OfrVwoubQ1c",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content:
              "Análise da redação da semana 12. Foco: Todas as 5 competências.",
            activity: "Autoavaliação (90 min).",
            videoTitle: "Professor Noslen - Competência 5 da Redação Enem",
            videoUrl: "http://www.youtube.com/watch?v=caiqJbCHni4",
          },
          {
            day: "Sábado",
            subject: "Descanso Leve",
            content: "Organizar material para o simulado.",
            activity: "Sem estudos densos.",
          },
          {
            day: "Domingo",
            subject: "Redação #13 e Simulado #13",
            content:
              "Redação sobre distúrbios alimentares. Simulado Completo (180Q) e Correção Ativa.",
            activity: "Prova completa!",
          },
        ],
      },
      {
        focus: "Segundo Simulado Completo e Ajustes Finais",
        days: [
          {
            day: "Segunda",
            subject: "Correção",
            content: "Correção Ativa do Simulado 13 (Dia 1)",
            activity: "Focar nos erros de Linguagens e Humanas (90 min).",
            videoTitle:
              "Gabriela Favilla - O jeito CERTO de corrigir simulados",
            videoUrl: "https://youtu.be/7NiMt2cI9OA?si=WdNvyqge8GO-yl2G",
          },
          {
            day: "Terça",
            subject: "Correção",
            content: "Correção Ativa do Simulado 13 (Dia 2)",
            activity: "Focar nos erros de Natureza e Matemática (90 min).",
            videoTitle:
              "Método Questiona - 😱 MACETES para GABARITAR o ENEM: Matemática e Naturezas (TRI, pegadinhas e terminar no tempo)",
            videoUrl: "http://www.youtube.com/watch?v=RoQJryrbNfQ",
          },
          {
            day: "Quarta",
            subject: "Redação",
            content: "Gestão do tempo: Rascunho vs. Passar a limpo",
            activity:
              "Treinar passar a limpo um texto antigo em menos de 25 min.",
            videoTitle:
              "Curso Enem Gratuito - CONTROLE DO TEMPO NA REDAÇÃO ENEM: Como escrever seu texto em 1 hora",
            videoUrl: "http://www.youtube.com/watch?v=GKltWM5PAEU",
          },
          {
            day: "Quinta",
            subject: "Estratégia",
            content: "Definir estratégia de prova: por onde começar?",
            activity: "Planejar sua ordem de resolução (90 min).",
            videoTitle:
              "Gabriela Favilla - ESTRATÉGIA DE PROVA PARA GABARITAR O PRIMEIRO DIA DO ENEM",
            videoUrl: "http://www.youtube.com/watch?v=GUCEIAUQJW8",
          },
          {
            day: "Sexta",
            subject: "Descanso",
            content: "Descanso pré-simulado",
            activity: "Filme, série, relaxar.",
          },
          {
            day: "Sábado",
            subject: "Descanso Leve",
            content: "Organizar material para o simulado.",
            activity: "Sem estudos densos.",
          },
          {
            day: "Domingo",
            subject: "Redação #14 e Simulado #14",
            content:
              "Redação sobre evasão escolar. Simulado Completo (180Q) e Correção Ativa.",
            activity: "Prova completa!",
          },
        ],
      },
      {
        focus: "Revisão Final e Controle Emocional",
        days: [
          {
            day: "Segunda",
            subject: "Revisão Rápida",
            content: "Revisar fórmulas de Matemática e Física",
            activity: "Releitura do formulário (90 min).",
            videos: [
              {
                videoTitle:
                  "Umberto Mannarino - FÓRMULAS MATEMÁTICAS PARA O ENEM - Revisão de Matemática",
                videoUrl: "http://www.youtube.com/watch?v=pwzABVEUIfE",
              },
              {
                videoTitle:
                  "Umberto Mannarino - FÓRMULAS DE FÍSICA PARA O ENEM | As Fórmulas MAIS COBRADAS",
                videoUrl: "http://www.youtube.com/watch?v=ivwpGB0BRFA",
              },
            ],
          },
          {
            day: "Terça",
            subject: "Revisão Rápida",
            content: "Revisar conceitos-chave de Biologia e Química",
            activity: "Releitura de mapas mentais (90 min).",
            videos: [
              {
                videoTitle:
                  "Toda Matéria - Introdução à GENÉTICA: O Que Seu DNA Revela?",
                videoUrl: "http://www.youtube.com/watch?v=ipSpg8IjfaM",
              },
              {
                videoTitle:
                  "Professor Gabriel Cabral - Funções Orgânicas: identifique rápido",
                videoUrl: "http://www.youtube.com/watch?v=VbFMZhEViAM",
              },
            ],
          },
          {
            day: "Quarta",
            subject: "Revisão Rápida",
            content: "Revisar conceitos-chave de História e Geografia",
            activity: "Releitura de mapas mentais (90 min).",
            videos: [
              {
                videoTitle:
                  "Débora Aladim - DICAS PARA A PROVA DE HUMANAS DO ENEM 2023 (Débora Aladim)",
                videoUrl: "http://www.youtube.com/watch?v=WonbbuWeazY",
              },
              {
                videoTitle:
                  "Quadro Livre - CONCEITOS GEOGRÁFICOS - PAISAGEM, LUGAR, TERRITÓRIO, REGIÃO - PROFESSOR RAFAEL BARRETO (GEOGRAFIA)",
                videoUrl: "http://www.youtube.com/watch?v=xn_rU45f0l8",
              },
            ],
          },
          {
            day: "Quinta",
            subject: "Revisão Rápida",
            content: "Revisar conceitos-chave de Filosofia e Sociologia",
            activity: "Releitura de mapas mentais (90 min).",
            videos: [
              {
                videoTitle:
                  "Vinícius Oliveira - TUDO de FILOSOFIA para o ENEM em 40 MINUTOS",
                videoUrl: "http://www.youtube.com/watch?v=UK6OKSsastQ",
              },
              {
                videoTitle: "Parabólica - DURKHEIM, WEBER E MARX.",
                videoUrl: "http://www.youtube.com/watch?v=s9rk_2TbWAY",
              },
            ],
          },
          {
            day: "Sexta",
            subject: "Redação e Preparo",
            content:
              "Reler a melhor redação e a estrutura da PI. Organizar material para a prova.",
            activity: "Preparação final.",
            videoTitle:
              "Professor Noslen - Entenda a ESTRUTURA da REDAÇÃO do ENEM #NoENEMComNoslen | Professor Noslen",
            videoUrl: "http://www.youtube.com/watch?v=CjUCTZstyK8",
          },
          {
            day: "Sábado",
            subject: "DESCANSO TOTAL",
            content: "Hidratação, alimentação leve, sono.",
            activity: "Proibido estudar.",
          },
          {
            day: "Domingo",
            subject: "PROVA DIA 1",
            content: "Linguagens, Humanas e Redação",
            activity: "Confie no seu preparo!",
          },
        ],
      },
    ],
  },
  progress: {
    title: "Progresso em Redação e Simulados",
    intro:
      "Acompanhe sua evolução. Use o botão ✨ para gerar repertório sociocultural para cada tema de redação e turbinar seus textos.",
    milestones: [
      {
        week: 1,
        theme: "Os desafios da educação digital no Brasil",
        skill: "Estrutura (4 parágrafos) e Tese",
        simulation: "30Q",
      },
      {
        week: 2,
        theme: "A importância da vacinação em massa no Brasil",
        skill: "Tópicos Frasais",
        simulation: "35Q",
      },
      {
        week: 3,
        theme: "O combate à desinformação (fake news)",
        skill: "Coesão (conectivos)",
        simulation: "40Q",
      },
      {
        week: 4,
        theme: "Alternativas para o descarte de lixo eletrônico",
        skill: "Revisão Competências 1 e 4",
        simulation: "45Q",
      },
      {
        week: 5,
        theme: "A persistência do trabalho análogo à escravidão",
        skill: "Uso de repertório sociocultural",
        simulation: "50Q",
      },
      {
        week: 6,
        theme: "A persistência da violência contra a mulher",
        skill: "Aprofundamento da argumentação (Comp. 3)",
        simulation: "60Q",
      },
      {
        week: 7,
        theme: "O impacto das redes sociais na saúde mental",
        skill: "Revisão da estrutura argumentativa",
        simulation: "60Q",
      },
      {
        week: 8,
        theme: "Desafios para garantir a segurança alimentar",
        skill: "Esboço da Proposta de Intervenção (PI)",
        simulation: "70Q",
      },
      {
        week: 9,
        theme: "Revisão Ortográfica e Gramatical",
        skill: "Revisão da Competência 1",
        simulation: "70Q",
      },
      {
        week: 10,
        theme: "O papel da IA na transformação da educação",
        skill: "Detalhando a PI: Agente e Ação",
        simulation: "80Q",
      },
      {
        week: 11,
        theme: "Sustentabilidade ambiental nas grandes cidades",
        skill: "Detalhando a PI: Meio/Modo e Finalidade",
        simulation: "90Q (Dia 1)",
      },
      {
        week: 12,
        theme: "Privacidade e segurança nas novas tecnologias",
        skill: "Detalhando a PI: O 'Detalhamento'",
        simulation: "90Q (Dia 2)",
      },
      {
        week: 13,
        theme: "Desafios no combate aos distúrbios alimentares",
        skill: "Foco em todas as 5 competências",
        simulation: "180Q (Completo)",
      },
      {
        week: 14,
        theme: "Evasão escolar e negação do direito à educação",
        skill: "Gestão do tempo e rascunho",
        simulation: "180Q (Completo)",
      },
      {
        week: 15,
        theme: "*Sem redação nova*",
        skill: "Reescrita da redação da semana 14",
        simulation: "*Sem simulado*",
      },
    ],
  },
  resources: {
    title: "Central de Recursos Gratuitos",
    intro:
      "Uma lista curada de canais e plataformas de alta qualidade para apoiar seus estudos.",
    channels: [
      {
        category: "Matemática",
        name: "Professor Ferretto",
        link: "https://www.youtube.com/professorferretto",
      },
      {
        category: "Física",
        name: "Professor Boaro",
        link: "https://www.youtube.com/professoboaro",
      },
      {
        category: "Química",
        name: "Marcelão da Química",
        link: "https://www.youtube.com/MarcelaoDaQuimica",
      },
      {
        category: "Biologia",
        name: "Biologia Total",
        link: "https://www.youtube.com/BiologiaTotal",
      },
      {
        category: "Humanas",
        name: "Parabólica",
        link: "https://www.youtube.com/Parabolica",
      },
      {
        category: "Linguagens",
        name: "Débora Aladim",
        link: "https://www.youtube.com/DeboraAladim",
      },
    ],
    platforms: [
      {
        name: "Repertório Enem",
        description: "Filtro de questões gratuito.",
        link: "https://repertorioenem.com.br/",
      },
      {
        name: "Provas Anteriores do INEP",
        description: "A fonte oficial.",
        link: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos",
      },
    ],
  },
};
