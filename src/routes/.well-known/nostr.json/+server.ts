export function GET() {
	return new Response(
		JSON.stringify({
			names: {
				_: '6ba7e706f2b8ff996ad0ac2cb44fde71d5d203579ebf28fbfff517d652936c58'
			}
		}),
		{ headers: { 'Access-Control-Allow-Origin': '*' } }
	);
}
