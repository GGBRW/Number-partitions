function c(num,it) {
  const combinations = [];
  (const f = (num,it,pos = 1,list = []) => {
    for(let i = Math.max(0, num - 7 * (it - pos)); i <= Math.min(num,7); ++i) {
      it == pos ? combinations.push([...list,i].join('')) : f(num-i,it,pos+1,[...list,i])
    }
  })(num,it);
  return combinations;
}
