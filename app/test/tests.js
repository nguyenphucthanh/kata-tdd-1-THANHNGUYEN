QUnit.test('Test without input parameter', function( assert ) {
	assert.equal(Add(), 0);
});

QUnit.test('Test with null value', function( assert ) {
	assert.equal(Add(null), 0);
});

QUnit.test('Test with empty string', function( assert ) {
	assert.equal(Add(''), 0);
});

QUnit.test('Test with one number', function( assert ) {
	assert.equal(Add('1'), 1);
});

QUnit.test('Test with comma', function( assert ) {
	assert.equal(Add('1,2,3'), 6);
});

QUnit.test('Test with comma and line break', function( assert ) {
	assert.equal(Add('1\r\n2,3'), 6);
});

QUnit.test('Test with negative numbers', function( assert ) {
	assert.throws(Add('1,2,-2,3,-3'));
});

QUnit.test('Test with new delimiter (;)', function( assert ) {
	assert.equal(Add('//;\r\n1;2;3'), 6);
});

QUnit.test('Combine delimiters (,) (;) (new line)', function( assert ) {
	assert.equal(Add('//;\r\n1;2,3\r\n4'), 10);
});

QUnit.test('Test with 1 new delimiter in bracket ([;]), combine (,), and (new line)', function( assert ) {
	assert.equal(Add('//[;]\r\n1;2,3\r\n4'), 10);
});

QUnit.test('Test with multiple delimiter in bracket ([;][***]), combine (,), and (new line)', function( assert ) {
	assert.equal(Add('//[;][***]\r\n1;2,3\r\n4***5'), 15);
});

QUnit.test('Test with multiple delimiter in bracket ([;][***][=====]), combine (,), and (new line)', function( assert ) {
	assert.equal(Add('//[;][***]\r\n1;2,3\r\n4***5=====5'), 20);
});

QUnit.test('Test with multiple delimiter in bracket ([;][***][::]), combine (,), and (new line)', function( assert ) {
	assert.equal(Add('//[;][***]\r\n1;2,3\r\n4***5::5'), 20);
});

QUnit.test('Test with multiple delimiter in bracket ([;][***][o--}==>]), combine (,), and (new line)', function( assert ) {
	assert.equal(Add('//[;][***]\r\n1;2,3\r\n4***5o--}==>5'), 20);
});