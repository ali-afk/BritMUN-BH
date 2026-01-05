<script>
	import Faq from "$lib/components/index/Faq.svelte";
</script>

<section class="stack">
	<h2>FAQs</h2>

	<Faq question="Do I need to have MUN experiences to apply for BRITMUN XI?">
		<p>
			Experience is only needed to apply for <b>chair</b> positions (Preferably 2 MUN Experiences).
			It is also needed for delegates applying for <b>crisis councils</b>.
			All other positions such as Press, Runner, Security,
			and Delegate (excluding Crisis Councils) do not require MUN experiences.
		</p>
	</Faq>

	<Faq question="Can I apply for BRITMUN XI if I do not attend the British School of Bahrain?">
		<p>
			BRITMUN XI is open to all students from Year 8 (Grade 7) to
			Year 13 (Grade 12) from all schools in Bahrain and the Kingdom of Saudi Arabia.
			<b>Security applications</b> are however only opened for students of the British School of Bahrain.
		</p>
	</Faq>

	<Faq question="What councils are there at BRITMUN XI?">
		<p>
			Check out the "<a href='/about'>Councils</a>" Page
			on our website to find out more about councils!
		</p>
	</Faq>

	<Faq question="Is there an entry fee for BRITMUN XI?">
		<p>
			Registration for the conference includes a payment of BHD 25.000 which covers
			all the resources necessary for the two-day conference, council break snacks,
			lunch break food stalls and refreshments, a photo booth, and more.
		</p>
	</Faq>

	<Faq question="Do I need to bring money with me to BRITMUN XI?">
		<p>You do not need to bring any money with you during the weekend as all the provided items are included in the entry fee.</p>
	</Faq>

	<Faq question="What is the payment procedure for BRITMUN XI?">
    <p>
        Payment is <strong>strictly online</strong>. Your BHD 25.000 fee covers the buffet, 
        food stalls, breaks, and all conference stationery.
    </p>
		<div class="tutorial">
			<iframe
				title="Payment Tutorial"
				allow="autoplay"
				src="https://drive.google.com/file/d/12cpHYgyE0xvKDUqLmENG96e7OXzdUhv3/preview"
				width="100%"
				height="100%">
			</iframe>
		</div>

    <ol>
        <li>
            Email <strong><a href="mailto:britmun@thebsbh.com">britmun@thebsbh.com</a></strong> 
            with the subject <em>"Registration Fee Reference Number"</em> to get your <strong>Reference Number</strong>.
        </li>
        <li>Open <strong>BenefitPay</strong> → Select <strong>"Fawateer"</strong>.</li>
        <li>Search <strong>"British School of Bahrain"</strong> → Choose <strong>"School Trips"</strong>.</li>
        <li><strong>Bill Name:</strong> Enter "BRITMUN XI".</li>
        <li><strong>Reference Number:</strong> Paste the number received via email.</li>
        <li><strong>Trip Detail:</strong> Enter your School and Year Group.</li>
    </ol>
	</Faq>

	<Faq question="When will I find out my allocations?">
		<p>
			Allocations will be released closer to the conference date.To stay notified,
			follow our social media platforms: <a href="https://www.instagram.com/britmun.bh/">Instagram</a>
			and <a href="https://www.tiktok.com/@britmun?_t=8h8l5yococb&_r=1">Tiktok</a>.</p>
	</Faq>

	<Faq question="Are there any resources to support delegates?">
		<p>
			The BRITMUN team has prepared a resources pack that guides delegates with
			all the details necessary for BRITMUN XI. Moreover, there will be a training session held
			for those who wish to attend. Further details will be provided closer to the date of the conference. </p>
	</Faq>

	<hr>

	<footer>
		<p>
			Didn’t answer your question? We are more than happy to answer any further 
			questions through our email. Contact us through 
			<a href="mailto:britmun@thebsbh.com">britmun@thebsbh.com</a> 
			with any inquiries regarding the conference.
		</p>
	</footer>
</section>

<style>
	section {
		background-color: var(--purple-main);

		h2 {
			color: var(--text-contrast);
		}

		.tutorial {
			margin-block: var(--space-4);

			iframe {
				border-radius: var(--radius);
				aspect-ratio: 16 / 9;
			}
		}

		ol {
			padding-left: var(--space-5);
			display: flex;
			flex-direction: column;
			gap: var(--space-3);

			li {
				line-height: 1.6;
				padding-left: var(--space-2);

				&::marker {
					font-weight: var(--fw-bold);
				}
			}
		}

		hr {
			border-color: var(--purple-light);
		}
		
		footer p {
			color: var(--text-contrast);
			font-size: var(--fs-2);
		}
	}

	@media (max-width: 420px) {
		section .tutorial {
			width: 100vw;
			position: relative;
			left: 50%;
			right: 50%;
			margin-left: -50vw;
			margin-right: -50vw;
		}
	}
</style>
