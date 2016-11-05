#define POSITION_PIN_LONG  (0)
#define POSITION_PIN_SHORT (1)
#define VALUE_1   (0)
#define VALUE_2   (1023)
#define POSITION_SHORT_MIN  (0)
#define POSITION_SHORT_MAX  (12)
#define POSITION_LONG_MIN  (12)
#define POSITION_LONG_MAX  (24)

int getPosition(){

int positionLongValue = analogRead( POSITION_PIN_LONG );

if(positionLongValue >= 12){
  positionLongValue = map(positionLongValue, VALUE_1, VALUE_2, POSITION_LONG_MIN, POSITION_LONG_MAX);
  Serial.println(positionLongValue);
   return positionLongValue;
}

int positionShortValue = analogRead( POSITION_PIN_SHORT);

if(positionShortValue != 0){
  positionShortValue = map(positionShortValue, VALUE_1, VALUE_2, POSITION_SHORT_MIN, POSITION_SHORT_MAX);

 Serial.println(abs(positionShortValue - 11));
   return abs(positionShortValue - 11);
}

    return -1; 
}

