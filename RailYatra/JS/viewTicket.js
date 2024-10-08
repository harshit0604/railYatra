document.addEventListener('DOMContentLoaded', function () {
    const ticketData = [
        {
            ticketId: '10101',
            trainId: 'Train 101',
            userId: 'USR12345',
            userName: 'John Doe',
            boardingStation: 'Delhi',
            destinationStation: 'Mumbai',
            boardingTime: '2024-10-10 09:00 AM',
            arrivalTime: '2024-10-10 05:00 PM',
            numberOfTickets: 2
        },
        {
            ticketId: '10102',
            trainId: 'Train 102',
            userId: 'USR12346',
            userName: 'Jane Smith',
            boardingStation: 'Delhi',
            destinationStation: 'Bangalore',
            boardingTime: '2024-10-12 07:30 AM',
            arrivalTime: '2024-10-12 07:00 PM',
            numberOfTickets: 1
        }
        // Add more ticket data as needed
    ];

    const ticketInfo = document.getElementById('ticketInfo');

    ticketData.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ticket.ticketId}</td>
            <td>${ticket.trainId}</td>
            <td>${ticket.userId}</td>
            <td>${ticket.userName}</td>
            <td>${ticket.boardingStation}</td>
            <td>${ticket.destinationStation}</td>
            <td>${ticket.boardingTime}</td>
            <td>${ticket.arrivalTime}</td>
            <td>${ticket.numberOfTickets}</td>
            <td><button class="cancel-btn" data-id="${ticket.ticketId}">Cancel</button></td>
        `;
        ticketInfo.appendChild(row);
    });

    // Handling ticket cancellation
    document.querySelectorAll('.cancel-btn').forEach(button => {
        button.addEventListener('click', function () {
            const ticketId = this.getAttribute('data-id');
            const confirmation = confirm(`Are you sure you want to cancel ticket ${ticketId}?`);
            if (confirmation) {
                alert(`Ticket ${ticketId} has been canceled.`);
                // In a real app, you'd also send a request to the server to cancel the ticket
            }
        });
    });
});
