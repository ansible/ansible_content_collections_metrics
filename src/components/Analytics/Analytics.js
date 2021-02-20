import { useState } from "react";
import RepositoryList from "./RepositoryList";
import RepositoryAnalytics from "./RepositoryAnalytics";
import { Card } from "antd";
import { REPOSITORIES } from "../../data/repositories";

const Analytics = () => {
  // Default repository is the first repository object in the REPOSITORIES list
  const [selectedRepository, setSelectedRepository] = useState(
    JSON.parse(localStorage.getItem("analyticsRepository")) || REPOSITORIES[0]
  );
  const repositoryCallback = (selectedRepository) => {
    setSelectedRepository(selectedRepository);
  };
  // console.log("SELECTED REPOSITORY:", selectedRepository);

  localStorage.setItem(
    "analyticsRepository",
    JSON.stringify(selectedRepository)
  );

  return (
    <div className="analytics">
      <Card className="repo-list">
        <RepositoryList repositoryCallback={repositoryCallback} />
      </Card>
      <div className="repo-analytics">
        <RepositoryAnalytics
          owner={selectedRepository.owner}
          repository={selectedRepository.repo}
        />
      </div>
    </div>
  );
};

export default Analytics;
