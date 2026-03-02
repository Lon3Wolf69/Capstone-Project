import { motion } from "framer-motion";
import "./intro.css";

export default function AnimatedSection() {
  return (
    <div className="section">

      <div className="headline">
        <motion.div
          className="line"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          We don’t replace existing systems,
        </motion.div>

        <motion.div
          className="line"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          we make them <span className="accent">work together.</span>
        </motion.div>
      </div>

      <motion.div
        className="body-text"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 40 }}
        transition={{ duration: 0.8, delay: 4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p>
          Recovery doesn’t fail because of limited funding — it fails because
          of fragmented coordination. After a disaster, states must navigate a
          complex web of federal programs, agencies, and partners.
        </p>
        <br></br>
        <p>
          Disaster ProAction streamlines this process, aligning stakeholders
          and resources so recovery efforts move <em>faster, smarter, and more effectively</em>.
        </p>
      </motion.div>
    </div>
  );
}