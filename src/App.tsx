import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { 
  OperationalIndicators, 
  QualityIndicators,
  RecurrenceRiskIndicators,
  PharmacovigilanceIndicators,
  GestationIndicators, 
  CustomerExperienceIndicators, 
  ManagerialInsights 
} from './components/dashboard-cards';
import { 
  BarChart3,
  ChartNoAxesCombined,
  ShieldAlert, 
  Users, 
  TrendingUp, 
  Calendar,
  Baby,
  AlertTriangle
} from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#26B99D] to-[#20A085] rounded-lg flex items-center justify-center shadow-lg">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Dashboard Farmacêutico
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-[#26B99D] to-[#20A085] text-white border-0 shadow-sm">
              Tempo Real
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6">
        {/* Tabs com os diferentes indicadores por área */}
        <Tabs defaultValue="operational" className="space-y-6">
          {/* Filtro de Período - Posicionado acima das abas, no canto direito */}
          <div className="flex justify-end mb-4">
            <Button variant="outline" size="sm" className="bg-white/70 hover:bg-white/90 border-gray-200/50 shadow-sm">
              <Calendar className="h-4 w-4 mr-2 text-[#26B99D]" />
              Período: Jun 2024
            </Button>
          </div>
          
          <TabsList className="grid w-full grid-cols-6 bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg p-1">
            <TabsTrigger 
              value="operational" 
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26B99D] data-[state=active]:to-[#20A085] data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Operacional</span>
            </TabsTrigger>
            <TabsTrigger 
              value="quality" 
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26B99D] data-[state=active]:to-[#20A085] data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <ShieldAlert className="h-4 w-4" />
              <span>Qualidade</span>
            </TabsTrigger>
            <TabsTrigger 
              value="recurrence" 
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26B99D] data-[state=active]:to-[#20A085] data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Reincidência e Risco</span>
            </TabsTrigger>
            <TabsTrigger 
              value="pharmacovigilance" 
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26B99D] data-[state=active]:to-[#20A085] data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Users className="h-4 w-4" />
              <span>Farmacovigilância</span>
            </TabsTrigger>
            <TabsTrigger 
              value="gestation" 
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26B99D] data-[state=active]:to-[#20A085] data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Baby className="h-4 w-4" />
              <span>Gestação</span>
            </TabsTrigger>
            <TabsTrigger 
              value="management" 
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26B99D] data-[state=active]:to-[#20A085] data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Gestão</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="operational" className="space-y-6">
            <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl border border-blue-200/50">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <ChartNoAxesCombined className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
                  Dashboard Operacional
                </h2>
                <p className="text-sm text-gray-600 mt-1">Acompanhe volume, canais, motivos e performance operacional geral</p>
              </div>
            </div>
            <OperationalIndicators />
          </TabsContent>

          <TabsContent value="quality" className="space-y-6">
            <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl border border-blue-200/50">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                <ShieldAlert className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  Dashboard de Qualidade
                </h2>
                <p className="text-sm text-gray-600 mt-1">Foco exclusivo em queixas técnicas, ressarcimentos e indicadores de desempenho da área de qualidade</p>
              </div>
            </div>
            <QualityIndicators />
          </TabsContent>

          <TabsContent value="recurrence" className="space-y-6">
            <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50/50 rounded-xl border border-orange-200/50">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-sm">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent">
                  Dashboard de Reincidência e Risco
                </h2>
                <p className="text-sm text-gray-600 mt-1">Detecção de padrões suspeitos, clusters geográficos e análise inteligente de reincidência</p>
              </div>
            </div>
            <RecurrenceRiskIndicators />
          </TabsContent>

          <TabsContent value="pharmacovigilance" className="space-y-6">
            <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50/50 rounded-xl border border-emerald-200/50">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                  Dashboard de Farmacovigilância
                </h2>
                <p className="text-sm text-gray-600 mt-1">Exclusivo para eventos adversos e indicadores clínicos regulatórios</p>
              </div>
            </div>
            <PharmacovigilanceIndicators />
          </TabsContent>

          <TabsContent value="gestation" className="space-y-6">
            <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50/50 rounded-xl border border-purple-200/50">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-sm">
                <Baby className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  Dashboard de Gestação
                </h2>
                <p className="text-sm text-gray-600 mt-1">Monitoramento de contatos com gestantes e indicadores de segurança materno-fetal</p>
              </div>
            </div>
            <GestationIndicators />
          </TabsContent>

          <TabsContent value="management" className="space-y-6">
            <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-purple-50 to-violet-50/50 rounded-xl border border-purple-200/50">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-sm">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-700 to-violet-600 bg-clip-text text-transparent">
                  Dashboard de Gestão
                </h2>
                <p className="text-sm text-gray-600 mt-1">Visão consolidada, insights estratégicos e análises executivas para tomada de decisão</p>
              </div>
            </div>
            <ManagerialInsights />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-lg border-t border-gray-200/50 px-6 py-4 mt-8 shadow-sm">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gradient-to-r from-[#26B99D] to-[#20A085] rounded-full animate-pulse"></div>
            <span>Última atualização: Hoje às 14:32 | Dados em tempo real</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
              Sistema de Atendimento Farmacêutico v2.1 • Dashboards por Área
            </span>
            <Badge 
              variant="outline" 
              className="border-[#26B99D]/30 text-[#26B99D] bg-[#26B99D]/5 hover:bg-[#26B99D]/10"
            >
              Acesso por Perfil
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}