import React from 'react';

function LandingPageOne() {
	return(
		<div className="LandingPageOneContainer grid h-screen place-items-center min-h-screen bg-amber-200 justify-center">
			<div className= "lp1textBox border-4 border-stone-600 rounded-md w-1/2 m-0 p-10 shadow-2xl bg-amber-100">
				<h1 className="text-4xl">
					Stuffware Warehouse is getting a fresh coat of paint!
				</h1>
				<br />
				<h4 className="text-2xl">
					Hi there Stuffware family! We have some exciting news! With the money Mason got from the bakesale
					we've decided to give the site what Erica calls "a glow up"! Thank you for your patience as we get the website
					up and running. We've hired two very nice people to do it for us, who told us they come highly recommended.
				</h4>
				<br />
				<h4 className="text-2xl">
					Thank you Ollo and Kayla for the very clever computer hooplah you're doing for us! Can't wait to see the result!
				</h4>
				<br />
				<h4
				href="https://www.amazon.com"
				target="_blank"
				>
					Kayla said <a className="hover:underline text-blue-600" href="https://www.amazon.com" target="_blank">this link</a> means we can keep the site running while it's under construction!
				</h4>
			</div>
			
		</div>
	)
}

export default LandingPageOne