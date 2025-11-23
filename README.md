# CV App

[Live Demo](https://c-v-builder.netlify.app/)
Interactive resume/CV builder built with React that allows users to create, edit, and preview their curriculum vitae with drag-and-drop section reordering.

## Features

- **Dual-View Interface**: Toggle between edit mode and full preview mode
- **Drag-and-Drop Reordering**: Smoothly reorder CV sections with live visual feedback
- **Multiple Section Types**:
  - Personal Information
  - Education
  - Employment History
  - Languages
  - Technical Skills
  - Courses & Certifications
  - Professional Summary
  - Links
  - Hobbies

- **Section Management**: Add, delete, or clear individual section entries
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-Time Editing**: Changes reflect immediately in the preview
- **Progress Tracking**: Visual progress bar in editor window

## Drag & Drop Implementation

The app uses `@dnd-kit/sortable` for smooth, accessible drag-and-drop:

- **Live Reordering**: Sections reorder as you hover with a dragged item
- **Smooth Animations**: CSS transforms animate sections into new positions
- **Visual Feedback**: Opacity and scale changes indicate drag state
- **Drag Overlay**: Active dragged section appears elevated above other elements

## Responsive Design

- **Laptop/Desktop (1181px+)**: Full multi-column layout
- **Tablet/Laptop (795px-1180px)**: Adjusted grid, double column layout
- **Mobile/Tablet (<795px)**: Single column
