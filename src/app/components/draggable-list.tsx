import React from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Item } from "@/app/utils/item";

function ListItem({ item, index }: { item: Item; index: number }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-gray-200 p-3 rounded-md text-black cursor-move"
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
}

export function DraggableList({
  items,
  onDragEnd,
}: {
  items: Item[];
  onDragEnd: (result: any) => void;
}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="border border-sky-500 inline-block">
        <Droppable droppableId="droppableList" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-row overflow-x-auto space-x-3 p-3"
            >
              {items.map((item, index) => (
                <ListItem key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
