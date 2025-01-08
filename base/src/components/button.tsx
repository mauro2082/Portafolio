import React from 'react';

interface Button {
  text: string;
  backgroundColor: string;
  textColor: string;
  borderColor?: string; // Opcional
  borderWidth?: string; // Opcional
  borderRadius?: string; // Opcional
  ariaLabel?: string; // Opcional
  // ... Puedes agregar más props según tus necesidades
}

export default function Button({
  text,
  backgroundColor,
  textColor,
  borderColor = 'transparent', // Valor por defecto
  borderWidth = '1px', // Valor por defecto
  borderRadius = '4px', // Valor por defecto
  ariaLabel,
}: Button) {
  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        border: `${borderWidth} solid ${borderColor}`,
        borderRadius,
      }}
      className="font-bold py-2 px-4"
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
