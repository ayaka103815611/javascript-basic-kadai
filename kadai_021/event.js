const btn= document.getElementById('btn');
const text =document.getElementById('text');


btn.addEventListener('click',()=>{
  setTimeout(()=> {
    text.textContent='ボタンをクリックしました';
  },2000);
});

// 元々あった、'ボタンをクリックしてください'の文字はなぜ消えたのか？textContentは、文字を追加する機能ではないのか？