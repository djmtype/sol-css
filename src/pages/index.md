---
title: Home
layout: "@/layouts/BaseLayout.astro"
---

<ol>
<li>One
 <ol>
 <li>Point One</li>
 <li>Point Two</li>
 </ol>
 <li>Two</li>
</li>
</ol>

<ul>
<li>One
 <ol>
 <li>Point One</li>
 <li>Point Two</li>
 </ol>
 <li>Two</li>
</li>
</ul>


<ul>
<li>One
 <ul>
 <li>Point One
 <ul><li>List item</li></ul>
 </li>
 <li>Point Two</li>
 </ul>
 <li>Two</li>
</li>
</ul>


<div class="p-lg border-sm border-separator bg-surface-bright">
<h1 class="text-ink-primary">Tailwind text</h1>
</div>

<label for="loadingundefined">Loading </label>
<progress id="loadingundefined"></progress>

<label for="loadinglabel">Progress </label>
<progress id="loadinglabel" max="100" value="50"></progress>

```html
<form>
  <fieldset role="group">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      autocomplete="email"
    />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>
```

<details>
<summary>Consequat in eu commodo minim adipisicing excepteur</summary>
<div>
<p>Amet amet laboris tempor labore nostrud cupidatat ex aliqua non duis. Id deserunt elit reprehenderit. Ea consequat nisi in Lorem.</p>
<p>Amet amet laboris tempor labore nostrud cupidatat ex aliqua non duis. Id deserunt elit reprehenderit. Ea consequat nisi in Lorem.</p>
</div>
</details>

<details>
<summary>Consequat in eu commodo minim adipisicing excepteur</summary>
<div>
<p>Amet amet laboris tempor labore nostrud cupidatat ex aliqua non duis. Id deserunt elit reprehenderit. Ea consequat nisi in Lorem.</p>
<p>Amet amet laboris tempor labore nostrud cupidatat ex aliqua non duis. Id deserunt elit reprehenderit. Ea consequat nisi in Lorem.</p>
</div>
</details>

<figure>
<table class="simple">
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Maximum temperature (°C)</th>
      <th scope="col">Minimum temperature (°C)</th>
      <th scope="col">Days of air frost (days)</th>
      <th scope="col">Sunshine (hours)</th>
      <th scope="col">Rainfall (mm)</th>
      <th scope="col">Days of rainfall ≥1&nbsp;mm (days)</th>
      <th scope="col">Monthly mean wind speed at 10&nbsp;m (knots)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>6.66</td>
      <td>1.21</td>
      <td>11.32</td>
      <td>47.51</td>
      <td>121.53</td>
      <td>15.43</td>
      <td>10.77</td>
    </tr>
  <tr>
    <th scope="row">February</th>
    <td>7.16</td>
    <td>1.13</td>
    <td>10.69</td>
    <td>71.93</td>
    <td>96.15</td>
    <td>13.18</td>
    <td>10.77</td>
  </tr>
  <tr>
    <th scope="row">March</th>
    <td>9.22</td>
    <td>2.19</td>
    <td>7.84</td>
    <td>109.24</td>
    <td>85.10</td>
    <td>12.68</td>
    <td>10.28</td>
  </tr>
  <tr>
    <th scope="row">April</th>
    <td>12.03</td>
    <td>3.75</td>
    <td>4.03</td>
    <td>155.38</td>
    <td>71.73</td>
    <td>11.59</td>
    <td>9.33</td>
  </tr>
  <tr>
    <th scope="row">May</th>
    <td>15.13</td>
    <td>6.25</td>
    <td>1.20</td>
    <td>192.21</td>
    <td>70.98</td>
    <td>11.24</td>
    <td>8.75</td>
  </tr>
  <tr>
    <th scope="row">June</th>
    <td>17.68</td>
    <td>9.08</td>
    <td>0.07</td>
    <td>171.48</td>
    <td>77.20</td>
    <td>11.51</td>
    <td>8.16</td>
  </tr>
  <tr>
    <th scope="row">July</th>
    <td>19.62</td>
    <td>11.02</td>
    <td>0.00</td>
    <td>173.39</td>
    <td>82.48</td>
    <td>12.25</td>
    <td>7.85</td>
  </tr>
  <tr>
    <th scope="row">August</th>
    <td>19.30</td>
    <td>10.97</td>
    <td>0.01</td>
    <td>161.64</td>
    <td>93.73</td>
    <td>12.89</td>
    <td>7.88</td>
  </tr>
  <tr>
    <th scope="row">September</th>
    <td>16.85</td>
    <td>9.04</td>
    <td>0.12</td>
    <td>127.49</td>
    <td>90.89</td>
    <td>12.08</td>
    <td>8.41</td>
  </tr>
  <tr>
    <th scope="row">October</th>
    <td>13.08</td>
    <td>6.42</td>
    <td>1.64</td>
    <td>91.82</td>
    <td>122.56</td>
    <td>14.83</td>
    <td>9.30</td>
  </tr>
  <tr>
    <th scope="row">November</th>
    <td>9.41</td>
    <td>3.56</td>
    <td>5.51</td>
    <td>57.94</td>
    <td>123.39</td>
    <td>15.81</td>
    <td>9.74</td>
  </tr>
  <tr>
    <th scope="row">December</th>
    <td>7.02</td>
    <td>1.42</td>
    <td>10.95</td>
    <td>42.71</td>
    <td>127.19</td>
    <td>15.60</td>
    <td>10.06</td>
  </tr>
</tbody>
  <tfoot>
    <th scope="row">Annual</th>
    <td>12.79</td>
    <td>5.53</td>
    <td>53.36</td>
    <td>1402.73</td>
    <td>1162.93</td>
    <td>159.08</td>
    <td>9.27</td>
  </tfoot>
</table>
  <figcaption>Average climate data for the UK, 1990–2020</figcaption>
</figure>

<button popovertarget="menu">
  Your Account
</button>

<nav id="menu" popover>
<ul role="list">
  <li><a href=#>
    View Profile
  </a></li>
  <li><a href=#>
    Messages
  </a></li>
  <li><a href=#>
    Favorites
  </a></li>
  <li><a href="#"> 
    Account Settings
  </a></li>
</ul>
</nav>

<dialog id="dialog">
  <form method="dialog">
  <header><h2>My Modal</h2> 
  <button aria-label="Close" autofocus></button>
  </header> 
    <div>
      <p>Amet amet laboris tempor labore nostrud cupidatat ex aliqua non duis. Id deserunt elit reprehenderit. Ea consequat nisi in Lorem.</p>
<p>Amet amet laboris tempor labore nostrud cupidatat ex aliqua non duis. Id deserunt elit reprehenderit. Ea consequat nisi in Lorem.</p>
    </div>
    <footer>
    <button>Accept</button>
    <button>Deny</button>
    </footer>
  </form>
</dialog>

<button onclick="dialog.showModal()">Open Dialog</button>



<form class="inputs">
<input type="date" name="date" aria-label="Date" />

<input type="datetime-local" name="datetime-local" aria-label="Datetime local" />

<input type="month" name="month" aria-label="Month" />

<input type="time" name="time" aria-label="Time" />
</form>

<label>
  Contrast
  <input type="range" value="40" />
</label>

<form>
  <fieldset role="group">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      autocomplete="email"
    />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>

<div class="surface">
<p>
Do cillum reprehenderit aliquip. Esse laborum non excepteur minim Lorem reprehenderit excepteur ut velit Lorem dolore aliqua labore. Consectetur <span class="muted">is a muted</span> aute proident dolor adipisicing laboris quis et magna non aliquip eiusmod. Ut et esse pariatur tempor ad adipisicing esse fugiat irure adipisicing enim aute laboris. Lorem aliquip pariatur veniam in ea laboris nostrud ut elit ullamco eiusmod velit sunt officia. Ex Lorem veniam ut amet tempor nulla voluptate laborum eiusmod fugiat commodo aute elit. Ex cillum nostrud ipsum mollit duis culpa laboris do duis est esse ad laborum veniam.</p>
</div>

<div class="well">
<p>
Do cillum reprehenderit aliquip. Esse laborum non excepteur minim Lorem reprehenderit excepteur ut velit Lorem dolore aliqua labore. Consectetur <span class="muted">is a muted</span> aute proident dolor adipisicing laboris quis et magna non aliquip eiusmod. Ut et esse pariatur tempor ad adipisicing esse fugiat irure adipisicing enim aute laboris. Lorem aliquip pariatur veniam in ea laboris nostrud ut elit ullamco eiusmod velit sunt officia. Ex Lorem veniam ut amet tempor nulla voluptate laborum eiusmod fugiat commodo aute elit. Ex cillum nostrud ipsum mollit duis culpa laboris do duis est esse ad laborum veniam.</p>
</div>

---

<label for="avatar">Choose a profile picture:</label>

<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

<form>
<label for="html">
  <input type="radio" id="html" name="fav_language" value="HTML">
  HTML
  </label><br>
  <label for="css">
  <input type="radio" id="css" name="fav_language" value="CSS">
  CSS
  </label><br>
   <label for="javascript">
   <input type="radio" id="javascript" name="fav_language" value="JavaScript" disabled>
   JavaScript
 </label>

<label>Choose a cuisine</label><br />
<select required>

<option disabled selected value="">Select your favorite cuisine</option>
<option>Italian</option>
<option>Japanese</option>
<option>Indian</option>
<option>Thai</option>
<option>French</option>
</select>

<label>Comment
<textarea>
</textarea>
</label>

</form>

<form>
  <input type="checkbox" id="one" name="fav_language" value="one">
  <label for="one">one</label><br>
  <input type="checkbox" id="two" name="fav_language" value="two">
  <label for="two">two</label><br>
  <input type="checkbox" id="three" name="fav_language" value="three">
  <label for="three">three</label>
</form>

# Consequat in eu commodo minim adipisicing excepteur Lorem

<form action="/action_page.php" method="get">
<label for="search">Search:</label>
  <input type="search" id="search" name="search"><button>Button</button><br /><br />
  <label for="number">Number:</label>
  <input type="number" id="number" name="number"><br /><br />

<label for="fname">First name:</label>
<input type="text" id="fname" name="fname" min-length="3" required><br /><br />
<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname" required><br /><br />

<label for="password">Password</label>
<input required placeholder="12+ characters" type="password" id="password" minlength="12"><br /><br />

<label for="email">Email:</label>
<input type="email" id="email" name="email" required><br /><br />
<input type="submit" value="Submit">

</form>

---

## Inline Text

  <abbr title="Abbreviation">Abbr.</abbr>

  <strong>Bold</strong>

  <code>Code</code>

  <mark>Highlighted</mark>

  <ins>Inserted</ins>

  <em>Italic</em>

  <p><kbd>CMD</kbd> + <kbd>1</kbd> Ut eu reprehenderit ullamco et non veniam quis.<p>

  <a href="#0">Link</a>

  <small>Small</small>

  <strike>Strike</strike>

  <sup>Superscript</sup>

  <sub>Subscript</sub>

  <u>Underline</u>


Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

### Syntax

```markdown
![Alt text](/jeremy-bishop-0IZZ6OLXc_8-unsplash.jpg)
```

### Output

![blog placeholder](/jeremy-bishop-0IZZ6OLXc_8-unsplash.jpg)

## Image with caption

<figure>
<img src="/jeremy-bishop-0IZZ6OLXc_8-unsplash.jpg" alt="blog placeholder" />
<figcaption>
Photo by <a href="https://unsplash.com/@jeremybishop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jeremy Bishop</a> on <a href="https://unsplash.com/photos/a-person-riding-a-bike-on-a-foggy-day-0IZZ6OLXc_8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</figcaption>
</figure>
  

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
>   
> **Note** that you can use _Markdown syntax_ within a blockquote.

1. The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.
2. Item two

- The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.
- Item two

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Output

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

```html
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
