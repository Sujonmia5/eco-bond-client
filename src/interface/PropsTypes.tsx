export type TTitleComponent = {
  title: string;
  subtitle: string;
  position?: "center" | "end" | "start";
};

export type TFAQComponent = {
  data: {
    question: string;
    answer: string;
  };
  keyNum: number;
};
