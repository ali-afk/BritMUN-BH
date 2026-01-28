<script lang="ts">
import { FaqList, HeroImage, TestimonialList } from "$components/home";
import type { PageProps } from "./$types";

let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Home | British School of Bahrain</title>
</svelte:head>

<HeroImage />
<TestimonialList testimonialData={data.testimonials} />
<FaqList faqData={data.faqs} />

<style>
</style>
