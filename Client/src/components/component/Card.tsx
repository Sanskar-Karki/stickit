import React, { useState, useEffect, MouseEvent, KeyboardEvent } from "react";

interface CardProps {
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  defaultText?: string;
  onResize?: (size: { width: number; height: number }) => void;
  onDrag?: (position: { x: number; y: number }) => void;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({
  defaultPosition = { x: 0, y: 0 },
  defaultSize = { width: 300, height: 100 },
  defaultText = "Enter your note here...",
  onResize,
  onDrag,
  backgroundColor = "#fef5d4",
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [size, setSize] = useState(defaultSize);

  const clampPosition = (x: number, y: number) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    return {
      x: Math.min(Math.max(0, x), screenWidth - size.width),
      y: Math.min(Math.max(0, y), screenHeight - size.height),
    };
  };

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".resize-handle")) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setDragging({
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    });
  };

  const handleDragMove = (e: MouseEvent) => {
    if (dragging) {
      const newPosition = clampPosition(
        e.clientX - (dragging as any).offsetX,
        e.clientY - (dragging as any).offsetY
      );
      setPosition(newPosition);
      onDrag?.(newPosition);
    }
    if (resizing) {
      const newSize = {
        width: Math.max(200, e.clientX - position.x),
        height: Math.max(100, e.clientY - position.y),
      };
      setSize(newSize);
      onResize?.(newSize);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setResizing(false);
  };

  const handleResizeStart = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setResizing(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;

    if (e.key === "Tab") {
      e.preventDefault(); // Prevent default tab behavior

      const cursorPos = textarea.selectionStart;
      const currentText = textarea.value;

      // Insert bullet at the cursor position
      const newText =
        currentText.slice(0, cursorPos) +
        "\u2022 " +
        currentText.slice(cursorPos);

      // Set new value with bullet
      textarea.value = newText;

      // Move the cursor to the right of the bullet
      textarea.selectionStart = cursorPos + 2;
      textarea.selectionEnd = textarea.selectionStart;
    }
  };

  useEffect(() => {
    if (dragging || resizing) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleDragMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragging, resizing]);

  return (
    <div
      className="rounded-lg shadow-lg transform rotate-1"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        cursor: dragging ? "grabbing" : "grab",
        boxShadow: "2px 3px 15px rgba(0,0,0,0.2)",
        background: `radial-gradient(circle at 20px 20px, #718096 1px, transparent 1px) 0 0 / 20px 20px, ${backgroundColor}`,
      }}
      onMouseDown={handleDragStart}
    >
      <textarea
        className="cursor-pointer w-full h-full p-4 border-none resize-none focus:outline-none rounded-lg font-sans text-gray-700"
        defaultValue={defaultText}
        style={{
          background: "transparent",
          lineHeight: "24px",
        }}
        onKeyDown={handleKeyDown}
      />
      <div
        className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-50 hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, transparent 50%, #718096 50%)",
        }}
        onMouseDown={handleResizeStart}
      />
    </div>
  );
};

export default Card;
