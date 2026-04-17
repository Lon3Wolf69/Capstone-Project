import { motion } from "framer-motion";
import "./Intro.css";

export default function AnimatedSection() {
  return (
    <div className="intro-section">
      <div className="intro-headline">
        {/* Sequence 1: Intro Headline */}
        <motion.div
          className="line"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We don’t replace existing systems,
        </motion.div>

        {/* Sequence 2: Intro Line (Starts after Headline) */}
        <motion.div
          className="intro-line"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }} 
        >
          we make them <span className="intro-accent">work together.</span>
        </motion.div>
      </div>

      {/* Sequence 3: Intro Body Text (Starts after Intro Line) */}
      <motion.div
        className="intro-body-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <p>
          Recovery doesn’t fail because of limited funding — it fails because
          of fragmented coordination. After a disaster, states must navigate a
          complex web of federal programs, agencies, and partners.
        </p>
        <br />
        <p>
          Disaster Ready streamlines this process, aligning stakeholders
          and resources so recovery efforts move <em>faster, smarter, and more effectively</em>.
        </p>
      </motion.div>
    </div>
  );
}