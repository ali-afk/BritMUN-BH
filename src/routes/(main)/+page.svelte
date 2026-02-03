<script lang="ts">
import { FaqList, TestimonialList } from "$components/home";
import { HeroImage, Meta, SkipLink } from "$components/shared";
import { Hero } from "$data/home";
import { SiteProperties } from "$data/shared";
import type { PageProps } from "./$types";

let { data }: PageProps = $props();

let metaDescription = `Experience the ${SiteProperties.britmunYear.decimal}th edition of Bahrain's premier student-led MUN. Register now for debate, diplomacy, and change.`;
</script>

<Meta title="Home" description={metaDescription} pageURI="/" />

<SkipLink />
<HeroImage image={Hero} />
<TestimonialList testimonialData={data.testimonials} />
<FaqList faqData={data.faqs} />
