var Markdown = React.createClass({
	getInitialState: function() {
		return {
			text: 'Initial *markdown* text!'
		}
	},
	handleChange: function() {
		var textAreaString = this.refs.textarea.value;
		this.setState({
			text: textAreaString
		});
	},
	rawMarkup: function() {
		return {__html: marked(this.state.text, {sanitize: true})};
	},
	render: function() {
		return(
			<div>
				<div className="toolbar">React-Markdown-Editor</div>
				<div className="editor">
					<div className="left">
						<h3>Input</h3>
						<textarea
							className="area"
							value={this.state.text}
							ref="textarea"
							onChange={this.handleChange} />
					</div>

					<div className="right">
						<h3>Output</h3>
						<div 
							className="show"
							dangerouslySetInnerHTML={this.rawMarkup()}/>
				    </div>
				</div>
			</div>
		);
	}
});
ReactDOM.render(<Markdown />, document.getElementById('content'));