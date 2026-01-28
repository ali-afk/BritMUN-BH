<script lang="ts">
import { faqs } from "$data/home";
import Faq from "./Faq.svelte";
</script>

<section class="stack">
	<h1 class="title--section">FAQs</h1>

	{#each faqs as faq}
		<Faq question={faq.question}>{@html faq.answer}</Faq>
	{/each}

	<hr>

	<footer>
		<p>
			Didn’t answer your question? We are more than happy to answer any further
			questions through our email. Contact us through
			<a href="mailto:britmun@thebsbh.com">britmun@thebsbh.com</a> with any
			inquiries regarding the conference.
		</p>
	</footer>
</section>

<style>
section {
	color: var(--bg-main);
	background-color: var(--color-primary-700);

	footer p {
		font-size: var(--fs-2);
	}
}
</style>
