console.log("✅ JavaScript file is running!");

// Sample JSON API (Replace with your chosen dataset)
const apiUrl = "https://www.filesampleshub.com/download/code/json/sample2.json"; // Sample API for users

// Function to display JSON data in the HTML page
function displayData(data) {
    const outputElement = document.getElementById("json-output");
    if (!outputElement) {
        console.error("⚠️ Element with ID 'json-output' not found.");
        return;
    }
    outputElement.textContent = JSON.stringify(data, null, 2);
}

// 1️⃣ Fetch Data Using Callbacks
function fetchDataWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback("Error fetching data", null);
        }
    };

    xhr.onerror = function () {
        callback("Network error", null);
    };

    xhr.send();
}

// Call the function and log data
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Callback Error:", error);
    } else {
        console.log("Callback Data:", data);
    }
});

// 2️⃣ Fetch Data Using Promises (.then & .catch)
function fetchDataWithPromise() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => console.log("Promise Data:", data))
        .catch(error => console.error("Promise Error:", error));
}

fetchDataWithPromise();

// 3️⃣ Fetch Data Using Async/Await (try & catch)
async function fetchDataWithAsyncAwait() {
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        console.log("Async/Await Data:", data);
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}

fetchDataWithAsyncAwait();
