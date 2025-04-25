import { Header } from "./components/layout/Header"
import { ThemeSwitcher } from "./components/theme-switcher"

import { AnimatedIntro } from "./components/sections/animated-intro"
import AnniversaryCarousel from "./components/AnniversaryCarousel/AnniversaryCarousel"
function App() {
  return (
    <>
      <Header />

      <main className=" min-h-[200vh] ">

        <AnimatedIntro />
        <AnniversaryCarousel />
      </main>
      <ThemeSwitcher />

    </>
  )
}

export default App