import { Flex } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/Section/Section";
import { projects } from "./data";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { styles } from "./Projects.styles";

export async function Projects() {
  const t = await getTranslations();

  return (
    <Section title={t("projects.title")} id="projects">
      <Flex {...styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Flex>
    </Section>
  );
}
