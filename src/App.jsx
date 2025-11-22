import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { CvPreview } from "./components/CvPreview.jsx";
import { CvEditor } from "./components/CvEditor.jsx";
import { initialData } from "./initialData.js";

function App() {
  const initialDataCopy = JSON.parse(JSON.stringify(initialData));
  const [inputData, setInputData] = useState(initialDataCopy);
  const [sectionId, setSectionId] = useState(0);
  const [isEdit, setIsEdit] = useState(true);
  const [activeId, setActiveId] = useState(null);

  function handleChange(e) {
    let name = e.target.name;
    if (name.includes("-")) {
      name = name.split("-")[0];
    }
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const id = e.target.getAttribute("data-objid");
    setInputData((prev) =>
      setNewData({
        currState: prev,
        nameToSet: name,
        valueToSet: value,
        idToSet: id,
      })
    );
  }

  function setNewData({ currState, nameToSet, valueToSet, idToSet = 0 }) {
    const newData = [...currState];
    const entryIds = getSectionsIndices(newData, idToSet);
    if (entryIds === undefined) console.log("Couldn't find the id");
    const updatedData = {
      ...newData[entryIds[0]].sectionCards[entryIds[1]],
      [nameToSet]: valueToSet,
    };
    newData[entryIds[0]].sectionCards[entryIds[1]] = updatedData;

    return newData;
  }

  function getSectionsIndices(data, id) {
    for (let i = 0; i < data.length; i++) {
      let index = data[i].sectionCards.findIndex(
        (section) => section.key === id
      );
      if (index > -1) {
        return [i, index];
      }
    }
  }

  function handleNext() {
    setSectionId((prev) => prev + 1);
  }

  function handlePrevious() {
    setSectionId((prev) => prev - 1);
  }

  function handleAddSection() {
    setInputData((prev) => {
      const newData = [...prev];
      const keys = Object.keys(initialDataCopy[sectionId].sectionCards[0]);
      const newSection = getNewSectionCard(keys);
      const updatedData = [...newData[sectionId].sectionCards, newSection];
      newData[sectionId] = {
        ...newData[sectionId],
        sectionCards: updatedData,
      };
      return newData;
    });
  }

  function handleClearAllData() {
    const oldData = [...initialDataCopy];
    const newData = [];
    oldData.forEach((section, index) => {
      let keys = Object.keys(section.sectionCards[0]);
      let newSection = {
        order: initialDataCopy[index].order,
        sectionCards: [getNewSectionCard(keys)],
      };
      newData.push(newSection);
    });

    setInputData(newData);
  }

  function getNewSectionCard(keys) {
    const sectionCard = {};
    keys.forEach((name) => {
      if (name === "key") {
        sectionCard[name] = crypto.randomUUID();
        return;
      }
      if (name === "isCurrent") {
        sectionCard[name] = false;
        return;
      }
      if (name === "level") {
        sectionCard[name] = "none";
        return;
      }
      sectionCard[name] = "";
    });
    return sectionCard;
  }

  function handleDeleteSection(e) {
    const id = e.currentTarget.getAttribute("data-objid");
    setInputData((prev) => {
      const newData = [...prev];
      const indices = getSectionsIndices(newData, id);
      if (indices === undefined) return newData;
      newData[indices[0]].sectionCards = [
        ...newData[indices[0]].sectionCards.slice(0, indices[1]),
        ...newData[indices[0]].sectionCards.slice(indices[1] + 1),
      ];

      return newData;
    });
  }

  function handleClearSpecificData(e) {
    const id = e.currentTarget.getAttribute("data-objid");
    setInputData((prev) => {
      const newData = [...prev];
      const indices = getSectionsIndices(newData, id);
      if (indices === undefined) return newData;
      const keys = Object.keys(newData[indices[0]].sectionCards[indices[1]]);
      const newSection = getNewSectionCard(keys);
      newData[indices[0]] = {
        ...newData[indices[0]],
        sectionCards: [...newData[indices[0]].sectionCards],
      };
      newData[indices[0]].sectionCards[indices[1]] = {
        ...newSection,
      };

      return newData;
    });
  }

  function handleViewChange() {
    setIsEdit((prev) => !prev);
  }

  function handleGoTo(e) {
    if (e.target.nodeName !== "H1") return;
    const id = parseInt(e.currentTarget.getAttribute("data-sectionid"));
    setSectionId(id);
  }

  function handleDragStart(e) {
    setActiveId(parseInt(e.active.id));
  }

  function handleDragEnd(e) {
    const { over } = e;
    if (!over || activeId === over.id) return;

    const oldIndex = parseInt(activeId);
    const newIndex = parseInt(over.id);

    setInputData((prev) => {
      const newData = [...prev];
      const oldOrder = getSectionOrder([...prev]);
      const oldOrderIndex = oldOrder.indexOf(oldIndex);
      const newOrderIndex = oldOrder.indexOf(newIndex);

      const reorderedSectionIds = arrayMove(
        oldOrder,
        oldOrderIndex,
        newOrderIndex
      );

      reorderedSectionIds.forEach((sectionIndex, orderPosition) => {
        newData[sectionIndex] = {
          ...newData[sectionIndex],
          order: orderPosition,
        };
      });

      return newData;
    });
  }

  function getSectionOrder(data) {
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      let foundIndex = data.findIndex((obj) => obj.order === i);
      if (foundIndex === -1) console.log("no index found");
      arr.push(foundIndex);
    }
    return arr;
  }

  return (
    <>
      <header>
        <div className="header-buttons-container">
          <button onClick={handleClearAllData} title="Clear all data">
            Clear all
          </button>
          {
            <button onClick={handleViewChange} title="Toggle full preview mode">
              {isEdit ? "Full Preview" : "Edit"}
            </button>
          }
        </div>
      </header>
      <main>
        {isEdit && (
          <CvEditor
            onChange={handleChange}
            onAdd={handleAddSection}
            onPrev={handlePrevious}
            onNext={handleNext}
            onDelete={handleDeleteSection}
            onClear={handleClearSpecificData}
            inputData={inputData[sectionId].sectionCards}
            sectionId={sectionId}
          />
        )}
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <CvPreview
            inputData={inputData}
            sectionOrder={getSectionOrder(inputData)}
            isEdit={isEdit}
            onGoTo={handleGoTo}
            activeId={activeId}
          />
        </DndContext>
      </main>
    </>
  );
}

export default App;
