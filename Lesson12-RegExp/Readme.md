# [正则表达式 RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

## 构建正则表达式

字面量方式

```js
var re = /ab+c/
```

使用RegExp构造函数

```js
var re = new RegExp("ab+c");
```

## 说明

<table class="wikitable">
  <tbody>
    <tr>
      <th width="10%">字符</th>
      <th width="90%">描述</th>
    </tr>
    <tr>
      <th style="text-align:center;">\</th>
      <td>将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“<code>n</code>”匹配字符“<code>n</code>”。“<code>\n</code>”匹配一个换行符。串行“<code>\\</code>”匹配“<code>\</code>”而“<code>\(</code>”则匹配“<code>(</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">^</th>
      <td>匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“<code>\n</code>”或“<code>\r</code>”之后的位置。</td>
    </tr>
    <tr>
      <th style="text-align:center;">$</th>
      <td>匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“<code>\n</code>”或“<code>\r</code>”之前的位置。</td>
    </tr>
    <tr>
      <th style="text-align:center;">*</th>
      <td>匹配前面的子表达式零次或多次。例如，zo*能匹配“<code>z</code>”以及“<code>zoo</code>”。*等价于{0,}。</td>
    </tr>
    <tr>
      <th style="text-align:center;">+</th>
      <td>匹配前面的子表达式一次或多次。例如，“<code>zo+</code>”能匹配“<code>zo</code>”以及“<code>zoo</code>”，但不能匹配“<code>z</code>”。+等价于{1,}。</td>
    </tr>
    <tr>
      <th style="text-align:center;">?</th>
      <td>匹配前面的子表达式零次或一次。例如，“<code>do(es)?</code>”可以匹配“<code>does</code>”或“<code>does</code>”中的“<code>do</code>”。?等价于{0,1}。</td>
    </tr>
    <tr>
      <th style="text-align:center;">{<span style="font-family:Times New Roman; font-style:italic;">n</span>}</th>
      <td><span style="font-family:Times New Roman; font-style:italic;">n</span>是一个非负整数。匹配确定的<span style="font-family:Times New Roman; font-style:italic;">n</span>次。例如，“<code>o{2}</code>”不能匹配“<code>Bob</code>”中的“<code>o</code>”，但是能匹配“<code>food</code>”中的两个o。</td>
    </tr>
    <tr>
      <th style="text-align:center;">{<span style="font-family:Times New Roman; font-style:italic;">n</span>,}</th>
      <td><span style="font-family:Times New Roman; font-style:italic;">n</span>是一个非负整数。至少匹配<span style="font-family:Times New Roman; font-style:italic;">n</span>次。例如，“<code>o{2,}</code>”不能匹配“<code>Bob</code>”中的“<code>o</code>”，但能匹配“<code>foooood</code>”中的所有o。“<code>o{1,}</code>”等价于“<code>o+</code>”。“<code>o{0,}</code>”则等价于“<code>o*</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">{<span style="font-family:Times New Roman; font-style:italic;">n</span>,<span style="font-family:Times New Roman; font-style:italic;">m</span>}</th>
      <td><span style="font-family:Times New Roman; font-style:italic;">m</span>和<span style="font-family:Times New Roman; font-style:italic;">n</span>均为非负整数，其中<span style="font-family:Times New Roman; font-style:italic;">n</span>&lt;=<span style="font-family:Times New Roman; font-style:italic;">m</span>。最少匹配<span style="font-family:Times New Roman; font-style:italic;">n</span>次且最多匹配<span style="font-family:Times New Roman; font-style:italic;">m</span>次。例如，“<code>o{1,3}</code>”将匹配“<code>fooooood</code>”中的前三个o。“<code>o{0,1}</code>”等价于“<code>o?</code>”。请注意在逗号和两个数之间不能有空格。</td>
    </tr>
    <tr>
      <th style="text-align:center;">?</th>
      <td>当该字符紧跟在任何一个其他限制符（*,+,?，{<span style="font-family:Times New Roman; font-style:italic;">n</span>}，{<span style="font-family:Times New Roman; font-style:italic;">n</span>,}，{<span style="font-family:Times New Roman; font-style:italic;">n</span>,<span style="font-family:Times New Roman; font-style:italic;">m</span>}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“<code>oooo</code>”，“<code>o+?</code>”将匹配单个“<code>o</code>”，而“<code>o+</code>”将匹配所有“<code>o</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">.</th>
      <td>匹配除“<code>\</code><span style="font-family:Times New Roman; font-style:italic;"><code>n</code></span>”之外的任何单个字符。要匹配包括“<code>\</code><span style="font-family:Times New Roman; font-style:italic;"><code>n</code></span>”在内的任何字符，请使用像“<code>(.|\n)</code>”的模式。</td>
    </tr>
    <tr>
      <th style="text-align:center;">(pattern)</th>
      <td>匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“<code>\(</code>”或“<code>\)</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">(?:pattern)</th>
      <td>匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符“<code>(|)</code>”来组合一个模式的各个部分是很有用。例如“<code>industr(?:y|ies)</code>”就是一个比“<code>industry|industries</code>”更简略的表达式。</td>
    </tr>
    <tr>
      <th style="text-align:center;">(?=pattern)</th>
      <td>正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“<code>Windows(?=95|98|NT|2000)</code>”能匹配“<code>Windows2000</code>”中的“<code>Windows</code>”，但不能匹配“<code>Windows3.1</code>”中的“<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。</td>
    </tr>
    <tr>
      <th style="text-align:center;">(?!pattern)</th>
      <td>正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“<code>Windows(?!95|98|NT|2000)</code>”能匹配“<code>Windows3.1</code>”中的“<code>Windows</code>”，但不能匹配“<code>Windows2000</code>”中的“<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始</td>
    </tr>
    <tr>
      <th style="text-align:center;">(?&lt;=pattern)</th>
      <td>反向肯定预查，与正向肯定预查类拟，只是方向相反。例如，“<code>(?&lt;=95|98|NT|2000)Windows</code>”能匹配“<code>2000Windows</code>”中的“<code>Windows</code>”，但不能匹配“<code>3.1Windows</code>”中的“<code>Windows</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">(?&lt;!pattern)</th>
      <td>反向否定预查，与正向否定预查类拟，只是方向相反。例如“<code>(?&lt;!95|98|NT|2000)Windows</code>”能匹配“<code>3.1Windows</code>”中的“<code>Windows</code>”，但不能匹配“<code>2000Windows</code>”中的“<code>Windows</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">x|y</th>
      <td>匹配x或y。例如，“<code>z|food</code>”能匹配“<code>z</code>”或“<code>food</code>”。“<code>(z|f)ood</code>”则匹配“<code>zood</code>”或“<code>food</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">[xyz]</th>
      <td>字符集合。匹配所包含的任意一个字符。例如，“<code>[abc]</code>”可以匹配“<code>plain</code>”中的“<code>a</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">[^xyz]</th>
      <td>负值字符集合。匹配未包含的任意字符。例如，“<code>[^abc]</code>”可以匹配“<code>plain</code>”中的“<code>p</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">[a-z]</th>
      <td>字符范围。匹配指定范围内的任意字符。例如，“<code>[a-z]</code>”可以匹配“<code>a</code>”到“<code>z</code>”范围内的任意小写字母字符。</td>
    </tr>
    <tr>
      <th style="text-align:center;">[^a-z]</th>
      <td>负值字符范围。匹配任何不在指定范围内的任意字符。例如，“<code>[^a-z]</code>”可以匹配任何不在“<code>a</code>”到“<code>z</code>”范围内的任意字符。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\b</th>
      <td>匹配一个单词边界，也就是指单词和空格间的位置。例如，“<code>er\b</code>”可以匹配“<code>never</code>”中的“<code>er</code>”，但不能匹配“<code>verb</code>”中的“<code>er</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\B</th>
      <td>匹配非单词边界。“<code>er\B</code>”能匹配“<code>verb</code>”中的“<code>er</code>”，但不能匹配“<code>never</code>”中的“<code>er</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\cx</th>
      <td>匹配由x指明的控制字符。例如，\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“<code>c</code>”字符。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\d</th>
      <td>匹配一个数字字符。等价于[0-9]。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\D</th>
      <td>匹配一个非数字字符。等价于[^0-9]。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\f</th>
      <td>匹配一个换页符。等价于\x0c和\cL。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\n</th>
      <td>匹配一个换行符。等价于\x0a和\cJ。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\r</th>
      <td>匹配一个回车符。等价于\x0d和\cM。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\s</th>
      <td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\S</th>
      <td>匹配任何非空白字符。等价于[^ \f\n\r\t\v]。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\t</th>
      <td>匹配一个制表符。等价于\x09和\cI。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\v</th>
      <td>匹配一个垂直制表符。等价于\x0b和\cK。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\w</th>
      <td>匹配包括下划线的任何单词字符。等价于“<code>[A-Za-z0-9_]</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\W</th>
      <td>匹配任何非单词字符。等价于“<code>[^A-Za-z0-9_]</code>”。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\x<span style="font-family:Times New Roman; font-style:italic;">n</span></th>
      <td>匹配<span style="font-family:Times New Roman; font-style:italic;">n</span>，其中<span style="font-family:Times New Roman; font-style:italic;">n</span>为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“<code>\x41</code>”匹配“<code>A</code>”。“<code>\x041</code>”则等价于“<code>\x04&amp;1</code>”。正则表达式中可以使用ASCII编码。.</td>
    </tr>
    <tr>
      <th style="text-align:center;">\<span style="font-family:Times New Roman; font-style:italic;">num</span></th>
      <td>匹配<span style="font-family:Times New Roman; font-style:italic;">num</span>，其中<span style="font-family:Times New Roman; font-style:italic;">num</span>是一个正整数。对所获取的匹配的引用。例如，“<code>(.)\1</code>”匹配两个连续的相同字符。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\<span style="font-family:Times New Roman; font-style:italic;">n</span></th>
      <td>标识一个八进制转义值或一个向后引用。如果\<span style="font-family:Times New Roman; font-style:italic;">n</span>之前至少<span style="font-family:Times New Roman; font-style:italic;">n</span>个获取的子表达式，则<span style="font-family:Times New Roman; font-style:italic;">n</span>为向后引用。否则，如果<span style="font-family:Times New Roman; font-style:italic;">n</span>为八进制数字（0-7），则<span style="font-family:Times New Roman; font-style:italic;">n</span>为一个八进制转义值。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\<span style="font-family:Times New Roman; font-style:italic;">nm</span></th>
      <td>标识一个八进制转义值或一个向后引用。如果\<span style="font-family:Times New Roman; font-style:italic;">nm</span>之前至少有<span style="font-family:Times New Roman; font-style:italic;">nm</span>个获得子表达式，则<span style="font-family:Times New Roman; font-style:italic;">nm</span>为向后引用。如果\<span style="font-family:Times New Roman; font-style:italic;">nm</span>之前至少有<span style="font-family:Times New Roman; font-style:italic;">n</span>个获取，则<span style="font-family:Times New Roman; font-style:italic;">n</span>为一个后跟文字<span style="font-family:Times New Roman; font-style:italic;">m</span>的向后引用。如果前面的条件都不满足，若<span style="font-family:Times New Roman; font-style:italic;">n</span>和<span style="font-family:Times New Roman; font-style:italic;">m</span>均为八进制数字（0-7），则\<span style="font-family:Times New Roman; font-style:italic;">nm</span>将匹配八进制转义值<span style="font-family:Times New Roman; font-style:italic;">nm</span>。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\<span style="font-family:Times New Roman; font-style:italic;">nml</span></th>
      <td>如果<span style="font-family:Times New Roman; font-style:italic;">n</span>为八进制数字（0-3），且<span style="font-family:Times New Roman; font-style:italic;">m和l</span>均为八进制数字（0-7），则匹配八进制转义值<span style="font-family:Times New Roman; font-style:italic;">nm</span>l。</td>
    </tr>
    <tr>
      <th style="text-align:center;">\u<span style="font-family:Times New Roman; font-style:italic;">n</span></th>
      <td>匹配<span style="font-family:Times New Roman; font-style:italic;">n</span>，其中<span style="font-family:Times New Roman; font-style:italic;">n</span>是一个用四个十六进制数字表示的Unicode字符。例如，\u00A9匹配版权符号（©）。</td>
    </tr>
  </tbody>
</table>

## 标志（模式）

<table class="standard-table">
 <caption>正则表达式标志</caption>
 <thead>
  <tr>
   <th scope="col" style="white-space: nowrap;">标志</th>
   <th scope="col" style="white-space: nowrap;">描述</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td style="text-align: center;"><code>g</code></td>
   <td>全局搜索。</td>
  </tr>
  <tr>
   <td style="text-align: center;"><code>i</code></td>
   <td>不区分大小写搜索。</td>
  </tr>
  <tr>
   <td style="text-align: center;"><code>m</code></td>
   <td>多行搜索。</td>
  </tr>
  <tr>
   <td style="text-align: center;"><code>s</code></td>
   <td>允许&nbsp;<code>.</code> 匹配换行符。</td>
  </tr>
  <tr>
   <td style="text-align: center;"><code>u</code></td>
   <td>使用unicode码的模式进行匹配。</td>
  </tr>
  <tr>
   <td style="text-align: center;"><code>y</code></td>
   <td>执行“粘性(<code>sticky</code>)”搜索,匹配从目标字符串的当前位置开始。</td>
  </tr>
 </tbody>
</table>

```js
var re = /pattern/flags;
```

```js
var re = new RegExp("pattern", "flags");
```

## 函数

<table class="standard-table">
 <caption>使用正则表达式的方法</caption>
 <thead>
  <tr>
   <th scope="col">方法</th>
   <th scope="col">描述</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" class="one-pan-link-mark"><code>exec</code></a></td>
   <td>一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" class="one-pan-link-mark"><code>test</code></a></td>
   <td>一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/match" class="one-pan-link-mark"><code>match</code></a></td>
   <td>一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/matchAll" class="one-pan-link-mark"><code>matchAll</code></a></td>
   <td>一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search" class="one-pan-link-mark"><code>search</code></a></td>
   <td>一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" class="one-pan-link-mark"><code>replace</code></a></td>
   <td>一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split" class="one-pan-link-mark"><code>split</code></a></td>
   <td>一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 <code>String</code> 方法。</td>
  </tr>
 </tbody>
</table>

## 实用

正则转义

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  //$&表示整个被匹配的字符串
}
```

子匹配引用

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

replace方法的字符串参数

<table class="fullwidth-table">
 <tbody>
  <tr>
   <td class="header">变量名</td>
   <td class="header">代表的值</td>
  </tr>
  <tr>
   <td><code>$$</code></td>
   <td>插入一个 "$"。</td>
  </tr>
  <tr>
   <td><code>$&amp;</code></td>
   <td>插入匹配的子串。</td>
  </tr>
  <tr>
   <td><code>$`</code></td>
   <td>插入当前匹配的子串左边的内容。</td>
  </tr>
  <tr>
   <td><code>$'</code></td>
   <td>插入当前匹配的子串右边的内容。</td>
  </tr>
  <tr>
   <td style="white-space: nowrap;"><code>$<em>n</em></code></td>
   <td>
    <p>假如第一个参数是 <a href="/zh-CN/docs/Web/JavaScript/Reference/RegExp" class="one-pan-link-mark"><code>RegExp</code></a>对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从1开始</p>
   </td>
  </tr>
 </tbody>
</table>

replace方法的第二个参数如果是function

<table class="fullwidth-table">
 <tbody>
  <tr>
   <td class="header">变量名</td>
   <td class="header">代表的值</td>
  </tr>
  <tr>
   <td><code>match</code></td>
   <td>匹配的子串。（对应于上述的$&amp;。）</td>
  </tr>
  <tr>
   <td><code>p1,p2, ...</code></td>
   <td>
    <p>假如replace()方法的第一个参数是一个<a href="/zh-CN/docs/Web/JavaScript/Reference/RegExp" class="one-pan-link-mark"><code>RegExp</code></a> 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 <code>/(\a+)(\b+)/</code> 这个来匹配，<code>p1</code> 就是匹配的 <code>\a+</code>，<code>p2</code> 就是匹配的 <code>\b+</code>。</p>
   </td>
  </tr>
  <tr>
   <td><code>offset</code></td>
   <td>
    <p>匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 <code>'abcd'</code>，匹配到的子字符串是 <code>'bc'</code>，那么这个参数将会是 1）</p>
   </td>
  </tr>
  <tr>
   <td><code>string</code></td>
   <td>被匹配的原字符串。</td>
  </tr>
  <tr>
   <td>NamedCaptureGroup</td>
   <td>命名捕获组匹配的对象</td>
  </tr>
 </tbody>
</table>

Emoji

```js
const moods = 'happy 🙂, confused 😕, sad 😢';
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons));
```

<table class="wikitable" width="100%">
  <tbody><tr>
    <th width="10%">用户名</th>
    <td width="90%">/^[a-z0-9_-]{3,16}$/</td>
  </tr>
  <tr>
    <th scope="row">密码</th>
    <td>/^[a-z0-9_-]{6,18}$/</td>
  </tr>
  <tr>
    <th scope="row">十六进制值</th>
    <td>/^#?([a-f0-9]{6}|[a-f0-9]{3})$/</td>
  </tr>
  <tr>
    <th scope="row">电子邮箱</th>
    <td>/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/<br>
  /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/</td>
  </tr>
  <tr>
    <th scope="row">URL</th>
    <td>/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/</td>
  </tr>
  <tr>
    <th scope="row">IP 地址</th>
    <td>/((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/<br>/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/</td>
  </tr>
  <tr>
    <th scope="row">HTML 标签</th>
    <td>/^&lt;([a-z]+)([^&lt;]+)*(?:&gt;(.*)&lt;\/\1&gt;|\s+\/&gt;)$/</td>
  </tr>
  <tr>
    <th scope="row">删除代码\\注释</th>
    <td>(?&lt;!http:|\S)//.*$</td>
  </tr>
<!--  <tr>
    <th scope="row">&nbsp;</th>
    <td>&nbsp;</td>
  </tr>-->
  <tr>
    <th scope="row">Unicode编码中的汉字范围</th>
    <td>/^[\u2E80-\u9FFF]+$/</td>
  </tr>
</tbody></table>