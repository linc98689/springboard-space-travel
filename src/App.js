import { BrowserRouter} from "react-router-dom";
import styles from "./App.module.css";
import NavigationBar from "./routes/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto";

const App = ()=>
{
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <NavigationBar  className={styles.app__header} />
        <AppRoute   className={styles.app__main} />
        <Motto className={styles.app__footer}/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
