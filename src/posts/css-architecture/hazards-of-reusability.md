---
layout: series.njk
published: December 29, 2020
lastUpdated: May 1, 2020
date: 2019-12-29
series: CSS Architecture (Part 3 of 3)
title: Hazards of Reusability
blurb: <p>We, software engineers, love code reusability. It helps us deliver faster and cheaper while keeping the website consistent. What’s there not to love about it! However, we’re still learning how to create reusable user experience for web. There are more failed design systems than successful ones. These failures can be attributed to factors such as sponsorship, organizational priorities or technology. Today, I want to share few hazards of focusing too much on reusability based on my past experience. Some of this may lead to redundancy and eventually leading your designs system to be impractical.</p>
---

We, software engineers, love code reusability. It helps us deliver faster and cheaper while keeping the website consistent. What’s there not to love about it!

UI reusability could be anywhere from informal and loosely defined stylesheet to more formal and version controlled design system. Back in the old days, we just used to design sites with CSS. Industry was young and sites were small. Nobody really thought about UI reusability until we started developing serious large-scale web applications. Internal desktop application, too, were replaced by intranet websites. User experience design industry evolved and with that the need for consistent design and centralized design rollouts.

Today, every aspect of web is heavily focused on reusability. UX design tools such as Figma, Sketch and InVision promote their products based on how well they let designers to reuse their design and how well they can create design systems. On the other hand, focus of frontend developers is shifted from web page to web component. Libraries such as React and Vue are written with this goal in mind.

This shift in trend was much needed for web to evolve. Any serious web site with more than a handful of pages needs to think about UI reusability seriously. However, we’re still learning how to create reusable user experience for web. There are more failed design systems than successful ones. These failures can be attributed to factors such as sponsorship, organizational priorities or technology. Today, I want to share few hazards of focusing too much on reusability based on my past experience. Some of this may lead to redundancy and eventually lead your designs system to be impractical.

## Hazard # 1: Designing in Isolation

If you want your design to be reusable, you have to do so while you’re designing your pages. For each page, designers and developers should determine what’s really reusable. Identify broad set of reusable pattern that aren’t too specific to a use-case or not too general to remain impractical.

You can’t do so in isolation; that is an independent team or a person with reserved capacity creating reusable designs for other people to use. In most probable case, you might end up with a situation where patterns that developers need aren’t there and patterns that exists in your design systems are left unused as they don’t meet practical use-cases.

In other words, design system are fed by efforts of individual page developers and designers. Designs systems that expect to achieve the other way fails.

## Hazard # 2: Overthinking and overdoing reusability
Don’t design something that you don’t need today. It’s quite natural to think of reusability while coding. But resist the temptation to make anything reusable that can’t be applied in immediate future.

Reusable designs need fore-thinking and additional effort to make it generic enough to accommodate other pages. You shouldn’t take that extra strain unless you’re sure of your its reuse. Let’s say you designed a widget for a page. Few months later, you notice that same widget is needed in other pages with little or no variations. That would be the right time to refactor your widget, making it reusable and adding it to the design system. This way only truly reusable design gets coded for reusability.

When it comes to design systems, less is more. The more you’ve in design system, more you will have to version, document and manage. That’s why be very selective about what gets added in your design system. I think it’s far better to have a design systems with handful of all-rounded, well-designed and well-documented patterns compared to a design system with hundreds of patterns with little or no documentation.

## Hazard # 3: Too specific or too general patterns

Truly reusable patterns aren’t neither too specific nor too general. Developers should practice to strike an ideal balance between both. Patterns that are too specific are left unused as it fits only a specific use case  — probably the page it was originally coded for. Too generic patterns, on the other hand, seems to appeal to everything. It kills designer creativity by forcing them to use that pattern for all of their designs. One example of such highly generic pattern is _cards_ or _tiles_.

## Hazard # 4: Design may become _boring_

I am not a fulltime designer, and I could be wrong here, but I have started to believe that we drove the idea of design consistency and reusability too far. Design systems should only establish broad strokes of design and let individual page designers define the fine details. This kind of constrained creativity lets designer still be creative within broad boundaries of your design system. 

When it comes to web, we design around the content. Our goal is to deliver content to the user more effectively. We think about the message and then we identify the user interface elements that can help us deliver that message. Once we establish that, we look for the patterns to reuse from design system. If we dive straight into design system and assemble page using the patterns from design system, we’re eseentially into _manufacturing business_ not _design business_. This makes design predictable and boring. Your design loses the element of surprise which, I think, _in some cases_, is very much needed for a positive impact on user experience.

> Conforming and efficiency has a price. And that price is design.
> 
> <cite>Mark Boulton</cite>

I will leave you with this fine talk by [Espen Brunborg](//espen.design). He is far better than me at explaining how web has evolved to kill the creativity.

<figure>
<div style="padding:56.25% 0 0 0;position:relative;">
   <iframe src="https://player.vimeo.com/video/173326452?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
<figcaption>
   Espen Brunborg: The Secret Life Of Comedy  (SmashingConf NYC &rsquo;16)
</figcaption>
</figure>

## Take away points

- Don’t design in silo and dictate the design. Instead, collaborate with individual page designers to come-up with truly meaningful and reusable design patterns.
- Do design diet and keep your library lean.
- Code for today.
- Start with specifics and make designs generic as needed. Make sure you strike the ideal balance between too specific and too generic.
- Patterns in your design systems are reference for reusability. It should not force designers into compliance and kill creativity.