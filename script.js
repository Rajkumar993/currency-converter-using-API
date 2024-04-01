const from=document.getElementById('from')
const to=document.getElementById('to');
const btn=document.getElementById('btn')
const inp=document.getElementById('inp')
const oup=document.getElementById('oup')
fetch('https://api.frankfurter.app/latest')
.then((res)=>res.json()).then((res)=>convert(res))


function convert(res){
  let keys=Object.keys(Object.values(res)[3]);
 
  for(let i=0;i<keys.length;i++){
     const curr1=document.createElement('option')
     const curr2=document.createElement('option')
     curr1.value=keys[i];
     curr2.value=keys[i];
     curr1.innerHTML=keys[i];
     curr2.innerHTML=keys[i];
        from.appendChild(curr1);
        to.appendChild(curr2)      
  }

}
btn.addEventListener('click',()=>{
  let one=from.value;
  let two=to.value;
  let three=inp.value
  if(three==''){
 alert('please enter a numbeer to convert')
  }
  else if(one===two){
    alert('change value')
  }
  else{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${three}&from=${one}&to=${two}`)
      .then(resp => resp.json())
      .then((data) => {
      oup.value=Object.values(data.rates)[0]
      });
  }

})

