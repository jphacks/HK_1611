boolean PIRpin_state = 0;

const int PIRpin_long = 4;
const int PIRpin_short = 3;

// 0 no motion , 1,long motion, 2, short motion
int getMotion(){

Serial.println(digitalRead(PIRpin_short));

  if(digitalRead(PIRpin_long) == 1){
    return 1;
  }

  if(digitalRead(PIRpin_short) == 1){
    return 2;
  }

  return 0;
}

