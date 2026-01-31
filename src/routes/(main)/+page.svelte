<script lang="ts">
import { FaqList, HeroImage, TestimonialList } from "$components/home";
import { Meta } from "$components/shared";
import type { PageProps } from "./$types";

let { data }: PageProps = $props();
</script>

<Meta
	title="Home"
	description="Experience the 11th edition of Bahrain's premier student-led MUN. Register now for debate, diplomacy, and change."
	pageURI="/"
/>
<HeroImage />
<TestimonialList testimonialData={data.testimonials} />
<FaqList faqData={data.faqs} />
