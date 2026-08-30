'use client';
import React, { memo } from 'react';
import { AiFillChrome, AiFillGithub, AiFillLock } from 'react-icons/ai';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Project } from '@/services/projects';
import OptimizedImage from '@/components/common/OptimizedImage';
import styles from '../../app/page.module.css';

const ProjectItem = memo(({ project }: { project: Project }) => {
  const { translate } = useLanguage();

  return (
    <li className={styles.projectCardWrapper}>
      <div className={styles.project}>
        <div className={styles.projectHeader}>
          <h4 className={styles.projectTitle}>{project.Title}</h4>
          {project.Private && (
            <span className={styles.privateBadge}>
              <AiFillLock size={12} /> {translate('privateRepo')}
            </span>
          )}
        </div>

        <p className={styles.projectDesc}>{project.Description}</p>

        <div className={styles.tagContainer}>
          {project.Tags.map((tag, idx) => (
            <span key={idx} className={styles.tagBadge}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.projectFooter}>
          <div className={styles.projectActions}>
            {project.RepositoryURL && (
              <a
                href={project.RepositoryURL}
                className={styles.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir repositório GitHub de ${project.Title} em nova aba`}
              >
                <AiFillGithub size={17} className={styles.githubIcon} /> {translate('githubRepo')}
              </a>
            )}
            {project.ProjectURL && (
              <a
                href={project.ProjectURL}
                className={styles.webRepo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir acesso web de ${project.Title} em nova aba`}
              >
                <AiFillChrome size={17} className={styles.githubIcon} /> {translate('webAccess')}
              </a>
            )}
          </div>

          <OptimizedImage 
            className={styles.tecIcons} 
            src={`https://skillicons.dev/icons?i=${project.SkillsIcons}`} 
            alt={`Tecnologias utilizadas no projeto ${project.Title}`} 
          />
        </div>
      </div>
    </li>
  );
});

ProjectItem.displayName = 'ProjectItem';

const ProjectsSection = memo(() => {
  const { translate } = useLanguage();
  const { projects } = usePortfolioData();

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle} id="projects">
        <a href="#projects">{translate('projects')}</a>
      </h3>
      <ul className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
