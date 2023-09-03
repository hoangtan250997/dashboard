import { DragDropContext, Droppable } from "react-beautiful-dnd";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => <ul className="characters">...</ul>}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
