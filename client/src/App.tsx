/** DESIGN — Mantém a casca leve para que a página editorial Horizonte de Controle seja o foco da experiência. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Atuacao from "./pages/Atuacao";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Diagnostico from "./pages/Diagnostico";
import Home from "./pages/Home";
import Metodo from "./pages/Metodo";
import Privacidade from "./pages/Privacidade";
import Services from "./pages/Services";
import Socios from "./pages/Socios";

const APP_BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos" component={Services} />
      <Route path="/atuacao" component={Atuacao} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/blog" component={Blog} />
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
          <WouterRouter base={APP_BASE || undefined}>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
