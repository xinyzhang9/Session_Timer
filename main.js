let mousemove = Rx.Observable.fromEvent(document,'mousemove');
let source = Rx.Observable.interval(1000).delay(2000).take(30).takeUntil(mousemove).repeat();
const sleepSub = source.subscribe(
	(x)=>{	
			document.getElementById('res').style.visibility = 'visible';
			document.getElementById('text').innerHTML = `You will be logged off after ${30-x} seconds`;
		}
);
const mouseSub = mousemove.subscribe(
	(x) => { document.getElementById('res').style.visibility = 'hidden';}
);
