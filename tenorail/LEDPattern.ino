int caterpillar_position = 0;
int prev_touch_position = 0;

void ripple(int touch_position) {

  if (touch_position >= 0) {
    int led_front = touch_position;
    int led_rear = touch_position;

    for (int i = 0; i <= NUMPIXELS + 5; i++) {

      turnOn(touch_position + i, 55, 55, 55, 0);

      turnOn(touch_position - i, 55, 55, 55, 50);

      if (touch_position + i - led_front > 5) {
        turnOff(led_front, 0);
        led_front++;
      }

      if (touch_position - i - led_rear < -5) {
        turnOff(led_rear, 0);
        led_rear--;
      }
    }
  }
}

void caterpillar(int touch_position) {
  if (touch_position >= 0) {

    if (!begin_flag) {
        turnOn(0, 0, 55, 0, 0);
        turnOn(1, 0, 55, 0, 0);
        turnOn(2, 0, 55, 0, 0);
        turnOn(3, 0, 55, 0, 0);
        turnOn(4, 55, 0, 0, 0);
      
      begin_flag = true;
    }

    if (touch_position - prev_touch_position > 0) {
      for (int i = 0; i < touch_position - prev_touch_position; i++) {
        turnOff(caterpillar_position + i - 1,0);
        turnOn(caterpillar_position + i, 0, 55, 0, 0);
        turnOn(caterpillar_position + i+1, 0, 55, 0, 0);
        turnOn(caterpillar_position + i+2, 0, 55, 0, 0);
        turnOn(caterpillar_position + i+3, 0, 55, 0, 0);
        turnOn(caterpillar_position + i+4, 55, 0, 0, 30);
      }
      caterpillar_position = touch_position;
      prev_touch_position = touch_position;
    }
  }
}

void touchTurnOff(int touch_position) {
{
    if (!begin_flag) {
      allTurnOn(55, 55, 55);
      begin_flag = true;
    }
  }

  for (int i = 0; i <= 2; i++) {
    turnOff(touch_position + i, 0);
    turnOff(touch_position - i, 0);
  }

}

void turnOn(int pixel, int r , int g, int b, int delayval) {
  pixels.setPixelColor(pixel, pixels.Color(r, g, b));
  pixels.show();
  delay(delayval);
}

void turnOff(int pixel, int delayval) {
  pixels.setPixelColor(pixel, pixels.Color(0, 0, 0));
  pixels.show();
  delay(delayval);
}

void allTurnOn(int r , int g, int b) {
  for (int i = 0; i <= NUMPIXELS; i++) {
    turnOn(i, r, g, b, 0);
  }
}

void allTurnOff() {
  for (int i = 0; i <= NUMPIXELS; i++) {
    turnOff(i, 0);
  }
}

