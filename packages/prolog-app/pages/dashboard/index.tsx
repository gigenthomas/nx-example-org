import type { NextPage } from "next";
import { PageContainer } from "@nx-example-org/ui-shared-layout";
import { ProjectList } from "@nx-example-org/projects";

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <ProjectList />
    </PageContainer>
  );
};

export default Home;
