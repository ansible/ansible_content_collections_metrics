import { Card } from "antd";
import { useState } from "react";
import { USERS } from "../../data/users";
import DeveloperDetails from "./DeveloperDetails";
import DeveloperList from "./DevelopersList";

const Developers = () => {
  // Default user is the first user in the USERS list
  const [selectedDeveloper, setSelectedDeveloper] = useState(
    localStorage.getItem("user") || USERS[0]
  );
  const developerCallback = (selectedDeveloper) => {
    setSelectedDeveloper(selectedDeveloper);
  };

  localStorage.setItem("user", selectedDeveloper);

  // console.log(selectedDeveloper);

  return (
    <div className="developers">
      <div className="developers-content">
        <Card className="dev-list">
          <DeveloperList developerCallback={developerCallback} />
        </Card>
        <div className="dev-details">
          {!selectedDeveloper && (
            <p> &lt;-- Click on a developer for more details</p>
          )}
          {selectedDeveloper && (
            <DeveloperDetails selectedDeveloper={selectedDeveloper} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Developers;
