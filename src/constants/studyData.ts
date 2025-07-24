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
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Tipologia e Gêneros Textuais",
            activity: "Teoria (45 min) + Prática de identificação (45 min).",
          },
          {
            day: "Quarta",
            subject: "Matemática",
            content: "Frações e Operações com Frações",
            activity: "Teoria (45 min) + 15 exercícios (45 min).",
          },
          {
            day: "Quinta",
            subject: "Linguagens",
            content: "Elementos da Comunicação e Funções da Linguagem",
            activity: "Teoria (45 min) + Análise de tirinhas (45 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Entendendo a Estrutura Dissertativo-Argumentativa",
            activity:
              "Assistir vídeos sobre a função de cada parágrafo (90 min).",
          },
          {
            day: "Sábado",
            subject: "Prática e Introdução",
            content:
              "Manhã (3h): 40 exercícios de Matemática. Tarde (2h): Introdução à Biologia (Níveis de organização, Ecologia básica).",
            activity: "Resolução e leitura.",
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
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Identificação de Tese e Argumentos",
            activity: "Teoria (45 min) + Prática em textos (45 min).",
          },
          {
            day: "Quarta",
            subject: "Matemática",
            content: "Regra de 3 Simples e Composta",
            activity: "Teoria (45 min) + 15 exercícios (45 min).",
          },
          {
            day: "Quinta",
            subject: "Química",
            content: "Matéria, substâncias e misturas",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
          },
          {
            day: "Sexta",
            subject: "Física",
            content: "Notação Científica e Ordem de Grandeza",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
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
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Figuras de Linguagem",
            activity:
              "Teoria (45 min) + 10 exercícios de identificação (45 min).",
          },
          {
            day: "Quarta",
            subject: "História",
            content: "Fontes Históricas e Periodização",
            activity: "Teoria (45 min) + Análise de fontes (45 min).",
          },
          {
            day: "Quinta",
            subject: "Geografia",
            content: "Conceitos da Geografia e Introdução à Cartografia",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
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
          },
          {
            day: "Terça",
            subject: "Linguagens",
            content: "Variação Linguística (Social, Regional, Histórica)",
            activity: "Teoria (45 min) + 10 exercícios (45 min).",
          },
          {
            day: "Quarta",
            subject: "Química e Física",
            content: "Revisão: Misturas e Notação Científica",
            activity: "20 exercícios (10 de cada) (90 min).",
          },
          {
            day: "Quinta",
            subject: "Humanas",
            content: "Revisão: Periodização Histórica e Cartografia",
            activity: "Releitura e 10 exercícios (90 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Análise da Competência 1 (Gramática) e 4 (Coesão)",
            activity: "Corrigir erros gramaticais de textos antigos (90 min).",
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
          },
          {
            day: "Terça",
            subject: "História",
            content: "Brasil Colônia: Economia Açucareira e Sociedade",
            activity: "Teoria (50 min) + Leitura de textos de época (40 min).",
          },
          {
            day: "Quarta",
            subject: "Matemática",
            content: "Análise de Gráficos e Tabelas",
            activity: "Teoria (40 min) + 15 exercícios práticos (50 min).",
          },
          {
            day: "Quinta",
            subject: "Linguagens",
            content: "Interpretação: Identificar tese em textos complexos",
            activity: "Prática em artigos de opinião (90 min).",
          },
          {
            day: "Sexta",
            subject: "Química",
            content: "Modelos Atômicos e Tabela Periódica",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
          },
          {
            day: "Sábado",
            subject: "Prática e Aprofundamento",
            content:
              "Manhã (3h): 40 exercícios dos temas da semana. Tarde (2h): Geografia: Urbanização e Problemas Urbanos.",
            activity: "Resolução e teoria.",
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
          },
          {
            day: "Terça",
            subject: "Matemática",
            content: "Estatística: Média, Moda e Mediana",
            activity: "Teoria (40 min) + 15 exercícios (50 min).",
          },
          {
            day: "Quarta",
            subject: "História",
            content: "Brasil Império: Primeiro e Segundo Reinado",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
          },
          {
            day: "Quinta",
            subject: "Geografia",
            content: "Problemas Ambientais Urbanos e Rurais",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
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
          },
          {
            day: "Terça",
            subject: "História",
            content: "Era Vargas",
            activity: "Teoria (50 min) + análise de documentos (40 min).",
          },
          {
            day: "Quarta",
            subject: "Química",
            content: "Ligações Químicas (Iônica, Covalente, Metálica)",
            activity: "Teoria (50 min) + 15 exercícios (40 min).",
          },
          {
            day: "Quinta",
            subject: "Linguagens",
            content: "Intertextualidade e Paráfrase",
            activity: "Teoria e prática com textos e músicas (90 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Análise da Competência 3 (Argumentação)",
            activity:
              "Revisar a força dos argumentos dos seus textos (90 min).",
          },
          {
            day: "Sábado",
            subject: "Prática e Revisão",
            content:
              "Manhã (3h): 40 exercícios da semana. Tarde (2h): Revisar Ecologia.",
            activity: "Resolução e revisão.",
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
          },
          {
            day: "Terça",
            subject: "Matemática",
            content: "Geometria Espacial: Prismas e Cilindros",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
          },
          {
            day: "Quarta",
            subject: "Física",
            content: "Leis de Newton e Aplicações",
            activity: "Teoria (50 min) + 12 exercícios (40 min).",
          },
          {
            day: "Quinta",
            subject: "Biologia",
            content: "Citologia: Membrana e Organelas",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Competência 5: Esboço da Proposta de Intervenção (PI)",
            activity: "Praticar a criação de PIs para temas antigos (90 min).",
          },
          {
            day: "Sábado",
            subject: "Prática Intensiva",
            content:
              "Manhã (3h): 40 exercícios da semana. Tarde (2h): Revisar Brasil Colônia/Império.",
            activity: "Resolução e revisão.",
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
          },
          {
            day: "Terça",
            subject: "História",
            content: "Ditadura Militar no Brasil",
            activity:
              "Teoria (50 min) + análise de músicas de protesto (40 min).",
          },
          {
            day: "Quarta",
            subject: "Geografia",
            content: "Fontes de Energia e Indústria no Brasil",
            activity: "Teoria (50 min) + 10 exercícios (40 min).",
          },
          {
            day: "Quinta",
            subject: "Revisão Matemática",
            content: "Revisar Geometria Plana e Estatística",
            activity: "20 exercícios dos temas (90 min).",
          },
          {
            day: "Sexta",
            subject: "Revisão Natureza",
            content: "Revisar Leis de Newton e Ligações Químicas",
            activity: "20 exercícios dos temas (90 min).",
          },
          {
            day: "Sábado",
            subject: "Prática Geral",
            content:
              "Manhã (3h): 40 exercícios variados da Fase 2. Tarde (2h): Leitura de atualidades.",
            activity: "Resolução e leitura.",
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
          },
          {
            day: "Terça",
            subject: "Química",
            content: "Química Orgânica: Funções Oxigenadas",
            activity:
              "Teoria e nomenclatura (60 min) + 10 exercícios (30 min).",
          },
          {
            day: "Quarta",
            subject: "Filosofia",
            content: "Filosofia Antiga: Sócrates e Platão",
            activity: "Teoria (60 min) + Leitura de trecho (30 min).",
          },
          {
            day: "Quinta",
            subject: "Matemática",
            content: "Probabilidade (conceitos básicos)",
            activity: "Teoria (60 min) + 8 exercícios (30 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Detalhando a PI: Agente e Ação",
            activity: "Praticar o detalhamento em temas antigos (90 min).",
          },
          {
            day: "Sábado",
            subject: "Prática e Sociologia",
            content:
              "Manhã (3h): Prática dos temas da semana. Tarde (3h): Sociologia Clássica (Durkheim, Weber, Marx).",
            activity: "Resolução e teoria.",
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
          },
          {
            day: "Terça",
            subject: "Química",
            content: "Estequiometria: Cálculos básicos",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
          },
          {
            day: "Quarta",
            subject: "Biologia",
            content: "Genética: Leis de Mendel",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
          },
          {
            day: "Quinta",
            subject: "Matemática",
            content: "Análise Combinatória",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Detalhando a PI: Meio/Modo e Finalidade",
            activity: "Praticar o detalhamento completo (90 min).",
          },
          {
            day: "Sábado",
            subject: "Revisão Geral Humanas",
            content:
              "Revisar todo o conteúdo de Humanas através de mapas mentais e 30 questões.",
            activity: "Revisão e prática.",
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
          },
          {
            day: "Terça",
            subject: "Química",
            content: "Soluções: Concentração e Diluição",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
          },
          {
            day: "Quarta",
            subject: "Biologia",
            content: "Evolução: Darwinismo e Neodarwinismo",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
          },
          {
            day: "Quinta",
            subject: "Matemática",
            content: "Logaritmos: Propriedades e Equações",
            activity: "Teoria (60 min) + 10 exercícios (30 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content: "Competência 5: O 'Detalhamento'",
            activity: "Garantir o 5º elemento da PI (90 min).",
          },
          {
            day: "Sábado",
            subject: "Revisão Geral Natureza e Matemática",
            content: "Revisar através de mapas mentais e 40 questões.",
            activity: "Revisão e prática.",
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
          },
          {
            day: "Quarta",
            subject: "Revisão",
            content: "Revisar os conceitos mais importantes de Humanas",
            activity: "Leitura rápida de resumos (90 min).",
          },
          {
            day: "Quinta",
            subject: "Revisão",
            content: "Revisar os conceitos mais importantes de Natureza",
            activity: "Leitura rápida de resumos (90 min).",
          },
          {
            day: "Sexta",
            subject: "Redação",
            content:
              "Análise da redação da semana 12. Foco: Todas as 5 competências.",
            activity: "Autoavaliação (90 min).",
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
          },
          {
            day: "Terça",
            subject: "Correção",
            content: "Correção Ativa do Simulado 13 (Dia 2)",
            activity: "Focar nos erros de Natureza e Matemática (90 min).",
          },
          {
            day: "Quarta",
            subject: "Redação",
            content: "Gestão do tempo: Rascunho vs. Passar a limpo",
            activity:
              "Treinar passar a limpo um texto antigo em menos de 25 min.",
          },
          {
            day: "Quinta",
            subject: "Estratégia",
            content: "Definir estratégia de prova: por onde começar?",
            activity: "Planejar sua ordem de resolução (90 min).",
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
          },
          {
            day: "Terça",
            subject: "Revisão Rápida",
            content: "Revisar conceitos-chave de Biologia e Química",
            activity: "Releitura de mapas mentais (90 min).",
          },
          {
            day: "Quarta",
            subject: "Revisão Rápida",
            content: "Revisar conceitos-chave de História e Geografia",
            activity: "Releitura de mapas mentais (90 min).",
          },
          {
            day: "Quinta",
            subject: "Revisão Rápida",
            content: "Revisar conceitos-chave de Filosofia e Sociologia",
            activity: "Releitura de mapas mentais (90 min).",
          },
          {
            day: "Sexta",
            subject: "Redação e Preparo",
            content:
              "Reler a melhor redação e a estrutura da PI. Organizar material para a prova.",
            activity: "Preparação final.",
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
        link: "https://www.youtube.com/c/professorferretto",
      },
      {
        category: "Física",
        name: "Professor Boaro",
        link: "https://www.youtube.com/c/professoboaro",
      },
      {
        category: "Química",
        name: "Marcelão da Química",
        link: "https://www.youtube.com/c/MarcelaoDaQuimica",
      },
      {
        category: "Biologia",
        name: "Biologia Total",
        link: "https://www.youtube.com/c/BiologiaTotal",
      },
      {
        category: "Humanas",
        name: "Parabólica",
        link: "https://www.youtube.com/c/Parabolica",
      },
      {
        category: "Linguagens",
        name: "Débora Aladim",
        link: "https://www.youtube.com/c/DeboraAladim",
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
