const f=document.getElementById('f'),n=document.getElementById('n'),c=document.getElementById('cnt'),s=document.getElementById('s'),l=document.getElementById('live');
n.oninput=()=>c.textContent=`${n.value.length}/20`;
f.onsubmit=(e)=>{
  e.preventDefault();const val=n.value.trim(),orig=s.textContent;
  s.disabled=n.disabled=true;s.textContent='Loading...';l.textContent='';
  setTimeout(()=>{
    l.textContent=`Hello, ${val}! 🎨`;
    s.disabled=n.disabled=false;s.textContent=orig;s.focus();
  },800);
};
