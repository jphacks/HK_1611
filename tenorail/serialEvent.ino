String judge = "";
String rgb = "";

int count = 0;
int r_point = 0;
int g_point = 0;
int b_point = 0;



void getStatus() {

  char input[1];

  int rgb_int;

  if (Serial.available() > 0) {
    input[0] = Serial.read();
    if (input[0] != '.' && input[0] != '¥n') {
      judge = judge + String(input[0]);
      rgb = rgb + String(input[0]);
    }

    if (input[0] == ',') {
  int rgb_int = rgb.toInt();
      if (count == 0) {
        r[r_point] = rgb_int;
        r_point = r_point + 1;
        count = count + 1;
      }else if (count == 1) {
        g[g_point] = rgb_int;
        g_point = g_point + 1;
        count = count + 1;
      }else if (count == 2) {
        b[b_point] = rgb_int;
        b_point = b_point + 1;
        count = 0;
      }
    }

    //末尾文字
    if (input[0] == '.') {
      // 末尾に終端文字の挿入

      // 受信文字列を送信
      Serial.println(judge);

      status = judge;
      judge = "";
    }
  }
}
