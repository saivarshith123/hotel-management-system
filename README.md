# Hotel Management System with Sensor Integration

This project is a **Hotel Management System** with sensor integration designed to manage room statuses across multiple floors. Each floor has a dedicated section where users can open and close room statuses, and changes persist through `localStorage` to keep track of room statuses across sessions.

## Table of Contents
- Project Overview
- Features
- Getting Started
  - Prerequisites
  - Installation
- Code Structure
  - HTML Files
  - CSS Files
  - JavaScript Files
- Usage
- Detailed Description of JavaScript Functions
  - Main Functions
- LocalStorage Integration
- Notifications
- Future Improvements

## Project Overview

This system displays rooms on six floors (101–110 on Floor 1, 201–210 on Floor 2, etc.), allowing users to:
- Open or close rooms.
- View last update times.
- Track changes via notifications.

Each room’s open/close state is saved to `localStorage`, so changes remain even after refreshing the page.

## Features

- **Floor Selection**: Home page with links to six floors (Floor 1 to Floor 6).
- **Room Control**: Each floor displays rooms (e.g., 101-110 for Floor 1). Users can toggle the "open" or "closed" status.
- **LocalStorage Persistence**: Room statuses are saved to `localStorage`, allowing for persistence across page loads.
- **Notifications**: Status changes are logged in a notifications panel.

## Getting Started

### Prerequisites

- A modern web browser (Google Chrome, Firefox, Safari, or Edge).
- No specific backend or server requirements as the project is purely front-end.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saivarshith123/hotel-management-system.git
   ```
2. Navigate to the project folder:
  ```bash
  cd hotel-management-system
  ```
3. Open the `index.html` file in your browser to start the application.

## Code Structure 

**HTML Files**
- **index.html**: Main page that displays floors and navigates to each floor’s page.
- **floor1.html - floor6.html**: Separate HTML files for each floor, containing room information and controls for floors 1 to 6.

**CSS Files**
- styles.css: Main stylesheet, containing styles for buttons, notifications, room status, and layout.

**JavaScript Files**
- script.js: Main JavaScript file containing room status functions, UI updates, and notification logging.

## Usage
1. Home Page (index.html): Select a floor to manage rooms on that floor.
2. Floor Pages (e.g., floor1.html):
    - Each floor page displays rooms (e.g., 101–110 on Floor 1).
    - Each room shows the current status (open/closed) and the last updated time.
    - Click "Open" or "Close" buttons to toggle a room’s status.
3. Notifications: Changes are recorded in the notifications panel on each floor page.

## Detailed Description of JavaScript Functions

**Main Functions**
Each floor page’s JavaScript contains the following main functions to manage room statuses and notifications:
- updateRoomStatus(roomId, status):
    - Updates the room's open/closed status on the UI.
    - Saves the new status to `localStorage`.
    - Updates the room’s `lastUpdated` time.
    - Adjusts button text and room status styles.
- loadRoomStatus(roomId):
    - Loads the room’s status from `localStorage`.
    - If a status exists in `localStorage`, it applies the stored status and updates the UI accordingly.
- Room Initialization:
    - For each room on the page, an event listener is added to the button for toggling its open/closed status.
    - When the button is clicked, it calls `updateRoomStatus()` to apply the new status, save it to `localStorage`, and log it in the notifications panel.
## Sample JavaScript Snippet
```javascript
// Sample data for rooms (101 to 110)
const rooms = [
    { id: '101', status: 'closed', lastUpdated: '2024-11-10T12:00:00' },
    // Add other rooms here...
];

// Function to update the room status on the UI
function updateRoomStatus(roomId, status) {
    const statusElement = document.getElementById(`status-${roomId}`);
    const button = document.getElementById(`btn-${roomId}`);

    // Update UI
    statusElement.textContent = status === 'open' ? 'Open' : 'Closed';
    statusElement.className = 'status ' + (status === 'open' ? 'open' : 'closed');
    button.textContent = status === 'open' ? 'Lock' : 'Unlock';

    // Save to localStorage
    localStorage.setItem(`room-${roomId}-status`, status);

    // Update room status in the array
    const room = rooms.find(r => r.id === roomId);
    if (room) {
        room.status = status;
        room.lastUpdated = new Date().toISOString();
    }
}
```
## LocalStorage Integration
The system uses `localStorage` to store room statuses. Each room’s status is stored with a unique key (`room-{roomId}-status`), enabling persistence even when the user navigates away or reloads the page. This ensures any change made to a room’s status remains consistent.

**Example Usage:**
```javascript
localStorage.setItem(`room-${roomId}-status`, status); // Save
const status = localStorage.getItem(`room-${roomId}-status`); // Load
```
## Notifications
Each time a room's status changes, a notification is generated in the notifications panel. The notification includes:
- The room number
- The new status (open/closed)
- A timestamp of the last update

This is handled by dynamically creating notification elements in JavaScript and inserting them at the top of the notifications panel.
```javascript
const notification = document.createElement('div');
notification.classList.add('notification');
notification.textContent = `Room ${room.id} is now ${newStatus}. Last updated at ${new Date().toISOString()}.`;
document.getElementById('notifications-list').prepend(notification);
```
## Future Improvements
Potential future enhancements:

1. Backend Integration: Adding a backend database to manage room statuses instead of `localStorage`.
2. Advanced Notification System: Ability to clear or sort notifications.
3. Responsive Design: Improved CSS to enhance the experience across different devices.
4. Sensor Integration: Real sensors to check occupancy and control the room's open/closed status.

## Author
**Gotam Sai Varshith**#
