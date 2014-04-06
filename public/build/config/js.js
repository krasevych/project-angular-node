({
	baseUrl: "../../app/",
	name: "bootstrap",
	out: "../index.js",
	mainConfigFile: '../../app/bootstrap.js',
	paths: {
		requireLib: '../bower_components/requirejs/require'
	},
	include: ['requireLib'],
	uglify: {
		//How to pass uglifyjs defined symbols for AST symbol replacement,
		//see "defines" options for ast_mangle in the uglifys docs.
		defines: {
			DEBUG: ['name', 'false']
		},
		//Custom value supported by r.js but done differently
		//in uglifyjs directly:
		//Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
		no_mangle: true
	}
})