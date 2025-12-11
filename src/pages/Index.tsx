import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-premium opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
        
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-premium text-white text-sm px-6 py-2 font-semibold">
              <Icon name="Sparkles" size={16} className="mr-2 inline" />
              На нашем сайте только эксклюзивные акции
            </Badge>
            
            <h1 className="mb-6 text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent leading-tight">
              Финансовые решения для вашего успеха
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
              Премиальные продукты с максимальными выгодами. Специальные условия только для вас
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-premium text-white hover:opacity-90 px-8 py-6 text-lg animate-glow">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Выбрать продукт
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать выгоду
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="debit-cards" className="px-4 py-16 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Icon name="CreditCard" size={36} className="text-primary" />
              Дебетовые карты
            </h2>
            <p className="text-muted-foreground text-lg">Высокий кэшбэк и выгодные условия обслуживания</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Премиум", cashback: "до 10%", bonus: "50 000 ₽", features: ["Бесплатное обслуживание", "Кэшбэк на все", "Premium поддержка"] },
              { name: "Золотая", cashback: "до 7%", bonus: "30 000 ₽", features: ["Без комиссий", "Кэшбэк категории", "Страхование"] },
              { name: "Стандарт", cashback: "до 5%", bonus: "10 000 ₽", features: ["0₽ за выпуск", "Базовый кэшбэк", "Быстрое оформление"] },
            ].map((card, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-muted border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">{card.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-primary">{card.cashback}</span>
                    <span className="text-sm ml-2">кэшбэк</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">Бонус {card.bonus}</Badge>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-premium text-white">
                    Оформить карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="credit-cards" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Icon name="Wallet" size={36} className="text-secondary" />
              Кредитные карты
            </h2>
            <p className="text-muted-foreground text-lg">Льготный период до 120 дней и лимит до 1 000 000 ₽</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Платинум", limit: "1 000 000 ₽", grace: "120 дней", rate: "от 9.9%" },
              { name: "Голд", limit: "500 000 ₽", grace: "100 дней", rate: "от 12.9%" },
              { name: "Классик", limit: "300 000 ₽", grace: "55 дней", rate: "от 15.9%" },
            ].map((card, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-muted border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">{card.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-secondary">{card.limit}</span>
                    <span className="text-sm ml-2 block">кредитный лимит</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Льготный период</span>
                      <span className="font-semibold">{card.grace}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Ставка</span>
                      <span className="font-semibold text-secondary">{card.rate}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Получить карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="investments" className="px-4 py-16 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Icon name="TrendingUp" size={36} className="text-accent" />
              Инвестиционные счета
            </h2>
            <p className="text-muted-foreground text-lg">ИИС с налоговым вычетом до 52 000 ₽ в год</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                type: "ИИС тип А", 
                benefit: "Вычет 13%", 
                max: "52 000 ₽/год",
                description: "Возврат налога с внесённой суммы",
                features: ["Возврат до 52 000 ₽", "Подходит для активных", "Вычет каждый год"]
              },
              { 
                type: "ИИС тип Б", 
                benefit: "0% налог", 
                max: "на доход",
                description: "Освобождение от налога на прибыль",
                features: ["Не платите НДФЛ", "Для долгосрочных", "Вычет при закрытии"]
              },
            ].map((account, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-muted border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl">{account.type}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-accent">{account.benefit}</span>
                    <span className="text-sm ml-2 block">{account.max}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{account.description}</p>
                  <ul className="space-y-2 mb-6">
                    {account.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-accent mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Открыть счёт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Icon name="Briefcase" size={36} className="text-primary" />
              Выгода для бизнеса
            </h2>
            <p className="text-muted-foreground text-lg">Специальные условия для ИП и юридических лиц</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Расчётный счёт", benefit: "0 ₽", period: "6 месяцев", icon: "Building2" },
              { title: "Эквайринг", benefit: "0.8%", period: "комиссия", icon: "CreditCard" },
              { title: "Бизнес-кредит", benefit: "от 8%", period: "ставка", icon: "PiggyBank" },
            ].map((service, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform duration-300 text-center bg-gradient-to-br from-card to-muted">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{service.benefit}</span>
                    <p className="text-sm text-muted-foreground mt-1">{service.period}</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mfo" className="px-4 py-16 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Icon name="Zap" size={36} className="text-secondary" />
              МФО без % на первый займ
            </h2>
            <p className="text-muted-foreground text-lg">Быстрое одобрение за 5 минут. Деньги на карту моментально</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Займер", amount: "до 30 000 ₽", time: "15 мин", days: "0% 30 дней" },
              { name: "МигКредит", amount: "до 50 000 ₽", time: "10 мин", days: "0% 14 дней" },
              { name: "Вебзайм", amount: "до 40 000 ₽", time: "5 мин", days: "0% 21 день" },
              { name: "Лайм", amount: "до 35 000 ₽", time: "7 мин", days: "0% 30 дней" },
            ].map((mfo, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-muted border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{mfo.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2 bg-secondary text-white">{mfo.days}</Badge>
                  </div>
                  <p className="text-2xl font-bold text-secondary mb-2">{mfo.amount}</p>
                  <p className="text-sm text-muted-foreground mb-4">Решение за {mfo.time}</p>
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Получить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Icon name="BarChart3" size={36} className="text-primary" />
              Сравнение условий
            </h2>
            <p className="text-muted-foreground text-lg">Выберите лучшее предложение для себя</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-premium text-white">
                  <th className="px-6 py-4 text-left font-semibold">Продукт</th>
                  <th className="px-6 py-4 text-left font-semibold">Условие</th>
                  <th className="px-6 py-4 text-left font-semibold">Выгода</th>
                  <th className="px-6 py-4 text-left font-semibold">Срок</th>
                  <th className="px-6 py-4 text-center font-semibold">Действие</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Icon name="CreditCard" size={20} className="text-primary" />
                      <span className="font-semibold">Дебетовая Премиум</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Кэшбэк до 10%</td>
                  <td className="px-6 py-4 text-primary font-bold">50 000 ₽</td>
                  <td className="px-6 py-4">Бессрочно</td>
                  <td className="px-6 py-4 text-center">
                    <Button size="sm" className="bg-primary text-white">Оформить</Button>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Wallet" size={20} className="text-secondary" />
                      <span className="font-semibold">Кредитная Платинум</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Лимит 1 млн ₽</td>
                  <td className="px-6 py-4 text-secondary font-bold">от 9.9%</td>
                  <td className="px-6 py-4">120 дней</td>
                  <td className="px-6 py-4 text-center">
                    <Button size="sm" className="bg-secondary text-white">Оформить</Button>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-accent" />
                      <span className="font-semibold">ИИС тип А</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Вычет 13%</td>
                  <td className="px-6 py-4 text-accent font-bold">52 000 ₽/год</td>
                  <td className="px-6 py-4">От 3 лет</td>
                  <td className="px-6 py-4 text-center">
                    <Button size="sm" className="bg-accent text-accent-foreground">Открыть</Button>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Building2" size={20} className="text-primary" />
                      <span className="font-semibold">Расчётный счёт</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Бесплатно</td>
                  <td className="px-6 py-4 text-primary font-bold">0 ₽</td>
                  <td className="px-6 py-4">6 месяцев</td>
                  <td className="px-6 py-4 text-center">
                    <Button size="sm" className="bg-primary text-white">Открыть</Button>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-secondary" />
                      <span className="font-semibold">МФО Займер</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">0% на первый</td>
                  <td className="px-6 py-4 text-secondary font-bold">30 000 ₽</td>
                  <td className="px-6 py-4">30 дней</td>
                  <td className="px-6 py-4 text-center">
                    <Button size="sm" className="bg-secondary text-white">Получить</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Финансовая платформа. Все права защищены.</p>
          <p className="mt-2">Не является публичной офертой. Условия уточняйте у партнёров.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;