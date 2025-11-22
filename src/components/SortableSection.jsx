import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableSection({ sectionId, onGoTo, children, dragOverlay }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: sectionId });

  const style = {
    opacity: isDragging ? 0 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : undefined,
  };

  const overlayStyle = {
    cursor: "grabbing",
    zIndex: 9999,
    opacity: 0.95,
    transform: "scale(1.02)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
  };

  return (
    <section
      ref={parseInt(sectionId) ? setNodeRef : undefined}
      style={dragOverlay ? overlayStyle : style}
      data-sectionid={sectionId}
      onClick={onGoTo}
    >
      <div className="cv-section-subcontainer">
        {!!sectionId && !isDragging && (
          <div className="handle-container">
            <button
              className="drag-handle"
              {...attributes}
              {...listeners}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            ></button>
          </div>
        )}
        <div className="section-content-container">{children}</div>
      </div>
    </section>
  );
}
