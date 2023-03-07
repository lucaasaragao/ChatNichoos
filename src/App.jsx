import { Header } from "./components/header/header"
import { Menu } from "./components/menu/Menu"
import { Post } from "./components/post/Post"
import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
      <nav>
        <Menu/>
      </nav>

      <main>
        <Post/>
        <Post/>
      </main>
      </div>
    </div>
  )
}
export default App
