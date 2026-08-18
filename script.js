// Data Models
const PRODUCTS_DATA = [
  {
    id: '1',
    code: 'DSC_IND_900',
    title: 'Descanso',
    category: 'Prensas',
    status: 'OPERACIONAL',
    description: 'Suporte de alta resistência para processos de usinagem e montagem, garantindo estabilidade e precisão em operações de carga elevada.',
    fullDescription: 'O Suporte Industrial Descanso DSC_IND_900 foi desenvolvido para absorver severas tensões mecânicas em linhas pesadas. Estrutura monobloco em aço carbono tratado termicamente, minimizando deflexões dinâmicas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVyUqA7ciHHWaEnsLppHMhHH_Tk4e7RTbti5_ZcA3UDMDm0ZsV3xDJStVK27tYH2XlJvabzQLzp6ntl7GSlEp8saI0k4LLgI5HPwSwlULfhsW0pbsYk5_FBUoeitLG6vcGzZicQSkylXaHMJFfY9L6KohuQhDES9r76RFYmXs549yJiS4ELFC-JpJ0p66q1EFR3OCoDe2b5E5OTeL2a2GDeT4WsiA6tqRzWXWleAMh9YydpswoN3tDC5hNhbM7ie_cibKoj-BiyWK4D7s',
    highlightSpecs: {
      label1: 'Capacidade',
      val1: '900 kg',
      label2: 'Ciclo',
      val2: 'Estático',
    },
    specs: [
      { label: 'Capacidade Nominal', value: '900 kg' },
      { label: 'Tipo de Ciclo', value: 'Estático Continuo' },
      { label: 'Estrutura', value: 'Aço ASTM A36 Tratado' },
      { label: 'Peso Próprio', value: '240 kg' },
      { label: 'Acabamento', value: 'Pintura Epóxi Industrial Anti-Corrosiva' },
      { label: 'Norma de Segurança', value: 'NR-12 Total' }
    ],
    features: [
      'Ancoragem de alta rigidez para bancadas industriais',
      'Proteção contra impacts vibratórios contínuos',
      'Fixação modular ajustável de 0 a 45 graus',
      'Pronto para integração com células robotizadas'
    ]
  },
  {
    id: '2',
    code: 'AUTO_ARM_V3',
    title: 'Suporte Corta Barro',
    category: 'Automação',
    status: 'OPERACIONAL',
    description: 'Sistema de automação flexível com 6 eixos de liberdade, ideal para soldagem e montagem de componentes complexos.',
    fullDescription: 'O Braço Robótico Corta Barro V3 oferece articulação de extrema resposta para linhas de estamparia e moldagem. Equipado com servomotores brushless de alta dinâmica e codificadores absolutos de alta resolução.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOZjvGjx0VSaW0KIRjKK8AQzlgR-UUZpvnfAm9BBRkPOYcTgwrJg__Ysa9QU9SVm_eGo2yV8O4YPbitPPDehyiKmj8M7GU1oToqYZiCehH1HXl6-3Lxi4dg8CsxElFe2cqulI6GsrCusLU0d1hJaXbT_jm7ZPlAtmrnKYOiKeVdOcfKKpbUhpFNzn1AAbkcBjXoineDTSyhELaKlfuG2vkn7UiTutpSkYHsq5ijFM93OCdBKiVvK8wQ4qMhTXcZGZ2aprn5qd9doVLHuQ',
    highlightSpecs: {
      label1: 'Alcance',
      val1: '1.850 mm',
      label2: 'Carga Útil',
      val2: '25 kg',
    },
    specs: [
      { label: 'Alcance Máximo', value: '1.850 mm' },
      { label: 'Carga Útil de Trabalho', value: '25 kg' },
      { label: 'Eixos Articulados', value: '6 Eixos Industriais' },
      { label: 'Repetibilidade', value: '± 0.02 mm' },
      { label: 'Comunicação', value: 'Profinet / EtherCAT / Modbus TCP' },
      { label: 'Grau de Proteção', value: 'IP67 Inóculo' }
    ],
    features: [
      'Cinemática inversa otimizada para células compactas',
      'Garra pneumática inteligente de resposta rápida',
      'Programação intuitiva via HMI Touch de 15 pol.',
      'Sistemas anti-colisão com recuperação automática'
    ]
  },
  {
    id: '3',
    code: 'LASER_X_6000',
    title: 'CNC Laser',
    category: 'Corte e Dobra',
    status: 'OPERACIONAL',
    description: 'Fonte de fibra óptica de última geração para corte ultra rápido de chapas metálicas com máxima eficiência e acabamento superior.',
    fullDescription: 'Máquina de corte a laser de fibra óptica LASER_X_6000 desenvolvida para chapas de aço carbono, inox, alumínio e latão. Transmissão por cremalheira helicoidal dupla de alta precisão e chassi em ferro fundido termo-estabilizado.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3jcRhZLf09xdnQOJV30zBh61YVI1jY4aYCLgVOtWQWq8ES6cdsnCJ8ii3348tq_c3XQHexX5_AADg559sukNtwX4iLrVBmoiIRdxVMMMvq4QArDxFP03VV2FtnjeZ6dag6QAthI-nqbOB9xSW6GlgfFVPdtKkQRCjTasvd4owibkXEtoBms5BzyHzMP9EeSeFRR-Bl3_VxZKlVaIEFmtbcKBcSj6VNHD6llHMJqA8wtTy9-Lyr7zjZ10hYlw3dEIxxYuJT57E5xciZ6s',
    highlightSpecs: {
      label1: 'Potência',
      val1: '6000 Watts',
      label2: 'Área Mesa',
      val2: '3000x1500mm',
      label3: 'Velocidade',
      val3: '40m/min',
      label4: 'Precisão',
      val4: '± 0.03mm'
    },
    specs: [
      { label: 'Potência do Laser', value: '6000 Watts (Fibra Óptica)' },
      { label: 'Dimensões da Mesa', value: '3000 x 1500 mm' },
      { label: 'Velocidade de Corte', value: 'Até 40 m/min' },
      { label: 'Precisão de Posicionamento', value: '± 0.03 mm' },
      { label: 'Espessura Máx. Aço Carbono', value: '25 mm' },
      { label: 'Espessura Máx. Inox', value: '16 mm' }
    ],
    features: [
      'Cabeçote de corte com foco automático Raytools/Cypcut',
      'Mesa trocadora dupla para alimentação contínua sem paradas',
      'Sistema de exaustão de fumos multi-zonal inteligente',
      'Software de nesting com aproveitamento máximo de material'
    ]
  },
  {
    id: '4',
    code: 'ROUT_IND_5X',
    title: 'CNC Router',
    category: 'Sistemas CNC',
    status: 'OPERACIONAL',
    description: 'Centro de usinagem 5 eixos de alta velocidade, ideal para moldes complexos e componentes aeronáuticos de alta precisão.',
    fullDescription: 'Centro de Usinagem CNC de Portal Fixo e Mesa Móvel ROUT_IND_5X. Engenharia alemã de fuso de esferas com pré-carga, otimizado para ligas não-ferrosas, polímeros avançados e compósitos industriais.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwIgy5WO5Za4jh8lQoWujDrvFdukL3pHGxgWHKE9vpZBUZJmYgI3RFjDcjEjcOTD5xbnyImER2kTWMY_9GymW21JDDLhPNX4nBLJCkL4-7gJRv7S42x-3fmKL84CPQx8cYmfAX_uW0mESGMnT24ssPjknUTnRsda08V544LB5HUIsDST6aXuEgtboU2X7OWlj4fyN4gdPH1d62dhvaANFP2ttvFR6YRQm0JWgv-gXL1HQwEASVOOXCtyJB5HuxDPTHwK5YOSVPRWe6yfY',
    highlightSpecs: {
      label1: 'Mesa de Trabalho',
      val1: '1200 x 800 mm',
      label2: 'Precisão Posic.',
      val2: '± 0.005 mm',
    },
    specs: [
      { label: 'Área Útil de Usinagem', value: '1200 x 800 x 500 mm' },
      { label: 'Precisão de Posicionamento', value: '± 0.005 mm' },
      { label: 'Rotação do Spindle', value: '24.000 RPM (Refrigerado a Água)' },
      { label: 'Magasin de Ferramentas', value: '12 Posições ATC Automático' },
      { label: 'Comando CNC', value: 'Siemens Sinumerik / TecnoCNC' },
      { label: 'Servomotores', value: 'Absolutos Yaskawa' }
    ],
    features: [
      'Interpolação contínua em 5 eixos para superfícies complexas',
      'Sensor de apalpamento de peças e medição a laser de ferramentas',
      'Mesa a vácuo de alta capacidade com bomba de garras seladas',
      'Cabinagem de proteção completa com enclausuramento acústico'
    ]
  },
  {
    id: '5',
    code: 'BEND_PRO_400',
    title: 'CNC Xps (High Precision Bending)',
    category: 'Corte e Dobra',
    status: 'OPERACIONAL',
    description: 'Controle eletrônico de sincronismo e compensação de deflexão para dobras perfeitas em qualquer comprimento.',
    fullDescription: 'Dobradeira CNC Hidráulica BEND_PRO_400 com coroamento hidráulico automático dinâmico e encosto traseiro de 4 eixos CNC. Desempenho e repetibilidade sem variação de ângulo ao longo da peça.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC53jBeHBaZL_ry72cx3d0kQB5iT_PVEo_q9j2M9VpY4xzea5i9PP2mcpeyc5Sp6Mn1bj0OwUet3lXpJeoC6hJGdHjrsNVqH_swXsew_OGi-AUE9_M8fzJEyr-XKLEj3WtgtKfVatBis1rT3mqYxD-KlH_4_04jyqo904fHAWnvzk4e5IyoNjwjaYzHjHZcIFZSOfhFu3DE3x47PJso0rPP7cnhPtIdyhVScBiGinbxheHKTpTohjJ11u0pxlNEKnG1b_-Q6QANlKQUSFo',
    highlightSpecs: {
      label1: 'Comprimento',
      val1: '4.100 mm',
      label2: 'Pressão',
      val2: '160 Ton',
      label3: 'Velocidade',
      val3: '120 mm/s',
      label4: 'Eixos',
      val4: '4+1 eixos'
    },
    specs: [
      { label: 'Comprimento Dobrável', value: '4.100 mm' },
      { label: 'Força de Dobra', value: '160 Toneladas' },
      { label: 'Velocidade de Aproximação', value: '120 mm/s' },
      { label: 'Configuração de Eixos', value: 'Y1, Y2, X, R + Coroamento Hidráulico' },
      { label: 'Distância Entre Colunas', value: '3.600 mm' },
      { label: 'Abertura Livre (Daylight)', value: '520 mm' }
    ],
    features: [
      'Sistema Vica / Delem CNC com gráfico 2D/3D interativo',
      'Cortina de luz laser de segurança ótica DSP frontal',
      'Ferramental temperado e retificado por indução',
      'Consumo energético reduzido com acionamento servo-hidráulico EcoDrive'
    ]
  },
  {
    id: '6',
    code: 'PRESS_HYD_500',
    title: 'Prensa Hidráulica H-Frame 500T',
    category: 'Prensas',
    status: 'OPERACIONAL',
    description: 'Prensa hidráulica tipo H de alta tonagem projetada para conformação, repuxo profundo e estampagem de chapas pesadas.',
    fullDescription: 'Concebida para ciclos severos na indústria automotiva e de eletrodomésticos, a Prensa Hidráulica H-Frame 500T combina bloco hidráulico manifold de resposta rápida com CLP de alta frequência.',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    highlightSpecs: {
      label1: 'Força Cilíndrica',
      val1: '500 Ton',
      label2: 'Mesa Útil',
      val2: '2000x1200 mm',
      label3: 'Curso do Pistão',
      val3: '800 mm'
    },
    specs: [
      { label: 'Capacidade Nominal', value: '500 Toneladas' },
      { label: 'Mesa de Trabalho', value: '2000 x 1200 mm' },
      { label: 'Curso Máximo', value: '800 mm' },
      { label: 'Pressão de Trabalho', value: '280 bar' },
      { label: 'Motor Principal', value: '45 kW WEG W22 Premium' },
      { label: 'Sincronismo de Pressão', value: 'Proporcional Eletrônico' }
    ],
    features: [
      'Guias de bronze com lubrificação centralizada automática',
      'Amortecimento de impacto para operações de corte',
      'Barreira de luz fotoelétrica NR-12 categoria 4',
      'Diagnóstico remoto de falhas via nuvem Tecnomussi IoT'
    ]
  }
];

const CATEGORIES_LIST = [
  'Todos os Produtos',
  'Prensas',
  'Automação',
  'Corte e Dobra',
  'Sistemas CNC'
];

const DIRECT_IMAGE_ASSETS = [
  {
    id: 'dsc-900',
    title: 'Suporte Descanso (DSC_IND_900)',
    category: 'Prensas & Montagem',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVyUqA7ciHHWaEnsLppHMhHH_Tk4e7RTbti5_ZcA3UDMDm0ZsV3xDJStVK27tYH2XlJvabzQLzp6ntl7GSlEp8saI0k4LLgI5HPwSwlULfhsW0pbsYk5_FBUoeitLG6vcGzZicQSkylXaHMJFfY9L6KohuQhDES9r76RFYmXs549yJiS4ELFC-JpJ0p66q1EFR3OCoDe2b5E5OTeL2a2GDeT4WsiA6tqRzWXWleAMh9YydpswoN3tDC5hNhbM7ie_cibKoj-BiyWK4D7s',
    alt: 'Suporte de descanso industrial DSC_IND_900 Tecnomussi',
    description: 'Equipamento de suporte de alta resistência para usinagem e montagem em linhas pesadas.'
  },
  {
    id: 'auto-arm-v3',
    title: 'Braço Robótico Suporte Corta Barro (AUTO_ARM_V3)',
    category: 'Automação & Robótica',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOZjvGjx0VSaW0KIRjKK8AQzlgR-UUZpvnfAm9BBRkPOYcTgwrJg__Ysa9QU9SVm_eGo2yV8O4YPbitPPDehyiKmj8M7GU1oToqYZiCehH1HXl6-3Lxi4dg8CsxElFe2cqulI6GsrCusLU0d1hJaXbT_jm7ZPlAtmrnKYOiKeVdOcfKKpbUhpFNzn1AAbkcBjXoineDTSyhELaKlfuG2vkn7UiTutpSkYHsq5ijFM93OCdBKiVvK8wQ4qMhTXcZGZ2aprn5qd9doVLHuQ',
    alt: 'Braço robótico de automação 6 eixos AUTO_ARM_V3 Tecnomussi',
    description: 'Sistema de automação flexível com 6 eixos de liberdade para soldagem e montagem.'
  },
  {
    id: 'laser-x-6000',
    title: 'CNC Laser de Fibra Óptica (LASER_X_6000)',
    category: 'Corte e Dobra',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3jcRhZLf09xdnQOJV30zBh61YVI1jY4aYCLgVOtWQWq8ES6cdsnCJ8ii3348tq_c3XQHexX5_AADg559sukNtwX4iLrVBmoiIRdxVMMMvq4QArDxFP03VV2FtnjeZ6dag6QAthI-nqbOB9xSW6GlgfFVPdtKkQRCjTasvd4owibkXEtoBms5BzyHzMP9EeSeFRR-Bl3_VxZKlVaIEFmtbcKBcSj6VNHD6llHMJqA8wtTy9-Lyr7zjZ10hYlw3dEIxxYuJT57E5xciZ6s',
    alt: 'Máquina CNC Laser de fibra óptica 6000W Tecnomussi',
    description: 'Fonte de fibra óptica para corte ultra-rápido de chapas metálicas.'
  },
  {
    id: 'rout-ind-5x',
    title: 'CNC Router 5 Eixos (ROUT_IND_5X)',
    category: 'Sistemas CNC',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwIgy5WO5Za4jh8lQoWujDrvFdukL3pHGxgWHKE9vpZBUZJmYgI3RFjDcjEjcOTD5xbnyImER2kTWMY_9GymW21JDDLhPNX4nBLJCkL4-7gJRv7S42x-3fmKL84CPQx8cYmfAX_uW0mESGMnT24ssPjknUTnRsda08V544LB5HUIsDST6aXuEgtboU2X7OWlj4fyN4gdPH1d62dhvaANFP2ttvFR6YRQm0JWgv-gXL1HQwEASVOOXCtyJB5HuxDPTHwK5YOSVPRWe6yfY',
    alt: 'Centro de usinagem CNC Router 5 eixos ROUT_IND_5X Tecnomussi',
    description: 'Centro de usinagem 5 eixos para moldes complexos e componentes aeronáuticos.'
  },
  {
    id: 'bend-pro-400',
    title: 'Dobradeira CNC High Precision (BEND_PRO_400)',
    category: 'Corte e Dobra',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC53jBeHBaZL_ry72cx3d0kQB5iT_PVEo_q9j2M9VpY4xzea5i9PP2mcpeyc5Sp6Mn1bj0OwUet3lXpJeoC6hJGdHjrsNVqH_swXsew_OGi-AUE9_M8fzJEyr-XKLEj3WtgtKfVatBis1rT3mqYxD-KlH_4_04jyqo904fHAWnvzk4e5IyoNjwjaYzHjHZcIFZSOfhFu3DE3x47PJso0rPP7cnhPtIdyhVScBiGinbxheHKTpTohjJ11u0pxlNEKnG1b_-Q6QANlKQUSFo',
    alt: 'Dobradeira CNC 160 Toneladas BEND_PRO_400 Tecnomussi',
    description: 'Controle eletrônico de sincronismo e compensação de deflexão para dobras de precisão.'
  },
  {
    id: 'specs-engineer',
    title: 'Padrão de Qualidade Certificado & Engenharia',
    category: 'Institucional',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf5zOZXzbTWPFMYoY2vWeCxPrGebjYXnz_YZRyqUkldfljDrTni8opUEnDWkJEZ1M_RTKiBMznOMqpgM-CVvfh2BhmNWucEDG1QP5ZSiSsl1GLJVGxkPycQMAgGvegdAMuezLbV6XXrQWFg17V1ejvon0InQv-s_L5O-dAiWUgKVHM37XdzvwwSJcR9cRN6n4nehcs0Riue5p4cbbrfmUxHHb41w5uMMXyC-IWn9rGIAQF4bLrAEny9_uNxP0z8jeBgY3jgnAEojoySIc',
    alt: 'Especificações técnicas e engenharia de precisão Tecnomussi +25 anos',
    description: 'Painel técnico de monitoramento e especificações industriais com norma NR-12.'
  },
  {
    id: 'factory-hero',
    title: 'Planta Fabril Industrial Hero',
    category: 'Institucional',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZuOiiSRs7y2Vl9KzXw2M0GXWEFZvmWQAJjcUvm_VtyMXIWF3ljnPX43euyO-YX-rFtC6dzfIC79k0kx0m8UFcI_ciO-LX0ko7XGaUxyVqwM-iqsyjjBQ4IAzZTqKhwfoquRahHXXzeGrbbj7TKl9WuCchsjXHSP_ezpUCIsSI-X8GCgysSCGk4_XEk3OU6BETF3q8aM99xinHq-HIy-XiUTGWj0nVmZczhD9HEJdP8_KYqF6UQrAihsyvuQei0j7Il_0Q3AOEMWp',
    alt: 'Planta fabril industrial Tecnomussi com máquinas CNC',
    description: 'Visão geral da linha de produção e células robotizadas industriais.'
  },
  {
    id: 'support-247',
    title: 'Interface de Suporte e Manutenção 24/7',
    category: 'Serviços',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz2_md05_zFoYxt-27WpOWnHMoVqMqBIwIsuGVoah8HwUYf19KRWPXE-ED6dfZxo7MTTgV9KG0fXMfXq7dznsbkT9xHdxT2X2N5npvlFznHuQnPAtHAKg7bmymk1HvphkDoEgrdFxBWDS7B7QVBqpBQz5xrHKWzzKIt55OaCd6ljvNf2vw-7nluhqbt5N3e2-SSr8SlVUoAXlhFeTA8_iS-lpM4NTrLVINauUjmStmZj_6aoei1xXG5dLxHAJret6WVGtHedAvATwB',
    alt: 'Interface de controle e suporte 24/7 Tecnomussi',
    description: 'Painel HMI de diagnóstico remoto e controle industrial contínuo.'
  },
  {
    id: 'nucleo-operacional',
    title: 'Núcleo Operacional BR-SP-01 (Sobre Nós)',
    category: 'Institucional',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArWaDLTlLieEmX8NEQzm20WZPxDmADIgkCndcVrYCliQlKcwPeEIz4r1ra-dIXV3vQWoSC9bdDKMnCkV6-qhOObl6QhkyUcIqEpx-505o465zHUkjnOO2BYNLOkdnC65IvEBcLUiOHx2TKSkDglC6lCghpiDXJW1XmfEHWmdUPXPtmuYlLQSvqxBUi3brCFqt4dvPf2PVTKYIagyJ2Wn_Uh9NYCTmKro86TMfVaaJWwWx4WLyBsK6h2vlz0s3VWV9RCAHrqYPMj335',
    alt: 'Núcleo Operacional de manufatura BR-SP-01 Tecnomussi',
    description: 'Planta fabril moderna com disposição geométrica e alto padrão técnico.'
  },
  {
    id: 'map-location',
    title: 'Mapa da Unidade Industrial (ID_LOCALIZACAO_FABRICA_001)',
    category: 'Localização',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ-MzaaEEM2sbbSXyDzjxQFIe6zPfmzkTHTS9Kny7_0gg2c_vdmvhlsm_f3vRdbwqBlxKP5mpdnCh-VEiJt2M4iacQz7eqrwrB2fGaX02f-2QD4Nv0CN1t5LI8Gqux9ytYO2Nt_52neQXM0q4Ejl0UX-mARPTYY-QkDHGcvleED3OwAF0ADXzTpnuqRwPxH2UtB0IDGCpLBTwjO1aPwIIkYPxNDERzjLKyENZBcPJnNhBbs6AFP6KjhwUqvZA4v_0uAg-dZA_zhcEe',
    alt: 'Mapa de localização da fábrica da Tecnomussi',
    description: 'Visão tática por satélite do parque industrial com sinalização técnica.'
  }
];

// App State
let activeTab = 'inicio';
let selectedProduct = null;
let searchQuery = '';
let selectedCategory = 'Todos os Produtos';

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupSearch();
  setupCategoryFilters();
  setupQuoteModal();
  setupImageLinksModal();
  setupContactForm();
  
  // Render Initial View
  renderProducts();
  switchTab(activeTab);
  
  // Re-run lucide icons rendering
  lucide.createIcons();
});

// Navigation / Tabs Routing Logic
function setupNavigation() {
  const navButtons = document.querySelectorAll('[data-nav-target]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-nav-target');
      switchTab(target);
      
      // Close mobile drawer if open
      const mobileDrawer = document.getElementById('mobile-drawer');
      if (mobileDrawer) {
        mobileDrawer.classList.add('hidden');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });
  });

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuToggle && mobileDrawer && menuIcon && closeIcon) {
    mobileMenuToggle.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileDrawer.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }
}

function switchTab(tabId) {
  activeTab = tabId;
  
  // Hide all sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => {
    sec.classList.remove('active');
  });

  // Show selected section
  const targetSection = document.getElementById(`section-${tabId}`);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Update Navigation Active State (Desktop Nav Only)
  const desktopNavLinks = document.querySelectorAll('nav button[data-nav-target]');
  desktopNavLinks.forEach(link => {
    const target = link.getAttribute('data-nav-target');
    if (target === tabId) {
      link.className = 'font-sans text-base transition-colors duration-200 py-1 text-[#e56500] font-bold border-b-2 border-[#e56500]';
    } else {
      link.className = 'font-sans text-base transition-colors duration-200 py-1 text-[#505f76] hover:text-[#000f22]';
    }
  });

  // Scroll to Top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search Logic
function setupSearch() {
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      
      // Update other search inputs to keep in sync
      searchInputs.forEach(otherInput => {
        if (otherInput !== input) {
          otherInput.value = searchQuery;
        }
      });

      // If query is not empty and we're not on products page, redirect to products page
      if (searchQuery.trim() !== '' && activeTab !== 'produtos') {
        switchTab('produtos');
      }

      renderProducts();
    });
  });
}

// Category Filters Logic
function setupCategoryFilters() {
  const container = document.getElementById('categories-filter-container');
  if (!container) return;

  container.innerHTML = '';
  CATEGORIES_LIST.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = getCategoryBtnClass(cat === selectedCategory);
    btn.classList.add('cursor-pointer', 'whitespace-nowrap');
    
    btn.addEventListener('click', () => {
      selectedCategory = cat;
      
      // Update styling on buttons
      const buttons = container.querySelectorAll('button');
      buttons.forEach(b => {
        b.className = getCategoryBtnClass(b.textContent === selectedCategory);
        b.classList.add('cursor-pointer', 'whitespace-nowrap');
      });

      renderProducts();
    });

    container.appendChild(btn);
  });
}

function getCategoryBtnClass(isActive) {
  if (isActive) {
    return 'px-5 py-2 rounded-lg font-mono text-xs font-bold transition-all bg-[#0a2540] text-white shadow';
  } else {
    return 'px-5 py-2 rounded-lg font-mono text-xs font-bold transition-all bg-[#e4e9ed] text-[#171c1f] hover:bg-[#dfe3e7]';
  }
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('products-grid-container');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = selectedCategory === 'Todos os Produtos' || prod.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      prod.title.toLowerCase().includes(q) ||
      prod.code.toLowerCase().includes(q) ||
      prod.description.toLowerCase().includes(q) ||
      prod.category.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white border border-[#c4c6ce] rounded-lg p-12 text-center my-8">
        <i data-lucide="wrench" class="w-12 h-12 text-[#74777e] mx-auto mb-4"></i>
        <h3 class="text-xl font-bold text-[#000f22]">Nenhum equipamento encontrado</h3>
        <p class="text-sm text-[#505f76] mt-2">
          Tente redefinir os filtros de busca ou verifique o termo digitado.
        </p>
        <button id="reset-search-btn" class="mt-6 px-6 py-2.5 bg-[#0a2540] text-white text-xs font-mono font-bold rounded cursor-pointer">
          Ver Todos os Produtos
        </button>
      </div>
    `;

    document.getElementById('reset-search-btn')?.addEventListener('click', () => {
      selectedCategory = 'Todos os Produtos';
      searchQuery = '';
      
      // Update UI Inputs
      const searchInputs = document.querySelectorAll('.search-input');
      searchInputs.forEach(i => i.value = '');
      
      setupCategoryFilters();
      renderProducts();
    });

    lucide.createIcons();
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('article');
    card.className = 'bg-white border border-[#c4c6ce] group hover:border-[#F97316] transition-all duration-300 flex flex-col justify-between shadow-xs rounded-sm overflow-hidden';
    
    // Check extra spec labels
    const spec3 = product.highlightSpecs.label3 ? `
      <div>
        <span class="block font-mono text-[11px] text-[#74777e] uppercase tracking-tight">${product.highlightSpecs.label3}</span>
        <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val3}</span>
      </div>
    ` : '';
    
    const spec4 = product.highlightSpecs.label4 ? `
      <div>
        <span class="block font-mono text-[11px] text-[#74777e] uppercase tracking-tight">${product.highlightSpecs.label4}</span>
        <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val4}</span>
      </div>
    ` : '';

    card.innerHTML = `
      <div>
        <div class="relative aspect-video overflow-hidden bg-[#e4e9ed]">
          <img
            src="${product.imageUrl}"
            alt="${product.title}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute top-4 left-4 bg-[#0a2540] text-white px-3 py-1 font-mono text-xs tracking-wider font-bold">
            ${product.code}
          </div>
        </div>

        <div class="p-6">
          <div class="flex justify-between items-start mb-3 gap-2">
            <h3 class="font-sans font-bold text-xl text-[#000f22]">${product.title}</h3>
            <span class="flex items-center gap-1 text-[#e56500] font-mono text-xs font-bold shrink-0">
              <i data-lucide="check-circle" class="w-4 h-4 fill-current text-[#e56500]"></i>
              <span>${product.status}</span>
            </span>
          </div>

          <p class="text-[#505f76] text-sm mb-6 line-clamp-2 leading-relaxed">${product.description}</p>

          <div class="border-t border-[#c4c6ce]/40 pt-4 mb-6 grid grid-cols-2 gap-4">
            <div>
              <span class="block font-mono text-[11px] text-[#74777e] uppercase tracking-tight">${product.highlightSpecs.label1}</span>
              <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val1}</span>
            </div>

            <div>
              <span class="block font-mono text-[11px] text-[#74777e] uppercase tracking-tight">${product.highlightSpecs.label2}</span>
              <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val2}</span>
            </div>
            ${spec3}
            ${spec4}
          </div>
        </div>
      </div>

      <div class="px-6 pb-6 pt-0">
        <button class="view-details-btn w-full py-3 bg-[#0a2540] group-hover:bg-[#F97316] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors active:scale-95 rounded-sm cursor-pointer">
          <span>Ver Detalhes</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    card.querySelector('.view-details-btn').addEventListener('click', () => {
      openProductDetailModal(product);
    });

    grid.appendChild(card);
  });

  // Render Custom Engineering Card at the end of the list
  const customCard = document.createElement('article');
  customCard.className = 'bg-[#0a2540] border-2 border-[#F97316] flex flex-col justify-center items-center text-center p-8 relative overflow-hidden rounded-sm min-h-[350px]';
  customCard.innerHTML = `
    <div class="absolute inset-0 opacity-20 industrial-grid"></div>
    <div class="relative z-10 space-y-4">
      <div class="w-16 h-16 bg-[#F97316]/20 text-[#F97316] rounded-full flex items-center justify-center mx-auto border border-[#F97316]/40">
        <i data-lucide="sparkles" class="w-8 h-8"></i>
      </div>
      <h3 class="font-sans font-bold text-2xl text-white">Projeto Customizado?</h3>
      <p class="text-[#768dad] text-sm leading-relaxed">
        Desenvolvemos soluções sob medida para os desafios mais complexos da sua linha de produção.
      </p>
      <button id="custom-consultant-btn" class="mt-4 bg-[#F97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded font-bold text-sm transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer">
        Falar com Consultor
      </button>
    </div>
  `;
  
  grid.appendChild(customCard);
  
  document.getElementById('custom-consultant-btn')?.addEventListener('click', () => {
    openQuoteModal('Projeto Customizado de Engenharia');
  });

  lucide.createIcons();
}

// Product Detail Modal Logic
function openProductDetailModal(product) {
  selectedProduct = product;
  const modal = document.getElementById('product-detail-modal');
  if (!modal) return;

  // Insert content
  modal.querySelector('#pd-code').textContent = product.code;
  modal.querySelector('#pd-title').textContent = product.title;
  modal.querySelector('#pd-image').src = product.imageUrl;
  modal.querySelector('#pd-image').alt = product.title;
  modal.querySelector('#pd-status').textContent = product.status;
  modal.querySelector('#pd-description').textContent = product.fullDescription;
  
  // High Specs
  const highlightsContainer = modal.querySelector('#pd-highlights');
  highlightsContainer.innerHTML = `
    <div>
      <span class="block font-mono text-[11px] text-[#74777e] uppercase">${product.highlightSpecs.label1}</span>
      <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val1}</span>
    </div>
    <div>
      <span class="block font-mono text-[11px] text-[#74777e] uppercase">${product.highlightSpecs.label2}</span>
      <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val2}</span>
    </div>
  `;
  if (product.highlightSpecs.label3) {
    highlightsContainer.innerHTML += `
      <div>
        <span class="block font-mono text-[11px] text-[#74777e] uppercase">${product.highlightSpecs.label3}</span>
        <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val3}</span>
      </div>
    `;
  }
  if (product.highlightSpecs.label4) {
    highlightsContainer.innerHTML += `
      <div>
        <span class="block font-mono text-[11px] text-[#74777e] uppercase">${product.highlightSpecs.label4}</span>
        <span class="font-sans font-bold text-sm text-[#000f22]">${product.highlightSpecs.val4}</span>
      </div>
    `;
  }

  // Specifications Table
  const specsTableBody = modal.querySelector('#pd-specs-table-body');
  specsTableBody.innerHTML = '';
  product.specs.forEach(s => {
    const row = document.createElement('tr');
    row.className = 'hover:bg-[#eaeef2] transition-colors';
    row.innerHTML = `
      <td class="p-3 font-semibold text-[#000f22] w-1/2">${s.label}</td>
      <td class="p-3 font-mono text-[#505f76]">${s.value}</td>
    `;
    specsTableBody.appendChild(row);
  });

  // Features list
  const featuresContainer = modal.querySelector('#pd-features-list');
  featuresContainer.innerHTML = '';
  product.features.forEach(f => {
    const item = document.createElement('div');
    item.className = 'flex items-start gap-2 bg-[#f6fafe] p-2.5 rounded border border-[#c4c6ce]/30 text-xs text-[#171c1f]';
    item.innerHTML = `
      <i data-lucide="check-circle" class="w-4 h-4 text-[#F97316] shrink-0 mt-0.5"></i>
      <span>${f}</span>
    `;
    featuresContainer.appendChild(item);
  });

  // Open Modal
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  lucide.createIcons();
}

function closeProductDetailModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    selectedProduct = null;
  }
}

// Set up Details Modal Click Handlers
document.getElementById('pd-close-btn')?.addEventListener('click', closeProductDetailModal);
document.getElementById('pd-modal-overlay')?.addEventListener('click', closeProductDetailModal);

// Copy Product Image Link
const copyImageLinkBtn = document.getElementById('pd-copy-link-btn');
let copyTimeout;
copyImageLinkBtn?.addEventListener('click', () => {
  if (!selectedProduct) return;
  navigator.clipboard.writeText(selectedProduct.imageUrl).then(() => {
    const iconSpan = copyImageLinkBtn.querySelector('.btn-icon');
    const labelSpan = copyImageLinkBtn.querySelector('.btn-label');
    
    iconSpan.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-green-400"></i>';
    labelSpan.textContent = 'Link Direto Copiado!';
    lucide.createIcons();

    clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      iconSpan.innerHTML = '<i data-lucide="copy" class="w-3.5 h-3.5 text-[#F97316]"></i>';
      labelSpan.textContent = 'Copiar Link da Imagem';
      lucide.createIcons();
    }, 2000);
  });
});

// Download Technical Sheet (TXT)
document.getElementById('pd-download-btn')?.addEventListener('click', () => {
  if (!selectedProduct) return;
  
  const content = `TECNOMUSSI MÁQUINAS E EQUIPAMENTOS
FICHA TÉCNICA INDUSTRIAL DE EQUIPAMENTO
--------------------------------------------------
Código do Produto: ${selectedProduct.code}
Nome: ${selectedProduct.title}
Categoria: ${selectedProduct.category}
Status Operacional: ${selectedProduct.status}

DESCRIÇÃO TÉCNICA:
${selectedProduct.fullDescription}

ESPECIFICAÇÕES TÉCNICAS:
${selectedProduct.specs.map(s => `- ${s.label}: ${s.value}`).join('\n')}

RECURSOS E TECNOLOGIAS EMBARCADAS:
${selectedProduct.features.map(f => `- ${f}`).join('\n')}

URL DIRETA DA IMAGEM:
${selectedProduct.imageUrl}

Sede Administrativa: Rua Elias Mussi. Industrial, 167 - Manhumirim MG
Contato: +55 (33) 98429-4582 | tecnomussi@hotmail.com
--------------------------------------------------
Emitido via Portal Tecnomussi 2026
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Tecnomussi_Ficha_Tecnica_${selectedProduct.code}.txt`;
  a.click();
  URL.revokeObjectURL(url);
});

// Open quote from detail modal
document.getElementById('pd-quote-btn')?.addEventListener('click', () => {
  if (!selectedProduct) return;
  const targetCode = `${selectedProduct.code} - ${selectedProduct.title}`;
  closeProductDetailModal();
  openQuoteModal(targetCode);
});


// Quote Modal Logic
function setupQuoteModal() {
  const openButtons = document.querySelectorAll('.open-quote-modal-btn');
  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      openQuoteModal();
    });
  });

  document.getElementById('quote-close-btn')?.addEventListener('click', closeQuoteModal);
  document.getElementById('quote-modal-overlay')?.addEventListener('click', closeQuoteModal);

  // Handle Form Submission
  const form = document.getElementById('quote-form');
  const quoteModalBody = document.getElementById('quote-modal-body');
  
  if (form && quoteModalBody) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="animate-spin text-white">⚙️</span>
        <span>Enviando Dados Técnicos...</span>
      `;
      
      setTimeout(() => {
        // Show Success View
        quoteModalBody.innerHTML = `
          <div class="py-12 text-center space-y-4">
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <i data-lucide="check-circle" class="w-10 h-10"></i>
            </div>
            <h3 class="text-xl font-bold text-[#000f22]">Solicitação Enviada com Sucesso!</h3>
            <p class="text-sm text-[#505f76] max-w-md mx-auto">
              Sua especificação técnica foi recebida pelo nosso departamento de engenharia. Em até 2 horas úteis, um especialista entrará em contato.
            </p>
          </div>
        `;
        lucide.createIcons();

        setTimeout(() => {
          closeQuoteModal();
          // Reset form to original view
          quoteModalBody.innerHTML = `
            <form id="quote-form" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    id="quote-name"
                    placeholder="Ex: Roberto Silva"
                    class="w-full bg-[#eaeef2] border border-[#c4c6ce] p-3 text-sm text-[#171c1f] rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                  />
                </div>
                <div class="space-y-1">
                  <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    id="quote-email"
                    placeholder="roberto@empresa.com"
                    class="w-full bg-[#eaeef2] border border-[#c4c6ce] p-3 text-sm text-[#171c1f] rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                    Empresa / Indústria *
                  </label>
                  <input
                    type="text"
                    required
                    id="quote-company"
                    placeholder="Nome da sua Indústria"
                    class="w-full bg-[#eaeef2] border border-[#c4c6ce] p-3 text-sm text-[#171c1f] rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                  />
                </div>
                <div class="space-y-1">
                  <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    id="quote-phone"
                    placeholder="(00) 00000-0000"
                    class="w-full bg-[#eaeef2] border border-[#c4c6ce] p-3 text-sm text-[#171c1f] rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                  />
                </div>
              </div>
              <div class="space-y-1">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  Equipamento ou Serviço de Interesse *
                </label>
                <input
                  type="text"
                  required
                  id="quote-service"
                  placeholder="Selecione ou digite o modelo (ex: DSC_IND_900, CNC Laser 6000W)"
                  class="w-full bg-[#eaeef2] border border-[#c4c6ce] p-3 text-sm text-[#171c1f] rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                />
              </div>
              <div class="space-y-1">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  Detalhes da Solicitação / Especificações
                </label>
                <textarea
                  rows="4"
                  id="quote-details"
                  placeholder="Descreva capacidade requerida, dimensões, materiais a serem processados ou prazo de implementação..."
                  class="w-full bg-[#eaeef2] border border-[#c4c6ce] p-3 text-sm text-[#171c1f] rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-[#F97316] hover:bg-[#ea580c] text-white py-4 rounded font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98 disabled:opacity-70 cursor-pointer"
              >
                <i data-lucide="send" class="w-5 h-5"></i>
                <span>Enviar Solicitação Técnica</span>
              </button>
            </form>
          `;
          setupQuoteModal(); // Rebind handlers
        }, 2500);
      }, 1200);
    });
  }
}

function openQuoteModal(prefillValue = '') {
  const modal = document.getElementById('quote-modal');
  if (!modal) return;

  const serviceInput = modal.querySelector('#quote-service');
  if (serviceInput) {
    serviceInput.value = prefillValue || 'Prensas Hidráulicas';
  }

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
}


// Image Links Modal Logic
function setupImageLinksModal() {
  const openButtons = document.querySelectorAll('.open-image-modal-btn');
  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      openImageLinksModal();
    });
  });

  document.getElementById('img-close-btn')?.addEventListener('click', closeImageLinksModal);
  document.getElementById('img-modal-overlay')?.addEventListener('click', closeImageLinksModal);

  // Category Tabs inside Image Links Modal
  renderImageGalleryCategories();
  renderImageGalleryAssets('Todos');
}

function openImageLinksModal() {
  const modal = document.getElementById('image-links-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    renderImageGalleryAssets('Todos');
  }
}

function closeImageLinksModal() {
  const modal = document.getElementById('image-links-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
}

function renderImageGalleryCategories() {
  const container = document.getElementById('img-categories-container');
  if (!container) return;

  const categories = ['Todos', ...Array.from(new Set(DIRECT_IMAGE_ASSETS.map(img => img.category)))];
  container.innerHTML = '';
  
  categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = idx === 0
      ? 'px-3 py-1.5 rounded text-xs font-mono transition-colors whitespace-nowrap bg-[#0a2540] text-white font-bold cursor-pointer'
      : 'px-3 py-1.5 rounded text-xs font-mono transition-colors whitespace-nowrap bg-white text-[#43474d] hover:bg-[#dfe3e7] cursor-pointer';
    
    btn.addEventListener('click', () => {
      // Toggle Styling
      container.querySelectorAll('button').forEach(b => {
        b.className = b.textContent === cat
          ? 'px-3 py-1.5 rounded text-xs font-mono transition-colors whitespace-nowrap bg-[#0a2540] text-white font-bold cursor-pointer'
          : 'px-3 py-1.5 rounded text-xs font-mono transition-colors whitespace-nowrap bg-white text-[#43474d] hover:bg-[#dfe3e7] cursor-pointer';
      });

      renderImageGalleryAssets(cat);
    });

    container.appendChild(btn);
  });
}

function renderImageGalleryAssets(selectedCat) {
  const container = document.getElementById('img-assets-list-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = selectedCat === 'Todos'
    ? DIRECT_IMAGE_ASSETS
    : DIRECT_IMAGE_ASSETS.filter(img => img.category === selectedCat);

  filtered.forEach(asset => {
    const htmlTag = `<img src="${asset.url}" alt="${asset.alt}" class="w-full h-auto object-cover" />`;
    const mdTag = `![${asset.alt}](${asset.url})`;

    const row = document.createElement('div');
    row.className = 'pt-4 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center';
    row.innerHTML = `
      <div class="md:col-span-3">
        <div class="relative aspect-video rounded overflow-hidden bg-[#dfe3e7] border border-[#c4c6ce] group">
          <img
            src="${asset.url}"
            alt="${asset.alt}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <a
            href="${asset.url}"
            target="_blank"
            rel="noreferrer"
            class="absolute inset-0 bg-[#000f22]/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-mono gap-1 transition-opacity"
          >
            <span>Abrir</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>

      <div class="md:col-span-9 space-y-2">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-bold text-sm text-[#000f22]">${asset.title}</h4>
            <p class="text-xs text-[#505f76] font-mono">${asset.description}</p>
          </div>
          <span class="font-mono text-[10px] px-2 py-0.5 bg-[#eaeef2] text-[#43474d] rounded font-medium">
            ${asset.category}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <div class="flex-1 bg-[#f6fafe] border border-[#c4c6ce] rounded px-2.5 py-1.5 flex items-center text-xs font-mono text-[#171c1f] overflow-hidden">
            <span class="text-[#74777e] shrink-0 mr-1.5">URL:</span>
            <span class="truncate">${asset.url}</span>
          </div>
          <button class="copy-url-btn px-3 py-1.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-bold rounded flex items-center gap-1 shrink-0 transition-colors cursor-pointer">
            <span class="btn-icon"><i data-lucide="copy" class="w-3.5 h-3.5"></i></span>
            <span class="btn-text">Copiar URL</span>
          </button>
        </div>

        <div class="flex flex-wrap gap-2 pt-1">
          <button class="copy-html-btn px-2.5 py-1 bg-[#eaeef2] hover:bg-[#dfe3e7] text-[#0a2540] text-xs font-mono rounded flex items-center gap-1.5 border border-[#c4c6ce]/60 transition-colors cursor-pointer">
            <i data-lucide="code" class="w-3.5 h-3.5 text-[#F97316]"></i>
            <span class="btn-text">Copiar Tag HTML &lt;img /&gt;</span>
          </button>

          <button class="copy-md-btn px-2.5 py-1 bg-[#eaeef2] hover:bg-[#dfe3e7] text-[#0a2540] text-xs font-mono rounded flex items-center gap-1.5 border border-[#c4c6ce]/60 transition-colors cursor-pointer">
            <i data-lucide="image" class="w-3.5 h-3.5 text-[#0a2540]"></i>
            <span class="btn-text">Copiar Markdown ![...]</span>
          </button>

          <a
            href="${asset.url}"
            target="_blank"
            rel="noreferrer"
            class="px-2.5 py-1 text-[#505f76] hover:text-[#000f22] text-xs font-mono flex items-center gap-1 ml-auto"
          >
            <span>Abrir imagem direta</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    `;

    // Copy Handlers inside image directory
    row.querySelector('.copy-url-btn').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      navigator.clipboard.writeText(asset.url).then(() => {
        btn.querySelector('.btn-icon').innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i>';
        btn.querySelector('.btn-text').textContent = 'Copiado!';
        lucide.createIcons();
        setTimeout(() => {
          btn.querySelector('.btn-icon').innerHTML = '<i data-lucide="copy" class="w-3.5 h-3.5"></i>';
          btn.querySelector('.btn-text').textContent = 'Copiar URL';
          lucide.createIcons();
        }, 2000);
      });
    });

    row.querySelector('.copy-html-btn').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      navigator.clipboard.writeText(htmlTag).then(() => {
        btn.querySelector('.btn-text').textContent = 'Tag HTML Copiada!';
        setTimeout(() => {
          btn.querySelector('.btn-text').innerHTML = 'Copiar Tag HTML &lt;img /&gt;';
        }, 2000);
      });
    });

    row.querySelector('.copy-md-btn').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      navigator.clipboard.writeText(mdTag).then(() => {
        btn.querySelector('.btn-text').textContent = 'Markdown Copiado!';
        setTimeout(() => {
          btn.querySelector('.btn-text').textContent = 'Copiar Markdown ![...]';
        }, 2000);
      });
    });

    container.appendChild(row);
  });

  lucide.createIcons();
}


// Contact Page Form Logic
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const contactFormWrapper = document.getElementById('contact-form-wrapper');
  
  if (contactForm && contactFormWrapper) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="animate-spin text-white">⚙️</span>
        <span>Enviando Dados Técnicos...</span>
      `;
      
      setTimeout(() => {
        // Show Success state
        contactFormWrapper.innerHTML = `
          <div class="py-12 text-center space-y-4">
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <i data-lucide="check-circle" class="w-10 h-10"></i>
            </div>
            <h3 class="text-2xl font-bold text-[#000f22]">Solicitação Enviada com Sucesso!</h3>
            <p class="text-sm text-[#505f76] max-w-md mx-auto">
              Sua especificação técnica foi recebida com prioridade. Nossa equipe entrará em contato via e-mail e WhatsApp corporativo.
            </p>
          </div>
        `;
        lucide.createIcons();

        // Restore form after 3 seconds
        setTimeout(() => {
          contactFormWrapper.innerHTML = `
            <div class="mb-8">
              <h2 class="font-sans font-bold text-2xl text-[#000f22] mb-2">Solicitar Orçamento</h2>
              <p class="text-sm text-[#505f76]">
                Preencha os dados abaixo e um de nossos engenheiros especialistas entrará em contato.
              </p>
            </div>
            <form id="contact-form" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  id="contact-name"
                  placeholder="Ex: Roberto Silva"
                  class="bg-[#eaeef2] border border-[#c4c6ce] p-3.5 text-sm font-sans rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  required
                  id="contact-email"
                  placeholder="roberto@empresa.com"
                  class="bg-[#eaeef2] border border-[#c4c6ce] p-3.5 text-sm font-sans rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  Empresa
                </label>
                <input
                  type="text"
                  required
                  id="contact-company"
                  placeholder="Nome da sua Indústria"
                  class="bg-[#eaeef2] border border-[#c4c6ce] p-3.5 text-sm font-sans rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  id="contact-phone"
                  placeholder="(00) 00000-0000"
                  class="bg-[#eaeef2] border border-[#c4c6ce] p-3.5 text-sm font-sans rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                />
              </div>

              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  Equipamento ou Serviço de Interesse
                </label>
                <select
                  id="contact-service"
                  class="bg-[#eaeef2] border border-[#c4c6ce] p-3.5 text-sm font-sans rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                >
                  <option value="Prensas Hidráulicas">Prensas Hidráulicas & H-Frame</option>
                  <option value="Automação e Robótica">Automação e Robótica (Células 6 Eixos)</option>
                  <option value="Máquinas de Corte Laser">Máquinas de Corte Laser 6000W</option>
                  <option value="CNC Router 5 Eixos">Centro de Usinagem CNC Router 5 Eixos</option>
                  <option value="Dobradeiras CNC">Dobradeira CNC High Precision (BEND_PRO)</option>
                  <option value="Peças de Reposição">Peças de Reposição & Retrofit</option>
                  <option value="Manutenção Industrial">Manutenção e Adequação NR-12</option>
                </select>
              </div>

              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-mono text-xs text-[#43474d] uppercase font-bold">
                  Detalhes da Solicitação
                </label>
                <textarea
                  rows="5"
                  id="contact-details"
                  placeholder="Descreva as especificações técnicas ou necessidades do seu projeto..."
                  class="bg-[#eaeef2] border border-[#c4c6ce] p-3.5 text-sm font-sans rounded focus:ring-2 focus:ring-[#F97316] outline-none transition-all"
                ></textarea>
              </div>

              <div class="md:col-span-2 mt-2">
                <button
                  type="submit"
                  class="w-full bg-[#F97316] hover:bg-[#ea580c] text-white py-4 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg disabled:opacity-70 cursor-pointer"
                >
                  <i data-lucide="send" class="w-5 h-5"></i>
                  <span>Enviar Solicitação Técnica</span>
                </button>
              </div>
            </form>
          `;
          setupContactForm(); // Rebind handlers
        }, 3000);
      }, 1200);
    });
  }
}
