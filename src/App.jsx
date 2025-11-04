import { useState } from "react";
// import { Stage } from "./components/Stage.jsx"
import { SectionsContainer } from "./components/SectionsContainer.jsx";
// import './App.css'

function App() {
  const [personalData, setPersonalData] = useState([
    {
      key: crypto.randomUUID(),
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      birthDate: "",
      city: "",
    },
  ]);
  const [educationData, setEducationData] = useState([
    {
      key: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      city: "",
      description: "",
    },
  ]);
  const [employmentData, setEmploymentData] = useState([
    {
      key: crypto.randomUUID(),
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      city: "",
      description: "",
    },
  ]);
  const [sectionId, setSectionId] = useState(0);

  function handleChange(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const id = e.target.getAttribute("data-objid");
    if (sectionId === 0) {
      setPersonalData((prev) =>
        setNewData({
          currState: prev,
          nameToSet: name,
          valueToSet: value,
          idToSet: id,
        })
      );
    } else if (sectionId === 1) {
      setEducationData((prev) =>
        setNewData({
          currState: prev,
          nameToSet: name,
          valueToSet: value,
          idToSet: id,
        })
      );
    } else if (sectionId === 2) {
      setEmploymentData((prev) =>
        setNewData({
          currState: prev,
          nameToSet: name,
          valueToSet: value,
          idToSet: id,
        })
      );
    }
  }

  function setNewData({ currState, nameToSet, valueToSet, idToSet = 0 }) {
    const newData = [...currState];
    const entryId = idToSet
      ? newData.findIndex((section) => section.key === idToSet)
      : 0;
    const updatedData = {
      ...newData[entryId],
      [nameToSet]: valueToSet,
    };

    newData[entryId] = updatedData;

    return newData;
  }

  function handleNext() {
    setSectionId(sectionId + 1);
  }

  function handlePrevious() {
    setSectionId(sectionId - 1);
  }

  function handleAddSection() {
    if (sectionId === 1) {
      setEducationData((prev) => {
        return [
          ...prev,
          {
            key: crypto.randomUUID(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            city: "",
            description: "",
          },
        ];
      });
    } else if (sectionId === 2) {
      setEmploymentData((prev) => {
        return [
          ...prev,
          {
            key: crypto.randomUUID(),
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            city: "",
            description: "",
          },
        ];
      });
    }
  }

  return (
    <>
      <SectionsContainer
        onChange={handleChange}
        onAdd={handleAddSection}
        onPrev={handlePrevious}
        onNext={handleNext}
        personalData={personalData}
        educationData={educationData}
        employmentData={employmentData}
        sectionId={sectionId}
      />
    </>
  );
}

export default App;
