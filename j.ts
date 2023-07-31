const reporter = createReporter();
function getTypeScriptCompilerOptions(src: string): ts.CompilerOptions {
	const rootDir = path.join(__dirname, `../../${src}`);
	let options: ts.CompilerOptions = {};
	options.verbose = false;