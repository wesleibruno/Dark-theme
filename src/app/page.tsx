"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Container>
        <header>
          <h1 className="text-3xl">Título da Página</h1>
        </header>
        <section>
          <p className="my-5">Conteúdo da página</p>
          <Button label="Clique" onClick={() => console.log("Clicou")} />
        </section>
        <ThemeSwitch />
      </Container>
    </ThemeProvider>
  );
}
