module.exports = [
  {
    type: 'input',
    name: 'Name',
    message: "What's the new component's name?",
  },
  {
    type: 'select',
    name: 'Subfolder',
    message: 'Which feature subfolder should the new component go in?',
    choices: [
      '',
      // leave this line - injected features automatically inserted above this line
    ],
  },
];
