import { PageContainer } from "@nx-example-org/ui-shared-layout";
import { IssueList } from "@nx-example-org/issues";
import type { NextPage } from "next";

const IssuesPage: NextPage = () => {
  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueList />
    </PageContainer>
  );
};

export default IssuesPage;
