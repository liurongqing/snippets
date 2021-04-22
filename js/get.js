const get = (from, ...selectors) => [...selectors].map((s) => 
s.replace(/\[\]/g, '.$1.')
)
