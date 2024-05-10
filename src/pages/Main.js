import FrameComponent from "../components/FrameComponent";
import PreviewArea from "../components/PreviewArea";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <FrameComponent />
      <PreviewArea />
    </div>
  );
};

export default Main;
