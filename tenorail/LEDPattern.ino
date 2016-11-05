void ripple(int touch_position) {

  if (touch_position >= 0) {
    int led_front = touch_position;
    int led_rear = touch_position;


    for (int i = 0; i <= NUMPIXELS + 5; i++) {

      turnOn(touch_position + i, 155,0,0, 0);

      turnOn(touch_position - i, 155,0,0, 50);

      if (touch_position + i - led_front > 5) {
        turnOn(led_front, 0, 0, 0 ,0);
        led_front++;
      }

      if (touch_position - i - led_rear < -5) {
        turnOn(led_rear, 0, 0, 0 ,0);   
        led_rear--;
      }
    }
  }
}

void turnOn(int pixel,int r , int g, int b,int delayval){
  pixels.setPixelColor(pixel, pixels.Color(r,g,b)); 
  pixels.show();
  delay(delayval);
}
