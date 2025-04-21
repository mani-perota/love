import { Header } from "./components/layout/Header"
import { ThemeSwitcher } from "./components/theme-switcher"

import { AnimatedIntro } from "./components/sections/animated-intro"
function App() {
  return (
    <>
      <Header />

      <main className=" min-h-[200vh] ">

        <AnimatedIntro />
      </main>
      <ThemeSwitcher />

    </>
  )
}

export default App