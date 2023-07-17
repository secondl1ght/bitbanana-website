export function GET() {
	return new Response(
		JSON.stringify({
			names: {
				_: 'npub1dwn7wphjhrlej6ks4sktgn77w82ayq6hn6lj37ll75tav55nd3vq07xzaj'
			}
		}),
		{ headers: { 'Access-Control-Allow-Origin': '*' } }
	);
}
