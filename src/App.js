import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num1: '0',
			num2: '0',
			operation: '',
			answer: 0
		};

		this.clickNum = this.clickNum.bind(this);
		this.clickOp = this.clickOp.bind(this);
		this.getResult = this.getResult.bind(this);
	}

	componentDidMount() {
		const script = document.createElement('script');

		script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
		script.async = true;

		document.body.appendChild(script);
	}

	clickNum(num) {
		const { num1, num2, operation } = this.state;

		if (operation === '' || num2 !== '0') {
			if (num1 === '0') {
				this.setState({ num1: num });
			} else {
				this.setState({ num1: num1 + '' + num });
			}
		} else {
			this.setState({ num2: num1, num1: num });
		}
	}

	clickOp(op) {
		const { num1, num2, operation } = this.state;

		if (num1 && num2 !== '0') {
			this.getResult(num1, num2, operation);
		}
		this.setState({ operation: op });
	}

	getResult(num1, num2, operation) {
		switch (operation) {
			case '/':
				this.setState({ num1: num2 * 1.0 / num1, num2: '0', operation: '' });
				return;
			case 'X':
				this.setState({ num1: num2 * 1.0 * num1, num2: '0', operation: '' });
				return;
			case '+':
				this.setState({ num1: num2 * 1.0 + num1 * 1.0, num2: '0', operation: '' });
				return;
			case '-':
				this.setState({ num1: num2 * 1.0 - num1, num2: '0', operation: '' });
				return;
			default:
				return '99999';
		}
	}

	Number = (props) => (
		<div className="number" id={props.numString} onClick={() => this.clickNum(props.num)}>
			{props.num}
		</div>
	);

	render() {
		return (
			<div id="container">
				<div id="calculator">
					<div id="display">{this.state.num1}</div>
					<div id="clear" onClick={() => this.setState({ num1: '0', num2: '0', operation: '' })}>
						AC
					</div>
					<div id="divide" onClick={() => this.clickOp('/')}>
						/
					</div>
					<div id="multiply" onClick={() => this.clickOp('X')}>
						X
					</div>
					<this.Number numString="seven" num="7" />
					<this.Number numString="eight" num="8" />
					<this.Number numString="nine" num="9" />
					<div id="subtract" onClick={() => this.clickOp('-')}>
						-
					</div>
					<this.Number numString="four" num="4" />
					<this.Number numString="five" num="5" />
					<this.Number numString="six" num="6" />
					<div id="add" onClick={() => this.clickOp('+')}>
						+
					</div>
					<this.Number numString="one" num="1" />
					<this.Number numString="two" num="2" />
					<this.Number numString="three" num="3" />
					<div id="equals" onClick={() => this.clickOp('=')}>
						=
					</div>
					<this.Number numString="zero" num="0" />
					<div
						id="decimal"
						onClick={() => {
							if (!this.state.num1.includes('.')) {
								this.setState({ num1: this.state.num1 + '.' });
							}
						}}
					>
						.
					</div>
				</div>
			</div>
		);
	}
}

export default App;
