import React from 'react';

function LandingPageThree() {
	return(
		<div className="LandingPageOneContainer grid h-screen place-items-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-600">
			<div className='border-4 border-slate-100 p-3 bg-slate-600/40'>
				<h1 className='text-slate-100 text-6xl font-bold font-mono'>
					STUFFWARE WAREHOUSE
				</h1>
			</div>
			<div className='border-4 border-slate-100 w-3/5 p-10 text-2xl text-slate-100 font-bold font-mono bg-slate-600/40'>
				<h4>
					Hi there Stuffware family! We have some exciting news! With the money Mason got from the bakesale
					we've decided to give the site what Erica calls "a glow up"! Thank you for your patience as we get the website
					up and running. We've hired two very nice people to do it for us, who told us they come highly recommended.
				</h4>
				<br />
				<h4>
					Thank you Ollo and Kayla for the very clever computer hooplah you're doing for us! Can't wait to see the result!
				</h4>
			</div>
			<div className='border-4 border-slate-100 w-3/5 p-5 text-2xl text-slate-100 font-bold font-mono bg-slate-600/40'>
				<h3>Kayla said <a className='hover:italic' href="https://www.amazon.com" target="_blank">this link</a> means we can keep the site running while it's under construction!</h3>
			</div>
			
		</div>
	)
}

export default LandingPageThree