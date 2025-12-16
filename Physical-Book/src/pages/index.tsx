import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={clsx('hero__title', styles.mainTitle)}>
              {siteConfig.title}
            </Heading>
            <p className={clsx('hero__subtitle', styles.tagline)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/chapter-1-introduction-to-physical-ai">
                Start Learning →
              </Link>
              <Link
                className="button button--outline button--lg"
                to="#chapters">
                Explore Chapters
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.robotVisual}>
              <div className={styles.robotArm}></div>
              <div className={styles.robotBody}></div>
              <div className={styles.robotHead}></div>
              <div className={styles.aiOrbs}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ emoji, chapter, title, description, link, color }: { 
  emoji: string; 
  chapter: string; 
  title: string; 
  description: string; 
  link: string;
  color: string;
}) {
  return (
    <div className={clsx('card', styles.featureCard)}>
      <div className={styles.cardHeader} style={{background: color}}>
        <div className={styles.emoji}>{emoji}</div>
        <h3>{chapter}</h3>
      </div>
      <div className={styles.cardBody}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <Link to={link} className="button button--primary button--sm">
          Read Chapter →
        </Link>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
  emoji: '🤖',
  chapter: 'Chapter 1',
  title: 'Foundations of Physical Intelligence',
  description: 'Explore how intelligent machines sense, reason, and act within real-world environments.',
  link: '/docs/chapter-1-introduction-to-physical-ai',
  color: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'
    },
    {
  emoji: '🧠',
  chapter: 'Chapter 2',
  title: 'Principles of Humanoid Systems',
  description: 'Understand the core structure, motion mechanics, sensing technologies, and control logic of humanoid robots.',
  link: '/docs/chapter-2-basics-of-humanoid-robotics',
  color: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)'
    },
    {
  emoji: '🛰️',
  chapter: 'Chapter 3',
  title: 'Core Concepts of ROS 2',
  description: 'Learn how ROS 2 enables scalable, real-time, and modular robot software systems.',
  link: '/docs/chapter-3-ros-2-fundamentals',
  color: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)'
    },
    {
  emoji: '🧪',
  chapter: 'Chapter 4',
  title: 'Virtual Robotics & Digital Twins',
  description: 'Simulate, validate, and optimize robotic systems using advanced digital twin environments.',
  link: '/docs/chapter-4-digital-twin-simulation',
  color: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)'
    },
    {
  emoji: '🔮',
  chapter: 'Chapter 5',
  title: 'Multimodal Perception & Action',
  description: 'Design intelligent systems that combine visual understanding, language reasoning, and decision-driven actions.',
  link: '/docs/chapter-5-vision-language-action-systems',
  color: 'linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)'
    },
    {
  emoji: '🛠️',
  chapter: 'Chapter 6',
  title: 'Capstone: Full AI-Robot Integration',
  description: 'Apply your knowledge to design, implement, and deploy a complete AI-driven robotic system.',
  link: '/docs/chapter-6-capstone-ai-robot-pipeline',
  color: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)'
    }   

  ];

  return (
    <section className={styles.features} id="chapters">
      <div className="container">
        <div className="text--center padding-bottom--lg">
          <h2 className={styles.sectionTitle}>Complete Learning Path</h2>
          <p className={styles.sectionSubtitle}>Progressive chapters from fundamentals to advanced implementations</p>
        </div>
        
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Learn to build intelligent physical systems with ROS 2, simulation, and AI models">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <section className={styles.closingSection}>
          <div className="container">
            <div className="text--center padding-top--xl padding-bottom--xl">
              <h2 className={styles.closingTitle}>Ready to Build the Future?</h2>
              <p className={styles.closingSubtitle}>Join thousands of engineers and researchers mastering Physical AI</p>
              <div className={styles.closingButtons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/chapter-1-introduction-to-physical-ai">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}