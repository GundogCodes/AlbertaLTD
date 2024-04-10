import React from "react";
import styles from "./styles/Heading.module.scss";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
function Heading() {
  return (
    <div className={styles.Heading}>
      <div className={styles.logoDiv}>
        <Link className={styles.logo} href={"/"}>
          <em>Alberta Ltd.</em>
          <img src="" />
        </Link>
      </div>
      <aside>
        <Link className={styles.asideLinks} href={"/services"}>
          Our Services
        </Link>
        <Link className={styles.asideLinks} href={"/contact"}>
          Contact
        </Link>
      </aside>
    </div>
  );
}

export default Heading;
