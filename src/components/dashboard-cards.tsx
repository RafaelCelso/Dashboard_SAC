import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Slider } from './ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { 
  Phone, 
  Mail, 
  FileText, 
  Clock, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  TrendingDown,
  Activity,
  MessageCircle,
  MapPin,
  AlertCircle,
  Share2,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  Shield,
  FlaskConical,
  Baby,
  Timer,
  BarChart3,
  Package,
  Target,
  Circle,
  Eye,
  XCircle,
  RotateCcw,
  Loader,
  FileUser,
  Map,
  UserCheck,
  Building2,
  Info,
  ChevronDown,
  Search,
  DollarSign,
  ClipboardCheck
} from 'lucide-react';

const COLORS = ['#26B99D', '#20A085', '#1A8A73', '#147A65', '#0F6B5A'];

// Dados mocados para os indicadores
const contactsByChannel = [
  { name: 'Telefone', value: 42, icon: Phone, quantity: 819 },
  { name: 'Email', value: 28, icon: Mail, quantity: 546 },
  { name: 'Whatsapp', value: 15, icon: MessageCircle, quantity: 293 },
  { name: 'Reclame Aqui', value: 4, icon: AlertCircle, quantity: 78 },
  { 
    name: 'Rede Social', 
    value: 3, 
    icon: Share2, 
    quantity: 58,
    subChannels: [
      { name: 'Instagram', value: 45, icon: Instagram, quantity: 26 },
      { name: 'Facebook', value: 28, icon: Facebook, quantity: 16 },
      { name: 'LinkedIn', value: 17, icon: Linkedin, quantity: 10 },
      { name: 'X (Twitter)', value: 10, icon: Twitter, quantity: 6 }
    ]
  }
];

const contactReasons = [
  { name: 'Informações sobre Medicamentos', quantity: 682, percentage: 35.0 },
  { name: 'Queixa Técnica', quantity: 585, percentage: 30.0 },
  { name: 'Farmacovigilância', quantity: 390, percentage: 20.0 },
  { name: 'Suporte ao Tratamento', quantity: 195, percentage: 10.0 },
  { name: 'Elogios e Sugestões', quantity: 98, percentage: 5.0 }
];

const contactRecurrence = [
  { name: 'Maria Silva Santos', contacts: 8, lastContact: '2024-06-28' },
  { name: 'João Carlos Oliveira', contacts: 7, lastContact: '2024-06-27' },
  { name: 'Ana Beatriz Costa', contacts: 6, lastContact: '2024-06-29' },
  { name: 'Pedro Henrique Lima', contacts: 5, lastContact: '2024-06-26' },
  { name: 'Carla Regina Souza', contacts: 5, lastContact: '2024-06-30' }
];

const topProducts = [
  { name: 'Paracetamol 500mg', contacts: 234, percentage: 12.0, trend: '+8%' },
  { name: 'Amoxicilina 875mg', contacts: 198, percentage: 10.2, trend: '+15%' },
  { name: 'Omeprazol 20mg', contacts: 156, percentage: 8.0, trend: '-3%' },
  { name: 'Losartana 50mg', contacts: 145, percentage: 7.4, trend: '+5%' },
  { name: 'Metformina 850mg', contacts: 117, percentage: 6.0, trend: '+12%' }
];

const monthlyTrend = [
  { month: 'Jan', contatos: 1200, telefone: 480, email: 360, whatsapp: 192, reclameAqui: 48, redeSocial: 24 },
  { month: 'Fev', contatos: 1350, telefone: 540, email: 405, whatsapp: 216, reclameAqui: 54, redeSocial: 27 },
  { month: 'Mar', contatos: 1500, telefone: 600, email: 450, whatsapp: 240, reclameAqui: 60, redeSocial: 30 },
  { month: 'Abr', contatos: 1650, telefone: 660, email: 495, whatsapp: 264, reclameAqui: 66, redeSocial: 33 },
  { month: 'Mai', contatos: 1800, telefone: 720, email: 540, whatsapp: 288, reclameAqui: 72, redeSocial: 36 },
  { month: 'Jun', contatos: 1950, telefone: 819, email: 546, whatsapp: 293, reclameAqui: 78, redeSocial: 58 }
];

// Dados para reincidência global com múltiplos identificadores
const recurrenceData = {
  totalCustomers: 1247,
  recurrentCustomers: 128,
  recurrenceRate: 10.3,
  trend: '+2.1%'
};

// Dados de reincidência por identificador
const recurrenceByIdentifier = {
  cpfEmail: {
    clientes: 41,
    descricao: 'Mesma identificação fiscal',
    risco: 'alto',
    cor: '#E53935'
  },
  telefone: {
    clientes: 62,
    descricao: 'Número repetido em diferentes cadastros',
    risco: 'critico',
    cor: '#FB8C00'
  },
  endereco: {
    clientes: 28,
    descricao: 'Mesmo endereço / CEP em múltiplos contatos',
    risco: 'medio',
    cor: '#00B894'
  }
};

// Dados avançados para análise de reincidência e risco
const advancedRecurrenceData = {
  // KPIs principais
  taxaReincidencia: 10.3,
  trendReincidencia: '+2.1%',
  suspeitaFraude: 23,
  clustersGeograficos: 12,
  gruposNomesSimilares: 18,
  
  // Tab 1: Identificadores
  identificadores: {
    cpfEmail: { entidades: 41, percentual: 32, variacao: '+3' },
    telefone: { entidades: 62, percentual: 48, variacao: '+8' },
    enderecoExato: { entidades: 28, percentual: 22, variacao: '-2' }
  },
  
  topEntidadesReincidentes: [
    { 
      id: 'ENT-001',
      nome: 'Maria S. ***',
      identificadorDominante: 'Telefone',
      valor: '(11) 98765-****',
      contatos: 8,
      ultimoContato: '2024-06-28',
      primeiroContato: '2024-01-15',
      risco: 'alto',
      motivos: ['Queixa Técnica', 'Informação'],
      produtos: ['Paracetamol 500mg', 'Amoxicilina 875mg']
    },
    { 
      id: 'ENT-002',
      nome: 'João O. ***',
      identificadorDominante: 'CPF/E-mail',
      valor: '***.***.***-18',
      contatos: 7,
      ultimoContato: '2024-06-27',
      primeiroContato: '2024-02-10',
      risco: 'alto',
      motivos: ['Farmacovigilância', 'Queixa Técnica'],
      produtos: ['Losartana 50mg']
    },
    { 
      id: 'ENT-003',
      nome: 'Ana C. ***',
      identificadorDominante: 'E-mail',
      valor: 'a****@gmail.com',
      contatos: 6,
      ultimoContato: '2024-06-29',
      primeiroContato: '2024-03-05',
      risco: 'medio',
      motivos: ['Informação', 'Suporte'],
      produtos: ['Omeprazol 20mg', 'Metformina 850mg']
    },
    { 
      id: 'ENT-004',
      nome: 'Pedro L. ***',
      identificadorDominante: 'CPF',
      valor: '***.***.***-23',
      contatos: 5,
      ultimoContato: '2024-06-26',
      primeiroContato: '2024-01-20',
      risco: 'medio',
      motivos: ['Suporte Tratamento'],
      produtos: ['Atorvastatina 20mg']
    },
    { 
      id: 'ENT-005',
      nome: 'Carla S. ***',
      identificadorDominante: 'Telefone',
      valor: '(21) 99876-****',
      contatos: 5,
      ultimoContato: '2024-06-30',
      primeiroContato: '2024-02-28',
      risco: 'medio',
      motivos: ['Queixa Técnica'],
      produtos: ['Paracetamol 500mg']
    }
  ],
  
  // Tab 2: Proximidade Geográfica
  clustersGeograficos: [
    {
      id: 'CL-001',
      local: 'Centro - São Paulo/SP',
      cep: '01310-***',
      raio: 500,
      clientes: 18,
      contatos: 45,
      risco: 'alto',
      motivosPrincipais: ['Queixa Técnica', 'Informação'],
      produtos: ['Paracetamol 500mg', 'Amoxicilina 875mg'],
      coordenadas: { lat: -23.547, lng: -46.636 }
    },
    {
      id: 'CL-002',
      local: 'Copacabana - Rio de Janeiro/RJ',
      cep: '22070-***',
      raio: 250,
      clientes: 12,
      contatos: 28,
      risco: 'medio',
      motivosPrincipais: ['Farmacovigilância'],
      produtos: ['Losartana 50mg'],
      coordenadas: { lat: -22.971, lng: -43.183 }
    },
    {
      id: 'CL-003',
      local: 'Savassi - Belo Horizonte/MG',
      cep: '30112-***',
      raio: 500,
      clientes: 15,
      contatos: 32,
      risco: 'medio',
      motivosPrincipais: ['Informação', 'Suporte'],
      produtos: ['Omeprazol 20mg'],
      coordenadas: { lat: -19.937, lng: -43.935 }
    },
    {
      id: 'CL-004',
      local: 'Boa Viagem - Recife/PE',
      cep: '51020-***',
      raio: 1000,
      clientes: 10,
      contatos: 22,
      risco: 'baixo',
      motivosPrincipais: ['Informação'],
      produtos: ['Metformina 850mg'],
      coordenadas: { lat: -8.126, lng: -34.905 }
    },
    {
      id: 'CL-005',
      local: 'Centro - Curitiba/PR',
      cep: '80020-***',
      raio: 500,
      clientes: 9,
      contatos: 19,
      risco: 'baixo',
      motivosPrincipais: ['Queixa Técnica'],
      produtos: ['Dipirona 1g'],
      coordenadas: { lat: -25.437, lng: -49.270 }
    }
  ],
  
  // Tab 3: Nomes Similares (Fuzzy Match)
  gruposNomesSimilares: [
    {
      id: 'GRP-001',
      nomeReferencia: 'Maria da Silva Santos',
      variacoes: [
        { nome: 'Maria Silva Santos', similaridade: 0.95, contatos: 8, cpf: '***.***.***-42' },
        { nome: 'Maria S. Santos', similaridade: 0.92, contatos: 3, cpf: '***.***.***-42' },
        { nome: 'M. Silva Santos', similaridade: 0.88, contatos: 2, cpf: '***.***.***-42' }
      ],
      totalContatos: 13,
      risco: 'alto',
      suspeita: 'Uso de variações do nome com mesmo CPF'
    },
    {
      id: 'GRP-002',
      nomeReferencia: 'João Carlos de Oliveira',
      variacoes: [
        { nome: 'João C. Oliveira', similaridade: 0.93, contatos: 7, cpf: '***.***.***-18' },
        { nome: 'João Oliveira', similaridade: 0.90, contatos: 4, cpf: '***.***.***-18' },
        { nome: 'J. Carlos Oliveira', similaridade: 0.87, contatos: 2, cpf: '***.***.***-18' }
      ],
      totalContatos: 13,
      risco: 'alto',
      suspeita: 'Variações ortográficas frequentes'
    },
    {
      id: 'GRP-003',
      nomeReferencia: 'Ana Beatriz Costa',
      variacoes: [
        { nome: 'Ana B. Costa', similaridade: 0.94, contatos: 6, cpf: '***.***.***-95' },
        { nome: 'Ana Beatriz C.', similaridade: 0.91, contatos: 3, cpf: '***.***.***-95' }
      ],
      totalContatos: 9,
      risco: 'medio',
      suspeita: 'Abreviações do nome completo'
    },
    {
      id: 'GRP-004',
      nomeReferencia: 'Pedro Henrique Lima',
      variacoes: [
        { nome: 'Pedro H. Lima', similaridade: 0.92, contatos: 5, cpf: '***.***.***-23' },
        { nome: 'P. Henrique Lima', similaridade: 0.89, contatos: 2, cpf: '***.***.***-23' }
      ],
      totalContatos: 7,
      risco: 'medio',
      suspeita: 'Uso de iniciais'
    },
    {
      id: 'GRP-005',
      nomeReferencia: 'Carla Regina Souza',
      variacoes: [
        { nome: 'Carla R. Souza', similaridade: 0.93, contatos: 5, cpf: '***.***.***-67' },
        { nome: 'Carla Souza', similaridade: 0.90, contatos: 3, cpf: '***.***.***-67' }
      ],
      totalContatos: 8,
      risco: 'medio',
      suspeita: 'Omissão do nome do meio'
    }
  ],
  
  // Tab 4: Cidades com Maior Concentração
  cidadesConcentracao: [
    {
      cidade: 'São Paulo',
      estado: 'SP',
      totalContatos: 542,
      clientesUnicos: 387,
      taxaReincidencia: 12.8,
      clusters: 5,
      risco: 'alto',
      bairrosDestaque: ['Centro', 'Pinheiros', 'Vila Mariana'],
      motivoPrincipal: 'Queixa Técnica'
    },
    {
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      totalContatos: 398,
      clientesUnicos: 295,
      taxaReincidencia: 11.2,
      clusters: 3,
      risco: 'alto',
      bairrosDestaque: ['Copacabana', 'Botafogo', 'Tijuca'],
      motivoPrincipal: 'Farmacovigilância'
    },
    {
      cidade: 'Belo Horizonte',
      estado: 'MG',
      totalContatos: 285,
      clientesUnicos: 218,
      taxaReincidencia: 8.5,
      clusters: 2,
      risco: 'medio',
      bairrosDestaque: ['Savassi', 'Centro', 'Pampulha'],
      motivoPrincipal: 'Informação'
    },
    {
      cidade: 'Brasília',
      estado: 'DF',
      totalContatos: 198,
      clientesUnicos: 165,
      taxaReincidencia: 7.2,
      clusters: 1,
      risco: 'medio',
      bairrosDestaque: ['Asa Sul', 'Asa Norte'],
      motivoPrincipal: 'Suporte Tratamento'
    },
    {
      cidade: 'Curitiba',
      estado: 'PR',
      totalContatos: 156,
      clientesUnicos: 138,
      taxaReincidencia: 5.8,
      clusters: 1,
      risco: 'baixo',
      bairrosDestaque: ['Centro', 'Batel'],
      motivoPrincipal: 'Informação'
    }
  ]
};

// Variações por canal
const channelVariations = {
  'Telefone': { trend: '+8%', isPositive: true },
  'Email': { trend: '-5%', isPositive: false },
  'Whatsapp': { trend: '+22%', isPositive: true },
  'Presencial': { trend: '+15%', isPositive: true },
  'Reclame Aqui': { trend: '+30%', isPositive: true },
  'Rede Social': { trend: '+45%', isPositive: true }
};

// Configuração de canais para tooltip - Paleta harmonizada
const channelConfig = {
  contatos: { name: 'Total de Contatos', color: '#2E3A59', icon: Users },
  telefone: { name: 'Telefone', color: '#4A90E2', icon: Phone },
  email: { name: 'Email', color: '#00BFA6', icon: Mail },
  whatsapp: { name: 'WhatsApp', color: '#43C77D', icon: MessageCircle },
  presencial: { name: 'Presencial', color: '#A06BFF', icon: MapPin },
  reclameAqui: { name: 'Reclame Aqui', color: '#F45B69', icon: AlertCircle },
  redeSocial: { name: 'Rede Social', color: '#6EC1E4', icon: Share2 }
};

// Dados para Qualidade e Risco revisado
const qualityMetrics = {
  queixaTecnica: { percentage: 30.0, trend: '+2%', isPositive: true, total: 585 },
  eventoAdverso: { percentage: 18.0, trend: '+1%', isPositive: true, total: 351 },
  gestacao: { percentage: 7.0, trend: '+0.5%', isPositive: true, total: 137 },
  casosAnalise: { total: 102, trend: '-5%', isPositive: false },
  tempoEncaminhamento: { days: 1.6, trend: '-0.2 dias', isPositive: true }
};

const gravidadeEventos = [
  { name: 'Leve', value: 42, color: '#22c55e' },
  { name: 'Moderado', value: 36, color: '#f59e0b' },
  { name: 'Grave', value: 19, color: '#ef4444' },
  { name: 'Óbito', value: 3, color: '#7f1d1d' }
];

const evolucaoMensal = [
  { month: 'Jan', queixaTecnica: 180, eventoAdverso: 120, gestacao: 45 },
  { month: 'Fev', queixaTecnica: 195, eventoAdverso: 135, gestacao: 55 },
  { month: 'Mar', queixaTecnica: 220, eventoAdverso: 150, gestacao: 62 },
  { month: 'Abr', queixaTecnica: 250, eventoAdverso: 165, gestacao: 68 },
  { month: 'Mai', queixaTecnica: 280, eventoAdverso: 180, gestacao: 75 },
  { month: 'Jun', queixaTecnica: 315, eventoAdverso: 195, gestacao: 82 }
];

const queixasTecnicasDetalhes = [
  { name: 'Embalagem danificada', value: 27 },
  { name: 'Falha de eficácia', value: 22 },
  { name: 'Produto vencido', value: 15 },
  { name: 'Cor ou odor alterado', value: 12 },
  { name: 'Outros', value: 24 }
];

const gestacaoMensal = [
  { month: 'Janeiro', total: 45, percentage: 5.0 },
  { month: 'Fevereiro', total: 60, percentage: 7.0 },
  { month: 'Março', total: 72, percentage: 8.0 },
  { month: 'Abril', total: 78, percentage: 7.8 },
  { month: 'Maio', total: 85, percentage: 7.5 },
  { month: 'Junho', total: 92, percentage: 7.2 }
];

const produtosCasos = [
  { produto: 'Paracetamol 500mg', queixaTecnica: 25, eventoAdverso: 10, gestacao: 3, total: 38 },
  { produto: 'Amoxicilina 875mg', queixaTecnica: 18, eventoAdverso: 7, gestacao: 2, total: 27 },
  { produto: 'Losartana 50mg', queixaTecnica: 7, eventoAdverso: 2, gestacao: 1, total: 10 },
  { produto: 'Omeprazol 20mg', queixaTecnica: 12, eventoAdverso: 5, gestacao: 1, total: 18 },
  { produto: 'Metformina 850mg', queixaTecnica: 8, eventoAdverso: 3, gestacao: 2, total: 13 }
];

const statusCasos = [
  { name: 'Aberto', value: 20, color: '#ef4444' },
  { name: 'Em Análise', value: 45, color: '#f59e0b' },
  { name: 'Retornado', value: 10, color: '#8b5cf6' },
  { name: 'Concluído', value: 25, color: '#22c55e' }
];

// Componente de Tooltip Customizado - Minimalista
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm p-3 border-0 rounded-lg shadow-xl">
        <p className="font-medium text-gray-800 mb-2 text-sm">{`${label}/24`}</p>
        {payload.map((entry, index) => {
          const config = channelConfig[entry.dataKey];
          if (config) {
            const IconComponent = config.icon;
            return (
              <div key={index} className="flex items-center space-x-2 mb-1">
                <IconComponent 
                  className="h-3 w-3" 
                  style={{ color: config.color }}
                />
                <span className="text-gray-700 text-xs">
                  {config.name}: <span className="font-semibold text-gray-800">{entry.value}</span>
                </span>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
  return null;
};

// Componente principal da aba Reincidência e Risco
export function RecurrenceRiskIndicators() {
  const [activeTab, setActiveTab] = React.useState('identificadores');
  const [raioProximidade, setRaioProximidade] = React.useState(500);
  const [similaridadeSensibilidade, setSimilaridadeSensibilidade] = React.useState(0.90);
  const [viewMode, setViewMode] = React.useState<'map' | 'list'>('list');
  
  return (
    <div className="space-y-8">
      {/* 🧱 SEÇÃO 1 — VISÃO GERAL DE REINCIDÊNCIA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Taxa de Reincidência Geral */}
        <Card className="bg-white border-0 rounded-xl relative overflow-hidden" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFA726] via-[#FB8C00] to-[#F57C00]"></div>
          <CardHeader style={{ padding: '20px' }}>
            <div className="flex items-center justify-between mb-2">
              <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
                Taxa de Reincidência Geral
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-[#FB8C00] to-[#F57C00] rounded-xl flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
            </div>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Baseado em CPF, telefone e e-mail
            </CardDescription>
          </CardHeader>
          <CardContent style={{ padding: '0 20px 20px' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#FB8C00', fontFamily: 'Inter, sans-serif' }}>
              {advancedRecurrenceData.taxaReincidencia}%
            </div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                {advancedRecurrenceData.trendReincidencia} vs. mês anterior
              </span>
            </div>
            <Badge className="bg-gradient-to-r from-[#FB8C00] to-[#F57C00] text-white border-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              ⚠️ Monitoramento Ativo
            </Badge>
          </CardContent>
        </Card>

        {/* Card 2: Casos em Monitoramento */}
        <Card className="bg-white border-0 rounded-xl relative overflow-hidden" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-500"></div>
          <CardHeader style={{ padding: '20px' }}>
            <div className="flex items-center justify-between mb-2">
              <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
                Casos em Monitoramento
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
            </div>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Com múltiplos identificadores relacionados
            </CardDescription>
          </CardHeader>
          <CardContent style={{ padding: '0 20px 20px' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#E53935', fontFamily: 'Inter, sans-serif' }}>
              {advancedRecurrenceData.suspeitaFraude}
            </div>
            <div className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              casos suspeitos identificados
            </div>
            <Badge className="bg-red-500 text-white border-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              🚨 Alto Risco
            </Badge>
          </CardContent>
        </Card>

        {/* Card 3: Clusters Geográficos */}
        <Card className="bg-white border-0 rounded-xl relative overflow-hidden" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <CardHeader style={{ padding: '20px' }}>
            <div className="flex items-center justify-between mb-2">
              <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
                Clusters Geográficos
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
            </div>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Agrupamento de contatos em áreas próximas (raio 500m)
            </CardDescription>
          </CardHeader>
          <CardContent style={{ padding: '0 20px 20px' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#0984E3', fontFamily: 'Inter, sans-serif' }}>
              {advancedRecurrenceData.clustersGeograficos.length}
            </div>
            <div className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              regiões em atenção detectadas
            </div>
            <Badge className="bg-blue-500 text-white border-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              📍 Geolocalizado
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* 🧭 SEÇÃO 2 — ANÁLISE MULTIDIMENSIONAL (Tabs) */}
      <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
        <CardHeader style={{ padding: '24px', paddingBottom: '16px' }}>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Análise Multidimensional de Reincidência
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Explore diferentes dimensões de análise para identificar padrões suspeitos
          </CardDescription>
        </CardHeader>
        
        <CardContent style={{ padding: '24px', paddingTop: '0' }}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6" style={{ backgroundColor: '#F8F9FB' }}>
              <TabsTrigger value="identificadores" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <FileUser className="h-4 w-4" />
                <span className="hidden sm:inline">Identificadores</span>
              </TabsTrigger>
              <TabsTrigger value="proximidade" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Map className="h-4 w-4" />
                <span className="hidden sm:inline">Proximidade Geográfica</span>
              </TabsTrigger>
              <TabsTrigger value="nomes" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <UserCheck className="h-4 w-4" />
                <span className="hidden sm:inline">Nomes Similares</span>
              </TabsTrigger>
              <TabsTrigger value="cidades" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Cidades</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Tab 1: Identificadores */}
            <TabsContent value="identificadores" className="space-y-6">
              {/* 3 cards horizontais com ícones */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-white rounded-xl border-2 transition-all duration-200 hover:shadow-md" style={{ borderColor: '#E53935' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E5393515' }}>
                      <span className="text-xl">📄</span>
                    </div>
                    <Badge className="text-white border-0" style={{ backgroundColor: '#E53935', fontFamily: 'Inter, sans-serif' }}>
                      CPF / E-mail
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#E53935', fontFamily: 'Inter, sans-serif' }}>
                    {advancedRecurrenceData.identificadores.cpfEmail.entidades}
                  </div>
                  <div className="text-xs text-[#666] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    reincidências ({advancedRecurrenceData.identificadores.cpfEmail.percentual}% do total)
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <TrendingUp className="h-3 w-3 text-red-600" />
                    <span className="text-red-600">{advancedRecurrenceData.identificadores.cpfEmail.variacao} vs. mês anterior</span>
                  </div>
                </div>
                
                <div className="p-5 bg-white rounded-xl border-2 transition-all duration-200 hover:shadow-md" style={{ borderColor: '#FB8C00' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FB8C0015' }}>
                      <span className="text-xl">📞</span>
                    </div>
                    <Badge className="text-white border-0" style={{ backgroundColor: '#FB8C00', fontFamily: 'Inter, sans-serif' }}>
                      Telefone
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#FB8C00', fontFamily: 'Inter, sans-serif' }}>
                    {advancedRecurrenceData.identificadores.telefone.entidades}
                  </div>
                  <div className="text-xs text-[#666] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    reincidências ({advancedRecurrenceData.identificadores.telefone.percentual}% do total)
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <TrendingUp className="h-3 w-3 text-orange-600" />
                    <span className="text-orange-600">{advancedRecurrenceData.identificadores.telefone.variacao} vs. mês anterior</span>
                  </div>
                </div>
                
                <div className="p-5 bg-white rounded-xl border-2 transition-all duration-200 hover:shadow-md" style={{ borderColor: '#00B894' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00B89415' }}>
                      <span className="text-xl">🏠</span>
                    </div>
                    <Badge className="text-white border-0" style={{ backgroundColor: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                      Endereço
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                    {advancedRecurrenceData.identificadores.enderecoExato.entidades}
                  </div>
                  <div className="text-xs text-[#666] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    reincidências ({advancedRecurrenceData.identificadores.enderecoExato.percentual}% do total)
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <TrendingDown className="h-3 w-3 text-green-600" />
                    <span className="text-green-600">{advancedRecurrenceData.identificadores.enderecoExato.variacao} vs. mês anterior</span>
                  </div>
                </div>
              </div>
              
              {/* Gráfico de barras horizontais */}
              <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#EAEAEA' }}>
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Distribuição Percentual por Identificador
                </h3>
                <div className="space-y-4">
                  {[
                    { tipo: 'Telefone', percentual: advancedRecurrenceData.identificadores.telefone.percentual, cor: '#FB8C00' },
                    { tipo: 'CPF/E-mail', percentual: advancedRecurrenceData.identificadores.cpfEmail.percentual, cor: '#E53935' },
                    { tipo: 'Endereço', percentual: advancedRecurrenceData.identificadores.enderecoExato.percentual, cor: '#00B894' }
                  ].map(item => (
                    <div key={item.tipo}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                          {item.tipo}
                        </span>
                        <span className="text-sm font-semibold" style={{ color: item.cor, fontFamily: 'Inter, sans-serif' }}>
                          {item.percentual}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-500"
                          style={{ width: `${item.percentual}%`, backgroundColor: item.cor }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Top 5 Entidades Reincidentes */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                    Top 5 Entidades Reincidentes
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Info className="h-4 w-4" />
                    <span>Entidade = agrupamento por identificador dominante</span>
                  </div>
                </div>
                
                {/* Tabela */}
                <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#EAEAEA' }}>
                  <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b" style={{ borderColor: '#EAEAEA' }}>
                    <div className="col-span-4 text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                      Nome / Identificador
                    </div>
                    <div className="col-span-3 text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                      Tipo
                    </div>
                    <div className="col-span-3 text-center text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                      Qtde Contatos
                    </div>
                    <div className="col-span-2 text-center text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                      Risco
                    </div>
                  </div>
                  
                  {advancedRecurrenceData.topEntidadesReincidentes.map((entidade, index) => {
                    const isHighRisk = entidade.risco === 'alto';
                    const isMediumRisk = entidade.risco === 'medio';
                    
                    return (
                      <div 
                        key={entidade.id}
                        className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50/50 transition-all duration-200"
                        style={{ borderColor: '#EAEAEA' }}
                      >
                        <div className="col-span-4">
                          <div className="font-medium text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                            {entidade.nome}
                          </div>
                          <div className="text-xs mt-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                            {entidade.valor}
                          </div>
                        </div>
                        <div className="col-span-3 flex items-center">
                          <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {entidade.identificadorDominante}
                          </Badge>
                        </div>
                        <div className="col-span-3 flex items-center justify-center">
                          <div className={`text-xl font-bold ${
                            isHighRisk ? 'text-red-600' : isMediumRisk ? 'text-yellow-600' : 'text-green-600'
                          }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {entidade.contatos}
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          {isHighRisk && (
                            <Badge className="bg-red-500 text-white text-xs px-2 py-1 border-0">
                              🔴 Alto
                            </Badge>
                          )}
                          {isMediumRisk && (
                            <Badge className="bg-yellow-500 text-white text-xs px-2 py-1 border-0">
                              🟠 Médio
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            
            {/* Tab 2: Proximidade Geográfica */}
            <TabsContent value="proximidade" className="space-y-6">
              {/* Controles */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                      Raio de Proximidade:
                    </span>
                    <Badge style={{ fontFamily: 'Inter, sans-serif' }}>{raioProximidade}m</Badge>
                  </div>
                  <div className="flex gap-2">
                    {[100, 250, 500, 1000].map(value => (
                      <button
                        key={value}
                        onClick={() => setRaioProximidade(value)}
                        className={`px-3 py-1 text-xs rounded-md transition-all duration-200 ${
                          raioProximidade === value 
                            ? 'bg-[#0984E3] text-white' 
                            : 'bg-white text-[#666] hover:bg-gray-100'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {value}m
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('map')}
                    className={`px-3 py-1.5 text-xs rounded-md transition-all duration-200 flex items-center gap-2 ${
                      viewMode === 'map' 
                        ? 'bg-[#0984E3] text-white' 
                        : 'bg-white text-[#666] hover:bg-gray-100'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Map className="h-4 w-4" />
                    Mapa
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1.5 text-xs rounded-md transition-all duration-200 flex items-center gap-2 ${
                      viewMode === 'list' 
                        ? 'bg-[#0984E3] text-white' 
                        : 'bg-white text-[#666] hover:bg-gray-100'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <FileText className="h-4 w-4" />
                    Lista
                  </button>
                </div>
              </div>
              
              {/* Modo Mapa */}
              {viewMode === 'map' && (
                <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-[#0984E3]" />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                    Visualização de Mapa
                  </h3>
                  <p className="text-sm text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Integração com mapa interativo mostrando clusters geográficos com heatmap
                  </p>
                  <Badge className="mt-4 bg-blue-500 text-white">
                    Componente de Mapa em Desenvolvimento
                  </Badge>
                </div>
              )}
              
              {/* Modo Lista - Top Clusters */}
              {viewMode === 'list' && (
                <div>
                  <h3 className="text-sm font-semibold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                    Top Clusters Suspeitos por Cidade/Bairro
                  </h3>
                  
                  {/* Tabela de clusters */}
                  <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#EAEAEA' }}>
                    <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b" style={{ borderColor: '#EAEAEA' }}>
                      <div className="col-span-3 text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                        Localização
                      </div>
                      <div className="col-span-2 text-center text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                        Nº Clientes
                      </div>
                      <div className="col-span-2 text-center text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                        Nº Contatos
                      </div>
                      <div className="col-span-2 text-center text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                        Risco
                      </div>
                      <div className="col-span-3 text-xs font-semibold uppercase tracking-wide" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                        Principal Motivo
                      </div>
                    </div>
                    
                    {advancedRecurrenceData.clustersGeograficos.map((cluster) => {
                      const riskColors = {
                        alto: { bg: 'bg-red-50', text: 'text-red-700', badge: 'bg-red-500' },
                        medio: { bg: 'bg-yellow-50', text: 'text-yellow-700', badge: 'bg-yellow-500' },
                        baixo: { bg: 'bg-green-50', text: 'text-green-700', badge: 'bg-green-500' }
                      };
                      const colors = riskColors[cluster.risco];
                      
                      return (
                        <div 
                          key={cluster.id}
                          className={`grid grid-cols-12 gap-4 p-4 border-b hover:${colors.bg} transition-all duration-200`}
                          style={{ borderColor: '#EAEAEA' }}
                        >
                          <div className="col-span-3">
                            <div className="font-medium text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                              {cluster.local}
                            </div>
                            <div className="text-xs mt-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                              CEP: {cluster.cep} • Raio: {cluster.raio}m
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center justify-center">
                            <div className={`text-lg font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cluster.clientes}
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center justify-center">
                            <div className={`text-lg font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cluster.contatos}
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center justify-center">
                            <Badge className={`${colors.badge} text-white text-xs px-2 py-1 border-0`}>
                              {cluster.risco === 'alto' ? '🔴' : cluster.risco === 'medio' ? '🟠' : '🟢'} {cluster.risco.toUpperCase()}
                            </Badge>
                          </div>
                          <div className="col-span-3 flex items-center">
                            <span className="text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                              {cluster.motivosPrincipais[0]}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </TabsContent>
            
            {/* Tab 3: Nomes Similares */}
            <TabsContent value="nomes" className="space-y-6">
              {/* Explicativo e Controle de Sensibilidade */}
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                      Agrupamento por Similaridade (Fuzzy Match)
                    </h4>
                    <p className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Detecta variações fonéticas e ortográficas de nomes. Exemplos: "Ana Beatriz" ↔ "Ana B. Beatriz", 
                      variações com diacríticos, abreviações e iniciais.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium whitespace-nowrap" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                    Sensibilidade:
                  </span>
                  <div className="flex-1">
                    <Slider 
                      value={[similaridadeSensibilidade * 100]} 
                      onValueChange={(value) => setSimilaridadeSensibilidade(value[0] / 100)}
                      min={80}
                      max={95}
                      step={1}
                      className="flex-1"
                    />
                  </div>
                  <Badge style={{ fontFamily: 'Inter, sans-serif' }}>
                    {(similaridadeSensibilidade * 100).toFixed(0)}%
                  </Badge>
                </div>
              </div>
              
              {/* Tabela agrupada de nomes similares */}
              <div>
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Grupos de Nomes Similares Detectados
                </h3>
                
                <div className="space-y-3">
                  {advancedRecurrenceData.gruposNomesSimilares
                    .filter(grupo => grupo.variacoes.some(v => v.similaridade >= similaridadeSensibilidade))
                    .map((grupo, index) => {
                      const riskColors = {
                        alto: 'border-red-300 bg-red-50',
                        medio: 'border-yellow-300 bg-yellow-50',
                        baixo: 'border-green-300 bg-green-50'
                      };
                      
                      return (
                        <div 
                          key={grupo.id}
                          className={`p-4 rounded-xl border-2 ${riskColors[grupo.risco]}`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-semibold" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                {grupo.nomeReferencia}
                              </div>
                              <div className="text-xs text-[#666] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {grupo.variacoes.length} variações • {grupo.totalContatos} contatos totais
                              </div>
                            </div>
                            <Badge className={`${
                              grupo.risco === 'alto' ? 'bg-red-500' :
                              grupo.risco === 'medio' ? 'bg-yellow-500' :
                              'bg-green-500'
                            } text-white border-0`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {grupo.risco.toUpperCase()}
                            </Badge>
                          </div>
                          
                          <div className="p-3 bg-white rounded-lg border mb-3" style={{ borderColor: '#EAEAEA' }}>
                            <div className="text-xs font-semibold mb-1" style={{ color: '#E53935', fontFamily: 'Inter, sans-serif' }}>
                              ⚠️ Suspeita Identificada:
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {grupo.suspeita}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {grupo.variacoes
                              .filter(v => v.similaridade >= similaridadeSensibilidade)
                              .map((variacao, vIndex) => (
                                <div 
                                  key={vIndex}
                                  className="flex items-center justify-between p-3 bg-white rounded-lg border"
                                  style={{ borderColor: '#EAEAEA' }}
                                >
                                  <div className="flex-1">
                                    <div className="font-medium text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                      {variacao.nome}
                                    </div>
                                    <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                      CPF: {variacao.cpf}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="text-center">
                                      <div className="text-sm font-bold text-[#8b5cf6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {(variacao.similaridade * 100).toFixed(0)}%
                                      </div>
                                      <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>match</div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-sm font-bold text-[#0984E3]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {variacao.contatos}
                                      </div>
                                      <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>contatos</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </TabsContent>
            
            {/* Tab 4: Cidades */}
            <TabsContent value="cidades" className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Cidades com Maior Concentração de Reincidência
                </h3>
                
                <div className="space-y-3">
                  {advancedRecurrenceData.cidadesConcentracao.map((cidade, index) => {
                    const riskColors = {
                      alto: { gradient: 'from-red-50 to-rose-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-500' },
                      medio: { gradient: 'from-yellow-50 to-amber-50', border: 'border-yellow-200', text: 'text-yellow-700', badge: 'bg-yellow-500' },
                      baixo: { gradient: 'from-green-50 to-emerald-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-500' }
                    };
                    const colors = riskColors[cidade.risco];
                    
                    return (
                      <div 
                        key={`${cidade.cidade}-${cidade.estado}`}
                        className={`p-5 bg-gradient-to-r ${colors.gradient} rounded-xl border ${colors.border}`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              cidade.risco === 'alto' ? 'bg-red-100 text-red-600' :
                              cidade.risco === 'medio' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-green-100 text-green-600'
                            }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {index + 1}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <Building2 className={`h-5 w-5 ${colors.text}`} />
                                <span className="font-semibold text-lg" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                  {cidade.cidade} / {cidade.estado}
                                </span>
                              </div>
                              <div className="text-xs text-[#666] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Bairros destaque: {cidade.bairrosDestaque.join(', ')}
                              </div>
                            </div>
                          </div>
                          <Badge className={`${colors.badge} text-white border-0`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {cidade.risco.toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                          <div className="text-center p-3 bg-white/60 rounded-lg">
                            <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cidade.totalContatos}
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Total Contatos</div>
                          </div>
                          <div className="text-center p-3 bg-white/60 rounded-lg">
                            <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cidade.clientesUnicos}
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Clientes Únicos</div>
                          </div>
                          <div className="text-center p-3 bg-white/60 rounded-lg">
                            <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cidade.taxaReincidencia}%
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Taxa Reincidência</div>
                          </div>
                          <div className="text-center p-3 bg-white/60 rounded-lg">
                            <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cidade.clusters}
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Clusters</div>
                          </div>
                          <div className="p-3 bg-white/60 rounded-lg">
                            <div className="text-xs text-[#666] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Motivo Principal:
                            </div>
                            <Badge className="bg-blue-500 text-white text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cidade.motivoPrincipal}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 🧮 SEÇÃO 3 — INSIGHTS E ALERTAS */}
      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
        <CardHeader style={{ padding: '20px' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
                Impacto e Ações Recomendadas
              </CardTitle>
              <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                Insights baseados em dados para tomada de decisão
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent style={{ padding: '20px' }}>
          <ul className="space-y-3 text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Reincidência indica possíveis problemas recorrentes:</strong> Produtos e motivos de contato que se repetem merecem análise de causa raiz para prevenção.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Análise geográfica revela padrões regionais:</strong> Clusters concentrados podem indicar problemas logísticos, de distribuição ou regionalizados.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Oportunidade para fidelização:</strong> Clientes reincidentes demonstram engajamento - investir em relacionamento pode converter em promotores.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Detecção de fraude e uso inadequado:</strong> Padrões de identificadores múltiplos e nomes similares podem indicar tentativas de fraude ou uso não autorizado.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Componente de Análise Avançada de Reincidência e Risco (para uso interno na aba Operacional - REMOVIDO)
function AdvancedRecurrenceRiskAnalysis() {
  const [activeTab, setActiveTab] = React.useState('identificadores');
  const [raioProximidade, setRaioProximidade] = React.useState(500);
  const [similaridadeSensibilidade, setSimilaridadeSensibilidade] = React.useState(0.90);
  const [viewMode, setViewMode] = React.useState<'map' | 'list'>('list');
  
  return (
    <Card 
      className="bg-white border-0 rounded-xl relative overflow-hidden" 
      style={{ 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)', 
        animation: 'fadeInUp 0.6s ease-out 0.7s both',
        border: '1px solid #EAEAEA'
      }}
    >
      {/* Barra de destaque superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFA726] via-[#FB8C00] to-[#F57C00]"></div>
      
      {/* NÍVEL 1 — Cabeçalho-resumo */}
      <CardHeader style={{ padding: '24px', paddingBottom: '16px' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-xl flex items-center justify-center shadow-sm">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
                Análise de Reincidência e Risco
              </CardTitle>
              <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                Detecção de padrões por identificadores, proximidade e nomes similares
              </CardDescription>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Info className="h-3 w-3 mr-2" />
            Ver regras de risco
          </Button>
        </div>
        
        {/* KPIs em mini-cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* KPI 1: Taxa de Reincidência */}
          <div className="p-4 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl border" style={{ borderColor: 'rgba(251, 140, 0, 0.2)' }}>
            <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
              Taxa de Reincidência
            </div>
            <div className="text-2xl font-bold" style={{ color: '#FB8C00', fontFamily: 'Inter, sans-serif' }}>
              {advancedRecurrenceData.taxaReincidencia}%
            </div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-xs text-green-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                {advancedRecurrenceData.trendReincidencia}
              </span>
            </div>
          </div>
          
          {/* KPI 2: Suspeita de Fraude */}
          <div className="p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-200">
            <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
              Suspeita de Fraude
            </div>
            <div className="text-2xl font-bold" style={{ color: '#E53935', fontFamily: 'Inter, sans-serif' }}>
              {advancedRecurrenceData.suspeitaFraude}
            </div>
            <Badge className="mt-1 bg-red-500 text-white text-xs px-2 py-0.5 border-0">
              🚨 Atenção
            </Badge>
          </div>
          
          {/* KPI 3: Clusters Geográficos */}
          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
              Clusters Geográficos
            </div>
            <div className="text-2xl font-bold" style={{ color: '#0984E3', fontFamily: 'Inter, sans-serif' }}>
              {advancedRecurrenceData.clustersGeograficos.length}
            </div>
            <div className="text-xs text-[#666] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              áreas detectadas
            </div>
          </div>
          
          {/* KPI 4: Grupos de Nomes Similares */}
          <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
            <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
              Nomes Similares
            </div>
            <div className="text-2xl font-bold" style={{ color: '#8b5cf6', fontFamily: 'Inter, sans-serif' }}>
              {advancedRecurrenceData.gruposNomesSimilares.length}
            </div>
            <div className="text-xs text-[#666] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              grupos identificados
            </div>
          </div>
        </div>
      </CardHeader>
      
      {/* NÍVEL 2 — Conteúdo tabulado */}
      <CardContent style={{ padding: '24px', paddingTop: '0' }}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6" style={{ backgroundColor: '#F8F9FB' }}>
            <TabsTrigger value="identificadores" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <FileUser className="h-4 w-4" />
              <span className="hidden sm:inline">Identificadores</span>
            </TabsTrigger>
            <TabsTrigger value="proximidade" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">Proximidade Geográfica</span>
            </TabsTrigger>
            <TabsTrigger value="nomes" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <UserCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Nomes Similares</span>
            </TabsTrigger>
            <TabsTrigger value="cidades" className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Cidades</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Tab 1: Identificadores */}
          <TabsContent value="identificadores" className="space-y-6">
            {/* 3 cards horizontais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-white rounded-xl border-2 transition-all duration-200 hover:shadow-md" style={{ borderColor: '#E53935' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E5393515' }}>
                    <span className="text-xl">📄</span>
                  </div>
                  <Badge className="text-white border-0" style={{ backgroundColor: '#E53935', fontFamily: 'Inter, sans-serif' }}>
                    CPF / E-mail
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#E53935', fontFamily: 'Inter, sans-serif' }}>
                  {advancedRecurrenceData.identificadores.cpfEmail.entidades}
                </div>
                <div className="text-xs text-[#666] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  entidades ({advancedRecurrenceData.identificadores.cpfEmail.percentual}% do total)
                </div>
                <div className="flex items-center gap-1 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <TrendingUp className="h-3 w-3 text-red-600" />
                  <span className="text-red-600">{advancedRecurrenceData.identificadores.cpfEmail.variacao} vs. mês anterior</span>
                </div>
              </div>
              
              <div className="p-5 bg-white rounded-xl border-2 transition-all duration-200 hover:shadow-md" style={{ borderColor: '#FB8C00' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FB8C0015' }}>
                    <span className="text-xl">📞</span>
                  </div>
                  <Badge className="text-white border-0" style={{ backgroundColor: '#FB8C00', fontFamily: 'Inter, sans-serif' }}>
                    Telefone
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#FB8C00', fontFamily: 'Inter, sans-serif' }}>
                  {advancedRecurrenceData.identificadores.telefone.entidades}
                </div>
                <div className="text-xs text-[#666] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  entidades ({advancedRecurrenceData.identificadores.telefone.percentual}% do total)
                </div>
                <div className="flex items-center gap-1 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <TrendingUp className="h-3 w-3 text-orange-600" />
                  <span className="text-orange-600">{advancedRecurrenceData.identificadores.telefone.variacao} vs. mês anterior</span>
                </div>
              </div>
              
              <div className="p-5 bg-white rounded-xl border-2 transition-all duration-200 hover:shadow-md" style={{ borderColor: '#00B894' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00B89415' }}>
                    <span className="text-xl">🏠</span>
                  </div>
                  <Badge className="text-white border-0" style={{ backgroundColor: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                    Endereço Exato
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                  {advancedRecurrenceData.identificadores.enderecoExato.entidades}
                </div>
                <div className="text-xs text-[#666] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  entidades ({advancedRecurrenceData.identificadores.enderecoExato.percentual}% do total)
                </div>
                <div className="flex items-center gap-1 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <TrendingDown className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">{advancedRecurrenceData.identificadores.enderecoExato.variacao} vs. mês anterior</span>
                </div>
              </div>
            </div>
            
            {/* Top 5 Entidades Reincidentes */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Top 5 Entidades Reincidentes
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Info className="h-4 w-4" />
                  <span>Entidade = agrupamento por identificador dominante</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {advancedRecurrenceData.topEntidadesReincidentes.map((entidade, index) => {
                  const isHighRisk = entidade.risco === 'alto';
                  const isMediumRisk = entidade.risco === 'medio';
                  
                  return (
                    <div 
                      key={entidade.id}
                      className="group p-4 bg-white rounded-xl border hover:shadow-md transition-all duration-200 cursor-pointer relative"
                      style={{ borderColor: '#EAEAEA' }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            isHighRisk ? 'bg-red-100 text-red-600' : isMediumRisk ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
                          }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                {entidade.nome}
                              </span>
                              <Badge className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                                ID: {entidade.id}
                              </Badge>
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {entidade.identificadorDominante}: {entidade.valor}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${
                              isHighRisk ? 'text-red-600' : isMediumRisk ? 'text-yellow-600' : 'text-green-600'
                            }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {entidade.contatos}
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>contatos</div>
                          </div>
                          
                          {isHighRisk && (
                            <Badge className="bg-red-500 text-white border-0">🔴 Alto</Badge>
                          )}
                          {isMediumRisk && (
                            <Badge className="bg-yellow-500 text-white border-0">🟠 Médio</Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* Tooltip on Hover */}
                      <div 
                        className="absolute left-0 top-full mt-2 p-4 bg-white rounded-xl shadow-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20"
                        style={{ borderColor: '#EAEAEA', fontFamily: 'Inter, sans-serif', minWidth: '320px' }}
                      >
                        <div className="text-xs font-semibold mb-3" style={{ color: '#333' }}>
                          Timeline e Histórico
                        </div>
                        <div className="space-y-2 text-xs" style={{ color: '#666' }}>
                          <div className="flex justify-between">
                            <span>Primeiro contato:</span>
                            <span className="font-medium" style={{ color: '#333' }}>
                              {new Date(entidade.primeiroContato).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Último contato:</span>
                            <span className="font-medium" style={{ color: '#333' }}>
                              {new Date(entidade.ultimoContato).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <div className="pt-2 border-t" style={{ borderColor: '#EAEAEA' }}>
                            <div className="mb-1 font-medium" style={{ color: '#333' }}>Motivos:</div>
                            <div className="flex flex-wrap gap-1">
                              {entidade.motivos.map((motivo, i) => (
                                <Badge key={i} className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                  {motivo}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="pt-2 border-t" style={{ borderColor: '#EAEAEA' }}>
                            <div className="mb-1 font-medium" style={{ color: '#333' }}>Produtos:</div>
                            <div className="text-xs text-[#666]">
                              {entidade.produtos.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
          
          {/* Tab 2: Proximidade Geográfica */}
          <TabsContent value="proximidade" className="space-y-6">
            {/* Controles */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                    Raio de Proximidade:
                  </span>
                  <Badge style={{ fontFamily: 'Inter, sans-serif' }}>{raioProximidade}m</Badge>
                </div>
                <div className="flex gap-2">
                  {[100, 250, 500, 1000].map(value => (
                    <button
                      key={value}
                      onClick={() => setRaioProximidade(value)}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-200 ${
                        raioProximidade === value 
                          ? 'bg-[#0984E3] text-white' 
                          : 'bg-white text-[#666] hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {value}m
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-3 py-1.5 text-xs rounded-md transition-all duration-200 flex items-center gap-2 ${
                    viewMode === 'map' 
                      ? 'bg-[#0984E3] text-white' 
                      : 'bg-white text-[#666] hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Map className="h-4 w-4" />
                  Mapa
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1.5 text-xs rounded-md transition-all duration-200 flex items-center gap-2 ${
                    viewMode === 'list' 
                      ? 'bg-[#0984E3] text-white' 
                      : 'bg-white text-[#666] hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <FileText className="h-4 w-4" />
                  Lista
                </button>
              </div>
            </div>
            
            {/* Modo Mapa */}
            {viewMode === 'map' && (
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-[#0984E3]" />
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Visualização de Mapa
                </h3>
                <p className="text-sm text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Integração com mapa interativo mostrando clusters geográficos
                </p>
                <Badge className="mt-4 bg-blue-500 text-white">
                  Componente de Mapa em Desenvolvimento
                </Badge>
              </div>
            )}
            
            {/* Modo Lista - Top Clusters */}
            {viewMode === 'list' && (
              <div>
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Top Clusters Suspeitos (Raio: {raioProximidade}m)
                </h3>
                
                <div className="space-y-3">
                  {advancedRecurrenceData.clustersGeograficos.map((cluster, index) => {
                    const riskColors = {
                      alto: { bg: 'from-red-50 to-rose-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-500' },
                      medio: { bg: 'from-yellow-50 to-amber-50', border: 'border-yellow-200', text: 'text-yellow-700', badge: 'bg-yellow-500' },
                      baixo: { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-500' }
                    };
                    const colors = riskColors[cluster.risco];
                    
                    return (
                      <div 
                        key={cluster.id}
                        className={`p-4 bg-gradient-to-r ${colors.bg} rounded-xl border ${colors.border}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className={`h-5 w-5 ${colors.text}`} />
                              <span className="font-semibold" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                {cluster.local}
                              </span>
                              <Badge className={`${colors.badge} text-white border-0 text-xs`}>
                                {cluster.risco.toUpperCase()}
                              </Badge>
                            </div>
                            <div className="text-xs text-[#666] space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <div>CEP Base: {cluster.cep} • Raio: {cluster.raio}m</div>
                              <div>Bairros: {cluster.bairrosDestaque?.join(', ')}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center p-2 bg-white/50 rounded-lg">
                            <div className={`text-xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cluster.clientes}
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>clientes</div>
                          </div>
                          <div className="text-center p-2 bg-white/50 rounded-lg">
                            <div className={`text-xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {cluster.contatos}
                            </div>
                            <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>contatos</div>
                          </div>
                          <div className="col-span-2 p-2 bg-white/50 rounded-lg">
                            <div className="text-xs text-[#666] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Principais Motivos:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {cluster.motivosPrincipais.map((motivo, i) => (
                                <Badge key={i} className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                  {motivo}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </TabsContent>
          
          {/* Tab 3: Nomes Similares */}
          <TabsContent value="nomes" className="space-y-6">
            {/* Explicativo e Controle de Sensibilidade */}
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-start gap-3 mb-4">
                <Info className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold mb-1" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                    Agrupamento por Similaridade (Fuzzy Match)
                  </h4>
                  <p className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Detecta variações fonéticas e ortográficas de nomes. Exemplos: "Ana Beatriz" ↔ "Ana B. Beatriz", 
                    variações com diacríticos, abreviações e iniciais.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium whitespace-nowrap" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Sensibilidade:
                </span>
                <div className="flex-1">
                  <Slider 
                    value={[similaridadeSensibilidade * 100]} 
                    onValueChange={(value) => setSimilaridadeSensibilidade(value[0] / 100)}
                    min={80}
                    max={95}
                    step={1}
                    className="flex-1"
                  />
                </div>
                <Badge style={{ fontFamily: 'Inter, sans-serif' }}>
                  {(similaridadeSensibilidade * 100).toFixed(0)}%
                </Badge>
              </div>
            </div>
            
            {/* Lista de Grupos (Accordion) */}
            <div>
              <h3 className="text-sm font-semibold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                Grupos de Nomes Similares Detectados
              </h3>
              
              <Accordion type="single" collapsible className="space-y-2">
                {advancedRecurrenceData.gruposNomesSimilares
                  .filter(grupo => grupo.variacoes.some(v => v.similaridade >= similaridadeSensibilidade))
                  .map((grupo, index) => {
                    const riskColors = {
                      alto: 'border-red-300 bg-red-50',
                      medio: 'border-yellow-300 bg-yellow-50',
                      baixo: 'border-green-300 bg-green-50'
                    };
                    
                    return (
                      <AccordionItem 
                        key={grupo.id} 
                        value={grupo.id}
                        className={`border-2 rounded-xl overflow-hidden ${riskColors[grupo.risco]}`}
                      >
                        <AccordionTrigger className="px-4 py-3 hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                grupo.risco === 'alto' ? 'bg-red-100 text-red-600' :
                                grupo.risco === 'medio' ? 'bg-yellow-100 text-yellow-600' :
                                'bg-green-100 text-green-600'
                              }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                                {index + 1}
                              </div>
                              <div className="text-left">
                                <div className="font-semibold" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                  {grupo.nomeReferencia}
                                </div>
                                <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {grupo.variacoes.length} variações • {grupo.totalContatos} contatos totais
                                </div>
                              </div>
                            </div>
                            <Badge className={`${
                              grupo.risco === 'alto' ? 'bg-red-500' :
                              grupo.risco === 'medio' ? 'bg-yellow-500' :
                              'bg-green-500'
                            } text-white border-0`}>
                              {grupo.risco.toUpperCase()}
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-3 mt-2">
                            <div className="p-3 bg-white rounded-lg border" style={{ borderColor: '#EAEAEA' }}>
                              <div className="text-xs font-semibold mb-1" style={{ color: '#E53935', fontFamily: 'Inter, sans-serif' }}>
                                ⚠️ Suspeita Identificada:
                              </div>
                              <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {grupo.suspeita}
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              {grupo.variacoes
                                .filter(v => v.similaridade >= similaridadeSensibilidade)
                                .map((variacao, vIndex) => (
                                  <div 
                                    key={vIndex}
                                    className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-sm transition-all duration-200"
                                    style={{ borderColor: '#EAEAEA' }}
                                  >
                                    <div className="flex-1">
                                      <div className="font-medium text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                        {variacao.nome}
                                      </div>
                                      <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        CPF: {variacao.cpf}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <div className="text-center">
                                        <div className="text-sm font-bold text-[#8b5cf6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                          {(variacao.similaridade * 100).toFixed(0)}%
                                        </div>
                                        <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>match</div>
                                      </div>
                                      <div className="text-center">
                                        <div className="text-sm font-bold text-[#0984E3]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                          {variacao.contatos}
                                        </div>
                                        <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>contatos</div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
              </Accordion>
            </div>
          </TabsContent>
          
          {/* Tab 4: Cidades */}
          <TabsContent value="cidades" className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                Cidades com Maior Concentração de Reincidência
              </h3>
              
              <div className="space-y-3">
                {advancedRecurrenceData.cidadesConcentracao.map((cidade, index) => {
                  const riskColors = {
                    alto: { gradient: 'from-red-50 to-rose-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-500' },
                    medio: { gradient: 'from-yellow-50 to-amber-50', border: 'border-yellow-200', text: 'text-yellow-700', badge: 'bg-yellow-500' },
                    baixo: { gradient: 'from-green-50 to-emerald-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-500' }
                  };
                  const colors = riskColors[cidade.risco];
                  
                  return (
                    <div 
                      key={`${cidade.cidade}-${cidade.estado}`}
                      className={`p-5 bg-gradient-to-r ${colors.gradient} rounded-xl border ${colors.border}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            cidade.risco === 'alto' ? 'bg-red-100 text-red-600' :
                            cidade.risco === 'medio' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-green-100 text-green-600'
                          }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <Building2 className={`h-5 w-5 ${colors.text}`} />
                              <span className="font-semibold text-lg" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                {cidade.cidade} / {cidade.estado}
                              </span>
                            </div>
                            <div className="text-xs text-[#666] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Bairros destaque: {cidade.bairrosDestaque.join(', ')}
                            </div>
                          </div>
                        </div>
                        <Badge className={`${colors.badge} text-white border-0`}>
                          {cidade.risco.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        <div className="text-center p-3 bg-white/60 rounded-lg">
                          <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {cidade.totalContatos}
                          </div>
                          <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Total Contatos</div>
                        </div>
                        <div className="text-center p-3 bg-white/60 rounded-lg">
                          <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {cidade.clientesUnicos}
                          </div>
                          <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Clientes Únicos</div>
                        </div>
                        <div className="text-center p-3 bg-white/60 rounded-lg">
                          <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {cidade.taxaReincidencia}%
                          </div>
                          <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Taxa Reincidência</div>
                        </div>
                        <div className="text-center p-3 bg-white/60 rounded-lg">
                          <div className={`text-2xl font-bold ${colors.text}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                            {cidade.clusters}
                          </div>
                          <div className="text-xs text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Clusters</div>
                        </div>
                        <div className="p-3 bg-white/60 rounded-lg">
                          <div className="text-xs text-[#666] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Motivo Principal:
                          </div>
                          <Badge className="bg-blue-500 text-white text-xs">
                            {cidade.motivoPrincipal}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export function OperationalIndicators() {
  const [showAllProducts, setShowAllProducts] = React.useState(false);
  const [socialMediaExpanded, setSocialMediaExpanded] = React.useState(false);
  
  return (
    <div className="space-y-10" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
      
      {/* 1️⃣ SEÇÃO: VOLUME E EFICIÊNCIA */}
      <div className="space-y-6">
        {/* Título da Seção */}
        <div className="flex items-center space-x-3">
          <div className="h-1 w-1 bg-[#0984E3] rounded-full"></div>
          <h3 className="text-[#0984E3] tracking-wide uppercase" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
            Volume e Eficiência
          </h3>
          <div className="flex-1 h-px bg-[#F3F4F6]"></div>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total de Contatos */}
          <Card className="bg-white border-0 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Total de Contatos</CardTitle>
              <div className="w-12 h-12 bg-[#00B894]/10 rounded-xl flex items-center justify-center">
                <Users className="h-[18px] w-[18px] text-[#00B894]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-[#333]">
                1,950
              </div>
              <p className="text-sm text-green-600 flex items-center gap-1 mt-2">
                <TrendingUp className="h-4 w-4" />
                +12.5% vs. mês anterior
              </p>
            </CardContent>
          </Card>

          {/* Taxa de Conclusão */}
          <Card className="bg-white border-0 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Taxa de Conclusão dos Protocolos</CardTitle>
              <div className="w-12 h-12 bg-[#0984E3]/10 rounded-xl flex items-center justify-center">
                <ClipboardCheck className="h-[18px] w-[18px] text-[#0984E3]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-[#333]">
                94.8%
              </div>
              <p className="text-sm text-[#666] mt-2">
                1,850 concluídos / 100 pendentes
              </p>
            </CardContent>
          </Card>

          {/* Canal mais utilizado */}
          <Card className="bg-white border-0 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Canal mais utilizado</CardTitle>
              <div className="w-12 h-12 bg-[#00B894]/10 rounded-xl flex items-center justify-center">
                <Phone className="h-[18px] w-[18px] text-[#00B894]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-[#333]">
                Telefone
              </div>
              <p className="text-sm text-[#666] mt-2">
                819 contatos (42% do total)
              </p>
            </CardContent>
          </Card>

          {/* Taxa de Primeiro Contato Resolvido */}
          <Card className="bg-white border-0 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Primeiro Contato Resolvido</CardTitle>
              <div className="w-12 h-12 bg-[#00B894]/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-[18px] w-[18px] text-[#00B894]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-[#333]">
                87.2%
              </div>
              <p className="text-sm text-[#666] mt-2">
                1,700 resolvidos no primeiro contato
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Grid: Distribuição por Canal e Evolução Mensal lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Distribuição por Canal */}
        <Card className="bg-white border-0 rounded-xl shadow-sm" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px', marginBottom: '8px' }}>
                Distribuição por Canal
              </CardTitle>
              <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                Volume de contatos por canal de comunicação
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {/* Header do Ranking */}
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-shrink-0" style={{ width: '50px' }}>
                <div className="text-xs font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.5px' }}>
                  Ranking
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
            
            {contactsByChannel.map((channel, index) => {
              const IconComponent = channel.icon;
              
              // Cores específicas para cada canal
              const channelColors = {
                'Telefone': '#5B9BD5',
                'Email': '#00BFA6',
                'Whatsapp': '#4CAF50',
                'Reclame Aqui': '#E74C3C',
                'Rede Social': '#5DADE2'
              };
              const barColor = channelColors[channel.name] || '#00B894';
              const isClickable = channel.name === 'Rede Social' && channel.subChannels;
              const isExpanded = channel.name === 'Rede Social' && socialMediaExpanded;
              
              return (
                <div key={channel.name}>
                  <div className="flex items-center gap-3">
                    {/* Número de Ranking */}
                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '50px' }}>
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0984E3] to-[#00B894] border border-gray-300 shadow-sm" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '700', color: '#333' }}>
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Card do Item */}
                    <div className="flex-1">
                      <div 
                        className={`bg-white rounded-xl p-4 shadow-sm border transition-all duration-300 ${
                          isClickable 
                            ? isExpanded 
                              ? 'border-[#5DADE2] shadow-lg cursor-pointer' 
                              : 'border-gray-100 hover:shadow-lg hover:border-[#5DADE2] cursor-pointer'
                            : 'border-gray-100 hover:shadow-md'
                        }`}
                        style={{
                          animation: `slideInUp 0.5s ease-out ${index * 0.08}s both`
                        }}
                        onClick={() => {
                          if (isClickable) {
                            setSocialMediaExpanded(!socialMediaExpanded);
                          }
                        }}
                      >
                        {/* Header: Ícone, Nome e Valores */}
                        <div className={`flex items-center justify-between mb-3 ${isClickable && isExpanded ? 'pb-3 border-b border-[#5DADE2]' : ''}`}>
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-[18px] w-[18px]" style={{ color: barColor }} />
                            <span className="text-sm text-[#333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {channel.name}
                            </span>
                            {isClickable && (
                              <Badge className="bg-[#5DADE2]/10 text-[#5DADE2] border-[#5DADE2]/30 text-xs">
                                Clique para detalhar
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {channel.quantity} contatos
                            </span>
                            <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: barColor }}>
                              {channel.value}%
                            </span>
                            {isClickable && (
                              <ChevronDown 
                                className={`h-4 w-4 text-[#5DADE2] transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`}
                              />
                            )}
                          </div>
                        </div>
                        
                        {/* Barra de Progresso */}
                        <div className="relative w-full h-[10px] bg-[#F0F0F0] rounded-full overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${channel.value}%`,
                              backgroundColor: barColor,
                              animation: `barGrow 1s ease-out ${index * 0.08}s both`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Accordion Content - Sub-redes sociais */}
                  {isClickable && isExpanded && channel.subChannels && (
                    <div className="mt-2 space-y-2 ml-[62px] pl-6 border-l-2 border-[#5DADE2]/20" style={{ animation: 'slideInUp 0.3s ease-out' }}>
                      {channel.subChannels.map((socialNetwork, subIndex) => {
                        const SocialIconComponent = socialNetwork.icon;
                        
                        // Cores específicas para cada rede social
                        const socialColors = {
                          'Instagram': '#E4405F',
                          'Facebook': '#1877F2',
                          'LinkedIn': '#0A66C2',
                          'X (Twitter)': '#000000'
                        };
                        const socialBarColor = socialColors[socialNetwork.name] || '#5DADE2';
                        
                        return (
                          <div 
                            key={socialNetwork.name} 
                            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                            style={{
                              animation: `slideInUp 0.3s ease-out ${subIndex * 0.05}s both`
                            }}
                          >
                            {/* Header: Ícone, Nome e Valores */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <SocialIconComponent className="h-[18px] w-[18px]" style={{ color: socialBarColor }} />
                                <span className="text-sm text-[#333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {socialNetwork.name}
                                </span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="text-sm text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {socialNetwork.quantity} contatos
                                </span>
                                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: socialBarColor }}>
                                  {socialNetwork.value}%
                                </span>
                              </div>
                            </div>
                            
                            {/* Barra de Progresso */}
                            <div className="relative w-full h-[10px] bg-[#F0F0F0] rounded-full overflow-hidden group">
                              <div
                                className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                                style={{
                                  width: `${socialNetwork.value}%`,
                                  backgroundColor: socialBarColor,
                                  animation: `barGrow 0.6s ease-out ${subIndex * 0.05}s both`
                                }}
                              >
                                {/* Tooltip on hover */}
                                <div 
                                  className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-lg shadow-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
                                  style={{ borderColor: '#EAEAEA', fontFamily: 'Inter, sans-serif' }}
                                >
                                  <div className="text-xs font-semibold" style={{ color: '#222' }}>
                                    {socialNetwork.name}
                                  </div>
                                  <div className="text-xs" style={{ color: '#666' }}>
                                    {socialNetwork.quantity} contatos ({socialNetwork.value}% das redes sociais)
                                  </div>
                                  {/* Seta do tooltip */}
                                  <div 
                                    className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"
                                    style={{ marginTop: '-1px' }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Animações CSS */}
          <style>{`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes barGrow {
              from {
                width: 0%;
              }
            }
          `}</style>
        </CardContent>
      </Card>

        {/* Gráfico de Evolução Mensal */}
        <Card className="bg-white border-0 rounded-xl shadow-sm" style={{ animation: 'fadeInUp 0.6s ease-out 0.8s both' }}>
        <CardHeader>
          <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Evolução Mensal de Protocolos
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Tendência de volume nos últimos 6 meses por canal de comunicação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyTrend} margin={{ top: 30, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="1 3" stroke="#EAEAEA" strokeOpacity={0.5} />
                <XAxis 
                  dataKey="month" 
                  stroke="#999" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#999" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                
                {/* Linha principal - Total */}
                <Line 
                  type="natural" 
                  dataKey="contatos" 
                  stroke="#2E3A59" 
                  strokeWidth={3}
                  strokeOpacity={0.9}
                  name="Total de Contatos"
                  dot={{ fill: '#2E3A59', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, stroke: '#2E3A59', strokeWidth: 2, fill: '#fff' }}
                />
                
                {/* Telefone - Azul harmonizado */}
                <Line 
                  type="natural" 
                  dataKey="telefone" 
                  stroke="#4A90E2" 
                  strokeWidth={2}
                  strokeOpacity={0.8}
                  name="Telefone"
                  dot={{ fill: '#4A90E2', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#4A90E2', strokeWidth: 2, fill: '#fff' }}
                />
                
                {/* Email - Verde-água */}
                <Line 
                  type="natural" 
                  dataKey="email" 
                  stroke="#00BFA6" 
                  strokeWidth={2}
                  strokeOpacity={0.8}
                  name="Email"
                  dot={{ fill: '#00BFA6', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#00BFA6', strokeWidth: 2, fill: '#fff' }}
                />
                
                {/* WhatsApp - Verde harmonizado */}
                <Line 
                  type="natural" 
                  dataKey="whatsapp" 
                  stroke="#43C77D" 
                  strokeWidth={2}
                  strokeOpacity={0.8}
                  name="WhatsApp"
                  dot={{ fill: '#43C77D', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#43C77D', strokeWidth: 2, fill: '#fff' }}
                />
                
                {/* Reclame Aqui - Vermelho coral */}
                <Line 
                  type="natural" 
                  dataKey="reclameAqui" 
                  stroke="#F45B69" 
                  strokeWidth={2}
                  strokeOpacity={0.8}
                  name="Reclame Aqui"
                  dot={{ fill: '#F45B69', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#F45B69', strokeWidth: 2, fill: '#fff' }}
                />
                
                {/* Rede Social - Azul claro */}
                <Line 
                  type="natural" 
                  dataKey="redeSocial" 
                  stroke="#6EC1E4" 
                  strokeWidth={2}
                  strokeOpacity={0.8}
                  name="Rede Social"
                  dot={{ fill: '#6EC1E4', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#6EC1E4', strokeWidth: 2, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
            
            {/* Legenda dos Canais */}
            <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2E3A59' }}></div>
                  <span className="text-sm text-[#666]">Total</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4A90E2' }}></div>
                  <span className="text-sm text-[#666]">Telefone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00BFA6' }}></div>
                  <span className="text-sm text-[#666]">Email</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#43C77D' }}></div>
                  <span className="text-sm text-[#666]">WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F45B69' }}></div>
                  <span className="text-sm text-[#666]">Reclame Aqui</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#6EC1E4' }}></div>
                  <span className="text-sm text-[#666]">Rede Social</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        </Card>
        </div>
      </div>

      {/* 2️⃣ SEÇÃO: MOTIVOS E PERFIS DE CONTATO */}
      <div className="space-y-6">
        {/* Título da Seção */}
        <div className="flex items-center space-x-3">
          <div className="h-1 w-1 bg-[#0984E3] rounded-full"></div>
          <h3 className="text-[#0984E3] tracking-wide uppercase" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
            Motivos e Produtos
          </h3>
          <div className="flex-1 h-px bg-[#F3F4F6]"></div>
        </div>

        {/* Bloco 1: Top Motivos + Top Produtos lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Motivos de Contato */}
          <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)', animation: 'fadeInUp 0.6s ease-out 0.5s both' }}>
            <CardHeader>
              <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
                Top Motivos de Contato
              </CardTitle>
              <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                Principais razões para contato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Header do Ranking */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex-shrink-0" style={{ width: '50px' }}>
                    <div className="text-xs font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.5px' }}>
                      Ranking
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
                
                {contactReasons.map((reason, index) => {
                  // Cores específicas para cada motivo
                  const reasonColors = {
                    'Informações sobre Medicamentos': '#26B99D',
                    'Queixa Técnica': '#0984E3',
                    'Farmacovigilância': '#FFA726',
                    'Suporte ao Tratamento': '#00B894',
                    'Elogios e Sugestões': '#9B59B6'
                  };
                  const barColor = reasonColors[reason.name] || '#00B894';
                  
                  return (
                    <div key={reason.name} className="flex items-center gap-3">
                      {/* Número de Ranking */}
                      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '50px' }}>
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0984E3] to-[#00B894] border border-gray-300 shadow-sm" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '700', color: '#333' }}>
                        {index + 1}
                      </div>
                      </div>
                      
                      {/* Card do Item */}
                      <div className="flex-1">
                        <div 
                          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                          style={{
                            animation: `slideInUp 0.5s ease-out ${index * 0.08}s both`
                          }}
                        >
                          {/* Header: Ícone, Nome e Valores */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-[18px] w-[18px]" style={{ color: barColor }} />
                              <span className="text-sm text-[#333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {reason.name}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {reason.quantity} contatos
                              </span>
                              <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: barColor }}>
                                {reason.percentage}%
                              </span>
                            </div>
                          </div>
                          
                          {/* Barra de Progresso */}
                          <div className="relative w-full h-[10px] bg-[#F0F0F0] rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                              style={{
                                width: `${reason.percentage}%`,
                                backgroundColor: barColor,
                                animation: `barGrow 1s ease-out ${index * 0.08}s both`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Top Produtos por Contato */}
          <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)', animation: 'fadeInUp 0.6s ease-out 0.6s both' }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontSize: '20px', marginBottom: '8px' }}>
                  Top Produtos por Protocolo
                </CardTitle>
                <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  Produtos que mais geram protocolos
                </CardDescription>
              </div>
              <button
                onClick={() => setShowAllProducts(!showAllProducts)}
                className="px-4 py-2 text-sm text-[#00B894] hover:bg-[#00B894]/5 rounded-lg transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {showAllProducts ? '− ver menos' : '+ ver todos'}
              </button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Header do Ranking */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex-shrink-0" style={{ width: '50px' }}>
                    <div className="text-xs font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.5px' }}>
                      Ranking
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
                
                {topProducts.slice(0, showAllProducts ? topProducts.length : 3).map((product, index) => {
                  // Cores específicas para cada produto
                  const productColors = {
                    'Paracetamol 500mg': '#26B99D',
                    'Amoxicilina 875mg': '#0984E3',
                    'Omeprazol 20mg': '#FFA726',
                    'Losartana 50mg': '#00B894',
                    'Metformina 850mg': '#9B59B6'
                  };
                  const barColor = productColors[product.name] || '#00B894';
                  
                  return (
                    <div key={product.name} className="flex items-center gap-3">
                      {/* Número de Ranking */}
                      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '50px' }}>
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0984E3] to-[#00B894] border border-gray-300 shadow-sm" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '700', color: '#333' }}>
                        {index + 1}
                      </div>
                      </div>
                      
                      {/* Card do Item */}
                      <div className="flex-1">
                        <div 
                          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                          style={{
                            animation: `slideInUp 0.5s ease-out ${index * 0.08}s both`
                          }}
                        >
                          {/* Header: Ícone, Nome e Valores */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <Package className="h-[18px] w-[18px]" style={{ color: barColor }} />
                              <span className="text-sm text-[#333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {product.name}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {product.contacts} protocolos
                              </span>
                              <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: barColor }}>
                                {product.percentage}%
                              </span>
                            </div>
                          </div>
                          
                          {/* Barra de Progresso */}
                          <div className="relative w-full h-[10px] bg-[#F0F0F0] rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                              style={{
                                width: `${product.percentage}%`,
                                backgroundColor: barColor,
                                animation: `barGrow 1s ease-out ${index * 0.08}s both`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      {/* Animações CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Dados específicos para Qualidade
const qualitySpecificMetrics = {
  protocolosComQT: {
    protocolos_totais: 1950,
    protocolos_com_qt: 585,
    percentual: 30.0,
    total_queixas: 762,
    densidade: 1.3
  },
  casosAndamento: {
    total: 128,
    revisao: 25,
    rejeitado: 8,
    retornado: 18,
    qualidade: 42,
    emAnalise: 35,
    concluidos_periodo: 157
  },
  temposPorEtapa: {
    operacao_para_lab: 1.4,
    qualidade_para_analise: 2.1,
    analise_para_conclusao: 2.8,
    tempo_total_lab: 6.3
  },
  // Motivos de Embalagem Interna
  motivosEmbalagemInterna: [
    { motivo: 'Blister danificado', quantidade: 45, percentual: 33.0 },
    { motivo: 'Falha de vedação', quantidade: 30, percentual: 22.0 },
    { motivo: 'Bula incorreta', quantidade: 25, percentual: 18.0 },
    { motivo: 'Tampa solta', quantidade: 22, percentual: 16.0 },
    { motivo: 'Produto grudado', quantidade: 14, percentual: 11.0 }
  ],
  totalEmbalagemInterna: 136,
  
  // Motivos de Embalagem Externa
  motivosEmbalagemExterna: [
    { motivo: 'Caixa amassada', quantidade: 35, percentual: 30.0 },
    { motivo: 'Rótulo ilegível', quantidade: 32, percentual: 28.0 },
    { motivo: 'Falta de lacre', quantidade: 25, percentual: 21.0 },
    { motivo: 'Lote ilegível', quantidade: 18, percentual: 15.0 },
    { motivo: 'Contaminação externa', quantidade: 7, percentual: 6.0 }
  ],
  totalEmbalagemExterna: 117,
  statusCasosQualidade: [
    { status: 'Aberto', quantidade: 12, percentual: 9.4 },
    { status: 'Revisão', quantidade: 25, percentual: 19.5 },
    { status: 'Rejeitado', quantidade: 8, percentual: 6.3 },
    { status: 'Retornado', quantidade: 18, percentual: 14.1 },
    { status: 'Qualidade', quantidade: 42, percentual: 32.8 },
    { status: 'Em Análise', quantidade: 35, percentual: 27.3 },
    { status: 'Concluído', quantidade: 157, percentual: 100 }
  ],
  // Dados para Heatmap: Produto × Motivo de Queixa
  produtoMotivoHeatmap: {
    produtos: [
      'Paracetamol 500mg',
      'Amoxicilina 875mg',
      'Omeprazol 20mg',
      'Losartana 50mg',
      'Metformina 850mg',
      'Dipirona 1g',
      'Atorvastatina 20mg',
      'Ibuprofeno 600mg'
    ],
    motivos: [
      'Embalagem danificada',
      'Falha de vedação',
      'Produto vencido',
      'Cor/odor alterado',
      'Bula incorreta',
      'Falta de lacre'
    ],
    // Matriz de correlação: [produto][motivo] = quantidade
    matriz: [
      [35, 18, 8, 12, 15, 10], // Paracetamol 500mg
      [22, 25, 5, 8, 12, 8],   // Amoxicilina 875mg
      [15, 12, 12, 18, 8, 6],  // Omeprazol 20mg
      [10, 8, 6, 5, 10, 5],    // Losartana 50mg
      [18, 15, 8, 10, 7, 9],   // Metformina 850mg
      [28, 20, 10, 15, 6, 12], // Dipirona 1g
      [8, 6, 4, 3, 8, 3],      // Atorvastatina 20mg
      [20, 15, 7, 11, 9, 8]    // Ibuprofeno 600mg
    ]
  },
  // Dados para análise avançada com filtros
  produtoMotivoAnalise: {
    produtos: [
      'Paracetamol 500mg',
      'Amoxicilina 875mg',
      'Omeprazol 20mg',
      'Losartana 50mg',
      'Metformina 850mg',
      'Dipirona 1g'
    ],
    // Todos os motivos
    todosmotivos: {
      motivos: [
        'Embalagem danificada',
        'Falha de vedação',
        'Produto vencido',
        'Cor/odor alterado',
        'Bula incorreta',
        'Falta de lacre',
        'Blister danificado',
        'Tampa solta'
      ],
      matriz: [
        [45, 22, 12, 18, 20, 15, 28, 12], // Paracetamol
        [32, 28, 8, 12, 18, 10, 22, 15],  // Amoxicilina
        [28, 18, 18, 25, 12, 8, 15, 10],  // Omeprazol
        [15, 12, 10, 8, 15, 8, 10, 8],    // Losartana
        [25, 20, 12, 15, 10, 12, 18, 12], // Metformina
        [38, 25, 15, 22, 8, 18, 32, 18]   // Dipirona
      ]
    },
    // Embalagem Interna
    embalagemInterna: {
      motivos: [
        'Blister danificado',
        'Falha de vedação',
        'Bula incorreta',
        'Tampa solta',
        'Produto grudado'
      ],
      matriz: [
        [28, 22, 20, 12, 8],  // Paracetamol
        [22, 28, 18, 15, 6],  // Amoxicilina
        [15, 18, 12, 10, 5],  // Omeprazol
        [10, 12, 15, 8, 4],   // Losartana
        [18, 20, 10, 12, 7],  // Metformina
        [32, 25, 8, 18, 10]   // Dipirona
      ]
    },
    // Embalagem Externa
    embalagemExterna: {
      motivos: [
        'Caixa amassada',
        'Rótulo ilegível',
        'Falta de lacre',
        'Lote ilegível',
        'Contaminação externa'
      ],
      matriz: [
        [45, 25, 15, 12, 8],  // Paracetamol
        [32, 20, 10, 8, 5],   // Amoxicilina
        [28, 22, 8, 10, 6],   // Omeprazol
        [15, 18, 8, 6, 3],    // Losartana
        [25, 15, 12, 10, 5],  // Metformina
        [38, 28, 18, 15, 7]   // Dipirona
      ]
    }
  },
  // Dados de Ressarcimento
  ressarcimento: {
    total_qt_com_ressarcimento: 187,
    percentual_qt_ressarcidas: 32.0, // 187 de 585 queixas técnicas
    por_tipo: [
      { 
        tipo: 'Produto', 
        quantidade: 112, 
        percentual: 59.9,
        top3Produtos: [
          { produto: 'Paracetamol 750mg', quantidade: 45, percentual: 40.2 },
          { produto: 'Dipirona 1g', quantidade: 32, percentual: 28.6 },
          { produto: 'Ibuprofeno 600mg', quantidade: 25, percentual: 22.3 }
        ]
      },
      { 
        tipo: 'Financeiro', 
        quantidade: 75, 
        percentual: 40.1,
        valorTotal: 18750.00,
        valorPeriodoAnterior: 17361.11,
        percentualComparativo: 8.0
      }
    ],
    valor_total_financeiro: 18750.00,
    tendencia: '+8%'
  }
};

// Componente para análise de Produto × Motivo de Queixa com filtros
function ProductComplaintAnalysis() {
  const [selectedFilter, setSelectedFilter] = React.useState<'todos' | 'interna' | 'externa'>('todos');
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = React.useState<number | null>(null);
  
  const data = selectedFilter === 'todos' 
    ? qualitySpecificMetrics.produtoMotivoAnalise.todosmotivos
    : selectedFilter === 'interna'
    ? qualitySpecificMetrics.produtoMotivoAnalise.embalagemInterna
    : qualitySpecificMetrics.produtoMotivoAnalise.embalagemExterna;
  
  const produtos = qualitySpecificMetrics.produtoMotivoAnalise.produtos;
  
  // Calcular intensidade e cor com gradiente verde → amarelo → vermelho
  const calcularCorIntensidade = (valor: number, maxValor: number) => {
    if (valor === 0) return '#F5F5F5';
    
    const intensidade = valor / maxValor;
    
    // Verde: #00B894, Amarelo: #FDCB6E, Vermelho: #FF7675
    if (intensidade <= 0.5) {
      // Verde para Amarelo
      const t = intensidade * 2;
      const r = Math.round(0 + (253 - 0) * t);
      const g = Math.round(184 + (203 - 184) * t);
      const b = Math.round(148 + (110 - 148) * t);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      // Amarelo para Vermelho
      const t = (intensidade - 0.5) * 2;
      const r = Math.round(253 + (255 - 253) * t);
      const g = Math.round(203 + (118 - 203) * t);
      const b = Math.round(110 + (117 - 110) * t);
      return `rgb(${r}, ${g}, ${b})`;
    }
  };
  
  const maxValor = Math.max(...data.matriz.flat());
  const total = data.matriz.reduce((sum, row) => sum + row.reduce((a, b) => a + b, 0), 0);
  
  return (
    <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
      <CardHeader>
        <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
          Correlação Produto × Motivo de Queixa Técnica
        </CardTitle>
        <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          Compare os principais produtos e motivos de falha — visão geral e detalhamento por tipo de embalagem
        </CardDescription>
      </CardHeader>
      <CardContent style={{ padding: '24px' }}>
        <div className="bg-white rounded-xl border" style={{ borderRadius: '12px', borderColor: '#EAEAEA', padding: '24px' }}>
          {/* Abas de Filtro */}
          <div className="flex items-center gap-3 mb-6 p-1 bg-gray-100/50 rounded-lg w-fit">
            <button
              onClick={() => setSelectedFilter('todos')}
              className={`px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                selectedFilter === 'todos'
                  ? 'bg-white text-[#00B894] shadow-sm font-medium'
                  : 'text-[#666] hover:text-[#333]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Todos os motivos
            </button>
            <button
              onClick={() => setSelectedFilter('interna')}
              className={`px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                selectedFilter === 'interna'
                  ? 'bg-white text-[#00B894] shadow-sm font-medium'
                  : 'text-[#666] hover:text-[#333]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Embalagem Interna
            </button>
            <button
              onClick={() => setSelectedFilter('externa')}
              className={`px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                selectedFilter === 'externa'
                  ? 'bg-white text-[#00B894] shadow-sm font-medium'
                  : 'text-[#666] hover:text-[#333]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Embalagem Externa
            </button>
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Header com nomes dos produtos */}
              <div className="flex mb-2">
                <div className="w-52 flex-shrink-0"></div>
                <div className="flex gap-2 flex-1">
                  {produtos.map((produto, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 min-w-[90px] text-center px-2"
                      onMouseEnter={() => setHoveredCol(idx)}
                      onMouseLeave={() => setHoveredCol(null)}
                    >
                      <div 
                        className={`text-xs text-[#333] transform -rotate-45 origin-left whitespace-nowrap transition-all duration-200 ${
                          hoveredCol === idx ? 'font-bold' : ''
                        }`}
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                          marginLeft: '45px',
                          marginBottom: '65px'
                        }}
                      >
                        {produto}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid de células do heatmap */}
              <div className="space-y-2">
                {data.motivos.map((motivo, rowIdx) => (
                  <div 
                    key={rowIdx} 
                    className="flex items-center gap-2"
                    onMouseEnter={() => setHoveredRow(rowIdx)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    {/* Label do motivo */}
                    <div 
                      className={`w-52 flex-shrink-0 text-right pr-4 text-[#333] transition-all duration-200 ${
                        hoveredRow === rowIdx ? 'font-bold' : ''
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                    >
                      {motivo}
                    </div>
                    
                    {/* Células */}
                    <div className="flex gap-2 flex-1">
                      {produtos.map((produto, colIdx) => {
                        const valor = data.matriz[colIdx][rowIdx];
                        const intensidade = valor / maxValor;
                        const corCelula = calcularCorIntensidade(valor, maxValor);
                        const percentual = ((valor / total) * 100).toFixed(1);
                        const isHighlighted = hoveredRow === rowIdx || hoveredCol === colIdx;
                        const isMaxValue = valor === maxValor;
                        
                        return (
                          <div
                            key={colIdx}
                            className={`group relative flex-1 min-w-[90px] rounded-lg cursor-pointer transition-all duration-200 ${
                              isHighlighted ? 'ring-2 ring-[#00B894] scale-105 z-10' : ''
                            }`}
                            style={{ 
                              backgroundColor: corCelula,
                              height: '52px',
                              boxShadow: isHighlighted ? '0 4px 12px rgba(0, 184, 148, 0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                              border: isMaxValue ? '2px solid rgba(255, 118, 117, 0.4)' : 'none'
                            }}
                          >
                            {/* Valor na célula */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span 
                                className="font-medium"
                                style={{ 
                                  color: intensidade > 0.6 ? '#fff' : '#222',
                                  fontFamily: 'Inter, sans-serif',
                                  fontSize: '14px',
                                  textShadow: intensidade > 0.6 ? 'none' : '0 1px 2px rgba(255,255,255,0.8)'
                                }}
                              >
                                {valor}
                              </span>
                            </div>
                            
                            {/* Tooltip */}
                            <div 
                              className="absolute -top-28 left-1/2 -translate-x-1/2 px-4 py-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <div className="text-xs font-semibold text-[#333] mb-1">
                                {produto}
                              </div>
                              <div className="text-xs text-[#666] mb-1">
                                {motivo}
                              </div>
                              <div className="text-xs font-semibold text-[#00B894]">
                                {valor} casos ({percentual}%)
                              </div>
                              <div className="text-xs text-[#999] mt-1">
                                Intensidade: {(intensidade * 100).toFixed(0)}%
                              </div>
                              {/* Seta do tooltip */}
                              <div 
                                className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"
                                style={{ marginTop: '-1px' }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legenda de Intensidade */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: '#EAEAEA' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                Escala de Intensidade
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                Menor
              </span>
              <div className="flex gap-1 flex-1">
                {[0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1.0].map((intensidade, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-6 rounded"
                    style={{ backgroundColor: calcularCorIntensidade(intensidade * maxValor, maxValor) }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                Maior
              </span>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00B894' }}></div>
                <span className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Baixo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FDCB6E' }}></div>
                <span className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Médio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FF7675' }}></div>
                <span className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Alto</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Componente específico para a área de Qualidade - Foco em Queixas Técnicas
export function QualityIndicators() {
  const [hoveredTooltip, setHoveredTooltip] = React.useState<'produto' | 'financeiro' | null>(null);

  return (
    <div className="space-y-10" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
      
      {/* 1️⃣ SEÇÃO: INDICADORES PRINCIPAIS E PERFORMANCE */}
      <div className="space-y-6">
        {/* Título da Seção */}
        <div className="flex items-center space-x-3">
          <div className="h-1 w-1 bg-[#00B894] rounded-full"></div>
          <h3 className="text-[#00B894] tracking-wide uppercase" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
            Indicadores Principais e Performance
          </h3>
          <div className="flex-1 h-px bg-[#F3F4F6]"></div>
        </div>

      {/* Cards Principais - Queixas Técnicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. % de Protocolos com Queixa Técnica */}
        <Card className="bg-white border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              % Protocolos com QT
            </CardTitle>
            <div className="relative">
              <FlaskConical className="h-12 w-12 absolute -top-2 -right-2" style={{ color: '#00B894', opacity: 0.2 }} />
              <FlaskConical className="h-6 w-6 relative z-10" style={{ color: '#00B894' }} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
              {qualitySpecificMetrics.protocolosComQT.percentual}%
            </div>
            <p className="text-xs mt-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
              {qualitySpecificMetrics.protocolosComQT.protocolos_com_qt} de {qualitySpecificMetrics.protocolosComQT.protocolos_totais} protocolos
            </p>
          </CardContent>
        </Card>

        {/* 2. Casos em Andamento */}
        <Card className="bg-white border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Casos em Andamento
            </CardTitle>
            <div className="relative">
              <Activity className="h-12 w-12 absolute -top-2 -right-2" style={{ color: '#0984E3', opacity: 0.2 }} />
              <Activity className="h-6 w-6 relative z-10" style={{ color: '#0984E3' }} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#0984E3', fontFamily: 'Inter, sans-serif' }}>
              {qualitySpecificMetrics.casosAndamento.total}
            </div>
            <p className="text-xs mt-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
              casos ativos em análise
            </p>
            <div className="mt-3 pt-3 border-t" style={{ borderColor: '#EAEAEA' }}>
              <p className="text-xs font-medium" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                + {qualitySpecificMetrics.casosAndamento.concluidos_periodo} concluídos neste período
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 3. Tempo Médio por Etapa - Card Principal */}
        <Card className="bg-white border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 md:col-span-2" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Tempo Médio por Etapa do Fluxo
            </CardTitle>
            <div className="relative">
              <Timer className="h-12 w-12 absolute -top-2 -right-2" style={{ color: '#00B894', opacity: 0.2 }} />
              <Timer className="h-6 w-6 relative z-10" style={{ color: '#00B894' }} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
              {qualitySpecificMetrics.temposPorEtapa.tempo_total_lab} dias
            </div>
            <p className="text-xs mt-1 mb-3" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
              tempo total médio no fluxo de qualidade
            </p>
            
            <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t" style={{ borderColor: '#EAEAEA' }}>
              <div className="text-center">
                <div className="text-lg font-bold" style={{ color: '#0984E3', fontFamily: 'Inter, sans-serif' }}>
                  {qualitySpecificMetrics.temposPorEtapa.operacao_para_lab}d
                </div>
                <div className="text-xs mt-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Operação → Lab</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                  {qualitySpecificMetrics.temposPorEtapa.qualidade_para_analise}d
                </div>
                <div className="text-xs mt-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Qualidade → Análise</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold" style={{ color: '#0984E3', fontFamily: 'Inter, sans-serif' }}>
                  {qualitySpecificMetrics.temposPorEtapa.analise_para_conclusao}d
                </div>
                <div className="text-xs mt-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Análise → Conclusão</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>

      {/* 2️⃣ SEÇÃO: RESSARCIMENTO E IMPACTO FINANCEIRO */}
      <div className="space-y-6">
        {/* Título da Seção */}
        <div className="flex items-center space-x-3">
          <div className="h-1 w-1 bg-[#00B894] rounded-full"></div>
          <h3 className="text-[#00B894] tracking-wide uppercase" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
            Ressarcimento e Impacto Financeiro
          </h3>
          <div className="flex-1 h-px bg-[#F3F4F6]"></div>
        </div>

      {/* Queixas Técnicas com Ressarcimento */}
      <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Queixas Técnicas com Ressarcimento
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Análise detalhada de queixas técnicas que resultaram em ressarcimento por tipo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card Resumo Principal */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6 border" style={{ borderColor: '#EAEAEA' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                      Total com Ressarcimento
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold mb-2" style={{ color: '#0984E3', fontFamily: 'Inter, sans-serif' }}>
                  {qualitySpecificMetrics.ressarcimento.total_qt_com_ressarcimento}
                </div>
                <div className="text-sm" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                  <span className="font-semibold" style={{ color: '#00B894' }}>
                    {qualitySpecificMetrics.ressarcimento.percentual_qt_ressarcidas}%
                  </span> das queixas técnicas
                </div>
              </div>
            </div>

            {/* Detalhamento por Tipo */}
            <div>
              <div className="bg-white rounded-xl p-6 border relative" style={{ borderColor: '#EAEAEA' }}>
                <h3 className="text-sm font-semibold mb-6" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                  Distribuição por Tipo de Ressarcimento
                </h3>
                
                <div className="space-y-6">
                  {qualitySpecificMetrics.ressarcimento.por_tipo.map((item, index) => {
                    const colors = ['#00B894', '#0984E3'];
                    const bgColors = ['rgba(0, 184, 148, 0.1)', 'rgba(9, 132, 227, 0.1)'];
                    const color = colors[index % colors.length];
                    const bgColor = bgColors[index % bgColors.length];
                    const tipoKey = item.tipo.toLowerCase() as 'produto' | 'financeiro';
                    const isHovered = hoveredTooltip === tipoKey;
                    
                    return (
                      <div key={item.tipo} className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: bgColor }}
                            >
                              {item.tipo === 'Financeiro' ? (
                                <DollarSign className="h-5 w-5" style={{ color }} />
                              ) : (
                                <Package className="h-5 w-5" style={{ color }} />
                              )}
                            </div>
                            <div>
                              <span className="font-semibold" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                                {item.tipo}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold" style={{ color, fontFamily: 'Inter, sans-serif' }}>
                              {item.quantidade}
                            </div>
                            <div className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                              {item.percentual}%
                            </div>
                          </div>
                        </div>
                        
                        {/* Barra de Progresso com Tooltip */}
                        <div 
                          className="relative w-full h-4 bg-gray-100 rounded-full overflow-visible cursor-pointer"
                          onMouseEnter={() => setHoveredTooltip(tipoKey)}
                          onMouseLeave={() => setHoveredTooltip(null)}
                        >
                          <div
                            className="absolute top-0 left-0 h-full transition-all duration-500 rounded-full"
                            style={{
                              width: `${item.percentual}%`,
                              backgroundColor: color,
                              boxShadow: `0 2px 8px ${color}40`
                            }}
                          />
                          
                          {/* Tooltip para Produto */}
                          {isHovered && item.tipo === 'Produto' && 'top3Produtos' in item && Array.isArray((item as any).top3Produtos) && (
                            <div
                              className="absolute z-50 bg-white rounded-lg shadow-xl border p-4 min-w-[280px]"
                              style={{
                                left: '50%',
                                transform: 'translateX(-50%)',
                                bottom: 'calc(100% + 12px)',
                                borderColor: '#EAEAEA',
                                fontFamily: 'Inter, sans-serif'
                              }}
                              onMouseEnter={() => setHoveredTooltip(tipoKey)}
                              onMouseLeave={() => setHoveredTooltip(null)}
                            >
                              <div className="text-sm font-semibold mb-3" style={{ color: '#333' }}>
                                Top 3 Produtos Ressarcidos
                              </div>
                              <div className="space-y-2">
                                {(item as any).top3Produtos.map((produto: any, idx: number) => (
                                  <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <div 
                                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                        style={{ backgroundColor: color }}
                                      >
                                        {idx + 1}
                                      </div>
                                      <span className="text-sm" style={{ color: '#333' }}>
                                        {produto.produto}
                                      </span>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm font-semibold" style={{ color }}>
                                        {produto.quantidade}
                                      </div>
                                      <div className="text-xs" style={{ color: '#666' }}>
                                        {produto.percentual}%
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {/* Seta do tooltip */}
                              <div
                                className="absolute left-1/2 transform -translate-x-1/2"
                                style={{
                                  bottom: '-8px',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '8px solid transparent',
                                  borderRight: '8px solid transparent',
                                  borderTop: '8px solid white',
                                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}
                              />
                            </div>
                          )}
                          
                          {/* Tooltip para Financeiro */}
                          {isHovered && item.tipo === 'Financeiro' && 'valorTotal' in item && (
                            <div
                              className="absolute z-50 bg-white rounded-lg shadow-xl border p-4 min-w-[260px]"
                              style={{
                                left: '50%',
                                transform: 'translateX(-50%)',
                                bottom: 'calc(100% + 12px)',
                                borderColor: '#EAEAEA',
                                fontFamily: 'Inter, sans-serif'
                              }}
                              onMouseEnter={() => setHoveredTooltip(tipoKey)}
                              onMouseLeave={() => setHoveredTooltip(null)}
                            >
                              <div className="text-sm font-semibold mb-3" style={{ color: '#333' }}>
                                Informações Financeiras
                              </div>
                              <div className="space-y-3">
                                <div>
                                  <div className="text-xs mb-1" style={{ color: '#666' }}>
                                    Valor Total Financeiro
                                  </div>
                                  <div className="text-lg font-bold" style={{ color }}>
                                    R$ {(item as any).valorTotal?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                  </div>
                                </div>
                                <div className="pt-2 border-t" style={{ borderColor: '#EAEAEA' }}>
                                  <div className="text-xs mb-1" style={{ color: '#666' }}>
                                    Comparativo ao Período Anterior
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="text-sm font-semibold" style={{ color }}>
                                      {(item as any).percentualComparativo && (item as any).percentualComparativo > 0 ? '+' : ''}{(item as any).percentualComparativo}%
                                    </div>
                                    <div className="text-xs" style={{ color: '#666' }}>
                                      (R$ {(item as any).valorPeriodoAnterior?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Seta do tooltip */}
                              <div
                                className="absolute left-1/2 transform -translate-x-1/2"
                                style={{
                                  bottom: '-8px',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '8px solid transparent',
                                  borderRight: '8px solid transparent',
                                  borderTop: '8px solid white',
                                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>

      {/* 3️⃣ SEÇÃO: ANÁLISE DE MOTIVOS E CAUSAS */}
      <div className="space-y-6">
        {/* Título da Seção */}
        <div className="flex items-center space-x-3">
          <div className="h-1 w-1 bg-[#00B894] rounded-full"></div>
          <h3 className="text-[#00B894] tracking-wide uppercase" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
            Análise de Motivos e Causas
          </h3>
          <div className="flex-1 h-px bg-[#F3F4F6]"></div>
        </div>

      {/* Motivos de Queixas Técnicas - Seção com Título */}
      <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Motivos de Queixas Técnicas
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Análise separada por tipo de embalagem
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gráfico 1 - Embalagem Interna */}
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#EAEAEA', borderRadius: '12px' }}>
              <h3 className="text-sm font-semibold mb-6" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                Motivos de Queixa Técnica — Embalagem Interna
              </h3>
              
              {/* Horizontal Bar Chart */}
              <div className="space-y-4" style={{ minHeight: '240px' }}>
                {qualitySpecificMetrics.motivosEmbalagemInterna.map((item, index) => (
                  <div 
                    key={item.motivo} 
                    className="group"
                    style={{
                      animation: `barGrowIn 0.8s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Label do Motivo */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                        {item.motivo}
                      </span>
                      <span className="text-sm font-medium" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                        {item.percentual}%
                      </span>
                    </div>
                    
                    {/* Barra Container */}
                    <div className="relative w-full h-3 bg-gradient-to-r from-[#F9FAFB] to-[#EAEAEA] overflow-hidden" style={{ borderRadius: '4px' }}>
                      {/* Barra de Progresso */}
                      <div
                        className="absolute top-0 left-0 h-full transition-all duration-300 group-hover:opacity-90"
                        style={{
                          width: `${item.percentual}%`,
                          background: 'linear-gradient(90deg, #00B894 0%, #E0E0E0 100%)',
                          borderRadius: '4px',
                          animation: `barFill 1s ease-out ${index * 0.1}s both`
                        }}
                      >
                        {/* Tooltip no Hover */}
                        <div 
                          className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-white rounded-lg shadow-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
                          style={{ borderColor: '#EAEAEA', fontFamily: 'Inter, sans-serif' }}
                        >
                          <div className="text-xs font-semibold" style={{ color: '#222' }}>
                            {item.motivo}
                          </div>
                          <div className="text-xs" style={{ color: '#666' }}>
                            {item.percentual}% ({item.quantidade} casos)
                          </div>
                          {/* Seta do tooltip */}
                          <div 
                            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"
                            style={{ marginTop: '-1px' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Rodapé */}
              <div className="mt-6 pt-4 border-t text-center" style={{ borderColor: '#EAEAEA' }}>
                <span className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                  Total: {qualitySpecificMetrics.totalEmbalagemInterna} queixas
                </span>
              </div>
            </div>

            {/* Gráfico 2 - Embalagem Externa */}
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#EAEAEA', borderRadius: '12px' }}>
              <h3 className="text-sm font-semibold mb-6" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                Motivos de Queixa Técnica — Embalagem Externa
              </h3>
              
              {/* Horizontal Bar Chart */}
              <div className="space-y-4" style={{ minHeight: '240px' }}>
                {qualitySpecificMetrics.motivosEmbalagemExterna.map((item, index) => (
                  <div 
                    key={item.motivo} 
                    className="group"
                    style={{
                      animation: `barGrowIn 0.8s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Label do Motivo */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                        {item.motivo}
                      </span>
                      <span className="text-sm font-medium" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>
                        {item.percentual}%
                      </span>
                    </div>
                    
                    {/* Barra Container */}
                    <div className="relative w-full h-3 bg-gradient-to-r from-[#F9FAFB] to-[#EAEAEA] overflow-hidden" style={{ borderRadius: '4px' }}>
                      {/* Barra de Progresso */}
                      <div
                        className="absolute top-0 left-0 h-full transition-all duration-300 group-hover:opacity-90"
                        style={{
                          width: `${item.percentual}%`,
                          background: 'linear-gradient(90deg, #00B894 0%, #E0E0E0 100%)',
                          borderRadius: '4px',
                          animation: `barFill 1s ease-out ${index * 0.1}s both`
                        }}
                      >
                        {/* Tooltip no Hover */}
                        <div 
                          className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-white rounded-lg shadow-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
                          style={{ borderColor: '#EAEAEA', fontFamily: 'Inter, sans-serif' }}
                        >
                          <div className="text-xs font-semibold" style={{ color: '#222' }}>
                            {item.motivo}
                          </div>
                          <div className="text-xs" style={{ color: '#666' }}>
                            {item.percentual}% ({item.quantidade} casos)
                          </div>
                          {/* Seta do tooltip */}
                          <div 
                            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"
                            style={{ marginTop: '-1px' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Rodapé */}
              <div className="mt-6 pt-4 border-t text-center" style={{ borderColor: '#EAEAEA' }}>
                <span className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                  Total: {qualitySpecificMetrics.totalEmbalagemExterna} queixas
                </span>
              </div>
            </div>
          </div>
          
          {/* Animações CSS */}
          <style>{`
            @keyframes barGrowIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes barFill {
              from {
                width: 0%;
              }
            }
            
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </CardContent>
      </Card>

      {/* Relação Produto × Motivo de Queixa Técnica - Com Filtros */}
      <ProductComplaintAnalysis />

      {/* Status dos Casos de Qualidade - Horizontal Bar Chart (Tela inteira) */}
      <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Distribuição dos Casos por Status
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Carga de trabalho por status - Sistema SAC (SIN Solution)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#EAEAEA', borderRadius: '12px' }}>
            {/* Horizontal Bar Chart */}
            <div className="space-y-4">
              {qualitySpecificMetrics.statusCasosQualidade
                .filter(s => s.status !== 'Concluído')
                .map((item, index) => {
                  // Cores específicas para cada status - Paleta SIN Solution
                  const statusColors = {
                    'Aberto': '#FFD166',
                    'Revisão': '#FFA801',
                    'Rejeitado': '#E17055',
                    'Retornado': '#6C5CE7',
                    'Qualidade': '#0984E3',
                    'Em Análise': '#00B894'
                  };
                  const barColor = statusColors[item.status] || '#888';
                  
                  // Ícones específicos para cada status
                  const statusIcons = {
                    'Aberto': Circle,
                    'Revisão': Eye,
                    'Rejeitado': XCircle,
                    'Retornado': RotateCcw,
                    'Qualidade': Shield,
                    'Em Análise': Loader
                  };
                  const IconComponent = statusIcons[item.status] || Circle;
                  
                  // Calcular largura da barra proporcional
                  const maxValue = Math.max(...qualitySpecificMetrics.statusCasosQualidade.filter(s => s.status !== 'Concluído').map(s => s.quantidade));
                  const barWidth = (item.quantidade / maxValue) * 100;
                  
                  return (
                    <div 
                      key={item.status} 
                      className="group"
                      style={{
                        animation: `barSlideIn 0.7s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {/* Label e Valor */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <IconComponent 
                            className="h-4 w-4" 
                            style={{ color: barColor }}
                          />
                          <span 
                            className="text-sm" 
                            style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}
                          >
                            {item.status}
                          </span>
                        </div>
                        <span 
                          className="text-sm font-semibold" 
                          style={{ color: barColor, fontFamily: 'Inter, sans-serif' }}
                        >
                          {item.quantidade}
                        </span>
                      </div>
                      
                      {/* Barra Container */}
                      <div className="relative w-full h-3 bg-gradient-to-r from-[#F9FAFB] to-[#EAEAEA] overflow-hidden" style={{ borderRadius: '4px' }}>
                        {/* Barra de Progresso com animação */}
                        <div
                          className="absolute top-0 left-0 h-full transition-all duration-300 group-hover:opacity-90"
                          style={{
                            width: `${barWidth}%`,
                            backgroundColor: barColor,
                            borderRadius: '4px',
                            animation: `barGrowth 1s ease-out ${index * 0.1}s both`
                          }}
                        >
                          {/* Tooltip no Hover */}
                          <div 
                            className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-white rounded-lg shadow-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
                            style={{ borderColor: '#EAEAEA', fontFamily: 'Inter, sans-serif' }}
                          >
                            <div className="text-xs font-semibold" style={{ color: '#222' }}>
                              {item.status} — {item.quantidade} casos
                            </div>
                            <div className="text-xs" style={{ color: '#666' }}>
                              {item.percentual}% do total
                            </div>
                            {/* Seta do tooltip */}
                            <div 
                              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"
                              style={{ marginTop: '-1px' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            
            {/* Rodapé */}
            <div className="mt-6 pt-4 border-t text-center" style={{ borderColor: '#EAEAEA' }}>
              <span 
                className="text-sm font-semibold" 
                style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}
              >
                Concluídos no período: {qualitySpecificMetrics.casosAndamento.concluidos_periodo} casos
              </span>
            </div>
          </div>
          
          {/* Animações CSS */}
          <style>{`
            @keyframes barSlideIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes barGrowth {
              from {
                width: 0%;
              }
            }
          `}</style>
        </CardContent>
      </Card>
      </div>

      {/* 4️⃣ SEÇÃO: EVOLUÇÃO E TENDÊNCIAS */}
      <div className="space-y-6">
        {/* Título da Seção */}
        <div className="flex items-center space-x-3">
          <div className="h-1 w-1 bg-[#00B894] rounded-full"></div>
          <h3 className="text-[#00B894] tracking-wide uppercase" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
            Evolução e Tendências
          </h3>
          <div className="flex-1 h-px bg-[#F3F4F6]"></div>
        </div>

      {/* Evolução Mensal de Queixas Técnicas */}
      <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Evolução Mensal de Queixas Técnicas
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Tendência de novos casos criados - Base: data de criação do caso
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#EAEAEA', borderRadius: '12px' }}>
            <ResponsiveContainer width="100%" height={380}>
              <AreaChart data={evolucaoMensal} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EAEAEA" strokeOpacity={0.15} />
                <XAxis 
                  dataKey="month" 
                  stroke="#999" 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false} 
                />
                <YAxis 
                  stroke="#999" 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false} 
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #EAEAEA',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  formatter={(value, name) => {
                    return [`${value} casos criados`, 'Queixa Técnica'];
                  }}
                />
                
                <defs>
                  <linearGradient id="colorQueixaTecnicaOnly" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00B894" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0984E3" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                
                <Area 
                  type="natural" 
                  dataKey="queixaTecnica" 
                  stroke="url(#gradientStroke)"
                  strokeWidth={3}
                  fill="url(#colorQueixaTecnicaOnly)"
                  name="Queixa Técnica"
                  dot={{ fill: '#00B894', strokeWidth: 2, stroke: '#fff', r: 4 }}
                  activeDot={{ r: 6, stroke: '#00B894', strokeWidth: 2, fill: '#fff' }}
                />
                <defs>
                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00B894" />
                    <stop offset="100%" stopColor="#0984E3" />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border" style={{ borderColor: '#EAEAEA' }}>
                <div className="text-xs mb-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Média Mensal</div>
                <div className="text-xl font-bold" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>260</div>
                <div className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>casos/mês</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border" style={{ borderColor: '#EAEAEA' }}>
                <div className="text-xs mb-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Crescimento</div>
                <div className="text-xl font-bold" style={{ color: '#00B894', fontFamily: 'Inter, sans-serif' }}>+75%</div>
                <div className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Jan vs Jun</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border" style={{ borderColor: '#EAEAEA' }}>
                <div className="text-xs mb-1" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>Acumulado</div>
                <div className="text-xl font-bold" style={{ color: '#0984E3', fontFamily: 'Inter, sans-serif' }}>1,560</div>
                <div className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>no semestre</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>

      {/* 5️⃣ SEÇÃO: PRODUTOS MAIS IMPACTADOS */}
      <div className="space-y-6">
        {/* Título da Seção */}
        <div className="flex items-center space-x-3">
          <div className="h-1 w-1 bg-[#00B894] rounded-full"></div>
          <h3 className="text-[#00B894] tracking-wide uppercase" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
            Produtos Mais Impactados
          </h3>
          <div className="flex-1 h-px bg-[#F3F4F6]"></div>
        </div>

      {/* Produtos Mais Associados a Queixas */}
      <Card className="bg-white border-0 rounded-xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Produtos com Mais Queixas Técnicas
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Ranking de produtos por volume de queixas técnicas para priorização
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#EAEAEA', borderRadius: '12px' }}>
            <div className="space-y-3">
              {produtosCasos.map((produto, index) => {
                const rankColors = ['#00B894', '#0984E3', '#00B894'];
                const rankColor = rankColors[index] || '#666';
                
                return (
                  <div key={produto.produto} className="flex items-center justify-between p-4 bg-white rounded-xl border hover:shadow-sm transition-all duration-200" style={{ borderColor: '#EAEAEA' }}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: `${rankColor}15` }}>
                        <Package className="h-5 w-5" style={{ color: rankColor, opacity: 0.8 }} />
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xl font-bold min-w-[28px]" style={{ color: rankColor, fontFamily: 'Inter, sans-serif' }}>
                          {index + 1}º
                        </span>
                        <div>
                          <span className="font-medium" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
                            {produto.produto}
                          </span>
                          <div className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>
                            {produto.queixaTecnica} queixas técnicas no mês
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold" style={{ color: rankColor, fontFamily: 'Inter, sans-serif' }}>
                        {produto.queixaTecnica}
                      </span>
                      <div className="text-xs" style={{ color: '#666', fontFamily: 'Inter, sans-serif' }}>casos</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

// Componente específico para a área de Farmacovigilância - Foco em Eventos Adversos
export function PharmacovigilanceIndicators() {
  return (
    <div className="space-y-8">
      {/* Cards Principais - Farmacovigilância */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* % de Evento Adverso */}
        <Card className="bg-gradient-to-br from-white to-[#93E3CE]/20 border-[#93E3CE]/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>% Evento Adverso</CardTitle>
            <Shield className="h-6 w-6 text-[#93E3CE]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#00BFA6] to-[#93E3CE] bg-clip-text text-transparent">
              {qualityMetrics.eventoAdverso.percentage}%
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {qualityMetrics.eventoAdverso.total} de 1,950 contatos
            </p>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              {qualityMetrics.eventoAdverso.trend} vs. mês anterior
            </p>
          </CardContent>
        </Card>

        {/* Casos Graves */}
        <Card className="bg-gradient-to-br from-white to-red-50/40 border-red-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Casos Graves</CardTitle>
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              67
            </div>
            <p className="text-xs text-gray-600 mt-1">
              19% dos eventos adversos
            </p>
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <AlertTriangle className="h-3 w-3" />
              Requer atenção prioritária
            </p>
          </CardContent>
        </Card>

        {/* Total de Eventos Notificados */}
        <Card className="bg-gradient-to-br from-white to-blue-50/40 border-blue-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Total de Eventos</CardTitle>
            <Activity className="h-6 w-6 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              351
            </div>
            <p className="text-xs text-gray-600 mt-1">
              eventos adversos no mês
            </p>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +1% vs. mês anterior
            </p>
          </CardContent>
        </Card>

        {/* Tempo Médio de Notificação */}
        <Card className="bg-gradient-to-br from-white to-[#26B99D]/8 border-[#26B99D]/15 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Tempo Notificação</CardTitle>
            <Timer className="h-6 w-6 text-[#26B99D]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#26B99D] to-[#20A085] bg-clip-text text-transparent">
              1.2 dias
            </div>
            <p className="text-xs text-gray-600 mt-1">
              tempo médio até notificação
            </p>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3" />
              -0.3 dias vs. anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Análise de Farmacovigilância */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Distribuição por Gravidade - Eventos Adversos */}
        <Card className="bg-gradient-to-br from-white to-[#A1EBD7]/20 border-[#A1EBD7]/30 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Distribuição por Gravidade - Eventos Adversos
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Classificação inicial dos eventos adversos reportados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
              <div className="space-y-4">
                {gravidadeEventos.map((item, index) => {
                  const colors = ['#22c55e', '#f59e0b', '#ef4444', '#7f1d1d'];
                  const bgColors = ['bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-red-200'];
                  return (
                    <div key={item.name} className={`p-4 ${bgColors[index]} rounded-lg border border-gray-200/50`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        <span className="text-lg font-bold" style={{ color: colors[index] }}>
                          {item.value}%
                        </span>
                      </div>
                      <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500 ease-out"
                          style={{
                            width: `${item.value}%`,
                            background: `linear-gradient(90deg, ${colors[index]}CC, ${colors[index]})`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sistemas Orgânicos Mais Afetados */}
        <Card className="bg-gradient-to-br from-white to-teal-50/50 border-teal-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Sistemas Orgânicos Afetados
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Principais sistemas afetados pelos eventos adversos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
              <div className="space-y-3">
                {[
                  { sistema: 'Gastrointestinal', casos: 142, percentual: 40.5 },
                  { sistema: 'Sistema Nervoso', casos: 98, percentual: 27.9 },
                  { sistema: 'Pele e Anexos', casos: 63, percentual: 18.0 },
                  { sistema: 'Cardiovascular', casos: 28, percentual: 8.0 },
                  { sistema: 'Outros', casos: 20, percentual: 5.6 }
                ].map((item, index) => (
                  <div key={item.sistema} className="flex items-center p-3 bg-white/70 rounded-xl border border-gray-100/50">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-700">{item.sistema}</span>
                        <span className="text-xs text-gray-500 block">{item.casos} casos</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-teal-600">{item.percentual}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Evolução Temporal - Eventos Adversos */}
      <Card className="bg-gradient-to-br from-white to-slate-50/50 border-slate-200/50 shadow-lg">
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Evolução Mensal - Eventos Adversos
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Tendência de notificações de eventos adversos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <ResponsiveContainer width="100%" height={380}>
              <AreaChart data={evolucaoMensal} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="1 3" stroke="#E9ECEF" strokeOpacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  stroke="#999" 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false} 
                />
                <YAxis 
                  stroke="#999" 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false} 
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                
                <defs>
                  <linearGradient id="colorEventoAdversoFV" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00BFA6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00BFA6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                
                <Area 
                  type="natural" 
                  dataKey="eventoAdverso" 
                  stroke="#00BFA6" 
                  strokeWidth={4}
                  fill="url(#colorEventoAdversoFV)"
                  name="Evento Adverso"
                  dot={{ fill: '#00BFA6', strokeWidth: 0, r: 5 }}
                  activeDot={{ r: 8, stroke: '#00BFA6', strokeWidth: 3, fill: '#fff' }}
                />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200/50">
                <div className="text-xs text-gray-600 mb-1">Média Mensal</div>
                <div className="text-lg font-bold text-[#00BFA6]">165</div>
                <div className="text-xs text-gray-500">eventos/mês</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200/50">
                <div className="text-xs text-gray-600 mb-1">Crescimento</div>
                <div className="text-lg font-bold text-blue-600">+62%</div>
                <div className="text-xs text-gray-500">Jan vs Jun</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200/50">
                <div className="text-xs text-gray-600 mb-1">Acumulado</div>
                <div className="text-lg font-bold text-purple-600">990</div>
                <div className="text-xs text-gray-500">no semestre</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Produtos Mais Associados a Eventos Adversos */}
      <Card className="bg-gradient-to-br from-white to-gray-50/50 border-gray-200/50 shadow-lg">
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Produtos com Mais Eventos Adversos
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Ranking de produtos por eventos adversos para monitoramento regulatório
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <div className="space-y-4">
              {produtosCasos.map((produto, index) => (
                <div key={produto.produto} className="flex items-center justify-between p-4 bg-white/70 rounded-xl border border-gray-100/50 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-[#00BFA6] w-8">{index + 1}</span>
                    <div>
                      <span className="font-medium text-gray-800">{produto.produto}</span>
                      <div className="text-xs text-gray-500">
                        {produto.eventoAdverso} eventos adversos no mês
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#00BFA6]">
                      {produto.eventoAdverso}
                    </span>
                    <div className="text-xs text-gray-500">eventos</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Componente específico para a área de Gestação
export function GestationIndicators() {
  return (
    <div className="space-y-8">
      {/* Cards Principais - Gestação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* % de Gestação */}
        <Card className="bg-gradient-to-br from-white to-[#CDBBFF]/20 border-[#CDBBFF]/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>% Gestação</CardTitle>
            <Baby className="h-6 w-6 text-[#CDBBFF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#A06BFF] to-[#CDBBFF] bg-clip-text text-transparent">
              {qualityMetrics.gestacao.percentage}%
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {qualityMetrics.gestacao.total} de 1,950 contatos
            </p>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              {qualityMetrics.gestacao.trend} vs. mês anterior
            </p>
          </CardContent>
        </Card>

        {/* Total de Gestantes */}
        <Card className="bg-gradient-to-br from-white to-pink-50/40 border-pink-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Total de Gestantes</CardTitle>
            <Heart className="h-6 w-6 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              137
            </div>
            <p className="text-xs text-gray-600 mt-1">
              contatos com gestantes no mês
            </p>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +0.5% vs. mês anterior
            </p>
          </CardContent>
        </Card>

        {/* Trimestres Gestacionais */}
        <Card className="bg-gradient-to-br from-white to-purple-50/40 border-purple-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Período Gestacional</CardTitle>
            <Activity className="h-6 w-6 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mt-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">1º Trimestre:</span>
                <span className="font-semibold text-purple-600">52 (38%)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">2º Trimestre:</span>
                <span className="font-semibold text-purple-600">49 (36%)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">3º Trimestre:</span>
                <span className="font-semibold text-purple-600">36 (26%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tempo de Acompanhamento */}
        <Card className="bg-gradient-to-br from-white to-[#26B99D]/8 border-[#26B99D]/15 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Tempo de Follow-up</CardTitle>
            <Timer className="h-6 w-6 text-[#26B99D]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#26B99D] to-[#20A085] bg-clip-text text-transparent">
              45 dias
            </div>
            <p className="text-xs text-gray-600 mt-1">
              tempo médio de acompanhamento
            </p>
            <p className="text-xs text-[#26B99D] mt-1">
              92% com follow-up completo
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Análise de Gestação */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Distribuição por Trimestre */}
        <Card className="bg-gradient-to-br from-white to-[#CDBBFF]/15 border-[#CDBBFF]/25 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Distribuição por Trimestre Gestacional
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Classificação dos contatos por período da gestação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: '1º Trimestre', value: 38, color: '#A06BFF' },
                      { name: '2º Trimestre', value: 36, color: '#C084FC' },
                      { name: '3º Trimestre', value: 26, color: '#E9D5FF' }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {[
                      { name: '1º Trimestre', value: 38, color: '#A06BFF' },
                      { name: '2º Trimestre', value: 36, color: '#C084FC' },
                      { name: '3º Trimestre', value: 26, color: '#E9D5FF' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Motivos de Contato - Gestantes */}
        <Card className="bg-gradient-to-br from-white to-pink-50/50 border-pink-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Principais Motivos de Contato
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Razões mais frequentes para contato de gestantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
              <div className="space-y-3">
                {[
                  { motivo: 'Segurança do medicamento', casos: 58, percentual: 42.3 },
                  { motivo: 'Efeitos adversos', casos: 35, percentual: 25.5 },
                  { motivo: 'Interações medicamentosas', casos: 24, percentual: 17.5 },
                  { motivo: 'Dosagem adequada', casos: 12, percentual: 8.8 },
                  { motivo: 'Outros', casos: 8, percentual: 5.9 }
                ].map((item, index) => (
                  <div key={item.motivo} className="flex items-center p-3 bg-white/70 rounded-xl border border-gray-100/50">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-700">{item.motivo}</span>
                        <span className="text-xs text-gray-500 block">{item.casos} casos</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-pink-600">{item.percentual}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tendência Mensal de Contatos com Gestantes */}
      <Card className="bg-gradient-to-br from-white to-slate-50/50 border-slate-200/50 shadow-lg">
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Evolução Mensal - Contatos com Gestantes
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Tendência de casos de gestação ao longo do tempo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <ResponsiveContainer width="100%" height={380}>
              <AreaChart data={evolucaoMensal} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="1 3" stroke="#E9ECEF" strokeOpacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  stroke="#999" 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false} 
                />
                <YAxis 
                  stroke="#999" 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false} 
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                
                <defs>
                  <linearGradient id="colorGestacaoOnly" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A06BFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#A06BFF" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                
                <Area 
                  type="natural" 
                  dataKey="gestacao" 
                  stroke="#A06BFF" 
                  strokeWidth={4}
                  fill="url(#colorGestacaoOnly)"
                  name="Gestação"
                  dot={{ fill: '#A06BFF', strokeWidth: 0, r: 5 }}
                  activeDot={{ r: 8, stroke: '#A06BFF', strokeWidth: 3, fill: '#fff' }}
                />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200/50">
                <div className="text-xs text-gray-600 mb-1">Média Mensal</div>
                <div className="text-lg font-bold text-[#A06BFF]">68</div>
                <div className="text-xs text-gray-500">casos/mês</div>
              </div>
              <div className="text-center p-3 bg-pink-50 rounded-lg border border-pink-200/50">
                <div className="text-xs text-gray-600 mb-1">Crescimento</div>
                <div className="text-lg font-bold text-pink-600">+82%</div>
                <div className="text-xs text-gray-500">Jan vs Jun</div>
              </div>
              <div className="text-center p-3 bg-indigo-50 rounded-lg border border-indigo-200/50">
                <div className="text-xs text-gray-600 mb-1">Acumulado</div>
                <div className="text-lg font-bold text-indigo-600">410</div>
                <div className="text-xs text-gray-500">no semestre</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Produtos Mais Associados a Gestação */}
      <Card className="bg-gradient-to-br from-white to-gray-50/50 border-gray-200/50 shadow-lg">
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Produtos com Mais Contatos de Gestantes
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Ranking de produtos por contatos com gestantes para monitoramento de segurança
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <div className="space-y-4">
              {produtosCasos.map((produto, index) => (
                <div key={produto.produto} className="flex items-center justify-between p-4 bg-white/70 rounded-xl border border-gray-100/50 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-[#A06BFF] w-8">{index + 1}</span>
                    <div>
                      <span className="font-medium text-gray-800">{produto.produto}</span>
                      <div className="text-xs text-gray-500">
                        {produto.gestacao} contatos com gestantes
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#A06BFF]">
                      {produto.gestacao}
                    </span>
                    <div className="text-xs text-gray-500">casos</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Baby className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Status de Acompanhamento</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="text-[#A06BFF] font-medium">126 casos em acompanhamento ativo</span> • 
                    <span className="text-green-600 font-medium ml-1">11 casos concluídos com desfecho positivo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function CustomerExperienceIndicators() {
  // Dados para NPS e CSAT com evolução temporal
  const satisfactionTrend = [
    { month: 'Jan', nps: 65, csat: 4.2, fcr: 85.2, tempoResolucao: 2.8 },
    { month: 'Fev', nps: 68, csat: 4.3, fcr: 86.1, tempoResolucao: 2.6 },
    { month: 'Mar', nps: 70, csat: 4.4, fcr: 87.3, tempoResolucao: 2.5 },
    { month: 'Abr', nps: 69, csat: 4.5, fcr: 88.1, tempoResolucao: 2.4 },
    { month: 'Mai', nps: 71, csat: 4.5, fcr: 88.8, tempoResolucao: 2.3 },
    { month: 'Jun', nps: 72, csat: 4.6, fcr: 89.2, tempoResolucao: 2.3 }
  ];

  // Satisfação por Canal
  const satisfactionByChannel = [
    { canal: 'Telefone', nps: 75, csat: 4.7, volume: 819, fcr: 92.1 },
    { canal: 'Email', nps: 78, csat: 4.8, volume: 546, fcr: 95.3 },
    { canal: 'WhatsApp', nps: 74, csat: 4.6, volume: 293, fcr: 88.4 },
    { canal: 'Presencial', nps: 80, csat: 4.9, volume: 156, fcr: 96.8 },
    { canal: 'Reclame Aqui', nps: 45, csat: 3.2, volume: 78, fcr: 62.1 },
    { canal: 'Rede Social', nps: 62, csat: 4.1, volume: 58, fcr: 79.3 }
  ];

  // Tempo de Resolução por Tipo
  const resolutionTimeByType = [
    { tipo: 'Informação Medicamento', tempo: 0.5, meta: 1.0, performance: 'Excelente' },
    { tipo: 'Suporte Tratamento', tempo: 1.2, meta: 2.0, performance: 'Boa' },
    { tipo: 'Queixa Técnica', tempo: 3.8, meta: 5.0, performance: 'Boa' },
    { tipo: 'Farmacovigilância', tempo: 7.2, meta: 10.0, performance: 'Boa' },
    { tipo: 'Elogios/Sugestões', tempo: 0.8, meta: 1.5, performance: 'Excelente' }
  ];

  // Feedback Qualitativo
  const qualitativeFeedback = [
    { categoria: 'Atendimento Prestativo', mencoes: 342, sentimento: 'positivo' },
    { categoria: 'Resolução Rápida', mencoes: 298, sentimento: 'positivo' },
    { categoria: 'Conhecimento Técnico', mencoes: 267, sentimento: 'positivo' },
    { categoria: 'Tempo de Espera', mencoes: 89, sentimento: 'negativo' },
    { categoria: 'Dificuldade Contato', mencoes: 45, sentimento: 'negativo' }
  ];

  return (
    <div className="space-y-8">
      {/* Cards Principais de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* NPS */}
        <Card className="bg-gradient-to-br from-white to-emerald-50/50 border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Net Promoter Score</CardTitle>
            <Heart className="h-6 w-6 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              72
            </div>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +5 pontos vs. mês anterior
            </p>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Promotores</span>
                <span>67%</span>
              </div>
              <Progress value={67} className="h-2 mb-2" />
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Detratores</span>
                <span>8%</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
            <Badge className="mt-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-sm">
              Excelente
            </Badge>
          </CardContent>
        </Card>

        {/* CSAT */}
        <Card className="bg-gradient-to-br from-white to-[#26B99D]/10 border-[#26B99D]/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Customer Satisfaction</CardTitle>
            <Users className="h-6 w-6 text-[#26B99D]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#26B99D] to-[#20A085] bg-clip-text text-transparent">
              4.6/5
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Base: 1,245 avaliações
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex text-xs text-amber-500">
                {"★".repeat(5)}
              </div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Satisfeitos (4-5★)</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <Badge className="mt-3 bg-gradient-to-r from-[#26B99D] to-[#20A085] text-white border-0 shadow-sm">
              Meta atingida
            </Badge>
          </CardContent>
        </Card>

        {/* FCR */}
        <Card className="bg-gradient-to-br from-white to-violet-50/50 border-violet-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>First Call Resolution</CardTitle>
            <CheckCircle className="h-6 w-6 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              89.2%
            </div>
            <p className="text-xs text-gray-600 mt-1">
              1,739 resolvidos no 1º contato
            </p>
            <p className="text-xs text-violet-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +1.2% vs. mês anterior
            </p>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Meta: 85%</span>
                <span className="text-green-600 font-medium">Superada!</span>
              </div>
              <Progress value={89.2} className="h-2" />
            </div>
            <Badge className="mt-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 shadow-sm">
              Meta superada
            </Badge>
          </CardContent>
        </Card>

        {/* Tempo Médio de Resolução */}
        <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Tempo Médio Resolução</CardTitle>
            <Clock className="h-6 w-6 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              2.3 dias
            </div>
            <p className="text-xs text-blue-600 flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3" />
              -0.2 dias vs. mês anterior
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Simples: 0.5d</span>
                <span>Complexos: 7.2d</span>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Meta: 3.0 dias</span>
                <span className="text-green-600 font-medium">Atingida!</span>
              </div>
              <Progress value={77} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Evolução Temporal da Satisfação */}
      <Card className="bg-gradient-to-br from-white to-slate-50/50 border-slate-200/50 shadow-lg">
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Evolução da Experiência do Cliente
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Tendência de NPS, CSAT, FCR e Tempo de Resolução nos últimos 6 meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={satisfactionTrend} margin={{ top: 30, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="1 3" stroke="#EAEAEA" strokeOpacity={0.5} />
                <XAxis 
                  dataKey="month" 
                  stroke="#999" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  yAxisId="left"
                  stroke="#999" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  stroke="#999" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 5]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                
                <Line 
                  yAxisId="left"
                  type="natural" 
                  dataKey="nps" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  name="NPS"
                  dot={{ fill: '#22c55e', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, stroke: '#22c55e', strokeWidth: 2, fill: '#fff' }}
                />
                
                <Line 
                  yAxisId="right"
                  type="natural" 
                  dataKey="csat" 
                  stroke="#26B99D" 
                  strokeWidth={3}
                  name="CSAT"
                  dot={{ fill: '#26B99D', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, stroke: '#26B99D', strokeWidth: 2, fill: '#fff' }}
                />
                
                <Line 
                  yAxisId="left"
                  type="natural" 
                  dataKey="fcr" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  name="FCR (%)"
                  dot={{ fill: '#8b5cf6', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#8b5cf6', strokeWidth: 2, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Análise por Canal de Comunicação */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-white to-gray-50/50 border-gray-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Performance por Canal de Comunicação
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Comparativo de satisfação e eficiência por canal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {satisfactionByChannel.map((channel, index) => {
                const iconColors = [
                  'text-[#4A90E2]', 'text-[#00BFA6]', 'text-[#43C77D]', 
                  'text-[#A06BFF]', 'text-[#F45B69]', 'text-[#6EC1E4]'
                ];
                const icons = [Phone, Mail, MessageCircle, MapPin, AlertCircle, Share2];
                const IconComponent = icons[index];
                
                const npsColor = channel.nps >= 70 ? 'text-green-600' : channel.nps >= 50 ? 'text-yellow-600' : 'text-red-600';
                const npsLabel = channel.nps >= 70 ? 'Excelente' : channel.nps >= 50 ? 'Bom' : 'Crítico';
                
                return (
                  <div key={channel.canal} className="p-4 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-5 w-5 ${iconColors[index]}`} />
                        <div>
                          <span className="font-medium text-gray-700">{channel.canal}</span>
                          <span className="text-xs text-gray-500 block">{channel.volume} contatos</span>
                        </div>
                      </div>
                      <Badge className={`${npsColor.replace('text-', 'text-')} bg-transparent border-current`}>
                        {npsLabel}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className={`text-lg font-bold ${npsColor}`}>{channel.nps}</div>
                        <div className="text-xs text-gray-500">NPS</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#26B99D]">{channel.csat}</div>
                        <div className="text-xs text-gray-500">CSAT</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">{channel.fcr}%</div>
                        <div className="text-xs text-gray-500">FCR</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tempo de Resolução por Tipo de Contato */}
        <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Tempo de Resolução por Tipo
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Performance vs. meta estabelecida por categoria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resolutionTimeByType.map((tipo, index) => {
                const performanceColor = tipo.performance === 'Excelente' ? 'text-green-600' : 'text-blue-600';
                const progressValue = Math.min((tipo.tempo / tipo.meta) * 100, 100);
                const isUnderTarget = tipo.tempo <= tipo.meta;
                
                return (
                  <div key={tipo.tipo} className="p-4 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-medium text-gray-700">{tipo.tipo}</span>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-gray-600">{tipo.tempo} dias</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">Meta: {tipo.meta} dias</span>
                        </div>
                      </div>
                      <Badge className={`${performanceColor.replace('text-', 'text-')} bg-transparent border-current`}>
                        {tipo.performance}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Tempo atual vs. meta</span>
                        <span className={isUnderTarget ? 'text-green-600' : 'text-red-600'}>
                          {isUnderTarget ? '✓ Dentro da meta' : '⚠ Acima da meta'}
                        </span>
                      </div>
                      <Progress 
                        value={progressValue} 
                        className={`h-3 ${progressValue > 100 ? '[&>div]:bg-red-500' : '[&>div]:bg-blue-500'}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback Qualitativo */}
      <Card className="bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 shadow-lg">
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Análise Qualitativa de Feedback
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Principais temas mencionados pelos clientes nas avaliações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {qualitativeFeedback.map((item, index) => {
                const isPositive = item.sentimento === 'positivo';
                const bgColor = isPositive ? 'from-green-50 to-emerald-50/50' : 'from-red-50 to-rose-50/50';
                const borderColor = isPositive ? 'border-green-200/50' : 'border-red-200/50';
                const textColor = isPositive ? 'text-green-700' : 'text-red-700';
                const icon = isPositive ? '👍' : '👎';
                
                return (
                  <div key={item.categoria} className={`p-4 bg-gradient-to-br ${bgColor} ${borderColor} border rounded-xl shadow-sm`}>
                    <div className="text-center">
                      <div className="text-2xl mb-2">{icon}</div>
                      <div className="text-lg font-bold text-gray-800">{item.mencoes}</div>
                      <div className="text-xs text-gray-600 mb-2">menções</div>
                      <div className={`text-sm font-medium ${textColor}`}>
                        {item.categoria}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl border border-blue-200/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Resumo de Sentiment Analysis</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="text-green-600 font-medium">907 menções positivas</span> vs. 
                    <span className="text-red-600 font-medium ml-1">134 menções negativas</span> 
                    - Taxa de sentimento positivo: <span className="font-semibold text-blue-600">87.1%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function ManagerialInsights() {
  // Dados estratégicos para análise gerencial
  const productContactsTrend = [
    { produto: 'Paracetamol 500mg', jan: 180, fev: 195, mar: 210, abr: 225, mai: 220, jun: 234, total: 1264, risco: 'baixo' },
    { produto: 'Amoxicilina 875mg', jan: 150, fev: 165, mar: 175, abr: 185, mai: 190, jun: 198, total: 1063, risco: 'medio' },
    { produto: 'Omeprazol 20mg', jan: 120, fev: 135, mar: 145, abr: 150, mai: 155, jun: 156, total: 861, risco: 'baixo' },
    { produto: 'Losartana 50mg', jan: 110, fev: 125, mar: 130, abr: 138, mai: 142, jun: 145, total: 790, risco: 'baixo' },
    { produto: 'Metformina 850mg', jan: 85, fev: 95, mar: 105, abr: 110, mai: 115, jun: 117, total: 627, risco: 'medio' },
    { produto: 'Atorvastatina 20mg', jan: 65, fev: 72, mar: 78, abr: 82, mai: 85, jun: 89, total: 471, risco: 'alto' }
  ];

  const laboratoryAnalysis = [
    { laboratorio: 'EMS Pharma', contatos: 542, satisfacao: 4.5, criticos: 12, tendencia: 'estavel' },
    { laboratorio: 'Medley Genéricos', contatos: 398, satisfacao: 4.3, criticos: 8, tendencia: 'melhora' },
    { laboratorio: 'Eurofarma', contatos: 365, satisfacao: 4.6, criticos: 5, tendencia: 'melhora' },
    { laboratorio: 'Biosintética', contatos: 298, satisfacao: 4.2, criticos: 15, tendencia: 'atencao' },
    { laboratorio: 'Sandoz', contatos: 185, satisfacao: 4.4, criticos: 3, tendencia: 'estavel' },
    { laboratorio: 'Outros', contatos: 162, satisfacao: 4.1, criticos: 9, tendencia: 'estavel' }
  ];

  const seasonalTrends = [
    { periodo: 'Jan-Mar', total: 4650, queixas: 18.2, eventos: 16.8, satisfacao: 4.4 },
    { periodo: 'Abr-Jun', total: 5850, queixas: 22.1, eventos: 18.3, satisfacao: 4.6 },
    { periodo: 'Jul-Set', total: 4200, queixas: 15.5, eventos: 14.2, satisfacao: 4.3 },
    { periodo: 'Out-Dez', total: 3890, queixas: 20.8, eventos: 19.1, satisfacao: 4.2 }
  ];

  const strategicInsights = [
    {
      categoria: 'Risco Operacional',
      titulo: 'Aumento de Eventos Adversos',
      descricao: 'Produtos da linha cardiovascular apresentam 23% mais eventos adversos que a média',
      acao: 'Revisão de protocolo de farmacovigilância',
      prioridade: 'alta',
      impacto: 'Alto'
    },
    {
      categoria: 'Oportunidade',
      titulo: 'Excelência no Atendimento Presencial',
      descricao: 'Canal presencial mantém 96.8% de FCR - potencial para benchmark',
      acao: 'Aplicar boas práticas em outros canais',
      prioridade: 'media',
      impacto: 'Médio'
    },
    {
      categoria: 'Eficiência',
      titulo: 'Otimização de Backlog',
      descricao: 'Implementação de triagem automática pode reduzir 40% do tempo de classificação',
      acao: 'Projeto de automação com IA',
      prioridade: 'media',
      impacto: 'Alto'
    },
    {
      categoria: 'Qualidade',
      titulo: 'Padrão de Satisfação por Laboratório',
      descricao: 'Diferença de 0.5 pontos no CSAT entre laboratórios indica variação de qualidade',
      acao: 'Programa de padronização de atendimento',
      prioridade: 'baixa',
      impacto: 'Médio'
    }
  ];

  const backlogPrioritario = {
    total: 100,
    distribuicao: [
      { tipo: 'Farmacovigilância', quantidade: 28, prazo: '2 dias', risco: 'critico' },
      { tipo: 'Queixa Técnica', quantidade: 35, prazo: '5 dias', risco: 'alto' },
      { tipo: 'Informação Medicamento', quantidade: 22, prazo: '1 dia', risco: 'medio' },
      { tipo: 'Suporte Tratamento', quantidade: 15, prazo: '3 dias', risco: 'medio' }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Cards de Indicadores Estratégicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Volume Total</CardTitle>
            <BarChart3 className="h-6 w-6 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              11.7k
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Contatos nos últimos 6 meses
            </p>
            <p className="text-xs text-blue-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +18.3% vs. semestre anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-emerald-50/50 border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Taxa de Crescimento</CardTitle>
            <TrendingUp className="h-6 w-6 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              +12.5%
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Crescimento mensal médio
            </p>
            <Badge className="mt-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-sm">
              Tendência positiva
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Produtos Monitorados</CardTitle>
            <Package className="h-6 w-6 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              247
            </div>
            <p className="text-xs text-gray-600 mt-1">
              SKUs com contatos registrados
            </p>
            <p className="text-xs text-purple-600 mt-1">
              Top 10 = 68% do volume
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-orange-50/50 border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>Laboratórios Ativos</CardTitle>
            <Target className="h-6 w-6 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              15
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Parceiros com volume significativo
            </p>
            <p className="text-xs text-orange-600 mt-1">
              Top 5 = 78% dos contatos
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Análise de Produtos Mais Associados a Contatos */}
      <Card className="bg-gradient-to-br from-white to-slate-50/50 border-slate-200/50 shadow-lg">
        <CardHeader>
          <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Produtos Mais Associados a Contatos - Evolução Semestral
          </CardTitle>
          <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Tendência de volume e análise de risco por produto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={productContactsTrend.map(p => ({...p, name: p.produto}))} margin={{ top: 30, right: 30, left: 20, bottom: 80 }}>
                <CartesianGrid strokeDasharray="1 3" stroke="#EAEAEA" strokeOpacity={0.5} />
                <XAxis 
                  dataKey="name" 
                  stroke="#999" 
                  fontSize={11}
                  axisLine={false}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  stroke="#999" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    maxWidth: '300px'
                  }}
                  formatter={(value, name, props) => {
                    const data = productContactsTrend.find(p => p.produto === props.payload.name);
                    return [
                      <div key={name}>
                        <div>Total semestre: <strong>{data?.total}</strong></div>
                        <div>Junho: <strong>{value}</strong></div>
                        <div>Risco: <span className={`font-medium ${
                          data?.risco === 'alto' ? 'text-red-600' : 
                          data?.risco === 'medio' ? 'text-yellow-600' : 'text-green-600'
                        }`}>{data?.risco}</span></div>
                      </div>,
                      'Contatos'
                    ];
                  }}
                />
                
                <Line 
                  type="natural" 
                  dataKey="jun" 
                  stroke="#26B99D" 
                  strokeWidth={3}
                  name="Contatos em Junho"
                  dot={{ fill: '#26B99D', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, stroke: '#26B99D', strokeWidth: 2, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {productContactsTrend.slice(0, 3).map((produto, index) => {
                const riskColors = {
                  baixo: 'from-green-50 to-emerald-50/50 border-green-200/50 text-green-700',
                  medio: 'from-yellow-50 to-amber-50/50 border-yellow-200/50 text-yellow-700',
                  alto: 'from-red-50 to-rose-50/50 border-red-200/50 text-red-700'
                };
                return (
                  <div key={produto.produto} className={`p-4 bg-gradient-to-br ${riskColors[produto.risco]} border rounded-xl`}>
                    <div className="text-sm font-medium text-gray-800 mb-2">{produto.produto}</div>
                    <div className="text-lg font-bold">{produto.total}</div>
                    <div className="text-xs">contatos no semestre</div>
                    <Badge className={`mt-2 bg-transparent border-current text-current`}>
                      Risco {produto.risco}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Análise por Laboratório e Tendências Sazonais */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Análise por Laboratório */}
        <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Performance por Laboratório
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Volume, satisfação e casos críticos por parceiro
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {laboratoryAnalysis.map((lab, index) => {
                const tendenciaColors = {
                  melhora: 'text-green-600 bg-green-50',
                  estavel: 'text-blue-600 bg-blue-50',
                  atencao: 'text-red-600 bg-red-50'
                };
                const tendenciaIcons = {
                  melhora: '📈',
                  estavel: '➡️',
                  atencao: '⚠️'
                };
                
                return (
                  <div key={lab.laboratorio} className="p-4 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-medium text-gray-800">{lab.laboratorio}</span>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-sm text-gray-600">{lab.contatos} contatos</span>
                          <span className="text-sm text-blue-600">CSAT: {lab.satisfacao}</span>
                        </div>
                      </div>
                      <Badge className={`${tendenciaColors[lab.tendencia]} border-current`}>
                        {tendenciaIcons[lab.tendencia]} {lab.tendencia}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800">{lab.contatos}</div>
                        <div className="text-xs text-gray-500">Volume</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#26B99D]">{lab.satisfacao}</div>
                        <div className="text-xs text-gray-500">CSAT</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold ${lab.criticos > 10 ? 'text-red-600' : 'text-green-600'}`}>
                          {lab.criticos}
                        </div>
                        <div className="text-xs text-gray-500">Críticos</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tendências Sazonais */}
        <Card className="bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Análise Sazonal
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Padrões trimestrais de volume e tipos de contato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-b from-[#FDFDFD] to-[#F9FAFB] rounded-xl p-6 border border-gray-100/30 shadow-inner">
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={seasonalTrends} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" opacity={0.5} />
                  <XAxis dataKey="periodo" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    fill="url(#colorTotal)" 
                    name="Total de Contatos" 
                  />
                </AreaChart>
              </ResponsiveContainer>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">📊 Insights Sazonais</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Pico no Q2 (Abr-Jun): +39% vs. média</li>
                    <li>• Menor volume no Q4: -33% vs. pico</li>
                    <li>• Eventos adversos seguem sazonalidade</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">🎯 Recomendações</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Reforço de equipe no Q2</li>
                    <li>• Campanhas preventivas no Q1</li>
                    <li>• Planejamento de capacidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Backlog Prioritário e Insights Estratégicos */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Backlog Prioritário */}
        <Card className="bg-gradient-to-br from-white to-rose-50/50 border-rose-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Backlog Prioritário
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Casos pendentes por tipo e criticidade
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-gray-100/50">
                <span className="font-medium text-gray-700">Total Pendente</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  {backlogPrioritario.total}
                </span>
              </div>
              
              {backlogPrioritario.distribuicao.map((item, index) => {
                const riskColors = {
                  critico: 'border-red-500 bg-red-50 text-red-700',
                  alto: 'border-orange-500 bg-orange-50 text-orange-700',
                  medio: 'border-yellow-500 bg-yellow-50 text-yellow-700'
                };
                const riskIcons = {
                  critico: '🚨',
                  alto: '⚠️',
                  medio: '📋'
                };
                
                return (
                  <div key={item.tipo} className={`p-3 rounded-xl border-2 ${riskColors[item.risco]}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">
                        {riskIcons[item.risco]} {item.tipo}
                      </span>
                      <span className="font-bold text-lg">{item.quantidade}</span>
                    </div>
                    <div className="text-xs opacity-75">
                      Prazo máximo: {item.prazo}
                    </div>
                  </div>
                );
              })}
              
              <Badge className="w-full justify-center bg-gradient-to-r from-red-500 to-rose-500 text-white border-0 shadow-sm py-3 animate-pulse">
                🚨 Ação imediata necessária
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Insights Estratégicos */}
        <Card className="xl:col-span-2 bg-gradient-to-br from-white to-indigo-50/50 border-indigo-200/50 shadow-lg">
          <CardHeader>
            <CardTitle style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
              Insights Estratégicos e Recomendações
            </CardTitle>
            <CardDescription style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Análises baseadas em dados para tomada de decisão
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {strategicInsights.map((insight, index) => {
                const priorityColors = {
                  alta: 'from-red-500 to-red-600 text-white',
                  media: 'from-yellow-500 to-yellow-600 text-white',
                  baixa: 'from-blue-500 to-blue-600 text-white'
                };
                const categoryColors = {
                  'Risco Operacional': 'text-red-600 bg-red-50',
                  'Oportunidade': 'text-green-600 bg-green-50',
                  'Eficiência': 'text-blue-600 bg-blue-50',
                  'Qualidade': 'text-purple-600 bg-purple-50'
                };
                const categoryIcons = {
                  'Risco Operacional': '⚠️',
                  'Oportunidade': '🎯',
                  'Eficiência': '⚡',
                  'Qualidade': '⭐'
                };
                
                return (
                  <div key={insight.titulo} className="p-4 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge className={`${categoryColors[insight.categoria]} border-current text-xs`}>
                          {categoryIcons[insight.categoria]} {insight.categoria}
                        </Badge>
                        <Badge className={`bg-gradient-to-r ${priorityColors[insight.prioridade]} text-xs`}>
                          {insight.prioridade.toUpperCase()}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Impacto: {insight.impacto}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">{insight.titulo}</h4>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{insight.descricao}</p>
                    
                    <div className="flex items-center space-x-2 p-2 bg-indigo-50 rounded-lg">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">💡</span>
                      </div>
                      <span className="text-sm font-medium text-indigo-700">
                        Ação recomendada: {insight.acao}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Resumo Executivo</h4>
                  <p className="text-sm opacity-90 mt-1">
                    4 ações estratégicas identificadas • 2 de alta prioridade • ROI estimado: 23% na satisfação
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}