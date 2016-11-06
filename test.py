# -*- coding: utf-8 -*-
import serial
import time
import sys

param = sys.argv

ser = serial.Serial('/dev/ttyACM0', 9600)
time.sleep(2)

ser.write(param[1])

ser.close()

