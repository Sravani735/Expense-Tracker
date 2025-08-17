import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from "react-icons/lu";

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-pink-50 text-pink rounded">
          {icon ? (
            <img src={icon} alt="Icon" className="" />
          ) : (
            <LuImage />
          )}
        </div>
        <p className="relative">{icon ? "Change Icon" : "Pick Icon"}</p>
      </div>

      {isOpen && (
        <div className="absolute z-10 bg-white shadow-md border p-2 rounded">
          <div className="flex justify-end mb-1">
            <LuX
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              onSelect(emojiData.emoji);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
