angular.module('sudokuGame')
	.service('Sudoku', 
		function($scope)
		{
		}			
);

Array.prototype.fill = function(arrLength, value)
{
	return Array.apply(null, new Array(arrLength)).map(Array.prototype.valueOf, value);
}

function Square(line, column, block, value = undefined)
{
	line.push(this);
	column.push(this);
	block.push(this);
}

function Sudoku()
{
	var sudokuBase = 3;
	var sudokuSize = sudokuBase * sudokuBase;

	var lines = Array.prototype.fill(sudokuSize, []);
	var columns = Array.prototype.fill(sudokuSize, []);
	var blocks = Array.prototype.fill(sudokuSize, []);

	var squares = [];
	createSquares();

	function createSquares(value = undefined)
	{
		var lastSquare = sudokuSize * sudokuSize;
		for(var i=0; i < lastSquare; i++)
		{
			var indexLine = parseInt(i / sudokuSize);
			var indexColumn = parseInt(i % sudokuSize);
			var indexBlock = (
				function()
				{
					var lineBlock = Math.floor(indexLine / sudokuBase) * sudokuBase;
					var columnBlock = Math.floor(indexColumn / sudokuBase);

					return lineBlock + columnBlock;
				}
			)();


			console.log('line: ' + indexLine);
			console.log('col: ' + indexColumn);
			console.log('block: ' + indexBlock);
			console.log('');
			var square = new Square(lines[indexLine], columns[indexColumn], blocks[indexBlock]);

			squares.push(square);
		}
	}
}

new Sudoku();