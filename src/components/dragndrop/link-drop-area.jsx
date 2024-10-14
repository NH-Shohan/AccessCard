"use client";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import LinkDragItem from "./link-drag-item";

const LinkDropArea = ({ links, handleRemoveSelectedLinks }) => {
  return (
    <div>
      <SortableContext items={links} strategy={verticalListSortingStrategy}>
        {links.map((link, index) => (
          <LinkDragItem
            id={link.id}
            website={link.website}
            name={link.name}
            key={link.id}
            index={index}
            handleRemoveSelectedLinks={handleRemoveSelectedLinks}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default LinkDropArea;
