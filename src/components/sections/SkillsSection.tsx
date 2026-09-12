'use client';
import React, { memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Skill } from '@/services/skill';
import TechIcons from '@/components/common/TechIcons';
import styles from '../../app/page.module.css';

const SkillItem = memo(({ skill }: { skill: Skill }) => (
  <li key={skill.id} className={styles.skill}>
    <p className={styles.skillTitle}>{skill.title}</p>
    <div>
      <p className={styles.skills}>{skill.skills}</p>
      <TechIcons icons={skill.icons} size="md" />
    </div>
  </li>
));

SkillItem.displayName = 'SkillItem';

const SkillsSection = memo(() => {
  const { translate } = useLanguage();
  const { skills } = usePortfolioData();

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle} id="skills">
        <a href="#skills">{translate('skills')}</a>
      </h3>
      <ul className={styles.skillsContainer}>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
