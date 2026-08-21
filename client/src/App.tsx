/** DESIGN — Mantém a casca leve para que a página editorial Horizonte de Controle seja o foco da experiência. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Atuacao from "./pages/Atuacao";
import Diagnostico from "./pages/Diagnostico";
import Home from "./pages/Home";
import Metodo from "./pages/Metodo";
import Privacidade from "./pages/Privacidade";
import Socios from "./pages/Socios";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/atuacao" component={Atuacao} />
      <Route path="/metodo" component={Metodo} />
      <Route path="/socios" component={Socios} />
      <Route path="/diagnostico" component={Diagnostico} />
      <Route path="/privacidade" component={Privacidade} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
