import Banner from "./components/banner";
import MenuBar from "./components/menu_bar"
import Avatar from "./components/avatar";
import Info from "./components/info";
import Tabs from "./components/tabs";

function App()
{
  return (
    <main className="flex w-full md:justify-center">
      <section className="md:w-1/3">
      </section>
      <section className="w-full md:w-2/3">
        <MenuBar />
        <Banner />
        <Avatar />
        <Info />
        <Tabs />
      </section>
      <section className="md:w-1/3">
      </section>
    </main>
  )
}

export default App
