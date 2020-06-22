#!/bin/sh

set -e


cd `dirname $0`/../gadget
zip -r -9 -v ../htSClockA_plus.gadget * > /dev/null
