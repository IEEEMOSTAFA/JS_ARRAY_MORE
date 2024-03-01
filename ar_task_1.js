const colors = ['red', 'blue', 'green', 'yellow', 'orange']
 const rev_colors = [];
 for(let i = 0; i< colors.length ;i++){
    const str = colors[i];
    rev_colors.unshift(str);
 }
 console.log(rev_colors);