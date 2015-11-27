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
			<div className="editor">
				<div className="content col-md-6">
					<h3>Input</h3>
					<textarea
						className="area"
						value={this.state.text}
						ref="textarea"
						onChange={this.handleChange} />
				</div>

				<div className="view col-md-6">
					<h3>Output</h3>
					<div 
						className="show"
						dangerouslySetInnerHTML={this.rawMarkup()}/>
			    </div>
			</div>
		);
	}
});
ReactDOM.render(<Markdown />, document.getElementById('content'));