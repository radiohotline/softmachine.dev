// webstring v2.1 by june @ juneish.neocities.org

{
	// sites in the ring
	let sites = [
		'https://softmachine.dev/',
		'https://iwillneverbehappy.neocities.org/',
	    'https://xn--ug8ht8h.ws/',
    	'http://wirlaburla.worlio.com/',
    	'https://hoppingtopping.com/',
    	'https://kaa.neocities.org/',
    	'https://foreverliketh.is/',
    	'https://karma.computer/',
    	'https://azuremillennium.neocities.org/',
    	'https://i330.dev/',
    	'https://alan460.is-hella.gay',
    	'https://crystal.tilde.institute',
    	'https://skeleg.org',
    	'https://cronico.neocities.org',
    	'https://theaio.neocities.org/',
    	'https://risingthumb.xyz',
    	'https://leap123.neocities.org',
    	'https://tepiloxtl.net/',
    	'https://antares.neocities.org/',
    	'https://avas.space/',
    	'https://0xf0xx0.eth.limo',
    	'https://ophanimkei.com/',
    	'https://kinisis.xyz/',
    	'http://baccyflap.com/',
    	'https://exlitry.world/',
    	'https://circulars.dev/',
    	'https://tommi.space/',
    	'https://patrickwu.space/',
    	'https://corvidae.digital/',
    	'https://raum.neocities.org/',
    	'https://avidseeker.github.io',
    	'https://www.dreamwingsthegriffon.com/',
		'https://nicolabelluti.me',
    	'https://xx-starbrite-xx.neocities.org',
    	'https://heart143.neocities.org',
    	'https://cassiecandles.net/',
    	'https://mkultra.monster',
    	'https://tiagorangel.com/',
    	'https://sharkcave.me/',
    	'https://scuti.neocities.org/',
    	'https://appak.neocities.org',
    	'https://myrdin.cx',
    	'https://clygro.cc/',
    	'https://fish.golf',
    	'https://dagurthehorrible.neocities.org/',
    	'https://spider-kyle.neocities.org/',
    	'https://regirock.net',
    	'https://hazelthats.me',
    	'https://alexisgaming95.neocities.org',
    	'https://gorkem.cc',
    	'https://riomc.cloud',
    	'https://unpop.neocities.org/',
    	'https://shittyweb.org/',
    	'https://pogmom.me',
    	'https://april.nekoweb.org/',
    	'https://goodgirl.dev/',
    	'https://sor.neocities.org/',
    	'https://www.starcrush.net',
    	'https://bytesofprogress.net/',
    	'https://projectc190.net',
    	'https://privatenoob.top/',
    	'https://alexzeecomedy.com',
    	'https://wheelsbot.dev/',
    	'https://8y7.nekoweb.org/',
    	'https://igor360.neocities.org/',
    	'https://zzfs.home.kg',
    	'https://ari.lt/',
		'https://prigoana.com/',
		'https://lukealexdavis.co.uk',
		'https://kimberlygb.nekoweb.org/',
		'https://maniksharma.xyz/',
		'https://hisvirusness.com/',
		'https://tx0.nekoweb.org/',
		'https://offensivename.com/',
		'https://leroymilo.neocities.org/',
		'https://ficd.sh/',
		'https://skoove.dev',
		'https://hexaitos.com',
		'https://minxie.likesyou.org',
		'https://blog.k3can.us',
		'https://kwaamfan.haliya.net',
		'https://hamaonoverdrive.online',
		'https://mtgmonkey.net',
		'https://planty.one',
		'https://7vtia.nekoweb.org',
		'https://akselmo.dev',
		'https://joelb.xyz/',
		'https://innocentzero.is-a.dev/',
		'https://coolpickles.neocities.org',
		'https://tech-absurdist.neocities.org/',
		'https://wrywerytwreywery.stupid.pizza/',
		'https://kami-g.me/',
		'https://avaloathelace.neocities.org/',
		'https://tapeykatt.neocities.org/',
		'https://saberonthe.net',
		'https://russecke.net/',
		'https://jarema.me',
	];
	// widget html
	// PREV and NEXT are replaced with neighbors' urls
	let widgets = {
		default: `<div id="nixring" style="display: flex; gap: 8px; align-items: center;">
			<style type="text/css" scoped>
				#nixring {
					text-align: center;
					color: black;
				}
				#nixring a {
					color: black;
					text-decoration: none;
				}
			</style>
			<a href="PREV">←</a>
			<a href="https://teethinvitro.neocities.org/webring/linuxring"><div>*nixRing<br><img style="height: 25px;" src="https://teethinvitro.neocities.org/webring/linuxring/icon/${document.currentScript.dataset.icon}.png"></div></a>
			<a href="NEXT">→</a>
		</div>`,
		error: `<div>this site isn't part of the webring yet</div>`,
	};
	// code
	let idx = sites.findIndex(site => location.href.startsWith(site));
	document.currentScript.outerHTML = idx === -1 ? widgets.error :
		(widgets[document.currentScript.dataset.widget] ?? widgets.default)
		.replace("PREV", sites.at(idx - 1))
		.replace("NEXT", sites[(idx + 1) % sites.length]);
}
