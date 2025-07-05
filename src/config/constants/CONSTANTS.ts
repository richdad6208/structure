export const ENV = {
  SERVER_API_URL: import.meta.env.VITE_SERVER_API_URL,
} as const;

export const tw = {
  layout: {
    px: "px-6",
    content: "center h-[calc(100dvh-80px)]",
  },
  font: {
    h2: "text-3xl font-bold",
  },
};
