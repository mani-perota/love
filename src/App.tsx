import { Header } from "./components/layout/Header"
import { ThemeSwitcher } from "./components/theme-switcher"

function App() {
  return (
    <>

      <Header />

      <main className="pt-[300px] min-h-[200vh] px-6">
        <section className="max-w-xl mx-auto py-20">
          <h2 className="text-3xl font-bold text-primary">Nuestra historia</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aquí empieza todo con estilo Gucci y corazón colombiano.
          </p>
        </section>
      </main>
      <ThemeSwitcher />

    </>
  )
}

export default App