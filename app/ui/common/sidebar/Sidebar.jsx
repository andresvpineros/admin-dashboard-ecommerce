import React from "react";
import styles from "./Sidebar.module.css";
import { sidebarItems } from "@/app/utils/sidebarItems";
import MenuItem from "./menuItem/menuItem";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userDetails}>
        <span className={styles.userName}>John Joe</span>
        <span className={styles.userRole}>Administrator</span>
      </div>
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.title}>
            <span className={styles.item}>{item.title}</span>
            {item.list.map((item) => (
              <MenuItem item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
