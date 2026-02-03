<script lang="ts">
import { Accordion } from "$components/shared";
import { SiteProperties } from "$data/shared";
import type { FaqData } from "$types/component-props";

let { faqData }: { faqData: FaqData[] } = $props();
</script>

<section class="stack">
	<h1 class="title--section">FAQs</h1>

	{#each faqData as faq}
		<Accordion title={faq.question} name="faq">{@html faq.answer}</Accordion>
	{/each}

	<hr>

	<footer>
		<p>
			Didn’t answer your question? We are more than happy to answer any further
			questions through our email. Contact us through
			<a href="mailto:{SiteProperties.contact.email}"
				>{SiteProperties.contact.email}</a
			>
			with any inquiries regarding the conference.
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
