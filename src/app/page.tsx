"use client";

import { DraggableList } from "@/app/components/draggable-list";
import { Item } from "@/app/utils/item";
import { ReOrder } from "@/app/utils/reorder";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState<Item[]>([
    { id: "item-1", content: "Job 1" },
    { id: "item-2", content: "Job 2" },
    { id: "item-3", content: "Job 3" },
    { id: "item-4", content: "Job 4" },
  ]);

  const [items2, setItems2] = useState<Item[]>([
    { id: "item-1", content: "Job 1" },
    { id: "item-2", content: "Job 2" },
    { id: "item-3", content: "Job 3" },
    { id: "item-4", content: "Job 4" },
  ]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const newItems = ReOrder(
      items,
      result.source.index,
      result.destination.index
    );
  
    setItems(newItems);
  };

  const onDragEnd2 = (result: any) => {
    if (!result.destination) return;
    const newItems = ReOrder(
      items2,
      result.source.index,
      result.destination.index
    );
  
    console.log(newItems);
    setItems2(newItems);
  }

  return (
    <>
      <div className="flex items-center gap-2 p-3">
        <h1>Machine 1</h1>
        <DraggableList items={items} onDragEnd={onDragEnd} />
      </div>
      <div className="flex items-center gap-2 p-3">
        <h1>Machine 2</h1>
        <DraggableList items={items2} onDragEnd={onDragEnd2} />
      </div>
      <div className="flex items-center gap-2 p-3">
        <h1>Machine 3</h1>
        <DraggableList items={items2} onDragEnd={onDragEnd2} />
      </div>
    </>
  );
}
