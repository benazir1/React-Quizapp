React Components:
App Component:

The main component for your application.
Manages the state, including the current question index, the user's score, and whether to display the final score.
Renders either the quiz questions or the final score based on the state.
Functions:

selectOption: Handles the logic when a user selects an option for a question. Updates the score and moves to the next question or displays the final score.
reset: Resets the quiz to the initial state, allowing the user to restart.
Quiz Structure:
Question Data:

Questions are stored in a separate file (Questions.js), which is imported into the main component.
Each question has a question prompt, options, and the correct answer index.
Rendering Questions:

The current question is dynamically rendered along with its options.
The user can click on an option to answer the question.
Styling:

The quiz container has a responsive and visually appealing design.
Questions are displayed within a styled container with appropriate padding, colors, and a box shadow.
Options are presented in a grid layout for better organization.
Feedback and Restart:

After answering all questions, the user's final score is displayed.
A button allows the user to restart the quiz.
CSS Styling:
Global Styling:

Applies a common font style and removes default margin and padding on all elements.
Quiz Container Styling:

Utilizes flexbox for centering the quiz content vertically and horizontally.
Applies a gradient background to the container.
Question Styling:

Sets up padding, border-radius, and background color for the question container.
Uses flexbox for vertical alignment of content within the question container.
Option Styling:

Styles the list of options with grid layout and specific padding.
Provides a hover effect with a box-shadow for a better interactive experience.


Deployed in Netlify-https://keen-heliotrope-45952d.netlify.app
