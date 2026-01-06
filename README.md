# SortingViz

Live Demo: https://sortingviz.streamlit.app/

SortingViz is an interactive and responsive web application that visually demonstrates how classical sorting algorithms operate in real time. The project is designed to build strong algorithmic intuition through clear animations, structured explanations, and a clean user interface.

## Overview

SortingViz enables users to observe sorting algorithms step by step, highlighting comparisons, swaps, and final ordering. It is intended for students learning data structures, candidates preparing for technical interviews, and anyone interested in understanding algorithmic behavior visually.

The application is implemented using a pure frontend stack and is hosted through Streamlit as a lightweight deployment wrapper.

## Features

- Real-time visualization of six classical sorting algorithms  
- Fully responsive layout supporting desktop, tablet, and mobile screens  
- Light and dark themes with consistent aesthetic design  
- Color-coded animation states for clear visual interpretation  
- Algorithm information panel with explanations and complexity analysis  
- Adjustable array size and animation speed controls  
- Visual legend explaining comparison, swap, and sorted states  
- Minimal and focused interface optimized for learning

## Supported Algorithms

- Bubble Sort  
- Selection Sort  
- Insertion Sort  
- Merge Sort  
- Quick Sort  
- Heap Sort  

Each algorithm includes best-case, average-case, and worst-case time complexity, along with space complexity and a brief intuitive explanation.

## User Interface and Responsiveness

The interface is designed to keep the sorting visualization visible within the viewport without unnecessary scrolling. Layouts adapt dynamically across screen sizes to ensure usability on laptops, tablets, and mobile devices. Controls and information panels reposition automatically based on available screen space.

## Themes

SortingViz supports both light and dark themes. The themes are designed using a structured color system to maintain readability, visual consistency, and accessibility across different viewing environments. Theme preferences persist across sessions.

## How to Use

1. Select a sorting algorithm from the available options  
2. Adjust the array size and animation speed as needed  
3. Generate a new array if required  
4. Start the sorting process  
5. Observe the animation and refer to the information panel for algorithm details  

The color legend explains the meaning of each visual state during execution.

## Technology Stack

Frontend  
HTML  
CSS  
JavaScript  

Deployment  
Streamlit  

The sorting logic and animations run entirely in the browser. Streamlit is used only as a hosting wrapper and does not modify the frontend behavior.

## Project Motivation

SortingViz was created to bridge the gap between theoretical understanding and practical intuition of sorting algorithms. By visualizing algorithm execution, users can better grasp time complexity, space usage, and behavioral differences between approaches.

## Future Enhancements

- Pause and resume functionality  
- Step-by-step execution mode  
- Preset input arrays such as sorted, reverse-sorted, and nearly sorted  
- Exportable animations  
- Additional algorithm comparisons  

## License

This project is open source and available for educational and non-commercial use.
