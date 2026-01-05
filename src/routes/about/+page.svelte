<script lang="ts">
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>
<div class="sidebar">
	<div class="logo">
		<img
			src="$lib/images/BRITMUN Logo - Transparent.png"
			style="width:300px; height:auto; display: block; margin-left: auto; margin-right: auto; padding: 50px;"
		/>
	</div>
	<div class="timer">
		<div class="days">
			<h1>00</h1>
			<h1>days</h1>
		</div>
		<div class="hours">
			<h1>00</h1>
			<h1>hours</h1>
		</div>
	</div>
	<div class="list">
		<ul>
			<li><a href="Home.html">Home</a></li>
			<li><a href="About.html">About</a></li>
			<li><a href="EventPhotos.html">Event Photos</a></li>
		</ul>
	</div>
</div>

<div class="main">
	<div class="about-us">
		<div class="image">
			<img src="$lib/images/Screenshot 2024-09-30 200905.png" />
		</div>
		<div class="about-us-section">
			<div class="text-content">
				<h1>About us</h1>
				<p>
					Welcome to BRITMUN VIII, an educational conference for
					school students in Years 9-13. Our conference exposes
					students to global issues and teaches them valuable skills
					such as diplomacy and public speaking. We hope you will join
					us for this exciting event.
				</p>
			</div>
			<div class="faded-text">ABOUT</div>
		</div>
	</div>
	<div class="the-mission">
		<div class="the-mission-section">
			<div class="text-content2">
				<h1>The Mission</h1>
				<p>
					Our MUN conference aims to empower students to debate global
					issues and improve their understanding of international
					relations and public speaking. By simulating diplomacy and
					incorporating inspiring themes, we strive to create a
					dynamic and exciting event that educates and empowers
					attendees.
				</p>
			</div>
			<div class="faded-text2">Mission</div>
		</div>
		<div class="image2">
			<img src="$lib/images/Screenshot 2024-09-30 200905.png" />
		</div>
	</div>
	<div class="the-vision">
		<div class="image3">
			<img src="$lib/images/Screenshot 2024-09-30 200905.png" />
		</div>
		<div class="the-vision-section">
			<div class="text-content3">
				<h1>The Vision</h1>
				<p>
					BRITMUN VIII aims to address neglected global issues through
					debate and resolution-making. We strive to create a highly
					influential conference that encourages leadership and
					knowledge gain. Our councils allow participants to tackle
					pressing issues under the theme 'The Water Under Our
					Bridge'.
				</p>
			</div>
			<div class="faded-text3">VISION</div>
		</div>
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400&display=swap");

	html,
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		height: 100%;
		width: 100%;
	}

	* {
		box-sizing: inherit;
	}

	.sidebar {
		height: 100vh;
		width: 20%;
		left: 0;
		top: 0;
		box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: fixed;
		z-index: 2;
	}

	.timer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		font-family: "Courier New", Courier, monospace;
	}

	.timer .days,
	.timer .hours {
		padding: 10px;
	}

	.timer .days h1 {
		font-size: x-large;
		text-align: center;
		margin: 0;
		padding: 0;
		font-family: "Courier New", Courier, monospace;
	}

	.timer .hours h1 {
		font-size: x-large;
		text-align: center;
		margin: 0;
		padding: 0;
		font-family: "Courier New", Courier, monospace;
	}

	.list ul {
		list-style-type: none;
	}

	.list ul li {
		display: block;
		margin-bottom: 50px;
		text-align: center;
		padding-right: 40px;
		font-family: "Courier New", Courier, monospace;
	}

	.list ul li a {
		text-decoration: none;
		color: black;
		font-size: 35px;
		transition: transform 0.3s ease-in-out;
		display: inline-block;
	}
	.list ul li a:hover {
		transform: translateY(-5px);
	}

	.main {
		margin-left: 20%;
	}

	.about-us {
		display: flex;
		margin: 0;
		padding: 0;
		position: relative;
	}

	.about-us-section {
		position: relative;
		background-color: #e94a40;
		padding: 40px;
		color: white;
		width: 70%;
		font-size: larger;
		padding-left: 200px;
		font-family: "Times New Roman", Times, serif;
		height: 500px;
		padding-right: 200px;
		margin-left: auto;
	}
	.faded-text {
		text-align: center;
		position: absolute;
		top: 250px;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: 150px;
		font-weight: bold;
		color: rgba(255, 255, 255, 0.1);
		line-height: 1;
		overflow: hidden;
		font-family: "Montserrat", sans-serif;
	}
	.about-us img {
		width: 400px;
		height: 300px;
		border-radius: 20px 100px;
		border: 10px solid white;
		position: absolute;
		margin-left: 200px;
		margin-top: 70px;
		z-index: 1;
	}

	.the-mission {
		display: flex;
		margin: 0;
		padding: 0;
		position: relative;
	}

	.the-mission-section {
		position: relative;
		background-color: #19144a;
		padding: 40px;
		color: white;
		width: 70%;
		font-size: larger;
		padding-left: 200px;
		font-family: "Times New Roman", Times, serif;
		height: 500px;
		padding-right: 200px;
	}
	.faded-text2 {
		text-align: center;
		position: absolute;
		top: 250px;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: 150px;
		font-weight: bold;
		color: rgba(255, 255, 255, 0.1);
		line-height: 1;
		overflow: hidden;
		font-family: "Montserrat", sans-serif;
	}
	.the-mission img {
		width: 400px;
		height: 300px;
		border-radius: 100px 20px;
		border: 10px solid white;
		position: absolute;
		margin-left: -150px;
		margin-top: 100px;
		z-index: 1;
		position: absolute;
	}

	.the-vision {
		display: flex;
		margin: 0;
		padding: 0;
		position: relative;
	}

	.the-vision-section {
		position: relative;
		background-color: #3498db;
		padding: 40px;
		color: white;
		width: 70%;
		font-size: larger;
		padding-left: 200px;
		font-family: "Times New Roman", Times, serif;
		height: 500px;
		padding-right: 200px;
		margin-left: auto;
	}
	.faded-text3 {
		text-align: center;
		position: absolute;
		top: 250px;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: 150px;
		font-weight: bold;
		color: rgba(255, 255, 255, 0.1);
		line-height: 1;
		overflow: hidden;
		font-family: "Montserrat", sans-serif;
	}
	.the-vision img {
		width: 400px;
		height: 300px;
		border-radius: 20px 100px;
		border: 10px solid white;
		position: absolute;
		margin-left: 200px;
		margin-top: 70px;
		z-index: 1;
	}
</style>
