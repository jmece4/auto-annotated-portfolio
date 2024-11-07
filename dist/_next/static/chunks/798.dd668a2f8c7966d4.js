(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798,303],{7484:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",s="week",a="month",i="quarter",u="year",o="date",c="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},f="en",m={};m[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var p="$isDayjsObject",b=function(e){return e instanceof g||!(!e||!e[p])},v=function e(t,n,r){var s;if(!t)return f;if("string"==typeof t){var a=t.toLowerCase();m[a]&&(s=a),n&&(m[a]=n,s=a);var i=t.split("-");if(!s&&i.length>1)return e(i[0])}else{var u=t.name;m[u]=t,s=u}return!r&&s&&(f=s),s||!r&&f},x=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new g(n)},$={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(r,a),i=n-s<0,u=t.clone().add(r+(i?-1:1),a);return+(-(r+(n-s)/(i?s-u:u-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:a,y:u,w:s,d:"day",D:o,h:r,m:n,s:t,ms:e,Q:i})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};$.l=v,$.i=b,$.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var g=function(){function h(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var s=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return $},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return x(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<x(e)},f.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,i){var c=this,l=!!$.u(i)||i,d=$.p(e),h=function(e,t){var n=$.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return l?n:n.endOf("day")},f=function(e,t){return $.w(c.toDate()[e].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},m=this.$W,p=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return l?h(1,0):h(31,11);case a:return l?h(1,p):h(0,p+1);case s:var x=this.$locale().weekStart||0,g=(m<x?m+7:m)-x;return h(l?b-g:b+(6-g),p);case"day":case o:return f(v+"Hours",0);case r:return f(v+"Minutes",1);case n:return f(v+"Seconds",2);case t:return f(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(s,i){var c,l=$.p(s),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[o]=d+"Date",c[a]=d+"Month",c[u]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[l],f="day"===l?this.$D+(i-this.$W):i;if(l===a||l===u){var m=this.clone().set(o,1);m.$d[h](f),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[$.p(e)]()},f.add=function(e,i){var o,c=this;e=Number(e);var l=$.p(i),d=function(t){var n=x(c);return $.w(n.date(n.date()+Math.round(t*e)),c)};if(l===a)return this.set(a,this.$M+e);if(l===u)return this.set(u,this.$y+e);if("day"===l)return d(1);if(l===s)return d(7);var h=((o={})[n]=6e4,o[r]=36e5,o[t]=1e3,o)[l]||1,f=this.$d.getTime()+e*h;return $.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",s=$.z(this),a=this.$H,i=this.$m,u=this.$M,o=n.weekdays,l=n.months,h=n.meridiem,f=function(e,n,s,a){return e&&(e[n]||e(t,r))||s[n].slice(0,a)},m=function(e){return $.s(a%12||12,e,"0")},p=h||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return $.s(t.$y,4,"0");case"M":return u+1;case"MM":return $.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,l,3);case"MMMM":return f(l,u);case"D":return t.$D;case"DD":return $.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(n.weekdaysMin,t.$W,o,2);case"ddd":return f(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return $.s(a,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(a,i,!0);case"A":return p(a,i,!1);case"m":return String(i);case"mm":return $.s(i,2,"0");case"s":return String(t.$s);case"ss":return $.s(t.$s,2,"0");case"SSS":return $.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,o,c){var l,d=this,h=$.p(o),f=x(e),m=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,b=function(){return $.m(d,f)};switch(h){case u:l=b()/12;break;case a:l=b();break;case i:l=b()/3;break;case s:l=(p-m)/6048e5;break;case"day":l=(p-m)/864e5;break;case r:l=p/36e5;break;case n:l=p/6e4;break;case t:l=p/1e3;break;default:l=p}return c?l:$.a(l)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=v(e,t,!0);return r&&(n.$L=r),n},f.clone=function(){return $.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),y=g.prototype;return x.prototype=y,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",a],["$y",u],["$D",o]].forEach(function(e){y[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,g,x),e.$i=!0),x},x.locale=v,x.isDayjs=b,x.unix=function(e){return x(1e3*e)},x.en=m[f],x.Ls=m,x.p={},x},e.exports=t()},3703:function(e,t,n){"use strict";n.d(t,{aU:function(){return r.Z},Xd:function(){return o},rU:function(){return c.Z},g_:function(){return h}});var r=n(3748),s=n(5893);n(7294);var a=n(3967),i=n.n(a),u=n(9784);function o(e){let{url:t,className:n,backgroundSize:r,backgroundPosition:a,backgroundRepeat:o,opacity:c}=e;return t?(0,s.jsx)("div",{className:i()("fixed","inset-0",(0,u.G)({backgroundSize:null!=r?r:"cover",backgroundPosition:null!=a?a:"center",backgroundRepeat:null!=o?o:"no-repeat"}),n),style:{backgroundImage:"url('".concat(t,"')"),opacity:(null!=c?c:100)*.01}}):null}var c=n(9634),l=n(809),d=n(863);function h(e){let{elementId:t,className:n,label:r,altText:a,url:u,icon:o="facebook"}=e,h=l.q[o];return(0,s.jsx)(d.M,{content:e,children:(0,s.jsxs)(c.Z,{href:u,"aria-label":a,id:t||null,className:i()("sb-component","sb-component-block","sb-component-social",n),children:[r&&(0,s.jsx)("span",{className:"sr-only",children:r}),h&&(0,s.jsx)(h,{className:"fill-current h-5 w-5"})]})})}},9340:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893);n(7294);var s=n(3967),a=n.n(s),i=n(863);function u(e){let{elementId:t,className:n,url:s,altText:u=""}=e;return s?(0,r.jsx)(i.M,{content:e,children:(0,r.jsx)("img",{id:t||null,className:a()("sb-component","sb-component-block","sb-component-image-block",n),src:s,alt:u})}):null}},9798:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),s=n(2303);function a(e){return(0,r.jsx)(s.default,{...e})}},2303:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893);n(7294);var s=n(3967),a=n.n(s),i=n(7484),u=n.n(i),o=n(9784),c=n(8906),l=n(3703),d=n(9340),h=n(3552);function f(e){let{type:t,elementId:n,colors:s,variant:i,title:u,subtitle:l,actions:d=[],posts:h=[],showDate:f,showAuthor:b,showExcerpt:v,showFeaturedImage:x,showReadMoreLink:$,styles:g={}}=e;return(0,r.jsxs)(c.Z,{type:t,elementId:n,colors:s,styles:g.self,children:[u&&(0,r.jsx)("h2",{className:a()(g.title?(0,o.G)(g.title):null),children:u}),l&&(0,r.jsx)("p",{className:a()("text-lg","sm:text-xl",g.subtitle?(0,o.G)(g.subtitle):null,{"mt-6":u}),children:l}),(0,r.jsx)(p,{variant:i,posts:h,showDate:f,showAuthor:b,showExcerpt:v,showFeaturedImage:x,showReadMoreLink:$,hasTopMargin:!!(u||l)}),(0,r.jsx)(m,{actions:d,styles:g.actions})]})}function m(e){let{actions:t=[],styles:n={}}=e;return 0===t.length?null:(0,r.jsx)("div",{className:"mt-10 overflow-x-hidden",children:(0,r.jsx)("div",{className:a()("flex","flex-wrap","items-center","-mx-2",(0,o.G)(n)),children:t.map((e,t)=>(0,r.jsx)(l.aU,{...e,className:"my-2 mx-2 lg:whitespace-nowrap"},t))})})}function p(e){let{variant:t="variant-a"}=e;switch(t){case"variant-a":case"variant-b":case"variant-c":return(0,r.jsx)(b,{...e});case"variant-d":return(0,r.jsx)(v,{...e});default:return null}}function b(e){let{variant:t="variant-a",posts:n=[],showDate:s,showAuthor:i,showExcerpt:u,showFeaturedImage:o,showReadMoreLink:c,hasTopMargin:f}=e;return 0===n.length?null:(0,r.jsx)("div",{className:a()("grid","gap-y-12",{"md:grid-cols-2":"variant-a"===t,"md:grid-cols-3":"variant-b"===t,"justify-center":"variant-c"===t,"gap-x-6 lg:gap-x-8":"variant-a"===t||"variant-b","mt-12":f}),children:n.map((e,t)=>(0,r.jsx)(l.rU,{href:e,className:"sb-post-feed-item block group",children:(0,r.jsxs)("article",{className:"border-b border-current pb-10 max-w-3xl",children:[o&&e.featuredImage&&(0,r.jsx)("div",{className:"h-0 w-full mb-6 pt-2/3 relative overflow-hidden",children:(0,r.jsx)(d.default,{...e.featuredImage,className:"absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"})}),(0,r.jsx)(x,{showDate:s,showAuthor:i,date:e.date,author:e.author,className:"mb-3"}),(0,r.jsx)("h3",{children:e.title}),u&&e.excerpt&&(0,r.jsx)("p",{className:"text-lg mt-5",children:e.excerpt}),c&&(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsxs)("span",{className:"sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon",children:[(0,r.jsx)("span",{className:"sr-only",children:"Read more"}),(0,r.jsx)(h.Z,{className:"fill-current h-5 w-5"})]})})]})},t))})}function v(e){let{posts:t=[],showDate:n,showAuthor:s,showExcerpt:i,showFeaturedImage:u,showReadMoreLink:o,hasTopMargin:c}=e;return 0===t.length?null:(0,r.jsx)("div",{className:a()("grid","gap-y-12",{"mt-12":c}),children:t.map((e,t)=>(0,r.jsx)(l.rU,{href:e,className:"sb-post-feed-item block group",children:(0,r.jsx)("article",{className:"border-b border-current pb-10 md:pb-12 md:px-4",children:(0,r.jsxs)("div",{className:"md:flex md:items-center",children:[u&&e.featuredImage&&(0,r.jsx)("div",{className:"mb-8 md:shrink-0 md:self-stretch md:w-48 md:mb-0 md:mr-8",children:(0,r.jsx)("div",{className:"h-0 w-full pt-2/3 relative overflow-hidden md:h-24 md:min-h-full md:pt-0",children:(0,r.jsx)(d.default,{...e.featuredImage,className:"absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"})})}),(0,r.jsxs)("div",{className:a()("md:grow",u&&e.featuredImage?null:"md:ml-12"),children:[(0,r.jsx)(x,{showDate:n,showAuthor:s,date:e.date,author:e.author,className:"mb-3"}),(0,r.jsx)("h3",{children:e.title}),i&&e.excerpt&&(0,r.jsx)("p",{className:"text-lg mt-5",children:e.excerpt})]}),o&&(0,r.jsx)("div",{className:"mt-8 md:mt-0 md:mx-8",children:(0,r.jsxs)("span",{className:"sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon",children:[(0,r.jsx)("span",{className:"sr-only",children:"Read more"}),(0,r.jsx)(h.Z,{className:"fill-current h-5 w-5 md:h-8 md:w-8"})]})})]})})},t))})}function x(e){let{showDate:t,showAuthor:n,date:s,author:a,className:i=""}=e;return t||n&&a?(0,r.jsxs)("div",{className:i,children:[t&&(0,r.jsx)("time",{dateTime:u()(s).format("YYYY-MM-DD HH:mm:ss"),children:u()(s).format("MM-DD-YYYY")}),n&&a&&(0,r.jsxs)(r.Fragment,{children:[t&&" | ",(0,r.jsxs)("span",{children:[a.firstName&&(0,r.jsx)("span",{children:a.firstName})," ",a.lastName&&(0,r.jsx)("span",{children:a.lastName})]})]})]}):null}},8906:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893);n(7294);var s=n(3967),a=n.n(s),i=n(9784);function u(e){let{backgroundSize:t="full",...n}=e;return"inset"===t?(0,r.jsx)(o,{...n}):(0,r.jsx)(c,{...n})}function o(e){var t,n,s,u;let{type:o,elementId:c,colors:l="colors-f",styles:d={},children:h}=e,f=o&&o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();return(0,r.jsx)("div",{id:c||null,className:a()("sb-component","sb-component-section",f&&"sb-component-".concat(f),"flex",(0,i.G)({justifyContent:null!==(t=d.justifyContent)&&void 0!==t?t:"center"}),d.margin),children:(0,r.jsx)("div",{className:a()(l,"flex","flex-col","justify-center","relative","w-full",(0,i.G)({width:null!==(n=d.width)&&void 0!==n?n:"wide"}),(0,i.G)({height:null!==(s=d.height)&&void 0!==s?s:"auto"}),null!==(u=d.padding)&&void 0!==u?u:"py-12 px-4",d.borderColor,d.borderStyle?(0,i.G)({borderStyle:d.borderStyle}):null,d.borderRadius?(0,i.G)({borderRadius:d.borderRadius}):null),style:{borderWidth:d.borderWidth?"".concat(d.borderWidth,"px"):null},children:(0,r.jsx)("div",{className:"relative w-full",children:h})})})}function c(e){var t,n,s,u;let{type:o,elementId:c,colors:l="colors-f",styles:d={},children:h}=e,f=o&&o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();return(0,r.jsx)("div",{id:c||null,className:a()("sb-component","sb-component-section",f&&"sb-component-".concat(f),l,"flex","flex-col","justify-center",(0,i.G)({height:null!==(t=d.height)&&void 0!==t?t:"auto"}),d.margin,null!==(n=d.padding)&&void 0!==n?n:"py-12 px-4",d.borderColor,d.borderStyle?(0,i.G)({borderStyle:d.borderStyle}):null,d.borderRadius?(0,i.G)({borderRadius:d.borderRadius}):null),style:{borderWidth:d.borderWidth?"".concat(d.borderWidth,"px"):null},children:(0,r.jsx)("div",{className:a()("flex","w-full",(0,i.G)({justifyContent:null!==(s=d.justifyContent)&&void 0!==s?s:"center"})),children:(0,r.jsx)("div",{className:a()("relative","w-full",(0,i.G)({width:null!==(u=d.width)&&void 0!==u?u:"wide"})),children:h})})})}}}]);