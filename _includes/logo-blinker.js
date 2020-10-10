var rows = 4;
var columns = 4;
var timeIncrement = 80;
var duration = 80;

var logos = document.querySelectorAll('.logo--animated');
var matrix = Array.from(logos).reduce(function (memo, logo) {
	memo[memo.length - 1].push(logo);

	if (memo[memo.length - 1].length === columns) {
		memo.push([]);
	}

	return memo;
}, [[]]);

function toggleClassNameBetween(element, className, start) {
	setTimeout(function () {
		element.classList.add(className);

		setTimeout(function () {
			element.classList.remove(className);
		}, duration);
	}, start);
}

function processElement(element, time) {
	toggleClassNameBetween(element, 'logo--color', time);
	return time + timeIncrement;
}

function blinkLinear() {
	var time = timeIncrement;

	for (var i = 0; i < logos.length; i++) {
		time = processElement(logos[i], time);
	}
}

function blinkPulse() {
	var time = timeIncrement;

	for (var row = 0; row < rows; row++) {
		for (var column = 0; column <= row; column++) {
			if (row === column) {
				time = processElement(matrix[row][column], time);

				for (var i = row - 1; i >= 0; i--) {
					processElement(matrix[row][i], time);
					time = processElement(matrix[i][column], time);
				}
			}
		}
	}
}

function blinkSpiral() {
	var time = timeIncrement;

	var top = 0;
	var bottom = rows - 1;
	var left = 0;
	var right = columns - 1;

	while (top <= bottom && left <= right) {
		var i;

		for (i = left; i <= right; i++) {
			time = processElement(matrix[left][i], time);
		}

		top++;

		for (i = top; i <= bottom; i++) {
			time = processElement(matrix[i][right], time);
		}

		right--;

		for (i = right; i >= left; i--) {
			time = processElement(matrix[bottom][i], time);
		}

		bottom--;

		for (i = bottom; i >= top; i--) {
			time = processElement(matrix[i][left], time);
		}

		left++;
	}
}

var blinks = [
	blinkSpiral,
	blinkPulse,
	blinkLinear
];

var toggle = 0;

setInterval(function () {
	blinks[toggle]();
	toggle = (toggle + 1) % blinks.length;
}, 5000);

