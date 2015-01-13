function RegExpBuilder(arr) {
	var str = '';
	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i]
		.replace(/\*/g, '\\\*')
		.replace(/\?/g, '\\\?')
		.replace(/\+/g, '\\\+')
		.replace(/\./g, '\\\.')
		.replace(/\(/g, '\\\(')
		.replace(/\)/g, '\\\)')
		.replace(/\//g, '\\\/')
		.replace(/\\/g, '\\\\')
		.replace(/\^/g, '\\\^')
		.replace(/\$/g, '\\\$')
		.replace(/\-/g, '\\\-')
		.replace(/\|/g, '\\\|')
		.replace(/\{/g, '\\\{')
		.replace(/\}/g, '\\\}');
		if(i > 0) {
			str += '|';
		}
		str += arr[i];
	}
	str += '';
	return new RegExp(str, 'm');
}

function Add(numbers) {
	try {
		var defaultDelimiter = [
			'\r?\n',
			','
		];
		if(typeof(numbers) === 'undefined' || numbers === null || numbers === '') {
			// return 0 if input string is empty
			return 0;
		}
		else {
			var sum = 0;
			var isContainingNegative = false;
			var negativeNumbers = [];

			//check for overriding delimiter
			if(numbers.indexOf('//') === 0) {
				var newDelimiter = numbers.substring(0, numbers.indexOf('\r'));
				numbers = numbers.replace(newDelimiter + '\r\n', '');
				//handle single delimiter (with or without bracket), multiple delimiters
				newDelimiter = newDelimiter.replace('//', '').replace('[', '').replace(/]$/, '').split(/\]\[/);
				defaultDelimiter = defaultDelimiter.concat(newDelimiter);
			}

			//create a RegExp pattern to split string
			var pattern = RegExpBuilder(defaultDelimiter);

			var elements = numbers.split(pattern);

			for(var i = 0; i < elements.length; i++) {
				//loop thru elements to sum
				var number = parseInt(elements[i], 10);

				if(number < 0) {
					//check for negative numbers
					isContainingNegative = true;
					negativeNumbers.push(number);
				}

				if(number <= 1000) {
					//ignore number which is > 1000
					sum += number;
				}
			}

			if(isContainingNegative) {
				//if containing negative numbers than throw an exception
				throw 'negatives not allowed: ' + negativeNumbers.join(', ');
			}
			else {
				return sum;
			}
		}
	}
	catch(err) {
		throw err;
	}
}