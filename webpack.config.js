const path = require('path')
const  VueLoaerPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	target:'web',
	entry:path.join(__dirname,'src/index.js'),
	output:{
		filename:"bundle.js",
		path:path.join(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:"vue-loader"
			},
			{
				test:/\.jsx$/,
				loader:"babel-loader"
			},
			{	
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.styl/,
				use:[
					'style-loader',
					'css-loader',
					{
						loader:'postcss-loader',
						options:{
							sourceMap:true,
						}
					},
					'stylus-loader'
				]	
			},
			{
				test:/\.(gif|jpg|png|svg|jpeg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1024,
							name:'[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins:[
		new VueLoaerPlugin(),
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:isDev?'"development"':'"production"'
			}
		}),
		new HTMLPlugin(),
	]
}

if (isDev){
	config.devtool ="#cheap-module-eval-source-map"
	config.devServer = {
		port:'8000',
		host:'0.0.0.0',
		overlay:{
			errors:true,
		},
		// historyFallback:{
		// }
		// open:true
		hot:true,	//只渲染当前业务的组件,不会影响其他数据
	}
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	)
}

module.exports = config 