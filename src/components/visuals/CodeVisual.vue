<template>
  <div class="relative h-full w-full overflow-hidden rounded-xl border border-border bg-card">
    <div class="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
      <div class="h-2.5 w-2.5 rounded-full bg-muted" />
      <div class="h-2.5 w-2.5 rounded-full bg-muted" />
      <div class="h-2.5 w-2.5 rounded-full bg-muted" />
      <span class="ml-3 font-mono text-[11px] text-muted-foreground">match.ex</span>
    </div>
    <pre class="w-full overflow-hidden p-5 font-mono text-[12px] leading-relaxed"><span class="text-muted-foreground">  1</span> <span :style="{ color: 'var(--brand-purple)' }">defmodule</span> <span class="text-foreground">ExileWork.Match</span> <span :style="{ color: 'var(--brand-purple)' }">do</span>
<span class="text-muted-foreground">  2</span>   <span :style="{ color: 'var(--brand-blue)' }">use</span> <span class="text-foreground">GenServer</span>
<span class="text-muted-foreground">  3</span>
<span class="text-muted-foreground">  4</span>   <span :style="{ color: 'var(--brand-purple)' }">def</span> <span :style="{ color: 'var(--brand-blue)' }">handle_info</span>(<span class="text-foreground">{:tick, dt}</span>, state) <span :style="{ color: 'var(--brand-purple)' }">do</span>
<span class="text-muted-foreground">  5</span>     state
<span class="text-muted-foreground">  6</span>     |&gt; <span :style="{ color: 'var(--brand-green)' }">simulate</span>(dt)
<span class="text-muted-foreground">  7</span>     |&gt; <span :style="{ color: 'var(--brand-green)' }">broadcast</span>()
<span class="text-muted-foreground">  8</span>     |&gt; <span :style="{ color: 'var(--brand-green)' }">schedule_next</span>()
<span class="text-muted-foreground">  9</span>   <span :style="{ color: 'var(--brand-purple)' }">end</span>
<span class="text-muted-foreground"> 10</span> <span :style="{ color: 'var(--brand-purple)' }">end</span><span class="animate-blink text-brand-blue">▍</span></pre>
  </div>
</template>
