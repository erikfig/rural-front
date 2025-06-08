import { AreaChart, BarChart, LineChart, PieChart, RadarChart, ScatterChart } from "@/components/charts"
import { Card, CardContent } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card/card-header"

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        Bem vindo ao Painel de Controle
      </h2>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>Distribuição de formas de pagamento</CardHeader>
          <CardContent>
            <PieChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Desempenho de fornecedores em diferentes métricas</CardHeader>
          <CardContent>
            <RadarChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Relação entre preço e quantidade vendida</CardHeader>
          <CardContent>
            <ScatterChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-1">
        <Card>
          <CardHeader>Vendas por mês</CardHeader>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>Evolução de acessos ao site</CardHeader>
          <CardContent>
            <LineChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Volume de vendas acumulado</CardHeader>
          <CardContent>
            <AreaChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}