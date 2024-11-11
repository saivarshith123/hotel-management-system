// Sample data for rooms (101 to 110)
const rooms = [
    { id: '101', status: 'closed', lastUpdated: '2024-11-10T12:00:00' },
    { id: '102', status: 'closed', lastUpdated: '2024-11-10T12:05:00' },
    { id: '103', status: 'closed', lastUpdated: '2024-11-10T12:10:00' },
    { id: '104', status: 'closed', lastUpdated: '2024-11-10T12:15:00' },
    { id: '105', status: 'closed', lastUpdated: '2024-11-10T12:20:00' },
    { id: '106', status: 'closed', lastUpdated: '2024-11-10T12:25:00' },
    { id: '107', status: 'closed', lastUpdated: '2024-11-10T12:30:00' },
    { id: '108', status: 'closed', lastUpdated: '2024-11-10T12:35:00' },
    { id: '109', status: 'closed', lastUpdated: '2024-11-10T12:40:00' },
    { id: '110', status: 'closed', lastUpdated: '2024-11-10T12:45:00' }
];

// Function to update the room status on the UI
function updateRoomStatus(roomId, status) {
    const statusElement = document.getElementById(`status-${roomId}`);
    const button = document.getElementById(`btn-${roomId}`);

    // Update the status element on the UI
    statusElement.textContent = status === 'open' ? 'Open' : 'Closed';
    statusElement.className = 'status ' + (status === 'open' ? 'open' : 'closed');
    button.textContent = status === 'open' ? 'Lock' : 'Unlock';

    // Save the updated status to localStorage
    localStorage.setItem(`room-${roomId}-status`, status);

    // Update the room status in the rooms array to reflect the change
    const room = rooms.find(r => r.id === roomId);
    if (room) {
        room.status = status;
        room.lastUpdated = new Date().toISOString();
    }
}

// Function to load and set room statuses from local storage
function loadRoomStatus(roomId) {
    const status = localStorage.getItem(`room-${roomId}-status`);
    if (status) {
        updateRoomStatus(roomId, status);
    }
}

// Load room statuses when the page loads
rooms.forEach(room => {
    loadRoomStatus(room.id); // Load the status from localStorage if it exists

    const button = document.getElementById(`btn-${room.id}`);
    button.addEventListener('click', () => {
        const newStatus = room.status === 'open' ? 'closed' : 'open';
        updateRoomStatus(room.id, newStatus);

        // Log the status change in notifications
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = `Room ${room.id} is now ${newStatus}. Last updated at ${new Date().toISOString()}.`;
        document.getElementById('notifications-list').prepend(notification);
    });
});
