import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { PROJECTS } from "../../utils/data";
import useEmblaCarousel from "embla-carousel-react";
import "./Projects.css";

export default function Projects() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">// 03 — Projects</p>

        <h2 className="section-title">
          Featured <span>Work</span>
        </h2>

        <p className="section-subtitle">
          Real-world applications built with modern tech stacks
        </p>
      </motion.div>

      <div className="projects-wrapper">

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {PROJECTS.map(
              ({ id, title, image, desc, tags, demo, repo }, i) => (
                <div
                  className="embla__slide"
                  key={`${id}-${i}`}
                >
                  <motion.div
                    className="proj-card glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12,
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="proj-thumb">
                      <img src={image} alt={title} />
                    </div>

                    <div className="proj-body">
                      <h3 className="proj-title">{title}</h3>

                      <p className="proj-desc">{desc}</p>

                      <div className="tags">
                        {tags.map((tag) => (
                          <span
                            className="tag"
                            key={`${id}-${tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="proj-links">
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-wrap"
                        >
                          <button className="pl-primary">
                            <FiExternalLink size={13} />
                            Live Demo
                          </button>
                        </a>

                        <a
                          href={repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-wrap"
                        >
                          <button className="pl-outline">
                            <FiGithub size={13} />
                            GitHub
                          </button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}