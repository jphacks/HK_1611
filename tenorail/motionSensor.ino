boolean PIRpin_state = 0;

const int PIRpin = 4;

int getMotion(){

  PIRpin_state = digitalRead(PIRpin);

  //Serial.println(PIRpin_state);
  
}

