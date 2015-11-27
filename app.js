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
			<div className="Editor">
				<h3>Input</h3>
				<textarea 
					value={this.state.text}
					ref="textarea"
					onChange={this.handleChange} />
				<h3>Output</h3>
				<div
		          className="content"
		          dangerouslySetInnerHTML={this.rawMarkup()}/>
			</div>
		);
	}
});
ReactDOM.render(<Markdown />, document.getElementById('content'));