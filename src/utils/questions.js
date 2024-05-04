import { questionType } from "./consts";

export const questions = [
  {
    id: 1,
    type: questionType.SINGLE_CORRECT_OPTION,
    question: "What is LESS?",
    options: [
      "A front-end framework for building responsive web applications.",
      "A CSS preprocessor that extends the capabilities of CSS.",
      "A server-side scripting language for building web applications.",
      "A version of CSS that is more concise and performant.",
    ],
    correctAnswers: "A CSS preprocessor that extends the capabilities of CSS.",
  },
  {
    id: 2,
    type: questionType.SINGLE_CORRECT_OPTION,
    question: "What does LESS allow you to do?",
    options: [
      "Write SQL queries in CSS files.",
      "Compile CSS code from JavaScript files.",
      "Use variables, mixins, and nesting to simplify CSS coding.",
      "Embed HTML directly into CSS files.",
    ],
    correctAnswers:
      "Use variables, mixins, and nesting to simplify CSS coding.",
  },

  {
    id: 3,
    question: "Less stands for?",
    type: questionType.SINGLE_CORRECT_OPTION,
    options: [
      "Leaner Style Sheets",
      "Lazy Style Sheets",
      "Lucky Style Sheets",
      "Low Style Sheets",
    ],
    correctAnswers: "Leaner Style Sheets",
  },
  {
    id: 4,
    question: "React Native is a framework for building web applications?",
    type: questionType.SINGLE_CORRECT_OPTION,
    options: ["True", "False"],
    correctAnswers: "False",
  },
  {
    id: 5,
    type: questionType.SINGLE_CORRECT_OPTION,
    question:
      "What is the main difference between functional and class components in React?",
    options: [
      "Functional components can have lifecycle methods, state, and instance methods.",
      "Class components can use hooks to handle state and lifecycle methods.",
      "Class components use a class-based syntax and can have lifecycle methods, state, and instance methods.",
      "Functional components use a class-based syntax and cannot handle state or lifecycle methods.",
    ],
    correctAnswers:
      "Class components use a class-based syntax and can have lifecycle methods, state, and instance methods.",
  },
  {
    id: 6,
    type: questionType.SINGLE_CORRECT_OPTION,
    question: "What is a controlled component in React?",
    options: [
      "A component whose value is managed directly by the DOM.",
      "A component that allows uncontrolled updates to its value.",
      "A component that cannot have any event handlers.",
      "A component whose value is controlled by the React state.",
    ],
    correctAnswers: "A component whose value is controlled by the React state.",
  },
  {
    id: 7,
    type: questionType.SINGLE_CORRECT_OPTION,
    question: "What is the purpose of React Router?",
    options: [
      "To provide state management for React applications.",
      "To provide routing and navigation for React applications.",
      "To provide data fetching utilities for React applications.",
      "To handle animations and transitions in React applications.",
    ],
    correctAnswers: "To provide routing and navigation for React applications.",
  },
  {
    id: 8,
    type: questionType.SINGLE_CORRECT_OPTION,
    question: "How does the `useEffect` hook work in React?",
    options: [
      "It sets the initial state for a functional component.",
      "It provides routing and navigation for a functional component.",
      "It performs side effects in a functional component and can return a cleanup function.",
      "It updates the Virtual DOM of a functional component.",
    ],
    correctAnswers:
      "It performs side effects in a functional component and can return a cleanup function.",
  },

  {
    id: 9,
    type: questionType.MULTIPLE_CORRECT_OPTIONS,
    question:
      "Which of the following are advantages of using the Virtual DOM in React?",
    options: [
      "Improved performance compared to direct DOM manipulation.",
      "Easier state management.",
      "Support for CSS preprocessors.",
      "Batching updates for efficient rendering.",
    ],
    correctAnswers: [
      "Improved performance compared to direct DOM manipulation.",
      "Batching updates for efficient rendering.",
    ],
  },
  {
    id: 10,
    type: "multipleCorrectOptions",
    question: "Which of the following are rules of React hooks?",
    options: [
      "Hooks can only be called at the top level of a function component.",
      "Hooks can be called conditionally or inside loops.",
      "Hooks can be called from custom hooks.",
      "Hooks should only be called from function components or custom hooks.",
    ],
    correctAnswers: [
      "Hooks can only be called at the top level of a function component.",
      "Hooks can be called from custom hooks.",
      "Hooks should only be called from function components or custom hooks.",
    ],
  },
];
