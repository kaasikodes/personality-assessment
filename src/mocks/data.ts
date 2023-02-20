import { TQuestion } from 'types';

export const questions: TQuestion[] = [
  {
    id: 1,

    content:
      'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    options: [
      {
        id: 1,
        content: 'Look at your watch every two minutes',
        extrovertValue: 2,
        introvertValue: 3,
      },
      {
        id: 2,
        content: 'Bubble with inner anger, but keep quiet',
        extrovertValue: 1,
        introvertValue: 4,
      },
      {
        id: 3,
        content:
          'Explain to other equally impatient people in the room that the doctor is always running late',
        extrovertValue: 4,
        introvertValue: 1,
      },
      {
        id: 4,

        content:
          'Complain in a loud voice, while tapping your foot impatiently',
        extrovertValue: 5,
        introvertValue: 0,
      },
    ],
  },
  {
    id: 2,

    content:
      '___ been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    options: [
      {
        id: 5,
        content: 'Look at your watch every two minutes',
        extrovertValue: 2,
        introvertValue: 3,
      },
      {
        id: 6,
        content: 'Bubble with inner anger, but keep quiet',
        extrovertValue: 1,
        introvertValue: 4,
      },
      {
        id: 7,
        content:
          'Explain to other equally impatient people in the room that the doctor is always running late',
        extrovertValue: 4,
        introvertValue: 1,
      },
      {
        id: 8,
        content:
          'Complain in a loud voice, while tapping your foot impatiently',
        extrovertValue: 5,
        introvertValue: 0,
      },
    ],
  },
  {
    id: 3,

    content:
      'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    options: [
      {
        id: 9,
        content: 'Look at your watch every two minutes',
        extrovertValue: 2,
        introvertValue: 3,
      },
      {
        id: 10,
        content: 'Bubble with inner anger, but keep quiet',
        extrovertValue: 1,
        introvertValue: 4,
      },
      {
        id: 11,
        content:
          'Explain to other equally impatient people in the room that the doctor is always running late',
        extrovertValue: 4,
        introvertValue: 1,
      },
      {
        id: 12,
        content:
          'Complain in a loud voice, while tapping your foot impatiently',
        extrovertValue: 5,
        introvertValue: 0,
      },
    ],
  },
];

// Tasks
// 1.) Create Data Models
// 2.) Create Data Types 4 backend
// 3.) Write Tests that fail b4 writing tests that pass
// 3.) Create Hooks 4 frontend
// 4.) Test the hooks created 4 frontend
// 5.) Create components that will use this hooks
