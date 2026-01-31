<script lang="ts">
import { Header } from "$components/shared";

let { children } = $props();
</script>

<Header />
<a href="#main-content" class="skip-link">Skip to main content</a>
<main>{@render children()}</main>

<style>
</style>
