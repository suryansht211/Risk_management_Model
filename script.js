document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const dataType = document.getElementById('data-type').value;
    const dataInput = document.getElementById('data-input').value;

    console.log(`Data Type: ${dataType}`);
    console.log(`Data Input: ${dataInput}`);

    addRiskInsight(dataType, dataInput);
    addRealTimeAlert(dataType, dataInput);
    addComplianceCheck(dataType, dataInput);

    document.getElementById('data-form').reset();
});

function addRiskInsight(type, input) {
    const insightDiv = document.createElement('div');
    insightDiv.className = 'col-md-4';
    insightDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Risk Insight</h5>
                <p class="card-text">Type: ${type}</p>
                <p class="card-text">Details: ${input}</p>
            </div>
        </div>
    `;
    document.getElementById('insights').appendChild(insightDiv);
}

function addRealTimeAlert(type, input) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'col-md-4';
    alertDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Real-Time Alert</h5>
                <p class="card-text">Type: ${type}</p>
                <p class="card-text">Details: ${input}</p>
            </div>
        </div>
    `;
    document.getElementById('alerts-container').appendChild(alertDiv);
}

function addComplianceCheck(type, input) {
    const complianceDiv = document.createElement('div');
    complianceDiv.className = 'col-md-4';
    complianceDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Compliance Check</h5>
                <p class="card-text">Type: ${type}</p>
                <p class="card-text">Details: ${input}</p>
            </div>
        </div>
    `;
    document.getElementById('compliance-container').appendChild(complianceDiv);
}
