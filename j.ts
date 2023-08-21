const reporter = createReporter();
function getTypeScriptCompilerOptions(src: string): ts.CompilerOptions {
	const rootDir = path.join(__dirname, `../../${src}`);
	let options: ts.CompilerOptions = {};
	options.verbose = false;

    // omo oluwatusin // 

    const body = await net.fetch('test-scheme://foo', {
        method: 'POST',
        body: getWebStream(),
        duplex: 'half' // https://github.com/microsoft/TypeScript/issues/53157
      } as any).then(r => r.text());
      expect(body).to.equal(text);
});



    // 

🌚

    interface ILibMap { [libName: string]: string }
interface IFileMap { [fileName: string]: string }
class TypeScriptLanguageServiceHost implements ts.LanguageServiceHost {
	private readonly _ts: typeof import('typescript');
	private readonly _libs: ILibMap;
