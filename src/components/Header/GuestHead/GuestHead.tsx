import { Link } from "react-router-dom";
import styles from "../Header.module.scss"

const GuestHead = () => {
  return (
          <div className={styles.head_links}>
            <Link to={"/login"}>
              <button className="bg-[#fff] text-[#2d71ae] hover:opacity-80">
                Kiriw
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="border border-[#fff] text-[#fff] hover:opacity-80">
                Dizimnen ótiw
              </button>
            </Link>
          </div>
  );
};

export {GuestHead};
