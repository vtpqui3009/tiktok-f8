import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);
const Sidebar = () => {
  return (
    <aside className={cx("wrapper")}>
      <h1>Sidebar Page</h1>
    </aside>
  );
};
export default Sidebar;
