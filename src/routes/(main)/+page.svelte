<script lang="ts">
import { FaqList, TestimonialList } from "$components/home";
import { HeroImage, Meta, SkipLink } from "$components/shared";
import { Hero } from "$data/home";
import type { PageProps } from "./$types";

let { data }: PageProps = $props();
</script>

<Meta
	title="Home"
	description="Experience the 11th edition of Bahrain's premier student-led MUN. Register now for debate, diplomacy, and change."
	pageURI="/"
/>

<SkipLink />
<HeroImage image={Hero} />
<TestimonialList testimonialData={data.testimonials} />
<FaqList faqData={data.faqs} />
