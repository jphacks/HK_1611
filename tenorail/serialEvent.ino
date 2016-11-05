String judge = "";

void getStatus(){

  char input[1];

  if (Serial.available() > 0) {
    input[0] = Serial.read();
    if (input[0] != '.') {
      judge = judge + String(input[0]);
    }
    //末尾文字
    if (input[0] == '.') {
      // 末尾に終端文字の挿入
      judge = judge + String('\n');

      // 受信文字列を送信
      Serial.print(judge);

      status = judge;
      String judge = "";
    }
  }
}
