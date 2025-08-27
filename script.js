const numbersContainerEle = document.querySelector(".numbers");
const inputDisplayEle = document.getElementById("input-display");
const outputDisplayEle = document.getElementById("output-display");
const numbersOperatorsContainerEle = document.querySelector(
	".numbers-and-operators"
);
const equalsBtnEle = document.getElementById("equals");

function updateInputDisplay(inputDisplayElement, newValue) {
	let newDisplayStr = "";
	let prevDisplayStr = inputDisplayEle.textContent;

	if (Number.parseInt(newValue) || newValue === "0") {
		newDisplayStr = prevDisplayStr + newValue;
		inputDisplayElement.textContent = newDisplayStr;
		return;
	}

	newDisplayStr = `${prevDisplayStr} ${newValue} `;
	inputDisplayElement.textContent = newDisplayStr;
}

function getOutput(inputDisplayEle) {
	let inputArray = inputDisplayEle.textContent.split(" ");
	if (inputArray.length <= 2) {
		return inputArray[0];
	}

	let prevOperator = inputArray[1];
	let prevNumber = inputArray[0];

	for (let i = 2; i < inputArray.length; i++) {
		if (Number.parseInt(inputArray[i])) {
			prevNumber = runOperation(prevOperator, prevNumber, inputArray[i]);
		} else {
			prevOperator = inputArray[i];
		}
	}

	return Math.round(prevNumber * 100) / 100;
}

function runOperation(operator, value1, value2) {
	value1 = Number.parseInt(value1);
	value2 = Number.parseInt(value2);

	switch (operator) {
		case "+":
			return value1 + value2;
		case "-":
			return value1 - value2;
		case "/":
			return value1 / value2;
		case "x":
			return value1 * value2;
	}

	return NaN;
}

//Update the input field
numbersOperatorsContainerEle.addEventListener("click", (e) => {
	//Only runs on numbers and operator buttons
	if (e.target.className === "operator" || e.target.className === "number") {
		updateInputDisplay(inputDisplayEle, e.target.textContent);
	}
});

//Calculate and update the output field
equalsBtnEle.addEventListener("click", (e) => {
	outputDisplayEle.textContent = `= ${getOutput(inputDisplayEle)}`;
});
