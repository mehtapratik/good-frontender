---
layout: post.njk
lastUpdated: 2020-12-02
date: 2020-12-02
tags: 
   - post
title: Innertia of Coding Errors
blurb: Sometimes it takes many fools to commit one error. It&rsquo;s unfortunate because one fool&rsquo;s mistake does no harm until others join the party. Everything stays fine and everyone goes their marry way. To make the matter worst, this initial success boosts this fool&rsquo;s confidence.
---
<section class="post__intro">
<p>Sometimes it takes many fools to commit one error. It&rsquo;s unfortunate because one fool&rsquo;s mistake does no harm until others join the party. Everything stays fine and everyone goes their marry way. To make the matter worst, this initial success boosts this fool&rsquo;s confidence.</p>
</section>

<blockquote>
See!!! I was telling you everything will be fine. Next time listen to me and stop being such a wuss.
<cite>Some Fool</cite>
</blockquote>

Down the line other fools joins him in making the same mistake. Required threshold to yield an error is reached. Errors shows-up like a long lost cousin of your application.

In real life, the first fool would be a driver who thinks he can outrun the amber light before it turns red. He may &ndash; most of the time. Until second impatient fool waiting for light to turn green slams the gas paddle as soon as it turns green without looking for oncoming fools. Nothing happens if either remains rationally patient and alert. Only when a fool meets the other fool, you win a lottery of an unfortunate event.

This thought crossed my mind today when I was reading about JavaScript&rsquo;s global scope and how easy it is to declare a variable accidentally in a global scope leading to scope collision. By not encapsulating your code and scoping your variables, you&rsquo;re asking for trouble. Try  declaring few global variables like app, i , sum, or options for your widget and then deploy this widget across all pages in your site. See how long it takes for other fools to declare the same global variable.

There is an another variation of such behavior. It&rsquo;s when you make many mistakes but only few of them leads to error. This is mostly relates to bad coding habits. Just because you got away with bad coding practices most of the time does not make them good anyway. Many small wins does not topple one huge loss. It will only take one production issue for your management to retrospect and look for the offender (scape goat). It better not be you.

My goal here is not to scare you but to preach good coding habits and to warn you about the dangers of these inert errors. Such errors remains non-issue until it reaches it peak to warrant your attention. The worst error I have debugged and triaged are not the one that were identified one or two months after they were coded. They were the ones that took its roots years ago before it spread its weeds and wines across an entire application. It was sum of many foolish acts &ndash; not just one. One example that come to my mind is of a global stylesheet file that your team kept appending new styles at the bottom of file (Solution: Page specific stylesheet for page specific styles. Global stylesheet for global/reusable styles).

What&rsquo;s more disturbing is the treatment these offenders receive when they put features into production &ndash; on time and within budget. Due to the initial inert nature of their mistakes, their work is seen as immediate success. Which, naturally, results into rewards and recognition. Down the line when those mistakes translates into errors, those offenders are either not around or moved higher up in chain. Those who currently own that piece of code denies ownership saying that _"It had been working for many years. Nothing&rsquo;s changed. Unless you point pinpoint the problem, this is not our issue."_

In all honestly, there is something to learn from these offenders. After all, they managed to achieve career growth and avoided getting the blame for their mistakes on them. Meanwhile, if you want to be a good coder, while you want to remain a coder…

* Coding is a craft &ndash; you get better by doing it. Code periodically and don&rsquo;t let it get rusty.
* Follow the best practices of programming
* Understand your language&rsquo;s strength and weaknesses. Each langauges has its own. Learn to make best use of them.
* Read. You will learn from others&rsquo; experience.

Ignorance and laziness are the source of foolishness. Avoid both if you want to build something. Material success and growth is something else, altogether.