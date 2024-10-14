"use client";

import LinkDropArea from "@/components/dragndrop/link-drop-area";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import links from "@/data/links";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { LinkSimple, Plus } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const SocialLink = () => {
  const [socialLinks, setSocialLinks] = useState(links.slice(0, 7));

  const getPrimaryLinkPosition = (id) =>
    socialLinks.findIndex((primaryLink) => primaryLink.id === id);

  const handlePrimaryDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setSocialLinks((socialLinks) => {
      const originalPosition = getPrimaryLinkPosition(active.id);
      const newPosition = getPrimaryLinkPosition(over.id);

      return arrayMove(socialLinks, originalPosition, newPosition);
    });
  };

  const handleLinkSelection = (link) => {
    const isAlreadySelected = socialLinks.some(
      (selectedLink) => selectedLink.id === link.id
    );

    if (isAlreadySelected) {
      toast.info("This link is already added.");
      return;
    }

    setSocialLinks((prevLinks) => [...prevLinks, link]);
  };

  const handleRemoveSelectedLinks = (linkToRemoveId) => {
    setSocialLinks((prevLinks) =>
      prevLinks.filter((link) => link.id !== linkToRemoveId)
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="space-y-4">
      <div className="space-y-0">
        <h4>Web & Social Links</h4>
        <small>
          Link your social media accounts to make it easy for others to find you
        </small>
      </div>
      <DndContext
        sensors={sensors}
        onDragEnd={handlePrimaryDragEnd}
        collisionDetection={closestCorners}
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="primary-link"
          className="bg-neutral-800 rounded-3xl px-4 shadow-md"
        >
          <AccordionItem value="primary-link">
            <AccordionTrigger>
              <h5 className="flex items-center gap-2">
                <LinkSimple weight="light" />
                Primary Links
              </h5>
            </AccordionTrigger>
            <LinkDropArea
              links={socialLinks.slice(0, 3)}
              handleRemoveSelectedLinks={handleRemoveSelectedLinks}
            />
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          defaultValue="social-link"
          className="bg-neutral-800 rounded-3xl px-4 pb-4 shadow-md"
        >
          <AccordionItem value="social-link">
            <AccordionTrigger>
              <h5 className="flex items-center gap-2">
                <LinkSimple weight="light" />
                Other Social Links
                <span className="font-normal text-base">(optional)</span>
              </h5>
            </AccordionTrigger>
            <LinkDropArea
              links={socialLinks.slice(3)}
              handleRemoveSelectedLinks={handleRemoveSelectedLinks}
            />

            <Drawer>
              <DrawerTrigger asChild>
                <Button className="flex gap-2 px-6" variant="icon">
                  <Plus size={20} />
                  Add More Link
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <ScrollArea className="h-full w-full">
                  <DrawerHeader>
                    <DrawerTitle>Social Media Links</DrawerTitle>
                    <DrawerDescription>
                      Choose your social links and add them to your account.
                    </DrawerDescription>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                      {links.map((link) => (
                        <div
                          key={link.id}
                          className={`flex items-center gap-4 bg-neutral-800/50 rounded-lg p-4 ${
                            socialLinks.some(
                              (selectedLink) => selectedLink.id === link.id
                            )
                              ? "bg-blue-500/10 border border-blue-600"
                              : "cursor-pointer border border-neutral-800"
                          }`}
                          onClick={() => handleLinkSelection(link)}
                        >
                          <Image
                            src={link.logo}
                            alt={`${link.name}-image`}
                            width={32}
                            height={32}
                            priority
                          />
                          <p>{link.name}</p>
                        </div>
                      ))}
                    </div>
                  </DrawerHeader>
                </ScrollArea>
              </DrawerContent>
            </Drawer>
          </AccordionItem>
        </Accordion>
      </DndContext>
    </div>
  );
};

export default SocialLink;
