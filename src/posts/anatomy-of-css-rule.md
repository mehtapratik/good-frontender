---
layout: post.njk
lastUpdated: 2020-09-16
date: 2020-09-16
tags: 
   - post
   - series
title: Anatomy of a CSS Rule
blurb: From time to time, I would like to pause and study the fundamentals of web development instead of constantly trying to catch-up with new features and frameworks. It helps me adhere to basic principles of web development &mdash; no mater which new feature or framework I use. Today, I want to go over the anatomy of CSS rule with you. Most of this you may already know but wouldn't hurt going through a quick refresher.
---
<section class="post__intro">
<p>
From time to time, I would like to pause and study the fundamentals of web development instead of constantly trying to catch-up with new features and frameworks. It helps me adhere to basic principles of web development &mdash; no mater which new feature or framework I use. Today, I want to go over the anatomy of CSS rule with you. Most of this you may already know but wouldn't hurt going through a quick refresher.
</p>
</section>

Every CSS rule has at least one declaration. A **declaration** is a property-value pair separated by a colon. More than on one declaration are separated by a semicolon.

```
color: tomato
```

OR…

```
color: tomato;
background-color: seashell;
```

The semicolon in last declaration (after `seashell`) isn't necessary but it's a good idea to terminate every declaration with one. Therefore, you don't accidentally end up with syntax error when you append another declaration later.

Properties that accept more than one values separate them with a space or in few cases, with a forward slash. If you're unsure, consult [Mozilla Developer Network](//developer.mozilla.org/en-US/docs/Web/CSS) or [CSS specs](//www.w3.org/Style/CSS/specs.en.html).

```
padding: 1rem 0.5rem;
grid-column: 1 / 3;
```

Many properties accept an array of values separated by a comma. And then there are properties that accept both, multiple values and an array of values, such as `box-shadow` property in example below.

```
background-size: contain, cover;
box-shadow: 0 0 1px 1px red,
            0 0 1px 1px blue inset;
```

You get a **declaration block** when you enclose your declarations in curly braces:

```
{
   background-color: seashell;
   color: tomato;
}
```

The real magic happens when you use a **selector** to target your declaration blocks to one or more elements in your document. The `h1` in below example is your selector.

```
h1 
{
   background-color: seashell;
   color: tomato;
   font-size: 2.5rem;
}
```

**Combinators** allow to you target elements in your document in terms of their relationship with each other.

```
h1 small
{
   color: coral;
   font-size: .85em
}
```

The whole thing, `h1 small`, is known as **compound selector**. With help of descendent combinator (space between `h1` and `small`) you tell the browser to style only those `small` elements that are descendent of `h1`. Browser leaves all other `small` elements alone for the purpose of this styling with this declaration block.

You have more than a handful of selectors selectors and combinators to use them in many different and interesting ways. I won't be covering them all in this article. Instead, I would encourage you to study them at [<abbr title="Mozilla Developer Network">MDN</abbr>](//developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

**<em>An important thing to note about combinators and selectors, however, is that it&rsquo;s possible to target descendants, children and following siblings. But, there are no selectors or combinators to target ancestor, parent or preceding siblings.</em>**

This can be better explained by example:

```
<ul>
   <li>Ek</li>
   <li>Do</li>
   <li class="middle>Teen</li>
   <li>Char</li>
   <li>Panch</li>
</ul>
```

If you want to style all `li` that are direct children of `ul`, you can write `ul > li` selector. But you're out of luck if you want to style all `ul` that has `li` as its children.

Similarly, if you wish to style all `li` followed by the one with `middle` class, you can write `.middle ~ li` selector. But, you cannot write any selector to style all `li` preceding the one with `middle` class. Knowing this upfront could probably save you hours of research and troubleshooting. Instead, consider adding class name or tweak your markup in semantically meaningful way so that you can target your element with available selectors.

Like array of property values, you can have an array selectors in a single declaration block - each separated by a comma.

```
h1 small,
h2 small,
h3 small 
{
   background-color: seashell;
   color: tomato;
}
```

And finally, the whole thing above is called **CSS rule (or CSS ruleset)** and the portion before opening curly braces, `h1 small, h2 small, h3 small`, is your **grouped selector**.



And that's all I have to say about CSS rules and its individual parts. Here&rsquo;s the quick illustration of what we covered so far:

<figure class="constrained">
   <img src="/assets/images/anatomy-of-css.svg" alt="Illustration of CSS rulset and its individual parts">
</figure>

I hope you found this informative. Feel free to let me know what you think via [Twitter](//twitter.com/pratikgmehta).