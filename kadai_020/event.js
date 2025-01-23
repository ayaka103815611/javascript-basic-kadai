const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',()=> {
  text.textContent='ボタンをクリックしました'
});

// 元々あった、'ボタンをクリックしてください'の文字はなぜ消えたのか？textContentは、文字を追加する機能ではないのか？