#!/bin/sh

tcpdump -i lo -qw - tcp port 25 | xxd
