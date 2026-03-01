// Main application script
function loadSection(section) {
    const contentSection = document.getElementById('content-section');
    
    switch(section) {
        case 'fleet':
            contentSection.innerHTML = `
                <h2>Fleet Management</h2>
                <div class="fleet-grid">
                    <div class="fleet-item">
                        <h3>Truck #1</h3>
                        <p>Status: Available</p>
                        <p>Capacity: 10 tons</p>
                        <button onclick="assignVehicle('Truck #1')">Assign</button>
                    </div>
                    <div class="fleet-item">
                        <h3>Van #2</h3>
                        <p>Status: On Route</p>
                        <p>Capacity: 2 tons</p>
                        <button onclick="trackVehicle('Van #2')">Track</button>
                    </div>
                </div>
            `;
            break;
        
        case 'routes':
            contentSection.innerHTML = `
                <h2>Route Management</h2>
                <div class="route-list">
                    <div class="route-item">
                        <h3>Route A: City Center to Airport</h3>
                        <p>Distance: 25 km | Duration: 45 min</p>
                        <p>Status: Active</p>
                    </div>
                    <div class="route-item">
                        <h3>Route B: Warehouse to Port</h3>
                        <p>Distance: 50 km | Duration: 90 min</p>
                        <p>Status: Scheduled</p>
                    </div>
                </div>
            `;
            break;
            
        case 'bookings':
            contentSection.innerHTML = `
                <h2>New Booking</h2>
                <form id="bookingForm">
                    <div class="form-group">
                        <label for="customerName">Customer Name:</label>
                        <input type="text" id="customerName" required>
                    </div>
                    <div class="form-group">
                        <label for="pickupLocation">Pickup Location:</label>
                        <input type="text" id="pickupLocation" required>
                    </div>
                    <div class="form-group">
                        <label for="deliveryLocation">Delivery Location:</label>
                        <input type="text" id="deliveryLocation" required>
                    </div>
                    <div class="form-group">
                        <label for="cargoType">Cargo Type:</label>
                        <select id="cargoType">
                            <option value="general">General</option>
                            <option value="perishable">Perishable</option>
                            <option value="hazardous">Hazardous</option>
                        </select>
                    </div>
                    <button type="submit">Create Booking</button>
                </form>
            `;
            
            document.getElementById('bookingForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Booking created successfully!');
                this.reset();
            });
            break;
            
        case 'reports':
            contentSection.innerHTML = `
                <h2>Reports</h2>
                <div class="report-options">
                    <button onclick="generateReport('daily')">Daily Report</button>
                    <button onclick="generateReport('weekly')">Weekly Report</button>
                    <button onclick="generateReport('monthly')">Monthly Report</button>
                </div>
                <div id="report-content" style="margin-top: 1rem;"></div>
            `;
            break;
            
        default:
            contentSection.innerHTML = '<p>Select an option from the dashboard</p>';
    }
}

function assignVehicle(vehicle) {
    alert('Assigning ' + vehicle + ' to a new route');
}

function trackVehicle(vehicle) {
    alert('Tracking ' + vehicle + ' in real-time');
}

function generateReport(type) {
    const reportContent = document.getElementById('report-content');
    reportContent.innerHTML = `<p>Generating ${type} report...</p>`;
    
    // Simulate report generation
    setTimeout(() => {
        reportContent.innerHTML = `
            <div class="report">
                <h3>${type.charAt(0).toUpperCase() + type.slice(1)} Report</h3>
                <p>Total Trips: 42</p>
                <p>Total Revenue: $12,500</p>
                <p>Average Rating: 4.7/5</p>
            </div>
        `;
    }, 1000);
}

// Initialize dashboard
window.onload = function() {
    // Could load initial data from API here
    console.log('Transport Management System loaded');
};