import Sidebar from "@/app/ui/common/sidebar/Sidebar";
import Navbar from "@/app/ui/common/navbar/Navbar";
import styles from "@/app/ui/dashboard/Dashboard.module.css";
import Footer from "../ui/dashboard/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
