#define SENSORPIN  (0)
#define VALUE_1   (0)
#define POSITION_1  (0.0)
#define VALUE_2   (1023)
#define POSITION_2  (20.0)

void setup() {
  // put your setup code here, to run once:
 Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:

   int positionValue = analogRead( SENSORPIN );
   int dPosition = map(positionValue,VALUE_1,VALUE_2,POSITION_1,POSITION_2); 
  Serial.println(dPosition);

}
