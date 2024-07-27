let card = 1; // 場にあるトランプのカード番号

function High_Low(Hi_L) {
  let Result = ""; // 勝ち負けの結果を初期化

  // 表示前のカードを設定
  document.getElementById("Card_img_Before").src = `images/${card}.png`;

  // ハイアンドロー用のランダムカード番号を決定
  let trump = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
  let trump_n = Math.floor(Math.random() * 13) + 1;

  // 勝敗を判定
  if (card < trump[trump_n]) {
    Hi_L === 0 ?
     (Result ="　LOWを選んで、あなたの<span class='lose'>『 負け 』</span>",
      document.getElementById("dealer_image").src = "images/win_crown.jpg"):
     (Result ="　HIGHを選んで、あなたの<span class='win'>【 勝ち 】</span>",
      document.getElementById("dealer_image").src = "images/lose_crown.jpg");
  } else if (card > trump[trump_n]) {
    Hi_L === 0 ? 
    (Result ="　LOWを選んで、あなたの<span class='win'>【 勝ち 】</span>",
      document.getElementById("dealer_image").src = "images/lose_crown.jpg"):
    (Result ="　HIGHを選んで、あなたの<span class='lose'>『 負け 』</span>",
      document.getElementById("dealer_image").src = "images/win_crown.jpg");
  } else {
    Result = "引き分け！！";
    document.getElementById("dealer_image").src = `images/dealer_crown.jpg`;
  }

  // 表示後のカードを設定
  document.getElementById("Card_img_After").src = `images/${trump_n}.png`;

  // 結果を表示
  document.getElementById("After").innerHTML = `伏せカードは${trump[trump_n]} ${Result}<br />次のカードが今の数字より高いか低いか考えてみよう！`;
  document.getElementById("Before").innerHTML = `場にあるカードは${card}`;

  // 場にあるカードを更新
  card = trump[trump_n];
}