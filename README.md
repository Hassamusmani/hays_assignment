# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 1️⃣ Header.js (Controls Grid Size)

📍 Functionality
Allows users to set the number of rows and columns via input fields.
Updates rows and cols in GridContext when the input changes.
📍 Key Interactions
User Inputs a New Row or Column Count

The onChangeHandler updates rows or cols in context.
This triggers a re-render in RasterGrid and CellList, updating the grid size.
Context API Integration

Uses useGrid() to access rows, cols, setRows, and setCols.
Ensures state updates propagate to all dependent components.

### 2️⃣ CellList.js (Manages Cell Visibility)

📍 Functionality
Displays a list of grid cells with toggleable visibility.
Clicking a cell toggles its visibility in GridContext.
📍 Key Interactions
User Clicks on a Cell

Calls toggleVisibility(index), which updates the visibility state.
The change reflects in both CellList and RasterGrid.
Visibility State Management

Uses useGrid() to get visibility and toggleVisibility().
Dynamically assigns a class based on visibility (active or hidden).

### 3️⃣ RasterGrid.js (Displays the Grid)

📍 Functionality
Creates a grid layout based on rows and cols.
Shows/hides grid cells based on visibility state.
📍 Key Interactions
User Changes Grid Size (Header Interaction)

rows and cols update, dynamically adjusting the grid.
User Toggles Visibility (CellList Interaction)

visibility array determines whether each grid cell is visible.
If visibility[i] === false, the cell is hidden via CSS.

### 4️⃣ Home.js (Page Layout)

📍 Functionality
Wraps CellList and RasterGrid in a semantic <main> container.
Ensures proper alignment and interaction between components.
📍 Key Interactions
State Changes in Header

Updates the grid and cell list dynamically.
Clicking a Cell in CellList

Updates visibility, affecting the corresponding grid cell.
