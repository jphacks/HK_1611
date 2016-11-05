
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
#include <avr/power.h>
#endif

// LEDテープ
#define LED_PIN            7
#define NUMPIXELS      24
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

//LEDの光らせ方
String status = "Caterpillar";
String prev_status = "";
bool begin_flag = false;

void setup() {

#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif

  Serial.begin(9600);

  pixels.begin();
  allTurnOff();
}

void loop() {

  getStatus();

  int dPosition = getPosition();

if(prev_status != status){
  allTurnOff();
  begin_flag = false;
}

if(status == "Hamon"){
  ripple(dPosition);
}else if(status == "Caterpillar"){
  caterpillar(dPosition);
}else if(status == "Touch") {
  touchTurnOff(dPosition);
}

prev_status = status;
}
