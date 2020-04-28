---
layout: series.njk
Published: December 22, 2019
date: 2019-12-22
series: CSS Architecture (Part 2 of 3)
title: Choosing the Right CSS Strategy for Your Website
blurb: This writing explores CSS strategies that work for your company's culture and application's needs. We will discuss how to organize CSS to write reusable, scalable and predictable styles while keeping the file size small. We will talk about different situations and use-cases where writing styles using one or more approach would be ideal.
---

## Preface

This is a part one of three in CSS Architecture series. This series reflects totallity of my understanding and strategies toward CSS. Through these writings, I will try to answer questions such as…

- How many different ways we can write CSS? And which approach to pick for a specific type of web application?
- How do we tame CSS file size while avoiding common pitfalls of CSS?
- How do we keep our website consistent and reuse the design patterns where we can?
- How do we easily refresh the design without having to touch every page in the site?

In general, this writings are my opinions about best practices and right way of writing CSS.

## Introduction

CSS is caught into a lot of controversies nowadays - mainly around global selectors and their capability to make site-wide changes - intended or otherwise. This is because CSS was originally meant for documents and not for large scale web applications. We tried to scale CSS to fit into large applications but ended up with bulky CSS file with thousands of lines of code. To overcome these challenges, we looked for a solution outside of CSS. The approaches such as Atomic CSS and CSS-in-JS became popular.

To understand how we used to write CSS and where we're headed, let's first talk about all possible ways we can write styles.

### Traditional approach

**_Using CSS as a content construct_**

This approach is probably as old as web. With this approach, we describe our class names based on the content we're styling. It seems totally against principle of Separation of Concerns but it is baked right into our HTML specification:

> <strong>From HTML - Living Standard</strong>
>
> …authors are encouraged to use values that describe the nature of the content, rather than values that describe the desired presentation of the content.

Let's say we want to put a call-to-action button - Subscribe - in our blog. Intuitively it makes sense to describe the class name as btn or variations of it. However, the class name btn is a design construct. It doesn't describe the nature of the content. To adhere to traditional approach, we have to change class name to something like `subscribe-link`.

```
<a href="/subscribe.html" class="subscribe-link">Subscribe</a>
```

Exemplary sites like CSS Zen Garden reinforces this fact. It offers a possibility that you can dramatically redesign your style just by changing the CSS. However, it can only work for a smaller site with handful of pages. With larger sites, however, content speicific class name keeps polluting global stylesheets. These global CSS files tends to keep growing with every new feature added to the site. Your CSS file becomes huge and convoluted over the years. No one from your team knows who wrote a specific style and where it is being used. Developers are now afraid of changing any existing styles not knowing which page it may break. Your CSS becomes what is famously teased as append-only CSS.

> One of those situations, in my limited experience, is on large teams with large codebases. The feeling is that the CSS can get far too large and team members essentially become afraid of it, and the CSS becomes jokingly-but-accurately "append-only".
>
> Chris Coyier's comment on article about Atomic CSS

This is where controversies begun. People started questioning if CSS is suitable, at all, for large scale web application. Putting the controversies aside, traditional approach give you restylable HTML but not reusable CSS.

### Semantic approach

**_Using CSS as a design construct_**

Semantic styles are described in terms of the design constructs such as buttons, tabs and modals. Probably, you're thinking isn't semantic coding concerned with content? In that sense, traditional approach would qualify as semantic approach.

Let's pause here for a minute and think about the term semantic code. Our common understanding is that semantic code describes the content. It aids programs like search engines and screen readers to crawl your content and make sense of it. As an added bonus, developers could enjoy enhanced readability since the markup describes itself.

Isn't then the semantic coding just about HTML since it is designed to structure and describe our content? Why should we pass that burden to CSS? We're not going to help content crawlers if we describe the content with CSS. CSS class names are meaningless to them. Same could be said for code readability - using class name to describe your code is a terrible idea. CSS is reserved for design and leave it just for that.

Originally, the word semantic came from linguistics. Semantics deals with study of meanings. It assigns meaning to different signs and symbols. If we go by linguistics definition, what's semantic varies by our intent (meaning). And principle of Separation of Concerns (SoC) clearly isolates our intents:

- HTML should describe the content
- CSS should describe the presentation
- JavaScript should describe the behaviors

In that case, we can't use content's intent in CSS and pretend that our CSS is semantic. With this rationale in mind…

Semantic HTML describes the content
Semantic CSS describes the design
Semantic JavaScript describes the behaviors

This might be against HTML specification and what's traditionally believed as a best practice. However, I've started to believe that semantically correct code uses the right tool for right purpose to makes our code more meaningful.

With new definition of semantic code, let's rewrite our example:

```
<a id="subscribeLink" href="/subscribe.html" class="btn btn--primary" data-modal>Subscribe</a>
```

First obvious change here is the class names. However, we've made other subtle changes to be truly semantic. ID attribute now describes the content of the element. It can also be used to bind event handlers just to that one element. If you want to target more than one element, use data attributes (`data-modal`) instead of CSS hooks (`class="js-modal"`). Since CSS is a design construct, semantic code would avoid using class name to attach behaviors.

Here, our CSS is reusable but our HTML is not quite restylable. For example, we can not restyle subscribe link with just the CSS without propagating this change across the site. We will have to change the markup. However, that's an acceptable limitation in my opinion if you've a larger codebase. Now, lets say we want to change the color of buttons to meet the ADA contrast requirement. This change would be done in button pattern and all the pages using this pattern will be updated. After all, isn't this what we would want in corporate applications controlled by strict branding guidelines?

This is why Semantic CSS is favored by designers and styleguide developers. It allows you to define global patterns to reused across the site.

### Atomic approach

**_CSS as a LEGO construct_**

I think approach came out of hopelessness and frustration of writing styles for any serious web application with more than few pages. This happened mainly due to the behaviors of global selector and its unintended effects on different pages. Additionally, if you're not careful enough, your CSS file size can grow out of control no matter which approach you follow -  semantic or traditional.

> Tweet by @thomasfuchs
>
> Two CSS properties walk into a bar.
>
> &hellip;
>
> &hellip;
>
> A barstool in a completely different bar falls over.

Some of us (myself included) divorced ourselves from the concept of design abstraction in CSS, and looked for an answer outside of CSS. Two approaches became popular: atomic styles and CSS-in-JS.

> _This series excludes CSS-in-JS from its scope. This is because I haven't practiced this approach and I don't want to write opinions without having first-hand experience. The idea of component level abstraction is definitely appealing to me. However, the danger here could come from focusing all the time at component level granularity and losing your focus from site level factors such rebranding and redesign._

Atomic CSS offers preset variations of design as one CSS property per class. You will no longer write CSS while developing your page. Instead, you will choose from preset collection of atomic classes. Your design specs call for 18 pixel font size and Roboto font? CSS classes fs-18 and type-roboto are there for you to build your page like a LEGO modal. Sure enough, this stopped CSS from growing. Designing pages, with one LEGO brick at a time, couldn't be more easier.

This approach offered few benefits:

- Atomic CSS exposes only limited set of classes allowed per design and brand standards. This helped designers to enforce their specifications. Less developers will go rogue and stay within the boundaries defined by designers.
- CSS file size will stop growing because there will be less designing and more composing. Instead of writing styles (designing), you will build your page by putting together handful of atomic classes (composing).

This is how our previous examples will look with atomic styles:

```
<a href="/subscribe.html" class="px-20 py-5 font-roboto font-16 font-white bg-primary">Subscribe</a>
```

Personally, I found that building pages with atomic styles is surprisingly easier. After using atomic styles for couple of years, however, I realized that maintaining pages and making design changes is where this approach failed me. Many design changes required changing class names in multiple instances. Finding and changing these instances without breaking anything else is stressfull and error-prone.

With traditional and semantic approach CSS became append-only and developers were afraid of changing CSS. Now, with this approach developers are stressed about changing class names in their markup.

**_Seems like all we did is to shift developers fears from changing styles to changing markup._**

In the end, stakeholders questioned if there was an easy way to refresh the design without having to touch each and every page in the site. Are they asking me to go back and abstract the design in CSS? Is there a way in-between? Can we write scalable, reusable and small stylesheets while avoiding common mistakes?

That's the subject of next writing this series.

## Parting thoughts

Broadly speaking, one approach won't work in all instances. If we truly want to create truly scalable, reusable and consistent web experience and keep the file size in check, we have to learn to mix different approaches based on the repetition patterns, nature of the application and organizational structure.

In the second writing of this series, we will talk about framework and set of rules that will help us pick right approach for right application. We will weigh pros-n-cons of each approach and try to strike right balance to write good code for web without going mad.
