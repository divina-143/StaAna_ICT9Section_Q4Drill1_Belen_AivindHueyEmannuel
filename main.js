// Electricity Consumption Classifier

function checkUsage() {

    // variable (data type: number)
    let usage = parseFloat(document.getElementById("consumption").value);

    // validation
    if (isNaN(usage) || usage < 0) {
        document.getElementById("output").innerHTML =
            "Please enter a valid number.";
        return;
    }

    let category = "";
    let description = "";

    // conditional statements
    if (usage <= 100) {
        category = "Lifeline Consumer";
        description = "Discounted electricity rates";
    }
    else if (usage <= 200) {
        category = "Low Consumption";
        description = "Normal residential rate";
    }
    else if (usage <= 300) {
        category = "Average Consumption";
        description = "Typical electricity usage";
    }
    else if (usage <= 500) {
        category = "High Consumption";
        description = "Higher electricity usage";
    }
    else {
        category = "Very High Consumption";
        description = "Heavy electricity users";
    }

    // output
    document.getElementById("output").innerHTML =
        "Category: " + category + "<br>" +
        "Description: " + description;
}