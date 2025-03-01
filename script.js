function calculateDerivative() {
    let inputFunction = document.getElementById("functionInput").value;
    try {
        let derivative = math.derivative(inputFunction, "x").toString();
        document.getElementById("result").innerHTML = `Derivative: ${derivative}`;
    } catch (error) {
        document.getElementById("result").innerHTML = "Invalid function. Please try again.";
    }
}
