import "../assets/styles/footer.styl"

export default {
	data(){
		return {
			auther:"yangchun"
		}
	},
	render () {
		return (
			<div id="footer">
				<span>write by {this.auther}</span>
			</div>
		)
	}	
}