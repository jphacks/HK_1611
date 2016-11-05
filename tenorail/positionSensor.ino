#define POSITION_PIN  (0)
#define VALUE_1   (0)
#define POSITION_1  (-1)
#define VALUE_2   (1023)
#define POSITION_2  (13)

int getPosition(){

int positionValue = analogRead( POSITION_PIN );

  Serial.println(map(positionValue, VALUE_1, VALUE_2, POSITION_1, POSITION_2));

 return map(positionValue, VALUE_1, VALUE_2, POSITION_1, POSITION_2); 
   
}

